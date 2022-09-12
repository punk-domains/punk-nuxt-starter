import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

const options = {
  timeout: 5000,
  hideProgressBar: true,
  closeButton: "button",
  position: "top-left",
  toastClassName: "punk-toast-class",
  closeOnClick: false,

  toastDefaults: {
    // ToastOptions object for each type of toast
    ["info"]: {
        timeout: false,
        icon: false
    }    
  }
}

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Toast, options)
});