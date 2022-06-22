// Copyright (c) 2022 Batuhan Durhan All rights reserved
//
// Created by: Batuhan Durhan
// Created on: Mar 2022
// This file contains the JS functions for index.html

'use strict'
/**
 * This function calculates volume of pyramid.
 */
function calculate() {
  // input
  const radius = parseInt(document.getElementById('radius-of-sphere').value)

  
  // process
  const volume = (4 / 3) * Math.PI * Math.pow(radius, 3) 

  // output
  document.getElementById("volume").innerHTML = "The volume of the sphere is: " + volume.toFixed(2) + " cm³"
}
