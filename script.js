let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");


btn.addEventListener("click", function(){
    let item = document.createElement("li");//creating  a new element for list item (list item created)
    item.innerText = inp.value;

    let dlBtn = document.createElement("button");
    dlBtn.innerText = "Delete";
    dlBtn.classList.add("delete");

     
    item.appendChild(dlBtn);
     ul.appendChild(item);//as a child element we are adding in ul
    inp.value = "";
})





ul.addEventListener("click", function(event){
    if(event.target.nodeName == "BUTTON"){
        let listItem = event.target.parentElement;
        listItem.remove();
        console.log("Deleted");
    }
})
/*
//For delete btn eventListener and this only applies to the existing list item not for new one (so use event delegation) 
let delBtns = document.querySelectorAll(".delete");
for(delBtn of delBtns){
    delBtn.addEventListener("click", function(){
        let par = this.parentElement;
        console.log(par);
        par.remove();
        })
}*/