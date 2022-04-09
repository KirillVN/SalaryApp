const inputName = document.querySelector('.input-name');
const inputSalary = document.querySelector('.input-salary');
const btnSbmt = document.querySelector('.btn-submit');
const content = document.querySelector('.content-container');
let data = [];


btnSbmt.addEventListener('click', getInput);


function updateLocal() {
    localStorage.setItem('info', JSON.stringify(data))
}
function getInput(event) {
    event.preventDefault();
    if(inputName.value && inputSalary.value) {
        createObj()
        content.innerHTML += `
        <div class="text-name">${inputName.value}</div>
        <div class="text-slr">${inputSalary.value}&#8381</div>
        `
        updateLocal()
        inputName.value = ''
        inputSalary.value = ''
    }
}

function createObj() {
    let obj = {
        name: inputName.value,
        price: inputSalary.value,
    }
    data.push(obj)
}
