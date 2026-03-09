const scene = new THREE.Scene()
scene.background = new THREE.Color(0x87CEEB)

const camera = new THREE.PerspectiveCamera(
60,
window.innerWidth/window.innerHeight,
0.1,
1000
)

const renderer = new THREE.WebGLRenderer({antialias:true})
renderer.setSize(window.innerWidth,window.innerHeight)
document.body.appendChild(renderer.domElement)



// mặt đất cát

const groundGeometry = new THREE.PlaneGeometry(200,200)

const groundMaterial = new THREE.MeshStandardMaterial({
color:0xD2B48C,
roughness:1
})

const ground = new THREE.Mesh(groundGeometry,groundMaterial)

ground.rotation.x = -Math.PI/2

scene.add(ground)



// kim tự tháp

const pyramidGeometry = new THREE.ConeGeometry(4,6,4)

const pyramidMaterial = new THREE.MeshStandardMaterial({

color:0xC2B280,
roughness:0.95,
metalness:0

})

const pyramid = new THREE.Mesh(
pyramidGeometry,
pyramidMaterial
)

pyramid.position.y = 3

scene.add(pyramid)



// ánh sáng mặt trời

const sun = new THREE.DirectionalLight(0xffffff,1.3)

sun.position.set(20,30,10)

scene.add(sun)

scene.add(new THREE.AmbientLight(0x888888))



camera.position.set(10,8,15)

camera.lookAt(0,3,0)



// xoay 180°

let angle = 0
let direction = 1

function animate(){

requestAnimationFrame(animate)

angle += 0.005 * direction

pyramid.rotation.y = angle

if(angle > Math.PI || angle < 0){

direction *= -1

}

renderer.render(scene,camera)

}

animate()