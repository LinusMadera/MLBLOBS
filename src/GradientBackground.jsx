import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const GradientBackground = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
    }

    // Gradient texture creation
    const canvas = document.createElement('canvas');
    canvas.width = 256; // Size of the texture
    canvas.height = 256;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      const gradient = ctx.createLinearGradient(0, 0, 256, 256);
      gradient.addColorStop(0, '#ff9a9e'); // You can choose '80s colors
      gradient.addColorStop(0.5, '#fad0c4');
      gradient.addColorStop(1, '#fad0c4');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 256, 256);
    }
    const texture = new THREE.CanvasTexture(canvas);

    // Plane with gradient texture as a wireframe
    const geometry = new THREE.PlaneGeometry(10, 10, 50, 50); // Increase subdivision
    const material = new THREE.MeshBasicMaterial({ map: texture, wireframe: true });
    const plane = new THREE.Mesh(geometry, material);
    scene.add(plane);

    // Animation loop
    let time = 0;
    const animationLoop = () => {
      time += 0.01; // Increase time for animation

      // Floating animation
      plane.position.y = Math.sin(time) * 0.05; // Adjust amplitude for desired float amount

      renderer.render(scene, camera);
      requestAnimationFrame(animationLoop);
    };
    animationLoop();

    // Perspective change on arrow key press
    const onDocumentKeyDown = (event) => {
      switch (event.key) {
        case 'ArrowUp':
          camera.position.y += 0.1;
          break;
        case 'ArrowDown':
          camera.position.y -= 0.1;
          break;
        case 'ArrowLeft':
          camera.position.x -= 0.1;
          break;
        case 'ArrowRight':
          camera.position.x += 0.1;
          break;
      }
      camera.lookAt(scene.position); // Ensure the camera still points at the scene center
    };

    document.addEventListener('keydown', onDocumentKeyDown);

    // Cleanup
    return () => {
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
      document.removeEventListener('keydown', onDocumentKeyDown);
    };
  }, []);

  return <div ref={mountRef} />;
};

export default GradientBackground;