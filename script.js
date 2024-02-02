// Accessing Elements
// By ID
//const heading = document.getElementById('heading');

//console.log(heading);

// By Class
//const heading = document.getElementsByClassName('heading1');

//console.log(heading[0]);

//By Tag Name
const heading = document.getElementsByTagName('h1');

console.log('heading');

const listItems = document.querySelectorAll('#list li')

console.log(listItems[1]);

// Modifying Elements
// Contents Using InnerHTML
heading[0].innerHTML = '<em>Learning DOM Manipulation</em>';

// Contents Using TextContent
//heading[0].textContent = '<em>All About DOM Manipulation</em>';

// Attributes Using SetAttribute
heading[1].setAttribute('class', 'highlight');

//Style Using the Style Property
const button = document.getElementById('btn');
button.style.backgroundColor = 'skyblue';
button.style.color = 'white';

// Creating New Elements Dynamically
const container = document.getElementsByClassName('container');
const newParagraph = dpcument.creatElement('p');
newParagraph.textContent = 'This is a new paragraph';

container.appendChild(newParagraph);

// remove Elements Dynamically
// container[0].remove();
// button.remove();

// Handling Events
button.addEventListener('click', addListItem);

function addListItems() {
    const newListItem = document.createElement('li');
    newListItem.textContent = 'New List Item';

    document.getElementById('list').appendChild(newListItem);
}

// Click Event: Triggered when an element is clicked.
// Mouseover Event: Occurs when the mouse pointer is moved over an element.
// Keydown Event: Fired when a key is pressed down.
// Submit Event: Triggered when a form is submitted.
// Load Event: Occurs when a page or an element has finished loading.
// Change Event: Fired when the value of an input element changes.
// Focus and Blur Events: These happen when an element gains or loses focus.

