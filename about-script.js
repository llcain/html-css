// create element
const para = document.createElement('p');

// create text node in paragraph

const node = document.createTextNode("This is new...");

// append node to paragragh

para.appendChild(node);

const element = document.getElementById('div1');
const child = document.getElementById("p1");
element.insertBefore(para, child);

// creating an object from a json string
const txt = '{"name":"John", "age": 30, "city":"New York"}'
const obj = JSON.parse(txt);
document.getElementById('demo1').innerHTML = obj.name + ", " + obj.age;

const users = [
    {"name": "Bob", "age": 41, "city": "New Franklin"},
    {"name": "Sarah", "age": 39, "city": "Joblin"},
    {"name": "Susan", "age": 32, "city": "Columbia"}
]

// let list = document.createElement('ul');
// let item = document.createElement('li');

// let ul = document.getElementById('list');
// let li = document.getElementById('item');

// item.appendChild("ul");
// document.getElementById("list").appendChild(body);

function myFunction() {
    // create an "li" node
    const li = document.createElement("li");

    // create a text node
    const textNode = document.createTextNode("Water");

    // append the text node to the "li" node:
    li.appendChild(textNode);

    // append the "li" node to the list:
    document.getElementById("myList").appendChild(li);
}
