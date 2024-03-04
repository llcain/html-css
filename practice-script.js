function changeBackgroundColor () {
    document.getElementById('btn').style.backgroundColor = "green";

}

const person = {
    firstName: "Bob",
    lastName: "Doe",
    age: 45,
    eyeColor: "blue"
}

document.getElementById("demo").innerHTML = person.eyeColor;

function addElement() {

    // create element
    const li = document.createElement('li');

    // create text node
    const textNode = document.createTextNode("water");

    // append the text node to the li node:
    li.appendChild(textNode);

    // append the li node to the list
    document.getElementById("myList").appendChild(li);
}
