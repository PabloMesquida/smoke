import { Outlines } from '@react-three/drei'

function Table() {
  return (
    <mesh position={[0, -1.4, 0]}>
      <cylinderGeometry args={[1.5, 1.5, 0.2, 64]} position={[0, 0.15, 0]} />
      <meshToonMaterial color='#424f61' />
      <Outlines thickness={0.01} color='black' />
    </mesh>
  )
}

export default Table
