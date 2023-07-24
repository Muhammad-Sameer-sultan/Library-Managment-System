console.log("screen checking");


let bookform= document.getElementById("book-form");

bookform.addEventListener("submit",formsubmit)
function formsubmit(e)
{
    
    let bookname= document.getElementById('book').value;
    let author= document.getElementById('author').value;
    let friction= document.getElementById('friction');
    let cooking= document.getElementById('cooking');
    let programming= document.getElementById('programming');
    let type;
    
    if(friction.checked){
        type="friction";
    }
    else if(programming.checked){
        type="programming";
    }
    else if(cooking.checked){
        type="cooking";
    }
    const book = new Book(bookname,author,type)
    console.log(book);

    const display= new Display();

    
    if(display.validat(book)){
        display.add(book);
        display.clear();
        
        display.show("Sucess","The Data can be added sucessfully")
    }
    else{
        display.show("error","The Data cannot be added please Try again")

    }
    e.preventDefault();
    
}



//  constructor for book    
    function Book(Name, Author, Type)
    {
        this.name= Name;
        this.author= Author;
        this.type= Type;
    }

//Diplay constructor
 function Display(){

 }

 //add function in display
   Display.prototype.add= function(book){
    let tbody= document.getElementById('tbody');
    let uistring =`<tr>
    <td>${book.name}</td>
    <td>${book.author}</td>
    <td>${book.type}</td>
</tr>`
tbody.innerHTML+=uistring;
   }

Display.prototype.validat=function(book){
    if(book.name.length<2 || book.author.length<2){
        return false;

    }
    else{
        return true;
    }
}

Display.prototype.clear=function(){
    bookform.reset();
}

Display.prototype.show=function (type, displaymessage){
    let message=document.getElementById('message');
    let html=`<div class="alert alert-${type} alert-dismissible fade show" role="alert">
    <strong>Messge:</strong> ${displaymessage}
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">×</span>
    </button>
</div>`;
message.innerHTML=html;

setTimeout(function(){
    message.innerHTML="";
},2000)
}












