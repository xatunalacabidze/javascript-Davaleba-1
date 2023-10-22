console.log("hello world");
console.warn.apply("warning! this app is not working on this line");
console.warn("warninh! this app is not working on this line");
console.error("Error! this app is not working on this line");
alert("საიტი მიუწვდომელია!");

document.getElementById("hello from id").innerHTML = "<mark>hello from id </mark>";

document.getElementsByClassName("hello_from_class")[0].innerHTML = "<i>hello from class</i>";
document.getElementsByTagName("h1")[2].innerHTML = "hello world";
document.querySelectorAll("h2")[0].innerText = "hello world from id";
document.querySelectorAll("h2")[0]. style.color = "green";

document.querySelectorAll("h2")[1].innerText = "this is my book!";
document.querySelectorAll("h2")[1].style.color = "red";