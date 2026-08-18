# 3D Models Directory (`/public/models`)

This folder is the central storage location for all 3D assets (`.glb`, `.gltf`) used across the Click Or Media website.

## 🚀 How to Add or Replace a 3D Model

Replacing or adding new 3D models is designed to be **100% plug-and-play**:

### Step 1: Copy your `.glb` or `.gltf` file here
Place your 3D model file directly in this folder:
```
public/models/my-custom-model.glb
```

### Step 2: Update the config in `src/config/modelsConfig.js`
Open `src/config/modelsConfig.js` and change the `modelPath` property:

```js
export const HERO_3D_CONFIG = {
  // Change to your new file:
  modelPath: '/models/my-custom-model.glb',
  
  // Optional customizations:
  scale: 1.0,           // The system auto-normalizes bounds, but you can fine-tune scale
  autoRotate: true,     // Toggle auto-rotation
  rotationSpeed: 0.008, // Adjust rotation speed
  enableMouseInteraction: true, // Reacts to mouse pointer
  // ...
};
```

---

## 🛡️ Built-in Smart Features:
1. **Auto-Centering & Auto-Bounding**: No matter what size or position your 3D model was exported in Blender/Maya/C4D, the viewer automatically calculates its bounding box, centers it at `(0, 0, 0)`, and scales it to fit the viewport seamlessly without clipping.
2. **Graceful Fallback**: If a file is missing or still being designed, the viewer automatically falls back to an ultra-modern procedural 3D model (e.g. Glowing Cyber Core, Tech Crystal, Holographic Rings).
3. **Interactive 3D Inspector**: You can test and inspect any model live right on the website using the floating "3D Controls" button!
