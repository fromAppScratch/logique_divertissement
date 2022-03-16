// document.querySelector('.fa-times').style.display = "none"

// const menuBtn = document.querySelector(".btn_menu")
// const menu = document.querySelector(".menu")

// menuBtn.onclick = function(){

//     if (menu.style.right == "-250px"){

//         menu.style.right = "0"
//         document.querySelector('.fa-times').style.display = "";
//        document.querySelector('.fa-bars').style.display = "none";
//      }else{
//          menu.style.right = "-250px"
//          document.querySelector('.fa-times').style.display = "none";
//          document.querySelector('.fa-bars').style.display = "";     
//      }
// }

let toggle = document.querySelector('.toggle');
let navigation = document.querySelector('.navigation');
let main = document.querySelector('.main');

toggle.onclick = function(){
  navigation.classList.toggle('active');
  main.classList.toggle('active');
}

