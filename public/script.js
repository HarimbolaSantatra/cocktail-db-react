// LIKE BUTTON
const toggleLike = (cardLikeDiv) => {
    let likeNb = parseInt(cardLikeDiv.lastChild.textContent);
    if (cardLikeDiv.classList.contains('liked')){
        cardLikeDiv.classList.remove('liked');
        cardLikeDiv.lastChild.textContent = likeNb - 1;
    } 
    else{
        cardLikeDiv.classList.add('liked');
        cardLikeDiv.lastChild.textContent = likeNb + 1;
    }
}
const cardLikeBtns = document.querySelectorAll('.Card_like') ;

cardLikeBtns.forEach(likeBtn => {
    likeBtn.addEventListener('click', ()=> {
        toggleLike(likeBtn);
    });
});

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
