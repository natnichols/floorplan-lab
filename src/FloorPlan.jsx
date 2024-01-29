import Bedroom from './Bedroom'
import Kitchen from './Kitchen'
import Bath from './Bath'
import LivingRoom from './LivingRoom'

const FloorPlan = (props) => {
  return ( 
    <>
        <Bedroom bedroomNum={1} />
        <Kitchen />
        <Bath size={'Full'} />
        <Bedroom bedroomNum={2} />
        <LivingRoom />
        <Bath size={'Half'} />
        <Bedroom bedroomNum={3} />
    </>
  )
}

export default FloorPlan;