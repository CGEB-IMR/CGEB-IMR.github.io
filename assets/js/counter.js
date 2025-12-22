//Get elements from the DOM
const counters = document.querySelectorAll(".counters span");
const container = document.querySelector(".counters");
//Variable that tracks if the counters have been activated
let activated = false;

//Add scroll event to the page
window.addEventListener("scroll", () => {
  /*If the page is scrolled to the containers 
  element and the counters are not activated*/
  if(
    pageYOffset > container.offsetTop - container.offsetHeight - 400 
    && activated === false
  ) {
    //Select all counters
    counters.forEach(counter => {
      //Set counter values to zero
      counter.innerText = 0;
      /*Set count variable to 
      track the count*/
      let count = 0;

      //Update count function
      function updateCount() {
        //Get counter target number to count to
        const target = parseInt(counter.dataset.count);
        //As long as the count is below the target number
        if(count < target) {
          //Increment the count
          count++;
          //Set the counter text to the count
          counter.innerText = count;
          //Repeat this every 10 miliseconds
          setTimeout(updateCount, 7); /*Count Speed*/
        //And when the target is reached
        } else {
          //Set the counter text to the target number
          counter.innerText = target;
        }
      }
      //Run the function initialy
      updateCount();
      //Set activated to true
      activated = true;
    });
  /*If the page is scrolled back a 
  certain ammount or to the top and activated is true*/
  } else if(
      pageYOffset < container.offsetTop - container.offsetHeight - 500 
      || pageYOffset === 0
      && activated === true
    ) {
    //Select all counters
    counters.forEach(counter => {
      //Set counter text back to zero
      counter.innerText = 0;
    });
    //Set activated to false
    activated = false;
  }
});