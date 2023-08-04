let modal = document.querySelector(".modal");
let loginButton = document.querySelector(".login_button");
let closeButton = document.querySelector(".close");

const openModal = () => (modal.style.display = "block");
const closeModal = () => (modal.style.display = "none");

const outsideClick = (e) => {
    if (e.target == modal) closeModal();
};

loginButton.addEventListener("click", openModal);
closeButton.addEventListener("click", closeModal);
window.addEventListener("click", outsideClick);