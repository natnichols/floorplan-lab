import Lamp from "./Lamp"
import Bed from "./Bed";

const Bedroom = (props) => {
  return ( 
    <div>
      Bedroom {props.bedroomNum}
      <Bed size='Queen'/>
      <Lamp />
    </div>
  );
}

export default Bedroom;