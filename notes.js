
console.log("Welcome to taking Notes");
showNotes();

let btn = document.getElementById('addBtn');
let search = document.getElementById('searchTxt');
btn.addEventListener('click', function(){
    let txt = document.getElementById('addTxt');
    let notes = localStorage.getItem('notes');
    
    if(notes == null){
         notesObj =[];
    }else{
        notesObj = JSON.parse(notes);

    }  
    notesObj.push(txt.value);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    txt.value = '';
   

    showNotes();
});


function showNotes(){
    let notes = localStorage.getItem('notes');
    let container = document.getElementById('notes');
    let html = "";

    if(notes == null){
        notesObj =[];
   }else{
       notesObj = JSON.parse(localStorage.getItem('notes'));
   } 
 
   notesObj.map(function(element, index) {
       html += `<div class="notes card">
      <div class="card-body">
      <div class="card-title">Title ${index + 1}</div>
        <p class="card-text" id="msg">
        ${element}
        </p>
        <a id="${index+1}" onclick="removeNotes(this.id)" class="btn btn-primary" style="color: #fff;">Delete Note</a>
      </div>
    </div>`;       
   });

if(notesObj.length>0)
    container.innerHTML = html;
   else
   container.innerHTML = "You haven't added any note here."; 
}

function removeNotes(index){
    let notes = localStorage.getItem('notes');
    if(notes == null){
        notesObj =[];
   }else{
       notesObj = JSON.parse(notes);
   } 
   notesObj.splice(index-1, 1);
   localStorage.setItem('notes', JSON.stringify(notesObj));
   showNotes();
}
 

search.addEventListener("input", function(){
    let notes = document.getElementsByClassName('notes');
    Array.from(notes).map(function(e,i){
        var txt = e.getElementsByTagName('p')[0].innerText;
        if(txt.includes(search.value)){
            e.style.display = "block";
        }else{
            e.style.display = "none";
        }
    });
});


/* localStorage.setItem('name','Rohit');
localStorage.setItem('name2','Rohan');

//localStorage.clear();
//localStorage.removeItem('name2');

let users = ['Ram', 'Shyam', "Gaurrav", 'Sourabh'];

users.push("Rohit");
localStorage.setItem('users', JSON.stringify(users));

console.log(JSON.stringify(users));


//console.log(localStorage.getItem('name'));
//console.log(user);

let person = {
    name: ["john", "jane", "anthony", "amar", "akbar"],
    age: [22,34,23,45,65]
}

let objects={
    fruits:["Apple", "Banana", "Mangoes", "Orange",'Kiwi'],
    vegetables:["Brinjal", "Cauliflower", "Tomato", "Spinach"]
}


localStorage.setItem('personDetails', JSON.stringify(person));
localStorage.setItem("eatables", JSON.stringify(objects));

let data = JSON.parse(localStorage.getItem("eatables"));



// sessionStorage.setItem('ss_name','Rohit');
// sessionStorage.setItem('ss_name2','Rohan');
// sessionStorage.setItem('ss_users', JSON.stringify(users));
// sessionStorage.setItem('ss_personDetails', JSON.stringify(person));
// sessionStorage.setItem("ss_eatables", JSON.stringify(objects));
 */