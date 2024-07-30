import { Outlines, useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes } = useGLTF('/models/ramen.glb')
  const colorBowl = '#f5975b'
  const colorSoup = '#5C3202'
  const colorEgg = '#F5EEE4'
  const colorEgg1 = '#D1A610'
  const colorNoodles = '#F5E987'
  const colorOnion = '#89AB5A'
  const colorMeat = '#C45D41'
  const colorChamp = '#D49573'

  return (
    <group {...props} dispose={null} rotation={[0, -Math.PI / 1.2, 0]} position={[0, -1.3, 0]}>
      <mesh geometry={nodes.bowl.geometry} position={[0, 0.996, 0]}>
        <meshToonMaterial color={colorBowl} />
        <Outlines thickness={0.005} color='black' />
      </mesh>
      <mesh geometry={nodes.noodles.geometry} position={[0.074, 0.563, 0.007]} rotation={[2.416, 0.91, -2.583]} scale={1.272}>
        <meshToonMaterial color={colorNoodles} />
        <Outlines thickness={0.003} color='black' />
      </mesh>
      <mesh geometry={nodes.egg.geometry} position={[-0.21, 0.739, 0.416]} rotation={[-1.648, 0.218, 1.917]} scale={0.248}>
        <meshToonMaterial color={colorEgg} />
        <Outlines thickness={0.01} color='black' />
      </mesh>
      <mesh geometry={nodes.egg1.geometry} position={[-0.199, 0.733, 0.411]} rotation={[-0.618, -1.165, 2.563]} scale={[0.149, 0.043, 0.149]}>
        <meshToonMaterial color={colorEgg1} />
        <Outlines thickness={0.05} color='black' />
      </mesh>
      <mesh geometry={nodes.egg001.geometry} position={[0.18, 0.666, 0.29]} rotation={[-1.831, 0.203, 3.059]} scale={0.248}>
        <meshToonMaterial color={colorEgg} />
        <Outlines thickness={0.01} color='black' />
      </mesh>
      <mesh geometry={nodes.egg1001.geometry} position={[0.176, 0.659, 0.286]} rotation={[-0.277, -0.08, 2.938]} scale={[0.136, 0.039, 0.136]}>
        <meshToonMaterial color={colorEgg1} />
        <Outlines thickness={0.05} color='black' />
      </mesh>
      <mesh geometry={nodes.sopa.geometry} position={[0, 0.607, 0]} scale={0.892}>
        <meshToonMaterial color={colorSoup} opacity={0.4} transparent depthWrite={false} />
        <Outlines thickness={5} color='black' />
      </mesh>
      <mesh geometry={nodes.oninon.geometry} position={[0.295, 0.604, -0.661]} rotation={[-0.618, -0.503, -0.101]} scale={[0.039, 0.014, 0.039]}>
        <meshToonMaterial color={colorOnion} />
        <Outlines thickness={0.05} color='black' />
      </mesh>
      <mesh geometry={nodes.meat002.geometry} position={[-0.346, 0.688, -0.454]} rotation={[0.559, 0.968, -0.647]} scale={[0.412, 0.027, 0.237]}>
        <meshToonMaterial color={colorMeat} />
        <Outlines thickness={0.02} color='black' />
      </mesh>
      <mesh geometry={nodes.champ.geometry} position={[-0.15, 0.6, -0.13]} rotation={[-0.389, -0.52, -0.745]} scale={[0.138, 0.024, 0.138]}>
        <meshToonMaterial color={colorChamp} />
        <Outlines thickness={0.05} color='black' />
      </mesh>
      <mesh geometry={nodes.sopa001.geometry} position={[-0.004, 0.556, 0.009]} scale={0.876}>
        <meshToonMaterial color={colorSoup} opacity={0.4} transparent depthWrite={false} />
      </mesh>
      <mesh geometry={nodes.sopa002.geometry} position={[-0.004, 0.504, 0.009]} scale={0.85}>
        <meshToonMaterial color={colorSoup} opacity={0.4} transparent depthWrite={false} />
      </mesh>
    </group>
  )
}

useGLTF.preload('/models/ramen.glb')
