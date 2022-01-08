let myKeys = document.querySelectorAll('.key');

for (let x = 0; x < myKeys.length; x++) {
    myKeys[x].addEventListener('click', function () {
        //playSound(myKeys[x]);
        playSound(myKeys[x].innerHTML);
        
    })
}

document.addEventListener('keydown', function(btn) {
    //console.log(btn);
    playSound(btn.key.toUpperCase());
    let pressedKey = btn.key.toUpperCase();

    for (let x = 0; x < myKeys.length; x++) {
        myKeys[x].classList.remove('activated');
    }

    for (let x = 0; x < myKeys.length; x++) {
        if (pressedKey == myKeys[x].innerHTML.toUpperCase()) {
            myKeys[x].classList.add('activated');

        }
    }


})


function playSound(key) {
    switch(key) {
        case 'C':
            var audio = new Audio('doremi/do.mp3');
            audio.play();
            break;

        case 'D':
            var audio = new Audio('doremi/re.mp3');
            audio.play();
            break;

        case 'E':
            var audio = new Audio('doremi/mi.mp3');
            audio.play();
            break;

        case 'F':
            var audio = new Audio('doremi/fa.mp3');
            audio.play();
            break;

        case 'G':
            var audio = new Audio('doremi/sol.mp3');
            audio.play();
            break;

        case 'A':
            var audio = new Audio('doremi/la.mp3');
            audio.play();
            break;

        case 'B':
            var audio = new Audio('doremi/ti.mp3');
            audio.play();
            break;

        default:
            console.log(key);
    }
}

