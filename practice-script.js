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