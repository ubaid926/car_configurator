import { useGLTF, Center } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import { useEffect, useState } from 'react'
import { color } from 'three/tsl'

export default function Model({ color, isEnabled }) {
  useEffect(() => {
    materials.paint.color.set(color)
    console.log(color)
  }, [color])
  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh && child.name.includes('Cylinder007_tire_0')) {
        child.visible = isEnabled; // Hides the tyre
      }
      if (child.isMesh && child.name.includes('Cylinder008_tire_0')) {
        child.visible = isEnabled; // Hides the tyre
      }
      if (child.isMesh && child.name.includes('Cylinder009_tire_0')) {
        child.visible = isEnabled; // Hides the tyre
      }
      if (child.isMesh && child.name.includes('Cylinder010_tire_0')) {
        child.visible = isEnabled; // Hides the tyre
      }
      console.log('child==> ', child.name)
    })

  }, [isEnabled])
  const { scene, materials } = useGLTF('/free_1972_datsun_240k_gt/scene.gltf')
  const { camera } = useThree()

  const handleGlobalKeyDown = function (event) {
    console.log(event.key)
    if (event.key == 'a') {
      // setColor('a')
      console.log(scene)
    }
  }

  document.addEventListener('keydown', handleGlobalKeyDown);
  return (
    <Center>
      <primitive object={scene} scale={0.8} />
    </Center>
  )
}

useGLTF.preload('/free_1972_datsun_240k_gt/scene.gltf')