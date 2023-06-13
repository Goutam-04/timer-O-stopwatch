document.addEventListener("DOMContentLoaded", () => {
    let startTimerButton = document.querySelector("#startTimerButton"),
       stopTimerButton = document.querySelector("#stopTimerButton"),
       resetTimerButton = document.querySelector("#resetTimerButton"),
       recordTimerButton = document.querySelector("#recordTimerButton"),
       hoursCounter = document.querySelector(".counter-h"),
       minutesCounter = document.querySelector(".counter-m"),
       secondsCounter = document.querySelector(".counter-s"),
       msCounter = document.querySelector(".counter-ms"),
       hours = 0,
       minutes = 0,
       seconds = 0,
       milliseconds = 0,
       timeInterval,
       recordsWrapper = document.querySelector(".stopwatch__records"),
       records = [];
 
    startTimerButton.addEventListener("click", () => {
        // The clearInterval() method clears a timer set with the setInterval() method.
       clearInterval(timeInterval);
    //    The setInterval() method, offered on the Window and Worker interfaces, repeatedly calls a function or executes a code snippet, with a fixed time delay between each call.
       timeInterval = setInterval(startTimer, 10);
    });
    stopTimerButton.addEventListener("click", stopTimer);
    resetTimerButton.addEventListener("click", resetTimer);
    recordTimerButton.addEventListener("click", record);
 
    function startTimer() {
       milliseconds++;
 
       if (milliseconds <= 9) {
          msCounter.innerHTML = "0" + milliseconds;
       }
 
       if (milliseconds > 9) {
          msCounter.innerHTML = milliseconds;
       }
 
       if (milliseconds > 99) {
          milliseconds = 0;
          msCounter.innerHTML = "0" + milliseconds;
          seconds++;
       }
 
       if (seconds <= 9) {
          secondsCounter.innerHTML = "0" + seconds;
       }
 
       if (seconds > 9) {
          secondsCounter.innerHTML = seconds;
       }
 
       if (seconds > 59) {
          seconds = 0;
          minutes++;
       }
 
       if (minutes <= 9) {
          minutesCounter.innerHTML = "0" + minutes;
       }
 
       if (minutes > 9) {
          minutesCounter.innerHTML = minutes;
       }
 
       if (minutes > 59) {
          minutes = 0;
          hours++;
       }
 
       if (hours <= 9) {
          hoursCounter.innerHTML = "0" + hours;
       } else {
          hoursCounter.innerHTML = hours;
       }
    }
 
    function stopTimer() {
       clearInterval(timeInterval);
    }
 
    function resetTimer() {
       clearInterval(timeInterval);
       hours = 0;
       minutes = 0;
       seconds = 0;
       milliseconds = 0;
       hoursCounter.innerHTML = "0" + hours;
       minutesCounter.innerHTML = "0" + minutes;
       secondsCounter.innerHTML = "0" + seconds;
       msCounter.innerHTML = "0" + milliseconds;
       records = [];
       recordsWrapper.innerHTML = "";
    }
 
    function record() {
       let recordTime = `${hoursCounter.innerHTML}:${minutesCounter.innerHTML}:${secondsCounter.innerHTML}.${msCounter.innerHTML}`;
 
       if (recordTime != "00:00:00.00" && !records.includes(recordTime)) {
          records.push(recordTime);
          console.log(records);
          appendrecordToDOM(recordTime);
       }
    }
 
    function appendrecordToDOM(recordTime) {
       let newrecord = document.createElement("div");
       newrecord.classList.add("record");
       newrecord.innerHTML = `
          <div class="record__index">${records.length}</div>
          <div class="record__time">${recordTime}</div>
       `;
       recordsWrapper.appendChild(newrecord);
       recordsWrapper.scrollTop = recordsWrapper.scrollHeight;
    }
 });
 