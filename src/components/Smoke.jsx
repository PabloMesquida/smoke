import { useEffect, useRef } from 'react'
import { useFrame, useLoader } from '@react-three/fiber'
import { DoubleSide, RepeatWrapping, TextureLoader, Uniform } from 'three'
import smokeVertexShader from '../shaders/smoke/vertex.glsl'
import smokeFragmentShader from '../shaders/smoke/fragment.glsl'

function Smoke({ uRotate }) {
  const ref = useRef()
  const materialRef = useRef()

  const perlinTexture = useLoader(TextureLoader, '/img/perlin.png')
  perlinTexture.wrapS = RepeatWrapping
  perlinTexture.wrapT = RepeatWrapping

  useEffect(() => {
    ref.current.translate(0, 0.5, 0)
  }, [])

  useFrame((state, delta) => {
    materialRef.current.uniforms.uTime.value += delta
  })

  return (
    <mesh scale={[1.5, 3, 1.5]} position={[0, -0.75, 0]}>
      <planeGeometry args={[1, 1, 16, 32]} ref={ref} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={smokeVertexShader}
        fragmentShader={smokeFragmentShader}
        uniforms={{
          uTime: new Uniform(0),
          uPerlinTexture: new Uniform(perlinTexture),
          uRotate: new Uniform(uRotate)
        }}
        transparent
        side={DoubleSide}
        depthWrite={false}
      />
    </mesh>
  )
}
export default Smoke
