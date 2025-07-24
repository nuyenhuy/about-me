import {Component, NgZone} from '@angular/core';
import {NgtBoxGeometryModule} from '@angular-three/core/geometries';
import {NgtMeshBasicMaterialModule} from '@angular-three/core/materials';
import {NgtCoreModule} from '@angular-three/core';
import * as THREE from 'three';
import {NgtMeshModule} from '@angular-three/core/meshes';

@Component({
  selector: 'app-three',
  imports: [
    NgtBoxGeometryModule,
    NgtMeshBasicMaterialModule,
    NgtCoreModule,
    NgtMeshModule
  ],
  templateUrl: './three.html',
  styleUrl: './three.scss'
})
export class Three {
  constructor(private ngZone: NgZone) {
  }
  onAnimateReady(animateObject: THREE.Mesh) {
    console.log(NgZone.isInAngularZone());
    animateObject.rotation.x += 0.01;
    animateObject.rotation.y += 0.01;
  }
}
