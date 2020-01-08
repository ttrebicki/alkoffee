function burg() {

  var lineZero = document.getElementById("line0");
  var lineOne = document.getElementById("line1");
  var lineTwo = document.getElementById("line2");
  var lineThree = document.getElementById("line3");
  var lineFour = document.getElementById("line4");
  var lineFive = document.getElementById("line5");

  var burgeonTwo = document.getElementById("burgeon_2");
  var burgeonThree = document.getElementById("burgeon_3");
  var burgeonFour = document.getElementById("burgeon_4");
  var burgeonFive = document.getElementById("burgeon_5");
  var burgeonSix = document.getElementById("burgeon_6");

  var menuCaptions = document.getElementsByClassName("menu_caption");



/* galaz 0 */
/* końcowy X (x2) linii*/
if (lineZero.getAttribute("x2") == 0) {
/* końcowy X (x2) linii*/
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
// lewo (--) + dół (++), z szybszą/większą zmianą współrzędnej Y. Argumenty: nazwa(lineOne), współrzędne(xEndForward, yEndForward, xEndBackward, yEndBackward)

function leftDownY(lineNum, x2, y2, x1, y1) {

  var xOne, yOne;

  var xTwo = lineNum.getAttribute("x2");
  var yTwo = lineNum.getAttribute("y2");


  var lineX, lineY;

  function frameOne() {
// współrzędne x2 i y2 po zakończeniu animacji:
    if (lineX === x2 && lineY === y2) {

      clearInterval(anim);

    }

    else {
// wzór klatki (dystans pokonany na osi x / dystans pokonany na osi y -> dopasować do odp. przypadków): (w tym: 25 klatek = ilość równa (x1 - x2)
      lineX--;
      lineNum.setAttribute("x2", lineX);

      lineY += (y2 - y1) / (x1 - x2); // wartość końcowa szybciej zmieniającej się wartości / wartość początkowa wolniej (++)
      lineNum.setAttribute("y2", lineY);

    }
  }

  function frameTwo() {
// współrzędne x2 i y2 po zakończeniu animacji powracającej / współrzędne x2 i y2 początkowe (te, które są ustawione w pliku HTML):
    if (lineX === x1 && lineY === y1) {

      clearInterval(anim);

    }

    else {
// wzór klatki (dystans pokonany na osi x / dystans pokonany na osi y -> dopasować do odp. przypadków):
        lineX++;
        lineNum.setAttribute("x2", lineX);

        lineY -= (y2 - y1) / (x1 - x2);
        lineNum.setAttribute("y2", lineY);

    }
  }

  var anim;
// współrzędne x2 i y2 po zakończeniu animacji powracającej / współrzędne x2 i y2 początkowe (te, które są ustawione w pliku HTML):
  if (document.getElementById("test").innerHTML != "1,1" || lineNum.hasAttribute("x2") == false || lineNum.hasAttribute("y2") == false) {

// współrzędne x2 i y2 po zakończeniu animacji powracającej / współrzędne x2 i y2 początkowe (te, które są ustawione w pliku HTML):
    lineX = x1;
    lineY = y1;

// współrzędne x2 i y2 po zakończeniu animacji powracającej / współrzędne x2 i y2 początkowe (te, które były ustawione w pliku HTML - są tożsame z pożądanymi początkowymi x1 i y1):
    lineNum.setAttribute("x1", x1);
    lineNum.setAttribute("x2", y1);
    anim = setInterval(frameOne, 750 / (x1 - x2));
    return 1;
  //  document.getElementById("test").innerHTML = "case one: " + "x2 = " + xTwo + "<br>" + "y2 = " + yTwo;

  }
// współrzędne x2 i y2 po zakończeniu animacji:
  else if (document.getElementById("test").innerHTML == "1,1") {

// współrzędne x2 i y2 po zakończeniu animacji:
   lineX = x2;
   lineY = y2;
   anim = setInterval(frameTwo, 750 / (x1 - x2));
   return 0;
  // document.getElementById("test").innerHTML = "case two: " + "x2 = " + xTwo + "<br>" + "y2 = " + yTwo;

  }

// zawór: jeśli są jakieś losowe wartości to nie dzieje się nic:
  else {
    //document.getElementById("test").innerHTML = "case three: " + "x2 = " + xTwo + "<br>" + "y2 = " + yTwo;
  }
}


/* pierwsza galaz A - line1 - KONIEC */

/* pierwsza galaz B - line2 - START */

function leftDownYTwo(lineNum, x2, y2, x1, y1) {

  var xOne, yOne;

  var xTwo = lineNum.getAttribute("x2");
  var yTwo = lineNum.getAttribute("y2");


  var lineX, lineY;

  function frameOne() {
// współrzędne x2 i y2 po zakończeniu animacji:
    if (lineX === x2 && lineY === y2) {

      clearInterval(anim);

    }

    else {
// wzór klatki (dystans pokonany na osi x / dystans pokonany na osi y -> dopasować do odp. przypadków): (w tym: 25 klatek = ilość równa (x1 - x2)
      lineX -= (x1 - x2) / (y2 - y1);
      lineNum.setAttribute("x2", lineX);

      lineY ++ ; // wartość końcowa szybciej zmieniającej się wartości / wartość początkowa wolniej (++)
      lineNum.setAttribute("y2", lineY);

    }
  }

  function frameTwo() {
// współrzędne x2 i y2 po zakończeniu animacji powracającej / współrzędne x2 i y2 początkowe (te, które są ustawione w pliku HTML):
    if (lineX === x1 && lineY === y1) {

      clearInterval(anim);

    }

    else {
// wzór klatki (dystans pokonany na osi x / dystans pokonany na osi y -> dopasować do odp. przypadków):
        lineX += (x1 - x2) / (y2 - y1);
        lineNum.setAttribute("x2", lineX);

        lineY --;
        lineNum.setAttribute("y2", lineY);

    }
  }

  var anim;
// współrzędne x2 i y2 po zakończeniu animacji powracającej / współrzędne x2 i y2 początkowe (te, które są ustawione w pliku HTML):
  if (document.getElementById("test").innerHTML != "1,1" || lineNum.hasAttribute("x2") == false || lineNum.hasAttribute("y2") == false) {

// współrzędne x2 i y2 po zakończeniu animacji powracającej / współrzędne x2 i y2 początkowe (te, które są ustawione w pliku HTML):
    lineX = x1;
    lineY = y1;

// współrzędne x2 i y2 po zakończeniu animacji powracającej / współrzędne x2 i y2 początkowe (te, które były ustawione w pliku HTML - są tożsame z pożądanymi początkowymi x1 i y1):
    lineNum.setAttribute("x1", x1);
    lineNum.setAttribute("x2", y1);

    anim = setInterval(frameOne, (750 / (y2 - y1)));
    return 1;
  //  document.getElementById("test").innerHTML = "case one: " + "x2 = " + xTwo + "<br>" + "y2 = " + yTwo;

  }
// współrzędne x2 i y2 po zakończeniu animacji:
  else if (document.getElementById("test").innerHTML == "1,1") {

// współrzędne x2 i y2 po zakończeniu animacji:
   lineX = x2;
   lineY = y2;

   anim = setInterval(frameTwo, (750 / (y2 - y1)));
   return 0;

  // document.getElementById("test").innerHTML = "case two: " + "x2 = " + xTwo + "<br>" + "y2 = " + yTwo;

  }

// zawór: jeśli są jakieś losowe wartości to nie dzieje się nic:
  else {
    clearInterval(anim);
    //document.getElementById("test").innerHTML = "case three: " + "x2 = " + xTwo + "<br>" + "y2 = " + yTwo;
  }
}

var lineArr = [leftDownY(lineOne, 0, 50, 25, 0), leftDownYTwo(lineTwo, 0, 10, 40, 0)];
document.getElementById("test").innerHTML = lineArr;


/*function leftDownYB(lineNum, xEndForward, yEndForward, xEndBackward, yEndBackward) {

  var xOne, yOne;

  var xTwo = lineNum.getAttribute("x2");
  var yTwo = lineNum.getAttribute("y2");


  var lineX, lineY;

  function frameOne() {
// współrzędne x2 i y2 po zakończeniu animacji:
    if (lineX === xEndForward && lineY === yEndForward) {

      clearInterval(anim);

    }

    else {
// wzór klatki (dystans pokonany na osi x / dystans pokonany na osi y -> dopasować do odp. przypadków):

      lineY++;
      lineNum.setAttribute("y2", lineY);

      lineX -= xEndBackward / yEndForward;
      lineNum.setAttribute("x2", lineX);

    }
  }

  function frameTwo() {
// współrzędne x2 i y2 po zakończeniu animacji powracającej / współrzędne x2 i y2 początkowe (te, które są ustawione w pliku HTML):
    if (lineX === xEndBackward && lineY === yEndBackward) {

      clearInterval(anim);

    }

    else {
// wzór klatki (dystans pokonany na osi x / dystans pokonany na osi y -> dopasować do odp. przypadków):


        lineY--;
        lineNum.setAttribute("y2", lineY);

        lineX += xEndBackward / yEndForward;
        lineNum.setAttribute("x2", lineX);

    }
  }

  var anim;
// współrzędne x2 i y2 po zakończeniu animacji powracającej / współrzędne x2 i y2 początkowe (te, które są ustawione w pliku HTML):
  if (xTwo === xEndBackward.toString() && yTwo === yEndBackward.toString() || lineNum.hasAttribute("x2") == false || lineNum.hasAttribute("y2") == false) {

// współrzędne x2 i y2 po zakończeniu animacji powracającej / współrzędne x2 i y2 początkowe (te, które są ustawione w pliku HTML):
    lineX = xEndBackward;
    lineY = yEndBackward;

// współrzędne x2 i y2 po zakończeniu animacji powracającej / współrzędne x2 i y2 początkowe (te, które były ustawione w pliku HTML - są tożsame z pożądanymi początkowymi x1 i y1):
    lineNum.setAttribute("x1", xEndBackward);
    lineNum.setAttribute("x2", yEndBackward);

    anim = setInterval(frameOne, 10);
    document.getElementById("test").innerHTML = "case one: " + "x2 = " + xTwo + "<br>" + "y2 = " + yTwo;

  }
// współrzędne x2 i y2 po zakończeniu animacji:
  else if (xTwo === xEndForward.toString() && yTwo === yEndForward.toString()) {

// współrzędne x2 i y2 po zakończeniu animacji:
   lineX = xEndForward;
   lineY = yEndForward;
   anim = setInterval(frameTwo, 10);
   document.getElementById("test").innerHTML = "case two: " + "x2 = " + xTwo + "<br>" + "y2 = " + yTwo;

  }

// zawór: jeśli są jakieś losowe wartości to nie dzieje się nic:
  else {
    document.getElementById("test").innerHTML = "case three: " + "x2 = " + xTwo + "<br>" + "y2 = " + yTwo;
  }
}
*/
/* pierwsza galaz B - line2 - KONIEC */

/* srodkowa galaz - line3 - START */

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
