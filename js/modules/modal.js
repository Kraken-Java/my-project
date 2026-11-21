function openBtn(modalContentSelector, modalSelector, modalTimeId) {
    const   modalContent = document.querySelector(modalContentSelector),
    modal = document.querySelector(modalSelector)
    modal.classList.add("show");
    modalContent.classList.add("modal-fade");
    modal.classList.remove("hide");
    document.body.style.overflow = "hidden";
    if(modalTimeId) {
        clearInterval(modalTimeId);
    }
  }
  function closeBtn(modalSelector,) {
    const modal = document.querySelector(modalSelector)
    modal.classList.add("hide");
    modal.classList.remove("show");
    document.body.style.overflow = "";
  }

function modal(btnSelector, modalSelector,modalContentSelector, modalTimeId){
    const modalOpenBtn = document.querySelectorAll(btnSelector),
    modal = document.querySelector(modalSelector)

  modalOpenBtn.forEach((btn) => {
    btn.addEventListener("click", () => openBtn(modalContentSelector, modalSelector,modalTimeId));
  });
  modal.addEventListener("click", (event) => {
    if (event.target.matches("[data-modal-close]")) {
      closeBtn(modalSelector);
    }
  });

  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeBtn(modalSelector);
    }
  });
  document.addEventListener("keydown", (event) => {
    if (event.code === "Escape" && modal.classList.contains("show")) {
      closeBtn();
    }
  });

}

export default modal
export {openBtn, closeBtn}