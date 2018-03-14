var bodyDone = {
    chest: false,
    shoulders: false,
    legs: false,
    back: false,
    bicep: false,
    tricep: false,
    abs: false
};

var workoutA = {
    overviewFirst: "Workout A",
    overviewSecond: "Workout A works out 3 major muscle groups.",
    overviewThird: "They are chest, shoulders, and legs.",
    firstRoutine: "The chest routine contains 3 sets of chest press followed by SUPERSETS of push ups" ,
    secondRoutine: "The shoulders routine contains 3 sets of shoulder press followed by SUPERSETS of lateral raises",
    thirdRoutine: "The legs routine contains 3 sets of squats followed by SUPERSETS of lunges or calf raises.",
    absRoutine: "Finally, we end the routine with 1 set of crunches followed by a SUPERSET of russian twists."
};

var workoutB = {
    overviewFirst: "Workout B",
    overviewSecond: "Workout B works out 3 major muscle groups.",
    overviewThird: "They are back, biceps, and triceps.",
    firstRoutine: "The back routine contains 3 sets of bent over rows followed by SUPERSETS of deadlifts",
    secondRoutine: "The bicep routine contains 3 sets of bicep curls followed by SUPERSETS of hammer curls or forearm curls",
    thirdRoutine: "The tricep routine contains 3 sets of tricep extension followed by SUPERSETS of tricep kickbacks or dips.",
    absRoutine: "Finally, we end the routine with 1 set of crunches followed by a SUPERSET of russian twists."
};

//Creates array from [0 - 6] corresponding to days of the week.

//buttonclass removes buttons after they are clicked.
var buttonClass = document.getElementsByClassName("del-btn");


function canDoAbs(){
    if ((bodyDone.chest && bodyDone.shoulders && bodyDone.legs) || (bodyDone.back && bodyDone.bicep && bodyDone.tricep)) {
        document.getElementById("absButton").className = "w3-animate-bottom w3-center btn btn-primary col btn-wrk font-25";
    }
};

function mySchedule(buttonElement) {
    //DECLARES WHICH BUTTON WAS CLICKED
var buttonClickedId = buttonElement.id;

//This for loop hides all of the buttons when a button is clicked.
    for(var i = 0; i < buttonClass.length; i++){
    buttonClass[i].style.display = "none";
}


//Buttons clicked tracker
if (buttonClickedId === "workoutA") {
        workoutFunction(workoutA);
    } if (buttonClickedId === "workoutB") {
        workoutFunction(workoutB);
    }
    selectButton();
};


//Try refractoring this function later
//Setting the <div> to arrays and iterating through
//The arrays using a forEach loop
//Somehow
function workoutFunction(whichWorkout){
    var chosenWorkout = whichWorkout;
    document.getElementById("overviewFirst").className = "w3-center w3-animate-zoom font-25";
    document.getElementById("overviewFirst").innerText = chosenWorkout.overviewFirst;
//set classname to animate in on a timer on overviewSecond
    setTimeout(function() {
    document.getElementById("overviewSecond").className = "w3-center w3-animate-left font-25";
}, 750)
    setTimeout(function() {
    document.getElementById("overviewSecond").innerText = chosenWorkout.overviewSecond;
}, 750)
//overviewThird
    setTimeout(function() {
    document.getElementById("overviewThird").className = "w3-center w3-animate-right font-25";
}, 2250)
    setTimeout(function() {
    document.getElementById("overviewThird").innerText = chosenWorkout.overviewThird;
}, 2250)
//firstRoutine
    setTimeout(function() {
    document.getElementById("firstRoutine").className = "w3-center w3-animate-left font-25";
}, 4000)
    setTimeout(function() {
    document.getElementById("firstRoutine").innerText = chosenWorkout.firstRoutine + ".";
}, 4000)
//secondRoutine
    setTimeout(function() {
    document.getElementById("secondRoutine").className = "w3-center w3-animate-right font-25";
}, 5750)
    setTimeout(function() {
    document.getElementById("secondRoutine").innerText = chosenWorkout.secondRoutine + ".";
}, 5750)
//thirdRoutine
    setTimeout(function() {
    document.getElementById("thirdRoutine").className = "w3-center w3-animate-left font-25";
}, 7500)
    setTimeout(function() {
    document.getElementById("thirdRoutine").innerText = chosenWorkout.thirdRoutine;
}, 7500)
//absRoutine
    setTimeout(function() {
    document.getElementById("absRoutine").className = "w3-center w3-animate-right font-25";
}, 9250)
    setTimeout(function() {
    document.getElementById("absRoutine").innerText = chosenWorkout.absRoutine;
}, 9250)
if (chosenWorkout == workoutA) {
    hiddenButtonsA();
} if (chosenWorkout == workoutB) {
    hiddenButtonsB();
}

};

function hiddenButtonsA(){
    setTimeout(function() {
    document.getElementById("chestButton").className = "w3-animate-bottom w3-center btn btn-primary col btn-wrk font-25";
}, 11000)
    setTimeout(function() {
    document.getElementById("shoulderButton").className = "w3-animate-bottom w3-center btn btn-primary col btn-wrk font-25";
}, 11000)
    setTimeout(function() {
    document.getElementById("legsButton").className = "w3-animate-bottom w3-center btn btn-primary col btn-wrk font-25";
}, 11000)

};

function hiddenButtonsB(){
    setTimeout(function() {
    document.getElementById("backButton").className = "w3-animate-bottom w3-center btn btn-primary col btn-wrk font-25 floating";
}, 11000)
    setTimeout(function() {
    document.getElementById("bicepButton").className = "w3-animate-bottom w3-center btn btn-primary col btn-wrk font-25 floating";
}, 11000)
    setTimeout(function() {
    document.getElementById("tricepButton").className = "w3-animate-bottom w3-center btn btn-primary col btn-wrk font-25 floating";
}, 11000)
};

function selectBodyPart(whichButton){
    var chosenButtonId = whichButton.id;

    switch(chosenButtonId){
        case "chestButton":
        readyGo();
        setTimeout(function() {
        document.getElementById("modalGIF1").src = "img/kettlebell-exercises-chest-press.gif"
        document.getElementById("modalGIF2").src = "img/kettlebell-exercises-pushups.gif"
        }, 1500)
        bodyDone.chest = true;
        canDoAbs();
        break;
        case "shoulderButton":
        readyGo();
        setTimeout(function() {
        document.getElementById("modalGIF1").src = "img/kettlebell-exercises-shoulder-press-two-arm.gif"
        document.getElementById("modalGIF2").src = "img/kettlebell-exercises-side-laterals.gif"
        }, 1500)
        bodyDone.shoulders = true;
        canDoAbs();
        break;
        case "legsButton":
        readyGo();
        setTimeout(function() {
        document.getElementById("modalGIF1").src = "img/kettlebell-exercises-squats-single.gif"
        document.getElementById("modalGIF2").src = "img/kettlebell-exercises-lunge-single.gif"
        }, 1500)
        bodyDone.legs = true;
        canDoAbs();
        break;
        case "backButton":
        readyGo();
        setTimeout(function() {
        document.getElementById("modalGIF1").src = "img/kettlebell-exercises-bent-over-rows.gif"
        document.getElementById("modalGIF2").src = "img/kettlebell-exercises-romanian-deadlift-single.gif"
        }, 1500)
        bodyDone.back = true;
        canDoAbs();
        break;
        case "bicepButton":
        readyGo();
        setTimeout(function() {
        document.getElementById("modalGIF1").src = "img/kettlebell-exercises-bicep-curls-one-arm.gif"
        document.getElementById("modalGIF2").src = "img/kettlebell-exercises-hammer-curls-one-arm.gif"
        }, 1500)
        bodyDone.bicep = true;
        canDoAbs();
        break;
        case "tricepButton":
        readyGo();
        setTimeout(function() {
        document.getElementById("modalGIF1").src = "img/kettlebell-exercises-tricep-kickbacks-one-arm.gif"
        document.getElementById("modalGIF2").src = "img/kettlebell-exercises-standing-tricep-extension-single.gif"
        }, 1500)
        bodyDone.tricep = true;
        canDoAbs();
        break;
        case "absButton":
        readyGo();
        setTimeout(function() {
        document.getElementById("modalGIF1").src = "img/kettlebell-exercises-crunch.gif"
        document.getElementById("modalGIF2").src = "img/kettlebell-exercises-russian-twist.gif"
        }, 1500)
        document.getElementById("finishedButton").className = "w3-animate-bottom w3-center btn btn-primary col btn-wrk font-25"
        break;
        default:
        document.getElementById("modalGIF1").src = "img/billy-herrington-gif.gif"
        document.getElementById("modalGIF2").src = ""
        document.getElementById("modal-header").textContent = "CONGRATULATIONS!";
        document.getElementById("modal-footer").textContent = "Your workout time: " + document.getElementById("timer").textContent
        setTimeout(function() {
        var button = $( "button");
        for (var i = 3; i < button.length; i++) {
        $(button[i]).prop( "disabled", true );
        };
        }, 1000)
        //ADD DIFFERENT SOUND FUNCTION FOR FINISHING


}
selectButton(chosenButtonId);
};

function readyGo(){
    document.getElementById("modalGIF1").src = "img/ready.png"
    document.getElementById("modalGIF2").src = "img/white.jpg"
    setTimeout(function(){
    document.getElementById("modalGIF2").src = "img/go.png"
    }, 750)
    setTimeout(function(){
        audio[4].play();
    }, 10)
}

//TIMER FUNCTION !!
seconds = 0, minutes = 0, t = null;
function add() {
    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
        if (minutes >= 60) {
            minutes = 0;
        }
    };

    document.getElementById("timer").textContent = (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);

    timer();
};
function timer() {
    t = setTimeout(add, 1000);
    timerRunning = true;
};
function stopTimer() {
    clearTimeout(t);
};

//TIMER FUNCTION END !!

var audio = [];
var isMuted = audio.muted

audio[0] = new Audio();
audio[0].src = 'sounds/trophy.mp3';
audio[1] = new Audio();
audio[1].src = 'sounds/breakthetargets.mp3';
audio[2] = new Audio();
audio[2].src = 'sounds/multiman.mp3';
audio[3] = new Audio();
audio[3].src = 'sounds/select.wav';
audio[4] = new Audio();
audio[4].src = 'sounds/readygo.mp3';
audio[5] = new Audio();
audio[5].src = 'sounds/ending.mp3';
audio[6] = new Audio();
audio[6].src = 'sounds/back.wav';

// setTimeout(function(){
// audio[0].play();
// }, 5000)

for (var i = 0; i <= 2; i++) {
    audio[i].addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
}, false);
}

//MUTE AUDIO BUTTON
function mutedAudio(){
for (var i = 0; i < audio.length; i++) {
    audio[i].muted = !audio[i].muted;
}
};

//MUTE AUDIO BUTTON END

function selectButton(whichButton){

    switch(whichButton){
        case "chestButton":
        pauseAllOther();
        audio[1].play();
        break;
        case "shoulderButton":
        pauseAllOther();
        audio[1].play();
        break;
        case "legsButton":
        pauseAllOther();
        audio[1].play();
        break;
        case "backButton":
        pauseAllOther();
        audio[1].play();
        break;
        case "bicepButton":
        pauseAllOther();
        audio[1].play();
        break;
        case "tricepButton":
        pauseAllOther();
        audio[1].play();
        break;
        case "absButton":
        pauseAllOther();
        audio[1].play();
        break;
        case "finishedButton":
        pauseAllOther();
        audio[5].play();
        break;


    }
    audio[3].play();
};

// REFRESH FUNCTION (clean up later)
//Ask how to go back a step
function refresh(){
    window.location.reload()
}
//REFRESH END

// BACK SOUND
$('#workoutModal').on('hidden.bs.modal', function () {
    audio[6].play();
})
// BACK SOUND END

function pauseAllOther(){
    for (var i = 0; i < audio.length; i++) {
        audio[i].pause();
    }
}

$('#workoutA').hover(
    function() {
        var $this = $(this); // caching $(this)
        $this.data('initialText', $this.text());
        $this.text("Chest, shoulders and legs.");
    },
    function() {
        var $this = $(this); // caching $(this)
        $this.text($this.data('initialText'));
    }
);

$('#workoutB').hover(
    function() {
        var $this = $(this); // caching $(this)
        $this.data('initialText', $this.text());
        $this.text("Back, biceps and triceps.");
    },
    function() {
        var $this = $(this); // caching $(this)
        $this.text($this.data('initialText'));
    }
);

function unhide() {
    audio[3].play();
    $(".hide-all").removeClass("hide-all");
    $(".btn-mybutton").remove();
    };

//VENDOR SCRIPTS//

//jQUERY BUTTON SWAP
$("#muteBtn").on("click", function() {
  var el = $(this);
  if (el.text() == el.data("text-swap")) {
    el.text(el.data("text-original"));
  } else {
    el.data("text-original", el.text());
    el.text(el.data("text-swap"));
  }
});
//
//FONT //
// Wrap every letter in a span
$('.ml11 .letters').each(function(){
  $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
});

anime.timeline({loop: true})
  .add({
    targets: '.ml11 .line',
    scaleY: [0,1],
    opacity: [0.5,1],
    easing: "easeOutExpo",
    duration: 700
  })
  .add({
    targets: '.ml11 .line',
    translateX: [0,$(".ml11 .letters").width()],
    easing: "easeOutExpo",
    duration: 700,
    delay: 100
  }).add({
    targets: '.ml11 .letter',
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=775',
    delay: function(el, i) {
      return 34 * (i+1)
    }
  }).add({
    targets: '.ml11',
    opacity: 0,
    duration: 1000e1000,
    easing: "easeOutExpo",
    delay: 1000e1000
  });

// Wrap every letter in a span
$('.ml7 .letters').each(function(){
  $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
});

anime.timeline({loop: true})
  .add({
    targets: '.ml7 .letter',
    translateY: ["1.1em", 0],
    translateX: ["0.55em", 0],
    translateZ: 0,
    rotateZ: [180, 0],
    duration: 750,
    easing: "easeOutExpo",
    delay: function(el, i) {
      return 50 * i;
    }
  }).add({
    targets: '.ml7',
    opacity: 0,
    duration: 1000e1000,
    easing: "easeOutExpo",
    delay: 1000e1000
  });

// Wrap every letter in a span
$('.ml16').each(function(){
  $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
});

anime.timeline({loop: true})
  .add({
    targets: '.ml16 .letter',
    translateY: [-100,0],
    easing: "easeOutExpo",
    duration: 1400,
    delay: function(el, i) {
      return 30 * i;
    }
  }).add({
    targets: '.ml16',
    opacity: 0,
    duration: 1000e1000,
    easing: "easeOutExpo",
    delay: 1000e1000
  });
