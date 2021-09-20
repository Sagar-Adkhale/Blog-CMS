import './backbutton.css'
import { useHistory } from 'react-router-dom';

export default function AboutUs() {
  const history = useHistory();
  const pathName=history.location.pathname;
  console.log( "path name ", typeof(pathName));

  const handleBack=()=>{
    console.log(history);
    console.log( "path name ", history.location.pathname);
    history.goBack();

  }
  
  return (

<div className="backButton">
    <i 
 className="fas fa-arrow-alt-circle-left fa-lg	"
 onClick={handleBack}
 />   </div>    )
    }
    