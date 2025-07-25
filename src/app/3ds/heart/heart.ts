import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';


@Component({
  selector: 'app-heart',
  standalone: true,
  templateUrl: './heart.html',
  styleUrls: ['./heart.scss']
})
export class Heart implements AfterViewInit {
  @ViewChild('canvasContainer', { static: true }) canvasRef!: ElementRef<HTMLCanvasElement>;

  private renderer!: THREE.WebGLRenderer;
  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private torus!: THREE.Mesh;
  private controls: OrbitControls;

  ngAfterViewInit(): void {
    this.initScene();
    this.animate();
  }

  private initScene(): void {
    const canvas = this.canvasRef.nativeElement;
    const width = 100;
    const height = 100;

    this.renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      antialias: true,
      alpha: true
    });
    this.renderer.setSize(width, height);
    this.renderer.setPixelRatio(window.devicePixelRatio);

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    this.camera.position.z = 30;

    this.controls = new OrbitControls(this.camera, this.renderer.domElement);

    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(10, 10, 10);
    this.scene.add(light, new THREE.AmbientLight(0x404040));


    const x = 0, y = 0;

    const heartShape = new THREE.Shape();

    heartShape.moveTo( x + 5, y + 5 );
    heartShape.bezierCurveTo( x + 5, y + 5, x + 4, y, x, y );
    heartShape.bezierCurveTo( x - 6, y, x - 6, y + 7,x - 6, y + 7 );
    heartShape.bezierCurveTo( x - 6, y + 11, x - 3, y + 15.4, x + 5, y + 19 );
    heartShape.bezierCurveTo( x + 12, y + 15.4, x + 16, y + 11, x + 16, y + 7 );
    heartShape.bezierCurveTo( x + 16, y + 7, x + 16, y, x + 10, y );
    heartShape.bezierCurveTo( x + 7, y, x + 5, y + 5, x + 5, y + 5 );

    const extrudeSettings = {
      depth: 2,
      bevelEnabled: false,
      bevelThickness: 0.3,
      bevelSize: 0.5,
      bevelSegments: 10,
      curveSegments: 50
    };

    const geometry = new THREE.ExtrudeGeometry( heartShape, extrudeSettings );
    const material = new THREE.MeshStandardMaterial ( { color: 0xff69b4, side: THREE.DoubleSide } );
    this.torus = new THREE.Mesh( geometry, material ) ;
    this.torus.rotation.x = Math.PI;
    this.scene.add( this.torus );
  }

  private animate(): void {
    requestAnimationFrame(() => this.animate());

    if (this.torus) {
      this.torus.rotation.y += 0.01;
    }
    this.controls.update();
    this.renderer.render(this.scene, this.camera);
  }
}
