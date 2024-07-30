import { Canvas } from '@react-three/fiber'
import Experience from './Experience'

function App() {
  return (
    <Canvas
      shadows
      style={{ width: '100vw', height: '100vh', touchAction: 'none', backgroundColor: '#424f61' }}
      camera={{ fov: 20, near: 0.1, far: 20, position: [0, 5, 9] }}
    >
      <directionalLight intensity={2} position={[1.5, 1.5, 1]} color='#ffe7d6' />
      <Experience />
    </Canvas>
  )
}

export default App
