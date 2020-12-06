/**
 * Copyright (c) 2020
 *
 * This program determines the name of a planet 
 * using its position number in the solar system.
 * 
 * @author Wajd Mariam <wajd.mariam@mths.ca>
 * 
 * Version 1.0
 * 
 * Created on : 2020/12/06
 */

// Imports prompt
const prompt = require('prompt-sync')({sigint: true});

// Declaring the enum: 
const EnumPlanets = { 
    Mercury:'1',
    Venus:'2',
    Earth:'3',
    Mars:'4',
    Jupiter:'5',
    Saturn:'6',
    Uranus:'7',
    Neptune:'8',
};
// Try Catch Statement:
try {
  
  // Input:
  // Position Input:
  const userInput = prompt(`Enter name of a planet: `);
  console.log (``);
  
  // Process: 
  // Getting planet position from Enum
  var positionPlanet = "" ;
  switch (userInput) {
    
    // If user enters "Mercury"
    case 'Mercury':
      positionPlanet = EnumPlanets.Mercury;
      break;
    
    // If user enters "Venus"
    case 'Venus':
      positionPlanet = EnumPlanets.Venus;
      break;
      
    // If user enters "Earth"
    case 'Earth':
      positionPlanet = EnumPlanets.Earth;
      break;
      
    // If user enters "Mars"
    case 'Mars':
      positionPlanet = EnumPlanets.Mars;
      break;

    // If user enters "Jupiter"
    case 'Jupiter':
      positionPlanet = EnumPlanets.Jupiter;
      break;
      
    // If user enters "Saturn"
    case 'Saturn':
      positionPlanet = EnumPlanets.Saturn;
      break;
      
    // If user enters "Uranus"
    case 'Uranus':
      positionPlanet = EnumPlanets.Uranus;
      break;
      
    // If user enters "Neptune"
    case 'Neptune':
      positionPlanet = EnumPlanets.Neptune;
      break;

    default:
      break;
  }
  // Output:
  console.log('');
  console.log(`${userInput} is number ${positionPlanet} in the solar system`);
} catch(err) {
    console.log (`An error occurred`);
}