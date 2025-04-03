
/*
 TO DO:
-make testing humor - DONE
  -action, fated, actions - UNNEEDED
  -https://github.com/EmptyEcho-Sys/Echo_Memhole/testinghumor.gif - DONE
*/

//Dialogue changing
if( page.path == '/local/ozo/' || page.path == '/local/beneath/embassy') {
/*document.addEventListener("readystatechange", (event) => {
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
} ) ;*/
if(!env.dialogues["dreammod"].humors.responses[0].replies.includes("test")) {
	env.dialogues["dreammod"].humors.responses[0].replies.push({
		"name":"test",
		"destination":"loop",
		"exec": Function('change("e3a2_newcomp","test")'),
		"hideRead":true
	})
	}
}
if (page.party) {
/*document.addEventListener("readystatechange", (event) => {
	if(document.readyState == 'complete'){*/
		switch(check("e3a2_newcomp")) {
		case "too many":
            if (typeof page.flag.components == undefined) {
			page.flags.components = {
				    ichor: 30,
				    claws: 30,
				    light: 30,
				    bone: 30,
				    eyes: 30
			    }
            }
            page.flags.components.test = 30
			
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
            if (typeof page.flag.components == undefined) {
			    page.flags.components = {
				    ichor: 3,
				    claws: 3,
				    light: 3,
				    bone: 3,
				    eyes: 3,
			    }
            }
            page.flags.components.test = 3
			
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
            break
		}
	}
//});
if (page.path == '/local/beneath/embassy/') {
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
    --background: url(https://github.com/EmptyEcho-Sys/Echo_Memhole/testinghumor.gif);
    --organelle-background: url(https://github.com/EmptyEcho-Sys/Echo_Memhole/testinghumor.gif);    
    --background-small:  url(https://github.com/EmptyEcho-Sys/Echo_Memhole/testinghumor.gif);
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
     slug: "test",
     description: "'Testing and debugging'",
     help: "'instakill,'nothing','nothing'",

     primary: { //kill all foes
          alterations: [["primary", "deathbeam"]],     

          stats: {
               maxhp: 50
          },
     },

     secondary: { //full heal allies
          alterations: [["secondary", "secondary"]],
          stats: {
               maxhp: 50
          }
     },

     utility: { //give allies focus, empowered and surge
          alterations: [["evade", "evade"]],
          stats: {
               maxhp: 50
          }
     },
     combatModifiers: []
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
/*env.ACTOR_AUGMENTS.generic.deathboost = {
	slug: "deathboost",
	name: "death beam boost",
	image: "https://github.com/EmptyEcho-Sys/Echo_Memhole/testinghumor.gif",
	description: "'you dont even need this tbh'",
	alterations: [["death beam", "death beam boost"]],
	component: ["primary", "test"],
	cost: 1
}

env.ACTOR_AUGMENTS.generic.healboost = {
	slug: "healboost",
	name: "boosted healing beam",
	image: "https://github.com/EmptyEcho-Sys/Echo_Memhole/testinghumor.gif",
	description: "'heal all allies even more!'",
	alterations: [["healbeam", "healboost"]], //LEFT OFF HERE LOOK HERE!!!!!!! - okay past me
	component: ["secondary", "test"],
	cost: 1
}

env.ACTOR_AUGMENTS.generic.focusboost = {
     slug: "focusboost",
     name: "Focus boost",
     image: "https://github.com/EmptyEcho-Sys/Echo_Memhole/testinghumor.gif",
     description: "'focus but even better!'",
     alterations: [["focusplus", "focusboost"]],
     component: ["utility", "test"],
     cost: 2
}*/

//COMBAT ACTIONS
//test
env.ACTIONS.deathbeam = { //HERREEEEE LOOK HEREE!!!!!! HERE FOR MORE WORKKK!!!! - o7 7 hour ago me
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
            flavor: `'call velzie up for a favor'`,
            onHit: `'Velzie picks up the phone'`,
            onCrit: `'Velzie is ammused by their pain'`,
	},
	accuracy: 1,
	crit: 1,
	amt: 1000000000,
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
                            canCrit: true
                        })
                    }
                })
            })
    }
}

//Merchant code
for (const componentName of ["test"]) { // this probably isn't a function but i don't know where else to put it
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
}
