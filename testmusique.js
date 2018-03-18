#pragma strict

private var x : int;
public var telecomande : GameObject ;



function Update () {
    x = telecomande.GetComponent.<Musiques>().musOff;
    if(x == 1)
    {
        
        GetComponent.<AudioSource>().mute = true;
    }
    if(x == 0)
    {
        
        GetComponent.<AudioSource>().mute = false;
    }
}