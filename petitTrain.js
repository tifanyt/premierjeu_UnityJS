#pragma strict


private var x : int;
public var BoutonTrain : GameObject ;
private var y : int = 0;



function Update () {
    
   
    x = BoutonTrain.GetComponent.<boutonTrain>().trainOff;
    if(x == 1 && y<400)
    {
        y++;
        this.transform.Translate(Vector3(0,0,-0.4)*Time.deltaTime);
    }
    if(x == 2 && y > 0)
    {
        y--;
        this.transform.Translate(Vector3(0,0,0.4)*Time.deltaTime);
       
    }
    
}