import React, { useRef, useEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import { a } from '@react-spring/three'

import islandScene from '../assets/3d/island.glb'


const Island = (props) => {
    const islandRef = useRef();
  const { nodes, materials } = useGLTF(islandScene)
  return (
    <a.group ref={islandRef} {...props} >
      <mesh
        geometry={nodes['Box012_Material_#2969_0'].geometry}
        material={materials.Material_2969}
        position={[1136.274, -115.341, -252.954]}
        rotation={[-Math.PI / 2, 0, 3.131]}
        scale={1.029}
      />
      <mesh
        geometry={nodes['Box012_Material_#2970_0'].geometry}
        material={materials.Material_2970}
        position={[1136.274, -115.341, -252.954]}
        rotation={[-Math.PI / 2, 0, 3.131]}
        scale={1.029}
      />
      <mesh
        geometry={nodes['Circle003_Material_#109_0'].geometry}
        material={materials.Material_109}
        position={[-1197.441, -12.129, 763.694]}
        rotation={[-Math.PI / 2, 0, -2.21]}
        scale={[1.315, 1.315, 1.068]}
      />
      <mesh
        geometry={nodes['Circle003_Material_#14_0'].geometry}
        material={materials.Material_14}
        position={[-1197.441, -12.129, 763.694]}
        rotation={[-Math.PI / 2, 0, -2.21]}
        scale={[1.315, 1.315, 1.068]}
      />
      <mesh
        geometry={nodes['Circle003_Material_#17_0'].geometry}
        material={materials.Material_17}
        position={[-1197.441, -12.129, 763.694]}
        rotation={[-Math.PI / 2, 0, -2.21]}
        scale={[1.315, 1.315, 1.068]}
      />
      <mesh
        geometry={nodes['Circle003_Material_#18_0'].geometry}
        material={materials.Material_18}
        position={[-1197.441, -12.129, 763.694]}
        rotation={[-Math.PI / 2, 0, -2.21]}
        scale={[1.315, 1.315, 1.068]}
      />
      <mesh
        geometry={nodes['Circle003_Material_#112_0'].geometry}
        material={materials.Material_112}
        position={[-1197.441, -12.129, 763.694]}
        rotation={[-Math.PI / 2, 0, -2.21]}
        scale={[1.315, 1.315, 1.068]}
      />
      <mesh
        geometry={nodes['Circle003_Material_#111_0'].geometry}
        material={materials.Material_111}
        position={[-1197.441, -12.129, 763.694]}
        rotation={[-Math.PI / 2, 0, -2.21]}
        scale={[1.315, 1.315, 1.068]}
      />
      <mesh
        geometry={nodes['Line007_Material_#1_0'].geometry}
        material={materials.Material_1}
        position={[1107.42, -12.129, 438.274]}
        rotation={[-Math.PI / 2, 0, 3.131]}
        scale={1.068}
      />
      <mesh
        geometry={nodes['Line008_Material_#110_0'].geometry}
        material={materials.Material_110}
        position={[865.036, 238.617, 284.363]}
        rotation={[-Math.PI / 2, 0, 3.131]}
        scale={1.068}
      />
      <mesh
        geometry={nodes['Line011_Material_#127_0'].geometry}
        material={materials.Material_127}
        position={[1037.827, 200.52, 649.693]}
        rotation={[-Math.PI / 2, 0, 3.131]}
        scale={1.068}
      />
      <mesh
        geometry={nodes['Object037_Material_#2944_0'].geometry}
        material={materials.Material_2944}
        position={[-1197.441, -12.129, 763.694]}
        rotation={[-Math.PI / 2, 0, -2.21]}
        scale={[1.315, 1.315, 1.068]}
      />
      <mesh
        geometry={nodes['Object058_Material_#141_0'].geometry}
        material={materials.Material_141}
        position={[-1881.975, 80.267, -422.874]}
        rotation={[-1.572, 0.039, -1.487]}
        scale={1.068}
      />
      <mesh
        geometry={nodes['Object061_Material_#124_0'].geometry}
        material={materials.Material_124}
        position={[-226.174, -212.344, 1962.315]}
        rotation={[-Math.PI / 2, 0, 3.131]}
        scale={[-1.233, 1.233, 1.233]}
      />
      <mesh
        geometry={nodes['Object061_Material_#125_0'].geometry}
        material={materials.Material_125}
        position={[-226.174, -212.344, 1962.315]}
        rotation={[-Math.PI / 2, 0, 3.131]}
        scale={[-1.233, 1.233, 1.233]}
      />
      <mesh
        geometry={nodes['Line012_Material_#129_0'].geometry}
        material={materials.Material_129}
        position={[-240.804, 320.661, 1443.184]}
        rotation={[-Math.PI / 2, 0, 3.131]}
        scale={1.233}
      />
      <mesh
        geometry={nodes['Box016_Material_#3118_0'].geometry}
        material={materials.Material_3118}
        position={[-28.839, 219.54, -711.862]}
        rotation={[-Math.PI / 2, 0, -2.983]}
      />
      <mesh
        geometry={nodes['Box017_Material_#3119_0'].geometry}
        material={materials.Material_3119}
        position={[235.838, 166.047, -837.847]}
        rotation={[-1.571, -0.044, -1.577]}
      />
      <mesh
        geometry={nodes['Loft027_Material_#2967_0'].geometry}
        material={materials.Material_2967}
        position={[265.479, 507.131, 892.628]}
        rotation={[0.04, -0.586, 0.191]}
      />
      <mesh
        
        
        geometry={nodes['Loft027_Material_#2968_0'].geometry}
        material={materials.Material_2968}
        position={[265.479, 507.131, 892.628]}
        rotation={[0.04, -0.586, 0.191]}
      />
      <mesh
        geometry={nodes['Loft018_Material_#384_0'].geometry}
        material={materials.Material_384}
        position={[-870.912, 615.38, -772.319]}
        rotation={[0, 1.473, 0]}
      />
      <mesh
        geometry={nodes['Loft018_Material_#385_0'].geometry}
        material={materials.Material_385}
        position={[-870.912, 615.38, -772.319]}
        rotation={[0, 1.473, 0]}
      />
      <mesh
        geometry={nodes['House_1_Material_#2982_0'].geometry}
        material={materials.Material_2982}
        position={[1226.075, 267.9, 2113.745]}
        rotation={[-Math.PI / 2, 0, -3.133]}
      />
      <mesh
        geometry={nodes['House_1_Material_#2984_0'].geometry}
        material={materials.Material_2984}
        position={[1226.075, 267.9, 2113.745]}
        rotation={[-Math.PI / 2, 0, -3.133]}
      />
      <mesh
        geometry={nodes['House_1_Material_#2986_0'].geometry}
        material={materials.Material_2986}
        position={[1226.075, 267.9, 2113.745]}
        rotation={[-Math.PI / 2, 0, -3.133]}
      />
      <mesh
        geometry={nodes['House_1_Material_#2987_0'].geometry}
        material={materials.Material_2987}
        position={[1226.075, 267.9, 2113.745]}
        rotation={[-Math.PI / 2, 0, -3.133]}
      />
      <mesh
        geometry={nodes['House_1_Material_#2985_0'].geometry}
        material={materials.Material_2985}
        position={[1226.075, 267.9, 2113.745]}
        rotation={[-Math.PI / 2, 0, -3.133]}
      />
      <mesh
        geometry={nodes['House_1_Material_#2983_0'].geometry}
        material={materials.Material_2983}
        position={[1226.075, 267.9, 2113.745]}
        rotation={[-Math.PI / 2, 0, -3.133]}
      />
      <mesh
        geometry={nodes['House_2_Material_#3001_0'].geometry}
        material={materials.Material_3001}
        position={[1498.39, 243.642, -625.29]}
        rotation={[-Math.PI / 2, 0, -1.661]}
      />
      <mesh
        geometry={nodes['House_2_Material_#3003_0'].geometry}
        material={materials.Material_3003}
        position={[1498.39, 243.642, -625.29]}
        rotation={[-Math.PI / 2, 0, -1.661]}
      />
      <mesh
        geometry={nodes['House_2_Material_#3002_0'].geometry}
        material={materials.Material_3002}
        position={[1498.39, 243.642, -625.29]}
        rotation={[-Math.PI / 2, 0, -1.661]}
      />
      <mesh
        geometry={nodes['House_2_Material_#3000_0'].geometry}
        material={materials.Material_3000}
        position={[1498.39, 243.642, -625.29]}
        rotation={[-Math.PI / 2, 0, -1.661]}
      />
      <mesh
        geometry={nodes['House_2_Material_#3004_0'].geometry}
        material={materials.Material_3004}
        position={[1498.39, 243.642, -625.29]}
        rotation={[-Math.PI / 2, 0, -1.661]}
      />
      <mesh
        geometry={nodes['House_3_Material_#3016_0'].geometry}
        material={materials.Material_3016}
        position={[1700.516, 219.836, 296.787]}
        rotation={[-Math.PI / 2, 0, -1.269]}
      />
      <mesh
        geometry={nodes['House_3_Material_#3022_0'].geometry}
        material={materials.Material_3022}
        position={[1700.516, 219.836, 296.787]}
        rotation={[-Math.PI / 2, 0, -1.269]}
      />
      <mesh
        geometry={nodes['House_3_Material_#3018_0'].geometry}
        material={materials.Material_3018}
        position={[1700.516, 219.836, 296.787]}
        rotation={[-Math.PI / 2, 0, -1.269]}
      />
      <mesh
        
        
        geometry={nodes['House_3_Material_#3017_0'].geometry}
        material={materials.Material_3017}
        position={[1700.516, 219.836, 296.787]}
        rotation={[-Math.PI / 2, 0, -1.269]}
      />
      <mesh
        geometry={nodes['House_3_Material_#3021_0'].geometry}
        material={materials.Material_3021}
        position={[1700.516, 219.836, 296.787]}
        rotation={[-Math.PI / 2, 0, -1.269]}
      />
      <mesh
        geometry={nodes['House_3_Material_#3020_0'].geometry}
        material={materials.Material_3020}
        position={[1700.516, 219.836, 296.787]}
        rotation={[-Math.PI / 2, 0, -1.269]}
      />
      <mesh
        geometry={nodes['House_3_Material_#3019_0'].geometry}
        material={materials.Material_3019}
        position={[1700.516, 219.836, 296.787]}
        rotation={[-Math.PI / 2, 0, -1.269]}
      />
      <mesh
        geometry={nodes['House_3_Material_#3023_0'].geometry}
        material={materials.Material_3023}
        position={[1700.516, 219.836, 296.787]}
        rotation={[-Math.PI / 2, 0, -1.269]}
      />
      <mesh
        geometry={nodes['Shrine_Material_#3036_0'].geometry}
        material={materials.Material_3036}
        position={[-1125.306, 312.499, 1435.9]}
        rotation={[-Math.PI / 2, 0, 1.212]}
        scale={[1.308, 1.308, 1]}
      />
      <mesh
        geometry={nodes['Shrine_Material_#3038_0'].geometry}
        material={materials.Material_3038}
        position={[-1125.306, 312.499, 1435.9]}
        rotation={[-Math.PI / 2, 0, 1.212]}
        scale={[1.308, 1.308, 1]}
      />
      <mesh
        geometry={nodes['Shrine_Material_#3039_0'].geometry}
        material={materials.Material_3039}
        position={[-1125.306, 312.499, 1435.9]}
        rotation={[-Math.PI / 2, 0, 1.212]}
        scale={[1.308, 1.308, 1]}
      />
      <mesh
        
        
        geometry={nodes['Shrine_Material_#3035_0'].geometry}
        material={materials.Material_3035}
        position={[-1125.306, 312.499, 1435.9]}
        rotation={[-Math.PI / 2, 0, 1.212]}
        scale={[1.308, 1.308, 1]}
      />
      <mesh
        geometry={nodes['Shrine_Material_#3037_0'].geometry}
        material={materials.Material_3037}
        position={[-1125.306, 312.499, 1435.9]}
        rotation={[-Math.PI / 2, 0, 1.212]}
        scale={[1.308, 1.308, 1]}
      />
      <mesh
        geometry={nodes['Shrine_Material_#3040_0'].geometry}
        material={materials.Material_3040}
        position={[-1125.306, 312.499, 1435.9]}
        rotation={[-Math.PI / 2, 0, 1.212]}
        scale={[1.308, 1.308, 1]}
      />
      <mesh
        geometry={nodes['Object067_Material_#3041_0'].geometry}
        material={materials.Material_3041}
        position={[1209.78, 234.386, 1608.569]}
        rotation={[-Math.PI / 2, 0, 2.084]}
        scale={[0.873, 0.873, 1.362]}
      />
      <mesh
        geometry={nodes['Object068_Material_#3042_0'].geometry}
        material={materials.Material_3042}
        position={[1312.88, 229.383, 1625.45]}
        rotation={[-Math.PI / 2, 0, 3.131]}
      />
      <mesh
        geometry={nodes['Bush_Material_#0_0'].geometry}
        material={materials.Material_0}
        position={[1341.534, 268.88, -986.574]}
        rotation={[0, 0.95, 0]}
        scale={[1.496, 2.093, 0.715]}
      />
      <mesh
        geometry={nodes['Flower_Material_#3043_0'].geometry}
        material={materials.Material_3043}
        position={[-449.413, 149.967, -900.753]}
        rotation={[Math.PI, 0.3, -Math.PI]}
      />
      <mesh
        geometry={nodes['Road_divider_Material_#3045_0'].geometry}
        material={materials.Material_3045}
        position={[1742.124, 207.877, 1510.438]}
        rotation={[2.97, -0.149, -3.047]}
        scale={1.271}
      />
      <mesh
        geometry={nodes['SpeedSign_Material_#3046_0'].geometry}
        material={materials.Material_3046}
        position={[2365.451, 310.527, 725.482]}
        rotation={[0, -1.153, 0]}
      />
      <mesh
        geometry={nodes['DirtPile_Material_#27_0'].geometry}
        material={materials.Material_27}
        position={[1198.749, 243.671, -329.492]}
        rotation={[-Math.PI / 2, 0, 3.131]}
      />
      <mesh
        geometry={nodes['CardBoard_Material_#28_0'].geometry}
        material={materials.Material_28}
        position={[1142.926, 247.893, -70.935]}
        rotation={[-Math.PI / 2, 0, -1.268]}
        scale={5.511}
      />
      <mesh
        geometry={nodes['Bucket_Material_#41_0'].geometry}
        material={materials.Material_41}
        position={[2132.483, 278.445, 604.055]}
        rotation={[-Math.PI / 2, 0, -1.258]}
        scale={1.416}
      />
      <mesh
        geometry={nodes['Bucket_Material_#42_0'].geometry}
        material={materials.Material_42}
        position={[2132.483, 278.445, 604.055]}
        rotation={[-Math.PI / 2, 0, -1.258]}
        scale={1.416}
      />
      <mesh
        geometry={nodes['Poster2_Material_#43_0'].geometry}
        material={materials.Material_43}
        position={[1193.935, 255.945, -53.483]}
        rotation={[-1.474, -0.106, 0.311]}
      />
      <mesh
        geometry={nodes['Air_conditioner_Unit_Material_#19_0'].geometry}
        material={materials.Material_19}
        position={[1730.595, 618.308, -116.084]}
        rotation={[-Math.PI / 2, 0, -2.846]}
        scale={[1.295, 1.687, 1.687]}
      />
      <mesh
        geometry={nodes['Bicycle_Material_#158_0'].geometry}
        material={materials.Material_158}
        position={[1260.23, 331.873, -815.266]}
        rotation={[-2.675, -1.194, -2.704]}
        scale={[0.955, 1.018, 1.21]}
      />
      <mesh
        geometry={nodes['Bicycle_Material_#159_0'].geometry}
        material={materials.Material_159}
        position={[1260.23, 331.873, -815.266]}
        rotation={[-2.675, -1.194, -2.704]}
        scale={[0.955, 1.018, 1.21]}
      />
      <mesh
        geometry={nodes['Gate_Material_#57_0'].geometry}
        material={materials.Material_57}
        position={[409.641, 296.285, 1448.314]}
        rotation={[-Math.PI / 2, 0, 1.561]}
        scale={1.077}
      />
      <mesh
        geometry={nodes['Handwagen_Material_#3059_0'].geometry}
        material={materials.Material_3059}
        position={[75.754, 305.799, 1585.556]}
        rotation={[-1.568, 0.275, 1.56]}
        scale={1.106}
      />
      <mesh
        geometry={nodes['Handwagen_Material_#3060_0'].geometry}
        material={materials.Material_3060}
        position={[75.754, 305.799, 1585.556]}
        rotation={[-1.568, 0.275, 1.56]}
        scale={1.106}
      />
      <mesh
        geometry={nodes['Lantern_Material_#3047_0'].geometry}
        material={materials.Material_3047}
        position={[-788.049, 295.637, 1627.8]}
        rotation={[-Math.PI / 2, 0, 0.339]}
        scale={1.261}
      />
      <mesh
        geometry={nodes['Plane003_Material_#3061_0'].geometry}
        material={materials.Material_3061}
        position={[376.292, 242.45, -134.176]}
        rotation={[-Math.PI / 2, 0, 1.455]}
      />
      <mesh
        geometry={nodes['Line014_Material_#3073_0'].geometry}
        material={materials.Material_3073}
        position={[-1828.992, 316.208, 1447.6]}
        rotation={[-Math.PI / 2, 0, 3.131]}
      />
      <mesh
        geometry={nodes['Plane006_Material_#3074_0'].geometry}
        material={materials.Material_3074}
        position={[1703.934, 403.18, -879.77]}
        rotation={[Math.PI, 0.097, -Math.PI]}
        scale={[0.404, 0.404, 1]}
      />
      <mesh
        geometry={nodes['Object101_Material_#3077_0'].geometry}
        material={materials.Material_3077}
        position={[-655.975, 146.353, -706.022]}
        rotation={[-Math.PI / 2, 0, -2.933]}
        scale={[1.445, 1.445, 1.535]}
      />
      <mesh
        geometry={nodes['Object101_Material_#3078_0'].geometry}
        material={materials.Material_3078}
        position={[-655.975, 146.353, -706.022]}
        rotation={[-Math.PI / 2, 0, -2.933]}
        scale={[1.445, 1.445, 1.535]}
      />
      <mesh
        geometry={nodes['Object101_Material_#3076_0'].geometry}
        material={materials.Material_3076}
        position={[-655.975, 146.353, -706.022]}
        rotation={[-Math.PI / 2, 0, -2.933]}
        scale={[1.445, 1.445, 1.535]}
      />
      <mesh
        geometry={nodes['Object101_Material_#3075_0'].geometry}
        material={materials.Material_3075}
        position={[-655.975, 146.353, -706.022]}
        rotation={[-Math.PI / 2, 0, -2.933]}
        scale={[1.445, 1.445, 1.535]}
      />
      <mesh
        geometry={nodes['Bench1_Material_#85_0'].geometry}
        material={materials.Material_85}
        position={[1664.645, 276.984, 472.984]}
        rotation={[-Math.PI / 2, 0, -2.85]}
      />
      <mesh
        geometry={nodes['Plane009_Material_#3129_0'].geometry}
        material={materials.Material_3129}
        position={[-281.836, 86.496, 859.744]}
        rotation={[-Math.PI / 2, 0, 2.566]}
        scale={[1.488, 1.488, 1]}
      />
      <mesh
        geometry={nodes['Line017_Material_#3130_0'].geometry}
        material={materials.Material_3130}
        position={[-153.779, 731.481, 1446.092]}
        rotation={[0, 1.561, 0]}
      />
      <mesh
        geometry={nodes['Butterfly_Material_#3134_0'].geometry}
        material={materials.Material_3134}
        position={[-456.937, 166.794, -904.434]}
        rotation={[-2.749, -0.009, 2.951]}
        scale={[-0.252, 0.252, 0.252]}
      />
      <mesh
        geometry={nodes['Box001_Material_#25_0'].geometry}
        material={materials.Material_25}
        position={[574.019, 246.852, -439.687]}
        rotation={[-Math.PI / 2, 0, 3.021]}
      />
      <mesh
        geometry={nodes['Box001_Material_#26_0'].geometry}
        material={materials.Material_26}
        position={[574.019, 246.852, -439.687]}
        rotation={[-Math.PI / 2, 0, 3.021]}
      />
      <mesh
        geometry={nodes['Box001_Material_#24_0'].geometry}
        material={materials.Material_24}
        position={[574.019, 246.852, -439.687]}
        rotation={[-Math.PI / 2, 0, 3.021]}
      />
      <mesh
        geometry={nodes['Box001_Material_#12_0'].geometry}
        material={materials.Material_12}
        position={[574.019, 246.852, -439.687]}
        rotation={[-Math.PI / 2, 0, 3.021]}
      />
      <mesh
        geometry={nodes['Box001_Material_#28_0'].geometry}
        material={materials.Material_28_0}
        position={[574.019, 246.852, -439.687]}
        rotation={[-Math.PI / 2, 0, 3.021]}
      />
      <mesh
        geometry={nodes['Box001_Material_#190_0'].geometry}
        material={materials.Material_190}
        position={[574.019, 246.852, -439.687]}
        rotation={[-Math.PI / 2, 0, 3.021]}
      />
    </a.group>
  )
}


export default Island; 