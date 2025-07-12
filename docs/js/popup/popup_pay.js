const POPUP_PAY_OPENED_CLASSNAME = 'popup_open';
const BODY_PAY_FIXED_CLASSNAME = "body_fixed";
const HTML_PAY_FIXED_CLASSNAME = "html_fixed"

const bodyNodePAY = document.querySelector("body");
const htmlNodePAY = document.querySelector("html")
const popupNodePAY = document.querySelector('.js-popupPAY');
const btnOpenNodePAY = document.getElementById('pay_btn');
const popupContentNodePAY = document.querySelector(".js-popup__contentPAY")
const btnCloseNodePAY = document.querySelector('.js-popup__close-btnPAY');

btnOpenNodePAY.addEventListener('click', togglePopup);
btnCloseNodePAY.addEventListener('click', togglePopup);
popupNodePAY.addEventListener("click" , (event) =>{
    const isClickOutsideContentPAY = !event.composedPath().includes(popupContentNodePAY)

    if (isClickOutsideContentPAY) {
        togglePopup();
    }
})


function togglePopup() {
    popupNodePAY.classList.toggle(POPUP_PAY_OPENED_CLASSNAME);
    bodyNodePAY.classList.toggle(BODY_PAY_FIXED_CLASSNAME);
    htmlNodePAY.classList.toggle(HTML_PAY_FIXED_CLASSNAME)
}
