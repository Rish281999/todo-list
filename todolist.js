let input = document.querySelector("input");
let btn = document.querySelector("button");
let container = document.querySelector("ul");
let listContainer = document.querySelector("#list-container");

console.log(input.value);

btn.addEventListener("click", () => {
    if (input.value === "") {
        alert("You must write something!!!")
    } else{
        let listItem = document.createElement("li");
        listItem.innerHTML = input.value;
        listContainer.appendChild(listItem);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        listItem.appendChild(span);
    }
    input.value = "";
    saveData()
});

listContainer.addEventListener("click", (e)=>{
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData()
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData()
    }
});

function saveData(){
    localStorage.setItem("taskData", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("taskData")
}
showTask();

//* Alternate way
// btn.addEventListener("click", () => {
//     if (input.value != "") {
//         container.innerHTML += `<li><span>${input.value} </span><i class = "fa-solid fa-trash"</i></li>`;
//         input.value = "";
//         let deleteBtn = document.querySelectorAll(".fa-trash");
//         console.log(deleteBtn);
//         deleteBtn.forEach((e)=>{
//             console.log(e);
//         })
//     }
// });