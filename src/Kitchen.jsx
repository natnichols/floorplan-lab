import Oven from "./Oven"
import Sink from "./Sink"
import Fridge from "./Fridge"

const Kitchen = (props) => {
  return ( 
    <div>
      Kitchen
      <Oven />
      <Sink />
      <Fridge />
    </div>
  )
}

export default Kitchen;