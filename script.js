
// fullname =prompt ("what is your name ?");
// console.log("hello"+ fullname)
//ocument.getElementById("hed").innerHTML = "hello" + " " + fullname;
function myfunction(){
    let name=document.getElementById("name").value;
    document.getElementById("hed").innerHTML = "hello" + " " + name;
}
let name = document.getElementById("name");
let button = document.getElementById("btn");

name.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {
        myfunction();  
    }
});
