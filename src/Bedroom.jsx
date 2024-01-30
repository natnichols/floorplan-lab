import Lamp from "./Lamp"

const Bedroom = (props) => {
  return ( 
    <div>
      Bedroom {props.bedroomNum}
      <Lamp />
    </div>
  );
}

export default Bedroom;