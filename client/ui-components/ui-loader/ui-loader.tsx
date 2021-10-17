import Loader from "react-loader-spinner";
import "../../styles/ui-loader.module.scss"

const UiLoader=()=>{
  return(
    <div className="loader-main">
      <Loader
        type="Grid"
        color="#00BFFF"
        height={100}
        width={100}
      />
    </div>
  )
}

export default UiLoader