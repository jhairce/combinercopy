! function(e) {
    var s = {};

    function n(r) {
        if (s[r]) return s[r].exports;
        var a = s[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(a.exports, a, a.exports, n), a.l = !0, a.exports
    }
    n.m = e, n.c = s, n.d = function(e, s, r) {
        n.o(e, s) || Object.defineProperty(e, s, {
            enumerable: !0,
            get: r
        })
    }, n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, n.t = function(e, s) {
        if (1 & s && (e = n(e)), 8 & s) return e;
        if (4 & s && "object" == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (n.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: e
            }), 2 & s && "string" != typeof e)
            for (var a in e) n.d(r, a, function(s) {
                return e[s]
            }.bind(null, a));
        return r
    }, n.n = function(e) {
        var s = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return n.d(s, "a", s), s
    }, n.o = function(e, s) {
        return Object.prototype.hasOwnProperty.call(e, s)
    }, n.p = "", n(n.s = 1)
}([function(e) {
    e.exports = {
        weapons: {
            Hammer: [{
                name: "Brutality of Boreus",
                type: "Hammer",
                icon: "/assets/icons/weapons/boreus/BrutalityOfBoreus.png",
                monster: "boreus",
                perks: "Conditioning",
                cells: ["Power", "Defence"]
            }, {
                name: "Galvanic Impact",
                type: "Hammer",
                icon: "/assets/icons/weapons/malkarion/GalvanicImpact.png",
                monster: "malkarion",
                cells: ["Prismatic", "Prismatic"]
            }, {
                name: "Charred Crusher",
                type: "Hammer",
                icon: "/assets/icons/weapons/charrogg/CharredCrusher.png",
                monster: "charrogg",
                perks: "Aetherhunter",
                cells: ["Power", "Defence"]
            }, {
                name: "Molten Edict",
                type: "Hammer",
                icon: "/assets/icons/weapons/charrogg/MoltenEdict.png",
                monster: "charrogg",
                cells: ["Power", "Defence"]
            }, {
                name: "Thundering Maul",
                type: "Hammer",
                icon: "/assets/icons/weapons/drask/ThunderingMaul.png",
                monster: "drask",
                perks: "Aetheric Attunement",
                cells: ["Power", "Defence"]
            }, {
                name: "Ember Maul",
                type: "Hammer",
                icon: "/assets/icons/weapons/embermane/EmberMaul.png",
                monster: "embermane",
                perks: "Evasive Fury",
                cells: ["Power", "Mobility"]
            }, {
                name: "Recruit's Hammer",
                type: "Hammer",
                icon: "/assets/icons/weapons/generic/RecruitsHammer.png",
                monster: "generic"
            }, {
                name: "Raging Crash",
                type: "Hammer",
                icon: "/assets/icons/weapons/gnasher/RagingCrash.png",
                monster: "gnasher",
                perks: "Ragehunter",
                cells: ["Power", "Utility"]
            }, {
                name: "Inferno's Burden",
                type: "Hammer",
                icon: "/assets/icons/weapons/hellion/InfernosBurden.png",
                monster: "hellion",
                perks: "Overpower",
                cells: ["Power", "Power"]
            }, {
                name: "Kharabak's Jaw",
                type: "Hammer",
                icon: "/assets/icons/weapons/kharabak/KharabaksJaw.png",
                monster: "kharabak",
                perks: "Deconstruction",
                cells: ["Power", "Technique"]
            }, {
                name: "Sovereign's Grudge",
                type: "Hammer",
                icon: "/assets/icons/weapons/koshai/SovereignsGrudge.png",
                monster: "koshai",
                perks: "Sharpened",
                cells: ["Power", "Utility"]
            }, {
                name: "Nayzaga's Charge",
                type: "Hammer",
                icon: "/assets/icons/weapons/nayzaga/NayzagasCharge.png",
                monster: "nayzaga",
                perks: "Savagery",
                cells: ["Power", "Utility"]
            }, {
                name: "Pangar's Rampage",
                type: "Hammer",
                icon: "/assets/icons/weapons/pangar/PangarsRampage.png",
                monster: "pangar",
                perks: "Knockout King",
                cells: ["Power", "Defence"]
            }, {
                name: "Quillshot's Roar",
                type: "Hammer",
                icon: "/assets/icons/weapons/quillshot/QuillshotsRoar.png",
                monster: "quillshot",
                perks: "Acidic",
                cells: ["Power", "Defence"]
            }, {
                name: "Break of Dawn",
                type: "Hammer",
                icon: "/assets/icons/weapons/rezakiri/BreakOfDawn.png",
                monster: "rezakiri",
                perks: "Cunning",
                cells: ["Power", "Mobility"]
            }, {
                name: "Stalker's Price",
                type: "Hammer",
                icon: "/assets/icons/weapons/riftstalker/StalkersPrice.png",
                monster: "riftstalker",
                perks: "Wild Frenzy",
                cells: ["Technique", "Utility"]
            }, {
                name: "Fall of the Shrike",
                type: "Hammer",
                icon: "/assets/icons/weapons/shrike/FallOfTheShrike.png",
                monster: "shrike",
                perks: "Conditioning",
                cells: ["Power", "Mobility"]
            }, {
                name: "Fall of Night",
                type: "Hammer",
                icon: "/assets/icons/weapons/shrowd/FallOfNight.png",
                monster: "shrowd",
                perks: "Cunning",
                cells: ["Power", "Utility"]
            }, {
                name: "Skarn's Vengeance",
                type: "Hammer",
                icon: "/assets/icons/weapons/skarn/SkarnsVengeance.png",
                monster: "skarn",
                perks: "Knockout King",
                cells: ["Power", "Defence"]
            }, {
                name: "Winter Squall",
                type: "Hammer",
                icon: "/assets/icons/weapons/skraev/WinterSquall.png",
                monster: "skraev",
                perks: "Nimble",
                cells: ["Power", "Mobility"]
            }, {
                name: "Storm Hammer",
                type: "Hammer",
                icon: "/assets/icons/weapons/stormclaw/StormHammer.png",
                monster: "stormclaw",
                perks: "Aetheric Attunement",
                cells: ["Power", "Mobility"]
            }, {
                name: "Valomyr's Burden",
                type: "Hammer",
                icon: "/assets/icons/weapons/valomyr/ValomyrsBurden.png",
                monster: "valomyr",
                perks: "Aetherhunter",
                cells: ["Power", "Utility"]
            }],
            "Chain Blades": [{
                name: "Destiny of Boreus",
                type: "Chain Blades",
                icon: "/assets/icons/weapons/boreus/DestinyOfBoreus.png",
                monster: "boreus",
                perks: "Conditioning",
                cells: ["Power", "Defence"]
            }, {
                name: "Charred Blades",
                type: "Chain Blades",
                icon: "/assets/icons/weapons/charrogg/CharredBlades.png",
                monster: "charrogg",
                perks: "Aetherhunter",
                cells: ["Technique", "Defence"]
            }, {
                name: "Thundering Cutters",
                type: "Chain Blades",
                icon: "/assets/icons/weapons/drask/ThunderingCutters.png",
                monster: "drask",
                perks: "Aetheric Attunement",
                cells: ["Technique", "Power"]
            }, {
                name: "Ember Blades",
                type: "Chain Blades",
                icon: "/assets/icons/weapons/embermane/EmberBlades.png",
                monster: "embermane",
                perks: "Evasive Fury",
                cells: ["Technique", "Mobility"]
            }, {
                name: "Recruit's Chain Blades",
                type: "Chain Blades",
                icon: "/assets/icons/weapons/generic/RecruitsChainBlades.png",
                monster: "generic"
            }, {
                name: "Raging Teeth",
                type: "Chain Blades",
                icon: "/assets/icons/weapons/gnasher/RagingTeeth.png",
                monster: "gnasher",
                perks: "Ragehunter",
                cells: ["Technique", "Utility"]
            }, {
                name: "Inferno's Fangs",
                type: "Chain Blades",
                icon: "/assets/icons/weapons/hellion/InfernosFangs.png",
                monster: "hellion",
                perks: "Overpower",
                cells: ["Power", "Power"]
            }, {
                name: "Kharabak's Wings",
                type: "Chain Blades",
                icon: "/assets/icons/weapons/kharabak/KharabaksWings.png",
                monster: "kharabak",
                perks: "Bladestorm",
                cells: ["Technique", "Mobility"]
            }, {
                name: "Sovereign's Lash",
                type: "Chain Blades",
                icon: "/assets/icons/weapons/koshai/SovereignsLash.png",
                monster: "koshai",
                perks: "Sharpened",
                cells: ["Power", "Utility"]
            }, {
                name: "Nayzaga's Reach",
                type: "Chain Blades",
                icon: "/assets/icons/weapons/nayzaga/NayzagasReach.png",
                monster: "nayzaga",
                perks: "Barbed",
                cells: ["Technique", "Utility"]
            }, {
                name: "Pangar's Claws",
                type: "Chain Blades",
                icon: "/assets/icons/weapons/pangar/PangarsClaws.png",
                monster: "pangar",
                perks: "Weighted Strikes",
                cells: ["Technique", "Defence"]
            }, {
                name: "Quillshot's Bonehooks",
                type: "Chain Blades",
                icon: "/assets/icons/weapons/quillshot/QuillshotsBonehooks.png",
                monster: "quillshot",
                perks: "Acidic",
                cells: ["Technique", "Defence"]
            }, {
                name: "Fangs of Dawn",
                type: "Chain Blades",
                icon: "/assets/icons/weapons/rezakiri/FangsOfDawn.png",
                monster: "rezakiri",
                perks: "Cunning",
                cells: ["Technique", "Power"]
            }, {
                name: "Stalker's Trap",
                type: "Chain Blades",
                icon: "/assets/icons/weapons/riftstalker/StalkersTrap.png",
                monster: "riftstalker",
                perks: "Wild Frenzy",
                cells: ["Technique", "Utility"]
            }, {
                name: "Flight of the Shrike",
                type: "Chain Blades",
                icon: "/assets/icons/weapons/shrike/FlightOfTheShrike.png",
                monster: "shrike",
                perks: "Conditioning",
                cells: ["Technique", "Mobility"]
            }, {
                name: "Eyes of Night",
                type: "Chain Blades",
                icon: "/assets/icons/weapons/shrowd/EyesOfNight.png",
                monster: "shrowd",
                perks: "Cunning",
                cells: ["Technique", "Utility"]
            }, {
                name: "Skarn's Malice",
                type: "Chain Blades",
                icon: "/assets/icons/weapons/skarn/SkarnsMalice.png",
                monster: "skarn",
                perks: "Weighted Strikes",
                cells: ["Technique", "Defence"]
            }, {
                name: "Winter Winds",
                type: "Chain Blades",
                icon: "/assets/icons/weapons/skraev/WinterWinds.png",
                monster: "skraev",
                perks: "Nimble",
                cells: ["Technique", "Mobility"]
            }, {
                name: "Storm Blades",
                type: "Chain Blades",
                icon: "/assets/icons/weapons/stormclaw/StormBlades.png",
                monster: "stormclaw",
                perks: "Energized",
                cells: ["Technique", "Mobility"]
            }, {
                name: "Valomyr's Revenge",
                type: "Chain Blades",
                icon: "/assets/icons/weapons/valomyr/ValomyrsRevenge.png",
                monster: "valomyr",
                perks: "Aetherhunter",
                cells: ["Power", "Utility"]
            }],
            Sword: [{
                name: "Onus of Boreus",
                type: "Sword",
                icon: "/assets/icons/weapons/boreus/OnusOfBoreus.png",
                monster: "boreus",
                perks: "Conditioning",
                cells: ["Power", "Defence"]
            }, {
                name: "Charred Saber",
                type: "Sword",
                icon: "/assets/icons/weapons/charrogg/CharredSaber.png",
                monster: "charrogg",
                perks: "Aetherhunter",
                cells: ["Power", "Defence"]
            }, {
                name: "Thundering Blade",
                type: "Sword",
                icon: "/assets/icons/weapons/drask/ThunderingBlade.png",
                monster: "drask",
                perks: "Aetheric Attunement",
                cells: ["Power", "Utility"]
            }, {
                name: "Ember Cutlass",
                type: "Sword",
                icon: "/assets/icons/weapons/embermane/EmberCutlass.png",
                monster: "embermane",
                perks: "Evasive Fury",
                cells: ["Technique", "Mobility"]
            }, {
                name: "Recruit's Sword",
                type: "Sword",
                icon: "/assets/icons/weapons/generic/RecruitsSword.png",
                monster: "generic"
            }, {
                name: "Training Sword",
                type: "Sword",
                icon: "/assets/icons/weapons/generic/TrainingSword.png",
                monster: "generic"
            }, {
                name: "Raging Blade",
                type: "Sword",
                icon: "/assets/icons/weapons/gnasher/RagingBlade.png",
                monster: "gnasher",
                perks: "Ragehunter",
                cells: ["Utility", "Defence"]
            }, {
                name: "Inferno's Razor",
                type: "Sword",
                icon: "/assets/icons/weapons/hellion/InfernosRazor.png",
                monster: "hellion",
                perks: "Overpower",
                cells: ["Power", "Power"]
            }, {
                name: "Kharabak's Spur",
                type: "Sword",
                icon: "/assets/icons/weapons/kharabak/KharabaksSpur.png",
                monster: "kharabak",
                perks: "Bladestorm",
                cells: ["Technique", "Mobility"]
            }, {
                name: "Sovereign's Torment",
                type: "Sword",
                icon: "/assets/icons/weapons/koshai/SovereignsTorment.png",
                monster: "koshai",
                perks: "Sharpened",
                cells: ["Power", "Utility"]
            }, {
                name: "Nayzaga's Razor",
                type: "Sword",
                icon: "/assets/icons/weapons/nayzaga/NayzagasRazor.png",
                monster: "nayzaga",
                perks: "Barbed",
                cells: ["Utility", "Mobility"]
            }, {
                name: "Pangar's Call",
                type: "Sword",
                icon: "/assets/icons/weapons/pangar/PangarsCall.png",
                monster: "pangar",
                perks: "Knockout King",
                cells: ["Power", "Defence"]
            }, {
                name: "Quillshot's Tusk",
                type: "Sword",
                icon: "/assets/icons/weapons/quillshot/QuillshotsTusk.png",
                monster: "quillshot",
                perks: "Acidic",
                cells: ["Technique", "Defence"]
            }, {
                name: "Call of Dawn",
                type: "Sword",
                icon: "/assets/icons/weapons/rezakiri/CallOfDawn.png",
                monster: "rezakiri",
                perks: "Cunning",
                cells: ["Technique", "Utility"]
            }, {
                name: "Stalker's Strike",
                type: "Sword",
                icon: "/assets/icons/weapons/riftstalker/StalkersStrike.png",
                monster: "riftstalker",
                perks: "Wild Frenzy",
                cells: ["Technique", "Utility"]
            }, {
                name: "Cry of the Shrike",
                type: "Sword",
                icon: "/assets/icons/weapons/shrike/CryOfTheShrike.png",
                monster: "shrike",
                perks: "Conditioning",
                cells: ["Mobility", "Mobility"]
            }, {
                name: "The Hunger",
                type: "Sword",
                icon: "/assets/icons/weapons/shrowd/TheHunger.png",
                monster: "shrowd",
                cells: ["Power", "Utility"]
            }, {
                name: "Verge of Night",
                type: "Sword",
                icon: "/assets/icons/weapons/shrowd/VergeOfNight.png",
                monster: "shrowd",
                perks: "Cunning",
                cells: ["Power", "Utility"]
            }, {
                name: "Skarn's Rancor",
                type: "Sword",
                icon: "/assets/icons/weapons/skarn/SkarnsRancor.png",
                monster: "skarn",
                perks: "Knockout King",
                cells: ["Power", "Defence"]
            }, {
                name: "Winter Ice",
                type: "Sword",
                icon: "/assets/icons/weapons/skraev/WinterIce.png",
                monster: "skraev",
                perks: "Nimble",
                cells: ["Technique", "Mobility"]
            }, {
                name: "Storm Sword",
                type: "Sword",
                icon: "/assets/icons/weapons/stormclaw/StormSword.png",
                monster: "stormclaw",
                perks: "Energized",
                cells: ["Technique", "Mobility"]
            }, {
                name: "Valomyr's Regard",
                type: "Sword",
                icon: "/assets/icons/weapons/valomyr/ValomyrsRegard.png",
                monster: "valomyr",
                perks: "Aetherhunter",
                cells: ["Power", "Utility"]
            }],
            "War Pike": [{
                name: "Revolution of Boreus",
                type: "War Pike",
                icon: "/assets/icons/weapons/boreus/RevolutionOfBoreus.png",
                monster: "boreus",
                perks: "Conditioning",
                cells: ["Power", "Defence"]
            }, {
                name: "Charred Spear",
                type: "War Pike",
                icon: "/assets/icons/weapons/charrogg/CharredSpear.png",
                monster: "charrogg",
                perks: "Aetherhunter",
                cells: ["Technique", "Defence"]
            }, {
                name: "Thundering Spear",
                type: "War Pike",
                icon: "/assets/icons/weapons/drask/ThunderingSpear.png",
                monster: "drask",
                perks: "Aetheric Attunement",
                cells: ["Technique", "Power"]
            }, {
                name: "Ember Pike",
                type: "War Pike",
                icon: "/assets/icons/weapons/embermane/EmberPike.png",
                monster: "embermane",
                perks: "Evasive Fury",
                cells: ["Technique", "Mobility"]
            }, {
                name: "Recruit's War Pike",
                type: "War Pike",
                icon: "/assets/icons/weapons/generic/RecruitsWarPike.png",
                monster: "generic"
            }, {
                name: "Raging Cruelty",
                type: "War Pike",
                icon: "/assets/icons/weapons/gnasher/RagingCruelty.png",
                monster: "gnasher",
                perks: "Ragehunter",
                cells: ["Technique", "Utility"]
            }, {
                name: "Inferno's Arrow",
                type: "War Pike",
                icon: "/assets/icons/weapons/hellion/InfernosArrow.png",
                monster: "hellion",
                perks: "Overpower",
                cells: ["Power", "Power"]
            }, {
                name: "Kharabak's Sting",
                type: "War Pike",
                icon: "/assets/icons/weapons/kharabak/KharabaksSting.png",
                monster: "kharabak",
                perks: "Bladestorm",
                cells: ["Technique", "Mobility"]
            }, {
                name: "Sovereign's Sorrow",
                type: "War Pike",
                icon: "/assets/icons/weapons/koshai/SovereignsSorrow.png",
                monster: "koshai",
                perks: "Sharpened",
                cells: ["Power", "Utility"]
            }, {
                name: "Nayzaga's Fang",
                type: "War Pike",
                icon: "/assets/icons/weapons/nayzaga/NayzagasFang.png",
                monster: "nayzaga",
                perks: "Barbed",
                cells: ["Technique", "Utility"]
            }, {
                name: "Pangar's Tooth",
                type: "War Pike",
                icon: "/assets/icons/weapons/pangar/PangarsTooth.png",
                monster: "pangar",
                perks: "Weighted Strikes",
                cells: ["Technique", "Defence"]
            }, {
                name: "Quillshot's Javelin",
                type: "War Pike",
                icon: "/assets/icons/weapons/quillshot/QuillshotsJavelin.png",
                monster: "quillshot",
                perks: "Acidic",
                cells: ["Technique", "Defence"]
            }, {
                name: "Spire of Dawn",
                type: "War Pike",
                icon: "/assets/icons/weapons/rezakiri/SpireOfDawn.png",
                monster: "rezakiri",
                perks: "Cunning",
                cells: ["Technique", "Power"]
            }, {
                name: "The Godhand",
                type: "War Pike",
                icon: "/assets/icons/weapons/rezakiri/TheGodhand.png",
                monster: "rezakiri",
                cells: ["Technique", "Power"]
            }, {
                name: "Stalker's Spike",
                type: "War Pike",
                icon: "/assets/icons/weapons/riftstalker/StalkersSpike.png",
                monster: "riftstalker",
                perks: "Wild Frenzy",
                cells: ["Technique", "Utility"]
            }, {
                name: "Scream of the Shrike",
                type: "War Pike",
                icon: "/assets/icons/weapons/shrike/ScreamOfTheShrike.png",
                monster: "shrike",
                perks: "Conditioning",
                cells: ["Technique", "Mobility"]
            }, {
                name: "Gyre of Night",
                type: "War Pike",
                icon: "/assets/icons/weapons/shrowd/GyreOfNight.png",
                monster: "shrowd",
                perks: "Cunning",
                cells: ["Technique", "Utility"]
            }, {
                name: "Skarn's Spite",
                type: "War Pike",
                icon: "/assets/icons/weapons/skarn/SkarnsSpite.png",
                monster: "skarn",
                perks: "Weighted Strikes",
                cells: ["Technique", "Defence"]
            }, {
                name: "Winter Vortex",
                type: "War Pike",
                icon: "/assets/icons/weapons/skraev/WinterVortex.png",
                monster: "skraev",
                perks: "Nimble",
                cells: ["Technique", "Mobility"]
            }, {
                name: "Storm Pike",
                type: "War Pike",
                icon: "/assets/icons/weapons/stormclaw/StormPike.png",
                monster: "stormclaw",
                perks: "Energized",
                cells: ["Technique", "Mobility"]
            }, {
                name: "Valomyr's Hope",
                type: "War Pike",
                icon: "/assets/icons/weapons/valomyr/ValomyrsHope.png",
                monster: "valomyr",
                perks: "Aetherhunter",
                cells: ["Power", "Utility"]
            }],
            Axe: [{
                name: "Turmoil of Boreus",
                type: "Axe",
                icon: "/assets/icons/weapons/boreus/TurmoilOfBoreus.png",
                monster: "boreus",
                perks: "Conditioning",
                cells: ["Power", "Defence"]
            }, {
                name: "Charred Cleaver",
                type: "Axe",
                icon: "/assets/icons/weapons/charrogg/CharredCleaver.png",
                monster: "charrogg",
                perks: "Aetherhunter",
                cells: ["Power", "Defence"]
            }, {
                name: "Thundering Scythe",
                type: "Axe",
                icon: "/assets/icons/weapons/drask/ThunderingScythe.png",
                monster: "drask",
                perks: "Aetheric Attunement",
                cells: ["Power", "Defence"]
            }, {
                name: "Ember Scythe",
                type: "Axe",
                icon: "/assets/icons/weapons/embermane/EmberScythe.png",
                monster: "embermane",
                perks: "Evasive Fury",
                cells: ["Power", "Mobility"]
            }, {
                name: "Recruit's Axe",
                type: "Axe",
                icon: "/assets/icons/weapons/generic/RecruitsAxe.png",
                monster: "generic"
            }, {
                name: "Raging Bite",
                type: "Axe",
                icon: "/assets/icons/weapons/gnasher/RagingBite.png",
                monster: "gnasher",
                perks: "Ragehunter",
                cells: ["Power", "Utility"]
            }, {
                name: "Inferno's Decree",
                type: "Axe",
                icon: "/assets/icons/weapons/hellion/InfernosDecree.png",
                monster: "hellion",
                perks: "Overpower",
                cells: ["Power", "Power"]
            }, {
                name: "Kharabak's Claw",
                type: "Axe",
                icon: "/assets/icons/weapons/kharabak/KharabaksClaw.png",
                monster: "kharabak",
                perks: "Deconstruction",
                cells: ["Power", "Technique"]
            }, {
                name: "Sovereign's Wrath",
                type: "Axe",
                icon: "/assets/icons/weapons/koshai/SovereignsWrath.png",
                monster: "koshai",
                perks: "Sharpened",
                cells: ["Power", "Utility"]
            }, {
                name: "Nayzaga's Scythe",
                type: "Axe",
                icon: "/assets/icons/weapons/nayzaga/NayzagasScythe.png",
                monster: "nayzaga",
                perks: "Savagery",
                cells: ["Power", "Utility"]
            }, {
                name: "Pangar's Grace",
                type: "Axe",
                icon: "/assets/icons/weapons/pangar/PangarsGrace.png",
                monster: "pangar",
                perks: "Knockout King",
                cells: ["Power", "Defence"]
            }, {
                name: "Quillshot's Fury",
                type: "Axe",
                icon: "/assets/icons/weapons/quillshot/QuillshotsFury.png",
                monster: "quillshot",
                perks: "Acidic",
                cells: ["Power", "Defence"]
            }, {
                name: "Edge of Dawn",
                type: "Axe",
                icon: "/assets/icons/weapons/rezakiri/EdgeOfDawn.png",
                monster: "rezakiri",
                perks: "Cunning",
                cells: ["Power", "Mobility"]
            }, {
                name: "Stalker's Mercy",
                type: "Axe",
                icon: "/assets/icons/weapons/riftstalker/StalkersMercy.png",
                monster: "riftstalker",
                perks: "Wild Frenzy",
                cells: ["Technique", "Utility"]
            }, {
                name: "Song of the Shrike",
                type: "Axe",
                icon: "/assets/icons/weapons/shrike/SongOfTheShrike.png",
                monster: "shrike",
                perks: "Conditioning",
                cells: ["Power", "Mobility"]
            }, {
                name: "Reaper of Night",
                type: "Axe",
                icon: "/assets/icons/weapons/shrowd/ReaperOfNight.png",
                monster: "shrowd",
                perks: "Cunning",
                cells: ["Power", "Utility"]
            }, {
                name: "Skarn's Judgment",
                type: "Axe",
                icon: "/assets/icons/weapons/skarn/SkarnsJudgment.png",
                monster: "skarn",
                perks: "Knockout King",
                cells: ["Power", "Defence"]
            }, {
                name: "Winter Gale",
                type: "Axe",
                icon: "/assets/icons/weapons/skraev/WinterGale.png",
                monster: "skraev",
                perks: "Nimble",
                cells: ["Power", "Mobility"]
            }, {
                name: "Storm Cutter",
                type: "Axe",
                icon: "/assets/icons/weapons/stormclaw/StormCutter.png",
                monster: "stormclaw",
                perks: "Energized",
                cells: ["Power", "Mobility"]
            }, {
                name: "Valomyr's Decree",
                type: "Axe",
                icon: "/assets/icons/weapons/valomyr/ValomyrsDecree.png",
                monster: "valomyr",
                perks: "Aetherhunter",
                cells: ["Power", "Utility"]
            }],
            Repeaters: [{
                name: "Repeaters",
                type: "Repeaters",
                icon: "/assets/icons/weapons/generic/Repeaters.png",
                monster: "generic",
                cells: ["Technique", "Mobility"]
			},	
			{	
			    name: "Twin Suns",
                type: "Repeaters",
                icon: "/assets/icons/weapons/generic/TheTwinSuns.png",
                monster: "generic",
                cells: ["Technique", "Mobility"]
			}],
			"Aether Strikers": [
            {
                name: "Brawlers of Boreus",
                type: "Aether Strikers",
                icon: "/assets/icons/weapons/boreus/BrawlersOfBoreus.png",
                monster: "boreus",
                perks: "Conditioning",
                cells: ["Power", "Defence"]
            },
            {
                name: "Charred Hands",
                type: "Aether Strikers",
                icon: "/assets/icons/weapons/charrogg/CharredHands.png",
                monster: "charrogg",
                perks: "Aetherhunter",
                cells: ["Technique", "Defence"]
            },
            {
                name: "Thundering Bolts",
                type: "Aether Strikers",
                icon: "/assets/icons/weapons/drask/ThunderingBolts.png",
                monster: "drask",
                perks: "Aetheric Attunement",
                cells: ["Technique", "Power"]
            },
            {
                name: "Ember Fists",
                type: "Aether Strikers",
                icon: "/assets/icons/weapons/embermane/EmberFists.png",
                monster: "embermane",
                perks: "Evasive Fury",
                cells: ["Technique", "Mobility"]
            },
            {
                name: "Recruit's Strikers",
                type: "Aether Strikers",
                icon: "/assets/icons/weapons/generic/RecruitsStrikers.png",
                monster: "generic"
            },
            {
                name: "Raging Fists",
                type: "Aether Strikers",
                icon: "/assets/icons/weapons/gnasher/RagingFists.png",
                monster: "gnasher",
                perks: "Ragehunter",
                cells: ["Technique", "Utility"]
            },
            {
                name: "Inferno's Flames",
                type: "Aether Strikers",
                icon: "/assets/icons/weapons/hellion/InfernosFlames.png",
                monster: "hellion",
                perks: "Overpower",
                cells: ["Power", "Power"]
            },
            {
                name: "Kharabak's Pincers",
                type: "Aether Strikers",
                icon: "/assets/icons/weapons/kharabak/KharabaksPincers.png",
                monster: "kharabak",
                perks: "Bladestorm",
                cells: ["Technique", "Mobility"]
            },
            {
                name: "Sovereign's Scepters",
                type: "Aether Strikers",
                icon: "/assets/icons/weapons/koshai/SovereignsSceptres.png",
                monster: "koshai",
                perks: "Sharpened",
                cells: ["Power", "Utility"]
            },
            {
                name: "Nayzaga's Shockers",
                type: "Aether Strikers",
                icon: "/assets/icons/weapons/nayzaga/NayzagasShockers.png",
                monster: "nayzaga",
                perks: "Savagery",
                cells: ["Technique", "Utility"]
            },
            {
                name: "Pangar's Punishers",
                type: "Aether Strikers",
                icon: "/assets/icons/weapons/pangar/PangarsPunishers.png",
                monster: "pangar",
                perks: "Knockout King",
                cells: ["Technique", "Defence"]
            },
            {
                name: "Quillshot's Shredders",
                type: "Aether Strikers",
                icon: "/assets/icons/weapons/quillshot/QuillshotsShredders.png",
                monster: "quillshot",
                perks: "Acidic",
                cells: ["Technique", "Defence"]
            },
            {
                name: "Hands of Dawn",
                type: "Aether Strikers",
                icon: "/assets/icons/weapons/rezakiri/HandsOfDawn.png",
                monster: "rezakiri",
                perks: "Cunning",
                cells: ["Technique", "Power"]
            },
            {
                name: "Stalker's Scorn",
                type: "Aether Strikers",
                icon: "/assets/icons/weapons/riftstalker/StalkersScorn.png",
                monster: "riftstalker",
                perks: "Wild Frenzy",
                cells: ["Technique", "Utility"]
            },
            {
                name: "Fists of the Shrike",
                type: "Aether Strikers",
                icon: "/assets/icons/weapons/shrike/FistsOfTheShrike.png",
                monster: "shrike",
                perks: "Conditioning",
                cells: ["Technique", "Mobility"]
            },
            {
                name: "Hands of Night",
                type: "Aether Strikers",
                icon: "/assets/icons/weapons/shrowd/HandsOfNight.png",
                monster: "shrowd",
                perks: "Cunning",
                cells: ["Technique", "Utility"]
            },
            {
                name: "Skarn's Smashers",
                type: "Aether Strikers",
                icon: "/assets/icons/weapons/skarn/SkarnsSmashers.png",
                monster: "skarn",
                perks: "Knockout King",
                cells: ["Technique", "Defence"]
            },
            {
                name: "Winter Wolves",
                type: "Aether Strikers",
                icon: "/assets/icons/weapons/skraev/WinterWolves.png",
                monster: "skraev",
                perks: "Nimble",
                cells: ["Technique", "Mobility"]
            },
            {
                name: "Storm Breakers",
                type: "Aether Strikers",
                icon: "/assets/icons/weapons/stormclaw/StormBreakers.png",
                monster: "stormclaw",
                perks: "Aetheric Attunement",
                cells: ["Technique", "Mobility"]
            },
            {
                name: "Valomyr's Visions",
                type: "Aether Strikers",
                icon: "/assets/icons/weapons/valomyr/ValomyrsVisions.png",
                monster: "valomyr",
                perks: "Aetherhunter",
                cells: ["Power", "Utility"]
            }]
        },
        armours: {
            Head: [{
                name: "Boreal Epiphany",
                type: "Head",
                icon: "/assets/icons/armours/boreus/BorealEpiphany.png",
                monster: "boreus",
                perks: "Conditioning",
                cells: "Utility"
            }, {
                name: "Malkarion's Sight",
                type: "Head",
                icon: "/assets/icons/armours/malkarion/MalkarionsSight.png",
                monster: "malkarion",
				perks: "Grace",
                cells: "Mobility"
            }, {
                name: "The Skullforge",
                type: "Head",
                icon: "/assets/icons/armours/charrogg/TheSkullforge.png",
                monster: "charrogg",
                cells: "Defence"
            }, {
                name: "Volcanic Helm",
                type: "Head",
                icon: "/assets/icons/armours/charrogg/VolcanicHelm.png",
                monster: "charrogg",
                perks: "Fireproof",
                cells: "Defence"
            }, {
                name: "Draskscale Helmet",
                type: "Head",
                icon: "/assets/icons/armours/drask/DraskscaleHelmet.png",
                monster: "drask",
                perks: "Aetheric Attunement",
                cells: "Power"
            }, {
                name: "Fiery Helm",
                type: "Head",
                icon: "/assets/icons/armours/embermane/FieryHelm.png",
                monster: "embermane",
                perks: "Evasive Fury",
                cells: "Mobility"
            }, {
                name: "Recruit's Mask",
                type: "Head",
                icon: "/assets/icons/armours/generic/RecruitsMask.png",
                monster: "generic"
            }, {
                name: "Gnasher Cap",
                type: "Head",
                icon: "/assets/icons/armours/gnasher/GnasherCap.png",
                monster: "gnasher",
                perks: "Bloodless",
                cells: "Defence"
            }, {
                name: "Hellplate Casque",
                type: "Head",
                icon: "/assets/icons/armours/hellion/HellplateCasque.png",
                monster: "hellion",
                perks: "Ragehunter",
                cells: "Technique"
            }, {
                name: "Eye of the Swarm",
                type: "Head",
                icon: "/assets/icons/armours/kharabak/EyeOfTheSwarm.png",
                monster: "kharabak",
                perks: "Shellshock Resist",
                cells: "Mobility"
            }, {
                name: "Visage of Thorns",
                type: "Head",
                icon: "/assets/icons/armours/koshai/VisageOfThorns.png",
                monster: "koshai",
                perks: "Agility",
                cells: "Technique"
            }, {
                name: "Shocking Gaze",
                type: "Head",
                icon: "/assets/icons/armours/nayzaga/ShockingGaze.png",
                monster: "nayzaga",
                perks: "Medic",
                cells: "Utility"
            }, {
                name: "Brow of Ice",
                type: "Head",
                icon: "/assets/icons/armours/pangar/BrowOfIce.png",
                monster: "pangar",
                perks: "Knockout King",
                cells: "Power"
            }, {
                name: "Quillspike Mask",
                type: "Head",
                icon: "/assets/icons/armours/quillshot/QuillspikeMask.png",
                monster: "quillshot",
                perks: "Savagery",
                cells: "Defence"
            }, {
                name: "Light's Crown",
                type: "Head",
                icon: "/assets/icons/armours/rezakiri/LightsCrown.png",
                monster: "rezakiri",
                perks: "Conduit",
                cells: "Technique"
            }, {
                name: "Prismatic Grace",
                type: "Head",
                icon: "/assets/icons/armours/rezakiri/PrismaticGrace.png",
                monster: "rezakiri",
                cells: "Technique"
            }, {
                name: "Guise of the Rift",
                type: "Head",
                icon: "/assets/icons/armours/riftstalker/GuiseOfTheRift.png",
                monster: "riftstalker",
                perks: "Aetheric Attunement",
                cells: "Utility"
            }, {
                name: "Shrikedown Helm",
                type: "Head",
                icon: "/assets/icons/armours/shrike/ShrikedownHelm.png",
                monster: "shrike",
                perks: "Evasion",
                cells: "Technique"
            }, {
                name: "Dark Watch",
                type: "Head",
                icon: "/assets/icons/armours/shrowd/DarkWatch.png",
                monster: "shrowd",
                perks: "Rage",
                cells: "Power"
            }, {
                name: "Tragic Echo",
                type: "Head",
                icon: "/assets/icons/armours/shrowd/TragicEcho.png",
                monster: "shrowd",
                cells: "Power"
            }, {
                name: "Sight of Stone",
                type: "Head",
                icon: "/assets/icons/armours/skarn/SightOfStone.png",
                monster: "skarn",
                perks: "Tough",
                cells: "Defence"
            }, {
                name: "Skraevwing Helmet",
                type: "Head",
                icon: "/assets/icons/armours/skraev/SkraevwingHelmet.png",
                monster: "skraev",
                perks: "Fleet Footed",
                cells: "Mobility"
            }, {
                name: "Lightning Helm",
                type: "Head",
                icon: "/assets/icons/armours/stormclaw/LightningHelm.png",
                monster: "stormclaw",
                perks: "Energized",
                cells: "Technique"
            }, {
                name: "Crest of Valour",
                type: "Head",
                icon: "/assets/icons/armours/valomyr/CrestOfValour.png",
                monster: "valomyr",
                perks: "Lucent",
                cells: "Power"
            }],
            Torso: [{
                name: "Boreal Resolve",
                type: "Torso",
                icon: "/assets/icons/armours/boreus/BorealResolve.png",
                monster: "boreus",
                perks: "Rage",
                cells: "Defence"
            }, {
                name: "Malkarion's Soul",
                type: "Torso",
                icon: "/assets/icons/armours/malkarion/MalkarionsSoul.png",
                monster: "malkarion",
				perks: "Aetherhunter",
                cells: "Technique"
            }, {
                name: "Volcanic Aegis",
                type: "Torso",
                icon: "/assets/icons/armours/charrogg/VolcanicAegis.png",
                monster: "charrogg",
                perks: "Aetherhunter",
                cells: "Utility"
            }, {
                name: "Draskscale Plate",
                type: "Torso",
                icon: "/assets/icons/armours/drask/DraskscalePlate.png",
                monster: "drask",
                perks: "Aetheric Attunement",
                cells: "Power"
            }, {
                name: "Fiery Breastplate",
                type: "Torso",
                icon: "/assets/icons/armours/embermane/FieryBreastplate.png",
                monster: "embermane",
                perks: "Evasive Fury",
                cells: "Mobility"
            }, {
                name: "Recruit's Breastplate",
                type: "Torso",
                icon: "/assets/icons/armours/generic/RecruitsBreastplate.png",
                monster: "generic"
            }, {
                name: "Gnasher Cloak",
                type: "Torso",
                icon: "/assets/icons/armours/gnasher/GnasherCloak.png",
                monster: "gnasher",
                perks: "Tough",
                cells: "Defence"
            }, {
                name: "Hellplate Cuirass",
                type: "Torso",
                icon: "/assets/icons/armours/hellion/HellplateCuirass.png",
                monster: "hellion",
                perks: "Molten",
                cells: "Technique"
            }, {
                name: "Shell of the Swarm",
                type: "Torso",
                icon: "/assets/icons/armours/kharabak/ShellOfTheSwarm.png",
                monster: "kharabak",
                perks: "Bladestorm",
                cells: "Technique"
            }, {
                name: "Mantle of Thorns",
                type: "Torso",
                icon: "/assets/icons/armours/koshai/MantleOfThorns.png",
                monster: "koshai",
                perks: "Predator",
                cells: "Utility"
            }, {
                name: "Shocking Heart",
                type: "Torso",
                icon: "/assets/icons/armours/nayzaga/ShockingHeart.png",
                monster: "nayzaga",
                perks: "Medic",
                cells: "Defence"
            }, {
                name: "Core of Ice",
                type: "Torso",
                icon: "/assets/icons/armours/pangar/CoreOfIce.png",
                monster: "pangar",
                perks: "Fortress",
                cells: "Power"
            }, {
                name: "Quillspike Jacket",
                type: "Torso",
                icon: "/assets/icons/armours/quillshot/QuillspikeJacket.png",
                monster: "quillshot",
                perks: "Savagery",
                cells: "Technique"
            }, {
                name: "Light's Virtue",
                type: "Torso",
                icon: "/assets/icons/armours/rezakiri/LightsVirtue.png",
                monster: "rezakiri",
                perks: "Cunning",
                cells: "Utility"
            }, {
                name: "Mantle of the Rift",
                type: "Torso",
                icon: "/assets/icons/armours/riftstalker/MantleOfTheRift.png",
                monster: "riftstalker",
                perks: "Conduit",
                cells: "Utility"
            }, {
                name: "Shrikedown Plate",
                type: "Torso",
                icon: "/assets/icons/armours/shrike/ShrikedownPlate.png",
                monster: "shrike",
                perks: "Evasion",
                cells: "Mobility"
            }, {
                name: "Dark Marrow",
                type: "Torso",
                icon: "/assets/icons/armours/shrowd/DarkMarrow.png",
                monster: "shrowd",
                perks: "Rage",
                cells: "Power"
            }, {
                name: "Heart of Stone",
                type: "Torso",
                icon: "/assets/icons/armours/skarn/HeartOfStone.png",
                monster: "skarn",
                perks: "Guardian",
                cells: "Defence"
            }, {
                name: "Skraevwing Jacket",
                type: "Torso",
                icon: "/assets/icons/armours/skraev/SkraevwingJacket.png",
                monster: "skraev",
                perks: "Adrenaline",
                cells: "Mobility"
            }, {
                name: "Lightning Plate",
                type: "Torso",
                icon: "/assets/icons/armours/stormclaw/LightningPlate.png",
                monster: "stormclaw",
                perks: "Energized",
                cells: "Mobility"
            }, {
                name: "Aegis of Valour",
                type: "Torso",
                icon: "/assets/icons/armours/valomyr/AegisOfValour.png",
                monster: "valomyr",
                perks: "Nine Lives",
                cells: "Power"
            }],
            Arms: [{
                name: "Boreal Might",
                type: "Arms",
                icon: "/assets/icons/armours/boreus/BorealMight.png",
                monster: "boreus",
                perks: "Rage",
                cells: "Power"
            }, {
                name: "Malkarion's Grasp",
                type: "Arms",
                icon: "/assets/icons/armours/malkarion/MalkarionsGrasp.png",
                monster: "malkarion",
				perks: "Predator",
                cells: "Technique"
            }, {
                name: "Volcanic Grips",
                type: "Arms",
                icon: "/assets/icons/armours/charrogg/VolcanicGrips.png",
                monster: "charrogg",
                perks: "Rage",
                cells: "Utility"
            }, {
                name: "Draskscale Gauntlets",
                type: "Arms",
                icon: "/assets/icons/armours/drask/DraskscaleGauntlets.png",
                monster: "drask",
                perks: "Sharpened",
                cells: "Utility"
            }, {
                name: "Fiery Gauntlets",
                type: "Arms",
                icon: "/assets/icons/armours/embermane/FieryGauntlets.png",
                monster: "embermane",
                perks: "Fireproof",
                cells: "Technique"
            }, {
                name: "Recruit's Gloves",
                type: "Arms",
                icon: "/assets/icons/armours/generic/RecruitsGloves.png",
                monster: "generic"
            }, {
                name: "Gnasher Grips",
                type: "Arms",
                icon: "/assets/icons/armours/gnasher/GnasherGrips.png",
                monster: "gnasher",
                perks: "Ragehunter",
                cells: "Power"
            }, {
                name: "Hellplate Bracers",
                type: "Arms",
                icon: "/assets/icons/armours/hellion/HellplateBracers.png",
                monster: "hellion",
                perks: "Molten",
                cells: "Power"
            }, {
                name: "Clutches of the Swarm",
                type: "Arms",
                icon: "/assets/icons/armours/kharabak/ClutchesOfTheSwarm.png",
                monster: "kharabak",
                perks: "Conditioning",
                cells: "Mobility"
            }, {
                name: "Grasp of Thorns",
                type: "Arms",
                icon: "/assets/icons/armours/koshai/GraspOfThorns.png",
                monster: "koshai",
                perks: "Evasive Fury",
                cells: "Power"
            }, {
                name: "Shocking Grasp",
                type: "Arms",
                icon: "/assets/icons/armours/nayzaga/ShockingGrasp.png",
                monster: "nayzaga",
                perks: "Aetheric Attunement",
                cells: "Utility"
            }, {
                name: "Arms of Ice",
                type: "Arms",
                icon: "/assets/icons/armours/pangar/ArmsOfIce.png",
                monster: "pangar",
                perks: "Knockout King",
                cells: "Defence"
            }, {
                name: "Quillspike Grips",
                type: "Arms",
                icon: "/assets/icons/armours/quillshot/QuillspikeGrips.png",
                monster: "quillshot",
                perks: "Barbed",
                cells: "Technique"
            }, {
                name: "Light's Refuge",
                type: "Arms",
                icon: "/assets/icons/armours/rezakiri/LightsRefuge.png",
                monster: "rezakiri",
                perks: "Conduit",
                cells: "Technique"
            }, {
                name: "Hands of the Rift",
                type: "Arms",
                icon: "/assets/icons/armours/riftstalker/HandsOfTheRift.png",
                monster: "riftstalker",
                perks: "Evasion",
                cells: "Mobility"
            }, {
                name: "Shrikedown Gloves",
                type: "Arms",
                icon: "/assets/icons/armours/shrike/ShrikedownGloves.png",
                monster: "shrike",
                perks: "Weighted Strikes",
                cells: "Mobility"
            }, {
                name: "Dark Embrace",
                type: "Arms",
                icon: "/assets/icons/armours/shrowd/DarkEmbrace.png",
                monster: "shrowd",
                perks: "Medic",
                cells: "Utility"
            }, {
                name: "Might of Stone",
                type: "Arms",
                icon: "/assets/icons/armours/skarn/MightOfStone.png",
                monster: "skarn",
                perks: "Fortress",
                cells: "Defence"
            }, {
                name: "Skraevwing Gloves",
                type: "Arms",
                icon: "/assets/icons/armours/skraev/SkraevwingGloves.png",
                monster: "skraev",
                perks: "Warmth",
                cells: "Mobility"
            }, {
                name: "Lightning Gloves",
                type: "Arms",
                icon: "/assets/icons/armours/stormclaw/LightningGloves.png",
                monster: "stormclaw",
                perks: "Insulated",
                cells: "Mobility"
            }, {
                name: "Gauntlets of Valour",
                type: "Arms",
                icon: "/assets/icons/armours/valomyr/GauntletsOfValour.png",
                monster: "valomyr",
                perks: "Lucent",
                cells: "Defence"
            }],
            Legs: [{
                name: "Boreal March",
                type: "Legs",
                icon: "/assets/icons/armours/boreus/BorealMarch.png",
                monster: "boreus",
                perks: "Iceborne",
                cells: "Technique"
            }, {
                name: "Malkarion's March",
                type: "Legs",
                icon: "/assets/icons/armours/malkarion/MalkarionsMarch.png",
                monster: "malkarion",
				perks: "Aetherhunter",
                cells: "Technique"
            }, {
                name: "Volcanic Treads",
                type: "Legs",
                icon: "/assets/icons/armours/charrogg/VolcanicTreads.png",
                monster: "charrogg",
                perks: "Rage",
                cells: "Power"
            }, {
                name: "Draskscale Greaves",
                type: "Legs",
                icon: "/assets/icons/armours/drask/DraskscaleGreaves.png",
                monster: "drask",
                perks: "Fleet Footed",
                cells: "Utility"
            }, {
                name: "Fiery Greaves",
                type: "Legs",
                icon: "/assets/icons/armours/embermane/FieryGreaves.png",
                monster: "embermane",
                perks: "Evasion",
                cells: "Defence"
            }, {
                name: "Recruit's Greaves",
                type: "Legs",
                icon: "/assets/icons/armours/generic/RecruitsGreaves.png",
                monster: "generic"
            }, {
                name: "Gnasher Treads",
                type: "Legs",
                icon: "/assets/icons/armours/gnasher/GnasherTreads.png",
                monster: "gnasher",
                perks: "Tough",
                cells: "Power"
            }, {
                name: "Hellplate Greaves",
                type: "Legs",
                icon: "/assets/icons/armours/hellion/HellplateGreaves.png",
                monster: "hellion",
                perks: "Fortress",
                cells: "Power"
            }, {
                name: "Dance of the Swarm",
                type: "Legs",
                icon: "/assets/icons/armours/kharabak/DanceOfTheSwarm.png",
                monster: "kharabak",
                perks: "Conditioning",
                cells: "Power"
            }, {
                name: "Stride of Thorns",
                type: "Legs",
                icon: "/assets/icons/armours/koshai/StrideOfThorns.png",
                monster: "koshai",
                perks: "Predator",
                cells: "Utility"
            }, {
                name: "Shocking Stride",
                type: "Legs",
                icon: "/assets/icons/armours/nayzaga/ShockingStride.png",
                monster: "nayzaga",
                perks: "Insulated",
                cells: "Defence"
            }, {
                name: "Feet of Ice",
                type: "Legs",
                icon: "/assets/icons/armours/pangar/FeetOfIce.png",
                monster: "pangar",
                perks: "Warmth",
                cells: "Defence"
            }, {
                name: "Quillspike Boots",
                type: "Legs",
                icon: "/assets/icons/armours/quillshot/QuillspikeBoots.png",
                monster: "quillshot",
                perks: "Shellshock Resist",
                cells: "Technique"
            }, {
                name: "Light's Walk",
                type: "Legs",
                icon: "/assets/icons/armours/rezakiri/LightsWalk.png",
                monster: "rezakiri",
                perks: "Agility",
                cells: "Mobility"
            }, {
                name: "Striders of the Rift",
                type: "Legs",
                icon: "/assets/icons/armours/riftstalker/StridersOfTheRift.png",
                monster: "riftstalker",
                perks: "Conduit",
                cells: "Mobility"
            }, {
                name: "Shrikedown Greaves",
                type: "Legs",
                icon: "/assets/icons/armours/shrike/ShrikedownGreaves.png",
                monster: "shrike",
                perks: "Bloodless",
                cells: "Mobility"
            }, {
                name: "Dark Path",
                type: "Legs",
                icon: "/assets/icons/armours/shrowd/DarkPath.png",
                monster: "shrowd",
                perks: "Nine Lives",
                cells: "Utility"
            }, {
                name: "Pillars of Stone",
                type: "Legs",
                icon: "/assets/icons/armours/skarn/PillarsOfStone.png",
                monster: "skarn",
                perks: "Guardian",
                cells: "Defence"
            }, {
                name: "Skraevwing Boots",
                type: "Legs",
                icon: "/assets/icons/armours/skraev/SkraevwingBoots.png",
                monster: "skraev",
                perks: "Adrenaline",
                cells: "Utility"
            }, {
                name: "Lightning Boots",
                type: "Legs",
                icon: "/assets/icons/armours/stormclaw/LightningBoots.png",
                monster: "stormclaw",
                perks: "Aetheric Frenzy",
                cells: "Mobility"
            }, {
                name: "Greaves of Valour",
                type: "Legs",
                icon: "/assets/icons/armours/valomyr/GreavesOfValour.png",
                monster: "valomyr",
                perks: "Aetherhunter",
                cells: "Utility"
            }],
            Lantern: [{
                name: "Lantern",
                type: "Lantern",
                icon: "/assets/icons/lanterns/GenericLantern.png",
                monster: "generic",
                cells: "Utility"
            }]
        },
        cells: {
            defence: [{
                name: "Assassin's Vigour Cell",
                perk: "Assassin's Vigour",
                slot: ["Defence", "Prismatic"]
            }, {
                name: "Bloodless Cell",
                perk: "Bloodless",
                slot: ["Defence", "Prismatic"]
            }, {
                name: "Fireproof Cell",
                perk: "Fireproof",
                slot: ["Defence", "Prismatic"]
            }, {
                name: "Fortress Cell",
                perk: "Fortress",
                slot: ["Defence", "Prismatic"]
            }, {
                name: "Guardian Cell",
                perk: "Guardian",
                slot: ["Defence", "Prismatic"]
            }, {
                name: "Iceborne Cell",
                perk: "Iceborne",
                slot: ["Defence", "Prismatic"]
            }, {
                name: "Insulated Cell",
                perk: "Insulated",
                slot: ["Defence", "Prismatic"]
            }, {
                name: "Nine Lives Cell",
                perk: "Nine Lives",
                slot: ["Defence", "Prismatic"]
            }, {
                name: "Shellshock Resist Cell",
                perk: "Shellshock Resist",
                slot: ["Defence", "Prismatic"]
            }, {
                name: "Strategist Cell",
                perk: "Strategist",
                slot: ["Defence", "Prismatic"]
            }, {
                name: "Sturdy Cell",
                perk: "Sturdy",
                slot: ["Defence", "Prismatic"]
            }, {
                name: "Tough Cell",
                perk: "Tough",
                slot: ["Defence", "Prismatic"]
            }, {
                name: "Warmth Cell",
                perk: "Warmth",
                slot: ["Defence", "Prismatic"]
            }],
            mobility: [{
                name: "Agility Cell",
                perk: "Agility",
                slot: "Mobility"
            }, {
                name: "Conditioning Cell",
                perk: "Conditioning",
                slot: "Mobility"
            }, {
                name: "Endurance Cell",
                perk: "Endurance",
                slot: "Mobility"
            }, {
                name: "Evasion Cell",
                perk: "Evasion",
                slot: "Mobility"
            }, {
                name: "Fleet Footed Cell",
                perk: "Fleet Footed",
                slot: "Mobility"
            }, {
                name: "Nimble Cell",
                perk: "Nimble",
                slot: "Mobility"
            }, {
                name: "Sprinter Cell",
                perk: "Sprinter",
                slot: "Mobility"
            }, {
                name: "Swift Cell",
                perk: "Swift",
                slot: "Mobility"
            }, {
                name: "Grace Cell",
                perk: "Grace",
                slot: "Mobility"
            }],
            power: [{
                name: "Aetherhunter Cell",
                perk: "Aetherhunter",
                slot: "Power"
            }, {
                name: "Deconstruction Cell",
                perk: "Deconstruction",
                slot: "Power"
            }, {
                name: "Discipline Cell",
                perk: "Discipline",
                slot: "Power"
            }, {
                name: "Knockout King Cell",
                perk: "Knockout King",
                slot: "Power"
            }, {
                name: "Overpower Cell",
                perk: "Overpower",
                slot: "Power"
            }, {
                name: "Pacifier Cell",
                perk: "Pacifier",
                slot: "Power"
            }, {
                name: "Rage Cell",
                perk: "Rage",
                slot: "Power"
            }, {
                name: "Ragehunter Cell",
                perk: "Ragehunter",
                slot: "Power"
            }, {
                name: "Sharpened Cell",
                perk: "Sharpened",
                slot: "Power"
            }],
            technique: [{
                name: "Acidic Cell",
                perk: "Acidic",
                slot: "Technique"
            }, {
                name: "Adrenaline Cell",
                perk: "Adrenaline",
                slot: "Technique"
            }, {
                name: "Barbed Cell",
                perk: "Barbed",
                slot: "Technique"
            }, {
                name: "Berserker Cell",
                perk: "Berserker",
                slot: "Technique"
            }, {
                name: "Bladestorm Cell",
                perk: "Bladestorm",
                slot: "Technique"
            }, {
                name: "Cunning Cell",
                perk: "Cunning",
                slot: "Technique"
            }, {
                name: "Evasive Fury Cell",
                perk: "Evasive Fury",
                slot: "Technique"
            }, {
                name: "Merciless Cell",
                perk: "Merciless",
                slot: "Technique"
            }, {
                name: "Molten Cell",
                perk: "Molten",
                slot: "Technique"
            }, {
                name: "Predator Cell",
                perk: "Predator",
                slot: "Technique"
            }, {
                name: "Savagery Cell",
                perk: "Savagery",
                slot: "Technique"
            }, {
                name: "Weighted Strikes Cell",
                perk: "Weighted Strikes",
                slot: "Technique"
            }, {
                name: "Wild Frenzy Cell",
                perk: "Wild Frenzy",
                slot: "Technique"
            }],
            utility: [{
                name: "Aetherborne Cell",
                perk: "Aetherborne",
                slot: "Utility"
            }, {
                name: "Aetheric Attunement Cell",
                perk: "Aetheric Attunement",
                slot: "Utility"
            }, {
                name: "Aetheric Frenzy Cell",
                perk: "Aetheric Frenzy",
                slot: "Utility"
            }, {
                name: "Conduit Cell",
                perk: "Conduit",
                slot: "Utility"
            }, {
                name: "Energized Cell",
                perk: "Energized",
                slot: "Utility"
            }, {
                name: "Engineer Cell",
                perk: "Engineer",
                slot: "Utility"
            }, {
                name: "Lucent Cell",
                perk: "Lucent",
                slot: "Utility"
            }, {
                name: "Medic Cell",
                perk: "Medic",
                slot: "Utility"
            }, {
                name: "Mender Cell",
                perk: "Mender",
                slot: "Utility"
            }, {
                name: "Stunning Vigour Cell",
                perk: "Stunning Vigour",
                slot: "Utility"
            }, {
                name: "Vampiric Cell",
                perk: "Vampiric",
                slot: "Utility"
            }]
        },
        perks: {
            Acidic: {
                type: "Technique"
            },
            Adrenaline: {
                type: "Technique"
            },
            Aetherborne: {
                type: "Utility"
            },
            Aetherhunter: {
                type: "Power"
            },
            "Aetheric Attunement": {
                type: "Utility"
            },
            "Aetheric Frenzy": {
                type: "Utility"
            },
            Agility: {
                type: "Mobility"
            },
            "Assassin's Vigour": {
                type: "Defence"
            },
            Barbed: {
                type: "Technique"
            },
            Berserker: {
                type: "Technique"
            },
            Bladestorm: {
                type: "Technique"
            },
            Bloodless: {
                type: "Defence"
            },
            Conditioning: {
                type: "Mobility"
            },
            Conduit: {
                type: "Utility"
            },
            Cunning: {
                type: "Technique"
            },
            Deconstruction: {
                type: "Power"
            },
            Endurance: {
                type: "Mobility"
            },
            Discipline: {
                type: "Power"
            },
            Energized: {
                type: "Utility"
            },
            Engineer: {
                type: "Utility"
            },
            Evasion: {
                type: "Mobility"
            },
            "Evasive Fury": {
                type: "Technique"
            },
            Fireproof: {
                type: "Defence"
            },
            "Fleet Footed": {
                type: "Mobility"
            },
            Fortress: {
                type: "Defence"
            },
            Grace: {
                type: "Mobility"
            },
            Guardian: {
                type: "Defence"
            },
            Iceborne: {
                type: "Defence"
            },
            Insulated: {
                type: "Defence"
            },
            "Knockout King": {
                type: "Power"
            },
            Lucent: {
                type: "Utility"
            },
            Medic: {
                type: "Utility"
            },
            Mender: {
                type: "Utility"
            },
            Merciless: {
                type: "Technique"
            },
            Molten: {
                type: "Technique"
            },
            Nimble: {
                type: "Mobility"
            },
            "Nine Lives": {
                type: "Defence"
            },
            Overpower: {
                type: "Power"
            },
            Pacifier: {
                type: "Power"
            },
            Predator: {
                type: "Technique"
            },
            Rage: {
                type: "Power"
            },
            Ragehunter: {
                type: "Power"
            },
            Savagery: {
                type: "Technique"
            },
            Sharpened: {
                type: "Power"
            },
            "Shellshock Resist": {
                type: "Defence"
            },
            Strategist: {
                type: "Defence"
            },
            "Stunning Vigour": {
                type: "Utility"
            },
            Sturdy: {
                type: "Defence"
            },
            Sprinter: {
                type: "Mobility"
            },
            Swift: {
                type: "Mobility"
            },
            Tough: {
                type: "Defence"
            },
            Vampiric: {
                type: "Utility"
            },
            Warmth: {
                type: "Defence"
            },
            "Weighted Strikes": {
                type: "Technique"
            },
            "Wild Frenzy": {
                type: "Technique"
            }
        }
    }
}, function(e, s, n) {
    "use strict";
    n.r(s);
    var r = n(0);

    function a(e, s) {
        for (var n = 0; n < s.length; n++) {
            var r = s[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }
    var o = function() {
        function e() {
            ! function(e, s) {
                if (!(e instanceof s)) throw new TypeError("Cannot call a class as a function")
            }(this, e), this.weaponType = "", this.perks = this.cleanPerks(), this.requiredItems = this.cleanRequiredItems(), this.excludedItems = this.cleanExcludedItems(), this.textFilter = "", this.maxPerks = 0, this.nPerks = 0, this.excludedPerks = new Set, this.fillSet = !0
        }
        var s, n, o;
        return s = e, (n = [{
            key: "setWeaponType",
            value: function(e) {
                this.weaponType = e, this.maxPerks = 36, "Repeaters" == e && (this.maxPerks = 33)
            }
        }, {
            key: "addPerk",
            value: function(e, s) {
                return !(this.nPerks + s > this.maxPerks || this.perks[e] + s > 6) && (this.perks[e] += s, this.nPerks += s, !0)
            }
        }, {
            key: "removePerk",
            value: function(e, s) {
                var n = this.perks[e];
                this.perks[e] -= s, this.perks[e] = Math.max(0, this.perks[e]), this.nPerks -= n - this.perks[e]
            }
        }, {
            key: "applyTextFilter",
            value: function() {
                var e = this;
                this.requiredItems = this.cleanRequiredItems(), this.excludedItems = this.cleanExcludedItems(), this.excludedPerks.clear();
                var s = [new RegExp(/^!/)];
                this.textFilter.split(",").forEach(function(n) {
                    n = n.trim();
                    var a = s[0].test(n);
                    a && (n = n.slice(1)), n = n.toLowerCase();
                    for (var o = !1, t = r.weapons[e.weaponType], i = 0; i < t.length; i++)
                        if (t[i].name.toLowerCase() == n) {
                            a ? e.excludedItems.Weapon.push(n) : e.requiredItems.Weapon = n;
                            break
                        } if (!o)
                        for (var l = Object.keys(r.armours), c = 0; c < l.length; c++) {
                            for (var p = r.armours[l[c]], m = 0; m < p.length; m++)
                                if (p[m].name.toLowerCase() == n) {
                                    a ? e.excludedItems[l[c]].push(n) : e.requiredItems[l[c]] = n;
                                    break
                                } if (m != p.length) break
                        }!o && a && Object.keys(r.perks).forEach(function(s) {
                            (s.toLowerCase() == n || r.perks[s].type.toLowerCase() == n && 0 == e.perks[s]) && e.excludedPerks.add(s)
                        })
                })
            }
        }, {
            key: "getFilteredData",
            value: function() {
                var e = this,
                    s = JSON.parse(JSON.stringify(r));
                for (var n in s.weapons) n != this.weaponType && delete s.weapons[n];
                "" == this.requiredItems.Weapon ? s.weapons[this.weaponType] = s.weapons[this.weaponType].filter(function(s) {
                    return -1 == e.excludedItems.Weapon.indexOf(s.name)
                }) : s.weapons[this.weaponType] = s.weapons[this.weaponType].filter(function(s) {
                    return e.requiredItems.Weapon == s.name
                });
                var a = function(n) {
                    "" == e.requiredItems[n] ? s.armours[n] = s.armours[n].filter(function(s) {
                        return -1 == e.excludedItems[n].indexOf(s.name)
                    }) : s.armours[n] = s.armours[n].filter(function(s) {
                        return e.requiredItems[n] == s.name
                    })
                };
                for (var o in s.armours) a(o);
                for (var o in s.weapons[this.weaponType] = s.weapons[this.weaponType].filter(function(s) {
                        var n = !0;
                        return null != s.perks && (n = !e.excludedPerks.has(s.perks) && n), null != s.cells && s.cells.forEach(function(s) {
                            n = !e.excludedPerks.has(s) && n
                        }), null == s.perks && null == s.cells && (n = !1), n
                    }), s.armours) s.armours[o] = s.armours[o].filter(function(s) {
                    var n = !0;
                    return null != s.perks && (n = !e.excludedPerks.has(s.perks) && n), null != s.cells && (n = !e.excludedPerks.has(s.cells) && n), null == s.perks && null == s.cells && (n = !1), n
                });
                if (this.nPerks == this.maxPerks)
                    for (var t in s.weapons[this.weaponType] = s.weapons[this.weaponType].filter(function(s) {
                            return (null != s.perks || "Repeaters" == e.weaponType) && 0 != e.perks[s.perks]
                        }), s.armours) s.armours[t] = s.armours[t].filter(function(s) {
                        return "Lantern" == s.type || null != s.perks && 0 != e.perks[s.perks]
                    });
                return s
            }
        }, {
            key: "cleanCells",
            value: function() {
                return {
                    Defence: [],
                    Mobility: [],
                    Power: [],
                    Technique: [],
                    Utility: []
                }
            }
        }, {
            key: "cleanCellSlots",
            value: function() {
                return {
                    Defence: 0,
                    Mobility: 0,
                    Power: 0,
                    Technique: 0,
                    Utility: 0
                }
            }
        }, {
            key: "cleanPerks",
            value: function() {
                return {
                    Acidic: 0,
                    Adrenaline: 0,
                    Aetherborne: 0,
                    Aetherhunter: 0,
                    "Aetheric Attunement": 0,
                    "Aetheric Frenzy": 0,
                    Agility: 0,
                    "Assassin's Vigour": 0,
                    Barbed: 0,
                    Berserker: 0,
                    Bladestorm: 0,
                    Bloodless: 0,
                    Conditioning: 0,
                    Conduit: 0,
                    Cunning: 0,
                    Deconstruction: 0,
                    Discipline: 0,
                    Endurance: 0,
                    Energized: 0,
                    Engineer: 0,
                    Evasion: 0,
                    "Evasive Fury": 0,
                    Fireproof: 0,
                    "Fleet Footed": 0,
                    Fortress: 0,
					Grace: 0,
                    Guardian: 0,
                    Iceborne: 0,
                    Insulated: 0,
                    "Knockout King": 0,
                    Lucent: 0,
                    Medic: 0,
                    Mender: 0,
                    Merciless: 0,
                    Molten: 0,
                    Nimble: 0,
                    "Nine Lives": 0,
                    Overpower: 0,
                    Pacifier: 0,
                    Predator: 0,
                    Rage: 0,
                    Ragehunter: 0,
                    Savagery: 0,
                    Sharpened: 0,
                    "Shellshock Resist": 0,
                    Strategist: 0,
                    "Stunning Vigour": 0,
                    Sturdy: 0,
                    Sprinter: 0,
                    Swift: 0,
                    Tough: 0,
                    Vampiric: 0,
                    Warmth: 0,
                    "Weighted Strikes": 0,
                    "Wild Frenzy": 0
                }
            }
        }, {
            key: "cleanPerksType",
            value: function() {
                return {
                    Defence: 0,
                    Mobility: 0,
                    Power: 0,
                    Technique: 0,
                    Utility: 0
                }
            }
        }, {
            key: "cleanRequiredItems",
            value: function() {
                return {
                    Weapon: "",
                    Head: "",
                    Torso: "",
                    Arms: "",
                    Legs: "",
                    Lantern: ""
                }
            }
        }, {
            key: "cleanExcludedItems",
            value: function() {
                return {
                    Weapon: [],
                    Head: [],
                    Torso: [],
                    Arms: [],
                    Legs: [],
                    Lantern: []
                }
            }
        }]) && a(s.prototype, n), o && a(s, o), e
    }();
    self.onmessage = function(e) {
        var s = new o;
        Object.assign(s, e.data[0]);
        var n = s.getFilteredData(),
            r = 0,
            a = [n.weapons[s.weaponType]];
        a.push(n.armours.Head), a.push(n.armours.Torso), a.push(n.armours.Arms), a.push(n.armours.Legs), a.push(n.armours.Lantern);
        var t = [n.weapons[s.weaponType].length];
        t.push(n.armours.Head.length), t.push(n.armours.Torso.length), t.push(n.armours.Arms.length), t.push(n.armours.Legs.length), t.push(n.armours.Lantern.length);
        var i = [];
        Object.keys(s.perks).forEach(function(e) {
            0 != s.perks[e] && i.push(e)
        });
        var l = 0,
            c = [
                [0, 1, 2, 3, 4, 5]
            ];
        s.fillSet || (c = function(e) {
            for (var s = [], n = 1; n <= e.length; n++) {
                for (var r = e.length, a = [], o = 0; o < n; o++) a[o] = o;
                for (; a[n - 1] < r;) {
                    for (var t = [], i = 0; i < n; i++) t.push(e[a[i]]);
                    s.push(t);
                    for (var l = n - 1; 0 != l && a[l] == r - n + l;) l--;
                    a[l]++;
                    for (var c = l + 1; c < n; c++) a[c] = a[c - 1] + 1
                }
            }
            return s
        }([0, 1, 2, 3, 4, 5]));
        var p = ["Weapon", "Head", "Torso", "Arms", "Legs", "Lantern"];
        c = c.filter(function(e) {
            for (var n = 0; n <= 5; n++)
                if (-1 == e.indexOf(n) && "" != s.requiredItems[p[n]]) return !1;
            return !0
        });
        for (var m = [], u = [], h = [], g = [], k = [], y = 0, d = function(e) {
                m.push([!1, !1, !1, !1, !1, !1]), u[e] = [], h[e] = [], g[e] = [], c[e].forEach(function(s) {
                    m[e][s] = !0, u[e].push(a[s]), h[e].push(t[s]), g[e].push(s)
                }), k[e] = 1, h[e].forEach(function(s) {
                    k[e] *= s
                }), y += k[e]
            }, w = 0; w < c.length; w++) d(w);
        var f = [],
            S = s.cleanPerksType();
        Object.keys(s.perks).forEach(function(e) {
            S[n.perks[e].type] += s.perks[e] / 3
        }), self.postMessage([0, y, n, s.weaponType]);
        for (var v = function(e) {
                for (var a = u[e], o = h[e], t = 0; t < k[e]; t++) {
                    for (var c = [], p = k[e], y = t, d = 0; d < a.length; d++) p /= o[d], c.push(Math.floor(y / p)), y %= p;
                    r % 15e3 == 0 && self.postMessage([2, r]), r++;
                    for (var w = s.cleanPerks(), v = s.cleanCellSlots(), b = s.cleanPerksType(), T = s.cleanCells(), P = [!1, !1, !1, !1, !1, !1], C = 0; C < a.length; C++) m[e][g[e][C]] && (null != a[C][c[C]].perks ? (w[a[C][c[C]].perks] += 3, b[n.perks[a[C][c[C]].perks].type]++, w[a[C][c[C]].perks] > s.perks[a[C][c[C]].perks] ? P[g[e][C]] = !1 : P[g[e][C]] = !0) : P[g[e][C]] = !1, null != a[C][c[C]].cells && (0 == g[e][C] ? (v[a[C][c[C]].cells[0]]++, v[a[C][c[C]].cells[1]]++, b[a[C][c[C]].cells[0]]++, b[a[C][c[C]].cells[1]]++) : (v[a[C][c[C]].cells]++, b[a[C][c[C]].cells]++)));
                    for (var A = !0, q = 0; q < i.length; q++)
                        if (w[i[q]] < s.perks[i[q]]) {
                            var D = (s.perks[i[q]] - w[i[q]]) / 3;
                            if (!(v[n.perks[i[q]].type] >= D)) {
                                A = !1;
                                break
                            }
                            v[n.perks[i[q]].type] -= D;
                            for (var M = 0; M < D; M++) T[n.perks[i[q]].type].push(i[q])
                        } if (A)
                        if ("break" === function() {
                                var n = [-1, -1, -1, -1, -1, -1];
                                c.forEach(function(s, r) {
                                    return n[g[e][r]] = s
                                });
                                for (var r = !1, o = 0; o < c.length && s.nPerks != s.maxPerks && !s.fillSet; o++)
                                    if (!P[g[e][o]])
                                        if (0 == g[e][o]) {
                                            var t = [];
                                            if (t[0] = b[a[o][c[o]].cells[0]], t[1] = b[a[o][c[o]].cells[1]], a[o][c[o]].cells[0] == a[o][c[o]].cells[1] && t[1]--, t[0] > S[a[o][c[o]].cells[0]] && t[1] > S[a[o][c[o]].cells[1]]) {
                                                r = !0;
                                                break
                                            }
                                        } else if (b[a[o][c[o]].cells] > S[a[o][c[o]].cells]) {
                                    r = !0;
                                    break
                                }
                                if (!r) {
                                    for (var i = !1, p = 0; p < f.length && s.nPerks != s.maxPerks && !s.fillSet; p++) {
                                        i = !0;
                                        for (var u = 0; u <= 5; u++)
                                            if (n[u] != f[p][u] && -1 != f[p][u]) {
                                                i = !1;
                                                break
                                            } if (i) break
                                    }
                                    if (!i && (f.push(n), self.postMessage([1, n, T, P, m[e]]), 1e3 == ++l)) return "break"
                                }
                            }()) break
                }
            }, b = 0; b < c.length && 1e3 != l; b++) v(b);
        self.postMessage([3])
    }
}]);
