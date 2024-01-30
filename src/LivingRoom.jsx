import Couch from "./Couch"
import Lamp from "./Lamp";

const LivingRoom = (props) => {
  return ( 
    <div>
      Living Room
      <Couch />
      <Lamp />
    </div>
  );
}

export default LivingRoom;