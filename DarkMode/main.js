let mode = 'dark';
function switchMode(){
    if(mode == 'dark'){
        mode = 'white';
        document.body.style.background = 'grey';
        document.getElementById('mode').style.background = 'url("darkmode-split1.jpg")';
    } else {
        document.body.style.background = 'black';
        mode = 'dark';
        document.getElementById('mode').style.background = 'url("darkmode-split.jpg")';
    }
}