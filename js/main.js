


const btnSbmtMain = document.querySelector(".btn-submit-main");
const inputMain = document.querySelector(".input-main");
const total = document.querySelector(".total");
const mainContainer = document.querySelector(".main-container");

btnSbmtMain.addEventListener("click", getInputMain);
let roles = [];
let arrList = [];
!localStorage.roles
  ? (arrList = [])
  : (arrList = JSON.parse(localStorage.getItem("roles")));
roles = JSON.parse(localStorage.getItem("info"));

function getInputMain() {
  for (let role of roles) {
    if (inputMain.value === role.name) {
      arrList.push(role);
      console.log(arrList);
      updateDataLocal();
    }
  }
  addTemplate();
  updateTotal();
  calcTotal();
  inputMain.value = "";
}

function createTemplate(role, index) {
  return `
        <div class="role-name">
         <span class="text-role">${role.name}</span>
         <button onclick="deleteTemplate(${index})" class="btn-remove-role trash">
           <i class="fa-solid fa-trash-can "></i>
         </button>
        </div>
    `;
}

function addTemplate() {
  mainContainer.innerHTML = "";
  arrList.forEach((role, index) => {
    mainContainer.innerHTML += createTemplate(role, index);
  });
}
addTemplate();

function updateDataLocal() {
  localStorage.setItem("roles", JSON.stringify(arrList));
}

function deleteTemplate(index) {
  arrList.splice(index, 1);
  updateDataLocal();
  addTemplate();
  updateTotal();
}
function updateTotal() {
    calcTotal()
  total.innerHTML = `${totalPrice}&#x20bd`
}

let totalPrice = 0;
function calcTotal() {
  totalPrice = 0;
  for (let item of arrList) {
    totalPrice += Number(item.price);
  }
  return totalPrice;
}
updateTotal()
