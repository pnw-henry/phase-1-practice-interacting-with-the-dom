const counter = document.getElementById("counter");
const minusButton = document.getElementById("minus");
const plusButton = document.getElementById("plus");
const heartButton = document.getElementById("heart");
const pauseButton = document.getElementById("pause");
const submitButton = document.getElementById("submit");
const ul = document.querySelector(".likes");
const form = document.getElementById("comment-form");
const userComment = document.getElementById("comment-input");

let isPause = false;
let count = 0;
let likes = 0;
const likesArray = {};

let time = setInterval(()=> {
    if (!isPause){
    count++;
    timerDisplay();
    }
}, 1000);

minusButton.addEventListener("click", () => {
    if (count > 0){
        count--;
        timerDisplay();
    }
});
    
plusButton.addEventListener("click", () => {
    count++;
    timerDisplay();
});
    
pauseButton.addEventListener("click", () => {
    
    if (pauseButton.innerText === "pause"){
        isPause = true;
        pauseButton.innerText = "resume";
        minusButton.disabled = true;
        plusButton.disabled = true;
        heartButton.disabled = true;
    }
    else {
        isPause = false;
        pauseButton.innerText = "pause";
        minusButton.disabled = false;
        plusButton.disabled = false;
        heartButton.disabled = false;
    }

});

function likeCounter (count){
    
        if (count in likesArray){
            const liID = document.getElementById(String(count));
            likesArray[count] = likesArray[count] + 1;
            liID.innerText = `${count} has been liked ${likesArray[count]} times.`;

        }
        else {
            const li = document.createElement("li");
            li.id = count;
            console.log(li.id);
            likesArray[count] = 1;
            li.innerText = `${count} has been liked ${likesArray[count]} time.`;
            ul.appendChild(li);
        }  
    
}

heartButton.addEventListener("click", () => {
    likeCounter(count);
})

form.addEventListener("submit", (e) =>{
    e.preventDefault();

    if (userComment.value === ""){
        alert("Add text!");
    }
    else {
        addComment();
    }
})

function addComment(){
    const newComment = document.createElement("p");
    newComment.className = "comment-entry";
    newComment.textContent = userComment.value;
    form.appendChild(newComment);
    userComment.value = "";
}

function timerDisplay(){
    counter.innerText = count;
}

document.addEventListener("DOMContentLoaded", timerDisplay)
