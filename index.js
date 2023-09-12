
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
            // Where does current time live?
            //****** option 1 ********* 
            // option one: current time is stored directly in the timer instance
            // need to set up an event listener to watch for an event change on the input. Lot of reaching back and forth.
            // "Storing all data inside javaScript code." More popular these days. 

            // this.timeLeft = this.timeLeft -1;
            // this.durationInput.value = this.timeLeft;
            // ****** option 2 *************
            //current time lives in the input element.
            // Dom Centric approach, older and outdated
            // "storing our data inside of our DOM"  Why do we use option number 1 instead of 2?  
            // if change time in the input, will work immediately without an event listener.
            if (this.timeRemaining <=0) {
                this.pause();
            } else {
                this.timeRemaining = this.timeRemaining - 1; 
            }
        }

        // Getters and Setters are new to javascript, help hold code and hide away complexity to make it easer to read. 
        // Set up a getter!  Retrieve a variable inside our class without invoking it. Don't need parenthesis. 
        get timeRemaining() {
            return parseFloat(this.durationInput.value);
        }    

        // Set up a setter.  Assign a value to the function.
        set timeRemaining(time) {
            this.durationInput.value = time;
        }    
    }

    const durationInput = document.querySelector('#duration');
    const startButton = document.querySelector('#start');
    const pauseButton = document.querySelector('#pause');

    const timer = new Timer(durationInput, startButton, pauseButton)