window.equipmentData = [
    // === MAIN BATTLE TANKS ===
    {
        id: 1,
        name: "M1 Abrams",
        type: "Main Battle Tank",
        origin: "United States",
        coords: [39.8283, -98.5795],
        images: [
            "assets/m1_abrams_1765118350420.jpg",
            "assets/m1_abrams_bravo.jpg"
        ],
        imageCredits: [
            "Photo: Spc. Matthew Marcellus / U.S. Army / Public Domain",
            "Photo: Unknown author / U.S. Army Heritage and Education Center / Public Domain"
        ],
        specs: { speed: "67 km/h", armament: "120mm M256", operationalRange: "426 km" },
        inService: 1980,
        users: ["United States", "Australia", "Egypt", "Iraq", "Kuwait", "Saudi Arabia"],
        status: "Active",
        fact: "The M1 Abrams is powered by a 1,500 hp gas turbine engine, giving it exceptional acceleration and allowing it to run on multiple fuel types including jet fuel, diesel, and gasoline.",
        recognitionFeatures: {
            wheels: "7 road wheels per side with significant gap between 1st and 2nd wheel. Drive sprocket at rear (distinctive high mount).",
            hull: "Flat, very long glacis plate. Central driver's hatch. Rear engine deck has large grilles for gas turbine exhaust.",
            armament: "120mm M256 smoothbore gun with large bore evacuator. Coaxial 7.62mm MG.",
            turret: "Large, wide, and angular turret. Bustle rack at rear. Commander's Independent Thermal Viewer (CITV) box on left side (M1A2)."
        }
    },
    {
        id: 2,
        name: "Leopard 2A7",
        type: "Main Battle Tank",
        origin: "Germany",
        coords: [51.1657, 10.4515],
        images: [
            "assets/leopard2_17655118389229.jpg",
            "assets/Leopard_2A7_bravo.jpg"
        ],
        imageCredits: [
            "Photo: Fric.matej / Wikimedia Commons / CC BY-SA 4.0",
            "Photo: Boevaya mashina / Wikimedia Commons / CC BY-SA 4.0 — image modified (symbols removed)"
        ],
        specs: { speed: "72 km/h", armament: "120mm L/55", operationalRange: "500 km" },
        inService: 2014,
        users: ["Germany", "Hungary", "Qatar"],
        status: "Active",
        fact: "The Leopard 2A7 features modular composite armor that can be quickly reconfigured for different threat environments, making it one of the most adaptable main battle tanks in service.",
        recognitionFeatures: {
            wheels: "7 road wheels per side. Torsion bar suspension. Idler at front, sprocket at rear.",
            hull: "Flat glacis plate. Distinctive ventilation grille at right rear for APU. Driver's hatch on front right.",
            armament: "120mm L/55 smoothbore gun - noticeably longer than L/44. Bore evacuator on barrel.",
            turret: "Arrow-shaped (wedge) appliqué armor on turret front. Boxy bustle with cooling system at rear."
        }
    },
    {
        id: 3,
        name: "Al-Khalid (VT-1A)",
        type: "Main Battle Tank",
        origin: "Pakistan",
        coords: [30.3753, 69.3451],
        images: [
            "assets/VT_1A.jpg",
            "assets/Al_Khalid_Bravo.jpg"
        ],
        imageCredits: [
            "Photo: Shadman Samee / Wikimedia Commons / CC BY-SA 2.0",
            "Photo: Cepasial / Wikimedia Commons / CC BY-SA 4.0"
        ],
        specs: { speed: "72 km/h", armament: "125mm Smoothbore", operationalRange: "500 km" },
        inService: 2001,
        users: ["Pakistan", "Bangladesh", "Morocco", "Myanmar", "Sri Lanka"],
        status: "Active",
        recognitionFeatures: {
            wheels: "6 rubber-tired road wheels. Wavy-shaped side skirts often covering upper tracks. Drive sprocket at rear.",
            hull: "Low profile with ERA blocks on glacis. Driver positioned centrally with single hatch. V-shaped splash guard on glacis.",
            armament: "125mm smoothbore gun with thermal sleeve. 12.7mm anti-aircraft MG mounted on commander's cupola.",
            turret: "Boxy, welded turret with modular composite/ERA armor on front. Smoke grenade dischargers on sides. Storage basket at rear."
        },
        fact: "The Al-Khalid is a joint Pakistan-China development based on the Chinese Type 90-II. Also known as MBT-2000 and VT-1A, it features a powerful 1,200hp engine and an autoloader capable of firing 8 rounds per minute from its 125mm gun."
    },
    {
        id: 4,
        name: "Challenger 2",
        type: "Main Battle Tank",
        origin: "United Kingdom",
        coords: [55.3781, -3.4360],
        images: [
            "assets/challenger2_1765118411349.jpg",
            "assets/Challenger_2_Bravo.jpg"
        ],
        imageCredits: [
            "Photo: Graeme Main/MOD / Wikimedia Commons / OGL v1.0",
            "Photo: KyÅMaruOtami / Wikimedia Commons / CC BY 4.0"
        ],
        specs: { speed: "59 km/h", armament: "120mm L30A1", operationalRange: "450 km" },
        inService: 1998,
        users: ["United Kingdom", "Oman"],
        status: "Active",
        fact: "Ukrainian crews have praised the Challenger 2's accuracy, likening its rifled 120mm gun to a 'sniper rifle among tanks' due to its exceptional precision compared to smoothbore-equipped tanks.",
        recognitionFeatures: {
            wheels: "6 road wheels per side, evenly spaced with prominent rubber rims. No return rollers visible - track runs directly over wheels.",
            hull: "Flat glacis plate with Dorchester composite armor blocks. Driver's hatch offset to right side. Distinctive angular appliqué armor panels.",
            armament: "Unique L30A1 120mm rifled gun - the only modern MBT still using a rifled barrel. Prominent thermal sleeve. Coaxial 7.62mm chain gun.",
            turret: "Angular wedge-shaped Dorchester armor with distinctive 'arrowhead' profile. Large stowage bins at rear."
        }
    },

    {
        id: 6,
        name: "T-14 Armata",
        type: "Main Battle Tank",
        origin: "Russia",
        coords: [55.7558, 37.6173],
        images: [
            "assets/T_14.jpg",
            "assets/T14_bravo.jpg"
        ],
        imageCredits: [
            "Photo: Vitaly V. Kuzmin / Wikimedia Commons / CC BY-SA 4.0",
            "Photo: Boevaya mashina / Wikimedia Commons / CC BY-SA 4.0"
        ],
        specs: { speed: "90 km/h", armament: "125mm 2A82-1M", operationalRange: "500 km" },
        inService: 2024,
        users: ["Russia"],
        status: "Active",
        recognitionFeatures: {
            wheels: "7 road wheels per side (unlike 6 on T-72/T-90). Drive sprocket at rear. Idler at front.",
            hull: "Crew capsule at front (3 hatches in line). Unmanned turret. Malachit ERA blocks on sides.",
            armament: "125mm 2A82-1M smoothbore gun (no bore evacuator). Remote 7.62mm MG on turret roof.",
            turret: "Unmanned, angular stealthy design. Active Protection System (Afghanit) sensors and launchers visible."
        },
        fact: "The T-14 Armata houses all three crew members in a protected compartment in the front of the hull, a significant departure from traditional tank architecture designed to enhance crew survivability by separating the personnel from the ammunition and the main gun system."

    },
    {
        id: 7,
        name: "Merkava Mk.4",
        type: "Main Battle Tank",
        origin: "Israel",
        coords: [31.0461, 34.8516],
        images: [
            "assets/merkava4_1765118431134.jpg",
            "assets/Merkava_Mk4_bravo.jpg"
        ],
        imageCredits: [
            "Photo: MathKnight and Zachi Evenor / Wikimedia Commons / CC BY-SA 4.0",
            "Photo: IDF Spokesperson's Unit / Wikimedia Commons / CC BY-SA 3.0"
        ],
        specs: { speed: "64 km/h", armament: "120mm MG253", operationalRange: "500 km" },
        inService: 2004,
        users: ["Israel"],
        status: "Active",
        recognitionFeatures: {
            wheels: "6 road wheels with visible coil springs. Drive sprocket at front (unique for MBTs).",
            hull: "Front-mounted engine (exhaust on right side). Rear clamshell doors for infantry/ammo access. Flat, angled glacis.",
            armament: "120mm smoothbore gun with thermal sleeve. 12.7mm M2 heavy MG often on mantlet. Internal 60mm mortar.",
            turret: "Large, saucer/disc-like shape. Distinctive 'ball and chain' curtain on rear bustle overhang."
        },
        fact: "Unlike any other MBT, the Merkava places its engine at the front — deliberately using it as extra armour to protect the crew. The rear clamshell hatch means the tank can even evacuate casualties mid-battle, a design philosophy born from Israel's early and painful tank losses."

    },
    {
        id: 8,
        name: "Type 99A (ZTZ-99)",
        type: "Main Battle Tank",
        origin: "China",
        coords: [35.8617, 104.1954],
        images: [
            "assets/type99a_tank.jpg",
            "assets/Type_99a_bravo.jpg"
        ],
        imageCredits: [
            "Photo: Tyg728 / Wikimedia Commons / CC BY-SA 4.0",
            "Photo: Max Smith / Wikimedia Commons / Public Domain"
        ],
        specs: { speed: "80 km/h", armament: "125mm ZPT-98", operationalRange: "600 km" },
        inService: 2011,
        users: ["China"],
        status: "Active",
        recognitionFeatures: {
            wheels: "6 road wheels per side. Driver sprocket at rear, idler at front.",
            hull: "Arrow-shaped ERA/composite armor on front. Rear engine deck is raised (unlike Type 96).",
            armament: "125mm ZPT-98 smoothbore gun (50 caliber). 12.7mm QJC-88 heavy MG on roof.",
            turret: "Large, angular welded turret with heavy ERA coverage (arrow-shaped). Large bustle rack. Laser dazzler system (JD-3) on roof."
        },
        fact: "The Type 99A can fire laser-guided anti-tank missiles directly through its 125mm barrel, hitting targets at over 5km — well beyond the range of conventional tank ammunition. It can even use this to engage low-flying helicopters, something most tanks simply cannot do."

    },
    {
        id: 9,
        name: "K2 Black Panther",
        type: "Main Battle Tank",
        origin: "South Korea",
        coords: [35.9078, 127.7669],
        images: [
            "assets/k2_black_panther.jpg",
            "assets/K2_black_panther_bravo.jpg"
        ],
        imageCredits: [
            "Photo: Staff Sgt. Matthew Foster / U.S. National Guard / Public Domain",
            "Photo: Simta / Wikimedia Commons / CC BY-SA 3.0 — image modified (symbols removed)"
        ],
        specs: { speed: "70 km/h", armament: "120mm L/55", operationalRange: "450 km" },
        inService: 2014,
        users: ["South Korea", "Poland"],
        status: "Active",
        recognitionFeatures: {
            wheels: "6 road wheels per side with rubber tires. Advanced In-arm Suspension Unit (ISU) allows distinctive 'kneeling' capability.",
            hull: "Driver positioned front-center. Heavy composite armor with Explosive Reactive Armor (ERA) blocks often visible on skirts.",
            armament: "Long 120mm L/55 smoothbore gun with thermal sleeve. Bustle-mounted autoloader eliminates need for loader's hatch.",
            turret: "Flat, angular turret with MAWS radar plates on frontal cheeks. Large bustle rack at rear."
        },
        fact: "The K2's hydropneumatic suspension can actively raise, lower, and tilt the entire hull — allowing the tank to 'bow' its nose to fire uphill or adopt a low hull-down position that would be physically impossible for a conventional tank."
    },

    {
        id: 120,
        name: "Chonma-2",
        type: "Main Battle Tank",
        origin: "North Korea",
        coords: [39.0194, 125.7381],
        images: [
            "assets/Chonma_2.png",
            "assets/Chonma_2_Bravo.png"
        ],
        imageCredits: [
            "Photo: Арт123ПК / Wikimedia Commons / CC BY-SA 4.0 — image modified (background removed)",
            "Photo: Арт123ПК / Wikimedia Commons / CC BY-SA 4.0 — image modified (background removed)"
        ],
        specs: { speed: "65 km/h", armament: "125mm smoothbore", operationalRange: "500 km" },
        inService: 2020,
        users: ["North Korea"],
        status: "Active",
        fact: "Officially named 'Cheonma-2', this tank represents a significant leap in North Korean armor design, featuring composite armor, active protection systems (APS), and external similarities to modern tanks like the M1A2 Abrams and T-14 Armata.",
        recognitionFeatures: {
            wheels: "7 road wheels per side (distinct from older 6-wheel designs).",
            hull: "Modern composite armor with ERA blocks. Driver likely centrally positioned.",
            armament: "125mm main gun with muzzle reference system. Bulsae-3 anti-tank missiles on turret side.",
            turret: "Angular welded turret with slat armor at rear. Active Protection System sensors visible."
        }
    },
    {
        id: 113,
        name: "M109 Paladin",
        type: "Artillery",
        origin: "United States",
        coords: [39.8283, -98.5795],
        images: [
            "assets/M109.jpg",
            "assets/M109_Bravo.jpg"
        ],
        imageCredits: [
            "Photo: Staff Sgt. Richard Wrigley / U.S. Army / Public Domain",
            "Photo: SPEC. 5 Vince Werner / U.S. Government / Public Domain"
        ],
        specs: { speed: "56 km/h", armament: "155mm M284", maximumRange: "30 km" },
        inService: 1963,
        users: ["United States", "Austria", "Bahrain", "Belgium", "Brazil", "Canada", "Chile", "Denmark", "Egypt", "Germany", "Greece", "Israel", "Italy", "Japan", "Jordan", "Kuwait", "Morocco", "Netherlands", "Norway", "Oman", "Pakistan", "Portugal", "Saudi Arabia", "South Korea", "Spain", "Switzerland", "Taiwan", "Thailand", "Tunisia", "Turkey", "Ukraine", "United Kingdom", "30+ countries"],
        status: "Active",
        fact: "The M109 is one of the most widely produced self-propelled artillery systems in the world, with over 10,000 units built. First introduced in 1963 for the Vietnam War, it has been continuously upgraded through variants (A1-A7), with the latest M109A7 featuring enhanced armor and automation. Its 155mm howitzer can fire GPS-guided Excalibur rounds up to 40km away."
    },
    {
        id: 124,
        name: "2S35 Koalitsiya-SV",
        type: "Artillery",
        origin: "Russia",
        coords: [55.7558, 37.6173],
        images: [
            "assets/2s35.jpg",
            "assets/2S35_Bravo.jpg"
        ],
        imageCredits: [
            "Photo: Vitaly V. Kuzmin / vitalykuzmin.net / CC BY-SA 3.0",
            "Photo: Vitaly V. Kuzmin / vitalykuzmin.net / CC BY-SA 4.0"
        ],
        specs: { speed: "60 km/h", armament: "152mm 2A88", maximumRange: "70 km" },
        inService: 2020,
        users: ["Russia"],
        status: "Active",
        fact: "The 2S35 Koalitsiya-SV features a revolutionary unmanned turret with the crew housed in an armored capsule. Its 152mm gun can fire up to 16 rounds per minute and hit targets at 70km - nearly double the range of most Western howitzers. An early design considered twin barrels but this was abandoned."
    },
    {
        id: 125,
        name: "2S7 Pion",
        type: "Artillery",
        origin: "Russia",
        coords: [55.7558, 37.6173],
        images: [
            "assets/2s7.jpg",
            "assets/2S7_Bravo.jpg"
        ],
        imageCredits: [
            "Photo: Nickel nitride / Wikimedia Commons / CC0 1.0",
            "Photo: Boevaya mashina / Wikimedia Commons / CC BY-SA 4.0"
        ],
        specs: { speed: "50 km/h", armament: "203mm 2A44", maximumRange: "47.5 km" },
        inService: 1975,
        users: ["Russia", "Ukraine", "Belarus", "Poland"],
        status: "Active",
        fact: "The 2S7 Pion is the world's most powerful self-propelled gun, firing 110kg shells from its massive 203mm cannon. It can deliver tactical nuclear strikes and has an audible alarm that sounds for 5 seconds before firing to warn nearby personnel of the immense concussive blast."
    },
    {
        id: 11,
        name: "Zulfiqar-3",
        type: "Main Battle Tank",
        origin: "Iran",
        coords: [32.4279, 53.6880],
        images: [
            "assets/zulfiqar_3.jpg",
            "assets/Zulfiqar_3_bravo.jpg"
        ],
        imageCredits: [
            "Photo: M-ATF / military.ir / CC BY-SA 3.0 Unported — image modified (symbols removed)",
            "Photo: M-ATF / military.ir / CC BY-SA 3.0 Unported — image modified (symbols removed)"
        ],
        specs: { speed: "70 km/h", armament: "125mm smoothbore", operationalRange: "450 km" },
        inService: 2016,
        users: ["Iran"],
        status: "Active",
        recognitionFeatures: {
            wheels: "7 road wheels per side (unlike 6 on earlier Zulfiqars). Skirts cover upper track.",
            hull: "Boxy hull resembling US Abrams. Driver's hatch front-center. Sloped glacis.",
            armament: "125mm 2A46M smoothbore gun (auto-loaded). 12.7mm DShK MG on commander's hatch.",
            turret: "Angular, welded turret resembling Abrams. Large bustle rack. Meteorological mast often visible."
        },
        fact: "Iran developed the Zulfiqar using design cues from American M60 Pattons — inherited from the Shah's pre-revolution army — and Soviet T-72s, making it one of the few tanks in the world built by blending the hardware of Cold War rivals."

    },
    {
        id: 12,
        name: "Arjun Mk.2",
        type: "Main Battle Tank",
        origin: "India",
        coords: [20.5937, 78.9629],
        images: [
            "assets/arjun_mk2.jpg",
            "assets/Arjun_Mk2_Bravo.jpg"
        ],
        imageCredits: [
            "Photo: Anirvan Shukla / Wikimedia Commons / CC BY-SA 3.0",
            "Photo: Anirvan Shukla / Wikimedia Commons / CC BY-SA 3.0"
        ],
        specs: { speed: "58 km/h", armament: "120mm rifled gun", operationalRange: "450 km" },
        inService: 2014,
        users: ["India"],
        status: "Active",
        recognitionFeatures: {
            wheels: "7 road wheels per side (distinctive count). Hydropneumatic suspension. Large side skirts covering upper tracks.",
            hull: "Heavy Kanchan composite armor with wedge-shaped reactive armor blocks on glacis. Driver's hatch on right.",
            armament: "120mm rifled gun with thermal sleeve and fume extractor. Resembles British 120mm guns but on a larger turret.",
            turret: "Boxy composite turret with arrow-shaped add-on armor modules on front. Prominent RCWS (Remote Controlled Weapon Station) on roof."
        },
        fact: "Despite taking over 30 years from initial concept to service — one of the longest MBT development timelines in history — the Arjun reportedly outperformed the Russian T-90S in Indian Army desert trials in 2010, vindicating decades of domestic investment."
    },
    {
        id: 151,
        name: "BM Oplot",
        type: "Main Battle Tank",
        origin: "Ukraine",
        coords: [50.4501, 30.5234],
        images: [
            "assets/T84_Oplot.jpg",
            "assets/T84_Oplot_Bravo.jpg"
        ],
        imageCredits: [
            "Photo: VoidWanderer / Wikimedia Commons / CC BY-SA 4.0",
            "Photo: VoidWanderer / Wikimedia Commons / CC BY-SA 4.0"
        ],
        specs: { speed: "70 km/h", armament: "125mm KBA-3", operationalRange: "500 km" },
        inService: 1999,
        users: ["Ukraine", "Thailand"],
        status: "Active",
        fact: "The T-84 Oplot is Ukraine's most advanced domestically-produced tank, evolved from the Soviet T-80. It features the Varta optronic countermeasures system with laser warning sensors and an infrared jammer that can deceive incoming anti-tank guided missiles. Thailand operates 49 Oplots alongside Chinese VT-4 tanks.",
        recognitionFeatures: {
            wheels: "6 dual rubber-tyred road wheels per side. Torsion bar suspension with hydraulic shock absorbers on 1st, 2nd, and 6th stations. Drive sprocket at rear.",
            hull: "Low Soviet-style profile with well-sloped glacis. Modular Duplet ERA blocks on front and sides. Driver centrally positioned with hatch opening to right. Large hinged rubber side skirts.",
            armament: "125mm KBA-3 smoothbore gun with thermal sleeve. 12.7mm anti-aircraft MG on commander's cupola. Coaxial 7.62mm MG.",
            turret: "All-welded turret (unlike cast T-80UD turret). Hexagonal shape when viewed from above. Duplet ERA panels on front and sides. Commander's cupola on right, gunner's hatch on left."
        }
    },
    {
        id: 13,
        name: "Leclerc",
        type: "Main Battle Tank",
        origin: "France",
        coords: [46.2276, 2.2137],
        images: [
            "assets/leclerc.jpg",
            "assets/Leclerc_bravo.jpg"
        ],
        imageCredits: [
            "Photo: Daniel Steger / OpenPhoto.net / CC BY-SA 2.5",
            "Photo: David Monniaux / Wikimedia Commons / CC BY-SA 2.0 France"
        ],
        specs: { speed: "72 km/h", armament: "120mm CN120-26", operationalRange: "550 km" },
        inService: 1992,
        users: ["France", "UAE", "Jordan"],
        status: "Active",
        recognitionFeatures: {
            wheels: "6 road wheels per side. Hydropneumatic suspension system. Drive sprocket at rear, idler at front. Side skirts often cover upper track.",
            hull: "Compact hull length (approx 6.9m). Driver positioned at front-left. Modular composite armor on glacis.",
            armament: "120mm CN 120-26 smoothbore gun (52 caliber) - notably longer than typical L/44 guns. Thermal sleeve and compressed air fume extractor.",
            turret: "Distinctive low-profile turret with modular armor. Autoloader bustle at rear separates crew from ammo."
        },
        fact: "The Leclerc was the first Western main battle tank to feature an automatic loading system, reducing crew to just three members and enabling a fire rate of 12 rounds per minute. It was also among the first tanks with integrated battlefield management, providing real-time positions of allied and hostile forces."
    },
    {
        id: 155,
        name: "C1 Ariete",
        type: "Main Battle Tank",
        origin: "Italy",
        coords: [41.9028, 12.4964],
        images: [
            "assets/C1_Ariete.jpg",
            "assets/C1_Ariete_Bravo.jpg"
        ],
        imageCredits: [
            "Photo: Italian Army / esercito.difesa.it / CC BY 2.5",
            "Photo: Kaminski / Wikimedia Commons / CC BY-SA 3.0"
        ],
        specs: { speed: "65 km/h", armament: "120mm OTO Melara L/44", operationalRange: "550 km" },
        inService: 1995,
        users: ["Italy"],
        status: "Active",
        fact: "The C1 Ariete is Italy's only domestically designed and produced main battle tank, with 200 units built by OTO Melara and IVECO. It shares the TURMS fire control system with the B1 Centauro tank destroyer and was designed specifically for the Italian Army's needs in the European theater.",
        recognitionFeatures: {
            wheels: "7 road wheels per side with pronounced gaps. Torsion bar suspension. Drive sprocket at rear, idler at front. Rubber side skirts.",
            hull: "Welded steel hull with composite armor on front. Driver's hatch on front-left. Sloped glacis plate. Exhaust on rear left side.",
            armament: "120mm OTO Melara L/44 smoothbore gun with thermal sleeve and bore evacuator. Coaxial 7.62mm MG. Commander's 7.62mm MG on roof.",
            turret: "Angular welded turret with composite armor inserts. Distinctive flat turret roof. Smoke grenade launchers on turret sides. Large bustle rack at rear."
        }
    },
    {
        id: 14,
        name: "Type 10",
        type: "Main Battle Tank",
        origin: "Japan",
        coords: [36.2048, 138.2529],
        images: [
            "assets/type_10.jpg",
            "assets/Type10_bravo.jpg"
        ],
        imageCredits: [
            "Photo: TGoto / Wikimedia Commons / Public Domain",
            "Photo: Los688 / Wikimedia Commons / CC0 1.0"
        ],
        specs: { speed: "70 km/h", armament: "120mm L/44", operationalRange: "440 km" },
        inService: 2012,
        users: ["Japan"],
        users: ["Japan"],
        status: "Active",
        recognitionFeatures: {
            wheels: "5 large road wheels per side (distinctive count). Hydropneumatic active suspension (variable ride height).",
            hull: "Modular ceramic/composite armor. Rubber side skirts. Headlights recessed in front armor.",
            armament: "120mm L/44 smoothbore gun with thermal sleeve. 12.7mm M2 MG on roof.",
            turret: "Wedge-shaped modular armor on front/sides. Boxy bustle with autoloader. Smoke dischargers embedded under armor."
        },
        fact: "Japan's Type 10 was engineered to fit the country's civilian road network and bridge weight limits, making it one of the lightest modern MBTs at around 44 tonnes. Its digital C4I system also lets an entire armoured unit share real-time targeting data — a capability NATO only began standardising years later."

    },
    {
        id: 15,
        name: "Olifant",
        type: "Main Battle Tank",
        origin: "South Africa",
        coords: [-30.5595, 22.9375],
        images: [
            "assets/Olifant.png",
            "assets/Olifant_bravo.jpg"
        ],
        imageCredits: [
            "Photo: Spore1200 / Wikimedia Commons / CC BY-SA 4.0",
            "Photo: Danie van der Merwe / Flickr / CC BY 2.0"
        ],
        specs: { speed: "58 km/h", armament: "105mm rifled gun", operationalRange: "350 km" },
        inService: 1976,
        users: ["South Africa"],
        status: "Active",
        fact: "The Olifant (Afrikaans for 'Elephant') is South Africa's main battle tank, developed from the British Centurion and upgraded over decades to remain competitive with modern armor.",
        recognitionFeatures: {
            wheels: "6 road wheels per side (Centurion lineage). Side skirts often have 'saw-tooth' bottom edge.",
            hull: "Boxy hull with driver's hatch on right. V-shaped 'bush basher' bar often on lower front glacis.",
            armament: "105mm rifled GT3B gun (L7 derivative) with thermal sleeve and fume extractor. Coaxial 7.62mm MG.",
            turret: "Boxy, welded turret with large bustle rack at rear. Distinctive wedge-shaped additional armor on front."
        }

    },
    {
        id: 16,
        name: "T-72",
        type: "Main Battle Tank",
        origin: "Russia",
        coords: [56.3269, 44.0059],
        images: [
            "assets/T72.jpg",
            "assets/T72_Bravo.jpg"
        ],
        imageCredits: [
            "Photo: Turkmen / Wikimedia Commons / CC BY 4.0 — image modified (symbols removed)",
            "Photo: Vitaly V. Kuzmin / vitalykuzmin.net / CC BY-SA 4.0"
        ],
        specs: { speed: "60 km/h", armament: "125mm 2A46M", operationalRange: "460 km" },
        inService: 1973,
        users: ["Russia", "India", "Iraq", "Poland", "Syria"],
        status: "Active",
        recognitionFeatures: {
            wheels: "6 large die-cast road wheels (starfish pattern). Distinctly larger than T-64/T-80 wheels.",
            hull: "Low markings. V-shaped splash guard on glacis. Exhaust port on left side (above last wheel).",
            armament: "125mm 2A46 smoothbore gun with thermal sleeve and bore evacuator. IR searchlight to right of gun.",
            turret: "Low, rounded cast turret ('Frying Pan'). External fuel drums often mounted at rear."
        },
        fact: "The T-72 is one of the most widely produced tanks in history, with over 25,000 units built and service in 40+ countries."

    },
    {
        id: 115,
        name: "BMPT Terminator",
        type: "Tank Support Vehicle",
        origin: "Russia",
        coords: [56.8389, 60.6057],
        images: [
            "assets/BMPT.jpg",
            "assets/BMPT_Bravo.jpg"
        ],
        imageCredits: [
            "Photo: Vitaly V. Kuzmin / vitalykuzmin.net / CC BY-SA 4.0",
            "Photo: VoidWanderer / Wikimedia Commons / CC BY-SA 4.0"
        ],
        specs: { speed: "60 km/h", armament: "2x 30mm 2A42, 4x 9M120 Ataka", operationalRange: "550 km" },
        inService: 2018,
        users: ["Russia", "Kazakhstan", "Algeria"],
        status: "Active",
        fact: "The BMPT 'Terminator' was developed from combat experiences in Afghanistan and Chechnya, where tanks proved vulnerable in urban environments. Built on the T-72 chassis, it features dual 30mm autocannons, four Ataka missile launchers, and a crew of 5 to provide dedicated protection to tanks against infantry threats."
    },
    {
        id: 118,
        name: "Altay",
        type: "Main Battle Tank",
        origin: "Turkey",
        coords: [39.9334, 32.8597],
        images: [
            "assets/Altay_Tank.jpg",
            "assets/Altay_Bravo.jpg"
        ],
        imageCredits: [
            "Photo: Emir GEÇIR / Wikimedia Commons / CC0 1.0",
            "Photo: CeeGee / Wikimedia Commons / CC BY-SA 4.0"
        ],
        specs: { speed: "65 km/h", armament: "120mm L/55", operationalRange: "500 km" },
        inService: 2025,
        users: ["Turkey"],
        status: "Active",
        status: "Active",
        recognitionFeatures: {
            wheels: "7 rubber-tired road wheels. Hydropneumatic suspension. Drive sprocket at rear with idler at front.",
            hull: "Heavy modular composite armor with noticeable Roketsan ERA packages on glacis. Driver on right.",
            armament: "120mm L/55 smoothbore gun (MKE production) with thermal sleeve. 7.62mm coaxial MG.",
            turret: "Distinctive angular turret with AKKOR Active Protection System radars on corners. Remote weapon station options on roof."
        },
        fact: "The Altay is Turkey's first domestically developed main battle tank, named after General Fahrettin Altay. Mass production began in 2025, with the design based on technology transfer from South Korea's K2 Black Panther. It features the AKKOR Active Protection System providing 360-degree defense against anti-tank missiles and a 1,500 hp engine giving it exceptional mobility."
    },
    {
        id: 119,
        name: "MT-LB",
        type: "Multi-Purpose Tracked Vehicle",
        origin: "Russia",
        coords: [55.7558, 37.6173],
        image: "assets/MTLB.jpg",
        specs: { speed: "61 km/h", armament: "7.62mm PKT MG", operationalRange: "500 km" },
        inService: 1970,
        users: ["Russia", "Ukraine", "Poland", "Bulgaria", "Finland", "40+ countries"],
        status: "Active",
        fact: "The MT-LB (Multi-purpose Towing Vehicle Light Armoured) is a highly versatile Soviet-era tracked vehicle that entered service in 1970. Fully amphibious and capable of carrying 11 passengers plus a 2-person crew, it has served as an artillery tractor, armored personnel carrier, command vehicle, and platform for numerous weapon systems. Its combination of reliability, low silhouette, and adaptability has made it one of the most widely used tracked vehicles globally.",
        imageCredit: "Photo: DON S. Montgomery / U.S. Navy / Public Domain"
    },

    // === FIGHTER AIRCRAFT ===
    {
        id: 17,
        name: "F-35 Lightning II",
        type: "Fighter Aircraft",
        origin: "United States",
        coords: [38.8814, -77.0365],
        images: [
            "assets/f35.jpg",
            "assets/F35_Bravo.jpg"
        ],
        imageCredits: [
            "Photo: Noah Wulf / Wikimedia Commons / CC BY-SA 4.0",
            "Photo: U.S. Air Force / Public Domain"
        ],
        specs: { speed: "Mach 1.6", armament: "AIM-120, GBU-31", combatRadius: "2,200 km" },
        inService: 2015,
        users: ["United States", "UK", "Italy", "Netherlands", "Australia", "Norway", "Japan", "Israel", "South Korea"],
        status: "Active",
        recognitionFeatures: {
            wings: "Mid-mounted, trapezoidal wings. Smaller span than F-22.",
            engine: "Single turbofan engine. Conventional round exhaust nozzle.",
            fuselage: "Blended wing-body stealth design. Thicker/heavier appearance than F-22.",
            tail: "Twin outward-canted vertical stabilizers. Horizontal stabilators."
        }
    },
    {
        id: 122,
        name: "Mitsubishi F-2",
        type: "Fighter Aircraft",
        origin: "Japan",
        coords: [36.2048, 138.2529],
        images: [
            "assets/Mitsubishi_F2.jpg",
            "assets/Mitsubishi_F2_Bravo.jpg"
        ],
        imageCredits: [
            "Photo: Marine Cpl. Ashleigh Bryant / U.S. Air Force / Public Domain",
            "Photo: Jerry Gunner / Wikimedia Commons / CC BY-SA 2.0"
        ],
        specs: { speed: "Mach 2.0", armament: "20mm JM61A1, ASM-2", combatRadius: "833 km" },
        inService: 2000,
        users: ["Japan"],
        status: "Active",
        fact: "The Mitsubishi F-2, nicknamed 'Viper Zero', was the first operational military aircraft in the world to feature an AESA (Active Electronically Scanned Array) radar - beating even the F-22 Raptor. Based on the F-16 but 25% larger, it was developed specifically for Japan's anti-ship strike mission.",
        recognitionFeatures: {
            wings: "Larger, wider wings than F-16 (25% more area). Mid-mounted with extended leading edge.",
            engine: "Single F110-GE-129 turbofan. Oval air intake under fuselage like F-16.",
            fuselage: "Longer, wider nose than F-16 (houses AESA radar). Three-piece canopy instead of one-piece.",
            tail: "Single vertical stabilizer. Two ventral fins. Similar to F-16 but slightly larger."
        }
    },
    {
        id: 123,
        name: "F-15J Eagle",
        type: "Fighter Aircraft",
        origin: "Japan",
        coords: [36.2048, 138.2529],
        images: [
            "assets/F15j.jpg",
            "assets/F15j_Bravo.jpg"
        ],
        imageCredits: [
            "Photo: Balon Greyjoy / Wikimedia Commons / CC0 1.0",
            "Photo: Balon Greyjoy / Wikimedia Commons / CC0 1.0"
        ],
        specs: { speed: "Mach 2.5", armament: "20mm M61 Vulcan, AAM-4", combatRadius: "2,037 km" },
        inService: 1981,
        users: ["Japan"],
        status: "Active",
        fact: "Japan is the largest operator of the F-15 Eagle outside the United States, with over 200 F-15J/DJs built under license by Mitsubishi. They scramble over 1,000 times annually to intercept Chinese and Russian aircraft approaching Japanese airspace.",
        recognitionFeatures: {
            wings: "High-mounted, swept wings with distinctive large area. Twin vertical stabilizers.",
            engine: "Twin F100 turbofans with large rectangular intakes on fuselage sides.",
            fuselage: "Large, wide fuselage with tandem cockpit. Broad flat underside.",
            tail: "Twin outward-canted vertical stabilizers. All-moving horizontal stabilators."
        }
    },
    {
        id: 18,
        name: "F-16 Fighting Falcon",
        type: "Fighter Aircraft",
        origin: "United States",
        coords: [33.9425, -118.4081],
        images: [
            "assets/F16.jpg",
            "assets/F16_Bravo.jpg"
        ],
        imageCredits: [
            "Photo: Staff Sgt. Cherie A. Thurlby / U.S. Air Force / Public Domain",
            "Photo: Åukasz GoÅ‚owanow / Konflikty.pl / Attribution"
        ],
        specs: { speed: "Mach 2+", armament: "M61A1 Vulcan 20mm", combatRadius: "2,027 km" },
        inService: 1980,
        users: ["United States", "Israel", "Turkey", "South Korea", "Netherlands", "Belgium", "Poland", "Taiwan", "Ukraine"],
        status: "Active",
        fact: "The F-16 Fighting Falcon is the world's most common fixed-wing military aircraft, with over 4,600 built and operated by 25+ nations. Its frameless bubble canopy provides exceptional visibility.",
        recognitionFeatures: {
            wings: "Mid-mounted, cropped delta wings. Strakes (leading edge extensions) run from wing root to nose.",
            engine: "Single large turbofan engine. Distinctive oval air intake under the fuselage.",
            fuselage: "Single engine configuration. Bubble canopy offers 360-degree visibility.",
            tail: "Single vertical stabilizer. Two ventral fins under the tail section."
        }
    },
    {
        id: 19,
        name: "A-10 Thunderbolt II",
        type: "Attack Aircraft",
        origin: "United States",
        coords: [32.8998, -105.9603],
        images: [
            "assets/A10_Thunderbolt_2.jpg",
            "assets/A10_Thunderbolt2_bravo.jpg"
        ],
        imageCredits: [
            "Photo: Master Sgt. William Greer / U.S. Air Force / Public Domain",
            "Photo: Senior Airman Audree Campbell / U.S. Air Force / Public Domain"
        ],
        specs: { speed: "680 km/h", armament: "GAU-8/A Avenger 30mm", combatRadius: "4,150 km" },
        inService: 1977,
        users: ["United States"],
        status: "Active",
        fact: "The A-10 'Warthog' is built around its devastating 30mm GAU-8/A Avenger rotary cannon, which fires 3,900 rounds per minute and can destroy tanks from miles away. The aircraft is famously durable and can fly with one engine, half a tail, and one elevator destroyed.",
        recognitionFeatures: {
            wings: "Low-mounted, straight leading/trailing edges. Hoerner tips. Large surface area.",
            engine: "Two TF34 turbofans mounted high on rear fuselage nacelles. Shielded by twin tails.",
            fuselage: "Robust, straight design. Cockpit forward of wings. GAU-8 cannon protrudes from nose.",
            tail: "Twin vertical stabilizers on payload-shielding horizontal stabilizer."
        }
    },
    {
        id: 20,
        name: "JAS 39 Gripen D",
        type: "Fighter Aircraft",
        origin: "Sweden",
        coords: [60.1282, 18.6435],
        image: "assets/gripen_1765118486549.jpg",
        specs: { speed: "Mach 2", armament: "IRIS-T, AIM-120, RBS-15", combatRadius: "800 km" },
        inService: 2003,
        users: ["Sweden", "Czech Republic", "Hungary", "South Africa", "Thailand"],
        status: "Active",
        recognitionFeatures: {
            wings: "Delta wing configuration. Large all-moving canards mounted on air intakes.",
            engine: "Single Volvo RM12 turbofan engine. Round exhaust nozzle.",
            fuselage: "Sleek, unstable aerodynamic design. Tandem two-seat cockpit. Pitot tube on nose.",
            tail: "Vertical stabilizer only (no horizontal tail). Delta wing provides lift/control."
        },
        fact: "The JAS 39 Gripen D is the two-seat tandem variant of the Gripen C, developed for operational training and specialist missions while retaining full combat capability. Unlike the single-seat C-model, the D forgoes the internal 27mm Mauser BK-27 cannon to accommodate the rear cockpit. The Czech Republic and Hungary lease their Gripen C/Ds from Sweden — a unique arrangement in modern NATO alliance history.",
        imageCredit: "Photo: Milan Nykodym / Wikimedia Commons / CC BY-SA 2.0"
    },
    {
        id: 21,
        name: "F-22 Raptor",
        type: "Fighter Aircraft",
        origin: "United States",
        coords: [33.7490, -84.3880],
        images: [
            "assets/f22_raptor.jpg",
            "assets/F22_Bravo.jpg"
        ],
        imageCredits: [
            "Photo: Airwolfhound / Wikimedia Commons / CC BY-SA 2.0",
            "Photo: Master Sgt. Andy Dunaway / U.S. Air Force / Public Domain — image modified (symbol removed)"
        ],
        specs: { speed: "Mach 2.25", armament: "AIM-120, AIM-9, GBU-32", combatRadius: "2,960 km" },
        inService: 2005,
        users: ["United States"],
        status: "Active",
        fact: "The F-22 Raptor is the world's first fifth-generation fighter aircraft, combining stealth, supercruise, maneuverability, and advanced avionics. It can cruise at supersonic speeds without afterburners and is the most advanced air superiority fighter ever built.",
        recognitionFeatures: {
            wings: "High-mounted, diamond-shaped (clipped delta) wings.",
            engine: "Twin turbofans. Distinctive 2D rectangular thrust-vectoring nozzles.",
            fuselage: "Sleek, blended wing-body design. Flat bottom fuselage.",
            tail: "Twin outward-canted vertical stabilizers. All-moving horizontal stabilators."
        }
    },
    {
        id: 22,
        name: "Su-57 Felon",
        type: "Fighter Aircraft",
        origin: "Russia",
        coords: [56.3269, 44.0059],
        image: "assets/su57_felon.jpg",
        specs: { speed: "Mach 2", armament: "R-77M, Kh-59MK2", combatRadius: "3,500 km" },
        inService: 2020,
        users: ["Russia"],
        status: "Active - Limited Production",
        recognitionFeatures: {
            wings: "Trapezoidal wings with LEVCONs (Leading Edge Vortex Controllers). Large surface area.",
            engine: "Two widely separated engines. Wide, flattened fuselage between engines.",
            fuselage: "Flattened, blended wing-body stealth design. Side storage bays.",
            tail: "Twin all-moving canted vertical stabilizers. 'Stinger' tail cone for countermeasures."
        },
        imageCredit: "Photo: Anna Zvereva / Flickr / CC BY-SA 2.0"
    },
    {
        id: 303,
        name: "Su-35",
        type: "Fighter Aircraft",
        origin: "Russia",
        coords: [55.7558, 37.6173],
        images: [
            "assets/SU35.jpg",
            "assets/SU35_Bravo.jpg"
        ],
        specs: { speed: "Mach 2.25", armament: "30mm GSh-30-1 cannon, 8,000 kg payload", operationalRange: "3,600 km" },
        inService: 2014,
        users: ["Russia", "China", "Iran"],
        status: "Active",
        fact: "The Su-35 (NATO reporting name 'Flanker-E') is an advanced 4.5-generation Russian multirole fighter. As a deep modernization of the Su-27, it features highly advanced avionics and potent thrust-vectoring engines for super-maneuverability.",
        recognitionFeatures: {
            wings: "Mid-mounted swept-back wings. Notably lacks the canards found on some other advanced Flanker variants like the Su-30SM/Su-33.",
            engine: "Twin Saturn AL-41F1S thrust-vectoring turbofans. The exhaust nozzles often droop at different angles when parked.",
            fuselage: "Long blended wing-body with a sleek downward slope nose. Completely lacks the prominent nose pitot tube found on almost all original Su-27 variants.",
            tail: "Twin outward-canted vertical stabilizers. Long, thick 'stinger' extension between the engine exhausts housing rear-facing radar/electronics for defense."
        },
        imageCredits: [
            "Photo: Aleksandr Markin / Wikimedia Commons / CC BY-SA 2.0",
            "Photo: Mike Freer - Touchdown-aviation / Wikimedia Commons / GFDL 1.2"
        ]
    },
    {
        id: 23,
        name: "IRIAF F-14 Tomcat",
        type: "Fighter Aircraft",
        origin: "United States",
        coords: [36.8206, -76.0333],
        image: "assets/IRIAF F_14.jpg",
        specs: { speed: "Mach 2.34", armament: "AIM-54 Phoenix", combatRadius: "2,960 km" },
        inService: 1976,
        users: ["Iran"],
        status: "Active",
        fact: "Iran is the only nation outside the United States to have operated the F-14 Tomcat. The Shah purchased 80 aircraft in 1974 for $2 billion - the largest single U.S. arms sale at the time. After the 1979 Islamic Revolution, despite decades of US embargoes, Iran has kept them flying through reverse-engineering and black-market parts, making their F-14s over 45 years old yet still operational.",
        recognitionFeatures: {
            wings: "Variable-sweep wings. High-mounted on the fuselage. Automatically sweep back in flight.",
            engine: "Twin engines in widely spaced nacelles. Rectangular air intakes with ramps.",
            fuselage: "Large, flat 'pancake' lifting body between engine nacelles. Tandem cockpit.",
            tail: "Twin outward-canted vertical stabilizers. All-moving horizontal stabilators."
        },
        imageCredit: "Photo: Mohammad Shaltouki / Nasim Online / CC BY 4.0"
    },
    {
        id: 24,
        name: "MiG-29 Fulcrum",
        type: "Fighter Aircraft",
        origin: "Russia",
        coords: [55.7558, 37.6173],
        image: "assets/MiG_29.jpg",
        specs: { speed: "Mach 2.25", armament: "R-73, R-27", combatRadius: "1,430 km" },
        inService: 1983,
        users: ["Russia", "India", "North Korea", "Iran", "Poland"],
        status: "Active",
        recognitionFeatures: {
            wings: "Mid-mounted swept wings with large leading-edge root extensions (LERX).",
            engine: "Two widely spaced turbofans fed by wedge-shaped air intakes under the fuselage.",
            fuselage: "Blended wing-body design. Distinctive high-mounted bubble cockpit.",
            tail: "Twin outward-canted vertical stabilizers. Deeply notched tailpipes."
        },
        imageCredit: "Photo: Julian Herzog / Wikimedia Commons / CC BY 4.0"
    },
    {
        id: 25,
        name: "Su-25 Frogfoot",
        type: "Attack Aircraft",
        origin: "Russia",
        coords: [44.6861, 37.6496],
        image: "assets/SU_25.jpg",
        specs: { speed: "975 km/h", armament: "30mm GSh-30-2, Rockets", combatRadius: "750 km" },
        inService: 1981,
        users: ["Russia", "Ukraine", "North Korea", "Iraq", "Bulgaria"],
        status: "Active",
        fact: "The Su-25 'Frogfoot' is a heavily armored ground-attack aircraft, often compared to the US A-10 Thunderbolt II for its durability and role.",
        recognitionFeatures: {
            wings: "High-mounted, back-tapered with straight trailing edges and square tips. Pods often mounted at wingtips.",
            engine: "Two turbojets mounted in long nacelles alongside the lower fuselage. Semicircular air intakes.",
            fuselage: "Long, slender body with a rounded nose and stepped canopy. Tapers to the rear.",
            tail: "Swept-back fin with a square tip. Mid-mounted horizontal stabilizers with unequal taper."
        },
        imageCredit: "Photo: Fedor Leukhin / Wikimedia Commons / CC BY-SA 2.0"
    },
    {
        id: 26,
        name: "J-20 Mighty Dragon",
        type: "Fighter Aircraft",
        origin: "China",
        coords: [30.5728, 104.0668],
        image: "assets/J_20_Mighty_Dragon.jpg",
        specs: { speed: "Mach 2.0", armament: "PL-15, PL-21", combatRadius: "5,500 km" },
        inService: 2017,
        users: ["China"],
        status: "Active",
        imageCredit: "Photo: N509FZ / Wikimedia Commons / CC BY-SA 4.0",
        recognitionFeatures: {
            wings: "High-mounted delta wings. Large all-moving canards forward of the main wings.",
            engine: "Twin engines side-by-side. Serrated nozzles for stealth (operational variants).",
            fuselage: "Long, blended fuselage with chined nose. DSI (Bump) air intakes on sides.",
            tail: "Twin outward-canted all-moving vertical stabilizers. Ventral fins under engines."
        }
    },
    {
        id: 150,
        name: "JF-17 Thunder",
        type: "Fighter Aircraft",
        origin: "China / Pakistan",
        coords: [33.6844, 73.0479],
        images: [
            "assets/JF17.jpg",
            "assets/JF17_Bravo.jpg"
        ],
        specs: { speed: "Mach 1.6", armament: "PL-15, SD-10, C-802AK", combatRadius: "1,350 km" },
        inService: 2007,
        users: ["Pakistan", "Myanmar", "Nigeria", "Azerbaijan"],
        status: "Active",
        fact: "The JF-17 Thunder (or FC-1 Xiaolong) is a lightweight multi-role combat aircraft developed jointly by Pakistan and China. Designed as a cost-effective replacement for aging fleets, it features modern avionics, a glass cockpit, and the ability to deploy long-range air-to-air missiles like the PL-15.",
        recognitionFeatures: {
            wings: "Mid-mounted cropped delta wings with Leading Edge Root Extensions (LERX).",
            engine: "Single turbofan engine. Distinctive bifurcated DSI (diverterless supersonic inlet) 'hump' intakes on fuselage sides.",
            fuselage: "Slender fuselage with a pointed radome. Bubble canopy.",
            tail: "Large single vertical stabilizer with a dorsal spine extending to the mid-fuselage."
        },
        imageCredits: [
            "Photo: Shimin Gu / Wikimedia Commons / GFDL 1.2 — image modified (flag removed)",
            "Photo: Ibex73 / Wikimedia Commons / CC BY-SA 4.0"
        ]
    },
    {
        id: 27,
        name: "Rafale",
        type: "Fighter Aircraft",
        origin: "France",
        coords: [48.8566, 2.3522],
        image: "assets/Rafale.jpg",
        specs: { speed: "Mach 1.8", armament: "MICA, Meteor, SCALP", combatRadius: "3,700 km" },
        inService: 2001,
        users: ["France", "Egypt", "Qatar", "India", "Greece"],
        status: "Active",
        recognitionFeatures: {
            wings: "Delta wing design with close-coupled canards. Large degree of wing-body blending.",
            engine: "Two engines with semicircular intakes positioned low on the fuselage side, beneath the wings.",
            fuselage: "Pointed nose with a refueling probe (prominent on many variants). Blended body design.",
            tail: "Single large vertical stabilizer. No horizontal tail surfaces (delta configuration)."
        },
        imageCredit: "Photo: Tim Felce (Airwolfhound) / Wikimedia Commons / CC BY-SA 2.0"
    },
    {
        id: 28,
        name: "Eurofighter Typhoon",
        type: "Fighter Aircraft",
        origin: "Germany / United Kingdom / Italy / Spain",
        coords: [52.5200, 13.4050],
        images: [
            "assets/Eurofighter_Typhoon.jpg",
            "assets/Eurofighter_Typhoon_Bravo.jpg"
        ],
        imageCredits: [
            "Photo: Markus Zinner (Bundesheer) / Wikimedia Commons / CC BY-SA 3.0",
            "Photo: Chris Lofting / Wikimedia Commons / GFDL 1.2"
        ],
        specs: { speed: "Mach 2.0", armament: "AMRAAM, ASRAAM, Meteor", combatRadius: "3,790 km" },
        inService: 2003,
        users: ["Germany", "United Kingdom", "Italy", "Spain", "Saudi Arabia", "Kuwait", "Qatar", "Oman", "Austria"],
        status: "Active",
        fact: "The Eurofighter Typhoon is a highly agile aircraft, designed to be effectively unstable in flight to maximize maneuverability. It is flown by computers that make thousands of adjustments per second to keep it stable.",
        recognitionFeatures: {
            wings: "Delta wing configuration with no tailplanes. Canards mounted below cockpit.",
            engine: "Twin Eurojet EJ200 turbofans mounted side-by-side. Rectangular intakes under fuselage.",
            fuselage: "Single vertical stabilizer. Cockpit placed well forward. Canards on nose.",
            tail: "Large single vertical fin. No horizontal tail surfaces (delta wing design)."
        }
    },
    {
        id: 143,
        name: "F/A-18 Hornet",
        type: "Fighter Aircraft",
        origin: "United States",
        coords: [38.2527, -85.7585],
        images: [
            "assets/FA18.jpg",
            "assets/FA18_Bravo.jpg"
        ],
        imageCredits: [
            "Photo: LCPL John Mcgarity / U.S. Marine Corps / Public Domain",
            "Photo: Photographer's Mate 3rd Class Jonathan Chandler / U.S. Navy / Public Domain — image modified (symbol removed)"
        ],
        specs: { speed: "Mach 1.8", armament: "AIM-9, AIM-120, AGM-84", combatRadius: "740 km" },
        inService: 1983,
        users: ["United States", "Australia", "Canada", "Finland", "Kuwait", "Malaysia", "Spain", "Switzerland"],
        status: "Active",
        fact: "The F/A-18 Hornet's 'F/A' designation stands for Fighter/Attack, making it one of the first true multi-role combat aircraft. Its digital fly-by-wire system is so advanced that the aircraft can automatically prevent pilots from exceeding structural limits, and its twin engines provide such reliability that it became the first fighter trusted for single-engine-out carrier landings.",
        recognitionFeatures: {
            wings: "Mid-mounted swept wings with prominent LERX (Leading Edge Root Extensions). Folding wingtips for carrier storage. Square wingtips with missile rails.",
            engine: "Twin F404 turbofans with oval-shaped air intakes under the wings. Exhausts extend past the tail.",
            fuselage: "Barrel-shaped with solid pointed nose. Bubble canopy. Widest at air intakes, tapering rearward.",
            tail: "Twin outward-canted vertical stabilizers (distinctive). Swept horizontal stabilators mounted at fuselage end."
        }
    },

    {
        id: 30,
        name: "B-2 Spirit",
        type: "Strategic Bomber",
        origin: "United States",
        coords: [38.3090, -93.7144],
        images: [
            "assets/B_2_Spirit.jpg",
            "assets/B2_Bravo.jpg"
        ],
        imageCredits: [
            "Photo: U.S. Air Force photo by Master Sgt. Roy Santana / Public Domain",
            "Photo: Royal Air Force / Wikimedia Commons / OGL v1.0"
        ],
        specs: { speed: "Mach 0.95", armament: "Nuclear/Conventional", combatRadius: "11,100 km" },
        inService: 1997,
        users: ["United States"],
        status: "Active",
        fact: "The B-2 Spirit is the only acknowledged aircraft that can carry large air-to-surface standoff weapons in a stealth configuration.",
        recognitionFeatures: {
            wings: "Flying wing design. Swept leading edge (33°). Distinctive W-shaped 'saw-tooth' trailing edge.",
            engine: "Four turbofans buried deep within the wing structure. S-duct air intakes on upper surface.",
            fuselage: "Blended wing-body with no distinct fuselage. Cockpit creates a small hump in the center.",
            tail: "No vertical stabilizers (Tailless). Yaw control provided by drag rudders on wingtips."
        }
    },
    {
        id: 31,
        name: "B-52 Stratofortress",
        type: "Strategic Bomber",
        origin: "United States",
        coords: [46.9102, -98.6832],
        images: [
            "assets/B_52.jpg",
            "assets/B52_Bravo.jpg"
        ],
        imageCredits: [
            "Photo: U.S. Air Force photo/Senior Airman Carlin Leslie / Public Domain",
            "Photo: Pseudopanax at English Wikipedia / Public Domain"
        ],
        specs: { speed: "Mach 0.86", armament: "70,000 lbs ordnance", combatRadius: "14,200 km" },
        inService: 1955,
        users: ["United States"],
        status: "Active",
        fact: "An interesting fact about the B-52 Stratofortress is that it was designed for a nuclear war that never happened, yet it has served in more conflicts than any other US bomber.",
        recognitionFeatures: {
            wings: "High-mounted, swept wings with significant droop when on the ground. Wingtip landing gear.",
            engine: "Eight turbofan engines mounted in pairs on four underwing pylons.",
            fuselage: "Long, slab-sided fuselage. Cockpit windows wrap around the nose.",
            tail: "Large single vertical stabilizer. Horizontal stabilizers mounted low on the fuselage."
        },
        imageCredit: "Photo: U.S. Air Force photo/Senior Airman Carlin Leslie / Public Domain"
    },
    {
        id: 31.5,
        name: "B-1 Lancer",
        type: "Strategic Bomber",
        origin: "United States",
        coords: [32.8998, -97.4415],
        images: [
            "assets/B1_Lancer.jpg",
            "assets/B1_Lancer_Bravo.jpg"
        ],
        imageCredits: [
            "Photo: Balon Greyjoy / Wikimedia Commons / CC0 1.0",
            "Photo: Balon Greyjoy / Wikimedia Commons / CC0 1.0"
        ],
        specs: { speed: "Mach 1.25", armament: "75,000 lbs ordnance", combatRadius: "11,998 km" },
        inService: 1986,
        users: ["United States"],
        status: "Active",
        fact: "The B-1 Lancer, nicknamed the 'Bone' (from 'B-One'), carries the largest conventional payload of any U. S. Air Force bomber at 75,000 pounds and holds nearly 50 world records for speed, payload, range, and time of climb in its class. Its variable-sweep wing design allows it to adjust wing configuration for both high-speed penetration and efficient cruising.",
        recognitionFeatures: {
            wings: "Variable-sweep 'swing-wings'. Triangular gloves blend wings into fuselage.",
            engine: "Four turbofans mounted in pairs under the fixed wing root gloves.",
            fuselage: "Long, blended wing-body design with a pointed nose and slender profile.",
            tail: "Large swept vertical stabilizer with cruciform horizontal stabilizer mounted mid-way."
        }
    },
    {
        id: 121,
        name: "B-21 Raider",
        type: "Strategic Bomber",
        origin: "United States",
        coords: [34.6037, -118.0848],
        images: [
            "assets/B21.jpg",
            "assets/B21_Bravo.jpg"
        ],
        imageCredits: [
            "Photo: U.S. Air Force / Public Domain",
            "Photo: U.S. Air Force / Public Domain"
        ],
        specs: { speed: "Mach 0.95", armament: "Nuclear/Conventional", combatRadius: "12,000 km" },
        inService: 2027,
        users: ["United States"],
        status: "In Development",
        fact: "The B-21 Raider is America's sixth-generation stealth bomber, first flown in November 2023 and expected to enter service in 2027. Named after the Doolittle Raiders of WWII, it features next-generation stealth technology, AI-capable autonomous flight, and an open systems architecture for easy upgrades. With an estimated 100 aircraft planned, it will eventually replace both the B-1 Lancer and B-2 Spirit, forming the backbone of America's strategic bomber force.",
        recognitionFeatures: {
            wings: "Flying wing design. Swept leading edge. Simpler V-shaped trailing edge (no saw-tooth).",
            engine: "Buried engines with flush, scalloped inlets that sit lower than on the B-2.",
            fuselage: "Seamless blended wing-body. Lighter gray coating ('white bat') compared to B-2's gunmetal.",
            tail: "No vertical stabilizers (Tailless). Advanced stealth shaping eliminates need for traditional tail surfaces."
        }
    },
    {
        id: 32,
        name: "AH-64 Apache",
        type: "Attack Helicopter",
        origin: "United States",
        coords: [33.3484, -111.7892],
        images: [
            "assets/Apache.jpg",
            "assets/AH64 Apache_Bravo.jpg"
        ],
        imageCredits: [
            "Photo: PigiusMax / Wikimedia Commons / CC BY-SA 4.0",
            "Photo: Tech. Sgt. Andy Dunaway / U.S. Army / Public Domain"
        ],
        specs: { speed: "300 km/h", armament: "30mm M230, Hellfire", combatRadius: "500 km" },
        inService: 1984,
        users: ["United States", "Egypt", "Greece", "India", "Indonesia", "Israel", "Japan", "Kuwait", "Netherlands", "Qatar", "Saudi Arabia", "Singapore", "South Korea", "UAE", "United Kingdom"],
        status: "Active",
        fact: "The AH-64 Apache's 30mm M230 chain gun is linked to the crew member's helmet, meaning the gun aims wherever the operator looks.",
        recognitionFeatures: {
            rotors: "4-blade main rotor. 4-blade 'scissor' tail rotor.",
            engine: "Twin turboshafts mounted high on either side of the rotor shaft.",
            fuselage: "Narrow, tandem cockpit. Cheek fairings for avionics/ammo.",
            tail: "Vertical stabilizer with tail rotor. Horizontal stabilator at base."
        },
        imageCredit: "Photo: PigiusMax / Wikimedia Commons / CC BY-SA 4.0"
    },
    {
        id: 33,
        name: "Mi-24 Hind",
        type: "Attack Helicopter",
        origin: "Russia",
        coords: [55.7558, 37.6173],
        image: "assets/MI_24.jpg",
        specs: { speed: "350 km/h", armament: "12.7mm Gatling, ATGMs", combatRadius: "480 km" },
        inService: 1972,
        users: ["Russia", "Algeria", "Angola", "Armenia", "Azerbaijan", "Belarus", "Bulgaria", "Chad", "Cuba", "Czech Republic", "DR Congo", "Eritrea", "Ethiopia", "Hungary", "India", "Iraq", "Kazakhstan", "Kyrgyzstan", "Libya", "Mali", "Mozambique", "Nicaragua", "Nigeria", "Peru", "Poland", "Slovakia", "South Sudan", "Sudan", "Syria", "Turkmenistan", "Uganda", "Ukraine", "Venezuela", "Vietnam", "Yemen", "Zambia"],
        status: "Active",
        fact: "The Mi-24 'Hind' is a unique hybrid gunship that combines attack helicopter firepower with troop transport capability. Over 3,500 have been produced and it's used by 52+ countries, making it one of the most widely used attack helicopters in history.",
        recognitionFeatures: {
            rotors: "5-blade main rotor. 3-blade tail rotor.",
            engine: "Two turboshaft engines mounted high above the fuselage. Two large round intakes.",
            fuselage: "Tandem 'double bubble' cockpit. Troop compartment behind cockpit.",
            tail: "Large vertical fin. Three-bladed tail rotor (usually on left)."
        },
        imageCredit: "Photo: Åukasz Golowanow & Maciek HypÅ¡ / Konflikty.pl"
    },
    {
        id: 34,
        name: "MiG-31 Foxhound",
        type: "Fighter Aircraft",
        origin: "Russia",
        coords: [55.7558, 37.6173],
        image: "assets/MiG_31.jpg",
        specs: { speed: "Mach 2.8", armament: "R-33/R-37M AAMs", combatRadius: "3000 km" },
        inService: 1981,
        users: ["Russia", "Kazakhstan"],
        status: "Active",
        fact: "The MiG-31 Foxhound is a supersonic interceptor designed to defend Russia's vast airspace. Capable of Mach 2.8 at altitude and equipped with the powerful Zaslon radar, four MiG-31s can patrol an 800x900 km area using datalink coordination. It now launches the Kinzhal hypersonic missile.",
        recognitionFeatures: {
            wings: "High-mounted swept wings with small wing fences.",
            engine: "Two massive Soloviev D-30F6 turbofans. Large rectangular side intakes.",
            fuselage: "Box-like, rectangular fuselage layout tailored for high-speed interception.",
            tail: "Twin vertical fins with slight outward cant. Two ventral fins under the tail."
        },
        imageCredit: "Photo: Dmitriy Pichugin / Wikimedia Commons / GNU FDL"
    },
    {
        id: 35,
        name: "Su-30MKI",
        type: "Fighter Aircraft",
        origin: "Russia",
        coords: [55.7558, 37.6173],
        image: "assets/Sukhoi_Su_30.jpg",
        specs: { speed: "Mach 2.0", armament: "R-77/R-27/Brahmos", combatRadius: "3000 km" },
        inService: 2002,
        users: ["India"],
        status: "Active",
        fact: "The Su-30MKI is India's premier air superiority fighter, featuring thrust-vectoring engines and canards for exceptional maneuverability. It can carry the BrahMos supersonic cruise missile and serves as the backbone of the Indian Air Force with over 260 aircraft in service.",
        recognitionFeatures: {
            wings: "Swept wings with large LERX. Distinctive canards forward of the main wings.",
            engine: "Two widely spaced engines with thrust-vectoring nozzles. 'Stinger' between engines.",
            fuselage: "High, blended wing-body design. Retractable refueling probe near cockpit.",
            tail: "Twin vertical stabilizers. Horizontal stabilators attached to tail booms."
        },
        imageCredit: "Photo: Chris Lofting / Wikimedia Commons / GNU FDL"
    },
    {
        id: 36,
        name: "UH-60 Black Hawk",
        type: "Transport Helicopter",
        origin: "United States",
        coords: [41.2524, -73.1184],
        image: "assets/Black_Hawk.jpg",
        specs: { speed: "294 km/h", armament: "M240/M134 MGs", ferryRange: "590 km" },
        inService: 1979,
        users: ["United States", "South Korea", "Colombia", "Turkey"],
        status: "Active",
        fact: "The UH-60 Black Hawk gained fame from the movie 'Black Hawk Down', but it gives its name to the Black Hawk War of 1832, not the other way around.",
        recognitionFeatures: {
            rotors: "4-blade main rotor. 4-blade tail rotor (canted).",
            engine: "Twin turboshafts. Exhausts typically angled upwards/outwards.",
            fuselage: "Low profile, troop transport cabin. Sliding side doors.",
            tail: "Horizontal stabilizer on tail boom. Tail rotor on vertical fin."
        },
        imageCredit: "Photo: Jakub HaÅ‚un / Wikimedia Commons / CC BY-SA 4.0"
    },
    {
        id: 37,
        name: "CH-47 Chinook",
        type: "Transport Helicopter",
        origin: "United States",
        coords: [39.8653, -75.2936],
        image: "assets/Chinook.jpg",
        specs: { speed: "315 km/h", armament: "7.62mm MGs", ferryRange: "741 km" },
        inService: 1962,
        users: ["United States", "United Kingdom", "Japan", "India"],
        status: "Active",
        fact: "The Chinook is capable of floating on water for short periods and can even perform water landings to deploy special forces boats.",
        recognitionFeatures: {
            rotors: "Twin tandem 3-blade main rotors. No tail rotor.",
            engine: "Twin turboshafts mounted in pods on the rear fuselage.",
            fuselage: "Box-like transport body. Sponsons along the sides.",
            tail: "Large rear pylon supporting the aft rotor. Loading ramp."
        },
        imageCredit: "Photo: Cpl Lee Goddard RAF/MOD / OGL v1.0"
    },
    {
        id: 151,
        name: "V-22 Osprey",
        type: "Transport Tiltrotor",
        origin: "United States",
        coords: [33.9425, -118.4081],
        images: [
            "assets/V22_Osprey.jpg",
            "assets/V22_Osprey_Bravo.jpg"
        ],
        specs: { speed: "509 km/h", armament: "7.62mm/12.7mm MGs", combatRadius: "722 km" },
        inService: 2007,
        users: ["United States", "Japan"],
        status: "Active",
        fact: "The V-22 Osprey is the world's first production tiltrotor aircraft, combining the vertical takeoff and landing (VTOL) capabilities of a helicopter with the speed and range of a turboprop airplane. Its nacelles rotate 90 degrees to transition between helicopter and airplane modes.",
        recognitionFeatures: {
            rotors: "Two large 3-bladed proprotors on titling nacelles at wingtips.",
            engine: "Rolls-Royce T406 turboshafts housed in tilting nacelles.",
            fuselage: "Box-like transport fuselage with a rear loading ramp. Sponsons on lower sides.",
            tail: "Short horizontal stabilizer with twin vertical fins (H-tail configuration)."
        },
        imageCredits: [
            "Photo: Julian Herzog / Wikimedia Commons / CC BY 4.0",
            "Photo: Julian Herzog / Wikimedia Commons / CC BY 4.0"
        ]
    },
    {
        id: 144,
        name: "SA 330 Puma",
        type: "Transport Helicopter",
        origin: "United Kingdom / France",
        coords: [48.8566, 2.3522],
        images: [
            "assets/Puma_Heli.jpg",
            "assets/Puma_Heli_Bravo.jpg"
        ],
        imageCredits: [
            "Photo: Sgt Jack Pritchard / Royal Air Force / OGL v1.0",
            "Photo: Aldo Bidini / Wikimedia Commons / GFDL 1.2"
        ],
        specs: { speed: "257 km/h", armament: "7.62mm MGs (optional)", ferryRange: "580 km" },
        inService: 1969,
        users: ["France", "United Kingdom", "Romania", "South Africa", "Portugal", "Algeria", "Chile", "Indonesia", "Morocco", "Pakistan", "40+ countries"],
        status: "Active",
        fact: "The SA 330 Puma was jointly developed by France and the UK, becoming one of the first major European helicopter collaborations. It has been operated by over 40 air forces worldwide and spawned numerous variants including the Romanian IAR 330 and South Africa's Atlas Oryx. The RAF's upgraded Puma HC Mk 2 features glass cockpit displays and can operate in temperatures from -40°C to +50°C.",
        recognitionFeatures: {
            rotors: "4-blade main rotor with distinctive square-tipped blades. 5-blade tail rotor.",
            engine: "Twin Turbomeca Turmo turboshafts mounted above cabin. Large air intakes on either side.",
            fuselage: "Boat-shaped hull with rounded nose. Large sliding cabin doors. Sponsons for fuel/gear.",
            tail: "Swept-back tail boom ending in large vertical fin. Horizontal stabilizer mounted low."
        }
    },
    {
        id: 302,
        name: "Mi-17",
        type: "Transport Helicopter",
        origin: "Russia",
        coords: [55.7558, 37.6173],
        images: [
            "assets/Mi_17.jpg",
            "assets/Mi_17_Bravo.jpg"
        ],
        specs: { speed: "250 km/h", armament: "S-8 Rockets, PKT MGs", ferryRange: "580 km" },
        inService: 1981,
        users: ["Russia", "India", "China", "Iran", "Over 80 countries"],
        status: "Active",
        fact: "The Mi-17 (NATO reporting name 'Hip') is one of the most prolific helicopters in the world, serving in over 80 countries. It is an improved derivative of the ubiquitous Mi-8, featuring more powerful engines designed to ensure performance at high altitudes and in hot weather.",
        recognitionFeatures: {
            rotors: "Five-bladed main rotor. Three-bladed tail rotor mounted on the LEFT side of the tail boom (unlike the Mi-8 where it is on the right).",
            engine: "Twin turboshafts mounted on top of the cabin. Often features distinctive mushroom-shaped dust deflectors on air intakes.",
            fuselage: "Bulky, rounded transport fuselage with large clamshell rear doors. External fuel tanks mounted on lower sides.",
            tail: "Long straight tail boom ending in a swept-back vertical stabilizer. Most notably, the tail rotor is on the left side."
        },
        imageCredits: [
            "Photo: Provided by User / Wikimedia Commons",
            "Photo: Vitaly V. Kuzmin / Wikimedia Commons / CC BY-SA 4.0"
        ]
    },
    {
        id: 116,
        name: "C-130 Hercules",
        type: "Transport Aircraft",
        origin: "United States",
        coords: [33.9425, -118.4081],
        images: [
            "assets/C130.jpg",
            "assets/C130_Bravo.jpg"
        ],
        imageCredits: [
            "Photo: Tech. Sgt. Howard Blair / U.S. Air Force / Public Domain — image modified (symbols removed)",
            "Photo: MarcelX42 / Wikimedia Commons / CC BY-SA 4.0"
        ],
        specs: { speed: "592 km/h", armament: "Cargo/Troops", ferryRange: "3,800 km" },
        inService: 1956,
        users: ["United States", "Australia", "Canada", "60+ nations"],
        status: "Active",
        fact: "The C-130 Hercules is one of the longest continuously produced military aircraft in history, serving since 1956. Designed for tactical airlift operations, it can operate from unprepared runways and is used by over 60 nations worldwide. The versatile airframe has spawned more than 40 variants, including gunships (AC-130), aerial refuelers (KC-130), and search and rescue configurations.",
        recognitionFeatures: {
            wings: "High-mounted, straight wings with blunt tips. Four turboprops.",
            engine: "Four turboprops mounted under the wings. Distinctive external fuel tanks (often) between engines.",
            fuselage: "Wide, cylindrical fuselage with a distinct 'snout' nose (weather radar). Ramp at rear.",
            tail: "Conventional tail with a very tall, distinctively shaped vertical stabilizer."
        }
    },
    {
        id: 129,
        name: "C-17 Globemaster III",
        type: "Transport Aircraft",
        origin: "United States",
        coords: [32.8986, -80.0405],
        images: [
            "assets/C17.jpg",
            "assets/C17_Bravo.jpg"
        ],
        specs: { speed: "830 km/h", armament: "Cargo/Troops", ferryRange: "4,480 km" },
        inService: 1995,
        users: ["United States", "UK", "Australia", "Canada", "India", "Qatar", "UAE", "NATO"],
        status: "Active",
        fact: "The C-17 Globemaster III is capable of rapid strategic delivery of troops and all types of cargo to main operating bases or directly to forward bases in the deployment area. It can perform tactical airlift and airdrop missions and can transport litters and ambulatory patients during aeromedical evacuations.",
        recognitionFeatures: {
            wings: "High-mounted, swept wings with distinctive winglets at the tips.",
            engine: "Four turbofans mounted on pylons under the wings.",
            fuselage: "Large, wide fuselage with a high-mounted cockpit and rear loading ramp.",
            tail: "T-tail configuration with swept vertical and horizontal stabilizers."
        },
        imageCredits: [
            "Photo: Airman 1st Class Christian Silvera / U.S. Air Force / Public Domain",
            "Photo: MarcelX42 / Wikimedia Commons / CC BY-SA 4.0"
        ]
    },

    // === NAVAL VESSELS ===
    {
        id: 38,
        name: "USS Gerald R. Ford",
        type: "Naval Vessel",
        origin: "United States",
        coords: [36.9466, -76.3130],
        image: "assets/uss_ford_carrier.jpg",
        specs: { speed: "30+ knots", armament: "75+ Aircraft", endurance: "Unlimited (Nuclear)" },
        inService: 2017,
        users: ["United States Navy"],
        status: "Active",
        imageCredit: "Photo: Mass Communication Specialist 2nd Class Ridge Leoni / U.S. Navy / Public Domain"
    },
    {
        id: 39,
        name: "Type 055 Destroyer",
        type: "Naval Vessel",
        origin: "China",
        coords: [31.2304, 121.4737],
        image: "assets/Type_055_Destroyer.jpg",
        specs: { speed: "30+ knots", armament: "112 VLS cells", endurance: "9,300 km" },
        inService: 2020,
        users: ["China"],
        status: "Active",
        imageCredit: "Photo: Japan Ministry of Defense / Wikimedia Commons / CC BY 4.0"
    },
    {
        id: 40,
        name: "Kirov-class Battlecruiser",
        type: "Naval Vessel",
        origin: "Russia",
        coords: [69.0833, 33.4167],
        image: "assets/Kirov_Class_Battlecruiser.jpg",
        specs: { speed: "32 knots", armament: "P-700 Granit missiles", endurance: "Unlimited (Nuclear)" },
        inService: 1980,
        users: ["Russia"],
        status: "Active",
        imageCredit: "Photo: PHC (NAC) John Kristoffersen / U.S. Navy / Public Domain"
    },
    {
        id: 41,
        name: "Queen Elizabeth-class Carrier",
        type: "Naval Vessel",
        origin: "United Kingdom",
        coords: [50.8036, -1.0644],
        image: "assets/QE.jpg",
        specs: { speed: "25 knots", armament: "40+ F-35B Aircraft", endurance: "18,500 km" },
        inService: 2017,
        users: ["United Kingdom"],
        status: "Active",
        imageCredit: "Photo: Aircrew/MOD / Wikimedia Commons / OGL v1.0"
    },
    {
        id: 304,
        name: "Nimitz-class Aircraft Carrier",
        type: "Naval Vessel",
        origin: "United States",
        coords: [36.9458, -76.3264],
        images: [
            "assets/Nimitz.jpg",
            "assets/Nimitz_Bravo.jpg"
        ],
        specs: { speed: "30+ knots", armament: "Sea Sparrow, RAM, CIWS", endurance: "Unlimited (nuclear powered)" },
        inService: 1975,
        users: ["United States"],
        status: "Active",
        fact: "The Nimitz-class comprises 10 massive nuclear-powered aircraft carriers. Acting as sovereign, floating air bases, they can each embark around 90 fixed-wing planes and helicopters. Powered by two nuclear reactors, a Nimitz-class carrier can theoretically steam for over 20 years without needing to refuel.",
        recognitionFeatures: {
            size: "Massive, flat continuous flight deck angled off-axis. Approx 332 meters (1,092 ft) long.",
            masts: "Large, tall communications and sensor mast rising prominently above the island superstructure.",
            armament: "Defensive systems (like CIWS and missile launchers) are mounted on sponsons extending sideways just below the flight deck level.",
            superstructure: "Relatively compact single 'island' structure situated far to the starboard (right) side of the deck.",
            hull: "Deep draft with a bulbous bow. The hull aggressively flares outwards to support the enormous flight deck above."
        },
        imageCredits: [
            "Photo: U.S. Navy / Mass Communication Specialist 2nd Class Angel Contreras / Public Domain",
            "Photo: U.S. Navy / Public Domain"
        ]
    },
    {
        id: 305,
        name: "Type 212 Submarine",
        type: "Naval Vessel",
        origin: "Germany/Italy",
        coords: [54.3233, 10.1228],
        image: "assets/Type_212.jpg",
        specs: { speed: "20 knots (submerged)", armament: "6x 533mm torpedo tubes", endurance: "Up to 3 weeks submerged" },
        inService: 2005,
        users: ["Germany", "Italy"],
        status: "Active",
        fact: "The Type 212 is a highly advanced non-nuclear submarine utilizing an air-independent propulsion (AIP) system powered by hydrogen fuel cells. This allows it to stay submerged for up to three weeks with almost zero acoustic or thermal signature.",
        recognitionFeatures: {
            size: "Relatively compact diesel-electric attack submarine. Roughly 56 meters (184 ft) in length.",
            masts: "Retractable telescopic masts housing periscopes, radar, and communications equipment inside the sail.",
            armament: "Six forward-facing 533mm torpedo tubes internally housed. No visible external deck guns or missile silos.",
            superstructure: "Streamlined, gently swept sail (conning tower) located forward of midships, with diving planes mounted directly on the sail.",
            hull: "Smooth teardrop-shaped hull made of non-magnetic steel. Distinctive X-shaped tail planes for high maneuverability."
        },
        imageCredit: "Photo: Stahlkocher / Wikimedia Commons / CC BY-SA 3.0"
    },
    {
        id: 42,
        name: "Delta IV SSBN",
        type: "Naval Vessel",
        origin: "Russia",
        coords: [69.0833, 33.4167],
        image: "assets/Delta_IV.jpg",
        specs: { speed: "24 knots", armament: "16 R-29RMU Sineva SLBMs", endurance: "Unlimited (Nuclear)" },
        inService: 1985,
        users: ["Russia"],
        status: "Active",
        fact: "The Delta IV (Project 667BDRM Delfin) is a strategic nuclear deterrent submarine built between 1981-1992, featuring a double-hulled design and capable of ice-breaking operations.",
        imageCredit: "Photo: Tyson Bumgarner / Director of National Intelligence / Public Domain"
    },
    {
        id: 43,
        name: "QBZ-95",
        type: "Assault Rifle",
        origin: "China",
        coords: [39.9042, 116.4074],
        images: [
            "assets/QBZ_95.jpg",
            "assets/QBZ95_Bravo.jpg"
        ],
        imageCredits: [
            "Photo: Wikimedia Commons / CC BY-SA 3.0",
            "Photo: Tyg728 / Wikimedia Commons / CC BY-SA 4.0"
        ],
        specs: { speed: "N/A", armament: "5.8x42mm", effectiveRange: "400 m" },
        inService: 1997,
        users: ["China"],
        status: "Active",
        fact: "The QBZ-95 is a bullpup assault rifle that entered service with China's armed forces in 1997, chambered in the unique 5.8x42mm cartridge."
    },
    {
        id: 114,
        name: "QBZ-191",
        type: "Assault Rifle",
        origin: "China",
        coords: [29.4316, 106.9123],
        image: "assets/QBZ191.jpg",
        specs: { speed: "N/A", armament: "5.8x42mm DBP191", effectiveRange: "400 m" },
        inService: 2019,
        users: ["China"],
        status: "Active",
        fact: "The QBZ-191 is China's newest service rifle, formally unveiled at the 70th Anniversary National Day parade in 2019. It features a gas-operated short-stroke piston system, full-length Picatinny rail, and aluminum alloy receivers. With a rate of fire of 750 rounds per minute, it's intended to replace the QBZ-95 in the People's Liberation Army.",
        imageCredit: "Photo: Dan3031949 / Wikimedia Commons / CC BY-SA 4.0"
    },
    {
        id: 120,
        name: "ASMI",
        type: "Submachine Gun",
        origin: "India",
        coords: [28.6139, 77.2090],
        image: "assets/ASMI.jpg",
        specs: { speed: "N/A", armament: "9x19mm", effectiveRange: "100 m" },
        inService: 2024,
        users: ["India"],
        status: "Active",
        fact: "The ASMI is India's first domestically designed modern submachine gun, developed by DRDO and Lt. Colonel Prasad Bansod in 2020 and inducted into the Indian Army in October 2024. Weighing under 2 kg with aircraft-grade aluminum and carbon fiber construction, it features a 33-round Glock magazine, 600 rpm rate of fire, and a side-folding stock. At approximately $600 per unit, it offers an affordable alternative to imported weapons like the MP5.",
        imageCredit: "Photo: DRDO / Government of India / GODL-India"
    },
    {
        id: 139,
        name: "L7A2 GPMG",
        type: "Small Arms",
        origin: "United Kingdom",
        coords: [51.5074, -0.1278],
        images: [
            "assets/GPMG.jpg",
            "assets/GPMG_Bravo.jpg"
        ],
        imageCredits: [
            "Photo: Graeme Main/UK Ministry of Defence / OGL v3.0",
            "Photo: Cpl Si Longworth RLC (Phot)/MOD / OGL v2.0"
        ],
        specs: { speed: "N/A", armament: "7.62x51mm NATO", effectiveRange: "1,800 m" },
        inService: 1963,
        users: ["United Kingdom", "Australia", "Canada", "New Zealand", "80+ countries (FN MAG variant)"],
        status: "Active",
        fact: "The L7A2 GPMG is the British designation for the Belgian FN MAG (Mitrailleuse d'Appui Général). Serving with the British Armed Forces since the 1960s, it can fire 750 rounds per minute and has an effective range of 800m in light role or 1,800m in sustained fire role when mounted on a tripod. The FN MAG family is used by over 80 countries worldwide, making it one of the most widely used machine guns in the world."
    },
    {
        id: 141,
        name: "M240",
        type: "Small Arms",
        origin: "United States",
        coords: [39.8283, -98.5795],
        image: "assets/M240.jpg",
        specs: { speed: "N/A", armament: "7.62x51mm NATO", effectiveRange: "1,800 m" },
        inService: 1977,
        users: ["United States", "Indonesia", "Poland", "Spain", "Georgia", "Philippines", "Ukraine", "Iraq", "Syria", "30+ countries"],
        status: "Active",
        fact: "The M240 is the U.S. military designation for the FN MAG (the same platform as the British L7A2 GPMG). Adopted by the U.S. Army in 1977, it fires 650-950 rounds per minute depending on gas regulator setting. All U.S. military branches use variants of the M240, mounted on vehicles, aircraft, and used by infantry. Its effective range is 800m with a bipod or 1,800m when tripod-mounted.",
        imageCredit: "Photo: PEO Soldier / U.S. Army / Public Domain"
    },
    {
        id: 145,
        name: "PKM",
        type: "Small Arms",
        origin: "Russia",
        coords: [55.7558, 37.6173],
        images: [
            "assets/PKM.jpg",
            "assets/PKM_Bravo.jpg"
        ],
        imageCredits: [
            "Photo: MoserB / Wikimedia Commons / Public Domain",
            "Photo: U.S. Air Force photo by Staff Sgt. Vanessa Valentine / Public Domain"
        ],
        specs: { speed: "N/A", armament: "7.62x54mmR", effectiveRange: "1,000 m" },
        inService: 1969,
        users: ["Russia", "Ukraine", "Poland", "Hungary", "Vietnam", "Afghanistan", "Iraq", "Syria", "80+ countries"],
        status: "Active",
        fact: "The PKM is widely considered one of the best general-purpose machine guns ever made due to its extreme reliability, light weight (7.5kg vs M240's 12.5kg), and powerful rimmed cartridge. Designed by Mikhail Kalashnikov, it uses a non-disintegrating belt and ejects cases to the left."
    },
    {
        id: 146,
        name: "Uzi",
        type: "Submachine Gun",
        origin: "Israel",
        coords: [31.0461, 34.8516],
        image: "assets/Uzi.jpg",
        imageCredit: "Photo: Uziel Galishto / Wikimedia Commons / CC BY-SA 3.0",
        specs: { speed: "600 rounds/min", armament: "9x19mm Parabellum", effectiveRange: "200 m" },
        inService: 1954,
        users: ["Israel", "Germany", "Belgium", "Iran", "Thailand", "90+ countries"],
        status: "Active",
        fact: "Designed by Major Uziel Gal, the Uzi was one of the first weapons to use a telescoping bolt design, allowing the magazine to be housed in the pistol grip for a shorter, more compact weapon. Its legendary reliability and simplicity made it the most widely used submachine gun in the world from the 1960s to the 1980s."
    },
    {
        id: 147,
        name: "QCW-05",
        type: "Submachine Gun",
        origin: "China",
        coords: [29.4316, 106.9123],
        image: "assets/QCW05.jpg",
        imageCredit: "Photo: Tyg728 / Wikimedia Commons / CC BY-SA 4.0",
        specs: { speed: "900 rounds/min", armament: "5.8x21mm DCV05", effectiveRange: "150 m" },
        inService: 2005,
        users: ["China"],
        status: "Active",
        fact: "The QCW-05 (Type 05) is a bullpup submachine gun developed for the PLA, designed specifically to use the DCV05 5.8mm subsonic cartridge for suppressed operation. Its unique bullpup layout and large screw-on suppressor make it extremely compact yet quiet, earning it the nickname 'Small Gun' among Chinese special forces."
    },
    {
        id: 148,
        name: "M2 Browning",
        type: "Small Arms",
        origin: "United States",
        coords: [39.8283, -98.5795],
        images: [
            "assets/M2_Browning.jpg",
            "assets/M2_Browning_Bravo.jpg"
        ],
        imageCredits: [
            "Photo: Rama / Wikimedia Commons / CC BY-SA 2.0",
            "Photo: Crescent moon / Wikimedia Commons / CC BY 3.0"
        ],
        specs: { speed: "450-600 rounds/min", armament: ".50 BMG (12.7x99mm)", effectiveRange: "1,830 m" },
        inService: 1933,
        users: ["United States", "United Kingdom", "France", "Australia", "Canada", "100+ countries"],
        status: "Active",
        fact: "The 'Ma Deuce' is one of the longest-serving weapons in history, having been in continuous service since 1933. Designed by John Browning, its .50 BMG round was developed to penetrate armored vehicles and aircraft. It is so effective and reliable that it remains the standard heavy machine gun for NATO and over 100 countries nearly a century after its design."
    },
    {
        id: 122,
        name: "NLAW",
        type: "Anti-Tank Missile",
        origin: "United Kingdom / Sweden",
        coords: [51.5074, -0.1278],
        images: [
            "assets/NLAW.jpg",
            "assets/NLAW_Bravo.jpg"
        ],
        imageCredits: [
            "Photo: MKF1 / Wikimedia Commons / Public Domain",
            "Photo: Cpl Danny Houghton / UK Ministry of Defence / OGL v3.0"
        ],
        specs: { speed: "200 m/s", armament: "150mm HEAT", maximumRange: "800 m" },
        inService: 2009,
        users: ["United Kingdom", "Sweden", "Finland", "Ukraine", "Luxembourg", "Malaysia", "Indonesia"],
        status: "Active",
        fact: "The NLAW (Next generation Light Anti-tank Weapon) is a shoulder-fired, fire-and-forget anti-tank missile jointly developed by the UK and Sweden. Weighing just 12.5 kg, it features an innovative overfly top-attack mode that flies 1 meter above the target and strikes the vulnerable top armor. With soft-launch capability allowing firing from confined spaces, it can be operated by a single soldier and gained fame for its effectiveness against Russian armor in Ukraine."
    },
    {
        id: 123,
        name: "Taurus KEPD-350",
        type: "Cruise Missile",
        origin: "Germany",
        coords: [48.7758, 9.1829],
        images: [
            "assets/Taurus.jpg",
            "assets/Taurus_Bravo.jpg"
        ],
        imageCredits: [
            "Photo: Boevaya mashina / Wikimedia Commons / CC BY-SA 3.0 Unported",
            "Photo: Alf van Beem / Wikimedia Commons / CC0 1.0"
        ],
        specs: { speed: "Mach 0.9", armament: "481 kg MEPHISTO", maximumRange: "500+ km" },
        inService: 2005,
        users: ["Germany", "Sweden", "Spain", "South Korea"],
        status: "Active",
        fact: "The Taurus KEPD-350 is a sophisticated air-launched cruise missile jointly developed by Germany and Sweden for deep strike missions against heavily fortified targets. Its 481 kg MEPHISTO warhead features a two-stage tandem penetrator with intelligent fusing technology capable of counting layers and detecting voids to maximize effectiveness against bunkers and hardened facilities. With a range exceeding 500 km and advanced navigation combining GPS, terrain reference, and image-based systems, it can operate independently without GPS support."
    },
    {
        id: 124,
        name: "Storm Shadow / SCALP",
        type: "Cruise Missile",
        origin: "United Kingdom / France",
        coords: [51.5074, -0.1278],
        image: "assets/Storm_Shadow.jpg",
        specs: { speed: "Mach 0.8-0.95", armament: "450 kg BROACH", maximumRange: "550 km" },
        inService: 2002,
        users: ["United Kingdom", "France", "Italy", "Greece", "Saudi Arabia", "UAE", "Egypt", "India", "Qatar", "Ukraine"],
        status: "Active",
        fact: "The Storm Shadow (UK) / SCALP (France) is a long-range air-launched cruise missile jointly developed by France and the United Kingdom. Its 450 kg BROACH (Bomb Royal Ordnance Augmented Charge) warhead is specifically designed to penetrate hardened bunkers and underground facilities. With a range of 550 km and advanced guidance combining GPS, INS, terrain-following radar, and infrared terminal seeker, it can strike high-value targets with precision while remaining undetected. The missile has been combat-proven in Libya, Syria, and Ukraine.",
        imageCredit: "Photo: Rept0n1x / Wikimedia Commons / CC BY-SA 3.0"
    },
    {
        id: 126,
        name: "Tomahawk",
        type: "Cruise Missile",
        origin: "United States",
        coords: [38.8814, -77.0365],
        images: [
            "assets/Tomahawk.jpg",
            "assets/Tomahawk_Bravo.jpeg"
        ],
        imageCredits: [
            "Photo: Cliff / Flickr / CC BY 2.0 — image modified (symbol removed)",
            "Photo: PH1 Morris / U.S. Navy / Public Domain"
        ],
        specs: { speed: "Mach 0.75", armament: "450 kg HE", maximumRange: "1,600 km" },
        inService: 1983,
        users: ["United States", "United Kingdom", "Australia", "Japan", "Netherlands"],
        status: "Active",
        fact: "The BGM-109 Tomahawk is the most combat-proven cruise missile in history with over 2,000 fired in conflicts from the Gulf War to Syria. It flies at low altitude using terrain-following guidance to evade radar, and the Block IV variant can loiter over targets and be retargeted in flight via satellite datalink. Its wings fold inside the body for storage and deploy after launch, which is why it appears wingless in some images."
    },
    {
        id: 127,
        name: "Brimstone",
        type: "Air-to-Ground Missile",
        origin: "United Kingdom",
        coords: [51.5074, -0.1278],
        images: [
            "assets/Brimstone.jpg",
            "assets/Brimstone_Bravo.jpg"
        ],
        imageCredits: [
            "Photo: Sergeant Laura Bibby / MOD / OGL v1.0",
            "Photo: Hugh Llewelyn / Flickr / CC BY-SA 2.0"
        ],
        specs: { speed: "Mach 1.3", armament: "6.3 kg HEAT", maximumRange: "60 km" },
        inService: 2005,
        users: ["United Kingdom", "Saudi Arabia", "Poland", "Ukraine"],
        status: "Active",
        fact: "The Brimstone uses advanced millimetric wave radar that can distinguish a tank from a tree, and when fired in salvos, its smart targeting ensures missiles hit different targets in sequence. Its dual-mode laser/radar guidance allows 'fire and forget' or precise human-controlled strikes with minimal collateral damage."
    },
    {
        id: 125,
        name: "RS-24 Yars",
        type: "Intercontinental Ballistic Missile",
        origin: "Russia",
        coords: [55.7558, 37.6173],
        image: "assets/RS_24.jpg",
        specs: { speed: "Mach 20+", armament: "3-4 MIRV warheads (200 kt)", maximumRange: "11,000 km" },
        inService: 2010,
        users: ["Russia"],
        status: "Active",
        fact: "The RS-24 Yars (NATO: SS-29) is Russia's primary road-mobile intercontinental ballistic missile and the backbone of its strategic nuclear forces. Entering service in 2010, it can carry 3-4 independently targetable thermonuclear warheads (MIRV) with yields of 150-300 kilotons each. The three-stage solid-fuel missile reaches speeds exceeding Mach 20 and features advanced countermeasures including decoys and maneuverable warheads designed to penetrate missile defense systems. Deployable from both mobile TEL launchers and hardened silos, the Yars provides Russia with a survivable second-strike capability, with over 150 systems currently operational.",
        imageCredit: "Photo: Dmitry Fomin / Wikimedia Commons / CC BY 2.0"
    },
    {
        id: 44,
        name: "KS-1 (L403A1)",
        type: "Assault Rifle",
        origin: "United States",
        coords: [39.8283, -98.5795],
        image: "assets/KS_1.jpg",
        specs: { speed: "N/A", armament: "5.56x45mm NATO", effectiveRange: "600 m" },
        inService: 2023,
        users: ["United Kingdom"],
        status: "Active",
        fact: "The KS-1, designated L403A1 by the UK, was selected in 2023 under Project Hunter. Manufactured by Knight's Armament Company, it features a 13.7-inch barrel, ambidextrous controls, and comes with a Vortex 1-10x LPVO, Aimpoint red dot, and KAC suppressor as standard.",
        imageCredit: "Photo: Corporal Rebecca Brown / UK Ministry of Defence / OGL v3.0"
    },
    {
        id: 126,
        name: "T91",
        type: "Assault Rifle",
        origin: "Taiwan",
        coords: [23.6978, 120.9605],
        images: [
            "assets/T91.jpg",
            "assets/T91_Bravo.jpg"
        ],
        imageCredits: [
            "Photo: Zcdrrn / Wikimedia Commons / CC BY-SA 3.0 Unported",
            "Photo: SP Lee / Wikimedia Commons / CC BY-SA 4.0 International"
        ],
        specs: { speed: "N/A", armament: "5.56x45mm NATO", effectiveRange: "600 m" },
        inService: 2003,
        users: ["Taiwan", "Bosnia and Herzegovina", "Jordan", "Kuwait", "UAE", "India", "Indonesia", "Haiti", "Gambia"],
        status: "Active",
        fact: "The T91 is Taiwan's indigenous assault rifle, developed by the 205th Armory and entering service in 2003 to replace the older T65 series. Chambered in 5.56×45mm NATO, it features a short-stroke gas piston system, folding stock, and a 4-position fire selector (safe, semi-auto, 3-round burst, full-auto). With a cyclic rate of 800-850 rpm and effective range of 600 meters, it uses standard STANAG magazines and M16A2-style sights with Picatinny rail compatibility. Taiwan ordered over 100,000 units and has successfully exported the T91 to multiple nations including Jordan (20,000), Kuwait (18,000), and the UAE (10,000)."
    },
    {
        id: 127,
        name: "FARA 83",
        type: "Assault Rifle",
        origin: "Argentina",
        coords: [-38.4161, -63.6167],
        image: "assets/Fara83.jpg",
        specs: { speed: "N/A", armament: "5.56x45mm NATO", effectiveRange: "600 m" },
        inService: 1984,
        users: ["Argentina"],
        status: "Active - Limited Use",
        fact: "The FARA 83 (Fusil Automático República Argentina 1983) is an Argentine assault rifle designed by Enrique Chichizola in 1981 and manufactured by FMAP-DM from 1984 to 1990. Chambered in 5.56×45mm NATO, it features a gas-operated rotating bolt system, folding buttstock, integral muzzle brake, and tritium night sights. With a cyclic rate of 750 rpm and effective range of 600 meters, it uses proprietary 30-round Beretta AR70 magazines. Originally intended to replace the FN FAL as Argentina's standard rifle, economic difficulties limited production to only approximately 1,193 units by 1990, relegating it to secondary status while the FN FAL remained the primary service rifle.",
        imageCredit: "Photo: Gelpgim22 (Sergio Moises Panto Pitrau) / Wikimedia Commons / CC BY-SA 4.0 International"
    },
    {
        id: 128,
        name: "Pindad SS1",
        type: "Assault Rifle",
        origin: "Indonesia",
        coords: [-0.7893, 113.9213],
        images: [
            "assets/Pindad_SS1.jpg",
            "assets/Pindad_SS1_Bravo.jpg"
        ],
        imageCredits: [
            "Photo: Pindad / Public Domain (Indonesia)",
            "Photo: Cpl. Danny Gonzalez / U.S. Marine Corps / Public Domain"
        ],
        specs: { speed: "N/A", armament: "5.56x45mm NATO", effectiveRange: "450 m" },
        inService: 1991,
        users: ["Indonesia", "Cambodia", "Laos", "Mali"],
        status: "Active",
        fact: "The Pindad SS1 (Senapan Serbu 1 - 'Assault Rifle 1') is Indonesia's standard service rifle, manufactured by state-owned PT Pindad and adopted in 1991. Based on a licensed and modified version of the Belgian FN FNC, it is chambered in 5.56×45mm NATO with a gas-operated rotating bolt action. Featuring a folding stock, 449mm barrel, and cyclic rate of 700-760 rpm, it uses STANAG-compatible 20 or 30-round magazines with an effective range of 450 meters. The SS1 serves all branches of the Indonesian Armed Forces (TNI) including elite units like Kopassus and Kopaska, as well as the Indonesian National Police. Multiple variants exist including compact carbines (SS1-V5), optical sight versions (SS1-V4), and a specialized 7.62×45mm variant for law enforcement."
    },
    {
        id: 129,
        name: "EF88 Austeyr",
        type: "Assault Rifle",
        origin: "Australia",
        coords: [-25.2744, 133.7751],
        images: [
            "assets/EF88.jpg",
            "assets/EF88_Bravo.png"
        ],
        imageCredits: [
            "Photo: Mass Communication Specialist 3rd Class Dylan Lavin / U.S. Navy / Public Domain",
            "Photo: KarmaKangaroo / Wikimedia Commons / CC0 1.0 Universal Public Domain"
        ],
        specs: { speed: "N/A", armament: "5.56×45mm NATO", effectiveRange: "600 m" },
        inService: 2016,
        users: ["Australia"],
        status: "Active",
        fact: "The EF88 Austeyr is Australia's current standard service rifle, manufactured by Thales Australia at the Lithgow Arms factory and entering service in 2016 to replace the F88 Austeyr. An enhanced bullpup assault rifle chambered in 5.56×45mm NATO, it features a gas-operated short-stroke piston system with a 20-inch barrel and cyclic rate of 680-850 rpm. Using standard 30-round STANAG magazines, it delivers accurate fire out to 600 meters with advanced optics. The EF88 incorporates significant improvements over its predecessor including enhanced ergonomics, STANAG 4694 NATO rails for mounting accessories, a fixed barrel, modified gas system, and compatibility with various sights (ACOG, thermal imaging, enhanced day sights) and attachments like the ML40AUS grenade launcher. Over 30,000 rifles were delivered to the Australian Defence Force between 2016-2021."
    },
    {
        id: 130,
        name: "Howa Type 89",
        type: "Assault Rifle",
        origin: "Japan",
        coords: [36.2048, 138.2529],
        images: [
            "assets/Type89.jpg",
            "assets/Type89_Bravo.jpg"
        ],
        imageCredits: [
            "Photo: Crescent moon / Japanese Wikipedia / CC BY 3.0 Unported",
            "Photo: 36th Infantry Regiment, 3rd Division, JGSDF / CC BY 4.0 International"
        ],
        specs: { speed: "N/A", armament: "5.56×45mm NATO", effectiveRange: "500 m" },
        inService: 1989,
        users: ["Japan"],
        status: "Active",
        fact: "The Howa Type 89 is Japan's standard service rifle, developed by Howa Machinery Co. and adopted by the Japan Self-Defense Forces in 1989 to replace the Type 64 battle rifle. Chambered in 5.56×45mm NATO, it's based on the Armalite AR-18 design with a gas-operated rotating bolt system. Featuring a 420mm barrel and cyclic rate of 750 rpm, it uses STANAG-compatible 20 or 30-round magazines with an effective range of 500 meters. The Type 89 offers three fire modes: semi-automatic, full-automatic, and a distinctive three-round burst. It includes an integrated removable bipod and can fire Type 06 rifle grenades. The primary variant, Type 89-F, features a folding stock for paratroopers and vehicle crews. Due to Japan's strict arms export ban, the Type 89 has never been sold internationally and is exclusively used by Japanese forces including JGSDF, Coast Guard Special Security Team, and Special Assault Team."
    },
    {
        id: 131,
        name: "Howa Type 20",
        type: "Assault Rifle",
        origin: "Japan",
        coords: [36.2048, 138.2529],
        image: "assets/Type20.jpg",
        specs: { speed: "N/A", armament: "5.56×45mm NATO", effectiveRange: "500 m" },
        inService: 2020,
        users: ["Japan"],
        status: "Active",
        fact: "The Howa Type 20 is Japan's newest service rifle. The Type 20 incorporates cutting-edge features including fully ambidextrous controls (safety, magazine release, swappable charging handle), a five-position adjustable telescopic stock, full-length Picatinny rail, and M-LOK compatible handguard for accessories. Designed with enhanced water resistance for amphibious operations and built from corrosion-resistant materials, it's compatible with the Beretta GLX-160 grenade launcher. Initial deliveries went to the Amphibious Rapid Deployment Brigade in 2021, with continued deployment across JGSDF, JASDF security units, and JMSDF.",
        imageCredit: "Photo: Hunini / Wikimedia Commons / CC BY-SA 4.0 International"
    },

    // === AIR DEFENSE SYSTEMS ===
    {
        id: 45,
        name: "M27 IAR",
        type: "Assault Rifle",
        origin: "United States",
        coords: [39.8283, -98.5795],
        image: "assets/M27.jpg",
        specs: { speed: "N/A", armament: "5.56x45mm NATO", effectiveRange: "800 m" },
        inService: 2010,
        users: ["United States"],
        status: "Active",
        fact: "The M27 IAR replaced the M249 SAW in U.S. Marine Corps infantry squads. Based on the HK416, it offers superior accuracy and reliability while weighing 3kg less than the M249, though it uses standard 30-round magazines instead of belt-fed ammunition.",
        imageCredit: "Photo: Sgt. Patrick Katz / U.S. Marine Corps / Public Domain"
    },

    // === AIR DEFENSE SYSTEMS ===
    {
        id: 46,
        name: "S-400 Triumf",
        type: "Air Defense System",
        origin: "Russia",
        coords: [55.7558, 37.6173],
        image: "assets/s400_1765118527696.jpg",
        specs: { speed: "Static", armament: "40N6 Missiles", engagementRange: "400 km" },
        inService: 2007,
        users: ["Russia", "China", "Turkey", "India", "Belarus"],
        status: "Active",
        imageCredit: "Photo: Vitaly V. Kuzmin / Wikimedia Commons / CC BY-SA 4.0"
    },
    {
        id: 117,
        name: "2S6M1 Tunguska",
        type: "Air Defense System",
        origin: "Russia",
        coords: [54.3142, 48.4033],
        images: [
            "assets/2S6M1_Tunguska.jpg",
            "assets/Tunguska_Bravo.jpg"
        ],
        imageCredits: [
            "Photo: Boevaya mashina / Wikimedia Commons / CC BY-SA 3.0 Germany",
            "Photo: Doomych / Wikimedia Commons / Public Domain"
        ],
        specs: { speed: "65 km/h", armament: "2x 30mm 2A38M, 8x 9M311-M1 SAM", engagementRange: "10 km" },
        inService: 2003,
        users: ["Russia", "India", "Ukraine", "Syria", "Belarus", "Morocco"],
        status: "Active",
        fact: "The 2S6M1 Tunguska (NATO: SA-19 'Grison') is a unique tracked mobile air defense system combining both guns and missiles. It features twin 30mm autocannons firing 5,000 rounds per minute alongside 8 surface-to-air missiles with 10km range, designed to protect armored units from low-flying aircraft, helicopters, and cruise missiles in all weather conditions."
    },
    {
        id: 47,
        name: "Patriot PAC-3",
        type: "Air Defense System",
        origin: "United States",
        coords: [32.7767, -96.7970],
        image: "assets/Patriot.jpg",
        specs: { speed: "Static", armament: "MIM-104F", engagementRange: "70 km" },
        inService: 1984,
        users: ["United States", "Germany", "Japan", "Saudi Arabia", "Israel"],
        status: "Active",
        imageCredit: "Photo: Floevaya mashina / Wikimedia Commons / CC BY-SA 3.0 Germany"
    },
    {
        id: 48,
        name: "Iron Dome",
        type: "Air Defense System",
        origin: "Israel",
        coords: [32.0853, 34.7818],
        image: "assets/IronDome.jpg",
        specs: { speed: "Static", armament: "Tamir interceptors", engagementRange: "70 km" },
        inService: 2011,
        users: ["Israel", "United States"],
        status: "Active",
        imageCredit: "Photo: Israel Defense Forces / Flickr / CC BY 2.0"
    },
    {
        id: 306,
        name: "SAMP/T",
        type: "Air Defense System",
        origin: "France/Italy",
        coords: [48.8566, 2.3522],
        image: "assets/SampT.jpg",
        specs: { speed: "Mach 4.5 (Interceptor)", armament: "8x Aster 30 missiles", engagementRange: "120 km" },
        inService: 2011,
        users: ["France", "Italy", "Singapore", "Ukraine"],
        status: "Active",
        fact: "The SAMP/T is an advanced European anti-aircraft and anti-missile system developed by Eurosam. Utilizing the hit-to-kill Aster 30 missile, it is specifically designed to intercept highly maneuverable threats, including supersonic cruise missiles and tactical ballistic missiles.",
        recognitionFeatures: {
            weapons: "Vertical launch system (VLS) module holding 8 circular missile canisters mounted on the rear of a heavy truck chassis.",
            hull: "Mounted on 8x8 heavy tactical trucks (Renault Kerax in France or Astra in Italy). Features a large, boxy command/launch cabin behind the cab.",
            armor: "Light splinter and small arms protection for the crew cabin. The system avoids attack through high mobility rather than heavy armor.",
            trackWheels: "Eight large wheels (8x8 configuration), ensuring it can rapidly redeploy over varied terrain."
        },
        imageCredit: "Photo: Kevin.B / Wikimedia Commons / CC BY-SA 4.0 — image modified (cropped)"
    },
    {
        id: 307,
        name: "AMX-10 RC",
        type: "Tank Destroyer",
        origin: "France",
        coords: [48.8566, 2.3522],
        image: "assets/AMX10_RC_01.jpg",
        images: [
            "assets/AMX10_RC_01.jpg",
            "assets/AMX10_RC_02.jpg"
        ],
        specs: { speed: "85 km/h", armament: "105mm F2 BK MECA", operationalRange: "800 km" },
        inService: 1981,
        users: ["France", "Morocco", "Qatar", "Ukraine"],
        status: "Active",
        fact: "Although it carries a 105mm gun capable of defeating light armor, the AMX-10 RC is classified as a wheeled reconnaissance vehicle, not a tank. Its hydropneumatic suspension allows the driver to adjust ride height on the fly, and it is fully amphibious — propelled through water by two rear-mounted waterjets with no preparation required. France deployed it to Ukraine in early 2023, marking one of the first Western 'tank-like' vehicles sent to the conflict.",
        recognitionFeatures: {
            wheels: "6 large road wheels (6x6) in a distinctive 3-axle layout. Tires are notably tall and wide. No tracks whatsoever — a key recognition point vs. similar-looking tracked vehicles.",
            hull: "Low-profile, boxy welded steel hull. Slopes sharply at the front glacis. Driver's hatch on front-left. Rear hull drops off steeply to housing for two waterjets.",
            armament: "Long 105mm F2 rifled gun with a prominent thermal sleeve and muzzle brake. Notably longer barrel than most IFVs. Coaxial 7.62mm NF1 machine gun on the left of the main gun.",
            turret: "Large, angular two-man turret (commander + gunner) that takes up over half the vehicle's length when viewed from above. Periscopic sights and a rangefinder box are prominent on the turret roof."
        },
        imageCredits: [
            "Photo: АрміяInform / Ministry of Defense of Ukraine / CC BY 4.0",
            "Photo: Officier communication du 4e RCh / Wikimedia Commons / CC BY-SA 4.0"
        ]
    },
    {
        id: 308,
        name: "Type 16 MCV",
        type: "Tank Destroyer",
        origin: "Japan",
        coords: [36.2048, 138.2529],
        images: [
            "assets/Type16_MCV.jpg",
            "assets/Type16_MCV_Bravo.jpg"
        ],
        specs: { speed: "100 km/h", armament: "105mm L/52 rifled gun", operationalRange: "400 km" },
        inService: 2016,
        users: ["Japan"],
        status: "Active",
        fact: "The Type 16 MCV (Maneuver Combat Vehicle) was developed by Mitsubishi Heavy Industries specifically for Japan's strategic geography — its 8x8 wheeled configuration allows it to be rapidly airlifted by C-2 transport aircraft to Japan's remote outer islands, such as the Nansei island chain near Taiwan. Despite weighing 26 tonnes and carrying a 105mm gun capable of penetrating most light-to-medium armor, the JGSDF officially classifies it as a 'fire support vehicle' rather than a tank, allowing Japan to circumvent constitutional limits on offensive weapons.",
        recognitionFeatures: {
            wheels: "8 large road wheels (8x8) in a four-axle layout. Distinctive wide low-profile tires. All four axles are clearly visible with pronounced wheel arches.",
            hull: "Very sleek, angular, low-profile hull with a heavily sloped front glacis. Noticeably more aerodynamic and futuristic in appearance than comparable Western wheeled AFVs. Driver's hatch on front-left.",
            armament: "Long 105mm L/52 rifled gun. Prominent bore evacuator midway along the barrel. 12.7mm M2 Browning on the commander's cupola. No muzzle brake (unlike the AMX-10 RC or Centauro).",
            turret: "Low, highly angular two-man turret with sharp faceted surfaces. Laser warning receivers and a commander's panoramic sight on the turret roof. The turret has a distinctly modern, almost stealth-faceted appearance."
        },
        imageCredits: [
            "Photo: Hunini / Wikimedia Commons / CC BY-SA 4.0",
            "Photo: JGSDF / Wikimedia Commons / CC BY 2.0"
        ]
    },
    {
        id: 49,
        name: "Bavar-373",
        type: "Air Defense System",
        origin: "Iran",
        coords: [35.6892, 51.3890],
        image: "assets/Bavar_373.jpg",
        specs: { speed: "Static", armament: "Sayyad-4 missiles", engagementRange: "300 km" },
        inService: 2019,
        users: ["Iran"],
        status: "Active",
        imageCredit: "Photo: M. Hasan Zarifmanesh / Fars Media Corporation / CC BY 4.0 — image modified (background removed)"
    },
    {
        id: 50,
        name: "HQ-9",
        type: "Air Defense System",
        origin: "China",
        coords: [39.9042, 116.4074],
        images: [
            "assets/HQ_9.jpg",
            "assets/HQ9_Bravo.jpg"
        ],
        specs: { speed: "Static", armament: "HQ-9 missiles", engagementRange: "200 km" },
        inService: 1997,
        users: ["China", "Pakistan"],
        status: "Active",
        imageCredits: [
            "Photo: Tyg728 / Wikimedia Commons / CC BY-SA 4.0",
            "Photo: Jian Kang / Wikimedia Commons / CC BY 3.0"
        ]
    },
    {
        id: 51,
        name: "Pantsir-S1 (SA-22)",
        type: "Air Defense System",
        origin: "Russia",
        coords: [54.1931, 37.6172],
        image: "assets/Pantsir_S1.jpg",
        specs: { speed: "90 km/h", armament: "12x Missiles, 2x 30mm Guns", engagementRange: "20 km" },
        inService: 2012,
        users: ["Russia", "UAE", "Syria", "Iraq", "Algeria"],
        status: "Active",
        fact: "The Pantsir-S1 (NATO: SA-22 Greyhound) combines missiles and autocannons to engage aircraft, UAVs, and precision munitions.",
        imageCredit: "Photo: Vitaly V. Kuzmin / Wikimedia Commons / CC BY-SA 4.0"
    },
    {
        id: 52,
        name: "Strela-10 (SA-13)",
        type: "Air Defense System",
        origin: "Russia",
        coords: [55.7558, 37.6173],
        image: "assets/SA_13.jpg",
        specs: { speed: "61.5 km/h", armament: "4x SAMs ready", engagementRange: "5 km" },
        inService: 1979,
        users: ["Russia", "Ukraine", "Afghanistan", "Angola", "Vietnam", "India", "Cuba", "Serbia"],
        status: "Active",
        fact: "The 9K35 Strela-10 (NATO: SA-13 Gopher) is a highly mobile short-range SAM system built on an amphibious MT-LB chassis. It carries 4 ready-to-fire missiles plus 8 reloads, with missiles reaching Mach 2 to engage low-altitude threats.",
        imageCredit: "Photo: SrÄ‘an PopoviÄ‡ / Wikimedia Commons / CC BY-SA 4.0"
    },
    {
        id: 53,
        name: "Tor (SA-15)",
        type: "Air Defense System",
        origin: "Russia",
        coords: [55.7558, 37.6173],
        image: "assets/TOR_M1_SA_15.jpg",
        specs: { speed: "65 km/h", armament: "8x SAMs ready", engagementRange: "15 km" },
        inService: 1991,
        users: ["Russia", "Armenia", "Azerbaijan", "Belarus", "China", "Cyprus", "Egypt", "Greece", "Iran", "Peru", "Ukraine", "Venezuela", "Yemen", "Libya", "Myanmar"],
        status: "Active",
        fact: "The Tor-M1 (SA-15 Gauntlet) is an advanced mobile SAM system that can detect up to 48 targets, track 10, and engage 2 simultaneously. Its 8 vertical-launch missiles can reach Mach 2 and the system has a reaction time of just 5-8 seconds.",
        imageCredit: "Photo: Vitaly V. Kuzmin / Wikimedia Commons / CC BY-SA 4.0"
    },
    {
        id: 54,
        name: "Buk (SA-17)",
        type: "Air Defense System",
        origin: "Russia",
        coords: [55.7558, 37.6173],
        image: "assets/Buk_SA_17.jpg",
        specs: { speed: "65 km/h", armament: "4x SAMs ready", engagementRange: "45 km" },
        inService: 1979,
        users: ["Russia", "Kazakhstan", "Venezuela", "Belarus", "Finland", "Syria", "Ukraine", "Serbia", "Egypt", "Georgia", "India", "North Korea", "Azerbaijan", "Vietnam", "Armenia"],
        status: "Active",
        fact: "The Buk missile system (SA-17 Grizzly) is a tracked medium-range SAM system designed to engage aircraft, cruise missiles, and UAVs. Its 9M317 missiles reach Mach 4 with a 45 km range, and the target acquisition radar can detect targets up to 85 km away.",
        imageCredit: "Photo: Vitaly V. Kuzmin / Wikimedia Commons / CC BY-SA 4.0"
    },
    {
        id: 153,
        name: "THAAD",
        type: "Air Defense System",
        origin: "United States",
        coords: [31.9686, -106.2514],
        images: [
            "assets/Thaad.jpg",
            "assets/Thaad_Bravo.jpg"
        ],
        imageCredits: [
            "Photo: Lt. Amy Forsythe / U.S. Navy / Public Domain",
            "Photo: Ralph Scott / U.S. Missile Defense Agency / Public Domain"
        ],
        specs: { speed: "Static", armament: "THAAD Interceptors", engagementRange: "200 km" },
        inService: 2008,
        users: ["United States", "UAE", "Saudi Arabia", "South Korea", "Israel"],
        status: "Active",
        fact: "THAAD (Terminal High Altitude Area Defense) is a mobile anti-ballistic missile system using 'hit-to-kill' technology to intercept short, medium, and intermediate-range ballistic missiles during their terminal flight phase. Each battery contains 48 interceptors that travel at Mach 8.2 and can engage targets at altitudes up to 150 km - both inside and outside Earth's atmosphere. The UAE became the first foreign operator, achieving the world's first operational intercept of a hostile ballistic missile by THAAD in January 2022."
    },

    // === ARTILLERY ===
    {
        id: 55,
        name: "CAESAR",
        type: "Artillery",
        origin: "France",
        coords: [48.8566, 2.3522],
        image: "assets/caesar_1765118550941.jpg",
        specs: { speed: "100 km/h", armament: "155mm L/52", maximumRange: "42 km" },
        inService: 2008,
        users: ["France", "Denmark", "Czech Republic", "Ukraine", "Indonesia"],
        status: "Active",
        imageCredit: "Photo: Markus Rauchenberger / U.S. Army / Public Domain"
    },
    {
        id: 149,
        name: "RCH-155",
        type: "Artillery",
        origin: "Germany",
        coords: [48.1351, 11.5820],
        images: [
            "assets/RCH155.jpg",
            "assets/RCH155_Bravo.jpg"
        ],
        specs: { speed: "100 km/h", armament: "155mm L/52", maximumRange: "54 km" },
        inService: 2024,
        users: ["Germany", "Ukraine"],
        status: "Active",
        fact: "The RCH-155 is the world's first artillery system capable of firing while moving, allowing for unprecedented 'shoot-and-scoot' capabilities.",
        imageCredits: [
            "Photo: KNDS / KMW",
            "Photo: Boevaya mashina / Wikimedia Commons / CC BY-SA 3.0"
        ]
    },

    {
        id: 56,
        name: "M270 MLRS",
        type: "Artillery",
        origin: "United States",
        coords: [38.2527, -85.7585],
        image: "assets/M270_MLRS.jpg",
        specs: { speed: "64 km/h", armament: "227mm rockets", maximumRange: "300 km" },
        inService: 1983,
        users: ["United States", "UK", "Germany", "France", "Japan"],
        status: "Active",
        imageCredit: "Photo: SSG Richard Hart / U.S. Department of Defense / Public Domain"
    },
    {
        id: 300,
        name: "K239 Chunmoo",
        type: "Artillery",
        origin: "South Korea",
        coords: [35.9078, 127.7669],
        images: [
            "assets/K239.jpg",
            "assets/K239_Bravo.jpg"
        ],
        specs: { speed: "90 km/h", armament: "239mm Guided Rockets", maximumRange: "80-290 km" },
        inService: 2015,
        users: ["South Korea", "Poland", "UAE"],
        status: "Active",
        fact: "The K239 Chunmoo is a highly mobile, multi-caliber rocket artillery system developed by South Korea. Designed for rapid 'shoot-and-scoot' tactics, it can fire various unguided and guided rockets, including 239mm guided rockets with an 80km range and heavier tactical missiles reaching up to 290km. Poland has procured a localized version called Homar-K.",
        imageCredits: [
            "Photo: ROK Ministry of National Defense / Wikimedia Commons / KOGL Type 1",
            "Photo: ROK Ministry of National Defense / Wikimedia Commons / KOGL Type 1"
        ]
    },
    {
        id: 57,
        name: "M142 HIMARS",
        type: "Artillery",
        origin: "United States",
        coords: [35.4676, -97.5164],
        image: "assets/HIMARS.jpg",
        specs: { speed: "94 km/h", armament: "GMLRS rockets", maximumRange: "92 km" },
        inService: 2005,
        users: ["United States", "Ukraine", "Poland", "Romania", "Jordan", "Singapore", "UAE", "Australia", "Finland", "Estonia", "Latvia", "Lithuania"],
        status: "Active",
        fact: "Unlike older, less accurate artillery, HIMARS uses GPS-guided munitions (GMLRS rockets) with \"sniper-like\" precision, capable of hitting a specific building or target from up to 57 miles (92 km) away.",
        imageCredit: "Photo: U.S. Army / Public Domain"
    },
    {
        id: 156,
        name: "BM-30 Smerch",
        type: "Artillery",
        origin: "Russia",
        coords: [55.7558, 37.6173],
        images: [
            "assets/9a52_BM30.jpg",
            "assets/9a52_BM30_Bravo.jpg"
        ],
        imageCredits: [
            "Photo: One half 3544 / Wikimedia Commons / Public Domain",
            "Photo: Vitaly V. Kuzmin / vitalykuzmin.net / CC BY-SA 4.0"
        ],
        specs: { speed: "60 km/h", armament: "300mm rockets", maximumRange: "90 km" },
        inService: 1989,
        users: ["Russia", "Ukraine", "Belarus", "Algeria", "Kuwait", "India", "Peru", "Syria", "UAE", "Azerbaijan", "Kazakhstan", "Turkmenistan"],
        status: "Active",
        fact: "The BM-30 Smerch (Russian for 'Tornado') is one of the world's most powerful multiple rocket launcher systems. Each 9A52 launch vehicle carries 12 x 300mm rockets that can deliver 280kg warheads to ranges up to 90km. A single salvo from one launcher can devastate an area of 67 hectares, making it one of the most destructive conventional artillery systems ever built."
    },
    {
        id: 58,
        name: "2S19 Msta",
        type: "Artillery",
        origin: "Russia",
        coords: [56.3269, 44.0059],
        image: "assets/2S19_MSTA.jpg",
        specs: { speed: "60 km/h", armament: "152mm 2A64", maximumRange: "29 km" },
        inService: 1989,
        users: ["Russia", "Ukraine", "Belarus"],
        status: "Active",
        imageCredit: "Photo: Dmitriy Fomin / Flickr / CC BY 2.0"
    },
    {
        id: 59,
        name: "Tornado-S",
        type: "Artillery",
        origin: "Russia",
        coords: [55.7558, 37.6173],
        image: "assets/Tornado_S.png",
        specs: { speed: "90 km/h", armament: "300mm rockets", maximumRange: "90 km" },
        inService: 2011,
        users: ["Russia"],
        status: "Active",
        fact: "The Tornado-S features GLONASS satellite navigation and can fire guided rockets with precision strike capabilities, replacing older Soviet-era BM-21, BM-27, and BM-30 rocket systems.",
        imageCredit: "Photo: Ministry of Defence of the Russian Federation / Mil.ru / CC BY 4.0"
    },
    {
        id: 60,
        name: "TOS-1A Solntsepek",
        type: "Artillery",
        origin: "Russia",
        coords: [55.5587, 37.0514],
        image: "assets/TOS_1a.jpg",
        specs: { speed: "60 km/h", armament: "220mm Thermobaric", maximumRange: "6 km" },
        inService: 2001,
        users: ["Russia", "Azerbaijan", "Iraq", "Kazakhstan", "Saudi Arabia", "Syria"],
        status: "Active",
        fact: "The TOS-1A uses thermobaric rockets that create a massive blast wave and vacuum, capable of destroying bunkers and fortifications.",
        imageCredit: "Photo: Boevaya mashina / Wikimedia Commons / CC BY-SA 4.0"
    },
    {
        id: 61,
        name: "K9 Thunder",
        type: "Artillery",
        origin: "South Korea",
        coords: [37.5665, 126.9780],
        image: "assets/K9_Thunder.jpg",
        specs: { speed: "67 km/h", armament: "155mm L/52", maximumRange: "40 km" },
        inService: 1999,
        users: ["South Korea", "Turkey", "Poland", "India", "Norway"],
        status: "Active",
        imageCredit: "Photo: Defense Citizen Network / Wikimedia Commons / CC BY-SA 2.0 Korea"
    },
    {
        id: 62,
        name: "Koksan (M-1989)",
        type: "Artillery",
        origin: "North Korea",
        coords: [39.0392, 125.7625],
        image: "assets/M1989.jpg",
        specs: { speed: "40 km/h", armament: "170mm M-1978", maximumRange: "60 km" },
        inService: 1978,
        users: ["North Korea", "Iran"],
        status: "Active",
        imageCredit: "Photo: Stefan Krasowski / Flickr / CC BY 2.0"
    },
    {
        id: 63,
        name: "OTR-21 Tochka (SS-21)",
        type: "Tactical Ballistic Missile",
        origin: "Russia",
        coords: [55.7558, 37.6173],
        image: "assets/SS_21.jpg",
        specs: { speed: "Mach 5.3", armament: "Various warheads", maximumRange: "120 km" },
        inService: 1975,
        users: ["Russia", "Ukraine", "Belarus", "Kazakhstan", "Armenia", "Yemen"],
        status: "Active",
        fact: "The OTR-21 Tochka (NATO: SS-21 Scarab) is a road-mobile tactical ballistic missile that can carry nuclear, chemical, or conventional warheads and has seen extensive combat use in multiple conflicts.",
        imageCredit: "Photo: Vladislav Falshivomonetchik / Wikimedia Commons / CC BY-SA 3.0"
    },
    {
        id: 109,
        name: "L118 Light Gun",
        type: "Artillery",
        origin: "United Kingdom",
        coords: [51.5074, -0.1278],
        images: [
            "assets/L118.jpg",
            "assets/L118_Bravo.jpg"
        ],
        imageCredits: [
            "Photo: Richard Watt/MOD / Wikimedia Commons / OGL v1.0",
            "Photo: Marinha do Brasil / Flickr / CC BY-SA 2.0"
        ],
        specs: { speed: "N/A (Towed)", armament: "105mm L118", maximumRange: "17.2 km" },
        inService: 1976,
        users: ["United Kingdom", "United States", "Brazil", "Spain", "UAE", "Australia", "New Zealand", "Ireland", "Portugal", "Thailand", "Ukraine", "20+ countries"],
        status: "Active",
        fact: "The L118 Light Gun is a highly mobile 105mm towed howitzer that can be deployed by helicopter or parachute. Its crew can bring it into action in just 30 seconds and achieve a firing rate of 6-8 rounds per minute."
    },
    {
        id: 110,
        name: "M777 Howitzer",
        type: "Artillery",
        origin: "United States / United Kingdom",
        coords: [54.1135, -3.2254],
        images: [
            "assets/M777_howitzer.jpg",
            "assets/M777_howitzer_Bravo.jpg"
        ],
        imageCredits: [
            "Photo: Sgt Jose F. Guillen / U.S. Marine Corps / Public Domain",
            "Photo: mark6mauno / Flickr / CC BY 2.0"
        ],
        specs: { speed: "N/A (Towed)", armament: "155mm L/39", maximumRange: "30 km" },
        inService: 2005,
        users: ["United States", "Australia", "Canada", "India", "Saudi Arabia", "Ukraine", "Colombia"],
        status: "Active",
        fact: "The M777 is an ultra-lightweight 155mm howitzer made with titanium and aluminum alloys, weighing just 4.2 tons—43% lighter than the M198 it replaced. It can fire precision Excalibur rounds up to 40km away with GPS guidance."
    },
    {
        id: 111,
        name: "2A18 D-30 Howitzer",
        type: "Artillery",
        origin: "Russia",
        coords: [55.7558, 37.6173],
        images: [
            "assets/howitzer_2A18_D_30.jpg",
            "assets/D_30_Bravo.jpg"
        ],
        imageCredits: [
            "Photo: D'oh Boy (Mark Holloway) / Flickr / CC BY 2.0",
            "Photo: Richard Allen / Flickr / CC BY 2.0"
        ],
        specs: { speed: "N/A (Towed)", armament: "122mm D-30", maximumRange: "15.3 km" },
        inService: 1960,
        users: ["Russia", "China", "Iraq", "Iran", "Syria", "North Korea", "Egypt", "India", "60+ countries"],
        status: "Active",
        fact: "The D-30's distinctive three-leg carriage allows the gun to traverse a full 360 degrees, enabling rapid engagement of targets in any direction. Despite being designed in the 1960s, it remains in widespread service across 60+ countries and has been used in nearly every major conflict since the Cold War."
    },
    {
        id: 112,
        name: "PCL-09 Self-Propelled Howitzer",
        type: "Artillery",
        origin: "China",
        coords: [35.8617, 104.1954],
        image: "assets/PCL_09.png",
        specs: { speed: "85 km/h", armament: "122mm PL-96", maximumRange: "18 km" },
        inService: 2009,
        users: ["China"],
        status: "Active",
        fact: "The PCL-09 is a truck-mounted 122mm howitzer with exceptional mobility, reaching 85 km/h on roads. With 300+ units in service, it provides rapid-deployment fire support for China's motorized infantry and can extend its range to 27km using rocket-assisted projectiles.",
        imageCredit: "Photo: 中国新闻社 (China News Service) / YouTube / CC BY 3.0"
    },
    {
        id: 114,
        name: "PLZ-05",
        type: "Artillery",
        origin: "China",
        coords: [35.8617, 104.1954],
        images: [
            "assets/PLZ_05.jpg",
            "assets/PLZ_05_Bravo.jpg"
        ],
        imageCredits: [
            "Photo: Tyg728 / Wikimedia Commons / CC BY-SA 4.0",
            "Photo: Ministry of Defence of the Russian Federation / Mil.ru / CC BY 4.0"
        ],
        specs: { speed: "56 km/h", armament: "155mm L/52", maximumRange: "50 km" },
        inService: 2008,
        users: ["China"],
        status: "Active",
        fact: "The PLZ-05 is China's most advanced 155mm self-propelled howitzer, featuring an automatic loading system capable of 8-10 rounds per minute. With a 52-caliber barrel, it can fire rocket-assisted rounds up to 50km and specialized projectiles beyond 100km. Weighing 35 tonnes and powered by an 800hp diesel engine, it serves as the backbone of PLA artillery units."
    },
    {
        id: 115,
        name: "Raad-2",
        type: "Artillery",
        origin: "Iran",
        coords: [32.4279, 53.6880],
        image: "assets/Raad_2.jpg",
        specs: { speed: "N/A", armament: "155mm HM44", maximumRange: "30 km" },
        inService: 2013,
        users: ["Iran"],
        status: "Active",
        fact: "The Raad-2 is an Iranian domestically-produced 155mm self-propelled howitzer based on a heavily modified chassis. It features the HM44 howitzer with a 30km firing range and represents Iran's efforts to develop indigenous artillery systems despite international sanctions.",
        imageCredit: "Photo: Sonia Sevilla / Wikimedia Commons / CC0 1.0 — image modified (symbols removed)"
    },
    {
        id: 119,
        name: "Archer Artillery System",
        type: "Artillery",
        origin: "Sweden",
        coords: [59.3293, 18.0686],
        images: [
            "assets/Archer.jpg",
            "assets/Archer_Bravo.jpg"
        ],
        imageCredits: [
            "Photo: Stridsvagn122 / Wikimedia Commons / CC BY-SA 4.0",
            "Photo: Staff Sgt. Bryan Myhr / U.S. Air National Guard / Public Domain"
        ],
        specs: { speed: "70 km/h", armament: "155mm L/52", maximumRange: "60 km" },
        inService: 2016,
        users: ["Sweden", "Norway", "Ukraine"],
        status: "Active",
        fact: "The Archer is a Swedish 155mm fully-automated self-propelled howitzer mounted on a Volvo 6×6 all-terrain vehicle. It can fire 20 rounds in 2.5 minutes, has a deployment time under 30 seconds, and can fire Excalibur precision rounds up to 60km. Its crew of 3 operates from an armored cabin, and the system can even be controlled by a single operator."
    },

    // === COMBAT DRONES ===
    {
        id: 64,
        name: "Bayraktar TB2",
        type: "Combat Drone",
        origin: "Turkey",
        coords: [38.9637, 35.2433],
        images: [
            "assets/bayraktar_1765118506987.jpg",
            "assets/bayraktar_1765118506987_Bravo.jpg"
        ],
        imageCredits: [
            "Photo: Bayhaluk / Wikimedia Commons / CC BY-SA 4.0",
            "Photo: אלי / Wikimedia Commons / CC BY-SA 4.0"
        ],
        specs: { speed: "220 km/h", armament: "MAM-L, MAM-C", operationalRange: "150 km" },
        inService: 2014,
        users: ["Turkey", "Ukraine", "Azerbaijan", "Libya", "Poland"],
        status: "Active"
    },
    {
        id: 65,
        name: "MQ-1C Gray Eagle",
        type: "Combat Drone",
        origin: "United States",
        coords: [31.3278, -110.3607],
        image: "assets/MQ_1C.jpg",
        specs: { speed: "310 km/h", armament: "AGM-114 Hellfire", operationalRange: "400 km" },
        inService: 2009,
        users: ["United States"],
        status: "Active",
        fact: "The MQ-1C Gray Eagle can stay airborne for up to 25 hours and is powered by a heavy-fuel engine that can burn diesel or jet fuel.",
        imageCredit: "Photo Courtesy of U.S. Army / Public Domain — image modified (symbols removed)"
    },
    {
        id: 66,
        name: "MQ-9 Reaper",
        type: "Combat Drone",
        origin: "United States",
        coords: [36.5860, -121.8556],
        image: "assets/MQ_9_Reaper.jpg",
        specs: { speed: "482 km/h", armament: "Hellfire, GBU-12", operationalRange: "1,850 km" },
        inService: 2007,
        users: ["United States", "UK", "France", "Italy"],
        status: "Active",
        imageCredit: "Photo: Lt. Col. Leslie Pratt / U.S. Air Force / Public Domain"
    },
    {
        id: 67,
        name: "Shahed-136",
        type: "Combat Drone",
        origin: "Iran",
        coords: [35.6892, 51.3890],
        image: "assets/Shahed_136.png",
        specs: { speed: "185 km/h", armament: "40kg warhead", operationalRange: "2,000 km" },
        inService: 2021,
        users: ["Iran", "Russia"],
        status: "Active",
        imageCredit: "Photo: trimental / Sketchfab / CC BY 4.0"
    },
    {
        id: 68,
        name: "Wing Loong II",
        type: "Combat Drone",
        origin: "China",
        coords: [39.9042, 116.4074],
        image: "assets/Wing_Loong2.jpg",
        specs: { speed: "370 km/h", armament: "BA-7, YZ-212", operationalRange: "4,000 km" },
        inService: 2017,
        users: ["China", "UAE", "Saudi Arabia", "Pakistan"],
        status: "Active",
        imageCredit: "Photo: Mztourist / Wikimedia Commons / CC BY-SA 4.0"
    },
    {
        id: 69,
        name: "Eleron-3SW",
        type: "Reconnaissance Drone",
        origin: "Russia",
        coords: [55.7558, 37.6173],
        image: "assets/Eleron_3SW.jpg",
        specs: { speed: "130 km/h", armament: "Unarmed (EO/IR)", operationalRange: "25 km" },
        inService: 2012,
        users: ["Russia"],
        status: "Active",
        fact: "The Eleron-3SW is a compact tactical reconnaissance UAV weighing only 5.3 kg, launched via catapult and recovered by parachute. It can operate for up to 100 minutes and carries modular payloads including thermal imaging cameras and radio jammers.",
        imageCredit: "Photo: Ministry of Defence of the Russian Federation / Mil.ru / CC BY 4.0"
    },
    {
        id: 70,
        name: "Orlan-10",
        type: "Reconnaissance Drone",
        origin: "Russia",
        coords: [59.9343, 30.3351],
        image: "assets/Orlan_10.jpg",
        specs: { speed: "150 km/h", armament: "Unarmed (ISR)", operationalRange: "600 km" },
        inService: 2010,
        users: ["Russia", "Kazakhstan", "Myanmar", "Syria", "Uzbekistan", "Kyrgyzstan"],
        status: "Active",
        fact: "The Orlan-10 is Russia's most widely-used reconnaissance drone with exceptional 16-hour endurance. Launched by catapult and recovered by parachute, it has been extensively deployed in Ukraine and Syria for intelligence gathering and artillery spotting.",
        imageCredit: "Photo: Mike1979 Russia / Wikimedia Commons / CC BY-SA 4.0"
    },
    {
        id: 177,
        name: "RQ-7B Shadow",
        type: "Reconnaissance Drone",
        origin: "United States",
        coords: [39.4143, -77.4105], // AAI Corporation, Hunt Valley, Maryland
        image: "assets/RQ7.jpg",
        specs: { speed: "222 km/h", armament: "Unarmed (EO/IR/Laser)", operationalRange: "125 km" },
        inService: 2002,
        users: ["United States", "Australia", "Jordan", "Romania", "Turkey"],
        status: "Active",
        fact: "The RQ-7B Shadow is the US Army's primary tactical UAV, providing brigade-level intelligence, surveillance, and reconnaissance (ISR). It carries electro-optical and infrared cameras with a laser designator and can relay live video to ground troops in real time. It is launched from a trailer-mounted catapult and recovered using an arresting wire system — one of the few UAVs designed for short-field arrested landings.",
        recognitionFeatures: {
            wings: "High-wing monoplane with twin tail booms extending from a straight, unswept wing. Winglets on outer wing tips.",
            engine: "Single pusher propeller engine mounted at the rear of the central pod nacelle.",
            fuselage: "Short central pod/nacelle housing sensors with a bulbous nose. No undercarriage — launches via catapult.",
            tail: "Twin tail booms with a rectangular horizontal stabilizer connecting both booms. Small vertical fins at each boom tip."
        },
        imageCredit: "Photo: Staff Sgt. Malcolm Cohens-Ashley, 40th Public Affairs Detachment / U.S. Army / Public Domain"
    },
    {
        id: 71,
        name: "Ghost Bat (MQ-28)",
        type: "Combat Drone",
        origin: "Australia",
        coords: [-25.2744, 133.7751],
        image: "assets/Ghost_Bat.jpg",
        specs: { speed: "Mach 0.9", armament: "Modular Bay", operationalRange: "3700 km" },
        inService: 2021,
        users: ["Australia"],
        status: "Active",
        fact: "The MQ-28 Ghost Bat is Australia's first domestically-designed combat aircraft in over 50 years. Operating as a 'loyal wingman' with AI capabilities, it can fly autonomously at high subsonic speeds, carry 500kg of modular payloads, and recently fired its first AMRAAM missile in December 2024.",
        imageCredit: "Photo: HoHo3143 / Wikimedia Commons / CC BY-SA 4.0"
    },

    // === ASSAULT RIFLES ===
    {
        id: 72,
        name: "M4A1 Carbine",
        type: "Assault Rifle",
        origin: "United States",
        coords: [41.4925, -72.8231],
        image: "assets/m4a1_carbine.jpg",
        specs: { speed: "N/A", armament: "5.56x45mm NATO", effectiveRange: "500 m" },
        inService: 1994,
        users: ["United States", "NATO allies", "80+ countries worldwide"],
        status: "Active",
        imageCredit: "Photo: PEO Soldier / Derivative: MathKnight / Wikimedia Commons / Public Domain"
    },
    {
        id: 73,
        name: "AK-74M",
        type: "Assault Rifle",
        origin: "Russia",
        coords: [56.8431, 60.6454],
        images: [
            "assets/ak74m_rifle.jpg",
            "assets/AK74M_Bravo.jpg"
        ],
        imageCredits: [
            "Photo: Vitaly Kuzmin / Wikimedia Commons / CC BY-SA 4.0",
            "Photo: Pkm-betta / Wikimedia Commons / CC0 1.0"
        ],
        specs: { speed: "N/A", armament: "5.45x39mm", effectiveRange: "500 m" },
        inService: 1991,
        users: ["Russia", "Belarus", "Kazakhstan", "Former Soviet states"],
        status: "Active"
    },
    {
        id: 74,
        name: "AK-203",
        type: "Assault Rifle",
        origin: "Russia / India",
        coords: [55.7558, 37.6173],
        image: "assets/AK_203.png",
        specs: { speed: "N/A", armament: "7.62x39mm", effectiveRange: "800 m" },
        inService: 2019,
        users: ["Russia", "India"],
        status: "Active",
        fact: "The AK-203 is the latest Kalashnikov variant chambered in 7.62x39mm. India is producing over 600,000 rifles at its Korwa facility through a joint venture with Russia, replacing the INSAS rifle as the Indian armed forces' standard weapon.",
        imageCredit: "Photo: Japan Ground Self-Defense Force / Wikimedia Commons / CC BY 4.0"
    },
    {
        id: 75,
        name: "AK-47",
        type: "Assault Rifle",
        origin: "Russia",
        coords: [56.8431, 60.6454],
        image: "assets/AK47.jpg",
        specs: { speed: "N/A", armament: "7.62x39mm", effectiveRange: "350 m" },
        inService: 1949,
        users: ["Russia", "100+ countries worldwide"],
        status: "Active",
        fact: "Designer Mikhail Kalashnikov initially wanted to build farm equipment, not weapons, but was inspired to create the AK-47 after being wounded in WWII and hearing soldiers complain about their rifles.",
        imageCredit: "Photo: spaxspore (Kirk Smith) / DeviantArt / CC BY 3.0"
    },
    {
        id: 76,
        name: "Steyr AUG",
        type: "Assault Rifle",
        origin: "Austria",
        coords: [47.5162, 14.5501],
        image: "assets/Steyr_AUG.jpg",
        specs: { speed: "N/A", armament: "5.56x45mm NATO", effectiveRange: "300 m" },
        inService: 1978,
        users: ["Austria", "Australia", "New Zealand", "Ireland", "Malaysia", "Saudi Arabia", "40+ countries"],
        status: "Active",
        fact: "The Steyr AUG is one of the most successful bullpup rifles ever designed. First adopted by Austria in 1978, it features a modular design allowing quick barrel changes and has been adopted by over 40 countries. Australia's modified version, the F88 Austeyr, is their standard service rifle.",
        imageCredit: "Photo: MoserB / Wikimedia Commons / Public Domain"
    },
    {
        id: 77,
        name: "Type 88 (North Korea)",
        type: "Assault Rifle",
        origin: "North Korea",
        coords: [39.0392, 125.7625],
        image: "assets/Type_88.jpg",
        specs: { speed: "N/A", armament: "5.45x39mm", effectiveRange: "440 m" },
        inService: 1988,
        users: ["North Korea"],
        status: "Active",
        imageCredit: "Photo: Nomansland511 / Wikimedia Commons / CC BY-SA 3.0"
    },
    {
        id: 78,
        name: "KH-2002 Khaybar",
        type: "Assault Rifle",
        origin: "Iran",
        coords: [32.4279, 53.6880],
        image: "assets/KH-2002.jpg",
        specs: { speed: "N/A", armament: "5.56x45mm NATO", effectiveRange: "450 m" },
        inService: 2004,
        users: ["Iran"],
        status: "Active",
        imageCredit: "Photo: Hossein Falemi / Fars Media Corporation / CC BY 4.0 — image modified (symbols removed)"
    },
    {
        id: 79,
        name: "FN SCAR",
        type: "Assault Rifle",
        origin: "Belgium",
        coords: [50.6698, 5.6179],
        image: "assets/FN_SCAR.png",
        specs: { speed: "N/A", armament: "5.56x45mm / 7.62x51mm", effectiveRange: "600 m" },
        inService: 2004,
        users: ["Belgium", "United States", "France", "Germany", "Japan", "South Korea"],
        status: "Active",
        fact: "The SCAR (Special Operations Forces Combat Assault Rifle) was designed specifically for US Special Operations Command and features a modular design that allows barrels to be swapped in minutes.",
        imageCredit: "Photo: Sgt. Patrik Orcutt / U.S. Government / Public Domain"
    },
    {
        id: 80,
        name: "FAMAS",
        type: "Assault Rifle",
        origin: "France",
        coords: [45.4397, 4.3872],
        image: "assets/FAMAS.jpg",
        specs: { speed: "N/A", armament: "5.56x45mm", effectiveRange: "300 m" },
        inService: 1978,
        users: ["France", "UAE", "Senegal", "Indonesia"],
        status: "Active - Being Replaced",
        fact: "Known as 'Le Clairon' (The Bugle) due to its distinctive shape, the FAMAS is a bullpup rifle that has been the standard issue service rifle of the French military since 1978.",
        imageCredit: "Photo: U.S. Marine Corps photo by Staff Sgt. Akeel Austin / Public Domain"
    },
    {
        id: 81,
        name: "IWI Tavor",
        type: "Assault Rifle",
        origin: "Israel",
        coords: [32.0853, 34.7818],
        image: "assets/IWI_Tavor.jpg",
        specs: { speed: "N/A", armament: "5.56x45mm", effectiveRange: "500 m" },
        inService: 2001,
        users: ["Israel", "India", "Thailand", "Vietnam", "Ukraine"],
        status: "Active",
        fact: "The Tavor is a bullpup rifle that was selected as the standard infantry weapon of the IDF, replacing the M16/M4 family, and has been exported to over 25 countries.",
        imageCredit: "Photo: Zajje / Wikimedia Commons / CC BY-SA 4.0"
    },
    {
        id: 82,
        name: "SA80 (L85)",
        type: "Assault Rifle",
        origin: "United Kingdom",
        coords: [51.5074, -0.1278],
        images: [
            "assets/SA80.jpg",
            "assets/SA80_Bravo.jpg"
        ],
        imageCredits: [
            "Photo: Mike Weston ABIPP/MOD / OGL v1.0",
            "Photo: Steve Dock/MOD / OGL v1.0"
        ],
        specs: { speed: "N/A", armament: "5.56x45mm", effectiveRange: "400 m" },
        inService: 1987,
        users: ["United Kingdom", "Jamaica"],
        status: "Active",
        fact: "The SA80 (L85) is the standard issue service rifle of the British Armed Forces. After initial reliability issues, it was significantly upgraded by Heckler & Koch into the highly reliable A2 and A3 variants."
    },
    {
        id: 83,
        name: "HK G36",
        type: "Assault Rifle",
        origin: "Germany",
        coords: [51.2993, 8.4168],
        image: "assets/G36.jpg",
        specs: { speed: "N/A", armament: "5.56x45mm", effectiveRange: "800 m" },
        inService: 1997,
        users: ["Germany", "Spain", "Saudi Arabia", "United Kingdom"],
        status: "Active",
        imageCredit: "Photo: KASP / Wikimedia Commons / CC BY-SA 4.0"
    },
    {
        id: 116,
        name: "HK416",
        type: "Assault Rifle",
        origin: "Germany",
        coords: [51.2993, 8.4168],
        images: [
            "assets/HK416.jpg",
            "assets/HK416_Bravo.jpg"
        ],
        imageCredits: [
            "Photo: Dybdal / Wikimedia Commons / CC BY-SA 2.0",
            "Photo: Armée Française - Opérations militaires / defense.gouv.fr / Etalab-2.0"
        ],
        specs: { speed: "N/A", armament: "5.56x45mm NATO", effectiveRange: "600 m" },
        inService: 2005,
        users: ["United States", "France", "Norway", "Germany", "Australia", "Netherlands", "20+ countries"],
        status: "Active",
        fact: "The HK416 is an improved variant of the M4 carbine developed by Heckler & Koch as a more reliable alternative. Used by elite units including US Delta Force and SEAL Team Six, it gained fame as the weapon used in Operation Neptune Spear. France adopted it to replace the FAMAS, and the US Marines use a variant designated M27 IAR."
    },
    {
        id: 84,
        name: "FX-05 Xiuhcoatl",
        type: "Assault Rifle",
        origin: "Mexico",
        coords: [19.4326, -99.1332],
        images: [
            "assets/FX_05.jpg",
            "assets/FX05_Bravo.jpg"
        ],
        imageCredits: [
            "Photo: Shdowcrwler / Wikimedia Commons / CC BY-SA 3.0",
            "Photo: Brian Armstrong / Wikimedia Commons / CC BY-SA 3.0"
        ],
        specs: { speed: "N/A", armament: "5.56x45mm", effectiveRange: "800 m" },
        inService: 2008,
        users: ["Mexico"],
        status: "Active",
        fact: "The FX-05 'Xiuhcoatl' (Fire Serpent) is an indigenous Mexican rifle designed to replace the G3. It features a design that resembles the G36 but uses a distinct internal mechanism."
    },
    {
        id: 117,
        name: "Vektor LM5 (R5)",
        type: "Assault Rifle",
        origin: "South Africa",
        coords: [-25.7479, 28.2293],
        image: "assets/Vektor_LM5.jpg",
        specs: { speed: "N/A", armament: "5.56x45mm NATO", effectiveRange: "500 m" },
        inService: 1980,
        users: ["South Africa"],
        status: "Active",
        fact: "The Vektor R5 is a South African carbine based on the Israeli Galil, adapted for local conditions. The LM5 is the semi-automatic civilian version. It served as the standard issue carbine for the South African Defence Force and remains in active service, with a 2016 modernization contract extending its lifespan to at least 2020.",
        imageCredit: "Photo: Craig Lee courtesy of gunsite.co.za / CC BY-SA 3.0"
    },

    // === ARMOURED PERSONNEL CARRIERS ===
    {
        id: 85,
        name: "Humvee (HMMWV)",
        type: "Light Utility Vehicle",
        origin: "United States",
        coords: [39.8283, -98.5795],
        image: "assets/HUMVEE.jpg",
        specs: { speed: "105 km/h", armament: "Various MGs/Launchers", operationalRange: "400 km" },
        inService: 1985,
        users: ["United States", "Afghanistan", "Iraq", "Jordan", "Kuwait", "Kenya", "Honduras", "50+ countries"],
        status: "Active",
        fact: "The iconic Humvee (High Mobility Multipurpose Wheeled Vehicle) replaced multiple older vehicles when it entered service in 1985. With over 50 countries using it, the versatile 4x4 can be armed with weapons from M249 SAWs to TOW missiles and serves in roles from troop transport to ambulance.",
        imageCredit: "Photo: Tobias Nordhausen / Wikimedia Commons / CC BY 2.0"
    },
    {
        id: 86,
        name: "Foxhound",
        type: "MRAP Vehicle",
        origin: "United Kingdom",
        coords: [51.5074, -0.1278],
        image: "assets/Foxhound.jpg",
        specs: { speed: "110 km/h", armament: "Optional 7.62mm MGs", operationalRange: "600 km" },
        inService: 2012,
        users: ["United Kingdom"],
        status: "Active",
        fact: "The Foxhound LPPV features a V-shaped hull for mine blast protection and modular design allowing the engine to be swapped in just 20-30 minutes. Deployed to Afghanistan and Bosnia, it can carry 6 personnel and reach speeds of 110 km/h while providing MRAP-level protection.",
        imageCredit: "Photo: Airwolfhound / Wikimedia Commons / CC BY-SA 2.0"
    },
    {
        id: 87,
        name: "Jackal",
        type: "Patrol Vehicle",
        origin: "United Kingdom",
        coords: [51.5074, -0.1278],
        image: "assets/Jackal.jpg",
        specs: { speed: "130 km/h", armament: "HMG/GMG/GPMG", operationalRange: "800 km" },
        inService: 2007,
        users: ["United Kingdom"],
        status: "Active",
        fact: "The Jackal MWMIK (Mobility Weapon-Mounted Installation Kit) is a high-speed reconnaissance vehicle designed by Supacat for rapid assault and fire support. With a top speed of 130 km/h and 800 km range, it made its combat debut in Afghanistan in 2008, replacing the Land Rover WMIK.",
        imageCredit: "Photo: Supacat / Wikimedia Commons / CC BY-SA 4.0"
    },
    {
        id: 88,
        name: "Oshkosh M-ATV",
        type: "MRAP Vehicle",
        origin: "United States",
        coords: [39.8283, -98.5795],
        image: "assets/Oshkosh.jpg",
        specs: { speed: "105 km/h", armament: "M2/M240/Mk19", operationalRange: "510 km" },
        inService: 2009,
        users: ["United States", "UAE", "Saudi Arabia", "Croatia", "Ukraine", "Portugal", "Uruguay"],
        status: "Active",
        fact: "The Oshkosh M-ATV combines exceptional mobility with MRAP protection. Featuring a 370hp turbodiesel and advanced TAK-4 suspension with 16 inches of wheel travel, it can maintain 65 mph even with flat tires and traverse terrain impossible for traditional MRAPs.",
        imageCredit: "Photo: PEOSoldier / U.S. Army / Public Domain"
    },
    {
        id: 89,
        name: "Bushmaster PMV",
        type: "APC",
        origin: "Australia",
        coords: [-36.7570, 144.2786],
        image: "assets/Bushmaster.jpg",
        specs: { speed: "100 km/h", armament: "7.62mm/12.7mm RWS", operationalRange: "800 km" },
        inService: 1997,
        users: ["Australia", "Netherlands", "United Kingdom", "Japan", "Ukraine", "Indonesia", "Jamaica", "Fiji", "New Zealand"],
        status: "Active",
        fact: "The Australian-designed Bushmaster Protected Mobility Vehicle is world-renowned for its V-shaped hull, which deflects blast energy away from the crew, saving countless lives in Iraq and Afghanistan.",
        imageCredit: "Photo: Ministerie van Defensie / Wikimedia Commons / CC BY-SA 4.0"
    },
    {
        id: 90,
        name: "BAE ACV",
        type: "APC",
        origin: "United States",
        coords: [39.8283, -98.5795],
        images: [
            "assets/BAE_ACV.jpg",
            "assets/BAE_ACV_Bravo.jpg"
        ],
        specs: { speed: "105 km/h", armament: "30mm Cannon", operationalRange: "520 km" },
        inService: 2020,
        users: ["United States"],
        status: "Active",
        fact: "The BAE ACV-30 replaces the aging AAV7 in U.S. Marine Corps service. Capable of swimming at 6 knots and carrying 13 Marines, it features an unmanned turret with 30mm Bushmaster cannon and can reach 65 mph on land while maintaining amphibious assault capabilities.",
        imageCredits: [
            "Photo: Kaitlin Kelly / U.S. Marine Corps / Public Domain",
            "Photo: Amphibious Combat Vehicle 180619-M-Z7999-203.jpg / Wikimedia Commons / Public Domain"
        ]
    },
    // Chinese APCs

    {
        id: 91,
        name: "ZBD-04",
        type: "IFV",
        origin: "China",
        coords: [35.8617, 104.1954],
        image: "assets/ZBD_04.jpg",
        specs: { speed: "75 km/h", armament: "30mm cannon", operationalRange: "600 km" },
        inService: 2004,
        users: ["China"],
        status: "Active",
        fact: "The ZBD-04 is amphibious and can swim at speeds up to 30 km/h, making it one of the fastest amphibious IFVs in the world.",
        imageCredit: "Photo: Dam / Flickr / CC BY 2.0"
    },
    {
        id: 92,
        name: "ZBL-08",
        type: "APC",
        origin: "China",
        coords: [35.8617, 104.1954],
        image: "assets/ZBL_08.jpg",
        specs: { speed: "100 km/h", armament: "30mm cannon", operationalRange: "800 km" },
        inService: 2009,
        users: ["China", "Venezuela"],
        status: "Active",
        fact: "The ZBL-09 is an 8x8 wheeled APC that forms the backbone of China's rapid deployment forces, with over 1,000 units produced.",
        imageCredit: "Photo: Mil.ru / Ministry of Defence of the Russian Federation / CC BY 4.0"
    },
    {
        id: 93,
        name: "ZSD 89",
        type: "IFV",
        origin: "China",
        coords: [35.8617, 104.1954],
        image: "assets/ZSD_89.jpg",
        specs: { speed: "65 km/h", armament: "73mm gun", operationalRange: "500 km" },
        inService: 1999,
        users: ["China", "Ethiopia", "Nigeria", "Sri Lanka", "Zimbabwe"],
        status: "Active",
        imageCredit: "Photo: Chamal Pathirana / Wikimedia Commons / CC BY-SA 3.0"
    },

    // US IFVs
    {
        id: 94,
        name: "M2 Bradley",
        type: "IFV",
        origin: "United States",
        coords: [39.8283, -98.5795],
        image: "assets/Bradley_Fighting_Vehicle.jpg",
        specs: { speed: "66 km/h", armament: "25mm Bushmaster, TOW", operationalRange: "400 km" },
        inService: 1981,
        users: ["United States", "Saudi Arabia", "Croatia", "Lebanon", "Ukraine"],
        status: "Active",
        fact: "The M2 Bradley is amphibious and can reach speeds of 7.2 km/h in water, powered by its tracks, making it capable of crossing rivers and water obstacles.",
        imageCredit: "Photo: Sgt. Timothy Kingston / U.S. Army / Public Domain"
    },
    {
        id: 95,
        name: "Stryker ICV",
        type: "APC",
        origin: "United States",
        coords: [47.1158, -122.5695],
        image: "assets/Stryker.jpg",
        specs: { speed: "100 km/h", armament: "M2 .50 Cal OR MK19", operationalRange: "500 km" },
        inService: 2002,
        users: ["United States", "Thailand", "North Macedonia", "Ukraine"],
        status: "Active",
        fact: "The Stryker family of vehicles is named after two U.S. soldiers who posthumously received the Medal of Honor: PFC Stuart S. Stryker (WWII) and SP4 Robert F. Stryker (Vietnam).",
        imageCredit: "Photo: U.S. Army / Public Domain"
    },
    {
        id: 96,
        name: "Boxer",
        type: "APC",
        origin: "Germany",
        coords: [51.1657, 10.4515],
        image: "assets/Boxer.jpg",
        specs: { speed: "105 km/h", armament: "30mm cannon", operationalRange: "1000 km" },
        inService: 2009,
        users: ["Germany", "Netherlands", "Lithuania", "Australia", "United Kingdom", "Qatar", "Slovenia"],
        status: "Active",
        fact: "The Boxer features a modular design with interchangeable mission modules, allowing it to serve in roles from infantry transport to battlefield ambulance, reconnaissance, or command vehicle.",
        imageCredit: "Photo: Boevaya mashina / Wikimedia Commons / CC BY-SA 4.0 — image modified (symbols removed)"
    },
    {
        id: 154,
        name: "B1 Centauro",
        type: "Tank Destroyer",
        origin: "Italy",
        coords: [41.9028, 12.4964],
        images: [
            "assets/B1_Centauro.jpg",
            "assets/B1_Centauro_Bravo.jpg"
        ],
        imageCredits: [
            "Photo: Italian Army / esercito.difesa.it / CC BY 2.5",
            "Photo: Mario Antonio Pena Zapatería / Flickr / CC BY-SA 2.0"
        ],
        specs: { speed: "105 km/h", armament: "105mm OTO Melara", operationalRange: "800 km" },
        inService: 1991,
        users: ["Italy", "Spain", "Jordan", "Oman", "Ukraine"],
        status: "Active",
        fact: "The B1 Centauro is a wheeled 8x8 tank destroyer developed by IVECO and OTO Melara for the Italian Army. Its 105mm rifled gun is compatible with standard NATO ammunition and features the same TURMS fire control system used on the Ariete MBT. With a top speed of 105 km/h and 800km range, it offers exceptional strategic mobility - Italy produced 400 units while Spain operates 88 as the VRC-105."
    },
    {
        id: 152,
        name: "VBCI",
        type: "IFV",
        origin: "France",
        coords: [48.8049, 2.1204],
        images: [
            "assets/VBCI.jpg",
            "assets/VBCI_Bravo.jpg"
        ],
        specs: { speed: "100 km/h", armament: "25mm autocannon, 7.62mm MG", range: "750 km" },
        inService: 2008,
        users: ["France", "Qatar"],
        status: "Active",
        fact: "The VBCI (Véhicule Blindé de Combat d'Infanterie) is a French wheeled infantry fighting vehicle designed to replace the tracked AMX-10P. It features a modular aluminum hull with add-on titanium armor and provides high mobility and protection for infantry squads.",
        recognitionFeatures: {
            wheels: "8x8 configuration. Large tires with central tire inflation system.",
            hull: "Boxy, aluminum alloy hull with add-on armored modules. Driver front left, engine front right.",
            armament: "One 25mm M811 autocannon and a coaxial 7.62mm machine gun.",
            turret: "One-man Dragar turret located centrally on the hull."
        },
        imageCredits: [
            "Photo: Selvejp / Wikimedia Commons / CC BY-SA 3.0",
            "Photo: Kevin.B / Wikimedia Commons / CC BY-SA 4.0"
        ]
    },
    {
        id: 153,
        name: "Borsuk",
        type: "IFV",
        origin: "Poland",
        coords: [52.2297, 21.0122],
        images: [
            "assets/Borsuk.jpg",
            "assets/Borsuk_Bravo.jpg"
        ],
        specs: { speed: "65 km/h", armament: "30mm Mk44S, 2x Spike-LR", operationalRange: "600 km" },
        inService: 2023,
        users: ["Poland"],
        status: "Active",
        fact: "The Borsuk is a fully amphibious modern IFV featuring a remote-controlled ZSSW-30 turret and composite rubber tracks, designed to replace Poland's Soviet-era BWP-1 fleet.",
        recognitionFeatures: {
            wheels: "6 road wheels with composite rubber tracks.",
            hull: "High freeboard for buoyancy. Swim vanes/wave deflector on bow.",
            armament: "30mm Mk44S Bushmaster II in unmanned ZSSW-30 turret. Spike-LR ATGM launcher on right side.",
            turret: "Unmanned ZSSW-30 turret with panoramic commander's sight on top."
        },
        imageCredits: [
            "Photo: U.S. Army National Guard photo by Staff Sgt. Matthew A. Foster / Public Domain",
            "Photo: Michal Derela / Wikimedia Commons / CC BY-SA 4.0"
        ]
    },
    {
        id: 154,
        name: "K808 White Tiger",
        type: "APC",
        origin: "South Korea",
        coords: [37.5665, 126.9780],
        images: [
            "assets/K808.jpg",
            "assets/K808_Bravo.jpg"
        ],
        specs: { speed: "100 km/h", armament: "12.7mm HMG or 40mm AGL", operationalRange: "700 km" },
        inService: 2016,
        users: ["South Korea", "Peru"],
        status: "Active",
        fact: "The K808 White Tiger is an 8x8 amphibious wheeled armored personnel carrier developed by Hyundai Rotem. It features run-flat tires, a central tire inflation system, and water jets for crossing rivers, replacing older tracked vehicles in the ROK Army.",
        recognitionFeatures: {
            wheels: "8x8 configuration with run-flat tires.",
            hull: "Welded steel armor. Driver front left, engine front right.",
            armament: "Typically a shielded .50 caliber machine gun or 40mm grenade launcher.",
            turret: "Usually a protected gunner station or RCWS."
        },
        imageCredits: [
            "Photo: U.S. Army Reserve Spc. Jason Palacios / Public Domain — image modified (flag removed)",
            "Photo: ROK Ministry of National Defense / Wikimedia Commons / KOGL Type 1"
        ]
    },
    {
        id: 155,
        name: "Patria AMV",
        type: "APC",
        origin: "Finland",
        coords: [60.1699, 24.9384],
        image: "assets/Patria_AMV.jpg",
        specs: { speed: "100 km/h", armament: "Modular (up to 105mm/120mm)", operationalRange: "800 km" },
        inService: 2004,
        users: ["Finland", "Poland", "Slovenia", "Croatia", "South Africa", "UAE"],
        status: "Active",
        fact: "The Patria AMV (Armored Modular Vehicle) is a multi-role 8x8 military vehicle known for its modular design, allowing it to be fitted with various weapon systems ranging from machine guns to 120mm cannons.",
        recognitionFeatures: {
            wheels: "8x8 configuration with independent hydropneumatic suspension.",
            hull: "High ground clearance and all-welded steel hull.",
            design: "Driver front-left, engine front-right. Large rear ramp for troops.",
            modular: "Roof can accept various turrets (remote weapon stations, medium caliber turrets, or heavy cannon systems)."
        },
        imageCredit: "Photo: Ex13 / Wikimedia Commons / CC BY-SA 3.0"
    },
    {
        id: 97,
        name: "Puma",
        type: "IFV",
        origin: "Germany",
        coords: [51.1657, 10.4515],
        image: "assets/Puma.jpg",
        specs: { speed: "70 km/h", armament: "30mm MK30-2", operationalRange: "600 km" },
        inService: 2015,
        users: ["Germany"],
        status: "Active",
        fact: "The Puma is one of the world's best-protected IFVs, featuring modular armor that can be up-armored for combat or removed for air transport.",
        imageCredit: "Photo: Boevaya mashina / Wikimedia Commons / CC BY-SA 4.0 — image modified (symbols removed)"
    },
    {
        id: 143,
        name: "CV90",
        type: "IFV",
        origin: "Sweden / Czech Republic / Lithuania",
        coords: [60.1282, 18.6435],
        images: [
            "assets/CV90.jpg",
            "assets/CV90_Bravo.jpeg"
        ],
        imageCredits: [
            "Photo: BAE Systems / Public Domain",
            "Photo: Andrii Nikolaienko / Pexels / CC0 1.0"
        ],
        specs: { speed: "70 km/h", armament: "30mm/35mm/40mm cannon", operationalRange: "300 km" },
        inService: 1993,
        users: ["Sweden", "Norway", "Finland", "Denmark", "Netherlands", "Estonia", "Switzerland", "Czech Republic", "Slovakia", "Ukraine"],
        status: "Active",
        fact: "The CV90 (Combat Vehicle 90) is a highly successful Swedish infantry fighting vehicle family developed by BAE Systems Hägglunds. While originally built in Sweden, production is now decentralized with assembly in Czech Republic and planned manufacturing in Lithuania. The platform is extremely modular, with variants mounting 30mm, 35mm, or 40mm autocannons, and even 105mm/120mm guns for light tank configurations. Over 1,300 have been produced and it serves in 10 countries."
    },
    {
        id: 98,
        name: "AJAX",
        type: "IFV",
        origin: "United Kingdom",
        coords: [55.3781, -3.4360],
        images: [
            "assets/AJAX.jpg",
            "assets/Ajax_Bravo.jpg"
        ],
        imageCredits: [
            "Photo: Richard Watt / MOD / OGL v1.0",
            "Photo: Airwolfhound / Flickr / CC BY-SA 2.0"
        ],
        specs: { speed: "70 km/h", armament: "40mm CTAS40", operationalRange: "500 km" },
        inService: 2025,
        users: ["United Kingdom"],
        status: "Active",
        fact: "The AJAX features advanced digital architecture with 360-degree situational awareness systems, replacing the British Army's aging Combat Vehicle Reconnaissance (Tracked) fleet."
    },
    {
        id: 99,
        name: "Namer",
        type: "APC",
        origin: "Israel",
        coords: [31.0461, 34.8516],
        image: "assets/NAMER.jpg",
        specs: { speed: "60 km/h", armament: "12.7mm MG", operationalRange: "500 km" },
        inService: 2008,
        users: ["Israel"],
        status: "Active",
        fact: "The Namer (Hebrew for 'leopard') is based on the Merkava tank chassis and is one of the world's most heavily armored APCs. Weighing 60 tons with advanced armor protection, it can carry 9 troops plus 3 crew and was specifically designed for urban combat operations.",
        imageCredit: "Photo: Ishaiabigail / Wikimedia Commons / CC BY-SA 4.0"
    },
    {
        id: 309,
        name: "Eitan",
        type: "APC",
        origin: "Israel",
        coords: [31.0461, 34.8516],
        images: [
            "assets/Eytan.jpg",
            "assets/Eytan_Bravo.jpg"
        ],
        specs: { speed: "90 km/h", armament: "12.7mm Samson RCWS", operationalRange: "1,000 km" },
        inService: 2023,
        users: ["Israel"],
        status: "Active",
        fact: "The Eitan (Hebrew for 'strong' or 'steadfast') is the IDF's first domestically developed wheeled APC, designed to replace the ageing M113 fleet. Its 8x8 platform was purpose-built to be cheaper to operate and faster to deploy than tracked alternatives, while still incorporating the Iron Fist Light Decoupled active protection system — the same family used on the Namer. It saw its combat debut in Gaza just months after entering service with the Nahal Brigade in May 2023, making it one of the most rapidly combat-tested new AFVs in recent history.",
        recognitionFeatures: {
            wheels: "8 large high-profile wheels (8x8) in a four-axle layout. Pronounced, heavily armoured wheel arches that flare outward significantly — a very distinctive silhouette compared to other 8x8 APCs.",
            hull: "Extremely tall and boxy hull with a near-vertical front plate. Much higher profile than the Stryker or Boxer. Multi-layered NERA composite armour with visible add-on plates. Rear ramp for troop exit.",
            armament: "Samson Remote Controlled Weapon Station (RCWS) on the roof, typically mounting a 12.7mm M2 Browning. The RCWS has no crew inside — it is operated remotely from within the vehicle.",
            turret: "No traditional turret — the roof-mounted Samson RCWS is unmanned and relatively low-profile. Iron Fist active protection system launchers are visible on the hull corners."
        },
        imageCredits: [
            "Photo: Zachi Evenor / Wikimedia Commons / CC BY 2.0",
            "Photo: MoserB / Wikimedia Commons / CC0 1.0"
        ]
    },

    // Russian APCs
    {
        id: 100,
        name: "BTR-82A",
        type: "APC",
        origin: "Russia",
        coords: [61.5240, 105.3188],
        image: "assets/BTR_82a.jpg",
        specs: { speed: "80 km/h", armament: "30mm 2A72", operationalRange: "600 km" },
        inService: 2013,
        users: ["Russia", "Kazakhstan", "Belarus"],
        status: "Active",
        fact: "The BTR-82A features an upgraded 30mm autocannon and advanced fire control system, making it significantly more lethal than previous BTR variants.",
        imageCredit: "Photo: Vitaly V. Kuzmin / Wikimedia Commons / CC BY-SA 4.0"
    },
    {
        id: 101,
        name: "BMP-2",
        type: "IFV",
        origin: "Russia",
        coords: [61.5240, 105.3188],
        image: "assets/BMP_2.jpg",
        specs: { speed: "65 km/h", armament: "30mm 2A42", operationalRange: "600 km" },
        inService: 1980,
        users: ["Russia", "India", "Finland", "Iran"],
        status: "Active",
        fact: "The BMP-2 replaced the 73mm gun of the BMP-1 with a versatile 30mm autocannon capable of high-elevation fire against helicopters and low-flying aircraft.",
        imageCredit: "Photo: Falshuivomonetchik / Wikimedia Commons / Public Domain"
    },
    {
        id: 102,
        name: "BMP-3",
        type: "IFV",
        origin: "Russia",
        coords: [61.5240, 105.3188],
        image: "assets/BMP_3.jpg",
        specs: { speed: "70 km/h", armament: "100mm gun", operationalRange: "600 km" },
        inService: 1987,
        users: ["Russia", "UAE", "Kuwait", "South Korea"],
        status: "Active",
        fact: "The BMP-3 is unique among IFVs with its 100mm gun that can fire both conventional rounds and anti-tank guided missiles.",
        imageCredit: "Photo: Vovvan / Wikimedia Commons / CC BY 3.0"
    },
    {
        id: 103,
        name: "BTR-90",
        type: "APC",
        origin: "Russia",
        coords: [61.5240, 105.3188],
        image: "assets/BTR_90.jpg",
        specs: { speed: "100 km/h", armament: "30mm 2A42", operationalRange: "800 km" },
        inService: 2004,
        users: ["Russia"],
        status: "Limited Service",
        fact: "Despite being one of the most advanced Russian APCs, the BTR-90 was produced in limited numbers due to high costs.",
        imageCredit: "Photo: Vitaly V. Kuzmin / Wikimedia Commons / CC BY-SA 4.0"
    },
    {
        id: 179,
        name: "Otokar Tulpar",
        type: "IFV",
        origin: "Turkey",
        coords: [40.7303, 29.9880], // Otokar facility, Sakarya
        image: "assets/TULPAR.jpg",
        specs: { speed: "70 km/h", armament: "30mm cannon / ATGM", operationalRange: "600 km" },
        inService: 2015,
        users: ["Turkey"],
        status: "Prototype / Trials",
        recognitionFeatures: {
            wheels: "7 road wheels per side, typically with rubber tracks to reduce noise and ground vibration.",
            hull: "High-profile, well-sloped modular hull specifically designed for high survivability against IEDs and mines.",
            armament: "Modular Mizrak-30 unmanned turret housing a 30mm cannon and coaxial 7.62mm machine gun.",
            turret: "Mizrak-30 unmanned remote-controlled turret, heavily integrated with optics and often flanked by L-UMTAS ATGM launchers."
        },
        fact: "Named after the mythical winged horse 'Tulpar' from Central Asian and Turkic mythology, this IFV was developed parallel to the Turkish Altay main battle tank. It is heavily focused on modularity, allowing the same chassis to be adapted into a light tank, APC, or air defense vehicle.",
        imageCredit: "Photo: Swadim / Wikimedia Commons / CC BY-SA 4.0 — image modified (flag removed)"
    },

    // Iranian APCs
    {
        id: 104,
        name: "Rakhsh",
        type: "APC",
        origin: "Iran",
        coords: [32.4279, 53.6880],
        image: "assets/Rakhsh.jpg",
        specs: { speed: "105 km/h", armament: "12.7mm MG", operationalRange: "700 km" },
        inService: 2011,
        users: ["Iran"],
        status: "Active",
        fact: "Named after the mythical horse of Persian hero Rostam, the Rakhsh is Iran's first domestically produced wheeled APC.",
        imageCredit: "Photo: Amin Ahouei / Tasnim News Agency / CC BY 4.0"
    },
    {
        id: 105,
        name: "Boragh",
        type: "APC",
        origin: "Iran",
        coords: [32.4279, 53.6880],
        image: "assets/Boragh.jpg",
        specs: { speed: "65 km/h", armament: "12.7mm MG", operationalRange: "500 km" },
        inService: 2000,
        users: ["Iran"],
        status: "Active",
        fact: "The Boragh is based on the Soviet BMP-1 design but features significant Iranian modifications including improved armor and NBC protection.",
        imageCredit: "Photo: M.ATF / military.ir / CC BY-SA 3.0"
    },


    // === ARMOURED BRIDGING SYSTEMS ===
    // Chinese Bridging
    {
        id: 106,
        name: "Type 05",
        type: "IFV",
        origin: "China",
        coords: [35.8617, 104.1954],
        image: "assets/Type_05.jpg",
        specs: { speed: "54 km/h", armament: "30mm cannon", operationalRange: "500 km" },
        inService: 2005,
        users: ["China"],
        status: "Active",
        fact: "It is the world's fastest amphibious armoured fighting vehicle.",
        imageCredit: "Photo: Mil.ru / Ministry of Defence of the Russian Federation / CC BY 4.0"
    },


    // Russian Bridging
    {
        id: 107,
        name: "MTU-72",
        type: "Armoured Vehicle Launched Bridge",
        origin: "Russia",
        coords: [61.5240, 105.3188],
        image: "assets/MTU_72.jpg",
        specs: { speed: "60 km/h", armament: "None", operationalRange: "450 km" },
        inService: 1974,
        users: ["Russia", "Ukraine", "Syria", "Poland"],
        status: "Active",
        fact: "Based on the T-72 tank chassis, the MTU-72 can lay a 20-meter bridge in approximately 3 minutes under combat conditions.",
        imageCredit: "Photo: Vitaly V. Kuzmin / Wikimedia Commons / CC BY-SA 4.0"
    },
    {
        id: 108,
        name: "TMM-6",
        type: "Wheeled Vehicle-Launched Bridge",
        origin: "Russia",
        coords: [61.5240, 105.3188],
        image: "assets/TMM_6.jpg",
        specs: { speed: "60 km/h", armament: "None", operationalRange: "1000 km" },
        inService: 2000,
        users: ["Russia", "Azerbaijan", "Syria", "Vietnam"],
        status: "Active",
        fact: "The TMM-6 is a versatile truck-mounted scissor bridge system that can be transported long distances on roads and deployed to create river crossings.",
        imageCredit: "Photo: VoidWanderer / Wikimedia Commons / CC BY-SA 4.0"
    },

    {
        id: 109,
        name: "BMR-3M",
        type: "Mine-Clearing Vehicle",
        origin: "Russia",
        coords: [55.7558, 37.6173],
        image: "assets/BMR_3M.jpg",
        specs: { speed: "50 km/h", armament: "12.7mm MG", operationalRange: "500 km" },
        inService: 2010,
        users: ["Russia"],
        status: "Active",
        fact: "The BMR-3M 'Vepr' is an advanced mine-clearing vehicle based on the T-90 tank chassis. Using its KMT-7 mine trawl with solid steel wheels and electromagnetic attachments, it can clear paths through minefields at 5-12 km/h while protected by heavy armor and ERA.",
        imageCredit: "Photo: Vitaly V. Kuzmin / Wikimedia Commons / CC BY-SA 4.0"
    },
    {
        id: 110,
        name: "GMZ-3",
        type: "Minelayer",
        origin: "Russia",
        coords: [55.7558, 37.6173],
        image: "assets/GMZ_3.jpg",
        specs: { speed: "60 km/h", armament: "14.5mm MG", operationalRange: "500 km" },
        inService: 1984,
        users: ["Russia", "Armenia", "Azerbaijan", "Belarus", "Kazakhstan", "Kyrgyzstan", "Moldova", "Tajikistan", "Turkmenistan", "Ukraine", "Uzbekistan"],
        status: "Active",
        fact: "The GMZ-3 tracked minelayer can carry 208 anti-tank mines and rapidly deploy them at up to 16 km/h on the surface or 6 km/h when burying them up to 120mm deep. It automatically lays mines at 5 or 10 meter intervals using a plough assembly.",
        imageCredit: "Photo: Vitaly V. Kuzmin / Wikimedia Commons / CC BY-SA 4.0"
    },
    {
        id: 152,
        name: "Trojan AVRE",
        type: "Combat Engineer Vehicle",
        origin: "United Kingdom",
        coords: [51.5074, -0.1278],
        images: [
            "assets/Trojan_AVRE.jpg",
            "assets/Trojan_AVRE_Bravo.jpg"
        ],
        imageCredits: [
            "Photo: Alan Wilson / Flickr / CC BY-SA 2.0",
            "Photo: MoD/Crown Copyright / OGL v1.0"
        ],
        specs: { speed: "59 km/h", armament: "7.62mm L94A1", operationalRange: "450 km" },
        inService: 2007,
        users: ["United Kingdom"],
        status: "Active",
        fact: "The Trojan AVRE (Armoured Vehicle Royal Engineers) is built on the Challenger 2 tank chassis and carries the Python mine-clearing system, which fires a rocket-propelled explosive hose across minefields to clear a 7-meter wide, 230-meter long path. It was first deployed to Afghanistan in 2009 and only 33 units were built.",
        recognitionFeatures: {
            wheels: "6 road wheels per side (Challenger 2 chassis). Hydropneumatic suspension. Gap between 2nd and 3rd wheel.",
            hull: "Challenger 2 tank hull with full armor protection. Large front-mounted dozer blade. Fascine cradle on hull sides.",
            armament: "7.62mm L94A1 machine gun in Remote Weapon Station. Can tow Python mine-clearing trailer.",
            turret: "No turret - replaced by large hydraulic excavator arm with 6.5-tonne lift capacity. Arm stows rearward when traveling."
        }
    },

    // === ELECTRONIC WARFARE ===
    {
        id: 111,
        name: "Krasukha-2",
        type: "Electronic Warfare System",
        origin: "Russia",
        coords: [55.7558, 37.6173],
        image: "assets/Krasukha_2.jpg",
        specs: { speed: "80 km/h", armament: "None (Jammer)", operationalRange: "250 km" },
        inService: 2014,
        users: ["Russia", "Algeria", "Iran"],
        status: "Active",
        fact: "The Krasukha-2 is designed to jam AWACS aircraft and other airborne radars, effectively blinding enemy reconnaissance up to 250 km away.",
        imageCredit: "Photo: Vitaly V. Kuzmin / Creative Commons Attribution-Share Alike 3.0 Unported"
    },
    {
        id: 112,
        name: "R-145BM \"Chaika\"",
        type: "Command and Communication Vehicle",
        origin: "Russia",
        coords: [55.7558, 37.6173],
        image: "assets/R_145BM.jpg",
        specs: { speed: "80 km/h", armament: "None (Unarmed)", range: "N/A" },
        inService: 1964,
        users: ["Russia", "Ukraine", "Kazakhstan", "Belarus"],
        status: "Active",
        fact: "The R-145BM 'Chaika' (Seagull) is a mobile command post built on the BTR-60 chassis, equipped with advanced radio communications for battlefield coordination.",
        imageCredit: "Photo: VargaA / Wikimedia Commons / CC BY-SA 4.0"
    },
    {
        id: 113,
        name: "CZ Bren 2",
        type: "Assault Rifle",
        origin: "Czech Republic",
        coords: [49.2004, 15.4730],
        images: [
            "assets/CZ_BREN.jpg",
            "assets/CZ_Bren_2_Bravo.jpg"
        ],
        imageCredits: [
            "Photo: Land68 / Wikimedia Commons / CC0 1.0",
            "Photo: Land08 / Wikimedia Commons / CC0 1.0"
        ],
        specs: { speed: "N/A", armament: "5.56x45mm NATO / 7.62x39mm", effectiveRange: "500 m" },
        inService: 2016,
        users: ["Czech Republic", "Hungary", "France", "Ukraine", "Egypt", "Indonesia", "Slovakia"],
        status: "Active",
        fact: "The CZ Bren 2 is a highly modular assault rifle featuring a multi-caliber system that allows users to quickly switch between 5.56x45mm NATO and 7.62x39mm by simply changing the barrel, bolt, and magazine well. It's used by Czech forces and French GIGN special forces."
    },
    {
        id: 114,
        name: "Daewoo K2",
        type: "Assault Rifle",
        origin: "South Korea",
        coords: [37.5665, 126.9780],
        images: [
            "assets/Daewoo_K2.jpg",
            "assets/Daewoo_K2_Bravo.jpg"
        ],
        imageCredits: [
            "Photo: Republic of Korea Armed Forces / Wikimedia Commons / CC BY-SA 2.0",
            "Photo: Sholgunlee / Wikimedia Commons / CC BY 3.0"
        ],
        specs: { speed: "N/A", armament: "5.56x45mm NATO", effectiveRange: "500 m" },
        inService: 1985,
        users: ["South Korea", "Indonesia", "Iraq", "Cambodia", "Peru", "Philippines", "Nigeria"],
        status: "Active",
        fact: "The Daewoo K2 is a hybrid design combining the robustness of the AK-47's gas piston system with the ergonomics of the M16. Adopted in 1984 to replace the M16A1, it has served as South Korea's standard-issue rifle for over 40 years and features a unique 3-round burst mode alongside semi and full-auto."
    },
    {
        id: 115,
        name: "Sako TRG M10",
        type: "Sniper Rifle",
        origin: "Finland",
        coords: [60.9929, 24.4646],
        image: "assets/Sako_TRG_M10.jpg",
        specs: { speed: "N/A", armament: ".338 Lapua Magnum / .300 Win Mag / 7.62x51mm", effectiveRange: "1500 m" },
        inService: 2011,
        users: ["Finland", "Canada", "Estonia", "Poland", "Sweden"],
        status: "Active",
        fact: "The Sako TRG M10 is a highly modular multi-caliber sniper rifle that allows operators to switch between .338 Lapua Magnum, .300 Winchester Magnum, and 7.62x51mm NATO by simply swapping bolts, barrels, and magazines in the field. Selected as Canada's Multi-Calibre Sniper Weapon in 2022, it delivers sub-MOA accuracy.",
        imageCredit: "Photo: Ivan 6 / Wikimedia Commons / CC BY-SA 4.0"
    },
    {
        id: 116,
        name: "SVD Dragunov",
        type: "Sniper Rifle",
        origin: "Russia",
        coords: [55.7558, 37.6173],
        image: "assets/Dragunov.jpg",
        specs: { speed: "N/A", armament: "7.62x54mmR", effectiveRange: "800 m" },
        inService: 1963,
        users: ["Russia", "China", "India", "Iraq", "Syria", "Ukraine", "Vietnam", "50+ countries"],
        status: "Active",
        fact: "The SVD Dragunov is the world's most widely distributed designated marksman rifle. Designed by Yevgeny Dragunov in 1963, over 7 million units have been produced. Unlike traditional sniper rifles, it's semi-automatic and intended to provide squad-level precision fire out to 800 meters, making it one of the most successful military firearms ever created.",
        imageCredit: "Photo: Hokos / Wikimedia Commons / CC BY-SA 4.0"
    },
    {
        id: 117,
        name: "McMillan TAC-50",
        type: "Sniper Rifle",
        origin: "United States",
        coords: [33.4484, -112.0740],
        image: "assets/MCMILLAN_TAC_50.png",
        specs: { speed: "N/A", armament: ".50 BMG", effectiveRange: "1800 m" },
        inService: 2000,
        users: ["Canada", "United States", "France", "Israel", "Turkey", "Ukraine"],
        status: "Active",
        fact: "The McMillan TAC-50 holds the record for three of the five longest confirmed sniper kills in history, all achieved by Canadian Joint Task Force 2 snipers. The current #4 record stands at 3,540 meters (2.2 miles), set in Iraq in 2017. Designated C15 by Canada and Mk 15 by US Navy SEALs, it guarantees 0.5 MOA accuracy.",
        imageCredit: "Photo: Hoxton41 / Wikimedia Commons / CC BY-SA 4.0"
    },
    {
        id: 118,
        name: "L115A3 (AWM)",
        type: "Sniper Rifle",
        origin: "United Kingdom",
        coords: [52.6297, -1.1325],
        image: "assets/L115A3.jpg",
        specs: { speed: "N/A", armament: ".338 Lapua Magnum", effectiveRange: "1500 m" },
        inService: 2008,
        users: ["United Kingdom", "Netherlands", "Germany", "Poland", "Malaysia", "New Zealand"],
        status: "Active",
        fact: "The L115A3, manufactured by Accuracy International, held the world record for longest confirmed sniper kill from 2009 to 2017. British Corporal Craig Harrison engaged two Taliban fighters at 2,475 meters (1.54 miles) in Afghanistan - more than 900 meters beyond the rifle's effective range. The system includes Schmidt & Bender optics and a folding stock.",
        imageCredit: "Photo: Vitaly V. Kuzmin / Wikimedia Commons / CC BY-SA 4.0"
    },
    {
        id: 119,
        name: "FGM-148 Javelin",
        type: "Anti-Tank Missile",
        origin: "United States",
        coords: [33.4484, -112.0740],
        image: "assets/FGM_148_Javelin.jpg",
        specs: { speed: "140 m/s", armament: "Tandem HEAT Warhead", maximumRange: "4000 m" },
        inService: 1996,
        users: ["United States", "Ukraine", "United Kingdom", "France", "Australia", "Estonia", "Poland", "20+ countries"],
        status: "Active",
        fact: "The FGM-148 Javelin is a revolutionary 'fire-and-forget' anti-tank missile using automatic infrared guidance. Its unique top-attack mode makes it fly 150 meters up before diving down onto the vulnerable top armor of tanks. The soft-launch system allows safe firing from inside buildings. Over 50,000 missiles have been produced, with thousands supplied to Ukraine.",
        imageCredit: "Photo: U.S. Army Alaska / Wikimedia Commons / CC BY 2.0"
    },
    {
        id: 301,
        name: "RPG-7",
        type: "Anti-Tank Weapon",
        origin: "Russia",
        coords: [55.7558, 37.6173],
        image: "assets/RPG.jpg",
        specs: { speed: "115 m/s", armament: "HEAT / Tandem HEAT", maximumRange: "500 m" },
        inService: 1961,
        users: ["Russia", "China", "Iran", "North Korea", "Over 40 countries"],
        status: "Active",
        fact: "The RPG-7 is the most widely produced and utilized anti-tank weapon in military history. Simple, cheap, and reliable, it has been used in almost every global conflict since the 1960s. Its iconic shape comes from the reusable launch tube and the over-caliber warheads inserted into the front.",
        imageCredit: "Photo: Michal Maňas / Wikimedia Commons / CC BY 2.5"
    },
    {
        id: 120,
        name: "EA-18G Growler",
        type: "Electronic Warfare Aircraft",
        origin: "United States",
        coords: [47.9065, -122.2826],
        image: "assets/EA_18G.jpg",
        specs: { speed: "Mach 1.6", armament: "AGM-88 HARM, AIM-120", combatRadius: "2346 km" },
        inService: 2009,
        users: ["United States", "Australia"],
        status: "Active",
        fact: "The EA-18G Growler is the world's most advanced airborne electronic warfare aircraft, replacing the legendary EA-6B Prowler. Based on the F/A-18F Super Hornet, it disrupts enemy radar and communications using powerful jamming systems including the Next Generation Jammer. Operated by a crew of two, it's the only aircraft of its kind outside the U.S. to serve with Australia's RAAF.",
        recognitionFeatures: {
            wings: "Mid-mounted, swept wings with leading edge root extensions (LEX). Wingtip jamming pods.",
            engine: "Twin turbofan engines. Rectangular air intakes under the wings.",
            fuselage: "Two-seat cockpit (tandem). Enlarged dorsal spine for electronics.",
            tail: "Twin outward-canted vertical stabilizers. All-moving horizontal stabilators."
        },
        imageCredit: "Photo: Senior Airman John Linzmeier / U.S. Air Force / Public Domain"
    },
    {
        id: 145,
        name: "C-5M Super Galaxy",
        type: "Strategic Heavy-Lift Aircraft",
        origin: "United States",
        coords: [33.4484, -112.0740],
        images: [
            "assets/C_5M_Super_Galaxy.jpg",
            "assets/C5_Bravo.jpg"
        ],
        imageCredits: [
            "Photo: Kevin Clark / U.S. Air Force / Public Domain",
            "Photo: U.S. Air Force photo by Airman 1st Class Renee Nicole Finona / Public Domain"
        ],
        specs: { speed: "Mach 0.77", armament: "None (Transport)", ferryRange: "8897 km" },
        inService: 2014,
        users: ["United States"],
        status: "Active",
        fact: "The C-5M Super Galaxy is the largest aircraft in the U.S. Air Force and one of the world's largest military transports. It can carry 129,274 kg (285,000 lbs) of cargo - including two M1 Abrams tanks or six Apache helicopters. With four upgraded GE engines producing 50,000+ lbs of thrust each, it features a unique 'kneeling' landing gear system and both front and rear cargo doors for simultaneous loading. The modernization extends its service life to at least 2045.",
        recognitionFeatures: {
            wings: "High-mounted, swept-back wings (25-degree sweep). Anhedral (droop) visible when on ground.",
            engine: "Four large high-bypass turbofans mounted on pylons under the wings.",
            fuselage: "Massive, bulbous fuselage. Cockpit sits high above the 'visor' nose cargo door.",
            tail: "Large T-tail configuration. Horizontal stabilizer mounted at the top of the vertical fin."
        }
    },
    {
        id: 122,
        name: "A-50 (Mainstay)",
        type: "Airborne Early Warning Aircraft",
        origin: "Russia",
        coords: [55.7558, 37.6173],
        images: [
            "assets/A_50_Mainstay.jpg",
            "assets/A50_Mainstay_bravo.jpg"
        ],
        imageCredits: [
            "Photo: Alexxx1979 / Wikimedia Commons / CC BY-SA 3.0",
            "Photo: Michael Sender / jetphotos.net / CC BY-SA 3.0 — image modified (symbols removed)"
        ],
        specs: { speed: "800 km/h", armament: "None (AWACS)", ferryRange: "5000 km" },
        inService: 1984,
        users: ["Russia", "India"],
        status: "Active",
        fact: "The A-50 'Mainstay' features a distinctive 9-meter rotodome housing the Liana/Vega-M radar system, capable of detecting air targets up to 650 km away and tracking up to 150 targets simultaneously. Based on the Il-76 transport, it can guide 10 fighter aircraft for intercept missions. Russia's A-50 fleet has been significantly reduced during the Ukraine conflict, with multiple aircraft reportedly lost.",
        recognitionFeatures: {
            wings: "High-mounted, swept-back wings with four turbofan engines mounted on pylons beneath them.",
            engine: "4 x Soloviev D-30KP turbofans. Distinctive glass navigator station in the nose (from Il-76 base).",
            fuselage: "Large, 9-meter diameter rotodome ('mushroom') radar mounted on struts above the rear fuselage.",
            tail: "T-tail configuration with a gun turret at the base of the rudder (though often unarmed in A-50)."
        }
    },
    {
        id: 123,
        name: "Boeing E-3 Sentry",
        type: "Airborne Early Warning Aircraft",
        origin: "United States",
        coords: [47.4979, -122.2188],
        image: "assets/Boeing_E3_Sentry.jpg",
        specs: { speed: "854 km/h", armament: "None (AWACS)", ferryRange: "9250 km" },
        inService: 1977,
        users: ["United States", "NATO", "France", "Saudi Arabia", "Chile"],
        status: "Active",
        fact: "The E-3 Sentry features a distinctive 30-foot (9.1m) diameter rotating radar dome mounted above the fuselage that completes a full rotation every 10 seconds. Based on the Boeing 707, it can detect low-flying targets at 400 km and track air and sea targets simultaneously. The USAF operates 31 aircraft and plans to replace them with the E-7 Wedgetail starting in 2027. NATO's fleet will operate until 2035.",
        recognitionFeatures: {
            wings: "Low-mounted, swept-back wings (Boeing 707 airframe). 35-degree sweep.",
            engine: "Four turbofan engines mounted on pylons beneath the wings.",
            fuselage: "Commercial airliner profile (707-320B). Massive 30ft rotating radome mounted on struts above rear fuselage.",
            tail: "Conventional single vertical stabilizer. HF radio antenna probe often visible on fin tip."
        },
        imageCredit: "Photo: Airwolfhound / Wikimedia Commons / CC BY-SA 2.0"
    },
    {
        id: 124,
        name: "KJ-2000",
        type: "Airborne Early Warning Aircraft",
        origin: "China",
        coords: [34.3416, 108.9398],
        image: "assets/KJ2000.jpg",
        specs: { speed: "900 km/h", armament: "None (AWACS)", ferryRange: "5000 km" },
        inService: 2007,
        users: ["China"],
        status: "Active",
        fact: "The KJ-2000 'Mainring' features a unique fixed disc-shaped radome with three phased-array radar antennas arranged in a triangle, each providing 120-degree coverage for complete 360-degree surveillance. Unlike rotating radomes, this fixed design is more reliable. Based on the Russian Il-76, it was developed after the US blocked an Israeli-Russian AWACS deal. Only 4-5 units built due to limited Il-76 availability. Expected to be replaced by Y-20-based KJ-3000 after 2030.",
        recognitionFeatures: {
            wings: "High-mounted, swept wings (Il-76 airframe). Four turbofans.",
            engine: "Four turbofan engines mounted on pylons. Distinctive cigar shape.",
            fuselage: "Large transport body. Glass nose. Fixed non-rotating disc radome on top.",
            tail: "T-tail configuration. Gunner position at base of tail (often removed)."
        },
        imageCredit: "Photo: Danny Yu / Wikimedia Commons / CC BY-SA 4.0"
    },
    {
        id: 150,
        name: "E-2 Hawkeye",
        type: "Airborne Early Warning Aircraft",
        origin: "United States",
        coords: [40.7128, -73.2060],
        images: [
            "assets/E2_Hawkeye.jpg",
            "assets/E2_Hawkeye_Bravo.jpg"
        ],
        imageCredits: [
            "Photo: Balon Greyjoy / Wikimedia Commons / CC0 1.0",
            "Photo: Photographer's Mate Airman Ronald A. Dallatorre / U.S. Navy / Public Domain"
        ],
        specs: { speed: "650 km/h", armament: "None (AEW)", ferryRange: "2708 km" },
        inService: 1964,
        users: ["United States", "France", "Japan", "Egypt", "Taiwan", "Mexico"],
        status: "Active",
        fact: "The E-2 Hawkeye is affectionately called 'The Hummer' by Navy crews due to the distinctive humming sound its twin turboprop engines make, which sets it apart from the jet aircraft on a carrier. It is the only carrier-capable AEW aircraft in the world and has been continuously upgraded since 1964, with the latest E-2D Advanced Hawkeye featuring a new radar capable of tracking up to 2,000 targets simultaneously.",
        recognitionFeatures: {
            wings: "High-mounted, straight wings with Sto-Wing folding system. Wings fold rearward for carrier storage.",
            engine: "Two Allison T56 turboprop engines mounted under wings. Eight-bladed propellers on E-2D variant.",
            fuselage: "Distinctive 24-foot diameter rotating circular radome mounted above fuselage on pylons. Cockpit sits higher than main fuselage.",
            tail: "Unique four-fin tail configuration with dihedral horizontal stabilizers. Vertical fins both above and below stabilizers. Tail hook for carrier landings."
        }
    },
    {
        id: 125,
        name: "USS Zumwalt",
        type: "Naval Vessel",
        origin: "United States",
        coords: [43.9147, -69.9644],
        image: "assets/USS_Zumwalt.jpg",
        specs: { speed: "30 knots", armament: "80 VLS cells, Hypersonic missiles", endurance: "N/A" },
        inService: 2016,
        users: ["United States"],
        status: "Active",
        fact: "The USS Zumwalt (DDG-1000) is the most technologically advanced surface combatant ever built, featuring a distinctive angular stealth design with a wave-piercing tumblehome hull. Its all-electric Integrated Power System generates 78 MW of power. Originally equipped with 155mm Advanced Gun Systems, it underwent modernization in 2023-2024 to carry 12 hypersonic missiles in place of the guns. Named after Admiral Elmo Zumwalt, only three ships of this class were built due to costs exceeding $4 billion per vessel.",
        imageCredit: "Photo: Petty Officer 3rd Class Emiline L. M. Senn / U.S. Navy / Public Domain"
    },
    {
        id: 140,
        name: "Zubr-class LCAC",
        type: "Naval Vessel",
        origin: "Russia",
        coords: [55.7558, 37.6173],
        image: "assets/Zubr_class_LCAC.jpg",
        specs: { speed: "63 knots", armament: "2x AK-630, 140mm Rockets", endurance: "560 km" },
        inService: 1986,
        users: ["Russia", "Greece", "China"],
        status: "Active",
        fact: "The Zubr-class (NATO: Pomornik) is the world's largest military hovercraft, capable of carrying 3 main battle tanks or 10 armored vehicles plus 140 troops at speeds up to 63 knots (117 km/h). Its unique air cushion design allows it to operate over water, ice, sand, and marshland. Armed with two 30mm AK-630 CIWS and 140mm rocket launchers, it can defend itself while delivering amphibious forces. Greece operates the largest fleet outside Russia with 4 vessels.",
        imageCredit: "Photo: Petty Officer 1st Class John Bellino / U.S. Navy / Public Domain"
    },
    {
        id: 126,
        name: "Glock 17",
        type: "Pistol",
        origin: "Austria",
        coords: [47.5162, 14.5501],
        images: [
            "assets/Glock17.jpg",
            "assets/Glock17_bravo.jpg"
        ],
        imageCredits: [
            "Photo: Ken Lunde / lundestudio.com / CC BY-SA 3.0",
            "Photo: Vitaly V. Kuzmin / vitalykuzmin.net / CC BY-SA 4.0"
        ],
        specs: { speed: "N/A", armament: "9x19mm Parabellum", effectiveRange: "50 m" },
        inService: 1982,
        users: ["Austria", "United States", "United Kingdom", "France", "Norway", "Sweden", "Netherlands", "Finland", "Switzerland", "Portugal", "Iraq", "Latvia"],
        status: "Active",
        fact: "The Glock 17 revolutionized firearm design as the first commercially successful polymer-framed pistol. Its 'Safe Action' trigger system and 17-round magazine capacity set new industry standards. Used by law enforcement in 48+ countries and 65% of US police agencies, it's known for extreme reliability - able to fire after being buried in sand, submerged in water, or frozen in ice."
    },
    {
        id: 127,
        name: "Makarov PM",
        type: "Pistol",
        origin: "Russia",
        coords: [55.7558, 37.6173],
        images: [
            "assets/Makarov_PM.jpg",
            "assets/Makarov_PM_bravo.jpg"
        ],
        imageCredits: [
            "Photo: Andrey Mironov / artmiro.ru / CC BY-SA 3.0",
            "Photo: skhakirov / Flickr / CC BY-SA 2.0"
        ],
        specs: { speed: "N/A", armament: "9x18mm Makarov", effectiveRange: "50 m" },
        inService: 1951,
        users: ["Russia", "Ukraine", "Bulgaria", "China", "East Germany", "Vietnam", "North Korea", "Poland", "Czech Republic"],
        status: "Active",
        fact: "The Makarov PM was the standard Soviet military sidearm for over 50 years. Its 9x18mm cartridge was specifically designed to be the most powerful round possible in a simple blowback pistol. Despite being officially replaced by the PYa in 2003, millions remain in service across former Soviet states. The design is so simple and reliable that it can function in extreme cold (-50Â°C) without lubricant."
    },
    {
        id: 128,
        name: "SIG Sauer P320",
        type: "Pistol",
        origin: "United States",
        coords: [42.9956, -71.4548],
        images: [
            "assets/Sig_Sauer_P320.jpg",
            "assets/SIG_Sauer_P320_bravo.jpg"
        ],
        imageCredits: [
            "Photo: Digitallymade / Wikimedia Commons / CC BY-SA 4.0",
            "Photo: Tony Webster / Flickr / CC BY 2.0"
        ],
        specs: { speed: "N/A", armament: "9x19mm Parabellum", effectiveRange: "50 m" },
        inService: 2017,
        users: ["United States", "Australia", "Canada", "Denmark", "Switzerland", "Spain", "Thailand"],
        status: "Active",
        fact: "The SIG Sauer P320 won the U.S. Army's Modular Handgun System competition in 2017, replacing the M9 Beretta after 32 years. Designated M17 (full-size) and M18 (compact), its revolutionary modular design allows the serialized stainless steel chassis to be swapped between different grip modules and calibers. It's now the standard sidearm for all U.S. military branches."
    },
    {
        id: 129,
        name: "QSZ-92",
        type: "Pistol",
        origin: "China",
        coords: [39.9042, 116.4074],
        image: "assets/QSZ_92.jpg",
        specs: { speed: "N/A", armament: "9x19mm / 5.8x21mm", effectiveRange: "50 m" },
        inService: 1998,
        users: ["China", "Bangladesh", "Cambodia", "Hong Kong"],
        status: "Active",
        fact: "The QSZ-92 (Type 92) is China's standard military sidearm, featuring a unique rotating barrel locking system. Available in 5.8mm (20-round magazine) for officers and 9mm (15-round) for special forces. Development began in 1992, and it was first publicly seen during the 1999 Macau handover. The polymer frame design makes it one of China's most modern indigenous pistols.",
        imageCredit: "Photo: Dan3031949 / Wikimedia Commons / CC BY-SA 4.0"
    },
    {
        id: 130,
        name: "A-29 Super Tucano",
        type: "Light Attack Aircraft",
        origin: "Brazil",
        coords: [-23.5505, -46.6333],
        images: [
            "assets/Super_Tucano.jpg",
            "assets/Super_Tucano_Bravo.jpg"
        ],
        imageCredits: [
            "Photo: Philippine Air Force / Public Domain",
            "Photo: Johnson Barros / Flickr / CC BY 2.0 — image modified (cropped, symbols removed)"
        ],
        specs: { speed: "593 km/h", armament: "2x 12.7mm MGs, 1,550kg ordnance", combatRadius: "1330 km" },
        inService: 2003,
        users: ["Brazil", "United States", "Colombia", "Philippines", "Indonesia", "Nigeria", "Afghanistan", "Portugal", "Lebanon", "Dominican Republic"],
        status: "Active",
        fact: "The A-29 Super Tucano is a turboprop light attack and counter-insurgency aircraft that has become one of the world's most successful COIN platforms, operated by 22+ air forces. Its 6+ hour endurance, armored cockpit, and ability to carry precision munitions make it ideal for asymmetric warfare. The US Air Force operates it for training foreign allies, and it has seen extensive combat in Afghanistan, Colombia, and Nigeria.",
        recognitionFeatures: {
            wings: "Low-mounted, straight leading edge with tapered trailing edge. Wingtips have missile rails.",
            engine: "Single turboprop engine mounted in the nose with a prominent exhaust on the right side.",
            fuselage: "Tandem two-seat cockpit with a long, sloping nose. Retractable tricycle landing gear.",
            tail: "Conventional tail configuration with a curved dorsal fin leading to the vertical stabilizer."
        }
    },
    {
        id: 131,
        name: "Beretta 92",
        type: "Pistol",
        origin: "Italy",
        coords: [45.5416, 10.2118],
        image: "assets/Beretta_92.jpg",
        specs: { speed: "N/A", armament: "9x19mm Parabellum", effectiveRange: "50 m" },
        inService: 1976,
        users: ["United States", "Italy", "France", "Brazil", "Egypt", "Iraq", "South Korea", "Turkey"],
        status: "Active",
        fact: "The Beretta 92 served as the U.S. military's standard sidearm for 32 years (1985-2017), designated as the M9. It replaced the iconic M1911 and was itself replaced by the SIG Sauer P320. Over 600,000 M9 pistols were delivered to the U.S. military. The 92FS variant is still widely used by police and military forces in 30+ countries worldwide.",
        imageCredit: "Photo: U.S. Bureau of Alcohol, Tobacco, Firearms and Explosives / Public Domain"
    },
    {
        id: 132,
        name: "Ka-52 Alligator",
        type: "Attack Helicopter",
        origin: "Russia",
        coords: [55.7558, 37.6173],
        images: [
            "assets/Ka-52_Alligator.jpg",
            "assets/Ka_52_Alligator_bravo.jpg"
        ],
        imageCredits: [
            "Photo: Alex Beltyukov / airliners.net / CC BY-SA 3.0",
            "Photo: Roman Dergunov / Wikimedia Commons / CC BY-SA 4.0"
        ],
        specs: { speed: "300 km/h", armament: "30mm cannon, Vikhr ATGMs, rockets", combatRadius: "520 km" },
        inService: 2011,
        users: ["Russia", "Egypt"],
        status: "Active",
        fact: "The Ka-52 'Alligator' features Kamov's distinctive coaxial contra-rotating rotors, eliminating the need for a tail rotor and providing exceptional maneuverability. Its side-by-side crew seating is unusual for attack helicopters. It can carry up to 12 Vikhr anti-tank missiles with 8-10km range. The Ka-52K naval variant is designed for Russia's Mistral-class carriers. It has seen extensive combat in Syria and Ukraine.",
        recognitionFeatures: {
            rotors: "Unique stacked (coaxial) contra-rotating 3-blade rotors. No tail rotor.",
            engine: "Twin engines located high on the fuselage near the rotor mast.",
            fuselage: "Side-by-side cockpit (unique for attack helicopters). Broad, blunt nose.",
            tail: "Large vertical fin with rudder and small horizontal stabilizers. No tail rotor."
        }
    },
    {
        id: 156,
        name: "AH-1Z Viper",
        type: "Attack Helicopter",
        origin: "United States",
        coords: [33.6829, -117.2115],
        images: [
            "assets/AH1Z.jpg",
            "assets/AH1Z_Bravo.jpg"
        ],
        imageCredits: [
            "Photo: Acroterion / Wikimedia Commons / CC BY-SA 4.0",
            "Photo: Lance Cpl. Christopher O'Quin / U.S. Marine Corps / Public Domain"
        ],
        specs: { speed: "411 km/h", armament: "20mm M197 cannon, AGM-114 Hellfire, AIM-9 Sidewinder", combatRadius: "231 km" },
        inService: 2010,
        users: ["United States", "Bahrain", "Czech Republic"],
        status: "Active",
        fact: "The AH-1Z 'Zulu Cobra' is the latest evolution of the legendary AH-1 Cobra lineage that dates back to the Vietnam War. It features a revolutionary four-bladed, bearingless composite rotor system that reduces its acoustic signature so effectively it's often undetected until overhead. The Viper shares 85% parts commonality with the UH-1Y Venom utility helicopter, dramatically reducing maintenance costs for the Marine Corps.",
        recognitionFeatures: {
            rotors: "Four-blade hingeless, bearingless composite main rotor. Four-blade tail rotor. Semi-automatic folding for shipboard storage.",
            engine: "Twin GE T700-GE-401C turboshafts mounted above the cabin. Exhaust with IR suppression system (HIRSS).",
            fuselage: "Narrow, tandem-seat configuration (gunner front, pilot rear). Stub wings with 6 hardpoints for weapons.",
            tail: "Conventional tail boom with port-side tail rotor. Horizontal stabilizer on tail."
        }
    },
    {
        id: 157,
        name: "Leonardo M-346 Master",
        type: "Trainer Aircraft",
        origin: "Italy",
        coords: [45.4642, 9.1900],
        images: [
            "assets/M346.jpg",
            "assets/M346_Bravo.jpg"
        ],
        imageCredits: [
            "Photo: Gian Marco Anzellotti / Wikimedia Commons / CC BY 2.0",
            "Photo: Steve Lynes / Wikimedia Commons / CC BY 2.0"
        ],
        specs: { speed: "Mach 1.2", armament: "Up to 3,000 kg (training weapons, gun pods, missiles)", combatRadius: "1,890 km" },
        inService: 2010,
        users: ["Italy", "Israel", "Poland", "Singapore", "Greece", "Qatar", "Nigeria", "Egypt"],
        status: "Active",
        fact: "The M-346 Master is one of the world's most advanced lead-in fighter trainers (LIFT), designed to simulate 4th and 5th generation fighters. Its unique 'Embedded Tactical Training System' allows student pilots to train against virtual threats displayed on cockpit screens, reducing the need for expensive live-fly aggressor aircraft. The Israeli version, designated 'Lavi', can be rapidly converted into a light combat aircraft.",
        recognitionFeatures: {
            wings: "Mid-mounted, swept-back wings with prominent leading-edge root extensions (LERX). Slightly negative dihedral.",
            engine: "Twin Honeywell F124 turbofans. Rectangular air intakes on fuselage sides below the cockpit.",
            fuselage: "Tandem two-seat cockpit with large bubble canopy. Sleek, aerodynamic design resembling a small fighter.",
            tail: "Single vertical stabilizer. All-moving horizontal stabilators mounted low at rear."
        }
    },
    {
        id: 158,
        name: "AC-130",
        type: "Gunship",
        origin: "United States",
        coords: [29.3852, -98.5808],
        images: [
            "assets/AC130.jpg",
            "assets/AC130_Bravo.jpg"
        ],
        imageCredits: [
            "Photo: MSgt Christopher Boitz / U.S. Air Force / Public Domain",
            "Photo: SrA Julianne Showalter / U.S. Air Force / Public Domain"
        ],
        specs: { speed: "671 km/h", armament: "30mm GAU-23, 105mm M102 howitzer, GBU-39 SDB, AGM-176 Griffin", ferryRange: "4,828 km" },
        inService: 2017,
        users: ["United States"],
        status: "Active",
        fact: "The AC-130 is essentially a flying artillery battery, capable of loitering over battlefields for hours while providing devastating close air support. It performs 'pylon turns' - orbiting a fixed point on the ground - allowing all side-mounted weapons to concentrate fire on a single target. The AC-130U Spooky once set a record for the longest sustained C-130 flight at 36 hours with seven in-air refuelings.",
        recognitionFeatures: {
            wings: "High-mounted, straight wings with anhedral droop. Four-engine turboprop configuration.",
            engine: "Four Rolls-Royce AE 2100D3 turboprops with six-bladed propellers.",
            fuselage: "C-130 airframe with distinctive side-mounted weapons visible. Sensor pods and antennas on underside.",
            tail: "Large conventional vertical stabilizer with dorsal fin. Low-mounted horizontal tailplane."
        }
    },
    {
        id: 159,
        name: "SR-25",
        type: "Sniper Rifle",
        origin: "United States",
        coords: [28.5831, -80.8197],
        image: "assets/SR25.jpg",
        specs: { speed: "N/A", armament: "7.62x51mm NATO", effectiveRange: "800 m" },
        inService: 1990,
        users: ["United States", "Israel", "Australia", "Poland", "Thailand", "Turkey"],
        status: "Active",
        fact: "The SR-25 (Stoner Rifle-25) was designed by Eugene Stoner, the father of the AR-15, and combines the inherent accuracy of a bolt-action rifle with the rapid follow-up shot capability of a semi-automatic. It shares 60% parts commonality with the AR-15 and has served as the basis for the U.S. Navy Mk 11 and U.S. Army M110 Semi-Automatic Sniper Systems.",
        imageCredit: "Photo: Zachi Evenor / Wikimedia Commons / CC BY-SA 4.0"
    },
    {
        id: 133,
        name: "MP5",
        type: "Submachine Gun",
        origin: "Germany",
        coords: [48.7758, 9.1829],
        image: "assets/MP5.jpg",
        specs: { speed: "N/A", armament: "9x19mm Parabellum", effectiveRange: "200 m" },
        inService: 1966,
        users: ["Germany", "United States", "United Kingdom", "France", "Japan", "Australia", "Italy", "Norway"],
        status: "Active",
        fact: "The Heckler & Koch MP5 is arguably the most iconic submachine gun in history, used by over 40 nations' military and police forces. Its roller-delayed blowback system provides exceptional accuracy for an SMG. The British SAS made it world-famous during the 1980 Iranian Embassy siege. It remains the gold standard for counter-terrorism units worldwide, including the FBI, Navy SEALs, and GSG-9.",
        imageCredit: "Photo: Tony Hisgett / Flickr / CC BY 2.0"
    },
    {
        id: 134,
        name: "Mirage 2000D",
        type: "Strike Aircraft",
        origin: "France",
        coords: [48.8566, 2.3522],
        images: [
            "assets/Mirage_2000D.jpg",
            "assets/Mirage_2000_Bravo.jpg"
        ],
        imageCredits: [
            "Photo: Rob Schleiffert / Flickr / CC BY-SA 2.0",
            "Photo: Aaron Allmon / U.S. Air Force / Public Domain"
        ],
        specs: { speed: "Mach 1.4", armament: "SCALP EG, GBU-12, MICA", combatRadius: "1,480 km" },
        inService: 1995,
        users: ["France", "Egypt", "Greece", "India", "Peru", "Taiwan", "UAE"],
        status: "Active",
        fact: "The Mirage 2000D is a two-seat strike variant developed from the Mirage 2000N nuclear bomber. It has been the workhorse of the French Air Force, extensively deployed in the Balkans, Afghanistan, Libya, Mali, and Syria. A mid-life upgrade program is keeping 55 aircraft operational until at least 2035, integrating modern weapons like SCALP cruise missiles and precision-guided bombs.",
        recognitionFeatures: {
            wings: "Low-mounted delta wing with clipped tips. No separate horizontal tail.",
            engine: "Single SNECMA M53 turbofan. Semi-circular air intakes with shock cones.",
            fuselage: "Sleek area-ruled fuselage. Two-seat tandem cockpit.",
            tail: "Large single vertical stabilizer. No horizontal stabilizers (delta design)."
        }
    },
    {
        id: 135,
        name: "Type 96 (ZTZ-96)",
        type: "Main Battle Tank",
        origin: "China",
        coords: [35.8617, 104.1954],
        images: [
            "assets/Type_96_ZTZ_96.jpg",
            "assets/Type_96_Bravo.jpg"
        ],
        imageCredits: [
            "Photo: Boevaya mashina / Wikimedia Commons / CC BY-SA 3.0",
            "Photo: Vitaly V. Kuzmin / vitalykuzmin.net / CC BY-SA 4.0"
        ],
        specs: { speed: "65 km/h", armament: "125mm smoothbore", operationalRange: "400 km" },
        inService: 1997,
        users: ["China", "Sudan"],
        status: "Active",
        recognitionFeatures: {
            wheels: "6 rubber-tired road wheels. Torsion bar suspension. Drive sprocket at rear.",
            hull: "Glacis plate steeply sloped. FY-4 ERA blocks often on front. Driver on left.",
            armament: "125mm smoothbore gun with fume extractor. 12.7mm AA machine gun on turret roof.",
            turret: "Welded turret with modular/ERA armor (arrow-shaped on Type 96A). Storage racks on sides/rear."
        },
        fact: "The Type 96 is the backbone of China's armored forces with over 2,000 units in service. It was the first PLA tank to mount a 125mm gun with autoloader, derived from Soviet/Russian designs. The tank regularly competes in Russia's Tank Biathlon where it has proven competitive in gunnery. The latest Type 96B variant features a 1,000+ hp engine and advanced ERA armor."
    },
    {
        id: 180,
        name: "K1",
        type: "Main Battle Tank",
        origin: "South Korea",
        coords: [37.5665, 126.9780],
        images: [
            "assets/K1.jpg",
            "assets/K1_Bravo.jpg"
        ],
        specs: { speed: "65 km/h", armament: "105mm M68A1", operationalRange: "500 km" },
        inService: 1987,
        users: ["South Korea"],
        status: "Active",
        recognitionFeatures: {
            wheels: "6 road wheels per side. Hydropneumatic suspension system.",
            hull: "Low profile design, bearing a strong resemblance to the American M1 Abrams.",
            armament: "105mm rifled main gun, characteristic of the original K1 models.",
            turret: "Angular, Abrams-like turret with composite armor."
        },
        fact: "The K1 MBT was developed for the Republic of Korea Army with assistance from General Dynamics, heavily basing its design on the American M1 Abrams. Because of its visual similarity and origin, it is often nicknamed the 'Baby Abrams'.",
        imageCredits: [
            "Photo: SGT CHRISTOPHER KAUFMANN, USA / U.S. Army / Public Domain",
            "Photo: TSGT James E. Lotz, U.S. Air Force / Public Domain"
        ]
    },
    {
        id: 181,
        name: "Type 90",
        type: "Main Battle Tank",
        origin: "Japan",
        coords: [35.6762, 139.6503],
        images: [
            "assets/Type90.jpg",
            "assets/Type90_Bravo.jpg"
        ],
        specs: { speed: "70 km/h", armament: "120mm L44 smoothbore", operationalRange: "350 km" },
        inService: 1990,
        users: ["Japan"],
        status: "Active",
        recognitionFeatures: {
            wheels: "6 road wheels per side. Hydropneumatic and torsion bar hybrid suspension.",
            hull: "Flat and boxed hull typical of late Cold War MBT designs, distinct angular glacis.",
            armament: "120mm smoothbore gun with a prominent fume extractor.",
            turret: "Noticeably boxy and vertical-faced composite armor on the turret front and sides, resembling the Leopard 2A4."
        },
        fact: "The Type 90 was developed to replace all Type 61 and a portion of Type 74 tanks in the Japan Ground Self-Defense Force. At the time of its introduction, it was one of the most expensive main battle tanks in the world. It features an automatic loader, which reduces the crew size to three.",
        imageCredits: [
            "Photo: User:Megapixie / Public Domain",
            "Photo: i_yudai / Flickr / CC BY 2.0"
        ]
    },
    {
        id: 182,
        name: "T-90A",
        type: "Main Battle Tank",
        origin: "Russia",
        coords: [55.7558, 37.6173],
        images: [
            "assets/T90.jpg",
            "assets/T90_Bravo.jpg"
        ],
        specs: { speed: "60 km/h", armament: "125mm 2A46M smoothbore", operationalRange: "550 km" },
        inService: 1992,
        users: ["Russia", "India", "Algeria", "Syria"],
        status: "Active",
        recognitionFeatures: {
            wheels: "6 road wheels per side, resembling the T-72 system.",
            hull: "Low-profile hull equipped with Kontakt-5 or Relikt explosive reactive armor blocks.",
            armament: "125mm main gun capable of firing ATGMs, with distinctive 'red eyes' (Shtora electro-optical jammers) flanking the gun on many models.",
            turret: "Cast or welded turret covered heavily with ERA blocks, giving it an angular, cluttered appearance compared to western tanks."
        },
        fact: "The T-90 is a third-generation Russian main battle tank that essentially combines the reliable chassis of the T-72 with the advanced turret and combat systems of the T-80. It frequently features the 'Shtora-1' active protection system, renowned for its red-glowing infrared dazzlers designed to spoof incoming wire-guided missiles.",
        imageCredits: [
            "Photo: Vyacheslav Argenberg / Wikimedia Commons / CC BY 4.0",
            "Photo: Vyacheslav Argenberg / Wikimedia Commons / CC BY 4.0"
        ]
    },
    {
        id: 136,
        name: "AKM",
        type: "Assault Rifle",
        origin: "Russia",
        coords: [56.8431, 53.2044],
        images: [
            "assets/AKM.jpg",
            "assets/AKM_Bravo.jpg"
        ],
        imageCredits: [
            "Photo: Levvuori / Wikimedia Commons / Public Domain",
            "Photo: Vitaly V. Kuzmin / vitalykuzmin.net / CC BY-SA 4.0"
        ],
        specs: { speed: "N/A", armament: "7.62x39mm", effectiveRange: "350 m" },
        inService: 1959,
        users: ["Russia", "China", "Egypt", "Iraq", "Vietnam", "North Korea", "Cuba", "Syria", "Afghanistan"],
        status: "Active",
        fact: "The AKM (Avtomat Kalashnikova Modernizirovanniy) is the modernized version of the legendary AK-47, featuring a stamped steel receiver instead of milled, reducing weight by 1kg. It became the most widely produced variant of the Kalashnikov series and is often mistakenly called an AK-47. The slanted muzzle brake was added to reduce muzzle climb during automatic fire."
    },
    {
        id: 137,
        name: "M16",
        type: "Assault Rifle",
        origin: "United States",
        coords: [38.8814, -77.0365],
        images: [
            "assets/M16.jpg",
            "assets/M16_Bravo.jpg"
        ],
        imageCredits: [
            "Photo: Staff Sgt. Candace Mundt / U.S. Army / Public Domain",
            "Photo: Master Sgt. Matt Hecht / U.S. Air National Guard / Public Domain"
        ],
        specs: { speed: "N/A", armament: "5.56x45mm NATO", effectiveRange: "550 m" },
        inService: 1964,
        users: ["United States", "Canada", "Australia", "Israel", "South Korea", "Philippines", "Thailand"],
        status: "Active",
        fact: "The M16, designed by Eugene Stoner, revolutionized infantry warfare with its lightweight design and smaller 5.56mm cartridge, allowing soldiers to carry more ammunition. It has served American forces for over 50 years across Vietnam, Iraq, and Afghanistan. Early reliability issues in Vietnam were resolved with the M16A1, and it spawned the iconic M4 carbine. The M16 family has been used by over 80 nations worldwide."
    },
    {
        id: 138,
        name: "Benelli M4",
        type: "Combat Shotgun",
        origin: "Italy",
        coords: [43.6158, 13.5189],
        images: [
            "assets/Benelli_M4.jpg",
            "assets/Benelli_M4_Bravo.jpg"
        ],
        imageCredits: [
            "Photo: Richard Watt / UK Ministry of Defence / OGL v3.0",
            "Photo: Lance Cpl. Drake Nickels / U.S. Marine Corps / Public Domain"
        ],
        specs: { speed: "N/A", armament: "12 gauge", effectiveRange: "50 m" },
        inService: 1999,
        users: ["United States", "United Kingdom", "Italy", "Portugal", "Serbia", "Slovakia", "Slovenia", "Spain"],
        status: "Active",
        fact: "The Benelli M4 (designated M1014 by the USMC and L128A1 by the British) was the first gas-operated shotgun adopted for widespread U.S. military service. Its proprietary ARGO gas system uses two self-cleaning stainless steel pistons, allowing it to reliably cycle any ammunition from light loads to 3-inch magnums without adjustment. It can fire over 25,000 rounds without major part replacement."
    },

    // === ANTI-TANK WEAPONS ===
    {
        id: 118,
        name: "9M133 Kornet-EM",
        type: "Anti-Tank Missile",
        origin: "Russia",
        coords: [55.7558, 37.6173],
        image: "assets/Kornet_EM.jpg",
        specs: { speed: "N/A", armament: "ATGM", maximumRange: "10 km" },
        inService: 2012,
        users: ["Russia", "Syria", "Algeria", "India", "Iraq", "Iran", "Libya", "UAE", "20+ countries"],
        status: "Active",
        fact: "The Kornet-EM is an advanced Russian anti-tank guided missile with a maximum range of 10km, featuring laser beam-riding guidance and automatic target tracking. It can penetrate 1,300mm of armor after reactive armor and is also effective against helicopters and UAVs. Used extensively in modern conflicts, it represents one of the most lethal ATGMs in service today.",
        imageCredit: "Photo: Wikimedia Commons / CC BY-SA 4.0"
    },
    {
        id: 142,
        name: "Sigma 155 (Ro'em)",
        type: "Artillery",
        origin: "Israel",
        coords: [31.0461, 34.8516],
        images: [
            "assets/Sigma155.jpg",
            "assets/Sigma155_Bravo.jpg"
        ],
        imageCredits: [
            "Photo: IDF Spokesperson's Unit / CC BY-SA 3.0",
            "Photo: IDF Spokesperson's Unit / CC BY-SA 3.0"
        ],
        specs: { speed: "N/A", armament: "155mm L/52", maximumRange: "40 km" },
        inService: 2024,
        users: ["Israel", "Asia-Pacific (undisclosed)"],
        status: "Active",
        fact: "The Sigma 155, designated 'Ro'em' (thunderous) in Israel, is a wheeled 155mm self-propelled howitzer manufactured by Elbit Systems. Mounted on an Oshkosh 10x10 truck, it features a fully automated remote-controlled turret that allows a crew of just 3 to operate from inside an armored cabin. It can fire 8-10 rounds per minute, carry 40 rounds onboard, and transition from travel to fire mode in one minute. First operational firing by IDF gunners occurred in June 2024, replacing older M109 howitzers."
    },
    {
        id: 160,
        name: "ZALA Lancet-3",
        type: "Loitering Munition",
        origin: "Russia",
        coords: [56.8519, 60.6122],
        image: "assets/Lancet.jpg",
        specs: { speed: "80-110 km/h", armament: "3kg HE Warhead", maximumRange: "40 km" },
        inService: 2019,
        users: ["Russia"],
        status: "Active",
        fact: "The ZALA Lancet-3 is a Russian loitering munition developed by ZALA Aero Group, a subsidiary of Kalashnikov Concern. Weighing just 12kg, it can loiter over battlefields for 40 minutes before diving at up to 300 km/h onto targets. Often paired with the Orlan-10 reconnaissance drone for target acquisition, it has proven devastatingly effective against artillery, air defense systems, and armored vehicles. Upgraded variants carry heavier 5kg warheads or thermobaric payloads.",
        imageCredit: "Photo: Mztourist / Wikimedia Commons / CC BY 4.0"
    },
    {
        id: 161,
        name: "Aérospatiale Gazelle",
        type: "Light Helicopter",
        origin: "United Kingdom / France",
        coords: [48.8566, 2.3522],
        images: [
            "assets/Gazelle.jpg",
            "assets/Gazelle_Bravo.jpg"
        ],
        imageCredits: [
            "Photo: Aircaft @ Gloucestershire Airport By James / Flickr / CC BY-SA 2.0",
            "Photo: Airwolfhound / Wikimedia Commons / CC BY-SA 4.0"
        ],
        specs: { speed: "310 km/h", armament: "HOT ATGMs / 20mm Cannon", combatRadius: "670 km" },
        inService: 1973,
        users: ["France", "United Kingdom", "Egypt", "Kuwait", "Morocco", "Serbia", "Lebanon", "Qatar", "Syria", "Kenya"],
        status: "Active",
        fact: "The Aérospatiale Gazelle was the first helicopter to feature a fenestron (enclosed fan-in-fin tail rotor) instead of a conventional tail rotor, making it quieter and safer on the ground. Over 1,775 units were built between 1967-1996. British Army Gazelles saw action in the Falklands War, and French Gazelles armed with HOT missiles destroyed numerous Iraqi tanks during the Gulf War.",
        recognitionFeatures: {
            rotors: "Three-blade main rotor. Distinctive fenestron (enclosed fan-in-fin) tail rotor - no exposed tail rotor blades.",
            engine: "Single Turbomeca Astazou turboshaft mounted above cabin. Exhaust on left side behind rotor mast.",
            fuselage: "Sleek, streamlined cabin with large bubble canopy. Skid landing gear. Seats up to 5 (2 crew + 3 passengers).",
            tail: "Long, slender tail boom with prominent fenestron shroud at end. Small horizontal stabilizer on tail boom."
        }
    },
    {
        id: 176,
        name: "MH-6 Little Bird",
        type: "Light Helicopter",
        origin: "United States",
        coords: [36.5748, -76.0278], // Naval Station Norfolk / SOCOM base
        images: [
            "assets/MH6.jpg",
            "assets/MH6_Bravo.jpg"
        ],
        specs: { speed: "282 km/h", armament: "M134 Minigun / Hydra 70 rockets", combatRadius: "430 km" },
        inService: 1980,
        users: ["United States"],
        status: "Active",
        fact: "The MH-6 Little Bird is operated exclusively by the 160th Special Operations Aviation Regiment ('Night Stalkers'), the US Army's elite special operations aviation unit. So small it can land on a city rooftop or a ship's deck, it famously carried Delta Force operators on the external bench seats during the 1993 Battle of Mogadishu, as depicted in 'Black Hawk Down'.",
        recognitionFeatures: {
            rotors: "Five-blade main rotor. Conventional small tail rotor on right side. Very compact rotor disc.",
            engine: "Single Rolls-Royce 250-C30 turboshaft. Engine exhaust exits on the left side above and behind the cabin.",
            fuselage: "Tiny egg-shaped bubble canopy cabin seating 2 pilots side by side. Skid landing gear. External bench seats ('Little Bird benches') on each side can carry up to 3 operators per side.",
            tail: "Long, slender tail boom. Small fixed horizontal stabilizer with end plates near the tail rotor."
        },
        imageCredits: [
            "Photo: USASOC / U.S. Army / Public Domain",
            "Photo: Air Force Staff Sgt. Alexander Cook / U.S. Air Force / Public Domain"
        ]
    },
    {
        id: 162,
        name: "L129A1 Sharpshooter",
        type: "Sharpshooter Rifle",
        origin: "United States",
        coords: [41.6111, -90.5207],
        images: [
            "assets/L129A1.jpg",
            "assets/L129A1_Bravo.jpg"
        ],
        imageCredits: [
            "Photo: Stuart Hill/MOD / Open Government Licence version 1.0 (OGL v1.0)",
            "Photo: Stuart Hill/MOD / Open Government Licence v3.0"
        ],
        specs: { speed: "N/A", armament: "7.62x51mm NATO", effectiveRange: "800 m" },
        inService: 2010,
        users: ["United Kingdom", "New Zealand"],
        status: "Active",
        fact: "The L129A1 is a 7.62mm Sharpshooter rifle procured by the British Army to engage targets beyond the effective range of the 5.56mm SA80. Manufactured by Lewis Machine & Tool (LMT) in the US as the LM308MWS, it was selected over the HK417 and FN SCAR-H for its superior accuracy. It features a monolithic upper receiver and a quick-change barrel system.",
    },
    {
        id: 163,
        name: "Tupolev Tu-160 'Blackjack'",
        type: "Strategic Bomber",
        origin: "Russia",
        coords: [51.4880, 46.2120],
        images: [
            "assets/TU160.jpg",
            "assets/TU160_Bravo.jpg"
        ],
        imageCredits: [
            "Photo: Alex Beltyukov / Wikimedia Commons / CC BY-SA 3.0",
            "Photo: Igor Bubin / Wikimedia Commons / CC BY-SA 3.0"
        ],
        specs: { speed: "2,220 km/h (Mach 2.05)", armament: "Kh-55 / Kh-101 Cruise Missiles", ferryRange: "12,300 km" },
        inService: 1987,
        users: ["Russia"],
        status: "Active",
        fact: "The Tupolev Tu-160 (NATO: Blackjack) is the world's largest and heaviest combat aircraft, and the fastest bomber in service. Known to its pilots as the 'White Swan' due to its anti-flash white paint and graceful design, it features variable-sweep wings and can carry up to 40,000 kg of ordnance in two internal bays. It holds 44 world records for speed and altitude.",
        recognitionFeatures: {
            wings: "Variable-sweep wings (swing-wing). Long, tapered with blunt tips when extended. Swept back 65° for high speed.",
            engine: "Four large turbofan engines in two pods under the fixed wing roots. Rectangular intakes.",
            fuselage: "Massive, long tube-like fuselage with a pointed, slightly upturned nose. Blended wing-body design.",
            tail: "Large, swept-back vertical fin with a small bullet fairing. Cruciform tail with swept horizontal stabilizers mounted high on the fin."
        }
    },
    {
        id: 164,
        name: "Tupolev Tu-95 'Bear'",
        type: "Strategic Bomber",
        origin: "Russia",
        coords: [51.4880, 46.2120],
        images: [
            "assets/TU95.jpg",
            "assets/TU95_Bravo.jpg"
        ],
        imageCredits: [
            "Photo: RAF/MOD / Open Government Licence v2.0",
            "Photo: Ministry of Defence of the Russian Federation / Mil.ru / CC BY 4.0"
        ],
        specs: { speed: "925 km/h", armament: "Kh-55 / Kh-101 Cruise Missiles", ferryRange: "15,000 km" },
        inService: 1956,
        users: ["Russia"],
        status: "Active",
        fact: "The Tupolev Tu-95 (NATO: Bear) is a large, four-engine turboprop-powered strategic bomber and missile platform. First flown in 1952, it is the only propeller-driven strategic bomber still in operational use today. Its distinctive swept wings and contra-rotating propellers make it one of the loudest military aircraft in existence. It is expected to serve until at least 2040.",
        recognitionFeatures: {
            wings: "Swept-back wings (35° angle). High aspect ratio, mounted mid-fuselage. Four engine nacelles mounted on wings.",
            engine: "Four Kuznetsov NK-12 turboprops. Distinctive contra-rotating propellers (two props per engine spinning in opposite directions).",
            fuselage: "Long, slender tube-like fuselage. Pointed nose (often with refueling probe). Tail often features a gunner compartment.",
            tail: "Swept-back vertical fin. Swept-back horizontal stabilizers mounted on the fuselage tail cone."
        }
    },

    {
        id: 112,
        name: "WZ523",
        type: "APC",
        origin: "China",
        coords: [39.9042, 116.4074],
        images: [
            "assets/WZ523.jpg",
            "assets/WZ523_Bravo.jpg"
        ],
        specs: { speed: "85 km/h", armament: "12.7mm Heavy MG", operationalRange: "600 km" },
        inService: 1984,
        users: ["China", "Namibia", "Niger", "Gabon", "Ghana"],
        status: "Active",
        recognitionFeatures: {
            wheels: "6x6 wheeled configuration. Torsion bar suspension. Large gap between 2nd and 3rd wheel.",
            hull: "Boxy, boat-shaped hull with trim vane on front glacis for amphibious ops. Engine in center.",
            armament: "Typically a roof-mounted 12.7mm heavy machine gun (Type 54). Some variants have a small turret.",
            turret: "Small turret or cupola for MG. 2 observation ports on hull sides."
        },
        fact: "The WZ523 is fully amphibious, propelled by two waterjets at the rear. It was developed alongside the WZ551 but uses a truck chassis (Hanyang HY472) making it cheaper but less mobile off-road.",
        imageCredits: [
            "Namibian Army WZ523 APC",
            "Photo: Government of Ghana / Wikimedia Commons / CC0 1.0"
        ]
    },
    {
        id: 165,
        name: "Panzerhaubitze 2000",
        type: "Artillery",
        origin: "Germany",
        coords: [51.1657, 10.4515],
        images: [
            "assets/Panzerhaubitz_2000.jpg",
            "assets/Panzerhaubitz_2000_Bravo.jpg"
        ],
        imageCredits: [
            "Photo: Gerben van Es/Ministerie van Defensie / CC BY-SA 4.0",
            "Photo: A. Piladis, KAM / GFDL"
        ],
        specs: { speed: "60 km/h", armament: "155mm L52", maximumRange: "40 km" },
        inService: 1998,
        users: ["Germany", "Italy", "Netherlands", "Greece", "Lithuania", "Croatia", "Hungary", "Qatar", "Ukraine"],
        status: "Active",
        recognitionFeatures: {
            wheels: "7 road wheels per side with track return rollers. Drive sprocket at front.",
            hull: "Heavy, boxy hull. Driver's hatch on front right. Very noticeable travel lock for main gun on front glacis.",
            armament: "Distinctive 155mm L52 barrel with slotted muzzle brake and prominent bore evacuator.",
            turret: "Massive rear-mounted turret with sloped, wedge-like front and sides. Phased array radar for muzzle velocity measurement often visible above main gun."
        },
        fact: "The Panzerhaubitze 2000 (PzH 2000) is one of the most powerful conventional artillery systems deployed. It is capable of Multiple Rounds Simultaneous Impact (MRSI), automatically adjusting elevation between shots so up to five shells land on the target at the exact same moment. Dutch PzH 2000s saw extensive action in Afghanistan, proving highly effective in combat."
    },
    {
        id: 166,
        name: "M113 Armored Personnel Carrier",
        type: "APC",
        origin: "United States",
        coords: [38.8814, -77.0365],
        images: [
            "assets/M113.jpg",
            "assets/M113_Bravo.jpg"
        ],
        specs: { speed: "67 km/h", armament: "12.7mm M2 Browning", operationalRange: "480 km" },
        inService: 1960,
        users: ["United States", "Israel", "Australia", "Turkey", "Egypt", "Taiwan", "Greece", "South Korea", "Ukraine", "50+ countries"],
        status: "Active",
        recognitionFeatures: {
            wheels: "5 road wheels per side. Drive sprocket at front, idler at rear. No track return rollers.",
            hull: "Distinctive boxy, rectangular aluminum hull. Flat, slightly sloped front glacis with trim vane. Large fold-down rear ramp.",
            armament: "Typically a single .50 cal (12.7mm) M2 Browning heavy machine gun exposed on roof.",
            turret: "No enclosed turret on base models. Commander's cupola features gun mount and vision blocks."
        },
        fact: "The M113 is one of the most widely used armored vehicles in history, with over 80,000 produced worldwide. Its lightweight aluminum hull makes it air-transportable and capable of amphibious operations. It earned the nickname 'Green Dragon' by the Viet Cong during the Vietnam War due to its ability to break through heavy jungle.",
        imageCredits: [
            "Photo: U.S. Army photo by Sgt. Spencer Rhodes / Public Domain",
            "Photo: 208th Kaišiadorys infantry company KASP (MoD Lithuania) / GFDL"
        ]
    },
    {
        id: 167,
        name: "BM-21 Grad",
        type: "Artillery",
        origin: "Russia",
        coords: [55.7558, 37.6173],
        images: [
            "assets/BM21.jpg",
            "assets/BM21_Bravo.jpg"
        ],
        specs: { speed: "75 km/h", armament: "122mm 40-barrel MLRS", maximumRange: "40 km" },
        inService: 1963,
        users: ["Russia", "Ukraine", "Syria", "Egypt", "India", "Vietnam", "50+ countries"],
        status: "Active",
        recognitionFeatures: {
            wheels: "Mounted on 6x6 truck chassis (typically Ural-375D or Ural-4320).",
            hull: "Standard military truck cab, engine at front. Launchers mounted on rear bed.",
            armament: "Massive rectangular bank of 40 launch tubes (4 rows of 10 tubes).",
            turret: "No turret. The entire tube bank swivels and elevates for launching."
        },
        fact: "The BM-21 'Grad' (Russian for Hail) is the world's most widely used multiple rocket launcher. A single battalion of 18 launchers can deliver 720 rockets in 20 seconds, devastating an area of several square kilometers. It serves as the benchmark for modern MLRS systems.",
        imageCredits: [
            "Photo: Robert Wray / CC BY-SA 3.0",
            "Photo: Maksym Kozlenko / CC BY-SA 4.0"
        ]
    },
    {
        id: 168,
        name: "Flakpanzer Gepard",
        type: "Air Defense System",
        origin: "Germany",
        coords: [51.1657, 10.4515],
        images: [
            "assets/Gepard_1a2.jpg",
            "assets/Gepard_1a2_Bravo.jpg"
        ],
        specs: { speed: "65 km/h", armament: "2x 35mm Oerlikon KDA", effectiveRange: "5.5 km" },
        inService: 1976,
        users: ["Germany", "Brazil", "Jordan", "Romania", "Qatar", "Ukraine"],
        status: "Active",
        recognitionFeatures: {
            wheels: "7 road wheels per side with track return rollers. Leopard 1 chassis.",
            hull: "Standard Leopard 1 tank hull design with exhaust grilles on rear sides.",
            armament: "Two very long 35mm autocannons mounted externally on the turret sides.",
            turret: "Large, boxy turret housing crew. Tracking radar dish on front, spinning surveillance radar on rear roof."
        },
        fact: "The Flakpanzer Gepard is an all-weather, self-propelled anti-aircraft gun based on the Leopard 1 tank chassis. Designed during the Cold War to protect armored columns from attack helicopters and low-flying jets, it gained massive modern prominence in Ukraine where it proved highly effective at shooting down loitering munitions and cruise missiles using minimal and inexpensive 35mm ammunition.",
        imageCredits: [
            "Photo: Hans-Hermann Bühling / CC BY-SA 3.0 Unported — image modified (symbol removed)",
            "Photo: Hans-Hermann Bühling / CC BY-SA 2.0 Germany — image modified (symbol removed)"
        ]
    },
    {
        id: 178,
        name: "FIM-92 Stinger",
        type: "Air Defense System",
        origin: "United States",
        coords: [39.8283, -98.5795],
        images: [
            "assets/FIM92_Stinger.jpg",
            "assets/FIM92_Stinger_Bravo.png"
        ],
        specs: { speed: "Mach 2.54", armament: "3 kg HE warhead", engagementRange: "4.8 km" },
        inService: 1981,
        users: ["United States", "Ukraine", "Taiwan", "NATO allies", "29+ countries"],
        status: "Active",
        recognitionFeatures: {
            design: "Shoulder-fired MANPADS with a distinctive box-like IFF antenna (the 'hockey puck' or folding grid) often attached to the launcher tube/gripstock.",
            tube: "Long cylindrical launch tube with a flared front end and a prominent gripstock assembly housing the battery/coolant unit (BCU) pointing downwards.",
            sight: "Optical sight assembly mounted on the left side of the launch tube."
        },
        fact: "The FIM-92 Stinger is a Man-Portable Air-Defense System (MANPADS) that relies on an infrared seeker to track and engage aircraft. It famously shifted the balance of power during the Soviet-Afghan War in the 1980s when supplied to the Mujahideen, and remains heavily used today, particularly in Ukraine.",
        imageCredits: [
            "Photo: STAFF SGT. George / Public Domain",
            "Photo: Maryu / Wikimedia Commons / CC BY-SA 3.0"
        ]
    },
    {
        id: 169,
        name: "Type 075 LHD",
        type: "Naval Vessel",
        origin: "China",
        coords: [31.2304, 121.4737],
        images: ["assets/Type_075_LHD.jpg", "assets/Type_075_LHD_Bravo.jpg"],
        specs: {
            speed: "23 knots",
            armament: "2x H/PJ-11 30mm CIWS, 2x HHQ-10 SAM",
            operationalRange: "6,000 nautical miles"
        },
        inService: 2021,
        users: ["China"],
        status: "Active",
        recognitionFeatures: {
            size: "Massive amphibious assault ship (~250m long, ~36m beam). Broad, flat silhouette sits very low in the water compared to aircraft carriers, with no pronounced raised bow.",
            masts: "Two enclosed mast towers with large flat-panel AESA radar arrays on all four faces. Forward mast is taller and positioned just ahead of the island; a smaller secondary mast sits aft.",
            armament: "Two H/PJ-11 11-barrel 30mm CIWS mounts (fore and aft of the island) and two HHQ-10 short-range SAM launchers on deck-edge sponsons. No large gun turrets or VLS cells.",
            superstructure: "Compact, boxy island superstructure set well to the starboard side and positioned aft of amidships — leaving the forward two-thirds of the flight deck completely clear.",
            hull: "Full-length flat flight deck with no ski-jump ramp. Squared-off transom stern with a large floodable well-deck gate for launching landing craft. Raked plumb bow with a slight knuckle at the waterline."
        },
        fact: "China's first domestically produced Landing Helicopter Dock, the Type 075 can simultaneously operate up to 30 helicopters and land a full marine battalion by air and sea in a single wave. Three vessels were built in rapid succession between 2018 and 2024, a pace that surprised Western naval analysts.",
        imageCredits: [
            { author: "迪圖春秋", source: "Wikimedia Commons", license: "CC BY-SA 4.0", url: "https://commons.wikimedia.org/wiki/File:Hainan_(31)_moored_at_China_Merchants_Wharf.jpg" },
            { author: "星海军事", source: "Wikimedia Commons", license: "CC BY 4.0", url: "https://commons.wikimedia.org/wiki/File:Type_075.jpg" }
        ]
    },
    {
        id: 170,
        name: "Ohio-class SSBN",
        type: "Naval Vessel",
        origin: "United States",
        coords: [47.7423, -122.7275], // Naval Base Kitsap (Bangor)
        images: ["assets/Ohio_Class_SSBN.jpg"],
        specs: {
            speed: "25 knots (submerged)",
            armament: "20x Trident II D5 SLBMs, 4x 533mm torpedo tubes",
            operationalRange: "Unlimited (nuclear)"
        },
        inService: 1981,
        users: ["United States"],
        status: "Active",
        recognitionFeatures: {
            size: "Extremely large nuclear submarine (170m length, 13m beam) with a long continuous flat 'turtleback' behind the sail.",
            masts: "Retractable sensor/periscope masts housed within the sail; rarely visible when surfaced for transit.",
            armament: "No visible surface armament. Two rows of 10 large missile hatches run flush along the turtleback behind the sail.",
            superstructure: "Relatively small, streamlined sail positioned far forward on the hull, featuring traditional sail-mounted diving planes.",
            hull: "Long cylindrical pressure hull with a rounded blunt bow and a single seven-bladed propeller at the tapered stern."
        },
        fact: "The largest submarines ever built for the U.S. Navy, the Ohio-class carries roughly half of all active U.S. strategic thermonuclear warheads. Because their nuclear reactors provide near-unlimited endurance, their patrol lengths are constrained only by the amount of food they can carry for the 155-man crew.",
        imageCredits: [
            { author: "U.S. Navy", source: "Wikimedia Commons", license: "Public Domain", url: "https://commons.wikimedia.org/wiki/File:USS_Maryland_(SSBN_738).jpg" }
        ]
    },
    {
        id: 171,
        name: "Astute-class Submarine",
        type: "Naval Vessel",
        origin: "United Kingdom",
        coords: [56.0664, -4.8197], // HMNB Clyde (Faslane)
        images: ["assets/Astute.jpg", "assets/Astute_Bravo.jpg"],
        specs: {
            speed: "30 knots (submerged)",
            armament: "6x 533mm torpedo tubes (Spearfish, Tomahawk Block IV)",
            operationalRange: "Unlimited (nuclear)"
        },
        inService: 2010,
        users: ["United Kingdom"],
        status: "Active",
        recognitionFeatures: {
            size: "Large nuclear fleet submarine (97m length, 11m beam). Sleek profile that appears significantly more angled and angular than older cylindrical submarines.",
            masts: "Features two non-hull-penetrating optronic masts instead of traditional periscopes, housed within the sail.",
            armament: "Hidden internally. Six torpedo tubes located in the bow section.",
            superstructure: "Distinctively angled, stepped sail (fin) positioned forward of amidships. The sail flares out at the base where it meets the hull, giving it a unique chined appearance.",
            hull: "Stealthy, angular hull completely covered in over 39,000 anechoic acoustic tiles. The bow slopes down sharply, and the stern ends in a pump-jet propulsor rather than an exposed propeller."
        },
        fact: "The Astute-class is the largest and most advanced attack submarine ever built for the Royal Navy. Its Rolls-Royce PWR2 nuclear reactor never needs to be refueled over the submarine's 25-year lifespan, and it can manufacture its own oxygen and fresh water from the ocean, meaning it only needs to surface to resupply food.",
        imageCredits: [
            { author: "LA(Phot) Paul Halliwell/MOD", source: "Defence Imagery", license: "OGL v1.0", url: "https://commons.wikimedia.org/wiki/File:Royal_Navy_Submarine_HMS_Astute_Returns_to_HMNB_Clyde_MOD_45153736.jpg" },
            { author: "LA(Phot) Will Haigh", source: "Wikimedia Commons", license: "OGL v1.0", url: "https://commons.wikimedia.org/wiki/File:HMS_Ambush.jpg" }
        ]
    },
    {
        id: 172,
        name: "Arleigh Burke-class Destroyer",
        type: "Naval Vessel",
        origin: "United States",
        coords: [36.9389, -76.3242], // Naval Station Norfolk
        images: ["assets/Burke.jpg", "assets/Burke_Bravo.jpg"],
        specs: {
            speed: "30+ knots",
            armament: "90-96x Mk 41 VLS cells, 1x 5-inch Mk 45 gun, CIWS",
            operationalRange: "4,400 nautical miles"
        },
        inService: 1991,
        users: ["United States"],
        status: "Active",
        recognitionFeatures: {
            size: "Medium-to-large surface combatant (154m length, 18m beam). Broad-shouldered hull designed for stability rather than just speed.",
            masts: "Considerably angled, swept-back tripod mainmast. To reduce its radar signature, the mast is enclosed rather than leaving the lattice framework exposed.",
            armament: "Prominent 5-inch Mk 45 deck gun on the bow. Flush Mk 41 VLS cells built into the deck forward of the bridge and aft of the superstructure.",
            superstructure: "Stealth-influenced 'faceted' superstructure built with raked, angled surfaces rather than vertical bulkheads. Mounts four large, flat octagonal SPY-1 radar arrays.",
            hull: "Steel hull and superstructure (rather than aluminum) with angled sides. Has a raised bow that flares outward vigorously, and a flight deck at the stern."
        },
        fact: "The Arleigh Burke-class is the longest-running destroyer production program in U.S. Navy history. Built around the revolutionary Aegis Combat System, these ships were the first U.S. Navy vessels to be designed specifically to combat the threat of massive Soviet anti-ship missile raids during the Cold War.",
        imageCredits: [
            { author: "U.S. Navy photo by Journalist 2nd Class Patrick Reilly", source: "Navy.mil", license: "Public Domain", url: "http://www.navy.mil/view_image.asp?id=5114" },
            { author: "MC2 James R. Evans/U.S. Navy", source: "Wikimedia Commons", license: "Public Domain", url: "https://commons.wikimedia.org/wiki/File:Flickr_-_Official_U.S._Navy_Imagery_-_The_Arleigh_Burke-class_guided-missile_destroyer_USS_Momsen_(DDG_92)_arrives_alongside_the_Nimitz-class_aircraft_carrier_USS_Carl_Vinson_(CVN_70).jpg" }
        ]
    },
    {
        id: 173,
        name: "Type 052D Destroyer",
        type: "Naval Vessel",
        origin: "China",
        coords: [18.2255, 109.5212], // Yulin Naval Base, Hainan
        images: ["assets/Type052D.jpg", "assets/Type052D_Bravo.jpg"],
        specs: {
            speed: "30 knots",
            armament: "64x universal VLS cells, 1x 130mm gun, CIWS",
            operationalRange: "4,500 nautical miles"
        },
        inService: 2014,
        users: ["China"],
        status: "Active",
        recognitionFeatures: {
            size: "Medium-to-large guided missile destroyer (157-161m length, 17-18m beam). Sleek profile compared to older Chinese combatants.",
            masts: "Large enclosed, radar-absorbent mainmast sitting directly above the bridge. A shorter, secondary structural mast sits further aft near the funnel.",
            armament: "A very large, stealthy-cupola 130mm main gun dominates the bow. Type 730/1130 CIWS is mounted atop the bridge, and an HHQ-10 missile CIWS is mounted atop the aft hangar.",
            superstructure: "Stealthy, angled forward superstructure housing four flat-panel Type 346A active electronically scanned array (AESA) radars, similar to the US Aegis system.",
            hull: "Flush deck design transitioning to a lowered helicopter flight deck at the aft extreme. No stepped forecastle."
        },
        fact: "Nicknamed the 'Chinese Aegis', the Type 052D is a modern, mass-produced multi-role surface combatant. It's the first Chinese destroyer to adopt a universal, canister-based Vertical Launch System (VLS) instead of dedicated launch systems for different missile types.",
        imageCredits: [
            { author: "Bestalex", source: "Wikimedia Commons", license: "CC BY-SA 4.0", modified: "image modified (flags removed)", url: "https://commons.wikimedia.org/wiki/File:Type-052D_destroyer_Jiaozuo_%E7%84%A6%E4%BD%9C_(163)_during_a_visit_to_Saint_Petersburg,_Russia_(July_26,_2024).jpg" },
            { author: "日本防衛省・統合幕僚監部", source: "Wikimedia Commons", license: "CC BY 4.0", url: "https://www.mod.go.jp/js/Press/press2019/press_pdf/p20190726_03.pdf" }
        ]
    },
    {
        id: 174,
        name: "Slava-class Cruiser",
        type: "Naval Vessel",
        origin: "Russia",
        coords: [69.0689, 33.4162], // Severomorsk Naval Base
        images: ["assets/Slava.jpg", "assets/Slava_Bravo.jpg"],
        specs: {
            speed: "32 knots",
            armament: "16x P-1000 Vulkan ASMs, 64x S-300F SAMs, Twin 130mm gun",
            operationalRange: "10,000 nautical miles"
        },
        inService: 1982,
        users: ["Russia"],
        status: "Active",
        recognitionFeatures: {
            size: "Large guided missile cruiser (186m length, 21m beam). Characterized by a very long, heavily customized forward deck.",
            masts: "Features a massive pyramidal forward mast overloaded with raked sensor arrays and EW antennas, and a secondary mast midships.",
            armament: "Twin 130mm gun turret on the bow. The most striking feature is the eight massive twin-tube launch canisters (16 total) for P-1000 Vulkan anti-ship missiles flanking the forward superstructure.",
            superstructure: "Blocky, tiered forward superstructure. A large standalone structure aft houses the massive spherical 'Top Dome' radar (for S-300F missile guidance).",
            hull: "Long stepped hull with a noticeably raised forecastle (front deck). Features a helicopter flight deck at the very rear, below the level of the main deck."
        },
        fact: "The Slava-class (Project 1164 Atlant) was designed as a highly-armed, conventionally powered, and less expensive alternative to the massive Kirov-class nuclear battlecruisers. The lead ship of the class, Moskva, served as the flagship of the Russian Black Sea Fleet until it was sunk by Ukrainian Neptune missiles in April 2022.",
        imageCredits: [
            { author: "George Chernilevsky", source: "Wikimedia Commons", license: "Public Domain", url: "https://commons.wikimedia.org/wiki/File:Project_1164_Moskva_2009_G1.jpg" },
            { author: "LPHOT SEELEY/MOD", source: "Defence Imagery", license: "OGL v1.0", url: "https://commons.wikimedia.org/wiki/File:Russian_cruiser_Marshal_Ustinov_MOD_45164875.jpg" }
        ]
    },
    {
        id: 175,
        name: "Visby-class Corvette",
        type: "Naval Vessel",
        origin: "Sweden",
        coords: [56.1033, 15.5866], // Karlskrona Naval Base
        images: ["assets/Visby.jpg", "assets/Visby_Bravo.jpg"],
        specs: {
            speed: "35+ knots",
            armament: "1x 57mm Bofors gun, 8x RBS15 ASMs, 4x 400mm torpedoes",
            operationalRange: "2,500 nautical miles"
        },
        inService: 2002,
        users: ["Sweden"],
        status: "Active",
        recognitionFeatures: {
            size: "Small-to-medium coastal corvette (73m length, 10m beam). Extreme geometric stealth profile with almost no exposed equipment.",
            masts: "A single, highly integrated enclosed pyramidal 'stealth mast' housing all radar and communication systems. No exposed lattice wiring or spinning arrays.",
            armament: "The 57mm Bofors main gun rests inside a stealthy, multi-faceted cupola whose barrel can literally fold away and hide inside the turret when not firing to reduce radar signature. Anti-ship missiles and torpedoes are hidden entirely within the hull.",
            superstructure: "A single, sloping continuous block that blends seamlessly into the hull. Features heavily raked, flat surfaces designed to deflect radar waves.",
            hull: "Extremely angular, multi-faceted hull with a pointed bow and a flat, flush flight deck at the stern. Exhaust is expelled underwater at the stern rather than through traditional funnels."
        },
        fact: "The Visby-class was the first vessel in the world to feature fully operational stealth technology. Its hull is constructed almost entirely from a carbon-fiber-reinforced plastic sandwich, making it completely non-magnetic, highly shock-resistant, and roughly 50% lighter than equivalent steel.",
        imageCredits: [
            { author: "Mark Harkin", source: "Wikimedia Commons", license: "CC BY 2.0", url: "https://commons.wikimedia.org/wiki/File:K31_HSwMS_Visby_(8643086211).jpg" },
            { author: "Einarspetz", source: "Wikimedia Commons", license: "CC BY-SA 3.0", url: "https://commons.wikimedia.org/wiki/File:Helsingb_(2).JPG" }
        ]
    },
    {
        id: 200,
        name: "Type 08",
        type: "IFV",
        origin: "China",
        coords: [35.8617, 104.1954],
        image: "assets/Type08.jpg",
        specs: { speed: "100 km/h", armament: "105mm gun (ZTL-11) or 30mm (ZBL-08)", operationalRange: "800 km" },
        inService: 2008,
        users: ["China", "Venezuela", "Thailand", "Nigeria"],
        status: "Active",
        recognitionFeatures: {
            wheels: "8x8 wheeled chassis. Evenly spaced large wheels.",
            hull: "Boat-shaped hull for amphibious operations with a trim vane at the front.",
            armament: "105mm rifled gun on the ZTL-11 assault gun variant, or 30mm autocannon on the ZBL-08 variant.",
            turret: "Angular welded turret mounted towards the rear of the hull on the assault gun variant."
        },
        fact: "The Type 08 is a family of eight-wheeled amphibious, modular armored vehicles. The ZTL-11 variant functions as an assault gun and tank destroyer, armed with a 105mm rifled gun capable of firing armor-piercing rounds and anti-tank guided missiles.",
        imageCredit: "Photo: Tyg728 / Wikimedia Commons / CC BY-SA 4.0"
    },
    {
        id: 201,
        name: "LAV VI",
        type: "IFV",
        origin: "Canada",
        coords: [45.4215, -75.6972],
        image: "assets/Lav6.jpg",
        specs: { speed: "100 km/h", armament: "25mm M242 Bushmaster", operationalRange: "600 km" },
        inService: 2015,
        users: ["Canada", "Saudi Arabia"],
        status: "Active",
        recognitionFeatures: {
            wheels: "8x8 wheeled chassis with noticeable wheel hubs. Upgraded, heavy-duty suspension.",
            hull: "Double-V hull (DVH) for improved mine protection. Noticeably bulkier and higher profile than earlier LAVs due to heavy add-on armor.",
            armament: "25mm Bushmaster chain gun mounted in a two-man turret.",
            turret: "Sloped, angular turret with thermal sights, laser warning receivers, and smoke grenade dischargers."
        },
        fact: "The LAV VI (LAV 6) is a heavily upgraded version of the LAV III, developed in response to Canadian military experiences in Afghanistan. Its Double-V Hull (DVH) provides significantly improved protection against improvised explosive devices (IEDs) and landmines.",
        imageCredit: "Photo: Amqui / Wikimedia Commons / CC BY-SA 4.0 — image modified (number plate blurred)"
    },
    {
        id: 202,
        name: "GQL-111",
        type: "Combat Engineer Vehicle",
        origin: "China",
        coords: [35.8617, 104.1954],
        image: "assets/GQL111.jpg",
        specs: { speed: "90 km/h", armament: "None", operationalRange: "800 km" },
        inService: 2005,
        users: ["China", "Peru"],
        status: "Active",
        recognitionFeatures: {
            wheels: "8x8 heavy truck chassis, typically with large off-road tires.",
            hull: "Standard forward cab configuration with a massive folding bridge payload carried on the rear flatbed.",
            deployment: "Utilizes a scissors-type unfolding mechanism operated hydraulically from the rear of the vehicle to extend the bridge section.",
            payload: "Carries a distinct foldable bridge span that rests flat and extends over the cab during transport."
        },
        fact: "The GQL-111 is a Chinese truck-mounted scissors-type heavy mechanized bridge system designed to quickly span rivers and anti-tank ditches. A single vehicle can deploy a 15-meter bridge segment in under 10 minutes, and multiple segments can be connected for wider crossings.",
        imageCredit: "Photo: Bryan L. Castro / Wikimedia Commons / CC BY-SA 4.0"
    },
    {
        id: 203,
        name: "Pilatus PC-21",
        type: "Trainer Aircraft",
        origin: "Switzerland",
        coords: [46.8182, 8.2275],
        image: "assets/PC_21.jpg",
        specs: { speed: "685 km/h (370 kn)", armament: "Optional: up to 1,150 kg on 5 hardpoints (gun pods, rockets, light bombs)", range: "1,330 km" },
        inService: 2008,
        users: ["Switzerland", "Singapore", "United Arab Emirates", "Qatar", "Saudi Arabia", "Australia", "Spain", "France", "Jordan", "India"],
        status: "Active",
        recognitionFeatures: {
            wings: "Low-mounted, gently swept monoplane wings with distinctive downturned winglets at the tips. Clean, fighter-like planform.",
            engine: "Single Pratt & Whitney Canada PT6A-68B turboprop driving an unmistakable 5-blade scimitar-shaped graphite propeller behind a large pointed spinner.",
            fuselage: "Tandem stepped cockpit — the rear instructor seat is raised noticeably above the front student seat — under a large one-piece bubble canopy. Sharply pointed nose.",
            tail: "Single swept vertical stabiliser with a small ventral fin beneath the rear fuselage; low-set tailplane."
        },
        fact: "Despite being a propeller aircraft, the PC-21 is so advanced it lets air forces shift a large slice of fast-jet training off expensive fighters and onto the turboprop. Its glass cockpit can simulate radar, weapons, and even mid-air refuelling on the displays, and an automatic power-management system gives it near-jet handling — it can sustain +8/-4 g and out-accelerate some early jet trainers. Switzerland, France, and the RAAF all run their entire advanced pilot pipelines on it.",
        imageCredit: "Photo: Daniel Baumgartner / Wikimedia Commons / CC BY-SA 2.5 — image modified (background removed)"
    },
    {
        id: 204,
        name: "SAR 21 MMS",
        type: "Assault Rifle",
        origin: "Singapore",
        coords: [1.3521, 103.8198],
        image: "assets/SAR_21_MMS.jpg",
        specs: { speed: "N/A", armament: "5.56x45mm NATO", effectiveRange: "460 m" },
        inService: 1999,
        users: ["Singapore", "Bahrain", "Brunei"],
        status: "Active",
        recognitionFeatures: {
            configuration: "Compact bullpup layout — magazine and action sit well behind the trigger/pistol grip, packing a full-length barrel into a short overall length.",
            handguard: "Distinctive smooth, rounded one-piece polymer shell, usually black, with an integral vertical fore-grip moulded beneath the handguard.",
            optics: "The MMS (Multi-Mission System) variant carries a full-length Picatinny top rail for modular optics, replacing the standard SAR 21's fixed integrated 1.5x scope.",
            magazine: "Standard translucent STANAG-pattern 30-round magazine inserted at the rear, behind the pistol grip."
        },
        fact: "Because a bullpup puts the chamber right beside the firer's cheek, ST Kinetics built an internal Kevlar cheek-plate into the SAR 21's receiver — a safety feature designed to shield the shooter's face if a cartridge ruptures. It was Singapore's first indigenously designed service rifle, replacing the licence-built M16S1 in 1999, and the standard model was unusual for shipping with an integrated optical scope as standard rather than iron sights.",
        imageCredit: "Photo: Mztourist / Wikimedia Commons / CC BY-SA 4.0"
    },
    {
        id: 205,
        name: "Naval Strike Missile (NSM)",
        type: "Anti-Ship Missile",
        origin: "Norway",
        coords: [59.9139, 10.7522],
        images: [
            "assets/NSM.jpg",
            "assets/NSM_Bravo.jpg"
        ],
        specs: { speed: "High subsonic (Mach 0.9)", armament: "125 kg HE blast-fragmentation", maximumRange: "185+ km" },
        inService: 2012,
        users: ["Norway", "Poland", "United States", "Malaysia", "Germany", "Romania", "Canada", "Australia"],
        status: "Active",
        recognitionFeatures: {
            body: "Slender, faceted composite airframe with a chined, trapezoidal cross-section designed to minimise radar signature — a clearly stealthy shape rather than a simple tube.",
            wings: "Pop-out mid-body wings and rear tail fins that deploy after launch; these fold flush inside the storage/launch canister.",
            seeker: "Blunt, faceted nose housing a passive imaging infrared (IIR) seeker — it carries no emitting radar, making it hard to detect or jam.",
            propulsion: "Turbojet sustainer for the cruise phase with a jettisonable solid-rocket booster at the tail for launch."
        },
        fact: "Unlike most anti-ship missiles, the NSM uses a passive imaging-infrared seeker with onboard target recognition instead of an active radar — so it emits nothing to warn or jam, and can autonomously pick a specific aim point on a chosen ship. Fully sea-skimming, it can also fly terrain-following profiles over land and weave through littoral/island clutter, throwing random evasive manoeuvres in the terminal dive. Its air-launched derivative, the Joint Strike Missile (JSM), is the only anti-ship missile designed to fit inside the F-35's internal weapons bay.",
        imageCredits: [
            "Photo: Peterdx / Wikimedia Commons / Public Domain",
            "Photo: Peterdx / Wikimedia Commons / Public Domain"
        ]
    },
    {
        id: 206,
        name: "NORA B-52 M15",
        type: "Artillery",
        origin: "Serbia",
        coords: [44.7866, 20.4489],
        images: [
            "assets/NORA_B52.jpg",
            "assets/NORA_B52_Bravo.jpg"
        ],
        specs: { speed: "90 km/h", armament: "155mm L/52 gun-howitzer", maximumRange: "41 km (54+ km rocket-assisted)" },
        inService: 2015,
        users: ["Serbia", "Bangladesh", "Myanmar", "Cyprus", "Kenya"],
        status: "Active",
        recognitionFeatures: {
            wheels: "Mounted on a high-mobility 8×8 wheeled truck chassis with large off-road tyres — a wheeled gun-truck, not a tracked vehicle. Hydraulic stabiliser spades drop at the rear to brace the platform before firing.",
            hull: "Forward boxy armoured crew cab sitting over the engine, with a long flat load bed behind carrying the fully-enclosed gun module and ammunition stowage.",
            armament: "Very long 155mm/52-calibre ordnance with a large multi-baffle muzzle brake; in travel order the barrel is clamped high and pointing rearward over the back axles.",
            turret: "Distinctive of the M15: a large, fully-armoured and climate-controlled automated gun module at the rear with an onboard autoloader, so the crew operates the howitzer without ever leaving cover."
        },
        fact: "Built by Yugoimport SDPR, the NORA B-52 series is described by Serbia as one of the most successful products of its defence industry. The M15 is its top-end fully-automated variant: an onboard autoloader and armoured rear gun module let a small crew fight entirely from under cover, and it can unlimber, fire and 'shoot-and-scoot' away in about 60 seconds to escape counter-battery fire. The 52-calibre barrel reaches roughly 41 km with extended-range rounds and over 54 km with rocket-assisted projectiles, and can fire a multiple-rounds-simultaneous-impact (MRSI) burst so several shells from one vehicle strike the target at the same moment.",
        imageCredits: [
            "Photo: Serbian Ministry of Defence / Wikimedia Commons / CC BY-SA 4.0",
            "Photo: Srđan Popović / Wikimedia Commons / CC BY-SA 4.0"
        ]
    },
    {
        id: 207,
        name: "Zastava M21 C",
        type: "Assault Rifle",
        origin: "Serbia",
        coords: [44.0165, 20.9114],
        image: "assets/Zastava_M21_C.jpg",
        specs: { speed: "N/A", armament: "5.56x45mm NATO", effectiveRange: "500 m" },
        inService: 2004,
        users: ["Serbia"],
        status: "Active",
        recognitionFeatures: {
            configuration: "Modernised Kalashnikov-pattern layout — long-stroke gas piston above the barrel, pistol grip, magazine ahead of the trigger. The 'C' is the compact carbine: a shortened barrel and a side-folding skeleton stock for a much smaller package than the standard M21.",
            handguard: "Ribbed polymer fore-end over a short barrel, with a sloped AK-style gas block and front sight base, and the gas tube running above the barrel.",
            optics: "Flat-top receiver with an integral Picatinny rail for optics (plus folding back-up iron sights) — a Western-style mounting that replaces the AK's traditional rear-sight notch.",
            magazine: "Curved 30-round 5.56mm magazine in Zastava's own proprietary waffle-ribbed pattern; it is NOT interchangeable with STANAG/M16 magazines."
        },
        fact: "The Zastava M21 was Serbia's first standard-issue rifle chambered in 5.56×45mm NATO, replacing the 7.62×39mm M70 (a Yugoslav AK derivative) as part of Serbia's shift toward NATO-standard ammunition. It keeps the rugged Kalashnikov long-stroke gas-piston action but adds a flat-top optics rail and modern furniture. The 'C' carbine variant pairs a shortened barrel with a side-folding skeleton stock, making it the compact version intended for vehicle crews, paratroopers and special units.",
        imageCredit: "Photo: Slatibarfast / Wikimedia Commons / CC BY-SA 3.0 Unported"
    },
    {
        id: 208,
        name: "Zuzana 2",
        type: "Artillery",
        origin: "Slovakia",
        coords: [48.1486, 17.1077],
        image: "assets/Zuzana_2.jpg",
        specs: { speed: "90 km/h", armament: "155mm L/52 gun-howitzer", maximumRange: "41 km" },
        inService: 2021,
        users: ["Slovakia", "Ukraine"],
        status: "Active",
        recognitionFeatures: {
            wheels: "Carried on a high-mobility Tatra 8×8 wheeled chassis with large off-road tyres and a central rear stabiliser — a wheeled gun system rather than a tracked one.",
            hull: "Forward boxy armoured crew cab over the engine, with the large rotating turret assembly mounted on the rear of the chassis.",
            armament: "Long 155mm/52-calibre ordnance with a muzzle brake, carried in an open external cradle that sits in the gap between the two halves of the turret rather than inside an enclosed mantlet.",
            turret: "Unmistakable split twin-box turret — two separate armoured compartments with the gun cradle and autoloader exposed in the gap between them. This distinctive layout is the signature of the Slovak Zuzana/DANA family."
        },
        fact: "The Zuzana 2 is a Slovak 155mm/52-calibre NATO-standard self-propelled howitzer built by Konštrukta Defence, developed from the earlier 45-calibre Zuzana and the Soviet-era DANA. Its hallmark is the unusual split turret with the gun and autoloader mounted externally in the gap between two crew/equipment boxes. Fully automated loading lets it fire around 5–6 rounds a minute and 'shoot-and-scoot' before counter-battery fire arrives, reaching roughly 41 km with extended-range ammunition. Slovakia supplied Zuzana 2 systems to Ukraine, where they have been used in combat.",
        imageCredit: "Photo: Pfc. Jacob Bradford / U.S. Army / Public Domain"
    },
    {
        id: 209,
        name: "VHS",
        type: "Assault Rifle",
        origin: "Croatia",
        coords: [45.8150, 15.9819],
        image: "assets/VHS_2.jpg",
        specs: { speed: "N/A", armament: "5.56x45mm NATO", effectiveRange: "500 m" },
        inService: 2009,
        users: ["Croatia"],
        status: "Active",
        recognitionFeatures: {
            configuration: "Compact bullpup layout — the magazine and action sit behind the trigger/pistol grip, packing a full-length barrel into a short overall length. Smooth, rounded one-piece polymer shell with clean lines, often likened to the French FAMAS.",
            handguard: "Integral polymer fore-end moulded into the one-piece shell with a forward finger-stop, giving a clean, slab-sided profile with few external attachments.",
            optics: "The long 'D' variant carries a raised carry-handle with an integrated optical sight built into it; the short 'K' carbine omits it for a low-profile receiver.",
            magazine: "Standard translucent STANAG-pattern 30-round magazine — interchangeable with NATO/M16 magazines, unlike several other national service rifles."
        },
        fact: "The VHS is a Croatian bullpup assault rifle made by HS Produkt — the same company behind the HS2000 pistol, sold worldwide as the Springfield Armory XD. Croatia's indigenous standard service rifle, it comes in a long 'D' version with an integrated carry-handle optic and a short 'K' carbine. Its smooth, rounded polymer shell gives it a strong family resemblance to the French FAMAS, and unlike many national designs it feeds from common STANAG magazines. The improved second-generation VHS-2 later refined the design with ambidextrous controls and added rails.",
        imageCredit: "Photo: U.S. Army Europe Images / Flickr / CC BY 2.0"
    },
    {
        id: 210,
        name: "NIMR Ajban",
        type: "Patrol Vehicle",
        origin: "United Arab Emirates",
        coords: [24.4539, 54.3773],
        image: "assets/Nimr_ajban.jpg",
        specs: { speed: "110 km/h", armament: "7.62mm / 12.7mm machine gun (roof mount)", operationalRange: "700 km" },
        inService: 2013,
        users: ["United Arab Emirates", "Jordan", "Lebanon", "Algeria"],
        status: "Active",
        recognitionFeatures: {
            wheels: "4×4 layout on four large off-road run-flat tyres with deep tread and pronounced ground clearance; squared, angular wheel arches cut into the bodywork.",
            hull: "Highly faceted, slab-sided monocoque protected hull — a sharply sloped, angular bonnet with a row of horizontal louvre vents, a near-vertical faceted radiator grille and flat windscreen, sitting on a blast-protected V-hull on the armoured variants.",
            armament: "Light-vehicle armament only — a roof ring mount or remote weapon station for a pintle-mounted 7.62mm or 12.7mm machine gun; the patrol/internal-security variant is frequently fielded unarmed.",
            turret: "No turret — a circular open roof hatch/weapon ring (or low-profile RWS) above the crew compartment rather than an enclosed gun turret."
        },
        fact: "The NIMR Ajban is a 4×4 light protected patrol and tactical vehicle built by NIMR Automotive, the Abu Dhabi-based vehicle arm of the UAE's EDGE Group — making it one of the few armoured vehicles in service designed and produced in the Gulf rather than the usual US/European/Russian suppliers. The Ajban 440A is the protected internal-security member of a modular family that shares a common chassis across patrol, command, ambulance and weapons-carrier roles. Built around a V-shaped hull for mine and IED protection, run-flat tyres and a roughly 7.5-tonne class GVW, it forms the backbone of UAE land forces and has been exported across the Middle East and North Africa.",
        imageCredit: "Photo: AboJasam909 / Wikimedia Commons / CC0 1.0 Public Domain"
    },
    {
        id: 211,
        name: "Milkor MGL",
        type: "Grenade Launcher",
        origin: "South Africa",
        coords: [-25.7479, 28.2293],
        image: "assets/MGL.jpg",
        specs: { speed: "N/A", armament: "40×46mm grenade (6-round cylinder)", effectiveRange: "375 m" },
        inService: 1983,
        users: ["South Africa", "United States", "United Kingdom", "India", "60+ countries"],
        status: "Active",
        recognitionFeatures: {
            configuration: "Unmistakable oversized-revolver layout — a fat rotating six-shot cylinder sits between the pistol grip and a short barrel, with a folding or collapsible skeleton shoulder stock. It looks like a giant revolver rather than a rifle.",
            handguard: "A forward pistol/fore-grip ahead of the cylinder for the support hand; there is very little conventional handguard, as the large spring-wound cylinder dominates the centre of the weapon.",
            optics: "Almost always wears a non-magnifying reflex/red-dot sight on a top rail or arm (early models used an Armson OEG collimator), mounted high to clear the cylinder, with a ladder-type quadrant backup for indirect fire.",
            magazine: "Feeds from a spring-driven six-round revolving cylinder rather than a box magazine — the cylinder is wound under spring tension to index each 40mm round, and is reloaded by swinging the barrel/frame open like a break-action revolver."
        },
        fact: "The Milkor MGL (Multiple Grenade Launcher) is a South African 40mm six-shot revolver-type grenade launcher developed by Milkor in the early 1980s and adopted by the South African Defence Force in 1983. Its spring-driven cylinder lets a single soldier put six 40mm grenades downrange in under three seconds — a huge jump in firepower over single-shot launchers like the underbarrel M203. It became one of South Africa's most successful arms exports, now used by 50+ countries; the US Marine Corps adopted a licensed, lighter version as the M32. The example pictured is a unit trialled in Sweden.",
        imageCredit: "Photo: Armémuseum / Wikimedia Commons / CC BY 4.0 — image modified (cropped)"
    },
    {
        id: 212,
        name: "Piorun",
        type: "Air Defense System",
        origin: "Poland",
        coords: [52.2297, 21.0122],
        image: "assets/Piorun.jpg",
        specs: { speed: "~660 m/s (Mach 1.9)", armament: "Single IR/UV-guided missile (~1.8 kg warhead)", engagementRange: "6.5 km" },
        inService: 2019,
        users: ["Poland", "Ukraine", "Norway", "Estonia"],
        status: "Active",
        recognitionFeatures: {
            design: "Shoulder-fired MANPADS in the classic Soviet-derived layout it grew out of — a slim launch tube carried on the shoulder with a separate gripstock/trigger unit clipped underneath. Often seen fitted to a lightweight pintle or the twin-rail 'Poprad'/tripod mounts.",
            tube: "Plain cylindrical launch/transport tube, noticeably more slender than the Stinger's, with a forward end cap. Houses a single missile using a dual-band infrared/ultraviolet seeker and a proximity fuze, which lets it kill small targets like drones and cruise missiles.",
            sight: "Simple optical day sight on the side of the tube, plus a clip-on thermal/night-sight module and an IFF unit on the gripstock for 24-hour engagement."
        },
        fact: "The Piorun ('Thunderbolt') is a Polish man-portable air-defence system built by Mesko, part of the state PGZ group. It is an extensively upgraded descendant of the Grom — itself derived from the Soviet 9K38 Igla — but with a far more sensitive dual-band IR/UV seeker, a proximity fuze and better resistance to flares and jamming, letting it engage low, fast and small targets including UAVs and cruise missiles out to about 6.5 km. It earned a fearsome reputation in Ukraine, where Polish-supplied Piorun teams downed large numbers of aircraft, helicopters, drones and missiles, making it one of the most sought-after MANPADS of the war.",
        imageCredit: "Photo: Forsvarsmateriell / Norwegian Defence Materiel Agency / Public Domain — image modified (background removed)"
    },
    {
        id: 213,
        name: "Rooikat",
        type: "Tank Destroyer",
        origin: "South Africa",
        coords: [-25.7461, 28.1881],
        images: [
            "assets/Rooikat.jpg",
            "assets/Rooikat_Bravo.jpg"
        ],
        specs: { speed: "120 km/h", armament: "76mm GT-4 high-velocity gun", operationalRange: "1,000 km" },
        inService: 1990,
        users: ["South Africa"],
        status: "Active",
        recognitionFeatures: {
            wheels: "8×8 — four axles of large road wheels giving an unusually long wheelbase for an armoured car. All-wheel drive on big run-flat tyres, no tracks. The lengthy 8-wheel layout is a key recognition point versus 6×6 gun-cars like the AMX-10 RC or Centauro.",
            hull: "Long, low, sharply sloped welded-steel hull with a pointed glacis and the engine mounted at the rear. Tall ride height and generous ground clearance for the African bush; driver sits front-centre.",
            armament: "Long 76mm GT-4 high-velocity gun (derived from the OTO Melara 76mm naval gun) with a slim barrel and fume extractor — noticeably thinner and longer than a 105mm tube. Coaxial 7.62mm machine gun, with a second 7.62mm on the roof.",
            turret: "Large, flat, angular three-man turret set well back over the rear axles, carrying stowage baskets and banks of smoke-grenade launchers on the cheeks."
        },
        fact: "The Rooikat ('red cat', Afrikaans for the caracal lynx) is a South African 8×8 armoured reconnaissance and fire-support vehicle built by Reumech OMC (later Denel Land Systems) and in service since 1990. Born from the South African Army's long-range bush-war experience, it pairs exceptional strategic mobility — around 1,000 km of range and 120 km/h on roads — with a hard-hitting 76mm high-velocity gun adapted from a naval mount, able to knock out light armour and even main battle tanks at long range. Despite its size it is fast and agile, and it remains one of the heaviest-armed wheeled reconnaissance vehicles ever fielded.",
        imageCredits: [
            "Photo: Bob Adams / Flickr / CC BY-SA 2.0",
            "Photo: Bob Adams / Flickr / CC BY-SA 2.0 — image modified (cropped)"
        ]
    },
    {
        id: 214,
        name: "Pizarro",
        type: "IFV",
        origin: "Spain / Austria",
        coords: [40.4168, -3.7038],
        images: [
            "assets/Pizarro.jpg",
            "assets/Pizarro_Bravo.jpg"
        ],
        specs: { speed: "70 km/h", armament: "30mm Mauser MK 30-2 autocannon", operationalRange: "500 km" },
        inService: 1998,
        users: ["Spain", "Austria"],
        status: "Active",
        recognitionFeatures: {
            wheels: "Fully tracked — seven road wheels per side with the drive sprocket at the front, idler at the rear and return rollers along the top. No road wheels: a key recognition point versus wheeled IFVs like the VBCI or Boxer.",
            hull: "Compact, angular welded hull with a sharply sloped glacis. Driver sits front-left alongside the front-mounted powerpack, with a power-operated rear ramp for the eight-man dismount squad.",
            armament: "Two-man turret mounting a 30mm Mauser MK 30-2 autocannon with a slim exposed barrel, plus a coaxial 7.62mm machine gun. Lighter-calibre than a tank gun — a clear IFV cue.",
            turret: "Low, faceted two-man turret set centrally on the hull with banks of smoke-grenade launchers on the sides; the Spanish Pizarro and Austrian Ulan share this same turret on the ASCOD chassis."
        },
        fact: "The Pizarro is the Spanish Army's tracked infantry fighting vehicle, the national variant of the ASCOD platform — an acronym for 'Austrian-Spanish Cooperation Development', the joint programme between Steyr-Daimler-Puch and Santa Bárbara Sistemas. Spain calls it the Pizarro (after the conquistador Francisco Pizarro) while Austria fields the near-identical version as the 'Ulan'. The ASCOD design proved so sound that it was later chosen as the basis for the British Army's Ajax reconnaissance vehicle, giving this Austro-Spanish hull a third major national user.",
        imageCredits: [
            "Photo: Outisnn / Wikimedia Commons / Free use with attribution — image modified (cropped)",
            "Photo: Oscar in the middle / Flickr / CC BY-SA 2.0 — image modified (symbols removed)"
        ]
    },
    {
        id: 215,
        name: "ASTROS II",
        type: "Artillery",
        origin: "Brazil",
        coords: [-23.1896, -45.8841],
        images: [
            "assets/ASTROS2.jpg",
            "assets/ASTROS2_Bravo.jpg"
        ],
        specs: { speed: "90 km/h", armament: "Modular 127–300mm rockets / AV-TM 300 missile", maximumRange: "Up to 300 km" },
        inService: 1983,
        users: ["Brazil", "Saudi Arabia", "Malaysia", "Indonesia", "Qatar", "Angola"],
        status: "Active",
        recognitionFeatures: {
            wheels: "Carried on a high-mobility 6×6 all-terrain truck chassis (the Avibras/Tectran AV-VBT) with large off-road tyres — a wheeled rocket system, not a tracked one.",
            hull: "Forward armoured truck cab over the engine with the rotating launcher module on the rear bed. Each launcher is paired with an identical-looking 6×6 ammunition-resupply vehicle that reloads it.",
            armament: "Modular boxed launcher that swaps complete rocket pods by calibre — e.g. 32 × 127mm (SS-30), 16 × 180mm (SS-40) or 4 × 300mm (SS-80) rockets, up to the AV-TM 300 cruise missile. The interchangeable pod is the signature feature.",
            turret: "No turret — the boxed launcher pod itself traverses and elevates to fire, after which the empty container is lifted off and exchanged for a fresh one."
        },
        fact: "ASTROS II (the name stands for 'Artillery SAturation ROcket System') is a Brazilian wheeled multiple-rocket-launcher family built by Avibras and in service since the 1980s. Its defining trick is modularity: the same 6×6 launcher fires completely different munitions just by swapping the boxed rocket pod — from 32 small 127mm rockets up to four heavy 300mm rockets, or even the AV-TM 300 cruise missile, which turns it into a long-range precision strike system reaching about 300 km. It became one of Brazil's biggest defence exports, with Saudi Arabia a major customer that fielded it during the 1991 Gulf War.",
        imageCredits: [
            "Photo: André Gustavo Stumpf / Flickr / CC BY 2.0 — image modified (cropped)",
            "Photo: TECH. SGT. H. H. Deffner / U.S. DoD / Public Domain — image modified (cropped)"
        ]
    },
    {
        id: 216,
        name: "M249 SAW",
        type: "Small Arms",
        origin: "United States",
        coords: [39.8283, -98.5795],
        images: [
            "assets/M249_Para_ACOG.jpg",
            "assets/M249_Para_ACOG_Bravo.jpg"
        ],
        specs: { speed: "N/A", armament: "5.56×45mm NATO", effectiveRange: "800 m" },
        inService: 1984,
        users: ["United States", "Australia", "Canada", "United Kingdom", "75+ countries"],
        status: "Active",
        recognitionFeatures: {
            configuration: "Belt-fed light machine gun / squad automatic weapon with a long fluted quick-change barrel, a carry handle on top, a folding bipod under the muzzle and an open-bolt gas-piston action. This Para variant has a shortened barrel and a sliding tubular collapsible stock.",
            handguard: "Short, stubby handguard; directly beneath the receiver hangs the boxy ammunition feed (a hard plastic box or soft pouch holding the linked belt), with the folding bipod legs clamped to the gas tube ahead of it.",
            optics: "Flat-top feed-tray cover with a Picatinny rail — here mounting an ACOG (Advanced Combat Optical Gunsight) 4× scope, with back-up iron sights including a folding rear aperture.",
            magazine: "Normally fed from a 200-round disintegrating M27-linked belt carried in a box or soft pouch under the receiver; uniquely it can also accept STANAG rifle magazines through a secondary magazine well as an emergency backup."
        },
        fact: "The M249 SAW (Squad Automatic Weapon) is the US-built version of the Belgian FN Minimi, manufactured by FN's American plant and adopted in 1984 to give every infantry fire-team its own belt-fed automatic. Its party trick is dual feed — it normally runs a 200-round linked belt but can also load standard STANAG rifle magazines if the belt runs dry. As the Minimi it has become the Western world's standard light machine gun, serving with 75+ countries. The variant shown is the compact M249 Para with a short barrel, collapsible stock and an ACOG optic.",
        imageCredits: [
            "Photo Courtesy of PEO Soldier / U.S. Army / Public Domain",
            "Photo Courtesy of PEO Soldier / U.S. Army / Public Domain"
        ]
    },
    {
        id: 217,
        name: "Carl-Gustaf M4",
        type: "Anti-Tank Weapon",
        origin: "Sweden",
        coords: [59.3268, 14.5241],
        image: "assets/CarlGustaf_M4.jpg",
        specs: { speed: "N/A", armament: "84mm recoilless (HEAT, HE, smoke, illum)", effectiveRange: "500 m (1,000+ m guided)" },
        inService: 2014,
        users: ["Sweden", "United States", "United Kingdom", "India", "Estonia", "40+ countries"],
        status: "Active",
        recognitionFeatures: {
            design: "Reloadable shoulder-fired 84mm recoilless rifle — a long tube fired off the shoulder, with a hinged breech at the rear that swings open to load a fresh round, so the launcher is reused (unlike single-shot rockets such as the AT4 or NLAW). This M4 is the lightweight carbon-fibre-jacketed version with a folding forward grip and an adjustable shoulder rest.",
            tube: "Rifled 84mm barrel ending in a flared venturi/blast cone at the rear that vents propellant gas backwards to cancel recoil — producing the weapon's characteristic dangerous rearward backblast. A carry handle and forward pistol grip sit along the tube.",
            sight: "Folding iron sights as backup, but normally fitted with an optical or programmable red-dot/intelligent fire-control sight; the M4 adds an electronic round counter and compatibility with smart, time-fuzed airburst ammunition."
        },
        fact: "The Carl-Gustaf is a Swedish 84mm man-portable recoilless rifle made by Saab Bofors Dynamics and named after the Carl Gustaf state arms factory where it was first built. In service since 1948, it is one of the longest-serving weapons in the world, kept relevant by a huge family of interchangeable rounds — anti-tank HEAT, high-explosive, anti-structure, smoke, illumination and guided/airburst projectiles. Unlike single-shot disposable launchers, it is reloadable, which is why armies keep buying it; over 40 countries field it, and the US Army adopted it as the M3 MAAWS. The M4 shown here is the 2014 lightweight update, dropping to around 7 kg with a carbon-fibre barrel jacket and digital sight compatibility.",
        imageCredit: "Photo: Kaitsevägi (Estonian Defence Forces) / Wikimedia Commons / CC0 1.0 Public Domain"
    },
    {
        id: 218,
        name: "Galil ACE",
        type: "Assault Rifle",
        origin: "Israel",
        coords: [32.0853, 34.7818],
        image: "assets/Galil_Ace_N.jpg",
        specs: { speed: "N/A", armament: "5.56×45mm NATO", effectiveRange: "500 m" },
        inService: 2008,
        users: ["Israel", "Colombia", "Chile", "Vietnam", "25+ countries"],
        status: "Active",
        recognitionFeatures: {
            configuration: "Modernised Kalashnikov-pattern rifle — long-stroke gas piston and rotating bolt inherited from the original IMI Galil (itself an AK derivative), but rebuilt with polymer furniture, ambidextrous controls and a side-folding skeleton stock. Cleaner, more angular lines than a classic AK.",
            handguard: "Polymer handguard wrapping a low-profile gas block, fitted with Picatinny (and, on the newer 'N' models, M-LOK) accessory rails along the sides and bottom.",
            optics: "Full-length flat-top Picatinny rail running along the top of the receiver and over the gas tube for optics, with fold-down back-up iron sights — a Western-style mounting that replaces the AK's rear notch.",
            magazine: "Curved 30-round box magazine; the 5.56mm ACE feeds from STANAG/M16-compatible magazines, while the 7.62×39mm versions keep AK-pattern mags."
        },
        fact: "The Galil ACE is Israel Weapon Industries' modernised version of the IMI Galil — the rifle Israel developed after the 1973 Yom Kippur War when it wanted a weapon with Kalashnikov reliability in the desert. The ACE keeps that rugged long-stroke AK action but adds polymer furniture, full-length rails and far better ergonomics, in 5.56mm, 7.62×39mm and 7.62×51mm models. It became a major export success: Colombia (which license-produces it through Indumil), Chile and Vietnam all adopted the ACE as their standard service rifle, spreading an Israeli design across South America and South-East Asia.",
        imageCredit: "Photo: IWI – Israel Weapon Industries / Wikimedia Commons / CC BY 4.0"
    },
    {
        id: 219,
        name: "M10 Booker",
        type: "Light Tank",
        origin: "United States",
        coords: [39.8283, -98.5795],
        images: [
            "assets/M10.jpg",
            "assets/M10_Bravo.jpg"
        ],
        specs: { speed: "64 km/h", armament: "105mm M35 rifled gun", operationalRange: "560 km" },
        inService: 2024,
        users: ["United States"],
        status: "Active",
        recognitionFeatures: {
            wheels: "Fully tracked on six road wheels per side, on a chassis derived from General Dynamics' Griffin/ASCOD lineage with the drive sprocket at the front. Tracked, not wheeled — unlike fire-support gun-trucks such as the Centauro or AMX-10 RC.",
            hull: "Compact, angular welded hull, noticeably lower and lighter than an Abrams at around 40 tonnes, with the driver front-left. Looks like a scaled-down main battle tank rather than a full MBT.",
            armament: "105mm M35 rifled gun (a low-recoil development of the classic M68) with a fume extractor, plus a coaxial 7.62mm and a roof-mounted .50-cal M2. Smaller-calibre than the 120mm guns of modern MBTs.",
            turret: "Conventional manned three-man turret with a rear bustle rack, sized for direct infantry fire support rather than tank-versus-tank duelling."
        },
        fact: "The M10 Booker is the US Army's new tracked armoured fire-support vehicle, built by General Dynamics under the 'Mobile Protected Firepower' programme and entering service in 2024. Although widely called a light tank, the Army insists it is an 'assault gun' meant to give infantry brigade combat teams their own protected direct-fire punch rather than to fight other tanks. It rides on a hull from GDLS's Griffin II demonstrator — part of the same ASCOD family as the Spanish Pizarro and British Ajax — and is named after two soldiers: Private Robert D. Booker, a Medal of Honor recipient killed in WWII, and Staff Sergeant Stevon A. Booker, killed during the 2003 advance on Baghdad.",
        imageCredits: [
            "Photo: U.S. Army / Public Domain",
            "Photo: Bernardo Fuller / U.S. Army (DVIDS) / Public Domain — image modified (cropped, symbols removed)"
        ]
    }
];

