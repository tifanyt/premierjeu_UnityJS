#pragma strict


import UnityEngine.UI;

static var musOff : int = 0;

function OnMouseOver () {
    if(Input.GetMouseButtonDown(0))
    {
       if(musOff == 0)
        {
            musOff = 1;
        }
        else if(musOff == 1)
        {
            musOff = 0;
        }
        
    }
}
