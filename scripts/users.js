"use strict"
window.onload = () => {
 
   
    getTableInfo();
 
}
 
   function getTableInfo(){

        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response)=>response.json())
            .then((users)=>{
    
                showTable(users)
    
            })
      
  
        }
    
 
   function showTable(users){
    let tbody = document.querySelector("#tableInfo");
 
    for (let i = 0; i < users.length; i++){
        let row = tbody.insertRow();
 
        let cell1 = row.insertCell();
        cell1.innerHTML = users[i].id
 
        let cell2= row.insertCell();
        cell2.innerHTML = users[i].name
 
        let cell3= row.insertCell();
        cell3.innerHTML = users[i].username
 
        let cell4= row.insertCell();
        cell4.innerHTML = users[i].email

        let cell5= row.insertCell();
        cell5.innerHTML = users[i].address.city

        let cell6= row.insertCell();
        cell6.innerHTML = users[i].website
 
   }
 
   }