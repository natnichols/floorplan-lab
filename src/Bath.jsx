import Sink from "./Sink";
import Toilet from "./Toilet";

const Bath = (props) => {
  return ( 
    <div>
      {props.size} Bath
      <Sink />
      <Toilet />
      {props.shower === 1 ? <div>Shower</div> : '' }
    </div>
  );
}
 
export default Bath;