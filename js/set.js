
const inputName = document.querySelector(".input-name");
const inputSalary = document.querySelector(".input-salary");
const btnSbmt = document.querySelector(".btn-submit");
const content = document.querySelector(".content-container");
const trash = document.querySelector(".trash");

trash.addEventListener('click', event => {
  console.log(event.target)
})



//SET AN ARRAY
let data;
// CHECK IF A LOCAL STORAGE IS NOT EMPTHY
!localStorage.info
  ? (data = [])
  : (data = JSON.parse(localStorage.getItem("info")));

btnSbmt.addEventListener("click", getInput);

// GET DATA FROM INPUT
function getInput(event) {
  event.preventDefault();
  createObj();
  fillHtml();
  updateLocal();
  inputName.value = "";
  inputSalary.value = "";
}
// CREATE and ADD INTO ARR
function createObj() {
  if (inputName.value && inputSalary.value) {
    let obj = {
      name: inputName.value,
      price: inputSalary.value,
    };
    data.push(obj);
  }
}

function updateLocal() {
  localStorage.setItem("info", JSON.stringify(data));
}
//  CREATE TEMPLATE
function createElement(obj, index) {
  
  return `
  <div class="content-container">
  <div class="text-name">${obj.name}</div>
  <div class="text-slr"><span>${obj.price}&#8381</span>
  <button onclick="deleteObj(${index})" class="trash">
  <i class="fa-solid fa-trash-can "></i>
  </button>
  </div>
</div>
        `;
}
// FILL PAGE FROM ARR
function fillHtml() {
  content.innerHTML = "";
  if (data.length > 0) {
    data.forEach((role, index) => {
      content.innerHTML += createElement(role, index);
    
    });
  }
}
fillHtml();

function deleteObj(index) {
 data.splice(index, 1)
 updateLocal()
 fillHtml()
}




// document.addEventListener('click', (event) => {

// if(event.target.localName === btnsTrash.localName) {
//   event.target
//    data.pop()
//   updateLocal();
//    fillHtml();
  //  
// }
  
// })