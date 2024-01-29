import Bedroom from './Bedroom'
import Kitchen from './Kitchen'
import Bath from './Bath'
import LivingRoom from './LivingRoom'

const FloorPlan = (props) => {
  return ( 
    <>
      <div>
        <Bedroom />
      </div>
      <div>
        <Kitchen />
      </div>
      <div>
        <Bath />
      </div>
      <div>
        <Bedroom />
      </div>
      <div>
        <LivingRoom />
      </div>
      <div>
        <Bath />
      </div>
      <div>
        <Bedroom />
      </div>
    </>
  )
}

export default FloorPlan;