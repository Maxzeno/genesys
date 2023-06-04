// Create a new element
const newElement = document.createElement('div');
newElement.innerText = 'Hello, World!';

// Add the element to the DOM
const body = document.body;
body.appendChild(newElement);

// Remove the element from the DOM
body.removeChild(newElement);

// Event listener for click event
function handleClick() {
  console.log('Button clicked!');
}

// Add event listener to the new element
newElement.addEventListener('click', handleClick);


// DOM manipulation
const element = document.getElementById('element');
element.innerText = 'some text'
element.style.color = 'red'
element.classList.toggle('blue')

