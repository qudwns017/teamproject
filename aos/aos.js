let pcbox = document.querySelector('.pcgames');
let mbbox = document.querySelector('.mbbox');

function openmb() {
  pcbox.style.width = "0";
  mbbox.style.width = "100%";
}

function openpc() {
  mbbox.style.width = "0";
  pcbox.style.width = "100%";
}



let rpggames = document.querySelector('.rpggames');
// rpggames 메인

let video = document.querySelector('.videobg');
let closebutton1 = document.querySelector('.videoclose1');
let closebutton2 = document.querySelector('.videoclose2');
let closebutton3 = document.querySelector('.videoclose3');
let closebutton4 = document.querySelector('.videoclose4');
let closebutton5 = document.querySelector('.videoclose5');
let closebutton6 = document.querySelector('.videoclose6');

let openbutton = document.querySelector('.videodiv');
// 영상

let loavideo = document.querySelector('#lostarkvideo');
let diavideo = document.querySelector('#diablovideo');
let maplevideo = document.querySelector('#maplevideo');
let dunvideo = document.querySelector('#dunvideo');
let mabivideo = document.querySelector('#mabievideo');
let monsvideo = document.querySelector('#monsvideo');
// 게임 트레일러 


let youtube1 = document.querySelector('.youtube1');
let youtube2 = document.querySelector('.youtube2');
let youtube3 = document.querySelector('.youtube3');
let youtube4 = document.querySelector('.youtube4');
let youtube5 = document.querySelector('.youtube5');
let youtube6 = document.querySelector('.youtube6');
// 유튭div


function openvideo1() {
  youtube1.style.display = "block";
};
function openvideo2() {
  youtube2.style.display = "block";
};
function openvideo3() {
  youtube3.style.display = "block";
};
function openvideo4() {
  youtube4.style.display = "block";
};
function openvideo5() {
  youtube5.style.display = "block";
};
function openvideo6() {
  youtube6.style.display = "block";
};

function closevideo1() {
  closebutton1.addEventListener('click', () => {
    youtube1.style.display = "none";
    youtube1.style.sound = "none";
  })
};


function closevideo2() {
  closebutton2.addEventListener('click', () => {
    youtube2.style.display = "none";
  })
};

function closevideo3() {
  closebutton3.addEventListener('click', () => {
    youtube3.style.display = "none";
  })
};

function closevideo4() {
  closebutton4.addEventListener('click', () => {
    youtube4.style.display = "none";
  })
};

function closevideo5() {
  closebutton5.addEventListener('click', () => {
    youtube5.style.display = "none";
  })
};

function closevideo6() {
  closebutton6.addEventListener('click', () => {
    youtube6.style.display = "none";
  })
};

