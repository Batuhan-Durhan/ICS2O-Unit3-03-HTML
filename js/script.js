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
  const radius = parseInt(document.getElementById('radius-of-trapezoid').value)

  
  // process
  const volume = 4 / 3 ( Math.PI * radius **3) 

  // output
  document.getElementById('volume').innerHTML = 'Volume is: ' + volume + ' cm3'
}
