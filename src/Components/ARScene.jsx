import "aframe";

export default function ARScene({ clr }) {
  return (
    <a-scene
      embedded
      vr-mode-ui="enabled: false"
      style={{ width: "100%", height: "80vh" }}
    >
      <a-box
        position="0 1.5 -3"
        color={clr}
        scale="1 1 1"
        animation="property: rotation; to: 0 360 0; loop: true; dur: 4000"
      ></a-box>

      <a-light type="ambient" intensity="1"></a-light>

      <a-entity camera look-controls position="0 1.6 0"></a-entity>
    </a-scene>
  );
}