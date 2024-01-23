import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Limonen = () => {
  const limonen = useGLTF("./limonen/scene.gltf");

  return (
    <primitive object={limonen.scene} scale={0.5} position-y={0} rotation-y={0} />
  );
};

const LimonenCanvas = () => {
  return (
    
    <Canvas
      shadows
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
    <hemisphereLight  intensity={0.35}/>
    <spotLight
        intensity={6}
        angle={3}
        penumbra={3}
        castShadow
     />
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          
          enableZoom={false}

        />
        <Limonen />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default LimonenCanvas;
