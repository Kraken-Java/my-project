import { openBtn, } from './modal'

function forms(formSelector, modalTimeId) {
  const form = document.querySelector(formSelector)
  const token = '9009004884:AAFEvZYp1a4P6pCMyAWsz6rmAhK79AjA5_E'
  const chatId = '7682902755'
  const message = {
    loading: "Loading...",
    success: "Thanks To Contacting with us",
    fail: "Something went wrong"
  }
  form.addEventListener("submit", (event) => {
    event.preventDefault()

    const loader = document.createElement("div")
    loader.classList.add("loader")
    loader.classList.add("loader_center")
    loader.style.width = '20px'
    loader.style.height = '20px'
    loader.style.marginTop = '10px'
    form.append(loader)
    const formData = new FormData(form)

    const object = {}

    formData.forEach((value, key) => {
      object[key] = value
    })
    sendMessageToTelegram(loader, object)
  })
  async function sendMessageToTelegram(loader, object) {
      try {

         await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
          method: "POST",
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            chat_id: chatId,
            text: `Name: ${object.name}, Phone: ${object.phone}`
          })
        })
        showStatusMessage(message.success)
      } catch {
        showStatusMessage(message.fail)
      }finally{
        loader.remove(),
        form.reset()
      }
    }
  function showStatusMessage(message) {
    const modalDialog = document.querySelector(".modal__dialog")

    modalDialog.classList.add("hide")
    openBtn(".modal", ".modal__content", modalTimeId)

    const statusModal = document.createElement("div")

    statusModal.classList.add("modal__dialog")
    statusModal.innerHTML = `
    <div class="modal__content">
    <div data-modal-close class="modal__close">&times;</div>
    <div class="modal__title">${message}</div>
    </div>
    `

    document.querySelector(".modal").append(statusModal)

    setTimeout(() => {
      statusModal.remove()
      modalDialog.classList.remove("hide")
    }, 5000);
  }
}

export default forms