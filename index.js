const durationInput = document.querySelector("#duration");
const startButton = document.querySelector("#start");
const pauseButton = document.querySelector("#pause");
const circle = document.querySelector('circle');

const perimeter = circle.getAttribute('r') * 2 * Math.PI;
circle.setAttribute('stroke-dasharray', perimeter);

let duration;
const timer = new Timer(durationInput, startButton, pauseButton, {
  onStart(totalDuration) {
    duration = totalDuration;
    console.log("Timer Started");
  },
  onTick(timeRemaining) {
    // remove sections of the perimeter as time passes
    circle.setAttribute('stroke-dashoffset', 
    // set the stroke-dashoffset to the following math:
    perimeter * timeRemaining / duration - perimeter);
  },
  onComplete() {
    console.log("Timer completed!");
  },
});
