/*
 OK REDOING THIS COMMENTING BECAUSE I LOST IT AGAIN
 Credits:
 -
 SECTIONS:
 1. Dialogue changing
 2. CSS
 3. Humors
 4. Augments
 5. Combat Modifiers
 6. Status Effects
 7. Combat Actions
 8. Merchant Code

 TO DO:
-make testing humor
  -action, fated, actions
  -https://github.com/EmptyEcho-Sys/Echo_Memhole/blob/main/testinghumor.gif
*/

//Dialogue changing
document.addEventListener("readystatechange", (event) => {
	if(document.readyState == 'complete') {
		env.dialogues["dreammod"] = generateDialogueObject(`
loop
    basterminal
        ALTERED
        TEXEC::\`STARTING TENSION::'\${check("e3a2_tension") || 1}'\`
            AUTOADVANCE::
        TEXEC::\`STARTING HUMORS::'\${check("e3a2_newcomp") || "normal"}'\`
            AUTOADVANCE::
        TEXEC::\`STARTING SFER::'\${check("e3a2_sfer") || "0"}'\`
            AUTOADVANCE::
        TEXEC::\`FISH SPAWN RATE::'\${check("e3a2_fishchance") ? \`\${Number(check("e3a2_fishchance")) * 100}%\`: '10%'}'\`
            AUTOADVANCE::
            SHOWIF::"e3a2__fishy"

    RESPOBJ::basterminalResp

start
    sourceless
        the terminal displays various controls and settings for the dream.
    
    basterminal
        hi :b
        CURRENT SETTINGS
        TEXEC::\`STARTING TENSION::'\${check("e3a2_tension") || 1}'\`
        TEXEC::\`STARTING HUMORS::'\${check("e3a2_newcomp") || "normal"}'\`
        TEXEC::\`STARTING SFER::'\${check("e3a2_sfer") || "0"}'\`
        TEXEC::\`FISH SPAWN RATE::'\${check("e3a2_fishchance") ? \`\${Number(check("e3a2_fishchance")) * 100}%\`: '10%'}'\`
            SHOWIF::"e3a2__fishy"
    
    RESPOBJ::basterminalResp

tension
    basterminal
        select starting tension
        1 is default
    
    RESPONSES::self
        1<+>loop
            EXEC::change("e3a2_tension", 1)
            HIDEREAD::
        2<+>loop
            EXEC::change("e3a2_tension", 2)
            HIDEREAD::
        3<+>loop
            EXEC::change("e3a2_tension", 3)
            HIDEREAD::
        4<+>loop
            EXEC::change("e3a2_tension", 4)
            HIDEREAD::
        5<+>loop
            EXEC::change("e3a2_tension", 5)
            HIDEREAD::
        6<+>loop
            EXEC::change("e3a2_tension", 6)
            HIDEREAD::

humors
    basterminal
        select starting <span class="code">humor</span> set
        normal is default
    
    RESPONSES::self
        normal<+>loop
            EXEC::change("e3a2_newcomp", "normal")
            HIDEREAD::
        abundant<+>loop
            EXEC::change("e3a2_newcomp", "abundant")
            HIDEREAD::
        too many<+>loop
            EXEC::change("e3a2_newcomp", "too many")
            HIDEREAD::
        claws<+>loop
            EXEC::change("e3a2_newcomp", "claws")
            HIDEREAD::
        eyes<+>loop
            EXEC::change("e3a2_newcomp", "eyes")
            HIDEREAD::
        ichor<+>loop
            EXEC::change("e3a2_newcomp", "ichor")
            HIDEREAD::
        light<+>loop
            EXEC::change("e3a2_newcomp", "light")
            HIDEREAD::
        bone<+>loop
            EXEC::change("e3a2_newcomp", "bone")
            HIDEREAD::
        test<+>loop
            EXEC::change("e3a2_newcomp", "test")
            HIDEREAD::

fish
    basterminal
        select fish spawn rate
        10% is default
    
    RESPONSES::self
        normal (10%)<+>loop
            EXEC::change("e3a2_fishchance", "0.1")
            HIDEREAD::
        foolish (25%)<+>loop
            EXEC::change("e3a2_fishchance", "0.25")
            HIDEREAD::
        likely (50%)<+>loop
            EXEC::change("e3a2_fishchance", "0.5")
            HIDEREAD::
        guaranteed (100%)<+>loop
            EXEC::change("e3a2_fishchance", "1")
            HIDEREAD::

sfer
    basterminal
        select starting sfer
        none is default
    
    RESPONSES::self
        none (0)<+>loop
            EXEC::change("e3a2_sfer", "DELETE")
            HIDEREAD::

        some (20)<+>loop
            EXEC::change("e3a2_sfer", 20)
            HIDEREAD::

        abundant(40)<+>loop
            EXEC::change("e3a2_sfer", 40)
            HIDEREAD::

        a lot (99)<+>loop
            EXEC::change("e3a2_sfer", 99)
            HIDEREAD::

        mod tester's delight(999)<+>loop
            EXEC::change("e3a2_sfer", 999)
            HIDEREAD::
`)
	}
} ) ;

document.addEventListener("readystatechange", (event) => {
	if(document.readyState == 'complete'){
		switch(check("e3a2_newcomp")) {
		case "too many":
			page.flags.components = {
				ichor: 30,
				claws: 30,
				light: 30,
				bone: 30,
				eyes: 30,
				entropy: 30,
                    surging: 30,
			}
			
			page.party[0].components["primary"] = "claws"
			page.party[0].components["secondary"] = "claws"
			page.party[0].components["utility"] = "eyes"

			page.party[1].components["primary"] = "light"
			page.party[1].components["secondary"] = "eyes"
			page.party[1].components["utility"] = "bone"

			page.party[2].components["primary"] = "eyes"
			page.party[2].components["secondary"] = "ichor"
			page.party[2].components["utility"] = "light"
				break

		case "abundant":
			page.flags.components = {
				ichor: 3,
				claws: 3,
				light: 3,
				bone: 3,
				eyes: 3,
				entropy: 3,
                    surging: 3,
			}
			
			page.party[0].components["primary"] = "claws"
			page.party[0].components["secondary"] = "claws"
			page.party[0].components["utility"] = "eyes"

			page.party[1].components["primary"] = "light"
			page.party[1].components["secondary"] = "eyes"
			page.party[1].components["utility"] = "bone"

			page.party[2].components["primary"] = "eyes"
			page.party[2].components["secondary"] = "ichor"
			page.party[2].components["utility"] = "light"
				break

		case "test":
			page.flags.components = { test: 12 }

			page.party.forEach(member=>{
				member.components["primary"] = "test"
				member.components["secondary"] = "test"
				member.components["utility"] = "test"
			})
		}
	}
});

//CSS
content.insertAdjacentHTML('beforeend', `<style>
/* for making player cards not overflow offscreen */
#ally-team .actor {
    background-color: var(--dark-color);
    margin-top: 50px;
}

#ally-team {
    bottom: 5vh;
    flex-wrap: wrap;
    z-index: 29;
}

#crittaresult, #crittaresult * {
    transition: transform 2s ease-in-out, opacity 2s ease-in-out;
    text-align: center;
    z-index: 30;
}


/* humor styling */
[component="test"] {
    --background: url(https://github.com/EmptyEcho-Sys/Echo_Memhole/blob/main/testinghumor.gif);
    --organelle-background: url(https://github.com/EmptyEcho-Sys/Echo_Memhole/blob/main/testinghumor.gif);    
    --background-small:  url(https://github.com/EmptyEcho-Sys/Echo_Memhole/blob/main/testinghumor.gif);
    --background-size: auto;
    --background-position: center;
    --background-color: var(--dark-color);
    --accent-color: var(--bright-color);
    --font-color: var(--neutral-color);
}
</style>`);
//HUMORS
env.COMBAT_COMPONENTS.test = {
     name: "Testing",
     slug: "entropy",
     description: "'Testing and debugging'",
     help: "'instakill,'full heal','powering'",

     primary: { //kill all foes
          alterations: [["primary", "deathbeam"]],     

          stats: {
               maxhp: 20
          },
     },

     secondary: { //full heal allies
          alterations: [["secondary", "healbeam"]],
          stats: {
               maxhp: 20
          }
     },

     utility: { //give allies focus, empowered and surge
          alterations: [["evade", "focusplus"]],
          stats: {
               maxhp: 20
          }
     },
     combatModifiers: ["test_one", "test_two", "test_three"]
}

/*
env.COMBAT_COMPONENTS.base = {
     name: "Base",
     slug: "base",
     description: "use me as a base",
     help: "use me as a base",

     primary: {
          alterations: [["primary"]],
          stats: {
               maxhp: 3
          }
     },
     secondary: {
          alterations: [["secondary"]],
          stats: {
               maxhp: 3
          }
     },
     utility: {
          alterations: [["evade"]],
          stats: {
               maxhp: 3
          }
     }
}
*/


//AUGMENTS
/*
+ Yknow, you dont really need to look at these, they all do the same layout and are generally hard to break.
+ that being said, mayber you might need to see these for move names?
*/
env.ACTOR_AUGMENTS.generic.deathboost = {
	slug: "deathboost",
	name: "death beam boost",
	image: "https://github.com/EmptyEcho-Sys/Echo_Memhole/blob/main/testinghumor.gif",
	description: "'you dont even need this tbh'",
	alterations: [["death beam", "death beam boost"]],
	component: ["primary", "test"],
	cost: 1
}

env.ACTOR_AUGMENTS.generic.healboost = {
	slug: "healboost",
	name: "boosted healing beam",
	image: "https://github.com/EmptyEcho-Sys/Echo_Memhole/blob/main/testinghumor.gif",
	description: "'heal all allies even more!'",
	alterations: [["healbeam", "healboost"]], //LEFT OFF HERE LOOK HERE!!!!!!! - okay past me
	component: ["secondary", "test"],
	cost: 1
}

env.ACTOR_AUGMENTS.generic.focusboost = {
     slug: "focusboost",
     name: "Focus boost",
     image: "https://github.com/EmptyEcho-Sys/Echo_Memhole/blob/main/testinghumor.gif",
     description: "'focus but even better!'",
     alterations: [["focusplus", "focusboost"]],
     component: ["utility", "test"],
     cost: 2
}

//COMBAT MODIFIERS
env.MODIFIERS.test_one = {
	name: "nothing",
	getHelp: ()=> { return env.STATUS_EFFECTS.test_one.help },
	alterations: {
		all: [ ["STATUS", "test_two"] ]
	}
}

env.MODIFIERS.test_two = {
	name: "nothing",
	getHelp: ()=> { return env.STATUS_EFFECTS.test_two.help },
	alterations: {
		all: [ ["STATUS", "test_two"] ]
	}
}

env.MODIFIERS.test_three = {
	name: "nothing",
	getHelp: ()=> {return env.STATUS_EFFECTS.test_three.help},
	alterations: {
		all: [["STATUS", "test_three"]]
	}
}

//STATUS EFFECTS
/*
+ Yeah these needed doccumenting
*/
env.STATUS_EFFECTS.test_one = {
	slug: "test_one",
	name: "test1",
	passive: "modifier",
	beneficial: false,
	icon: "https://github.com/EmptyEcho-Sys/Echo_Memhole/blob/main/testinghumor.gif",
	impulse: {type: "common", component: "test"},
	events: 
     help: `nothings`
},

env.STATUS_EFFECTS.test_one = {
	slug: "test_one",
	name: "test1",
	passive: "modifier",
	beneficial: false,
	icon: "https://github.com/EmptyEcho-Sys/Echo_Memhole/blob/main/testinghumor.gif",
	impulse: {type: "common", component: "test"},
	events: 
     help: `nothings`
},

env.STATUS_EFFECTS.test_two = {
	slug: "test_two",
	name: "test2",
	passive: "modifier",
	beneficial: false,
	icon: "https://github.com/EmptyEcho-Sys/Echo_Memhole/blob/main/testinghumor.gif",
	impulse: {type: "common", component: "test"},
	events: 
     help: `nothings`
},
env.STATUS_EFFECTS.test_three = {
	slug: "test_three",
	name: "test3",
	passive: "modifier",
	beneficial: false,
	icon: "https://github.com/EmptyEcho-Sys/Echo_Memhole/blob/main/testinghumor.gif",
	impulse: {type: "common", component: "test"},
	events: 
     help: `nothings`
}

//COMBAT ACTIONS
//test
env.ACTIONS.deathbeam = { //HERREEEEE LOOK HEREE!!!!!! HERE FOR MORE WORKKK!!!!
	slug: "deathbeam",
	name: "death beam",
	type: 'target',
	desc: "'death beam'",
	anim: "basic-attack",
	help: "'100% -1000000000HP'",
	usage: {
		act: "%USER FOCUSES THEIR AURA",
		crit: "%USER FUCKS SHIT UP BAD",
		hit: "%USER SHOULDNT BE SEEING THIS",
		miss: "%TARGET HAS W RIZZ????"
		        },
        
        details: {
            flavor: `'utilize rapid-formed micro-explosive';'chance for greater shrapnel explosion'`,
            onHit: `'death'`,
            onCrit: () => `'kill em all'` : ``}`,
	},
	accuracy: 1,
	crit: 1,
	amt: 500000000,
	exec: function(user, target) {
            let action = this;
            return env.GENERIC_ACTIONS.singleTarget({
                action, 
                user, 
                target,

                critExec: ()=> env.GENERIC_ACTIONS.teamWave({
                    team: user.enemyTeam,
                    exec: (actor, i) => {
                        env.GENERIC_ACTIONS.singleTarget({
                            action, 
                            user, 
                            target: actor,
                            hitSfx: { name: 'shot4' },
                            hitStatus: this.stats.status.puncture,
                            canCrit: false
},

env.ACTIONS.player_law = { //Funky little move, had to change it up just like momentum.
	slug: "player_law",
	name: "3rd Law",
	type: 'target',
	desc: "'barrel towards foes';'chance to stun and apply vulnerable'",
	anim: "basic-attack",
	help: "'100% -2HP * (XT:REGEN+FOCUS) 15%C +2T STUN +3T VULNERABLE\nSELF:: #T/2 REGEN/FOCUS/EVASION'",
	usage: {
		act: "%USER CHANNELS ENERGY INTO A SPRINT",
		crit: "%TARGET GETS KNOCKED OVER",
		hit: "%TARGET GETS SLAMMED INTO",
		miss: "%TARGET SIDESTEPS"
	},
	accuracy: 1,
	crit: 0.15,
	amt: 2,
	exec: function(user, target) {
		let action = this
		for (let i = 1; i <= (Math.floor(hasStatus(user, 'focused')) + Math.floor(hasStatus(user, 'regen')) + Math.floor(hasStatus(user, 'evasion'))); i++) {
			env.GENERIC_ACTIONS.singleTarget({
				action: action, user,
				target: target,
				critExec: ({target}) => {
					addStatus({target: target, status: 'stun', length: 1})
					addStatus({target: target, status: 'vulnerable', length: 2})
				}
			})
		}
		if (hasStatus(user, 'focused')) {
			let half = 0 - Math.floor(hasStatus(user, 'focused') / 2)
			addStatus({target: user, status: "focused", length: half, noReact: true})
		}
		if (hasStatus(user, 'regen')) {
			let half = 0 - Math.floor(hasStatus(user, "regen") / 2)
			addStatus({target: user, status: "regen", length: half, noReact: true})
		}
		if (hasStatus(user, 'evasion')) {
			let half = 0 - Math.floor(hasStatus(user, 'evasion') / 2)
			addStatus({target: user, status: "evasion", length: half, noReact: true})
		}
	}
},

env.ACTIONS.level_statuses ={ //this would not deal damage for me at all so i made it deal no damage, also turns out windup doesnt break anything if its removed!
	slug: "level_statuses",
	name: "Level",
	type: 'target',
	desc: "'collapse beyond both yourself and the foe';'remove all statuses'",
	anim: "basic-attack",
	help: "80% REMOVE MOST STATUS EFFECTS, 15%C REMOVE WINDUP",
	usage: {
		act: "%USER REACHES OUT",
		crit: "%USER AND %TARGET FEEL SOMETHING GET TORN AWAY",
		hit: "%TARGET GETS CLAWED",
		miss: "%TARGET SWATS %USER AWAY"
	},
	accuracy: 0.8,
	crit: 0.15,
	amt: 0,
	exec: function(user, target) {
		let statusPool = []
		for (let i in env.STATUS_EFFECTS) {
			let statusData = env.STATUS_EFFECTS[i]
			let usable = true
			if(statusData.infinite && (statusData.slug != "windup")) {usable = false}
			if(statusData.passive) {usable = false}
			if(i.includes("global_")) {usable = false}
			if(i == "misalign_weaken" || i == "misalign_stun" || i == "realign" || i == "realign_stun") {usable = false}
			if(i == "imperfect_reset") {usable = false}
			if(i == "redirection") {usable = false}
			if(i == "entropy_eternal") {usable = false}
			//console.log(i, usable)
			if(usable) statusPool.push(i)
		}
		let targetEffects = []
		target.statusEffects.forEach((status, i) => {
			//console.log(status)
			if((!status.infinite || !status.passive || !i.includes("global_")) && (statusPool.includes(status.slug))) {
				targetEffects.push(status.slug)
			}
		})
		let userEffects = []
		user.statusEffects.forEach((status, i) => {
			//console.log(status)
			if((!status.infinite || !status.passive || !i.includes("global_")) && (statusPool.includes(status.slug) && (status.slug != "windup"))) {
				userEffects.push(status.slug)
			}
		})
		targetEffects.forEach((status) => {
			if(status != "windup") removeStatus(target, status)
		})
		userEffects.forEach((status) => {
			removeStatus(user, status)
		})
		critExec: { //DOnt believe its lies this works jsut fine
			if (targetEffects.includes("windup")) {
				sendFloater({
					target: user,
					type: "arbitrary",
					arbitraryString: "LMAO",
					size: 1.5,
				})
				readoutAdd({
					message: `${target.name} forgot what it was doing.`, 
					name: "sourceless", 
					type: "sourceless combat minordetail", 
					show: false,
					sfx: false
				})
				removeStatus(target, "windup")
			}
		}
	}
},

env.ACTIONS.player_rig = {
	slug: "player_rig",
	name: "Rig Field",
	type: "target",
	desc: "'use foe resources to remove negative statuses';'chance of doubling status duration'",
	anim: "basic-attack",
	help: "'FOES:: 80%  -POSITIVE STATUS, 10%C 2*T NEGATIVE STATUS\nUSER:: 80% -NEGATIVE STATUS, 10%C 2*T POSITIVE STATUS'",
	usage: {
		act: "%USER SHUFFLES THE POWER",
		crit: "%TARGET FEELS DREAD",
		hit: "%TARGET LOOSES THEIR ENERGY",
		miss: "%USER GOT DISTRACTED"
	},
	accuracy: 0.8,
	crit: 0.1,
	amt: 0,
	exec: function(user,target) {
		let statusPool = []
		for (let i in env.STATUS_EFFECTS) {
			let statusData = env.STATUS_EFFECTS[i]
			let usable = true
			if(statusData.infinite && (statusData.slug != "windup")) {usable = false}
			if(statusData.passive) {usable = false}
			if(i.includes("global_")) {usable = false}
			if(i == "misalign_weaken" || i == "misalign_stun" || i == "realign" || i == "realign_stun") {usable = false}
			if(i == "imperfect_reset") {usable = false}
			if(i == "redirection") {usable = false}
			if(i == "entropy_eternal") {usable = false}
			//console.log(i, usable)
			if(usable) statusPool.push(i)
		}
		let targetEffects = []
		target.statusEffects.forEach((status, i) => {
			//console.log(status)
			if((!status.infinite || !status.passive || !i.includes("global_")) && (statusPool.includes(status.slug))) {
				targetEffects.push(status)
			}
		})
		let userEffects = []
		user.statusEffects.forEach((status, i) => {
			//console.log(status)
			if((!status.infinite || !status.passive || !i.includes("global_")) && (statusPool.includes(status.slug) && (status.slug != "windup"))) {
				userEffects.push(status)
			}
		})
		targetEffects.forEach((status) => {
			if(status.beneficial) removeStatus(target, status.slug)
		})
		userEffects.forEach((status) => {
			if (!status.beneficial) removeStatus(user, status.slug)
		})
		critExec: (status) => {
			if(!status.beneficial) addStatus({target:target, status: status.slug, length: Math.floor(hasStatus(target, status.slug))})
			if(status == "windup") {
				sendFloater({
					target: target,
					type: "arbitrary",
					arbitraryString: "LMAO",
					size: 1.5,
				})
				readoutAdd({
					message: `${target.name} forgot what it was doing.`, 
					name: "sourceless", 
					type: "sourceless combat minordetail", 
					show: false,
					sfx: false
				})
				removeStatus(target, status)
			}
		}
		userEffects.forEach((status) => {
			if (status.beneficial) addStatus({target: user, status: status.slug, length: Math.floor(hasStatus(user, status.slug))})
		})
	}
},

env.ACTIONS.wild_frenzy = { //yknow this was what i thought would be the hardest thing to make
	slug: "wild_frenzy",
	name: "Frenzied Flail",
	type: 'target',
	desc: "'flail around';'a chance to keep hitting'",
	anim: "basic-attack",
	help: "100% -2HP, 15%C USE THIS ACTION AGAIN ON RANDOM TARGET",
	usage: {
		act: "%USER BEGINS TO FLAIL",
		crit: "%USER KEEPS FLAILING",
		hit: "%TARGET GETS WHACKED",
		miss: "%TARGET EVADES"
	},
	accuracy: 1,
	crit: 0.15,
	amt: 2,
	exec: function(user, target) { //stole a bit of frenzy's code,
		let action = this
		let targetTeam
		switch(user.team.name) {
			case "ally": targetTeam = env.rpg.enemyTeam; break;
			case "enemy": targetTeam = env.rpg.allyTeam; break;
		}
		let validTargets = targetTeam.members.filter(member => member.state != "dead" && member.state != "lastStand")
		if(validTargets.length) for (let i = 0; i < 1; i++) {
			if (validTargets) {
				let target = validTargets.sample()
					setTimeout(()=>{
						env.GENERIC_ACTIONS.singleTarget({
							action,
							user,
							target,
							hitSfx: { name: 'shot2' },
							critSfx: { name: 'shot6' },
							critExec: ({target})=> {
								if(target.hp > 0 && target.state != "lastStand") {
									env.setTimeout(()=>{
										useAction(user, this, target, {beingUsedAsync: true, reason: "wild_frenzy"})
									}, 400)
								}
							}
						})
					}, 500)
			}
		}
	}
},

env.ACTIONS.player_overload = { //THis will let you traumatize the firmament :]
	slug: 'player_overload',
	name: 'Exponential Surge',
	type: 'self+autohit+support',
	desc: "'focus flailing into a long barrage';'next attack is used across entire team';'long period of focus tires shell out and stuns'",
	anim: "",
	help: "+1T:FOCUSED +EXPONENTIAL SURGE",
	usage: {
		act: "%USER HONES IN"
	},
	beneficial: true,
	disableIf: (actor)=>{ if(hasStatus(actor, "fear")) return "PROHIBITED BY FEAR" },
	exec: function(user, target) {
		play("talkchoir7", 1.5)
		addStatus({target: user, status: "exp_over", length: 1, noReact:true})
		addStatus({target: user, status: "focused", length: 1, noReact:true});
		return 'nothing'
	},
	avoidChaining: true
},

env.ACTIONS.entropy_burnout = {
	slug: "entropy_burnout",
	name: "Burnout",
	type: 'target',
	desc: "'Set off their end'",
	anim: "basic-attack",
	help: "AUTOHIT, +5T BURNOUT ON TARGET",
	autohit: true,
	usage: {
		act: "%USER IGNITES THE ENERGY OF %TARGET",
		hit: "%TARGET STARTS TO BURN UP",
	},
	crit: 0,
	amt: 2,
	exec: function(user, target) {
		return env.GENERIC_ACTIONS.singleTarget({
			action: this, 
			user, 
			target,
			hitSfx: {
				name: 'chomp',
				rate: 0.7
			},
			genExec: ()=> {
				addStatus({target, origin: user, status: "burnout", length:5});
			}
		})
	}
},
//SURGING
env.ACTIONS.tormenting_delight = {
	slug: "tormenting_delight",
	name: "Tormenting delight",
	type: 'target',
	desc: "'Oh how crude!';'laugh at us more';'it only inspires us to keep hitting while you are on your last legs!'",
	anim: "basic-attack",
	help: "100% -3HP 25% +1T STUN, +SURGE USER/n20%C -6HP +2T STUN, 25% +1T STUN, +2T FOCUSED +SURGE USER",
	usage: {
		act: "%USER READIES A SWING",
		hit: "%TARGET IS STRUCK",
		crit: "%TARGET IS STUNNED",
	},
	crit: 0.2,
	amt: 3,
	exec: function(user, target) {
		let includeFocus = false
		env.GENERIC_ACTIONS.singleTarget({
			critExec: ({target}) =>{
				addStatus({target: target, status: "stun", length: 2})
				includeFocus = true
			},
			genExec: ()=> {
				if (Math.random() < 0.25) {
					addStatus(user, "surge")
					addStatus({target: target, status: "stun"})
					if (includeFocus) {addStatus(user, "focus")}
				}
			}
		})
	}
},

env.ACTIONS.back_to_stage = {
	slug: "back_to_stage",
	name: "Back to stage",
	type: 'target',
	desc: "'oh not just yet!';'you cannot be unable to dance now!';'far too important for you to leave so early!'",
	help: "IF STUN: -1/2HP, +1-3T [ROT/DESTABILIZED/VULNERABLE/PUNCTURE]\nIF NO STUN: +2/3T EVASION",
	beneficial: true,
	exec: function(user, target) {
		let consequenceChoices =["rot", "destabilized", "vulnerable", "puncture"]
		let pickedConsequence = consequenceChoices.sample()
		if (hasStatus(target, "stun")) {
			critExec: ({target}) =>{
				if (pickedConsequence == "rot") {
					consequenceLength = 1
				} else {
					consequenceLength = 2
				}
				combatHit(target, {amt: 1, autohit: true, redirectable: false})
				addStatus({target:target, status: pickedConsequence, length: consequenceLength})
			}
			hitExec: ({target}) =>{
				if (pickedConsequence == "rot") {
					consequenceLength = 2
				} else {
					consequenceLength = 3
				}
				combatHit(target, {amt: 2, autohit: true, redirectable: false})
				addStatus({target: target, status: pickedConsequence, length: consequenceLength})
			}
      genExec: ({target}) => {
				removeStatus(target, "stun")
			}
		} else {
			critExec: ({target}) => {
				addStatus({target: target,status: "evasion",legnth: 3})
			}
			hitExec: ({target})=>{
				addStatus(target, "evasion")
			}
		}
	}
},

env.ACTIONS.velnits_lament = {
	slug: "velnits_lament",
	name: "velnit's lament",
	type: 'support+target+self+autohit',
	desc: "'O, so my act come to an end';'a well earned break from this play!';'for you however';'must pick up the pace!'",
	help: "IF TEAMMATE: -SURGE +WILD SURGE\nIF SELF: -SURGE +WILDSURGE +1T STUN +2T VULNERABLE",
	exec: function(user,target) {
		if (hasStatus(target, "surge")) {
			removeStatus(target, "surge")
			addStatus(target,"wild_surge")
			if (target == user) {
				addStatus(user, "vulnerable")
			}
		}
	}
},

env.ACTIONS.showmanship = {
	slug: "showmanship",
	name: "SHOWMANSHIP",
	type: 'target',
	desc: "'SEE HOW THEY FALL!';'THEY THOUGHT THEY WERE LAUGHING DOWN AT US';'ONLY FOR US TO SWEEP THEIR KNEES!'",
	help: "",
	usage: {
	},
	crit: 0.2,
	amt: 2,
	exec: function(user, target) {
		hitExec: ({user,target}) =>{
			let action = this
			let targetTeam
			switch(user.team.name) {
				case "ally": targetTeam = env.rpg.enemyTeam; break;
				case "enemy": targetTeam = env.rpg.allyTeam; break;
			}
			let validTargets = targetTeam.members.filter(member => member.state != "dead" && member.state != "lastStand")
			if(validTargets.length) for (let i = 1; i <=3; i++) {
				if (validTargets) {
					let target = validTargets.sample()
					setTimeout(()=>{
						env.GENERIC_ACTIONS.singleTarget({
							action,
							user,
							target,
							hitSfx: { name: 'shot2' },
							critSfx: { name: 'shot6' },
						})
					}, 500)
				}
			}
		}
		critExec: ({target}) => {
			env.GENERIC_ACTIONS.teamWave({
				team: target.team,
				exec: (actor, i) => {
					if(actor == target) return; // we skip the original target
					useAction(user, action, actor, {triggerActionUseEvent: false, beingUsedAsync: true, reason: "exponential overload"})
				}
			})
		}
	}
},

env.ACTIONS.method_acting = {
	slug: "method_acting",
	name: "BREAKS END",
	type: 'autohit',
	desc: "'STARVED THIN AND CHITTIN SCATTERED';'YOU MUST CONTINUE!';'VELZIE DEMANDS! VELZIE COMMANDS!'",
	help: "",
	exec: function(user,target) {
		let consequenceChoices =["rot", "destabilized", "vulnerable", "puncture"]
		let pickedConsequence = consequenceChoices.sample()
		if (hasStatus(target, "stun")) {
			critExec: ({target}) =>{
				if (pickedConsequence == "rot") {
					consequenceLength = 1
				} else {
					consequenceLength = 2
				}
				combatHit(target, {amt: 1, autohit: true, redirectable: false})
				addStatus({target:target, status: pickedConsequence, length: consequenceLength})
			}
			hitExec: ({target}) =>{
				if (pickedConsequence == "rot") {
					consequenceLength = 2
				} else {
					consequenceLength = 3
				}
				combatHit(target, {amt: 2, autohit: true, redirectable: false})
				addStatus({target: target, status: pickedConsequence, length: consequenceLength})
			}
			genExec: ({target}) => {
				removeStatus(target, "stun")
			}
		} else {
			critExec: ({target}) => {
				addStatus({target: target,status: "evasion",legnth: 3})
			}
			hitExec: ({target})=>{
				addStatus(target, "evasion")
			}
		}
	}
},

env.ACTIONS.sacrificial_act = {
	slug: "sacrifical_act",
	name: "Sacrifical Act",
	type: 'autohit+target',
	desc: "'LET THE SHOW GO FORTH! AGAIN!';'LET VELZIE VIEW OUR CRUDE IMMITATIONS';'FOR THAT WILL ONLY INSPIRE US MORE!'",
	help: "IF TARGET HAS SURGE, -SURGE +WILDSURGE +1T EMPOWERED +2T FOCUSED/nIF ON SELF:-4HP,+2T FEAR, +1T STUN, +1T VULNERABLE +1T WILD",
	exec: function(user,target){
		if (target == user) {
			genExec: ({user}) => {
				combatHit(user, {amt:4, autohit: true, redirectable:false})
				if (hasStatus(user,"surge")) {
					removeStatus(user,"surge")
				}
				addStatus(user,"wild_surge")
				addStatus({target: user, status:"fear", length:2})
				addStatus(user, "stun")
				addStatus(user, "vulnerable")
			}
		} else {
			genExec: ({target}) => {
				combatHit(user, {amt:4, autohit:true, redirectable:false})
				if (hasStatus(target,"surge")) {
					removeStatus(target,"surge")
					addStatus(target,"wild_surge")
				}
				addStatus({target: target, status: "empowered", length: 2})
				addStatus({target: target, status: "focused", length: 3})
			}
		}
	}
}
//Merchant code
for (const componentName of ["entropy"]) { // this probably isn't a function but i don't know where else to put it
     const component = env.COMBAT_COMPONENTS[componentName]
     let commerceObject = ({
          type: "humor",
          name: `${component.name.replace("Humor of ", "")}`,
          subject: component,
          value: 1,
 
          showSellIf: ()=> env.e3a2.mTotals[componentName].available > 0,
          sellExec: ()=>{
               addItem("sfer_cube")
               page.flags.components[componentName]--
               env.e3a2.mTotals = CrittaMenu.getTotals()
               env.commerceNotice = `exchanged ${component.name} for 1 ${env.ITEM_LIST['sfer_cube'].name}`
          },
     })
     env.e3a2.merchant.sellResponses.replies.push({
          name: `${commerceObject.name}::${commerceObject.value}S`,
          destination: "sell",
          hideRead: true,
          showIf: commerceObject.showSellIf,
          class: `commerce-${commerceObject.type}`,
          definition: `NOTE::'exchange for ${commerceObject.value} ${env.ITEM_LIST['sfer_cube'].name}'`,
          exec: ()=> {commerceObject.sellExec(); env.e3a2.mTotals = CrittaMenu.getTotals(); env.e3a2.updateExchangeScreen()}
     })
     env.e3a2.merchant.commerce.push(commerceObject)
}
for (const componentName of ["surging"]) {
     const component = env.COMBAT_COMPONENTS[componentName]
     let commerceObject = ({
          type: "humor",
          name: `${component.name.replace("Humor of ", "")}`,
          subject: component,
          value: 1,
 
          showSellIf: ()=> env.e3a2.mTotals[componentName].available > 0,
          sellExec: ()=>{
               addItem("sfer_cube")
               page.flags.components[componentName]--
               env.e3a2.mTotals = CrittaMenu.getTotals()
               env.commerceNotice = `exchanged ${component.name} for 1 ${env.ITEM_LIST['sfer_cube'].name}`
          },
     })
     env.e3a2.merchant.sellResponses.replies.push({
          name: `${commerceObject.name}::${commerceObject.value}S`,
          destination: "sell",
          hideRead: true,
          showIf: commerceObject.showSellIf,
          class: `commerce-${commerceObject.type}`,
          definition: `NOTE::'exchange for ${commerceObject.value} ${env.ITEM_LIST['sfer_cube'].name}'`,
          exec: ()=> {commerceObject.sellExec(); env.e3a2.mTotals = CrittaMenu.getTotals(); env.e3a2.updateExchangeScreen()}
     })
     env.e3a2.merchant.commerce.push(commerceObject)
}
