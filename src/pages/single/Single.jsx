import SideBar from "../../components/sidebar/SideBar"
import SinglePost from "../../components/singlepost/SinglePost"
import "./single.css"

export default function Single() {
  return (
    <div className="single">
     <SinglePost /> 
     <SideBar />
  </div>

  )
}
