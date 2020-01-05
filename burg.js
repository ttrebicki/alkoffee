function burg() {

  let lineZero = document.getElementById("line0");
  let lineOne = document.getElementById("line1");
  let lineTwo = document.getElementById("line2");
  let lineThree = document.getElementById("line3");
  let lineFour = document.getElementById("line4");
  let lineFive = document.getElementById("line5");

  let burgeonTwo = document.getElementById("burgeon_2");
  let burgeonThree = document.getElementById("burgeon_3");
  let burgeonFour = document.getElementById("burgeon_4");
  let burgeonFive = document.getElementById("burgeon_5");
  let burgeonSix = document.getElementById("burgeon_6");

  let menuCaptions = document.getElementsByClassName("menu_caption");

/* galaz 0 */

if (lineZero.getAttribute("x2") == 0) {

  let lineX = 0;

  let anim = setInterval(frame, 10);

 function frame() {

   if (lineX == 50) {

     clearInterval(anim);

   }

   else {

     lineX++;
     lineZero.setAttribute("x2", lineX);

   }
 }
}

else {

 let lineX = 50;
 let anim = setInterval(frame, 2);

 function frame() {

   if (lineX == 0) {

     clearInterval(anim);

   }

   else {

     lineX--;
     lineZero.setAttribute("x2", lineX);

     }
   }
 }


/* galaz 0 - KONIEC */

/* pierwsza galaz A - line1 - START */

   if (lineOne.getAttribute("x2") == 25 && lineOne.getAttribute("y2") == 0) {

     let lineX = 25;
     let lineY = 0;
     let anim = setInterval(frame, 10);

    function frame() {

      if (lineX == 0) {

        clearInterval(anim);

      }

      else {

        lineX--;
        lineOne.setAttribute("x2", lineX);

        lineY += 2;
        lineOne.setAttribute("y2", lineY);

      }
    }
  }

  else {

    let lineX = 0;
    let lineY = 50;
    let anim = setInterval(frame, 2);

    function frame() {

      if (lineX == 0 && lineY == 0) {

        clearInterval(anim);

      }

      else {

        if (lineY != 0) {

          lineX++;
          lineOne.setAttribute("x2", lineX);

          lineY -= 2;
          lineOne.setAttribute("y2", lineY);

        }
      }
    }
  }

/* pierwsza galaz A - line1 - KONIEC */

/* pierwsza galaz B - line2 - START */

   if (lineTwo.getAttribute("x2") == 40 && lineTwo.getAttribute("y2") == 0) {

     let lineX = 40;
     let lineY = 0;
     let anim = setInterval(frame, 80);

    function frame() {

      if (lineX == 0) {

        clearInterval(anim);

      }

      else {

        lineX -= 4;
        lineTwo.setAttribute("x2", lineX);

        lineY ++;
        lineTwo.setAttribute("y2", lineY);

      }
    }
  }

  else {

    let lineX = 0;
    let lineY = 10;
    let anim = setInterval(frame, 2);

    function frame() {

      if (lineX == 0 && lineY == 0) {

        clearInterval(anim);

      }

      else {

        if (lineY != 0) {

          lineX += 4; /* zmienic z powrotem na 2.5 */
          lineTwo.setAttribute("x2", lineX);

          lineY --;
          lineTwo.setAttribute("y2", lineY);

        }
      }
    }
  }

/* pierwsza galaz B - line2 - KONIEC */

/* druga galaz - line3 - START */

   if (lineThree.getAttribute("x2") == 35) {

     let lineX = 35;
     let anim = setInterval(frame, 20);

    function frame() {

      if (lineX == 0) {

        clearInterval(anim);

      }

      else {

        lineX--;
        lineThree.setAttribute("x2", lineX);
      }
    }
  }

  else {

    let lineX = 0;
    let anim = setInterval(frame, 2);

    function frame() {

      if (lineX == 35) {

        clearInterval(anim);

      }

      else {


          lineX ++;
          lineThree.setAttribute("x2", lineX);

      }
    }
  }

/* druga galaz - line3 - KONIEC */

/* trzecia galaz - line4 - START */

if (lineFour.getAttribute("x2") == 20 && lineFour.getAttribute("y2") == 40) {

  let lineX = 20;
  let lineY = 40;
  let anim = setInterval(frame, 10);

 function frame() {

   if (lineX == 0) {

     clearInterval(anim);

   }

   else {

     lineX--;
     lineFour.setAttribute("x2", lineX);

     lineY -= 2;
     lineFour.setAttribute("y2", lineY);

   }
 }
}

else {

 let lineX = 0;
 let lineY = 0;
 let anim = setInterval(frame, 2);

 function frame() {

   if (lineX == 20 && lineY == 40) {

     clearInterval(anim);

   }

   else {

     if (lineY != 40) {

       lineX++;
       lineFour.setAttribute("x2", lineX);

       lineY += 2;
       lineFour.setAttribute("y2", lineY);

     }
   }
 }
}

/* trzecia galaz - line4 - KONIEC */

/* trzecia galaz B - line5 - START */

if (lineFive.getAttribute("x2") == 40 && lineFive.getAttribute("y2") == 10) {

  let lineX = 40;
  let lineY = 10;
  let anim = setInterval(frame, 80);

 function frame() {

   if (lineX == 0) {

     clearInterval(anim);

   }

   else {

     lineX -= 4;
     lineFive.setAttribute("x2", lineX);

     lineY--;
     lineFive.setAttribute("y2", lineY);

   }
 }
}

else {

 let lineX = 0;
 let lineY = 0;
 let anim = setInterval(frame, 2);

 function frame() {

   if (lineX == 40 && lineY == 10) {

     clearInterval(anim);

   }

   else {

     if (lineY != 10) {

       lineX += 4;
       lineFive.setAttribute("x2", lineX);

       lineY++;
       lineFive.setAttribute("y2", lineY);

     }
   }
 }
}

/* trzecia galaz B - line5 - KONIEC */

/* animacje przezroczystości */

  if (burgeonTwo.style.opacity == 0) {

/* wszystkie elementy */
      lineOne.style.opacity = 1;
      burgeonTwo.style.opacity = 1;
      lineTwo.style.opacity = 1;
      lineThree.style.opacity = 1;
      burgeonThree.style.opacity = 1;
      lineFour.style.opacity = 1;
      burgeonFour.style.opacity = 1;
      lineFive.style.opacity = 1;
      burgeonFive.style.opacity = 1;
      burgeonSix.style.opacity = 1;

/* burgeon_2 */
      burgeonTwo.style.width = "15px";
      burgeonTwo.style.height = "15px";
      burgeonTwo.style.background = "black";

/* burgeon_3 */
      burgeonThree.style.width = "15px";
      burgeonThree.style.height = "15px";
      burgeonThree.style.background = "black";

  /* burgeon_4 */
      burgeonFour.style.width = "10px";
      burgeonFour.style.height = "10px";
      burgeonFour.style.background = "black";

  /* burgeon_5 */
      burgeonFive.style.width = "10px";
      burgeonFive.style.height = "10px";
      burgeonFive.style.background = "black";

    /* burgeon_6 */
      burgeonSix.style.width = "10px";
      burgeonSix.style.height = "10px";
      burgeonSix.style.background = "black";
    }

  else {

/* wszystkie lineOneenty */
    lineOne.style.opacity = 0;
    lineTwo.style.opacity = 0;
    burgeonTwo.style.opacity = 0;
    lineThree.style.opacity = 0;
    burgeonThree.style.opacity = 0;
    lineFour.style.opacity = 0;
    burgeonFour.style.opacity = 0;
    lineFive.style.opacity = 0;
    burgeonFive.style.opacity = 0;
    burgeonSix.style.opacity = 0;

/* burgeon_2 */
    burgeonTwo.style.width = "0px";
    burgeonTwo.style.height = "0px";
    burgeonTwo.style.background = "white";

/* burgeon_3 */
    burgeonThree.style.width = "0px";
    burgeonThree.style.height = "0px";
    burgeonThree.style.background = "white";

  /* burgeon_4 */
    burgeonFour.style.width = "0px";
    burgeonFour.style.height = "0px";
    burgeonFour.style.background = "white";

  /* burgeon_5 */
    burgeonFive.style.width = "0px";
    burgeonFive.style.height = "0px";
    burgeonFive.style.background = "white";

  /* burgeon_6 */
    burgeonSix.style.width = "0px";
    burgeonSix.style.height = "0px";
    burgeonSix.style.background = "white";
    }

    /*menu captions */
      for (let i = 0; i < menuCaptions.length; i++) {

        if (menuCaptions[i].style.opacity == 0) {

          menuCaptions[i].style.opacity = 1;

        }

        else {

          menuCaptions[i].style.opacity = 0;

        }

      }

}
