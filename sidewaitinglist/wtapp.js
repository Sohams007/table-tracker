let listContainer = document.getElementById('list-container');

function handleKeyPress(event, inputNumber) {
    if (event.keyCode === 13) {
        let nextInputBox = document.getElementById(`input-box${inputNumber + 1}`);
        if (nextInputBox) {
            nextInputBox.focus();
        } else {
            addTask();
            document.getElementById('input-box1').focus(); // Set focus to the first input box
        }
        event.preventDefault();
    }
}

function addTask() {
    let inputBox1 = document.getElementById('input-box1');
    let inputBox2 = document.getElementById('input-box2');
    let inputBox3 = document.getElementById('input-box3');
    let inputBox4 = document.getElementById('input-box4');

    let value1 = inputBox1.value;
    let value2 = inputBox2.value;
    let value3 = inputBox3.value;
    let value4 = inputBox4.value;

    let concatenatedValue = `${value1}___${value2}___${value3}___${value4}`;

    if (concatenatedValue.trim() === '') {
        alert('Please enter text in all input boxes.');
        return;
    }

    const task = document.createElement('li');
    task.textContent = concatenatedValue;
    listContainer.appendChild(task);

    let span = document.createElement('span');
    span.textContent = "\u00d7";
    task.appendChild(span);
    span.style.right = '0px';

    // Clear input boxes after adding task
    inputBox1.value = '';
    inputBox2.value = '';
    inputBox3.value = '';
    inputBox4.value = '';

    saveData();
}

listContainer.addEventListener('click', (e)=>{
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle("checked")
        saveData()
    }
    else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove()
        saveData()
    }
})

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();

document.getElementById('input-box1').addEventListener('keydown', (event) => handleKeyPress(event, 1));
document.getElementById('input-box2').addEventListener('keydown', (event) => handleKeyPress(event, 2));
document.getElementById('input-box3').addEventListener('keydown', (event) => handleKeyPress(event, 3));
document.getElementById('input-box4').addEventListener('keydown', (event) => handleKeyPress(event, 4));
