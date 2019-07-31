function Sign() {
    let num=parseInt(document.getElementById('sign').value);
    let bool;
    if(num>0)
    {
        bool=true;
    }
    else if(num<0)
    {
        bool=false;
    }
    else if(num==0)
    {
        bool=null;
    }
    switch (bool) {
        case true:alert('1');
            break;
        case false:alert('-1');
        break;
        case null:
            alert('0');
            break;
    }
    
}