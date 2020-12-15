import {React} from "react";
import "./App.css";
import {Canvas} from 'react-three-fiber';
import {OrbitControls, useGLTFLoader} from 'drei';
import Background from './space3.jpg';




function App() {
  const gltf = useGLTFLoader('/spaceman.gltf', true);
  return (
    <div className="App">
        <div className="canvas" style={{backgroundImage:`url(${Background})`}}>
          <Canvas 
          colorManagement
          camera={{position: [0,0,6], fov: 80}}>
            <ambientLight intensity={1}/>  
            <directionalLight intensity ={1} position={[0,10,10]}/>
            <pointLight intensity={1} position={[0,10,10]}/>
            <pointLight intensity={1} position={[0,10,-10]}/>
            <pointLight intensity={1} position={[10,10,-10]}/>
            <pointLight intensity={1} position={[-10,10,-10]}/>
            <primitive object ={gltf.scene} dispose={null} position={[0,0,0]}/>
            <OrbitControls autoRotate={true} autoRotateSpeed={4} enableZoom={false} />  
          </Canvas>
        </div>
    </div>
  );
}

export default App;
