function choose(){
    let brown=document.getElementById('brown').value;
    switch (brown) {
        case 'Edge':alert('You\'ve got the Edge!');
            break;
        case 'Chrome':
        case 'Firefox':
        case 'Safari':
        case 'Opera':
            alert('Okay we support these browsers too');
            break;
        default:
            alert('We hope that this page looks ok!');



    }
}