// import { useEffect, useRef, useState } from "react";
// import { Box, Spinner } from "@chakra-ui/react";
// import * as THREE from "three";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
// import { loadGLTFModel } from "./model";
//
// function easeOutCirc(x: any) {
//   return Math.sqrt(1 - Math.pow(x - 1, 2));
// }
//
// const CoffeeModel = (): JSX.Element => {
//   const refContainer = useRef<HTMLDivElement>(null);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [renderer, setRenderer] = useState<any>(null);
//   const [_camera, setCamera] = useState<any>(null);
//   const [target] = useState(new THREE.Vector3(-0.5, 1.2, 0));
//   const [initialCameraPosition] = useState(
//     new THREE.Vector3(
//       20 * Math.sin(0.2 * Math.PI),
//       10,
//       20 * Math.cos(0.2 * Math.PI)
//     )
//   );
//
//   const [scene] = useState(new THREE.Scene());
//   const [_controls, setControls] = useState<any>(null);
//
//   /* eslint-disable */
//   useEffect(() => {
//     const { current: container } = refContainer;
//     if (container && !renderer) {
//       const scW = container.clientWidth;
//       const scH = container.clientHeight;
//       const renderer = new THREE.WebGLRenderer({
//         antialias: true,
//         alpha: true,
//       });
//
//       renderer.setPixelRatio(window.devicePixelRatio);
//       renderer.setSize(scW, scH);
//       container.appendChild(renderer.domElement);
//       setRenderer(renderer);
//       console.log(renderer);
//
//       const scale = scH * 0.005 + 4.8;
//       const camera = new THREE.OrthographicCamera(
//         -scale,
//         scale,
//         scale - scale,
//         0.01,
//         5000
//       );
//       camera.position.copy(initialCameraPosition);
//       camera.lookAt(target);
//       setCamera(camera);
//
//       const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
//       scene.add(ambientLight);
//       const controls = new OrbitControls(camera, renderer.domElement);
//       controls.autoRotate = true;
//       controls.target = target;
//       setControls(controls);
//
//       loadGLTFModel({
//         scene,
//         glbPath: "/cafe_latte_with_art.glb",
//         options: {
//           receiveShadow: true,
//           castShadow: true,
//         },
//       }).then(() => {
//         setLoading(false);
//       });
//
//       let req: number;
//       let frame = 0;
//       renderer.render(scene, camera);
//       const animate = () => {
//         req = requestAnimationFrame(animate);
//         frame = frame <= 100 ? frame + 1 : 0;
//         if (frame <= 100) {
//           console.log("frame", frame);
//           const p = initialCameraPosition;
//           const rotSpeed = -easeOutCirc(frame / 120) * Math.PI * 20;
//           camera.position.y = 10;
//           camera.position.x =
//             p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed);
//           camera.position.z =
//             p.z * Math.cos(rotSpeed) - p.x * Math.sin(rotSpeed);
//           camera.lookAt(target);
//         } else {
//           controls.update();
//         }
//       };
//
//       return () => {
//         cancelAnimationFrame(req);
//         controls.dispose();
//         renderer.dispose();
//       };
//     }
//   }, [renderer]);
//
//   return (
//     <Box
//       ref={refContainer}
//       className={"voxel-coffee"}
//       m={"auto"}
//       mb={["-40px", "-140px", "-200px"]}
//       w={[280, 480, 640]}
//       h={[280, 480, 640]}
//       position={"relative"}
//     >
//       {loading && <Spinner size={"xl"} />}
//       coffee
//     </Box>
//   );
// };
//
// export default CoffeeModel;
import React, {useRef} from "react";
import {Canvas, useFrame, useThree} from "@react-three/fiber";
import * as THREE from "three";
import {MTLLoader} from "three/examples/jsm/loaders/MTLLoader";
import {OBJLoader} from "three/examples/jsm/loaders/OBJLoader";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";

const Frog = () => {
  const groupRef = useRef();
  const controlsRef = useRef();

  // Load the materials for the model
  const mtlLoader = new MTLLoader();
  mtlLoader.load("/frog.mtl", (materials) => {
    // Set the base path for the textures
    materials.preload();
    materials.baseUrl = "";

    // Load the geometry for the model
    const objLoader = new OBJLoader();
    objLoader.setMaterials(materials);
    objLoader.load("frog.obj", (object) => {
      // Set the texture for the model
      const textureLoader = new THREE.TextureLoader();
      const texture = textureLoader.load("/frog.png");
      object.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          child.material.map = texture;
        }
      });

      // Add the model to the scene
      groupRef.current.add(object);
    });
  });

  // Set up a clock for time-based rotation
  const clockRef = useRef(new THREE.Clock());

  useFrame(() => {
    const delta = clockRef.current.getDelta(); // Get the time delta
    if (groupRef.current) {
      const speed = 0.5; // Rotation speed in radians per second
      groupRef.current.rotation.y += speed * delta; // Apply time-based rotation
      groupRef.current.scale.set(1, 1, 1);
    }
  });

  const { camera, gl } = useThree();

  // Initialize the OrbitControls
  useFrame(() => {
    controlsRef.current = new OrbitControls(camera, gl.domElement);
    controlsRef.current.enableDamping = true; // Enable damping for smoother controls
    controlsRef.current.dampingFactor = 0.05; // Adjust the damping factor for smoother controls
    controlsRef.current.rotateSpeed = 0.001; // Adjust the rotation speed (default is 1.0)
    controlsRef.current.zoomSpeed = 0.001; // Adjust the zoom speed (default is 1.0)
    controlsRef.current.panSpeed = 0.001; // Adjust the panning speed (default is 1.0)
    controlsRef.current.minDistance = 1.2; // Set the minimum distance for zooming
    controlsRef.current.maxDistance = 5; // Set the maximum distance for zooming
  });

  useFrame(() => {
    if (controlsRef.current) {
      controlsRef.current.update(); // Update the OrbitControls in every frame
    }
  });

  camera.position.set(1, 1, 1);

  return <group ref={groupRef} />;
};

const Model = () => {
  return (
    <Canvas height="100%" w>
      <pointLight position={[5, 5, 5]} />
      <pointLight position={[-5, -5, -5]} />
      <Frog />
    </Canvas>
  );
};

export default Model;
