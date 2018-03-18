#pragma strict

import UnityEngine.UI;
import UnityEngine.SceneManagement;

var gameOver : GameObject;
var monTitre : GameObject;
var monTempsc : GameObject;
var felicitation : GameObject;
var texteDebut1 : GameObject ;
var texteDebut2 : GameObject ;
var texteDebut3 : GameObject ;
var mesFromages : GameObject;


static var gameO : boolean = false ;
var gagne : boolean = false ;
private var temps : int = 5;
private var chaus : boolean = false ;
private var x : int = 0;
private var nbTouche : int = 0;
private var nbfro : int = 0 ;
static var Cparti : boolean = false;


function Start () {
	monTitre.SetActive(false);
	monTempsc.SetActive(false);
	gameOver.SetActive(false);
	felicitation.SetActive(false);
	texteDebut2.SetActive(false);
	texteDebut3.SetActive(false);
	texteDebut1.SetActive(true);
	
	mesFromages.SetActive(false);
}

function OnMouseOver () {
    
}

function OnTriggerExit(macollision: Collider) {
        monTitre.SetActive(false);
        monTempsc.SetActive(false);
        chaus = false;

    }


 function OnTriggerEnter(macollision: Collider) 
{
	var objetTouche : GameObject = macollision.gameObject;

	if(objetTouche.name=="CubeTest" && gameO!=true && gagne==false)
	{	
		chaus = true ;
		monTitre.SetActive(true);
		monTempsc.SetActive(true);
	}  

}

function Update()
{	
    nbfro = this.GetComponent.<leFromage>().nbrfromages;
    Debug.Log("touche"+nbTouche);
    
	if(chaus == true)
	{	
		x ++;
		if(x==5||x==30||x==55||x==80||x==105||x==130||x==155)
		{
			monTempsc.GetComponent.<Text>().text=""+temps;
			temps--;
		}
		

	}
	else if (chaus == false && gameO == false) 
	{
		temps = 5;
		x=0;
		monTempsc.GetComponent.<Text>().text=""+temps;
		
	}
	
	if (temps == -2)
	{   
	    gameOver.SetActive(true);
	    gameO = true;
	    monTitre.SetActive(false);
	    monTempsc.SetActive(false);
	}

    // debut
	if(Input.GetMouseButtonDown(0))
	{
	    if(nbTouche == 0)
	    {
	        texteDebut1.SetActive(false);
	        texteDebut2.SetActive(true);
	        nbTouche = 1;
	    }
	    else if(nbTouche == 1)
	    {
	        texteDebut2.SetActive(false);
	        texteDebut3.SetActive(true);
	        nbTouche=2;
	    }
	    else if(nbTouche==2)
	    {
	        texteDebut3.SetActive(false);
	        mesFromages.SetActive(true);
	        this.transform.Rotate(Vector3(0,110,0));  
	        Cparti=true;
	        nbTouche =3;
	    }
        
	}

    //gameover
	if(gameO == true)
	{
	    monTempsc.SetActive(false);
	    monTitre.SetActive(false);
	    if(Input.GetMouseButtonDown(0))
	    {
	        gameOver.SetActive(false);
	        SceneManager.LoadScene(SceneManager.GetActiveScene().buildIndex);
	        gameO=false;
	    }
	}
    
}

function OnCollisionEnter(macollision: Collision) 
    {
        var objetTouche : GameObject = macollision.gameObject;

        //Aspi

        Debug.Log("j'ai touche : "+objetTouche.name); //affiche dans la console un texte d'erreur

        if(objetTouche.name=="colAspi" && gagne==false)
        {
            gameOver.SetActive(true);
            gameO = true;
        } 

        //cage
        if(objetTouche.name=="colCage" && gameO!=true && nbfro==7)
        {
            felicitation.SetActive(true);
        } 

    }



