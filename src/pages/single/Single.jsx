import "./single.css";
import Sidebar from "../../components/sidebar/Sidebar";
import SinglePost from "../../components/singlePost/SinglePost";

export default function Single(props) {
  let id =parseInt( props.match.params.id);
  return (
    <div className="single">
      <SinglePost pid={id}/>
    </div>
  );
}
