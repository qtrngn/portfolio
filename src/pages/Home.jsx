import { useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import Loader from "../components/Loader";
import HomeInfo from "../components/HomeInfo";
import Island from "../models/Island";
import Sky from "../models/Sky";
// import Tokyo from "../models/Tokyo";

const Home = () => {
  const [currentStage, setCurrentStage] = useState(1);
  const [isRotating, setIsRotating] = useState(false);

  const adjustIslandForScreenSize = () => {
    let screenScale = [1, 1, 1];
    let screenPosition = [-900, 100, 1500];
    let rotation = [0, 6.2, 0];

    if (window.innerWidth < 768) {
      screenScale = [0.5, 0.5, 0.5];
    }
    return [screenScale, screenPosition, rotation];
  };
  const [islandScale, islandPosition, islandRotation] =
    adjustIslandForScreenSize();

  // tokyo
  // const adjustTokyoForScreenSize = () => {
  //   let scale = [2, 2, 2];
  //   let position = [0, -100, -200];
  //   let rotation = [0, Math.PI/4, 0];

  //   if (window.innerWidth < 768) {
  //     scale = [1.5, 1.5, 1.5];
  //     position = [0, -80, -150];
  //   }
  //   return [scale, position, rotation];
  // };

  // const [tokyoScale, tokyoPosition, tokyoRotation] = adjustTokyoForScreenSize();

  return (
    <section className="w-full h-screen relative">
      <div className="absolute top-28 left-0 right-0 z-10 flex justify-center">
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>
      <Canvas
        className={`w-full h-screen bg-transparent ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        }`}
        camera={{
          position: [-100, 5500, 2550],
          near: 0.1,
          far: 100000,
          fov: 60,
        }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 10]} intensity={3} />
          <ambientLight intensity={1.2} />
          <hemisphereLight
            skyColor="#b1e1ff"
            groundColor="#000000"
            intensity={1}
          />
          <Sky />
          <Island
            position={islandPosition}
            scale={islandScale}
            rotation={islandRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
          />
          {/* <Tokyo
            position={tokyoPosition}
            scale={tokyoScale}
            rotation={tokyoRotation}
            visible={true} 
          /> */}

          <OrbitControls
            enableZoom={true} // Enabled zoom
            zoomSpeed={0.6} // Adjust zoom sensitivity
            minDistance={1000} // Minimum zoom distance
            maxDistance={100000}
            target={[0, 0, 0]} // Maximum zoom distance
            enablePan={true}
            enableRotate={true}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 4}
          />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Home;
