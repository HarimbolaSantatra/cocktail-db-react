
// MODAL MEMU FOR MOBILE

const toggleModal = () => {
    const modalMenu = document.querySelector('.modal-menu');
    if (modalMenu.classList.contains('hide')){
        modalMenu.classList.add("show");
        modalMenu.classList.remove("hide");
    }
    else if (modalMenu.classList.contains('show')){
        modalMenu.classList.remove("show");
        modalMenu.classList.add("hide");
    }
    else{
        modalMenu.classList.remove("show");
        modalMenu.classList.add("hide");
    }
} 

// Open modal: Burger menu
const modalToggler = document.querySelector(".burger-menu");
modalToggler.addEventListener('click', () => {
   toggleModal(); 
});

// Close modal
const modalCloseBtn = document.querySelector(".modal-close-btn");
modalCloseBtn.addEventListener('click', () => {
    toggleModal();
});

// All buttons
const buttons = document.querySelectorAll(".Button");
buttons.forEach((toggler) => {
    toggler.addEventListener('click', () => {
        alert("You clicked a button");
    });
});
