import "aframe";
import { useState } from "react";

export default function VRClassroom() {
  const scenes = {
    mountain:
      "https://cdn.aframe.io/360-image-gallery-boilerplate/img/sechelt.jpg",
    beach:
      "https://cdn.jsdelivr.net/gh/aframevr/aframe@master/examples/boilerplate/panorama/puydesancy.jpg",
    sunset:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2000",
    forest:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=2000",
  };

  const [scene, setScene] = useState(scenes.mountain);

  return (
    <div style={{ position: "relative" }}>
      {/* 🔥 Buttons */}
      <div
        style={{
          position: "absolute",
          zIndex: 1000,
          top: "10px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: "10px",
          flexWrap: "wrap",
        }}
      >
        <button onClick={() => setScene(scenes.mountain)}>Mountain</button>
        <button onClick={() => setScene(scenes.beach)}>Beach</button>
        <button onClick={() => setScene(scenes.sunset)}>Sunset</button>
        <button onClick={() => setScene(scenes.forest)}>Forest</button>
      </div>

      {/* 🌐 VR Scene */}
      <a-scene
        key={scene} // 🔥 forces refresh
        embedded
        style={{
          width: "100%",
          height: "100vh",
          position: "relative",
        }}
      >
        <a-sky src={scene} rotation="0 -90 0"></a-sky>

        <a-entity camera look-controls position="0 1.6 0"></a-entity>
      </a-scene>
    </div>
  );
}