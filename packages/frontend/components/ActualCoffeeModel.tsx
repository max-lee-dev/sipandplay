import { useEffect, useRef, useState } from "react";
import { Box } from "@chakra-ui/react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { loadGLTFModel } from "./model";

const ActualCoffeeModel = (): JSX.Element => {
  const refContainer = useRef<HTMLDivElement>(null);
  const [renderer, setRenderer] = useState<any>(null);
  const [target] = useState(new THREE.Vector3(10, 10, 10));
  const [initialCameraPosition] = useState(
    new THREE.Vector3(6, 5, 20 * Math.cos(0.2 * Math.PI))
  );
  const [scene] = useState(new THREE.Scene());

  /* eslint-disable */
  useEffect(() => {
    const container = document.getElementById("realCoffee");
    if (container && !renderer) {
      const scW = container.clientWidth;
      const scH = container.clientHeight + 50;
      const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
      });

      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(scW, scH);
      container.appendChild(renderer.domElement);
      setRenderer(renderer);

      const scale = scH * 0.01010000001 + 2;
      const camera = new THREE.OrthographicCamera(
        -scale,
        scale,
        scale,
        -scale,
        1,
        20
      );
      camera.position.copy(initialCameraPosition);
      camera.lookAt(target);

      const ambientLight = new THREE.AmbientLight(0xffffff, 1);
      scene.add(ambientLight);
      const controls = new OrbitControls(camera, renderer.domElement);
      controls.domElement = container;

      loadGLTFModel({
        scene,
        glbPath: "/cup_of_coffee.glb",
        options: {
          receiveShadow: true,
          castShadow: true,
        },
      }).catch((error) => {
        console.error("Error loading model:", error);
      });

      let req: number;
      const animate = () => {
        req = requestAnimationFrame(animate);

        renderer.render(scene, camera); // Ensure rendering
      };
      animate();
      const enableControls = () => {
        console.log("enable");

        controls.enabled = true;
      };

      const disableControls = () => {
        controls.enabled = false;
      };

      container.addEventListener("mouseenter", enableControls);

      container.addEventListener("mouseleave", disableControls);

      return () => {
        cancelAnimationFrame(req);
        controls.dispose();
        renderer.dispose();

        container.removeEventListener("mouseenter", enableControls);
        container.removeEventListener("mouseleave", disableControls);
      };
    }
  }, []);

  return <Box ref={refContainer} className={"voxel-coffee"} />;
};

export default ActualCoffeeModel;
