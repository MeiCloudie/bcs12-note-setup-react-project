import { DatePicker } from "antd"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBlog } from "@fortawesome/free-solid-svg-icons"
import reactAnimation from "./assets/animation/reactAnimation.json"
import Lottie from "lottie-react"
// Import Toastify
import { Bounce, ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

function App() {
  // Manage Toastify
  const notify = () =>
    toast("🦄 Wow so easy!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    })

  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <DatePicker />
      <FontAwesomeIcon icon={faBlog} />
      <Lottie
        animationData={reactAnimation}
        loops
        style={{ width: "100px", height: "100px" }}
      />

      {/* Demo Toastify */}
      <div>
        <button onClick={notify}>Notify!</button>
        <ToastContainer />
      </div>
    </>
  )
}

export default App
