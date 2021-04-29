import { Component, OnInit } from '@angular/core';
import { AFRAME} from 'aframe';
import * as THREE from 'three';
export function myTest() {
    alert('Welcome to custom js');
}

export function test1(){

    // document.getElementsByTagName("a-marker")
    AFRAME.registerComponent('markerhandler', {
        init() {
            // let marker = this.el;
            //
            console.log('Init event for marker handler');
            // marker.addEventListener('markerFound', function () {
            //     console.log("Found")
            // });
            //
            // marker.addEventListener('markerLost', function () {
            //     console.log("Lost")
            // });
            this.marker = document.querySelector('#m0');
            this.markerA = document.querySelector('#m1');
            this.markerB = document.querySelector('#m2');
            this.markerC = document.querySelector('#m3');
            this.markerD = document.querySelector('#m4');
            this.markerF = document.querySelector('#m5');
            // this.marker1 = document.querySelector("#hiThere");
            // this.marker1.addEventListener('markerFound', function () {
            //     console.log("Found")
            // });
            //
            // this.marker1.addEventListener('markerLost', function () {
            //     console.log("Lost")
            // });
            this.markerVisible = false;

            console.log('End of marker handler event');
        },
        tick(time, deltaTime) {
            if (!this.marker) { return; }
            if (this.marker.object3D.visible) {
                console.log('Entro aqui papa');
                this.getElementById('textDirection').innerHTML = 'Left';
                if (!this.markerVisible) {
                    // marker detected
                    this.markerVisible = true;
                }
            }
            // else {
            //     // document.getElementById("textDirection").innerHTML = "Read Marker";
            //     if (this.markerVisbile) {
            //         // lost sight of the marker
            //         this.markerVisible = false
            //     }
            // }
            if (this.markerA.object3D.visible) {
                this.getElementById('textDirection').innerHTML = 'Left';

            }
            if (this.markerB.object3D.visible) {
                this.getElementById('textDirection').innerHTML = 'Turn Around';
            }
            if (this.markerC.object3D.visible) {
                this.getElementById('textDirection').innerHTML = 'Found';
            }
        }
    });
    AFRAME.registerComponent('registerevents', {
        init: function () {
            let marker = this.el;

            marker.addEventListener('markerFound', function () {
                markerVisible[marker.id] = true;
            });

            marker.addEventListener('markerLost', function () {
                markerVisible[marker.id] = false;
            });
        },
        tick: function (time, deltaTime) {
            console.log("Tick")
        }
    });

    AFRAME.registerComponent('run', {
        init: function () {
            this.m0 = document.querySelector("#m0");
            this.m1 = document.querySelector("#m1");
            this.p0 = new THREE.Vector3();
            this.p1 = new THREE.Vector3();

            this.geometry = new THREE.Geometry();
            this.geometry.vertices.push(new THREE.Vector3(-1, -1, -1));
            this.geometry.vertices.push(new THREE.Vector3(1, 1, 1));
            this.material = new THREE.LineBasicMaterial({color: 0xFF0000});
            this.line = new THREE.Line(this.geometry, this.material);
            let scene = document.querySelector('a-scene').object3D;
            scene.add(this.line);
        },

        tick: function (time, deltaTime) {
            if (markerVisible["m0"] && markerVisible["m1"]) {
                this.m0.object3D.getWorldPosition(this.p0);
                this.m1.object3D.getWorldPosition(this.p1);
                this.geometry.vertices[0] = this.p0;
                this.geometry.vertices[1] = this.p1;
                this.geometry.verticesNeedUpdate = true;
                this.line.visible = true;
            } else {
                this.line.visible = false;
            }
        }
    });
}
