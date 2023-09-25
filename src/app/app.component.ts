import { Component, OnInit } from '@angular/core';
import * as THREE from 'three';
// import * as THREE from 'three';
// import { GLTF, GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
// import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';
// import { ServiceCurrService } from '../service-curr.service';

import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';

import { Observable } from 'rxjs';





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  curr1Mid = [1.3, 1.5, 1.34, 1.56, 1.74, 1.1, 1.9, 1.65, 1.9, 1.14, 1.3, 1.65, 1.5, 1.1]
  






  ngOnInit():void{

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
    
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );
    
    const geometry = new THREE.BoxGeometry( 1, 1, 1 );
    const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    const cube = new THREE.Mesh( geometry, material );
    scene.add( cube );
    
    camera.position.z = 5;
    
   

//   title = 'dep3';
  


// console.log("teest")
//     var scene = new THREE.Scene();
//     var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
//     const colorYellow = new THREE.Color('hsl(40,100%,60%)')
//     const colorBlue = new THREE.Color('hsl(242, 42%, 51%)')
//     var renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     // document.body.appendChild(renderer.domElement);

//     window.addEventListener('resize', onWindowResize, false);


//     function onWindowResize() {
//       camera.aspect = window.innerWidth / window.innerHeight;
//       camera.updateProjectionMatrix();
//       renderer.setSize(window.innerWidth, window.innerHeight);
//     }




//     let display = (<HTMLInputElement>document.getElementById("displayText"))
//     display.appendChild(renderer.domElement);
//     let rnd = Math.random()
//     let hights = [1.3, 1.5, 1.34, 1.56, 1.74, 1.1, 1.9, 1.65, 1.9, 1.14, 1.3, 1.65, 1.5, 1.1]
//     console.log("raddom ", rnd)

//     // const texture = new THREE.TextureLoader().load("../assets/Space.jpg")


//     let material = new THREE.MeshPhongMaterial({
//       color: colorYellow,
//       shininess: 80,
//       // map: texture
//     })
//     let materialMax = new THREE.MeshPhongMaterial({
//       color: colorYellow,
//       shininess: 80,
//       //map: texture
//     })
    // let materialMin = new THREE.MeshPhongMaterial({
    //   color: colorBlue,
    //   shininess: 80,
    //   //map: texture
    // })

    
    for (let i = 0; i < this.curr1Mid.length; i++) {
      // console.log("pętla robi cuby ", this.curr1Mid[i],this.curr1Days[i])
      let cubeHight=(this.curr1Mid[i]-1)*5;
      // let cubeHight=(this.curr1Mid[i]-0.5*this.curr1Mid[i];
      // this.cubeHights[i]=cubeHight
      var cubeGeometry = new THREE.BoxGeometry(0.4, cubeHight, 1);
      let cube = new THREE.Mesh(cubeGeometry, material);
      // if (this.curr1Mid[i]==maxValue)
      // {cube = new THREE.Mesh(cubeGeometry, materialMax);}
      // if (this.curr1Mid[i]==minValue)
      // {cube = new THREE.Mesh(cubeGeometry, materialMin);}
      new THREE.Mesh(cubeGeometry, material);
      cube.position.set(-5 + i / 2, cubeHight/2- 2, 1); // Ustaw pozycję na osi Y jako połowę wysokości sześcianu
      scene.add(cube);
      console.log("y posit ",cubeHight/2- 2)
    }

//     renderer.render(scene, camera);
let textMesh:any
    const loader = new FontLoader();

    loader.load('/assets/Inter_Regular.json', function (font) {

      const tGeometry = new TextGeometry('Hello three.js!', {
        font: font,
		size: 0.5,
		height: 0.1,
		curveSegments: 1,
		// bevelEnabled: true,
		// bevelThickness: 1,
		// bevelSize: 8,
		// bevelOffset: 0,
		// bevelSegments: 1
      });

      textMesh = new THREE.Mesh(tGeometry, [
        new THREE.MeshBasicMaterial({ color: 0x00ff00 }),
        new THREE.MeshPhongMaterial({ emissive: 0xf93434, emissiveIntensity: Math.random()-0.6 }),
        new THREE.MeshPhongMaterial({ color: 0x345634 })


      ])
      textMesh.position.set(2,0,0)
      scene.add(textMesh)
      console.log("text ok")


    });



function animate() {
  requestAnimationFrame( animate );

  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  renderer.render( scene, camera );
}

animate();
  
  

}}