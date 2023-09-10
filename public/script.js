
// MODAL MEMU FOR MOBILE

const toggleModal = () => {
    const modalMenu = document.getElementById('modal-menu');
    if (modalMenu.classList.contains('hide')){
        modalMenu.className = "show";
    }
    else if (modalMenu.classList.contains('show')){
        modalMenu.className = "hide";
    }
    else{
        modalMenu.className = "hide";
    }
} 

// Open modal: Burger menu
const modalToggler = document.getElementById("burger-menu");
modalToggler.addEventListener('click', () => {
   toggleModal(); 
});

// Close modal
const modalCloseBtn = document.getElementById("modal-close-btn");
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
