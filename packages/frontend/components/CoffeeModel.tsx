import { useEffect, useRef, useState } from "react";
import { Box, Spinner } from "@chakra-ui/react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { loadGLTFModel } from "./model";

function easeOutCirc(x: any) {
  return Math.sqrt(1 - Math.pow(x - 1, 2));
}

const CoffeeModel = (): JSX.Element => {
  const refContainer = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [renderer, setRenderer] = useState<any>(null);
  const [_camera, setCamera] = useState<any>(null);
  const [target] = useState(new THREE.Vector3(-0.5, 1.2, 0));
  const [initialCameraPosition] = useState(
    new THREE.Vector3(
      20 * Math.sin(0.2 * Math.PI),
      10,
      20 * Math.cos(0.2 * Math.PI)
    )
  );

  const [scene] = useState(new THREE.Scene());
  const [_controls, setControls] = useState<any>(null);

  /* eslint-disable */
  useEffect(() => {
    const { current: container } = refContainer;
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
      console.log(renderer);

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
      setCamera(camera);

      const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
      scene.add(ambientLight);
      const controls = new OrbitControls(camera, renderer.domElement);
      controls.autoRotate = true;
      controls.target = target;
      setControls(controls);

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
      let frame = 0;
      const animate = () => {
        req = requestAnimationFrame(animate);
        frame = frame <= 10000 ? frame + 1 : 0;
        console.log(frame);
        if (frame <= 10000) {
          const p = initialCameraPosition;
          const rotSpeed = -easeOutCirc(frame / 1200) * Math.PI * 20;
          camera.position.y = 10;
          camera.position.x =
            p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed);
          camera.position.z =
            p.z * Math.cos(rotSpeed) - p.x * Math.sin(rotSpeed);
          camera.lookAt(target);
        }
        renderer.render(scene, camera); // Ensure rendering
      };
      animate();

      return () => {
        cancelAnimationFrame(req);
        controls.dispose();
        renderer.dispose();
      };
    }
  }, []);

  return (
    <Box>
      <Box
        ref={refContainer}
        className={"voxel-coffee"}
        width={1600}
        height={1600}
        top={-2000}
        left={-400}
        position={"absolute"}
      >
        {loading && <Spinner size={"xl"} />}
      </Box>
    </Box>
  );
};

export default CoffeeModel;
