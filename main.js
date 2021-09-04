function my_keydown(e)
{
    keyPresssed = e.keyCode;
    console.log(keyPresssed);

    if ((keyPressed >=97 && keyPressed<=122|| (keyPressed >=65 && keyPressed<=90))

    aplhabetkey();
    document.getElementById("myCanvas").innerHTML="You have pressed the Alphabet key";
    console.log("alpabet key")
}

function my_keydown(e)
{
    keyPresssed = e.keyCode;
    console.log(keyPresssed);

    if (keyPressed >=48 && keyPressed<=57)

    numberkey();
    document.getElementById("myCanvas").innerHTML="You have pressed the Number key";
    console.log("number key")
}

function my_keydown(e)
{
    keyPresssed = e.keyCode;
    console.log(keyPresssed);

    if ((keyPressed >=37 && keyPressed<=40)

    arrowkey();
    document.getElementById("myCanvas").innerHTML="You have pressed the Arrow key";
    console.log("arrow key")
}

function my_keydown(e)
{
    keyPresssed = e.keyCode;
    console.log(keyPresssed);

    if ((keyPressed >=17 && keyPressed<=18|| (keyPressed >=27)

    specialkey();
    document.getElementById("myCanvas").innerHTML="You have pressed the Special key";
    console.log("special key")
}