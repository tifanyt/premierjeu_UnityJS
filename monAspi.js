#pragma strict


private var y : int = 0;
private var x : int =0;

function Update () {
   
   
    if(y<=130 && x==0)
    {
        y++;
        this.transform.Translate(Vector3(0,0,-3)*Time.deltaTime);
    }
    else if(y>=130 && x==0)
    {
        y=0;
        x=1;
    }
    else if(y<=130 && x==1)
    {
        y++;
        this.transform.Translate(Vector3(0,0,3)*Time.deltaTime);
    }
    else if(y>=130 && x==1)
    {
        y=0;
        x=0;
    }
    
    
}