const container = document.querySelector('.main');

const mainItem=document.querySelector(".mt");
container.addEventListener('mouseover', function(){
  container.style.backgroundColor = 'silver';
  mainItem.style.scale="1.4";

});

container.addEventListener('mouseout',function(){
  container.style.backgroundColor="white";

  mainItem.style.scale="1";
})


const mainRight = document.querySelector('.main-right');
const images = [
    'assets/img1.jpg',
    'assets/img2.jpg',
    'assets/img3.jpg',
    'assets/img4.jpg'
];
let currentIndex = 0;

function changeImage() {
    mainRight.style.backgroundImage = `url(${images[currentIndex]})`;
    currentIndex = (currentIndex + 1) % images.length;
}

changeImage();
setInterval(changeImage, 3000);

document.addEventListener("DOMContentLoaded", function() {
const explore=document.querySelector(".red");
const explink="https://en.wikipedia.org/wiki/Virat_Kohli";
explore.addEventListener("click",function(){

window.location.href= explink;

});
});

const sidebar = document.querySelector(".sidebar");
const dropdownContent = document.querySelector(".dropdown-content");
sidebar.addEventListener("click", function() {
    // Toggle the visibility of the dropdown content
    if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
    } else {
        dropdownContent.style.display = "block";
    }
});