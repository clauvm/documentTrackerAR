import {Component, OnInit} from '@angular/core';
// import * as AFRAME from 'aframe';
import * as custom from '../../assets/extra-functions/test.js';


@Component({
  selector: 'app-scan-items',
  templateUrl: './scan-items.component.html',
  styleUrls: ['./scan-items.component.scss']
})
export class ScanItemsComponent implements OnInit {
  nodeLoc: any;
  nodeDir: any;
  constructor() {}

  testFunction(){
    custom.myTest();
  }

  ngOnInit(): void {
    console.log('Init script to register events');
    const markerVisible = {m0: false, m1: false};
    this.nodeLoc = {
      nodeA: {nodeB: 1},
      nodeB: {nodeA: 1, nodeC: 1, nodeD: 1},
      nodeC: {nodeB: 1, nodeD: 1},
      nodeD: {nodeB: 1, nodeC: 1}
    };
    this.nodeDir = {
      nodeA: {nodeB: 'right'},
      nodeB: {nodeA: 'left', nodeC: 'right', nodeD: 'turn around'},
      nodeC: {nodeB: 'left', nodeD: 'turn around - right'},
      nodeD: {nodeB: 'turn around', nodeC: 'turn around - right'}
    };
    console.log('Cruzando dedos');
    const a = this.findShortestPath('nodeA', 'nodeD');
    console.log(this.findShortestPath('nodeA', 'nodeD'));
    a.path.forEach((value, index) => {
      document.getElementById(value).setAttribute('value', a.indication[index] );
    });

    // console.log(document.getElementById('m00'));
  }

  shortestDistanceNode = (distances, visited) => {
    // create a default value for shortest
    let shortest = null;

    // for each node in the distances object
    // tslint:disable-next-line:forin
    for (const node in distances) {
      // if no node has been assigned to shortest yet
      // or if the current node's distance is smaller than the current shortest
      const currentIsShortest =
          shortest === null || distances[node] < distances[shortest];

      // and if the current node is in the unvisited set
      if (currentIsShortest && !visited.includes(node)) {
        // update shortest to be the current node
        shortest = node;
      }
    }
    return shortest;
  }

  findShortestPath = (startNode, endNode) => {
    let distances = {};
    distances[endNode] = 'Infinity';
    distances = Object.assign(distances, this.nodeLoc[startNode]);

    const parents = { endNode: null };
    for (const child in this.nodeLoc[startNode]) {
      parents[child] = startNode;
    }
    const visited = [];

    // find the nearest node
    let node = this.shortestDistanceNode(distances, visited);
    while (node){
      const distance = distances[node];
      const children = this.nodeLoc[node];
      for (const child in children) {
        if (String(child) === String(startNode)) {
          continue;
        } else {
          const newdistance = distance + children[child];
          if (!distances[child] || distances[child] > newdistance) {
            distances[child] = newdistance;
            parents[child] = node;
          }
        }
      }
      visited.push(node);
      node = this.shortestDistanceNode(distances, visited);
    }
    const direction = [];
    const shortestPath = [endNode];
    let parent = parents[endNode];
    while (parent) {
      shortestPath.push(parent);
      parent = parents[parent];
    }
    shortestPath.reverse();
    for (let i = 0; i < shortestPath.length - 1; i++){
      const a = this.nodeDir[shortestPath[i]];
      const b = a[shortestPath[i + 1]];
      direction.push(b);
    }
    direction.push('Found!!!');
    console.log('directions');
    console.log(direction);
    return {
      distance: distances[endNode],
      path: shortestPath,
      indication: direction
    };
  }
}
