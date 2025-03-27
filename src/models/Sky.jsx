import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { a } from "@react-spring/three";

import skyScene from "../assets/3d/sky.glb";

const Sky = (props) => {
  const skyRef = useRef();
  const { nodes, materials } = useGLTF(skyScene);

  return (
    <a.group ref={skyRef} {...props}>
      <mesh
        geometry={nodes.Sphere__0.geometry}
        material={materials["Scene_-_Root"]}
        position={[0, 1300, 2000]} // Position behind camera
        rotation={[0, Math.PI, 0]} // Rotate to face camera
        scale={5000}
      />
    </a.group>
  );
};

export default Sky;

