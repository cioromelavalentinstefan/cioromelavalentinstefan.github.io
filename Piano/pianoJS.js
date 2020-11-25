/**
 * @author Cioromela Valentin Stefan
 */


var mDown = false;

// ////////////////////////////////////////////
// Mouse
document.querySelectorAll('.key').forEach(item => {

    item.addEventListener('mousedown', function() {
            makeSound(this.id);
            buttonAnimation(this.id);
        }
    )
});


document.querySelectorAll('.key').forEach(item => {
    item.addEventListener('mouseenter', function() {
            if (mDown === true) {
                makeSound(this.id);
                buttonAnimation(this.id);
            }
        }
    )
});


document.querySelectorAll('.key').forEach(item => {
    item.addEventListener('mouseup', function() {
        buttonAnimation(this.id, false);
    })
});

document.querySelectorAll('.key').forEach(item => {
    item.addEventListener('mouseleave', function() {
        buttonAnimation(this.id, false);
    })
});


document.onmouseup = function(event) {
    mDown = false;
}

document.onmousedown = function() {
    mDown = true;
}


// ////////////////////////////////////////////
// keyboard
document.addEventListener("keydown", function(e) {
    if (e.repeat === false) {
        makeSound(e.key);
        buttonAnimation(e.key, true);
    }
});

document.addEventListener("keyup", function(e) {
    buttonAnimation(e.key, false);
});


// ////////////////////////////////////////////
// mobile touch
document.querySelectorAll('.key').forEach(item => {
    item.addEventListener('touchstart', function(e) {
            e.preventDefault();
            makeSound(this.id);
            buttonAnimation(this.id);
        }
    );
});

document.querySelectorAll('.key').forEach(item => {
    item.addEventListener('touchend', function() {
            buttonAnimation(this.id, false);
        }
    )
});


////////////////////////////////////////////////
//  Animation

function buttonAnimation(currentKey, end) {
    let activeButton = document.getElementById(currentKey);
    activeButton.classList.add("pressed");
    if (end === false) {
        activeButton.classList.remove("pressed");
    }
}


//////////////////////////////////////////////////
// Sound
function makeSound(key) {

    switch (key) {

        // octave 3
        case "q":
            let c3 = new Audio("sounds/c3.mp3");
            c3.play();
            break;

        case "Q":
            let cs3 = new Audio("sounds/cs3.mp3");
            cs3.play();
            break;

        case "w":
            let d3 = new Audio('sounds/d3.mp3');
            d3.play();
            break;

        case "W":
            let ds3 = new Audio('sounds/ds3.mp3');
            ds3.play();
            break;

        case "e":
            let e3 = new Audio('sounds/e3.mp3');
            e3.play();
            break;

        case "r":
            let f3 = new Audio('sounds/f3.mp3');
            f3.play();
            break;

        case "R":
            let fs3 = new Audio('sounds/fs3.mp3');
            fs3.play();
            break;

        case "t":
            let g3 = new Audio('sounds/g3.mp3');
            g3.play();
            break;

        case "T":
            let gs3 = new Audio('sounds/gs3.mp3');
            gs3.play();
            break;

        case "y":
            let a3 = new Audio('sounds/a3.mp3');
            a3.play();
            break;

        case "Y":
            let as3 = new Audio('sounds/as3.mp3');
            as3.play();
            break;

        case "u":
            let b3 = new Audio('sounds/b3.mp3');
            b3.play();
            break;


        // octave  4  ////////////////////////////////////////////////////////////////////////////////////////
        case "i":
            let c4 = new Audio("sounds/c4.mp3");
            c4.play();
            break;

        case "I":
            let cs4 = new Audio("sounds/cs4.mp3");
            cs4.play();
            break;

        case "o":
            let d4 = new Audio('sounds/d4.mp3');
            d4.play();
            break;

        case "O":
            let ds4 = new Audio('sounds/ds4.mp3');
            ds4.play();
            break;

        case "p":
            let e4 = new Audio('sounds/e4.mp3');
            e4.play();
            break;

        case "P":
            let f4 = new Audio('sounds/f4.mp3');
            f4.play();
            break;

        case "a":
            let fs4 = new Audio('sounds/fs4.mp3');
            fs4.play();
            break;

        case "s":
            let g4 = new Audio('sounds/g4.mp3');
            g4.play();
            break;

        case "S":
            let gs4 = new Audio('sounds/gs4.mp3');
            gs4.play();
            break;

        case "d":
            let a4 = new Audio('sounds/a4.mp3');
            a4.play();
            break;

        case "D":
            let as4 = new Audio('sounds/as4.mp3');
            as4.play();
            break;

        case "f":
            let b4 = new Audio('sounds/b4.mp3');
            b4.play();
            break;

        // octave  5  ////////////////////////////////////////////////////////////////////////////////////////
        case "g":
            let c5 = new Audio("sounds/c5.mp3");
            c5.play();
            break;

        case "G":
            let cs5 = new Audio("sounds/cs5.mp3");
            cs5.play();
            break;

        case "h":
            let d5 = new Audio('sounds/d5.mp3');
            d5.play();
            break;

        case "H":
            let ds5 = new Audio('sounds/ds5.mp3');
            ds5.play();
            break;

        case "j":
            let e5 = new Audio('sounds/e5.mp3');
            e5.play();
            break;

        case "J":
            let f5 = new Audio('sounds/f5.mp3');
            f5.play();
            break;

        case "k":
            let fs5 = new Audio('sounds/fs5.mp3');
            fs5.play();
            break;

        case "l":
            let g5 = new Audio('sounds/g5.mp3');
            g5.play();
            break;

        case "L":
            let gs5 = new Audio('sounds/gs5.mp3');
            gs5.play();
            break;

        case "z":
            let a5 = new Audio('sounds/a5.mp3');
            a5.play();
            break;

        case "Z":
            let as5 = new Audio('sounds/as5.mp3');
            as5.play();
            break;

        case "x":
            let b5 = new Audio('sounds/b5.mp3');
            b5.play();
            break;        

        default:
            console.log(key);

    }
}
















// setTimeout(function() {
//     activeButton.classList.remove("pressed");
// }, 100);




// var numberOfKeys = document.querySelectorAll(".key").length;

// for (var i = 0; i < numberOfKeys; i++) {

//     document.querySelectorAll(".key")[i].addEventListener("click", function() {

//         var buttonInnerHTML = this.innerHTML;

//         makeSound(buttonInnerHTML);

//         buttonAnimation(buttonInnerHTML);

//     });
// }

// document.querySelectorAll('.key').forEach(item => {

//     item.addEventListener('click', function() {
//             var buttonInnerHTML = this.innerHTML;
//             makeSound(buttonInnerHTML);
//             buttonAnimation(buttonInnerHTML);
//         }

//     )

// });