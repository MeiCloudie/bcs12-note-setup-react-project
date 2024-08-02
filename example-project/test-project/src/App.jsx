import { DatePicker } from "antd"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBlog } from "@fortawesome/free-solid-svg-icons"
import reactAnimation from "./assets/animation/reactAnimation.json"
import Lottie from "lottie-react"

function App() {
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
    </>
  )
}

export default App
