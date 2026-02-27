import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Model from './components/model'
import { Suspense, useEffect, useRef, useState } from 'react'

function ControlsLogger() {
  const controlsRef = useRef()

  useEffect(() => {
    if (controlsRef.current) {
      const distance = controlsRef.current.getDistance()
      const pitch = controlsRef.current.getPolarAngle()
      const yaw = controlsRef.current.getAzimuthalAngle()

      console.log({ distance, pitch, yaw })
    }

  }, [])


  return <OrbitControls ref={controlsRef} />
}

function Scene({ color, isEnabled }) {
  return (
    <>
      <ambientLight intensity={5} />
      <directionalLight position={[5, 5, 5]} intensity={15} />

      <Suspense fallback={null}>
        <Model color={color} isEnabled={isEnabled} />
      </Suspense>

      <ControlsLogger />
    </>
  )
}

function App() {
  const [color, setColor] = useState('')
  const [isEnabled, setisEnabled] = useState(true)

  const colors = [
    '#ff0000', // red
    '#ff69b4', // pink
    '#0000ff', // blue
    '#008000', // green
    '#ffff00', // yellow
    '#ffa500', // orange
    '#800080', // purple
    '#000000', // black
    '#ffffff', // white
    '#00ffff'  // cyan
  ]
  return (
    <>
      <Canvas
        style={{ width: "1300px", height: "100vh" }}
        camera={{ position: [-2, 0, 2], fov: 50 }}
      >
        <Scene color={color} isEnabled={isEnabled} />
      </Canvas>
      <div
        style={{
          position: 'absolute',
          bottom: 20,
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: '10px'
        }}
      >
        {colors.map((hex) => (
          <button
            key={hex}
            onClick={() => setColor(hex)}
            style={{
              width: '40px',
              height: '40px',
              backgroundColor: hex,
              border: '2px solid #ccc',
              cursor: 'pointer'
            }}
          />
        ))}
      </div>
      <div
        style={{
          position: 'absolute',
          bottom: 20,
          left: '80%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: '10px'
        }}
      >
        <button

          onClick={() => { setisEnabled(false) }}
          style={{
            width: '100px',
            height: '40px',
            backgroundColor: 'yellow',
            border: '2px solid #ccc',
            cursor: 'pointer'
          }}
        >disable</button>
        <button
          onClick={() => { setisEnabled(true) }}
          style={{
            width: '100px',
            height: '40px',
            backgroundColor: 'yellow',
            border: '2px solid #ccc',
            cursor: 'pointer'
          }}
        >enable</button>

      </div>
      {/* <button /> */}
    </>
  )
}

export default App