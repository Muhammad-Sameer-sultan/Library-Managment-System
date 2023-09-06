console.log('Is screen working ');

let formbook= document.getElementById('book-form');
let btn= document.getElementById('submit_btn');

btn.addEventListener('click',submit);
showtable();
//  when button is click

function submit(e){
    
    let technology= document.getElementById('technology');
    let programming= document.getElementById('programming');
    let cooking= document.getElementById('cooking');
    let bookname= document.getElementById('book').value;
    let author= document.getElementById('author').value;
    let type;
            // condition for radio box
    if(technology.checked){
        type= "Technology";
    }
    else if(programming.checked){
        type= "Programming";
    }
    
    else if(cooking.checked){
        type= "Cooking";
    }
// constructor
class Book {
    constructor(name, author, type){
        this.name= name;
        this.author= author;
        this.type=type;
    }
 }
    //  call fuctions
    const book = new Book (bookname, author,type)
    const display = new Display()
    if(display.validate(book)){

        display.Add(book);
        display.Clear();
        display.show("Sucessfully","The data can be added sucessfully");

        console.log(book);
    }
    else{
        display.show("Error","The data cannot be added please try again")
        
    }
    
    showtable();

    e.preventDefault();
}





//    Table for show data
 function showtable(){
    let books=localStorage.getItem("books");
    let bookobj;    
    if(books===null){
        bookobj=[];
        console.log(bookobj);
    }
    else{
        bookobj = JSON.parse(books);
    }

    
    let tbody= document.getElementById('tbody');
    let ui="";
    bookobj.forEach(my);
function my(element,index){
           
ui+= `<tr>
<td>${element.name}</td>
<td>${element.author}</td>
<td>${element.type}</td>
<td><button class="deletebtn" id="${index}" onclick="deletebook(${index})">Click me to Delete</button><td>
</tr>`
        
    }
    tbody.innerHTML=ui;
}

 class Display{
    Add(book){
        let books=localStorage.getItem("books");
        let bookobj;    
        if(books===null){
            bookobj=[];
            console.log(bookobj);
        }
        else{
            bookobj = JSON.parse(books);
        }
        bookobj.push(book);
        books= localStorage.setItem("books",JSON.stringify(bookobj)) ;

    }
       
    Clear(){
        formbook.reset();
    }
    validate(book){
        if(book.name.length < 2 || author.length<2){
            return false;
        }   
        else{
            return true;
        }     
    }
    show(type,message){
        let divmessage= document.getElementById('message');
        let warn=(type==='Sucessfully')?"success":"danger";
        let html= ` <div class="alert alert-${warn} d-flex align-items-center" role="alert">
        <svg xmlns="http://www.w3.org/2000/svg" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-2" viewBox="0 0 16 16" role="img" aria-label="Warning:">
          <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path>
        </svg>
        <div>
        <strong>${type} </strong>${message}
        </div>
      </div>`
      
    divmessage.innerHTML=html;

    setTimeout(function(){
        divmessage.innerHTML="";
    },1000)
    }
 }
        // Delete Button
 
function deletebook(index){

    let books=localStorage.getItem("books");
    let bookobj;    
    if(books===null){
        bookobj=[];
        console.log(bookobj);
    }
    else{
        bookobj = JSON.parse(books);
    }
    bookobj.splice(index,1);
    books= localStorage.setItem("books",JSON.stringify(bookobj)) ;
    showtable();
}
