'use strict';

/* ======= ======= ======= ======= ======= */
/* [ Modified ] POPOP.JS Original by @catcarbn ♡
/  https://catcarbonell.github.io/popop/
/* ======= ======= ======= ======= ======= */

///* - DOCUMENT ELEMENTS - *///
//* - Main Modal - *//
var modalContent = document.querySelector('.popop-content');
//* - Button Calls - *//
var btn = document.querySelectorAll('.button');
var openBtn = document.querySelectorAll('.popop-open-btn');
var closeBtn = document.querySelectorAll('.popop-close-btn');

/* ======= ======= ======= ======= ======= */

var openModalArr = [];
///* - FUNCTIONS - *///

//* - VISIBILITY - *//
//* - Open Modal - *//
function openModal(modalId) {
    var modal = document.getElementById('' + modalId);
    modal.classList.add('popop-show');
    openModalArr.push(modal);
};
function closeModal() {
    if (!openModalArr.length) {
        return;
    }
    var modal = openModalArr[openModalArr.length - 1];
    modal.classList.remove('popop-show');
    openModalArr.pop();
}
//* - EVENT LISTENERS - *//
//* - Open Modal - *//
function openModalEvent() {
    openBtn.forEach(function (trigger) {
        trigger.addEventListener('click', function (e) {
            var targetModal = e.target;
            var modalId = targetModal.getAttribute('data-modal-id');
            openModal(modalId);
        });
    });
};
//* - Close Modal - *//
function closeModalEvent() {
    closeBtn.forEach(function (trigger) {
        trigger.addEventListener('click', function (e) {
            e.stopImmediatePropagation();
            closeModal();
        });
    });
};

//** - INIT POPOP.JS! - **//
openModalEvent();
closeModalEvent();