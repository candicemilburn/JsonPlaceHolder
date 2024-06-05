"use strict"
window.onload = () => {
 
    let theButton = document.querySelector("#theButton");
    theButton.addEventListener("click", clicktheButton);
 
    // let toDoResults = document.getElementById("results");
}
async function clicktheButton() {
    let theResults = await showInfo();
    let results = document.querySelector("#results");
    console.log(results);
    let searchedID = Number(document.querySelector("#todoId").value);
    if (theResults.id === searchedID){
        return results.innerHTML = `  Title: ${theResults.title} ID: ${theResults.id} User ID: ${theResults.userId} `;
     
    };
   
   
async function showInfo(){
   let searchedID = document.querySelector("#todoId");
   let response = await fetch ("https://jsonplaceholder.typicode.com/todos/" + searchedID.value);
   let data = await response.json();
   return data;
}
 
 
}