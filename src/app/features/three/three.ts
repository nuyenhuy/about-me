import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import * as THREE from 'three';

@Component({
  selector: 'app-three',
  standalone: true,
  templateUrl: './three.html',
  styleUrls: ['./three.scss']
})
export class Three implements AfterViewInit {
  @ViewChild('canvasContainer', { static: true }) canvasRef!: ElementRef<HTMLCanvasElement>;

  private renderer!: THREE.WebGLRenderer;
  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private heartMesh!: THREE.Mesh;

  ngAfterViewInit(): void {
    this.initScene();
    this.animate();
  }

  private initScene(): void {
    const canvas = this.canvasRef.nativeElement;
    const width = window.innerWidth;
    const height = window.innerHeight;

    // Renderer
    this.renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      antialias: true,
    });
    this.renderer.setSize(width, height);
    this.renderer.setPixelRatio(window.devicePixelRatio);

    // Scene
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0xf8e8e8);

    // Camera
    this.camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    this.camera.position.set(0, 0, 40);
    this.camera.lookAt(0, 0, 0);

    // Light
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(10, 20, 20);
    this.scene.add(light, new THREE.AmbientLight(0x404040));

    // Heart Shape
    const shape = new THREE.Shape();
    shape.moveTo(5, 5);
    shape.bezierCurveTo(5, 5, 4, 0, 0, 0);
    shape.bezierCurveTo(-6, 0, -6, 7, -6, 7);
    shape.bezierCurveTo(-6, 11, -3, 15, 5, 19);
    shape.bezierCurveTo(12, 15, 16, 11, 16, 7);
    shape.bezierCurveTo(16, 7, 16, 0, 10, 0);
    shape.bezierCurveTo(7, 0, 5, 5, 5, 5);

    const geometry = new THREE.ExtrudeGeometry(shape, {
      depth: 4,
      bevelEnabled: true,
      bevelSegments: 2,
      bevelSize: 1,
      bevelThickness: 1,
    });

    const material = new THREE.MeshPhongMaterial({ color: 0xff3366 });
    this.heartMesh = new THREE.Mesh(geometry, material);
    this.heartMesh.rotation.x = Math.PI;
    this.heartMesh.position.set(-8, -10, 0);
    this.scene.add(this.heartMesh);
  }

  private animate(): void {
    requestAnimationFrame(() => this.animate());
    this.heartMesh.rotation.y += 0.01;
    this.renderer.render(this.scene, this.camera);
  }
}
