console.log('screen is working ')

// let type= document.getElementById('type');
let formbook= document.getElementById('book-form');
let btn= document.getElementById('submit_btn');

btn.addEventListener('click',submit);
function submit(e){
    
    let friction= document.getElementById('friction');
    let programming= document.getElementById('programming');
    let cooking= document.getElementById('cooking');
    let bookname= document.getElementById('book').value;
    let author= document.getElementById('author').value;
    let type;
    if(friction.checked){
        type= "friction";
    }
    else if(programming.checked){
        type= "programming";
    }
    
    else if(cooking.checked){
        type= "cooking";
    }
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
    


    e.preventDefault();
}


// constructor
 class Book {
    constructor(name, author, type){
        this.name= name;
        this.author= author;
        this.type=type;
    }
 }
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
    bookobj.array.forEach(element => {
        
let ui= `<tr>
<td>${element.book.name}</td>
<td>${book.author}</td>
<td>${book.type}</td>
<td><button >Delete</button><td>
</tr>`
        
    });
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

    //     let tbody= document.getElementById('tbody');
    //     let ui= `<tr>
    //     <td>${book.name}</td>
    //     <td>${book.author}</td>
    //     <td>${book.type}</td>
    //     <td><button >Delete</button><td>
    // </tr>`
        // tbody.innerHTML += ui;
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
        let html=`<div class="alert alert-${type} alert-dismissible fade show" role="alert">
        <strong>Messge:</strong> ${message}
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">×</span>
        </button>
    </div>`;
    divmessage.innerHTML=html;

    setTimeout(function(){
        divmessage.innerHTML="";
    },1000)
    }
 }
