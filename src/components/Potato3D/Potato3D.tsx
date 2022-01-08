import React, { useLayoutEffect, Suspense } from 'react'
import { Canvas, extend } from '@react-three/fiber'
import * as THREE from 'three'
import { useGLTF, OrbitControls } from '@react-three/drei'
import { useBackgroundStore } from '@src/store/backgroundStore'

extend({ OrbitControls })

const Potato = () => {
  const { scene } = useGLTF('/scene.gltf')

  useLayoutEffect(() => {
    Object.assign({
      roughness: 0,
      metalness: 0.25,
      emissive: new THREE.Color(0x000000),
      color: '#fff',
      envMapIntensity: 0.5,
    })
  }, [scene])

  return <primitive object={scene} />
}

export default () => {
  const { currentColor } = useBackgroundStore()

  const isBrowser = typeof window !== 'undefined'

  if (!isBrowser) return null

  return (
    <Canvas
      className='three-js-canvas'
      frameloop='demand'
      dpr={[1, 2]}
      camera={{ position: [0, 0, 1], fov: 25 }}
    >
      <ambientLight
        color={currentColor.value}
        intensity={0.85}
      />
      <spotLight position={[5, -2, 1]} penumbra={1} castShadow />
      <Suspense fallback={null}>
        <Potato />
        <OrbitControls
          enableZoom={false}
          autoRotateSpeed={5}
          autoRotate={true}
          maxPolarAngle={Math.PI / 4}
          minPolarAngle={Math.PI / 1}
        />
      </Suspense>
    </Canvas>
  )
}
