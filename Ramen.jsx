/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.18 public/models/ramen.glb 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/ramen.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.bowl.geometry} material={nodes.bowl.material} position={[0, 0.996, 0]} />
      <mesh geometry={nodes.noodles.geometry} material={nodes.noodles.material} position={[0.074, 0.563, 0.007]} rotation={[2.416, 0.91, -2.583]} scale={1.272} />
      <mesh geometry={nodes.egg.geometry} material={nodes.egg.material} position={[-0.21, 0.739, 0.416]} rotation={[-1.648, 0.218, 1.917]} scale={0.248} />
      <mesh geometry={nodes.egg1.geometry} material={nodes.egg1.material} position={[-0.199, 0.733, 0.411]} rotation={[-0.618, -1.165, 2.563]} scale={[0.149, 0.043, 0.149]} />
      <mesh geometry={nodes.egg001.geometry} material={nodes.egg001.material} position={[0.18, 0.666, 0.29]} rotation={[-1.831, 0.203, 3.059]} scale={0.248} />
      <mesh geometry={nodes.egg1001.geometry} material={nodes.egg1001.material} position={[0.176, 0.659, 0.286]} rotation={[-0.277, -0.08, 2.938]} scale={[0.136, 0.039, 0.136]} />
      <mesh geometry={nodes.sopa.geometry} material={nodes.sopa.material} position={[0, 0.607, 0]} scale={0.892} />
      <mesh geometry={nodes.oninon.geometry} material={nodes.oninon.material} position={[0.295, 0.604, -0.661]} rotation={[-0.618, -0.503, -0.101]} scale={[0.039, 0.014, 0.039]} />
      <mesh geometry={nodes.meat002.geometry} material={nodes.meat002.material} position={[-0.346, 0.688, -0.454]} rotation={[0.559, 0.968, -0.647]} scale={[0.412, 0.027, 0.237]} />
      <mesh geometry={nodes.champ.geometry} material={nodes.champ.material} position={[-0.15, 0.59, -0.13]} rotation={[-0.389, -0.52, -0.745]} scale={[0.138, 0.024, 0.138]} />
      <mesh geometry={nodes.sopa001.geometry} material={nodes.sopa001.material} position={[-0.004, 0.556, 0.009]} scale={0.876} />
      <mesh geometry={nodes.sopa002.geometry} material={nodes.sopa002.material} position={[-0.004, 0.504, 0.009]} scale={0.85} />
    </group>
  )
}

useGLTF.preload('/ramen.glb')
