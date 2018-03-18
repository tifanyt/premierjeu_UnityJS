#pragma strict

private var vitesseDeplacement : float = 4;
private var vitesseRotation : float = 60;
var gameOv : boolean = false;

function Start () {

}

function Update () {
    gameOv = this.GetComponent.<changeTexte>().gameO;
    //avancer la camera
    if(gameOv==false)
    {
        if(Input.GetKey("up")) 
        {
            this.transform.Translate(Vector3(0,0,vitesseDeplacement)*Time.deltaTime);  
            if(Input.GetKey(KeyCode.Space)) 
            {
                vitesseDeplacement = 7; 
            }
            else
            {
                vitesseDeplacement = 4;
            }
        } 
        if(Input.GetKey("down")) 
        {
            this.transform.Translate(Vector3(0,0,-vitesseDeplacement)*Time.deltaTime); 
            if(Input.GetKey(KeyCode.Space)) 
            {
                vitesseDeplacement = 7; 
            }
            else
            {
                vitesseDeplacement = 4;
            }
        } 
        //rotation
        if(Input.GetKey("left")) 
        {
            this.transform.Rotate(Vector3(0,-vitesseRotation,0)*Time.deltaTime);  
        }
        if(Input.GetKey("right")) 
        {
            this.transform.Rotate(Vector3(0,vitesseRotation,0)*Time.deltaTime);  
        }
        
    }
	 
}