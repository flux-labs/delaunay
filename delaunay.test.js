/**
 * Tests for delaunay triangulation.
 *
 * @author Drew <drew@flux.io>
 * @version 0.0.1
 */

'use strict';

import test from 'tape';

import delaunay from './delaunay.js';

test('Delaunay Triangulation', _delaunayTestSuite);

function _delaunayTestSuite (t) {

  t.equal(typeof delaunay, 'function',
      'delaunay should export a function.'
  );

  _triangulateEmpty(t);
  _triangulateThree(t);
  _triangulateFour(t);
  _triangulateFive(t);

  t.end();
}

function _triangulateEmpty (t) {
  var triangulation = delaunay([]);
  t.ok(Array.isArray(triangulation),
      'The return type of delaunay is an array.');
  t.equal(triangulation.length, 0,
      'The triangulation of an empty graph should be empty.');
}

function _triangulateThree (t) {
  var triangle = [[0,0,1], [0,1,0], [1,0,0]];
  var triangulation = delaunay(triangle);

  var triangleOut = [[0,1,2]];
  t.deepEqual(triangulation, triangleOut,
      'The triangulation of a triangle is the triangle.');
}

function _triangulateFour (t) {
  var triangle = [
    [0,0,0],
    [1,2,0],
    [2,1,0],
    [2,2,0]
  ];
  var triangulation = delaunay(triangle);

  var triangleOut = [
    [1,3,2],
    [0,1,2]
  ];
  t.deepEqual(triangulation, triangleOut,
      'Correctly triangulates four coplanar points.');
}

function _triangulateFive (t) {
  var triangle = [
    [0,0,0],
    [1,2,0],
    [2,1,0],
    [2,2,0],
    [3,1,0]
  ];
  var triangulation = delaunay(triangle);

  var triangleOut = [
    [2,3,4],
    [0,2,4],
    [1,3,2],
    [0,1,2]
  ];
  t.deepEqual(triangulation, triangleOut,
      'Correctly triangulates five coplanar points.');
}