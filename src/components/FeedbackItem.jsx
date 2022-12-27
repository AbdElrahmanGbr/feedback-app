import Card from "./shared/Card";
import PropTypes from "prop-types";
import {FaTimes} from "react-icons/fa";
import FeedbackContext from "../context/FeedbackContext";
import {useContext} from "react";
function FeedbackItem({item}) {
    const {deleteFeedback} = useContext(FeedbackContext);
    return (
  <Card>
      <div className={"num-display"}>{item.rating}</div>
      <button onClick={()=>deleteFeedback(item.id)} className={"close"}>
          <FaTimes color={'purple'} />
      </button>
      <div className={"text-display"}>
          {item.text}
      </div>
      <button>Click</button>
  </Card>
 );}

FeedbackItem.propTypes ={
    item: PropTypes.object.isRequired
}
export default FeedbackItem;