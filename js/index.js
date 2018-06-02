// Scene
const scene = new THREE.Scene();

// Camera
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

// Renderer
const renderer = new THREE.WebGLRenderer({ 
  canvas: document.getElementById('canvas'),
  antialias: true
});
// Default background color
renderer.setClearColor( 0x0000ff );
// The renderer uses the devices pixel ratio
renderer.setPixelRatio( window.devicePixelRatio );
// Size of the renderer ( canvas size )
renderer.setSize( window.innerWidth, window.innerHeight );


const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial({ color: 0xff9333, wireframe: true });
const cube = new THREE.Mesh( geometry, material );
cube.position.set(0, 0, -2);
scene.add( cube );


// Rendering
(function render() {
  requestAnimationFrame( render );
  cube.rotation.x += 0.02;
  cube.rotation.y += 0.02;
  renderer.render( scene, camera );
})();