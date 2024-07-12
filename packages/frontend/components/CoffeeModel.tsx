import { useEffect, useRef, useState } from "react";
import { Box, Spinner } from "@chakra-ui/react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { loadGLTFModel } from "./model";

const CoffeeModel = (): JSX.Element => {
  const refContainer = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [renderer, setRenderer] = useState<any>(null);
  const [target] = useState(new THREE.Vector3(-0.5, 1.2, 0));
  const [initialCameraPosition] = useState(
    new THREE.Vector3(
      20 * Math.sin(0.2 * Math.PI),
      10,
      20 * Math.cos(0.2 * Math.PI)
    )
  );

  const [scene] = useState(new THREE.Scene());

  /* eslint-disable */
  useEffect(() => {
    const container = refContainer.current;
    if (container && !renderer) {
      const scW = container.clientWidth;
      const scH = container.clientHeight;
      const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
      });

      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(scW, scH);
      container.appendChild(renderer.domElement);
      setRenderer(renderer);

      const scale = scH * 0.005 + 4.8;
      const camera = new THREE.OrthographicCamera(
        -scale,
        scale,
        scale,
        -scale,
        0.01,
        5000
      );
      camera.position.copy(initialCameraPosition);
      camera.lookAt(target);

      const ambientLight = new THREE.AmbientLight(0xffffff, 1);
      scene.add(ambientLight);
      const controls = new OrbitControls(camera, renderer.domElement);
      controls.enableZoom = false;
      controls.domElement = container;

      loadGLTFModel({
        scene,
        glbPath: "/cafe_latte_with_art.glb",
        options: {
          receiveShadow: true,
          castShadow: true,
        },
      })
        .then(() => {
          setLoading(false);
        })
        .catch((error) => {
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
        console.log("disable controls");
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

  return (
    <Box
      ref={refContainer}
      className={"voxel-coffee"}
      width={[800, 2000]}
      height={2000}
      top={[0, -2850]}
      left={-750}
      position={"absolute"}
    >
      {loading && <Spinner size={"xl"} />}
    </Box>
  );
};

export default CoffeeModel;
