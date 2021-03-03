


    


function add() {
    var list = document.getElementById("list");
   


var wasif = firebase.database().ref("todos")
var key = wasif.push().key
var todo = {
    value: inpitem.value,
    key: key
}
console.log(todo)
wasif.child(key).set(todo)

wasif.on("child_added" , function(data){
    var inpitem = document.getElementById("inpitem");
    var litext = document.createTextNode(data.val().value);
        var li = document.createElement("li");
inpitem.value = ""


        
li.appendChild(litext);
list.appendChild(li)

        // ==================belbtn==================

var delbtn = document.createElement("button");
var deltext = document.createTextNode("Delete");
delbtn.appendChild(deltext);
li.appendChild(delbtn)

delbtn.setAttribute("id" , data.val().key)
delbtn.setAttribute("class", "btn");
delbtn.setAttribute("onclick" , "deleteitem(this)");


// =============editbtn===================

var editbtn = document.createElement("button");
var edittext = document.createTextNode("Edit");
editbtn.appendChild(edittext)
li.appendChild(editbtn)
editbtn.setAttribute("id" , data.val().key)
editbtn.setAttribute("class" , "btn")
editbtn.setAttribute("onclick" , "edititem(this)")
   })


   




}

function deleteitem(e) {
    firebase.database().ref("todos").child(e.id).remove()
    e.parentNode.remove();
}

function edititem(e) {
    var haseeb = e.parentNode.firstChild.nodeValue;
    var val = prompt("ENTER YOUR EDIT VALUE", e.parentNode.firstChild.nodeValue);

    var editodo = {
        value: val,
        key: e.id
    }
    
    firebase.database().ref("todos").child(e.id).set(editodo)
    e.parentNode.firstChild.nodeValue = val
}

function deleteall() {
    list.innerHTML = ""
}