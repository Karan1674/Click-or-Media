import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
// import { HERO_3D_CONFIG } from '../../config/modelsConfig';

export default function Universal3DViewer({
  modelPath = '/models/hero-scene.glb',
  fallbackType = 'cyber-core',
  autoRotate = true,
  autoRotateSpeed = 0.008,
  scale = 1.0,
  interactive = true,
  wireframe = false,
  customColor = null,
  height = '100%',
  width = '100%',
  onModelLoaded = null,
  showControlsHint = true
}) {
  const mountRef = useRef(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const renderWidth = container.clientWidth || 400;
    const renderHeight = container.clientHeight || 400;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, renderWidth / renderHeight, 0.1, 1000);
    camera.position.set(0, 0, 4.8);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(renderWidth, renderHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.4;
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const orangeKeyLight = new THREE.DirectionalLight(0xff5500, 5.0);
    orangeKeyLight.position.set(6, 6, 5);
    scene.add(orangeKeyLight);

    const whiteFillLight = new THREE.DirectionalLight(0xffffff, 2.5);
    whiteFillLight.position.set(-6, -4, -4);
    scene.add(whiteFillLight);

    const orangeRimLight = new THREE.PointLight(0xff7700, 4.0, 12);
    orangeRimLight.position.set(0, 5, 4);
    scene.add(orangeRimLight);

    const bottomGlow = new THREE.PointLight(0xff3300, 3.0, 10);
    bottomGlow.position.set(0, -4, 3);
    scene.add(bottomGlow);

    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    const animatedElements = [];

    const createProceduralModel = (type) => {
      const group = new THREE.Group();
      const orangeCol = customColor ? new THREE.Color(customColor) : new THREE.Color(0xff5500);
      const whiteCol = new THREE.Color(0xffffff);
      const darkObsidian = new THREE.Color(0x0c0c0e);

      if (type === 'growth-crystal' || type === 'branding') {
        const crystalGeo = new THREE.OctahedronGeometry(1.25, 0);
        const crystalMat = new THREE.MeshPhysicalMaterial({
          color: orangeCol,
          emissive: 0x882200,
          emissiveIntensity: 0.7,
          metalness: 0.9,
          roughness: 0.1,
          reflectivity: 1.0,
          clearcoat: 1.0,
          clearcoatRoughness: 0.1,
          wireframe: wireframe
        });
        const crystal = new THREE.Mesh(crystalGeo, crystalMat);
        group.add(crystal);
        animatedElements.push({ obj: crystal, rotX: 0.005, rotY: 0.01 });

        const cageGeo = new THREE.IcosahedronGeometry(1.6, 0);
        const cageMat = new THREE.MeshBasicMaterial({
          color: whiteCol,
          wireframe: true,
          transparent: true,
          opacity: 0.4
        });
        const cage = new THREE.Mesh(cageGeo, cageMat);
        group.add(cage);
        animatedElements.push({ obj: cage, rotX: -0.003, rotY: -0.006 });

        const ringGeo = new THREE.TorusGeometry(1.9, 0.025, 16, 100);
        const ringMat = new THREE.MeshStandardMaterial({
          color: orangeCol,
          emissive: orangeCol,
          emissiveIntensity: 1.2,
          metalness: 0.8
        });
        const ring = new THREE.Mesh(ringGeo, ringMat);
        ring.rotation.x = Math.PI / 3;
        group.add(ring);
        animatedElements.push({ obj: ring, rotZ: 0.015 });

      } else if (type === 'hologram-rings' || type === 'socialMedia') {
        const ring1Geo = new THREE.TorusGeometry(1.4, 0.035, 16, 80);
        const ring1Mat = new THREE.MeshStandardMaterial({
          color: orangeCol,
          emissive: orangeCol,
          emissiveIntensity: 1.0,
          metalness: 0.8,
          wireframe: wireframe
        });
        const ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
        group.add(ring1);
        animatedElements.push({ obj: ring1, rotX: 0.012, rotY: 0.008 });

        const ring2Geo = new THREE.TorusGeometry(1.1, 0.03, 16, 80);
        const ring2Mat = new THREE.MeshStandardMaterial({
          color: whiteCol,
          emissive: 0xcccccc,
          emissiveIntensity: 0.6,
          metalness: 0.95,
          wireframe: wireframe
        });
        const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
        group.add(ring2);
        animatedElements.push({ obj: ring2, rotY: 0.015, rotZ: 0.006 });

        const ring3Geo = new THREE.TorusGeometry(0.8, 0.025, 16, 80);
        const ring3Mat = new THREE.MeshStandardMaterial({
          color: 0xff7700,
          emissive: 0xff7700,
          emissiveIntensity: 1.0,
          wireframe: wireframe
        });
        const ring3 = new THREE.Mesh(ring3Geo, ring3Mat);
        group.add(ring3);
        animatedElements.push({ obj: ring3, rotX: -0.01, rotZ: 0.014 });

        const coreGeo = new THREE.SphereGeometry(0.42, 32, 32);
        const coreMat = new THREE.MeshStandardMaterial({
          color: orangeCol,
          emissive: orangeCol,
          emissiveIntensity: 1.8,
          roughness: 0.2
        });
        const core = new THREE.Mesh(coreGeo, coreMat);
        group.add(core);

      } else if (type === 'quantum-node' || type === 'advertising') {
        const cubeGeo = new THREE.BoxGeometry(1.2, 1.2, 1.2);
        const cubeMat = new THREE.MeshPhysicalMaterial({
          color: darkObsidian,
          metalness: 0.95,
          roughness: 0.08,
          clearcoat: 1.0,
          wireframe: wireframe
        });
        const cube = new THREE.Mesh(cubeGeo, cubeMat);
        group.add(cube);
        animatedElements.push({ obj: cube, rotX: 0.008, rotY: 0.01 });

        const wireCubeGeo = new THREE.BoxGeometry(1.55, 1.55, 1.55);
        const wireCubeMat = new THREE.MeshBasicMaterial({
          color: orangeCol,
          wireframe: true,
          transparent: true,
          opacity: 0.8
        });
        const wireCube = new THREE.Mesh(wireCubeGeo, wireCubeMat);
        group.add(wireCube);
        animatedElements.push({ obj: wireCube, rotX: -0.006, rotZ: -0.008 });

        for (let i = 0; i < 4; i++) {
          const satGeo = new THREE.SphereGeometry(0.12, 16, 16);
          const satMat = new THREE.MeshStandardMaterial({
            color: whiteCol,
            emissive: whiteCol,
            emissiveIntensity: 2.0
          });
          const sat = new THREE.Mesh(satGeo, satMat);
          const angle = (i / 4) * Math.PI * 2;
          sat.position.set(Math.cos(angle) * 1.8, Math.sin(angle) * 1.8, 0);
          group.add(sat);
          animatedElements.push({ obj: sat, orbitSpeed: 0.02, orbitRadius: 1.8, initialAngle: angle });
        }

      } else {
        const knotGeo = new THREE.TorusKnotGeometry(0.85, 0.26, 128, 32, 2, 3);
        const knotMat = new THREE.MeshPhysicalMaterial({
          color: orangeCol,
          emissive: 0x882200,
          emissiveIntensity: 0.6,
          metalness: 0.95,
          roughness: 0.1,
          reflectivity: 1.0,
          clearcoat: 1.0,
          clearcoatRoughness: 0.1,
          wireframe: wireframe
        });
        const knot = new THREE.Mesh(knotGeo, knotMat);
        group.add(knot);
        animatedElements.push({ obj: knot, rotX: 0.007, rotY: 0.012 });

        const glowGeo = new THREE.SphereGeometry(0.5, 32, 32);
        const glowMat = new THREE.MeshStandardMaterial({
          color: 0xffffff,
          emissive: 0xffffff,
          emissiveIntensity: 2.0,
          roughness: 0.1
        });
        const innerGlow = new THREE.Mesh(glowGeo, glowMat);
        group.add(innerGlow);
        animatedElements.push({ obj: innerGlow, pulse: true, speed: 2.0 });

        const sphereCageGeo = new THREE.SphereGeometry(1.65, 24, 16);
        const sphereCageMat = new THREE.MeshBasicMaterial({
          color: 0xff5500,
          wireframe: true,
          transparent: true,
          opacity: 0.35
        });
        const sphereCage = new THREE.Mesh(sphereCageGeo, sphereCageMat);
        group.add(sphereCage);
        animatedElements.push({ obj: sphereCage, rotY: -0.005, rotX: 0.003 });

        const particleCount = 50;
        const particleGeo = new THREE.BufferGeometry();
        const positions = new Float32Array(particleCount * 3);
        for (let i = 0; i < particleCount; i++) {
          const radius = 1.8 + Math.random() * 0.5;
          const theta = Math.random() * Math.PI * 2;
          const phi = Math.acos((Math.random() * 2) - 1);
          positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
          positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
          positions[i * 3 + 2] = radius * Math.cos(phi);
        }
        particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        const particleMat = new THREE.PointsMaterial({
          color: 0xffffff,
          size: 0.06,
          transparent: true,
          opacity: 0.9
        });
        const particles = new THREE.Points(particleGeo, particleMat);
        group.add(particles);
        animatedElements.push({ obj: particles, rotY: 0.008, rotZ: 0.004 });
      }

      return group;
    };

    const loadModel = () => {
      if (modelPath && modelPath.endsWith('.glb')) {
        const loader = new GLTFLoader();
        loader.load(
          modelPath,
          (gltf) => {
            const model = gltf.scene;
            const box = new THREE.Box3().setFromObject(model);
            const size = box.getSize(new THREE.Vector3());
            const center = box.getCenter(new THREE.Vector3());

            model.position.x += (model.position.x - center.x);
            model.position.y += (model.position.y - center.y);
            model.position.z += (model.position.z - center.z);

            const maxDim = Math.max(size.x, size.y, size.z);
            const scaleFactor = (2.2 / (maxDim || 1)) * scale;
            model.scale.set(scaleFactor, scaleFactor, scaleFactor);

            mainGroup.clear();
            mainGroup.add(model);
            setLoading(false);
            if (onModelLoaded) onModelLoaded({ type: 'glb', path: modelPath });
          },
          undefined,
          () => {
            const fallbackMesh = createProceduralModel(fallbackType);
            fallbackMesh.scale.set(scale, scale, scale);
            mainGroup.clear();
            mainGroup.add(fallbackMesh);
            setLoading(false);
            if (onModelLoaded) onModelLoaded({ type: 'procedural', fallback: fallbackType });
          }
        );
      } else {
        const proceduralMesh = createProceduralModel(fallbackType);
        proceduralMesh.scale.set(scale, scale, scale);
        mainGroup.clear();
        mainGroup.add(proceduralMesh);
        setLoading(false);
        if (onModelLoaded) onModelLoaded({ type: 'procedural', fallback: fallbackType });
      }
    };

    loadModel();


    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };
    let mouseVelocity = { x: 0, y: 0 };
    let pointerOffset = { x: 0, y: 0 };

    const handlePointerDown = (e) => {
      if (!interactive) return;
      isDragging = true;
      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const handlePointerMove = (e) => {
      const rect = container.getBoundingClientRect();
      pointerOffset.x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      pointerOffset.y = -((e.clientY - rect.top) / rect.height - 0.5) * 2;

      if (!isDragging || !interactive) return;
      const deltaX = e.clientX - previousMousePosition.x;
      const deltaY = e.clientY - previousMousePosition.y;

      mouseVelocity.x = deltaX * 0.008;
      mouseVelocity.y = deltaY * 0.008;

      mainGroup.rotation.y += mouseVelocity.x;
      mainGroup.rotation.x += mouseVelocity.y;

      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const handlePointerUp = () => {
      isDragging = false;
    };

    if (interactive) {
      container.addEventListener('pointerdown', handlePointerDown);
      window.addEventListener('pointermove', handlePointerMove);
      window.addEventListener('pointerup', handlePointerUp);
    }

    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth || 400;
      const newHeight = container.clientHeight || 400;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };
    window.addEventListener('resize', handleResize);

    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      if (!isDragging) {
        mouseVelocity.x *= 0.95;
        mouseVelocity.y *= 0.95;
        mainGroup.rotation.y += mouseVelocity.x;
        mainGroup.rotation.x += mouseVelocity.y;

        if (autoRotate) {
          mainGroup.rotation.y += autoRotateSpeed;
        }

        mainGroup.position.x = THREE.MathUtils.lerp(mainGroup.position.x, pointerOffset.x * 0.3, 0.05);
        mainGroup.position.y = THREE.MathUtils.lerp(mainGroup.position.y, pointerOffset.y * 0.3 + Math.sin(elapsedTime * 1.5) * 0.12, 0.05);
      }

      animatedElements.forEach((item) => {
        if (item.rotX) item.obj.rotation.x += item.rotX;
        if (item.rotY) item.obj.rotation.y += item.rotY;
        if (item.rotZ) item.obj.rotation.z += item.rotZ;

        if (item.pulse) {
          const s = 1 + Math.sin(elapsedTime * (item.speed || 3.0) + (item.offset || 0)) * 0.08;
          item.obj.scale.set(s, s, s);
        }

        if (item.orbitSpeed) {
          const angle = item.initialAngle + elapsedTime * item.orbitSpeed * 10;
          item.obj.position.x = Math.cos(angle) * item.orbitRadius;
          item.obj.position.z = Math.sin(angle) * item.orbitRadius;
        }
      });

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      if (interactive) {
        container.removeEventListener('pointerdown', handlePointerDown);
        window.removeEventListener('pointermove', handlePointerMove);
        window.removeEventListener('pointerup', handlePointerUp);
      }
      renderer.dispose();
      if (container && renderer.domElement) {
        container.innerHTML = '';
      }
    };
  }, [modelPath, fallbackType, autoRotate, autoRotateSpeed, scale, interactive, wireframe, customColor]);

  return (
    <div style={{ position: 'relative', width, height, cursor: interactive ? 'grab' : 'default' }}>
      <div ref={mountRef} style={{ width: '100%', height: '100%' }} />

      {/* {showControlsHint && !loading && (
        <div style={{
          position: 'absolute',
          bottom: '12px',
          left: '50%',
          transform: 'translateX(-50%)',
          background: 'rgba(10, 10, 14, 0.85)',
          border: '1px solid rgba(255, 85, 0, 0.35)',
          borderRadius: '20px',
          padding: '4px 14px',
          fontSize: '0.68rem',
          fontFamily: 'var(--font-mono, monospace)',
          fontWeight: '700',
          color: '#a1a1aa',
          letterSpacing: '0.08em',
          pointerEvents: 'none',
          backdropFilter: 'blur(10px)',
          whiteSpace: 'nowrap',
          display: 'flex',
          alignItems: 'center',
          gap: '6px'
        }}>
          <span style={{ color: '#ff5500' }}>✦</span>
          <span>DRAG TO ROTATE 3D</span>
        </div>
      )} */}
    </div>
  );
}