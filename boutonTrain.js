#pragma strict


import UnityEngine.UI;

static var trainOff : int = 0;

function OnMouseOver () {
    if(Input.GetMouseButtonDown(0))
    {
        if(trainOff == 0 ||trainOff == 2)
        {
            trainOff = 1;
        }
        else if(trainOff == 1)
        {
            trainOff = 2;
        }
        
    }
}