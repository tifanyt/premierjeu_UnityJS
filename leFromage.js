#pragma strict

static var nbrfromages : int =0 ;
var mesFromages : GameObject;
private var gameOv : boolean = false;

function OnCollisionEnter(macollision: Collision) 
    {
        var objetTouche : GameObject = macollision.gameObject;
        gameOv = this.GetComponent.<changeTexte>().gameO;

        if(objetTouche.name=="fromage1" || objetTouche.name=="fromage2" || objetTouche.name=="fromage3" || objetTouche.name=="fromage4" || objetTouche.name=="fromage5" || objetTouche.name=="fromage6" || objetTouche.name=="fromage7")
        {
            Destroy(objetTouche);
            nbrfromages++;
            mesFromages.GetComponent.<Text>().text="Fromages : "+nbrfromages;
        } 
        if (gameOv ==true)
        {
            nbrfromages=0;
        }

    }
