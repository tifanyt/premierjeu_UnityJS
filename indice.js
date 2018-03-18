#pragma strict

private var y : int = 0;

function Update () {

    this.transform.Rotate(Vector3(0,90,0)*Time.deltaTime);  
   
        if(y<=30)
        {
            y++;
            this.transform.Translate(Vector3(0,3,0)*Time.deltaTime);
        }
        else if(y>30 && y<62)
        {
            y++;
            this.transform.Translate(Vector3(0,-3,0)*Time.deltaTime); 
        }
        else if(y>=62)
        {
            y=0;
        }
    

}