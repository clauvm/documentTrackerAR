import { Component, OnInit } from '@angular/core';
import { AFRAME} from 'aframe';
function initialise(){
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

            console.log('End of marker handler event market handler');
        },
        tick(time, deltaTime) {
            if (!this.marker) { return; }
            if (this.marker.object3D.visible) {
                console.log('Entro aqui papa');
                this.getElementById('textDirection').innerHTML = 'Left marker hand';
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
                this.getElementById('textDirection').innerHTML = 'Left marker hand';

            }
            if (this.markerB.object3D.visible) {
                this.getElementById('textDirection').innerHTML = 'Turn Around';
            }
            if (this.markerC.object3D.visible) {
                this.getElementById('textDirection').innerHTML = 'Found';
            }
        }
    });
}
// @ts-ignore
window.onload = initialise;
