import React, { useLayoutEffect, Suspense, useRef } from 'react'
import {
  Canvas,
  extend,
  useThree,
  useFrame,
} from '@react-three/fiber'
import * as THREE from 'three'
import {
  useGLTF,
  OrbitControls,
  PresentationControls,
  Environment,
} from '@react-three/drei'

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
  const isBrowser = typeof window !== 'undefined'

  if (!isBrowser) return null

  return (
    <Canvas
      className='three-js-canvas'
      frameloop='demand'
      dpr={[1, 2]}
      camera={{ position: [0, 0, 1], fov: 25 }}
    >
      <ambientLight intensity={0.75} />
      <spotLight position={[5, 5, 5]} penumbra={1} castShadow />
      <Suspense fallback={null}>
        <Potato />
        <OrbitControls
          enableZoom={false}
          autoRotateSpeed={10}
          autoRotate={true}
        />
      </Suspense>
    </Canvas>
  )
}
