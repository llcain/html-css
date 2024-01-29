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

