#!/usr/bin/env python3
"""
Script to update range terminology in data.js based on equipment type.
Maps generic 'range' to specific range terminology.
"""
import re

# Define type-to-range-field mappings based on the implementation plan
TYPE_TO_RANGE_FIELD = {
    # Main Battle Tanks and similar vehicles -> operationalRange
    "Main Battle Tank": "operationalRange",
    "Tank Support Vehicle": "operationalRange",
    "Multi-Purpose Tracked Vehicle": "operationalRange",
    
    # Aircraft -> combatRadius (combat) or ferryRange (transport/AWACS)
    "Fighter Aircraft": "combatRadius",
    "Attack Aircraft": "combatRadius",
    "Stealth Bomber Aircraft": "combatRadius",
    "Strategic Bomber Aircraft": "combatRadius",
    "Attack Helicopter": "combatRadius",
    "Light Attack Aircraft": "combatRadius",
    "Strike Aircraft": "combatRadius",
    "Electronic Warfare Aircraft": "combatRadius",  
    
    # Transport aircraft/helo -> ferryRange
    "Transport Helicopter": "ferryRange",
    "Transport Aircraft": "ferryRange",
    "Strategic Heavy-Lift Aircraft": "ferryRange",
    "Airborne Early Warning and Control Aircraft": "ferryRange",
    
    # Artillery and rocket systems -> maximumRange
    "Artillery": "maximumRange",
    "Heavy Flamethrower System": "maximumRange",
    "Tactical Ballistic Missile": "maximumRange",
    
    # Missiles -> maximumRange
    "Cruise Missile": "maximumRange",
    "Intercontinental Ballistic Missile": "maximumRange",
    "Anti-Tank Missile": "maximumRange",
    
    # Air Defense Systems -> engagementRange
    "Air Defense System": "engagementRange",
    
    # Small Arms -> effectiveRange
    "Assault Rifle": "effectiveRange",
    "Pistol": "effectiveRange",
    "Sniper Rifle": "effectiveRange",
    "Submachine Gun": "effectiveRange",
    "Small Arms": "effectiveRange",  # Machine guns, etc.
    "Combat Shotgun": "effectiveRange",
    
    # APCs/IFVs/Vehicles -> operationalRange
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
    
    # Naval Vessels -> endurance
    "Naval Vessel": "endurance",
    
    # Drones -> operationalRange
    "Combat Drone": "operationalRange",
    "Reconnaissance Drone": "operationalRange",
    
    # Electronic Warfare -> operationalRange
    "Electronic Warfare System": "operationalRange",
    "Command and Communication Vehicle": None,  # No range applicable
}

def update_data_file(filepath):
    """Read data.js and update range fields based on equipment type."""
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Pattern to match each equipment object
    # Find each equipment entry (between { and }, with type and specs)
    equipment_pattern = re.compile(
        r'(\{\s*\n\s*id:\s*\d+(?:\.\d+)?,\s*\n\s*name:\s*"[^"]+",\s*\n\s*type:\s*"([^"]+)",[^}]+?specs:\s*\{[^}]*?)(range:\s*)("[^"]+")([^}]*?\})',
        re.DOTALL
    )
    
    def replace_range(match):
        prefix = match.group(1)
        equipment_type = match.group(2)
        range_value = match.group(4)
        suffix = match.group(5)
        
        new_field = TYPE_TO_RANGE_FIELD.get(equipment_type, "range")
        
        if new_field is None:
            # Keep as-is (N/A or special case)
            return match.group(0)
        elif new_field == "range":
            # Fallback, keep original
            return match.group(0)
        else:
            return f"{prefix}{new_field}: {range_value}{suffix}"
    
    updated_content = equipment_pattern.sub(replace_range, content)
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(updated_content)
    
    print("Updated data.js successfully!")

if __name__ == "__main__":
    import sys
    filepath = sys.argv[1] if len(sys.argv) > 1 else "data.js"
    update_data_file(filepath)
