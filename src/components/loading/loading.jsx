import "./loading.css";
import { ScaleLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="loading">
      <ScaleLoader color="red" />
    </div>
  )
}

export default Loading