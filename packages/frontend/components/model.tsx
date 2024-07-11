import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export function loadGLTFModel({
  scene,
  glbPath,
  options = { receiveShadow: true, castShadow: true },
}: {
  scene: any;
  glbPath: string;
  options?: { receiveShadow: boolean; castShadow: boolean };
}): Promise<any> {
  const { receiveShadow, castShadow } = options;
  return new Promise((resolve, reject) => {
    const loader = new GLTFLoader();
    loader.load(
      glbPath,
      (gltf: any) => {
        const obj = gltf.scene;
        obj.name = "coffee";
        obj.receiveShadow = receiveShadow;
        obj.castShadow = castShadow;
        obj.position.x = 0;
        obj.position.y = 0;
        obj.position.z = 0;
        scene.add(obj);
        obj.traverse((child: any) => {
          if (child.isMesh) {
            const meshChild = child;
            meshChild.castShadow = true;
            meshChild.receiveShadow = true;
          }
        });

        resolve(obj);
      },
      undefined,
      (error: any) => {
        reject(error);
      }
    );
  });
}
