//1. Select the section with an id of container without using querySelector.
var a= document.getElementById("container");

//2. Select the section with an id of container using querySelector.
var b = document.querySelector("#container section");

//3. Select all of the list items with a class of “second”.
var c = document.querySelectorAll(".second");

//4. Select a list item with a class of third, but only the list item inside of the ol tag.
var d = document.querySelector("ol .third");

//5. Give the section with an id of container the text “Hello!”.
const change = document.getElementById("container");
change.innerText = "Hello!";

//6. Add the class main to the div with a class of footer.
var footerElement = document.querySelector(".footer");
footerElement.classList.add("main");

//7. Remove the class main on the div with a class of footer.
var mainRemove = document.querySelector(".footer");
mainRemove.classList.remove("main");

//8. Create a new li element.
const newLi= document.createElement("li");

//9. Give the li the text “four”.
newLi.textContent = "four";

//10. Append the li to the ul element.
ul.append(newLi);

//11. Loop over all of the lis inside the ol tag and give them a background color of “green”.
var olElement = document.querySelector('ol');
var listItems = olElement.querySelectorAll('li');

listItems.forEach(function(li) {
    li.style.backgroundColor = 'green';
});

//12. Remove the div with a class of footer
var divRemove = document.querySelector(".footer");
divRemove.remove();