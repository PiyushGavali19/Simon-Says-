let gameseq = [];
let userseq = [];

let btns = ["yellow", "red","purple","green"];

let started =  false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("Game started");
        started = true;
    }
    levelup();
})

function btnFlash(btn){
    btn.classList.add("Flash");
    setTimeout(function(){
        btn.classList.remove("Flash");
    },215);
}

function levelup(){
    userseq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let random_ind = Math.floor(Math.random() * 3);
    let random_col = btns[random_ind];
    let randm_btn = document.querySelector(`.${random_col}`);

    // console.log(randm_btn);
    // console.log(random_col);
    // console.log(random_ind);

    gameseq.push(random_col);
    console.log(gameseq);
    btnFlash(randm_btn);
}

function checkAns(){
    let idx = level - 1;
    if(userseq[idx] === gameseq[idx]){
        if(userseq.length == gameseq.length){
            setTimeout(levelup,700);
        }
    }else{
        h2.innerHTML = `Game Over!! your score was <b>${level}</b> <br> Press any Key to Start `;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white"
        },150);
        reset();
    }
    }


function btnpress(){
    let btn = this;
    btnFlash(btn);

    userColor = btn.getAttribute("id");
    // console.log(usercol);
    userseq.push(userColor);

    checkAns();
}

let allbtns = document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnpress);
}

function reset(){
    started = false;
    gameseq = [];
    userseq = [];
    level = 0;
}