
dragElement(document.getElementById("button"));

function dragElement(elmnt) {

    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    elmnt.onmousedown = dragMouseDown;


    function dragMouseDown(e) {

        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        //console.log('03: heigth: %s - width: %s', window.innerHeight, window.innerWidth)

        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";

        var body = document.getElementById("body");
        if (elmnt.offsetTop < 0 || (elmnt.offsetTop + 58) > window.innerHeight || elmnt.offsetLeft < 0 || (elmnt.offsetLeft + 58) > window.innerWidth) {
            body.style.background = "#FF0000";
        } else if (elmnt.offsetTop > 0 || elmnt.offsetTop < window.innerHeight || elmnt.offsetLeft > 0 || elmnt.offsetLeft < window.innerWidth) {
            body.style.background = "#FFFFFF";
        }

        console.log("offsetTop :", elmnt.offsetTop, " offsetLeft: ", elmnt.offsetLeft);
        console.log("heigth:", window.innerHeight, " width: ", window.innerWidth)
        //console.log("pos1: ", pos1, "pos2: ", pos2, "pos3: ", pos3, "pos4: ", pos4);
    }

    function closeDragElement() {
        /* stop moving when mouse button is released:*/
        document.onmouseup = null;
        document.onmousemove = null;
    }
}
