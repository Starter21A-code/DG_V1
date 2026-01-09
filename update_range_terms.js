/**
 * Script to update range terminology in data.js based on equipment type.
 * Run with: node update_range_terms.js
 */
const fs = require('fs');
const path = require('path');

// Define type-to-range-field mappings
const TYPE_TO_RANGE_FIELD = {
    // Main Battle Tanks and similar vehicles -> operationalRange
    "Main Battle Tank": "operationalRange",
    "Tank Support Vehicle": "operationalRange",
    "Multi-Purpose Tracked Vehicle": "operationalRange",

    // Aircraft -> combatRadius (combat) or ferryRange (transport/AWACS)
    "Fighter Aircraft": "combatRadius",
    "Attack Aircraft": "combatRadius",
    "Stealth Bomber Aircraft": "combatRadius",
    "Strategic Bomber Aircraft": "combatRadius",
    "Attack Helicopter": "combatRadius",
    "Light Attack Aircraft": "combatRadius",
    "Strike Aircraft": "combatRadius",
    "Electronic Warfare Aircraft": "combatRadius",

    // Transport aircraft/helo -> ferryRange
    "Transport Helicopter": "ferryRange",
    "Transport Aircraft": "ferryRange",
    "Strategic Heavy-Lift Aircraft": "ferryRange",
    "Airborne Early Warning and Control Aircraft": "ferryRange",

    // Artillery and rocket systems -> maximumRange
    "Artillery": "maximumRange",
    "Heavy Flamethrower System": "maximumRange",
    "Tactical Ballistic Missile": "maximumRange",

    // Missiles -> maximumRange
    "Cruise Missile": "maximumRange",
    "Intercontinental Ballistic Missile": "maximumRange",
    "Anti-Tank Missile": "maximumRange",

    // Air Defense Systems -> engagementRange
    "Air Defense System": "engagementRange",

    // Small Arms -> effectiveRange
    "Assault Rifle": "effectiveRange",
    "Pistol": "effectiveRange",
    "Sniper Rifle": "effectiveRange",
    "Submachine Gun": "effectiveRange",
    "Small Arms": "effectiveRange",
    "Machine Gun": "effectiveRange",
    "Combat Shotgun": "effectiveRange",

    // APCs/IFVs/Vehicles -> operationalRange
    "Infantry Fighting Vehicle": "operationalRange",
    "Armoured Personnel Carrier": "operationalRange",
    "Armoured Fighting Vehicle": "operationalRange",
    "Light Utility Vehicle": "operationalRange",
    "Protected Patrol Vehicle": "operationalRange",
    "Patrol Vehicle": "operationalRange",
    "MRAP Vehicle": "operationalRange",
    "Protected Mobility Vehicle": "operationalRange",
    "Amphibious Combat Vehicle": "operationalRange",
    "Amphibious Fighting Vehicle": "operationalRange",
    "Armoured Vehicle Launched Bridge": "operationalRange",
    "Wheeled Vehicle-Launched Bridge": "operationalRange",
    "Mine-Clearing Vehicle": "operationalRange",
    "Minelayer": "operationalRange",

    // Naval Vessels -> endurance
    "Naval Vessel": "endurance",

    // Drones -> operationalRange
    "Combat Drone": "operationalRange",
    "Reconnaissance Drone": "operationalRange",

    // Electronic Warfare -> operationalRange
    "Electronic Warfare System": "operationalRange",
    "Command and Communication Vehicle": null,
};

const filepath = './data.js';

// Read the file
let content = fs.readFileSync(filepath, 'utf-8');

// Keep track of replacements
let replacements = 0;

// Process line by line to find each equipment entry and its type
// Then replace 'range:' with appropriate field on matching spec lines
const lines = content.split('\n');
let currentType = null;

for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Check if this line defines the type
    const typeMatch = line.match(/type:\s*"([^"]+)"/);
    if (typeMatch) {
        currentType = typeMatch[1];
    }

    // Check if this line has 'range:' in specs
    if (currentType && line.includes('range:') && !line.includes('effectiveRange') &&
        !line.includes('maximumRange') && !line.includes('combatRadius') &&
        !line.includes('ferryRange') && !line.includes('operationalRange') &&
        !line.includes('endurance') && !line.includes('engagementRange')) {

        const newField = TYPE_TO_RANGE_FIELD[currentType];
        if (newField && newField !== null) {
            lines[i] = line.replace(/range:/, `${newField}:`);
            replacements++;
            console.log(`Replaced 'range' with '${newField}' for type: ${currentType}`);
        }
    }
}

// Write back
fs.writeFileSync(filepath, lines.join('\n'), 'utf-8');
console.log(`\nTotal replacements made: ${replacements}`);
