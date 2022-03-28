// create a variable to select menu button
const menuButton = document.querySelector('.menuButton')
// create a variable to make sure the menu is not open.  Set the variable's value to false
let menuOpen = false;
// on click toggle the checkbox 
menuButton.addEventListener('click', function() {
    menuButton.classList.toggle('open');
});

// 

// Create a variable to access all elements containing the "data-modal" 
// attribute
const modals = document.querySelectorAll('[data-modal]');
// For each element containing the "data-modal" attribute  
// execute callback function.
modals.forEach(function (trigger) {
    console.log(modals);

// On the event of a click execute callback function
  trigger.addEventListener("click", function (event) {
    event.preventDefault();

// Create a variable to access all elements containing an Id and a 
//  class including "modal." Also, containing a "data-*" attribute.

    const modal = document.getElementById
    (trigger.dataset.modal);
    // console.log(modal)

// add a class of "open" to the model elements.
    modal.classList.add("open");

// create a variable selecting all elements that contain the class modal-exit 
    const exits = modal.querySelectorAll(".modal-exit");

// for each instance of an exit element execute a callback function
    exits.forEach(function (exit) {
      exit.addEventListener("click", function (event) {
        event.preventDefault();

// On click, remove the class open
        modal.classList.remove("open");
      });
    });
  });
});

// ***************************


