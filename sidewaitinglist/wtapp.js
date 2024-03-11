let listContainer = document.getElementById('list-container')
let head = document.querySelector('head')
let inputBox = document.getElementById('input-box')

function handleKeyPress(event) {
    // Check if the pressed key is Enter (key code 13)
    if (event.keyCode === 13) {
        // Call the addTask function
        addTask();
    }
}

function addTask(){
    if(inputBox.value == ''){
        alert('Please Enter the Text')
    }
    else{
        const task = document.createElement('li')
        task.textContent = inputBox.value;
        listContainer.appendChild(task)
        // inputBox.value = ''
        let span = document.createElement('span')
        span.textContent = "\u00d7"
        task.appendChild(span)
        span.style.right = '0px';
    }
    inputBox.value = '';
    saveData()
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

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML)
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask()

// Function to handle the click event of the back button
function goBack() {
    // Redirect the current tab to the dashboard URL
    window.location.href = "../../Main Dashboard/MDindex.html";
}



// navigation js

