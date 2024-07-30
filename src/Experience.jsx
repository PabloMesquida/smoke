import { PresentationControls } from '@react-three/drei'
import Table from './components/Table'
import Shadow from './components/Shadow'
import Smoke from './components/Smoke'
import Ramen from './components/Ramen'

function Experience() {
  return (
    <PresentationControls
      cursor
      polar={[0, 0.05]}
      azimuth={[-Math.PI / 4, Math.PI / 4]}
      config={{ mass: 2, tension: 300 }}
      snap={{ mass: 4, tension: 300 }}
    >
      <group position={[0, 0.25, 0]}>
        <Smoke uRotate={1} />
        <Smoke uRotate={-1} />
        <Shadow />
        <Ramen />
        <Table />
      </group>
    </PresentationControls>
  )
}

export default Experience
