require({
    baseUrl: 'js',
    // three.js should have UMD support soon, but it currently does not
    shim: { 'vendor/three': { exports: 'THREE' } }
}, [
    'vendor/three'
], function(THREE) {

var camera, scene, renderer;
var geometry, material, mesh;

init();
animate();

function init() {

    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);
    camera.position.z = 1000;

    scene = new THREE.Scene();

    geometry = new THREE.CubeGeometry(100, 100, 100);
    material = new THREE.MeshBasicMaterial({
        color: 0xff0000,
        wireframe: true
    });
    for (var x = 0; x < 5; x++) {
        for (var y = 0; y < 5; y++) {

            var mesh = new THREE.Mesh(geometry, material);

            scene.add(mesh);
            mesh.position.x = x*100;
            mesh.position.y = y*100;
        };
    };
    
    renderer = new THREE.CanvasRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);

    document.body.appendChild(renderer.domElement);

}

function animate() {

    // note: three.js includes requestAnimationFrame shim
    requestAnimationFrame(animate);

    // mesh.position.x = 0.01;
    // mesh.rotation.y += 0.02;

    renderer.render(scene, camera);

}

});
