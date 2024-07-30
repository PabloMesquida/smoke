function Shadow() {
  return (
    <mesh position={[0, -1.24, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <circleGeometry args={[0.8, 32]} />
      <meshToonMaterial color='#12151a' transparent opacity={0.3} />
    </mesh>
  )
}

export default Shadow
