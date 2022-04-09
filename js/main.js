const inputName = document.querySelector(".input-name");
const inputSalary = document.querySelector(".input-salary");
const btnSbmt = document.querySelector(".btn-submit");
const content = document.querySelector(".content-container");
let data;
!localStorage.info
  ? (data = [])
  : (data = JSON.parse(localStorage.getItem("info")));
btnSbmt.addEventListener("click", getInput);
fillHtml();
function updateLocal() {
  localStorage.setItem("info", JSON.stringify(data));
}
function createObj() {
  if (inputName.value && inputSalary.value) {
    let obj = {
      name: inputName.value,
      price: inputSalary.value,
    };
    data.push(obj);
  }
}

function createElement(obj, index) {
  return `<div class="text-name">${obj.name}</div>
        <div class="text-slr">${obj.price}&#8381</div>
        `;
}
function getInput(event) {
  event.preventDefault();
  createObj();
  fillHtml();
  updateLocal();
  inputName.value = "";
  inputSalary.value = "";
}

function fillHtml() {
  content.innerHTML = "";
  if (data.length > 0) {
    data.forEach((role, index) => {
      content.innerHTML += createElement(role, index);
    });
  }
}

//   if (inputName.value && inputSalary.value) {
//     // content.innerHTML += `
//     //     <div class="text-name">${inputName.value}</div>
//     //     <div class="text-slr">${inputSalary.value}&#8381</div>
//     //     `;
//   }
