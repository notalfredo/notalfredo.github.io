// Canvas
const canvas = document.querySelector('canvas.webgl')

// Sizes
const sizes = {
    width: 300,
    height: 200
}

// Scene
const scene = new THREE.Scene()

// TorusKnot Geometry
const torusKnotGeometry = new THREE.TorusKnotGeometry(1.25, 0.2, 100, 16)
const torusKnotMaterial = new THREE.MeshStandardMaterial({
    color: '#93C5CA',
    roughness: 0.5,
    metalness: 0.7
})
const torusKnotMesh = new THREE.Mesh(torusKnotGeometry, torusKnotMaterial)
scene.add(torusKnotMesh)

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)


// Light
const light = new THREE.DirectionalLight(0xffffff, 4)
light.position.set(0, 1, 0) // Position the light above the scene
scene.add(light)

// Animation
const animate = () => {
    // Rotate the TorusKnotGeometry
    torusKnotMesh.rotation.x += 0.01
    torusKnotMesh.rotation.y += 0.01
    torusKnotMesh.rotation.z += 0.01

    // Render the scene with the camera
    renderer.render(scene, camera)

    // Request animation frame
    requestAnimationFrame(animate)
}

// Start the animation
animate()

