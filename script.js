const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container"); 
const error = document.getElementById("error"); 

function validate(){
    if (!inputBox.value) {
        error.style.display = "block";
        return false;
    } else {
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    if (!inputBox.value.trim()) {
        error.style.display = "block";
        error.innerHTML = "should not consist of probels❗";
        return false;
    } else {
        error.style.display = "none";
    }
        
    }
    inputBox.value = '';
    saveData()

listContainer.addEventListener('click', function (e) {
    if(e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
        saveData()
    } else if(e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
        saveData()
    }
})
inputBox && inputBox.addEventListener('keyup', function (event) {
    if (event.keyCode === 13) {
        if (!inputBox.value) {
            error.style.display = "block";
            return false;
        } else {
            let li = document.createElement('li');
            li.innerHTML = inputBox.value;
            listContainer.appendChild(li);
            let span = document.createElement('span');
            span.innerHTML = "\u00d7";
            li.appendChild(span);
        }
        if (!inputBox.value.trim()) {
            error.style.display = "block";
            error.innerHTML = "should not consist of probels❗";
            return false;
        } else {
            error.style.display = "none";
        }
        inputBox.value = '';
        saveData()

    }
});

btn.addEventListener("click", function () {
    if (validate()){
          
    }
}, false);


function saveData() {
    localStorage.setItem('data', listContainer.innerHTML);
}
function show() {
    listContainer.innerHTML = localStorage.getItem('data');
} show();




