

// event listener to watch for click on start button

    // draw a full border around the timer
    // start counting down the timer
    // each time the timer counts down, update border
    // each time the timer counts down, update text
        // If we counted down and timer reaches 0, reset the border
        // reset internal timer to get ready for another run

// THIS ALTERNATES BETWEEN BORDER, TIMER, BORDER, TIMER ETC AND IS MESSY!

// How about the following, completely focused on the timer
// Event listener to watch for a click on the start button
// emit an event stating that the timer has started
// start counting down the timer
// emit an event that the timer has ticked
// each tim the timer counts down, update the text
    // if we counte ddown and timer reaches 0
    // emit an event that the timer is down
    // reset internal timer to get ready for another run.


    // create a class named timer
        // has method start(), pause(), onDurationChange(), tick() 
        // Has constructor function; whenever an instance of timer is created,
        // reference to DOM element that will control number, durationInput
        // DOM element for start button, startButton
        // DOM element for pause button pauseButton
        // Query selector passed into the constructor

    class Timer {
        constructor(durationInput, startButton, pauseButton) {
            this.durationInput = durationInput
            this.startButton = startButton
            this.pauseButton = pauseButton

            this.durationInput.addEventListener('click', this.durationInput)
            this.startButton.addEventListener('click', this.start)
            this.pauseButton.addEventListener('click', this.pause)
        }

        start = () => {
            // will be a one second delay if only use set interval, so need to call this.tick() immediately. 
            this.tick();
            // whenever we call setInterval, it will send back in integer which is an id
            // Need to use this to have the pause method be able to find the timer:
            this.interval= setInterval(this.tick, 1000);
        };

        pause = () => {
            // to make interval stop, need to clear interval with the id of the interval we want to stop, which is "timer"
            clearInterval(this.interval);
        };

        tick = () => {
            // option one: current time sits in the timer instance
            // option one of where we store this data; need to set up an event listener to watch 
            // for an event change on the input. 
            // Storing all data inside javaScript code.  More popular these days. 
            this.timeLeft = this.timeLeft -1;
            this.durationInput.value = this.timeLeft;
            console.log("tick");
            // option two : current tmie sits in the input element
            // f where we use this data; a little bit easier.
            // storing our data inside of our DOM


        }
    }

    const durationInput = document.querySelector('#duration');
    const startButton = document.querySelector('#start');
    const pauseButton = document.querySelector('#pause');

    const timer = new Timer(durationInput, startButton, pauseButton)