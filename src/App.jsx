import { useState } from "react";
import ARScene from "./components/ARScene";
import VRClassroom from "./components/VRClassroom";

export default function App() {
  const [clr, setClr] = useState("#4CC3D9");
  const [mode, setMode] = useState("AR");

  const toggle = () => {
    setClr((c) => (c === "#4CC3D9" ? "#EF2D5E" : "#4CC3D9"));
  };

  return (
    <div style={{ textAlign: "center" }}>
      <button onClick={() => setMode("AR")}>AR Mode</button>
      <button onClick={() => setMode("VR")}>VR Mode</button>

      {mode === "AR" && (
        <>
          <button onClick={toggle}>Toggle color</button>
          <ARScene clr={clr} />
        </>
      )}

      {mode === "VR" && <VRClassroom />}
    </div>
  );
}