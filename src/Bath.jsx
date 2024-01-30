import Sink from "./Sink";
import Toilet from "./Toilet";

const Bath = (props) => {
  return ( 
    <div>
      {props.size} Bath
      <Sink />
      <Toilet />
    </div>
  );
}
 
export default Bath;