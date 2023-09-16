
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

// Default buttons onclick behavior
const buttons = document.querySelectorAll(".Button.default");
buttons.forEach((toggler) => {
    toggler.addEventListener('click', () => {
        alert("You clicked a button");
    });
});


// Toggle leader page announcement
const toggleAnnouncement = () => {
    const announcement = document.querySelector('.Announcement');
    if (announcement.classList.contains("hide")) {
        announcement.classList.remove("hide");
        announcement.classList.add("show");
    }
    else if (announcement.classList.contains("show")) {
        announcement.classList.remove("show");
        announcement.classList.add("hide");
    }
    else {
        announcement.classList.add("hide");
    }
}
const announcementButton = document.getElementById('Announcement_button');
announcementButton.addEventListener('click', () => {
    toggleAnnouncement();
});