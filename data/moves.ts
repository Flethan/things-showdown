/*

List of flags and their descriptions:

authentic: Ignores a target's substitute.
bite: Power is multiplied by 1.5 when used by a Pokemon with the Strong Jaw Ability, or sets perish count 3 on user and enemy with the Perish Jaws Ability.
bullet: Has no effect on Pokemon with the Bulletproof Ability.
charge: The user is unable to make a move between turns.
contact: Makes contact.
dance: When used by a Pokemon, other Pokemon with the Dancer Ability can attempt to execute the same move.
defrost: Thaws the user if executed successfully while the user is frozen.
distance: Can target a Pokemon positioned anywhere in a Triple Battle.
gravity: Prevented from being executed or selected during Gravity's effect.
heal: Prevented from being executed or selected during Heal Block's effect.
mirror: Can be copied by Mirror Move.
mystery: Unknown effect.
nonsky: Prevented from being executed or selected in a Sky Battle.
powder: Has no effect on Grass-type Pokemon, Pokemon with the Overcoat Ability, and Pokemon holding Safety Goggles.
protect: Blocked by Detect, Protect, Spiky Shield, and if not a Status move, King's Shield.
pulse: Power is multiplied by 1.5 when used by a Pokemon with the Mega Launcher Ability.
punch: Power is multiplied by 1.2 when used by a Pokemon with the Iron Fist Ability.
recharge: If this move is successful, the user must recharge on the following turn and cannot make a move.
reflectable: Bounced back to the original user by Magic Coat or the Magic Bounce Ability.
snatch: Can be stolen from the original user and instead used by another Pokemon using Snatch.
sound: Has no effect on Pokemon with the Soundproof Ability.

*/

export const Moves: {[moveid: string]: MoveData} = {
	// NEW STUFF

	// ???
	deposition: {
		num: 1538,
		accuracy: 100,
		basePower: 70,
		category: "Physical",
		isNonstandard: "Thing",
		name: "Deposition",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onModifyType(move, pokemon) {
			move.type = pokemon.types[0];
		},
		secondary: null,
		target: "normal",
		type: "???",
		contestType: "Clever",
	},
	emanation: {
		num: 1537,
		accuracy: 100,
		basePower: 70,
		category: "Special",
		isNonstandard: "Thing",
		name: "Emanation",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onModifyType(move, pokemon) {
			move.type = pokemon.types[0];
		},
		secondary: null,
		target: "normal",
		type: "???",
		contestType: "Clever",
	},

	// Arthropod
	beemovee: {
		num: 1509,
		accuracy: 110,
		basePower: 50,
		category: "Physical",
		isNonstandard: "Thing",
		name: "Bee Move E",
		pp: 20,
		priority: 1,
		flags: {contact: 1, protect: 1, mirror: 1},
		critRatio: 1,
		secondary: {
			chance: 40,
			self: {
				boosts: {
					spa: -1,
				},
			},
		},
		target: "normal",
		type: "Arthropod",
		contestType: "Tough",
		onTry(source) {
			// eslint-disable-next-line no-useless-escape
			this.hint("According to all known laws of aviation, there is no way a bee should be able to fly. Its wings are too small to get its fat little body off the ground. The bee, of course, flies anyway because bees don't care what humans think is impossible. Yellow, black. Yellow, black. Yellow, black. Yellow, black. Ooh, black and yellow! Let's shake it up a little. Barry! Breakfast is ready! Coming! Hang on a second. Hello? Barry? Adam? Can you believe this is happening? I can't. I'll pick you up. Looking sharp. Use the stairs, Your father paid good money for those. Sorry. I'm excited. Here's the graduate. We're very proud of you, son. A perfect report card, all B's. Very proud. Ma! I got a thing going here. You got lint on your fuzz. Ow! That's me! Wave to us! We'll be in row 118,000. Bye! Barry, I told you, stop flying in the house! Hey, Adam. Hey, Barry. Is that fuzz gel? A little. Special day, graduation. Never thought I'd make it. Three days grade school, three days high school. Those were awkward. Three days college. I'm glad I took a day and hitchhiked around The Hive. You did come back different. Hi, Barry. Artie, growing a mustache? Looks good. Hear about Frankie? Yeah. You going to the funeral? No, I'm not going. Everybody knows, sting someone, you die. Don't waste it on a squirrel. Such a hothead. I guess he could have just gotten out of the way. I love this incorporating an amusement park into our day. That's why we don't need vacations. Boy, quite a bit of pomp under the circumstances. Well, Adam, today we are men. We are! Bee-men. Amen! Hallelujah! Students, faculty, distinguished bees, please welcome Dean Buzzwell. Welcome, New Hive City graduating class of 9:15. That concludes our ceremonies And begins your career at Honex Industries! Will we pick our job today? I heard it's just orientation. Heads up! Here we go. Keep your hands and antennas inside the tram at all times. Wonder what it'll be like? A little scary. Welcome to Honex, a division of Honesco and a part of the Hexagon Group. This is it! Wow. Wow. We know that you, as a bee, have worked your whole life to get to the point where you can work for your whole life. Honey begins when our valiant Pollen Jocks bring the nectar to The Hive. Our top-secret formula is automatically color-corrected, scent-adjusted and bubble-contoured into this soothing sweet syrup with its distinctive golden glow you know as... Honey! That girl was hot. She's my cousin! She is? Yes, we're all cousins. Right. You're right. At Honex, we constantly strive to improve every aspect of bee existence. These bees are stress-testing a new helmet technology. What do you think he makes? Not enough. Here we have our latest advancement, the Krelman. What does that do? Catches that little strand of honey that hangs after you pour it. Saves us millions. Can anyone work on the Krelman? Of course. Most bee jobs are small ones. But bees know that every small job, if it's done well, means a lot. But choose carefully because you'll stay in the job you pick for the rest of your life. The same job the rest of your life? I didn't know that. What's the difference? You'll be happy to know that bees, as a species, haven't had one day off in 27 million years. So you'll just work us to death? We'll sure try. Wow! That blew my mind!  \”What's the difference? \” How can you say that? One job forever? That's an insane choice to have to make. I'm relieved. Now we only have to make one decision in life. But, Adam, how could they never have told us that? Why would you question anything? We're bees. We're the most perfectly functioning society on Earth. You ever think maybe things work a little too well here? Like what? Give me one example. I don't know. But you know what I'm talking about. Please clear the gate. Royal Nectar Force on approach. Wait a second. Check it out. Hey, those are Pollen Jocks! Wow. I've never seen them this close. They know what it's like outside The Hive. Yeah, but some don't come back. Hey, Jocks! Hi, Jocks! You guys did great! You're monsters! You're sky freaks! I love it! I love it! I wonder where they were. I don't know. Their day's not planned. Outside The Hive, flying who knows where, doing who knows what. You can't just decide to be a Pollen Jock. You have to be bred for that. Right. Look. That's more pollen than you and I will see in a lifetime. It's just a status symbol. Bees make too much of it. Perhaps. Unless you're wearing it and the ladies see you wearing it. Those ladies? Aren't they our cousins too? Distant. Distant. Look at these two. Couple of Hive Harrys. Let's have fun with them. It must be dangerous being a Pollen Jock. Yeah. Once a bear pinned me against a mushroom! He had a paw on my throat, and with the other, he was slapping me! Oh, my! I never thought I'd knock him out. What were you doing during this? Trying to alert the authorities. I can autograph that. A little gusty out there today, wasn't it, comrades? Yeah. Gusty. We're hitting a sunflower patch six miles from here tomorrow. Six miles, huh? Barry! A puddle jump for us, but maybe you're not up for it. Maybe I am. You are not! We're going 0900 at J-Gate. What do you think, buzzy-boy? Are you bee enough? I might be. It all depends on what 0900 means. Hey, Honex! Dad, you surprised me. You decide what you're interested in? Well, there's a lot of choices. But you only get one. Do you ever get bored doing the same job every day? Son, let me tell you about stirring. You grab that stick, and you just move it around, and you stir it around. You get yourself into a rhythm. It's a beautiful thing. You know, Dad, the more I think about it, maybe the honey field just isn't right for me. You were thinking of what, making balloon animals? That's a bad job for a guy with a stinger. Janet, your son's not sure he wants to go into honey! Barry, you are so funny sometimes. I'm not trying to be funny. You're not funny! You're going into honey. Our son, the stirrer! You're gonna be a stirrer? No one's listening to me! Wait till you see the sticks I have. I could say anything right now. I'm gonna get an ant tattoo! Let's open some honey and celebrate! Maybe I'll pierce my thorax. Shave my antennae. Shack up with a grasshopper. Get a gold tooth and call everybody  \”dawg \”! I'm so proud. We're starting work today! Today's the day. Come on! All the good jobs will be gone. Yeah, right. Pollen counting, stunt bee, pouring, stirrer, front desk, hair removal... Is it still available? Hang on. Two left! One of them's yours! Congratulations! Step to the side. What'd you get? Picking crud out. Stellar! Wow! Couple of newbies? Yes, sir! Our first day! We are ready! Make your choice. You want to go first? No, you go. Oh, my. What's available? Restroom attendant's open, not for the reason you think. Any chance of getting the Krelman? Sure, you're on. I'm sorry, the Krelman just closed out. Wax monkey's always open. The Krelman opened up again. What happened? A bee died. Makes an opening. See? He's dead. Another dead one. Deady. Deadified. Two more dead. Dead from the neck up. Dead from the neck down. That's life! Oh, this is so hard! Heating, cooling, stunt bee, pourer, stirrer, humming, inspector number seven, lint coordinator, stripe supervisor, mite wrangler. Barry, what do you think I should... Barry? Barry! All right, we've got the sunflower patch in quadrant nine... What happened to you? Where are you? I'm going out. Out? Out where? Out there. Oh, no! I have to, before I go to work for the rest of my life. You're gonna die! You're crazy! Hello? Another call coming in. If anyone's feeling brave, there's a Korean deli on 83rd that gets their roses today. Hey, guys. Look at that. Isn't that the kid we saw yesterday? Hold it, son, flight deck's restricted. It's OK, Lou. We're gonna take him up. Really? Feeling lucky, are you? Sign here, here. Just initial that. Thank you. OK. You got a rain advisory today, and as you all know, bees cannot fly in rain. So be careful. As always, watch your brooms, hockey sticks, dogs, birds, bears and bats. Also, I got a couple of reports of root beer being poured on us. Murphy's in a home because of it, babbling like a cicada! That's awful. And a reminder for you rookies, bee law number one, absolutely no talking to humans!  All right, launch positions! Buzz, buzz, buzz, buzz! Buzz, buzz, buzz, buzz! Buzz, buzz, buzz, buzz! Black and yellow! Hello! You ready for this, hot shot? Yeah. Yeah, bring it on. Wind, check. Antennae, check. Nectar pack, check. Wings, check. Stinger, check. Scared out of my shorts, check. OK, ladies, let's move it out! Pound those petunias, you striped stem-suckers! All of you, drain those flowers! Wow! I'm out! I can't believe I'm out! So blue. I feel so fast and free! Box kite! Wow! Flowers! This is Blue Leader, We have roses visual. Bring it around 30 degrees and hold. Roses! 30 degrees, roger. Bringing it around. Stand to the side, kid. It's got a bit of a kick. That is one nectar collector! Ever see pollination up close? No, sir. I pick up some pollen here, sprinkle it over here. Maybe a dash over there, a pinch on that one. See that? It's a little bit of magic. That's amazing. Why do we do that? That's pollen power. More pollen, more flowers, more nectar, more honey for us. Cool. I'm picking up a lot of bright yellow, Could be daisies, Don't we need those? Copy that visual. Wait. One of these flowers seems to be on the move. Say again? You're reporting a moving flower? Affirmative. That was on the line! This is the coolest. What is it? I don't know, but I'm loving this color. It smells good. Not like a flower, but I like it. Yeah, fuzzy. Chemical-y. Careful, guys. It's a little grabby. My sweet lord of bees! Candy-brain, get off there! Problem! Guys! This could be bad. Affirmative. Very close. Gonna hurt. Mama's little boy. You are way out of position, rookie! Coming in at you like a missile! Help me! I don't think these are flowers. Should we tell him? I think he knows. What is this?! Match point! You can start packing up, honey, because you're about to eat it! Yowser! Gross. There's a bee in the car! Do something! I'm driving! Hi, bee. He's back here! He's going to sting me! Nobody move. If you don't move, he won't sting you. Freeze! He blinked! Spray him, Granny! What are you doing?! Wow... the tension level out here is unbelievable. I gotta get home. Can't fly in rain. Can't fly in rain. Can't fly in rain. Mayday! Mayday! Bee going down! Ken, could you close the window please? Ken, could you close the window please? Check out my new resume. I made it into a fold-out brochure. You see? Folds out. Oh, no. More humans. I don't need this. What was that? Maybe this time. This time. This time. This time! This time! This... Drapes! That is diabolical. It's fantastic. It's got all my special skills, even my top-ten favorite movies. What's number one? Star Wars? Nah, I don't go for that... kind of stuff. No wonder we shouldn't talk to them. They're out of their minds. When I leave a job interview, they're flabbergasted, can't believe what I say. There's the sun. Maybe that's a way out. I don't remember the sun having a big 75 on it. I predicted global warming. I could feel it getting hotter. At first I thought it was just me. Wait! Stop! Bee! Stand back. These are winter boots. Wait! Don't kill him! You know I'm allergic to them! This thing could kill me! Why does his life have less value than yours? Why does his life have any less value than mine? Is that your statement? I'm just saying all life has value. You don't know what he's capable of feeling. My brochure! There you go, little guy. I'm not scared of him.It's an allergic thing.  Put that on your resume brochure. My whole face could puff up. Make it one of your special skills. Knocking someone out is also a special skill. Right. Bye, Vanessa. Thanks. Vanessa, next week? Yogurt night? Sure, Ken. You know, whatever. You could put carob chips on there. Bye. Supposed to be less calories. Bye. I gotta say something. She saved my life. I gotta say something. All right, here it goes. Nah. What would I say? I could really get in trouble. It's a bee law. You're not supposed to talk to a human. I can't believe I'm doing this. I've got to. Oh, I can't do it. Come on! No. Yes. No. Do it. I can't. How should I start it?  \”You like jazz? \” No, that's no good. Here she comes! Speak, you fool! Hi! I'm sorry. You're talking. Yes, I know. You're talking! I'm so sorry. No, it's OK. It's fine. I know I'm dreaming. But I don't recall going to bed. Well, I'm sure this is very disconcerting. This is a bit of a surprise to me. I mean, you're a bee! I am. And I'm not supposed to be doing this, but they were all trying to kill me. And if it wasn't for you... I had to thank you. It's just how I was raised. That was a little weird. I'm talking with a bee. Yeah. I'm talking to a bee. And the bee is talking to me! I just want to say I'm grateful. I'll leave now. Wait! How did you learn to do that? What? The talking thing. Same way you did, I guess.  \”Mama, Dada, honey. \” You pick it up. That's very funny. Yeah. Bees are funny. If we didn't laugh, we'd cry with what we have to deal with. Anyway... Can I... get you something? Like what? I don't know. I mean... I don't know. Coffee? I don't want to put you out. It's no trouble. It takes two minutes. It's just coffee. I hate to impose. Don't be ridiculous! Actually, I would love a cup. Hey, you want rum cake? I shouldn't. Have some. No, I can't. Come on! I'm trying to lose a couple micrograms. Where? These stripes don't help. You look great! I don't know if you know anything about fashion. Are you all right? No. He's making the tie in the cab as they're flying up Madison. He finally gets there. He runs up the steps into the church. The wedding is on. And he says,  \”Watermelon? I thought you said Guatemalan. Why would I marry a watermelon? \” Is that a bee joke? That's the kind of stuff we do. Yeah, different. So, what are you gonna do, Barry? About work? I don't know. I want to do my part for The Hive, but I can't do it the way they want. I know how you feel. You do? Sure. My parents wanted me to be a lawyer or a doctor, but I wanted to be a florist. Really? My only interest is flowers. Our new queen was just elected with that same campaign slogan. Anyway, if you look... There's my hive right there. See it? You're in Sheep Meadow! Yes! I'm right off the Turtle Pond! No way! I know that area. I lost a toe ring there once. Why do girls put rings on their toes? Why not? It's like putting a hat on your knee. Maybe I'll try that. You all right, ma'am? Oh, yeah. Fine. Just having two cups of coffee! Anyway, this has been great. Thanks for the coffee. Yeah, it's no trouble. Sorry I couldn't finish it. If I did, I'd be up the rest of my life. Are you...? Can I take a piece of this with me? Sure! Here, have a crumb. Thanks! Yeah. All right. Well, then... I guess I'll see you around. Or not. OK, Barry. And thank you so much again... for before. Oh, that? That was nothing. Well, not nothing, but... Anyway... This can't possibly work. He's all set to go. We may as well try it. OK, Dave, pull the chute. Sounds amazing. It was amazing! It was the scariest, happiest moment of my life. Humans! I can't believe you were with humans! Giant, scary humans! What were they like? Huge and crazy. They talk crazy. They eat crazy giant things. They drive crazy. Do they try and kill you, like on TV? Some of them. But some of them don't. How'd you get back? Poodle. You did it, and I'm glad. You saw whatever you wanted to see. You had your  \”experience. \” Now you can pick out yourjob and be normal. Well... Well? Well, I met someone. You did? Was she Bee-ish? A wasp?! Your parents will kill you! No, no, no, not a wasp. Spider? I'm not attracted to spiders. I know it's the hottest thing, with the eight legs and all. I can't get by that face. So who is she? She's... human. No, no. That's a bee law. You wouldn't break a bee law. Her name's Vanessa. Oh, boy. She's so nice. And she's a florist! Oh, no! You're dating a human florist! We're not dating. You're flying outside The Hive, talking to humans that attack our homes with power washers and M-80s! One-eighth a stick of dynamite! She saved my life! And she understands me. This is over! Eat this. This is not over! What was that? They call it a crumb. It was so stingin' stripey! And that's not what they eat. That's what falls off what they eat! You know what a Cinnabon is? No. It's bread and cinnamon and frosting. They heat it up... Sit down! ...really hot! Listen to me! We are not them! We're us. There's us and there's them! Yes, but who can deny the heart that is yearning? There's no yearning. Stop yearning. Listen to me! You have got to start thinking bee, my friend. Thinking bee! Thinking bee. Thinking bee. Thinking bee! Thinking bee! Thinking bee! Thinking bee! There he is. He's in the pool. You know what your problem is, Barry? I gotta start thinking bee? How much longer will this go on? It's been three days! Why aren't you working? I've got a lot of big life decisions to think about. What life? You have no life! You have no job. You're barely a bee! Would it kill you to make a little honey? Barry, come out. Your father's talking to you. Martin, would you talk to him? Barry, I'm talking to you! You coming? Got everything? All set! Go ahead. I'll catch up. Don't be too long. Watch this! Vanessa! We're still here. I told you not to yell at him. He doesn't respond to yelling! Then why yell at me? Because you don't listen! I'm not listening to this. Sorry, I've gotta go. Where are you going? I'm meeting a friend. A girl? Is this why you can't decide? Bye. I just hope she's Bee-ish. They have a huge parade of flowers every year in Pasadena? To be in the Tournament of Roses, that's every florist's dream! Up on a float, surrounded by flowers, crowds cheering. A tournament. Do the roses compete in athletic events? No. All right, I've got one. How come you don't fly everywhere? It's exhausting. Why don't you run everywhere? It's faster. Yeah, OK, I see, I see. All right, your turn. TiVo. You can just freeze live TV? That's insane! You don't have that? We have Hivo, but it's a disease. It's a horrible, horrible disease. Oh, my. Dumb bees! You must want to sting all those jerks. We try not to sting. It's usually fatal for us. So you have to watch your temper. Very carefully. You kick a wall, take a walk, write an angry letter and throw it out. Work through it like any emotion: Anger, jealousy, lust. Oh, my goodness! Are you OK? Yeah. What is wrong with you?! It's a bug. He's not bothering anybody. Get out of here, you creep! What was that? A Pic 'N' Save circular? Yeah, it was. How did you know? It felt like about 10 pages. Seventy-five is pretty much our limit. You've really got that down to a science. I lost a cousin to Italian Vogue. I'll bet. What in the name of Mighty Hercules is this? How did this get here? cute Bee, Golden Blossom, Ray Liotta Private Select? Is he that actor? I never heard of him. Why is this here? For people. We eat it. You don't have enough food of your own? Well, yes. How do you get it? Bees make it. I know who makes it! And it's hard to make it! There's heating, cooling, stirring. You need a whole Krelman thing! It's organic. It's our-ganic! It's just honey, Barry. Just what?! Bees don't know about this! This is stealing! A lot of stealing! You've taken our homes, schools,hospitals! This is all we have! And it's on sale?! I'm getting to the bottom of this. I'm getting to the bottom of all of this! Hey, Hector. You almost done? Almost. He is here. I sense it. Well, I guess I'll go home now and just leave this nice honey out, with no one around. You're busted, box boy! I knew I heard something. So you can talk! I can talk. And now you'll start talking! Where you getting the sweet stuff? Who's your supplier? I don't understand. I thought we were friends. The last thing we want to do is upset bees! You're too late! It's ours now! You, sir, have crossed the wrong sword! You, sir, will be lunch for my iguana, Ignacio! Where is the honey coming from? Tell me where! Honey Farms! It comes from Honey Farms! Crazy person! What horrible thing has happened here? These faces, they never knew what hit them. And now they're on the road to nowhere! Just keep still. What? You're not dead? Do I look dead? They will wipe anything that moves. Where you headed? To Honey Farms. I am onto something huge here. I'm going to Alaska. Moose blood, crazy stuff. Blows your head off! I'm going to Tacoma. And you? He really is dead. All right. Uh-oh! What is that?! Oh, no! A wiper! Triple blade! Triple blade? Jump on! It's your only chance, bee! Why does everything have to be so doggone clean?! How much do you people need to see?! Open your eyes! Stick your head out the window! From NPR News in Washington, I'm Carl Kasell. But don't kill no more bugs! Bee! Moose blood guy!! You hear something? Like what? Like tiny screaming. Turn off the radio. Whassup, bee boy? Hey, Blood. Just a row of honey jars, as far as the eye could see. Wow! I assume wherever this truck goes is where they're getting it. I mean, that honey's ours. Bees hang tight. We're all jammed in. It's a close community. Not us, man. We on our own. Every mosquito on his own. What if you get in trouble? You a mosquito, you in trouble. Nobody likes us. They just smack. See a mosquito, smack, smack! At least you're out in the world. You must meet girls. Mosquito girls try to trade up, get with a moth, dragonfly. Mosquito girl don't want no mosquito. You got to be kidding me! Mooseblood's about to leave the building! So long, bee! Hey, guys! Mooseblood! I knew I'd catch y'all down here. Did you bring your crazy straw? We throw it in jars, slap a label on it, and it's pretty much pure profit. What is this place? A bee's got a brain the size of a pinhead. They are pinheads! Pinhead. Check out the new smoker. Oh, sweet. That's the one you want. The Thomas 3000! Smoker? Ninety puffs a minute, semi-automatic. Twice the nicotine, all the tar. A couple breaths of this knocks them right out. They make the honey, and we make the money.  \”They make the honey, and we make the money \”? Oh, my! What's going on? Are you OK? Yeah. It doesn't last too long. Do you know you're in a fake hive with fake walls? Our queen was moved here. We had no choice. This is your queen? That's a man in women's clothes! That's a drag queen! What is this? Oh, no! There's hundreds of them! Bee honey. Our honey is being brazenly stolen on a massive scale! This is worse than anything bears have done! I intend to do something. Oh, Barry, stop. Who told you humans are taking our honey? That's a rumor. Do these look like rumors? That's a conspiracy theory. These are obviously doctored photos. How did you get mixed up in this? He's been talking to humans. What? Talking to humans?! He has a human girlfriend. And they make out! Make out? Barry! We do not. You wish you could. Whose side are you on? The bees! I dated a cricket once in San Antonio. Those crazy legs kept me up all night. Barry, this is what you want to do with your life? I want to do it for all our lives. Nobody works harder than bees! Dad, I remember you coming home so overworked your hands were still stirring. You couldn't stop. I remember that. What right do they have to our honey? We live on two cups a year. They put it in lip balm for no reason whatsoever! Even if it's true, what can one bee do? Sting them where it really hurts. In the face! The eye! That would hurt. No. Up the nose? That's a killer. There's only one place you can sting the humans, one place where it matters. Hive at Five, The Hive's only full-hour action news source. No more bee beards! With Bob Bumble at the anchor desk. Weather with Storm Stinger. Sports with Buzz Larvi. And Jeanette Chung. Good evening. I'm Bob Bumble. And I'm Jeanette Ohung. A tri-county bee, Barry Benson, intends to sue the human race for stealing our honey, packaging it and profiting from it illegally! Tomorrow night on Bee Larry King, we'll have three former queens here in our studio, discussing their new book, classy Ladies, out this week on Hexagon. Tonight we're talking to Barry Benson. Did you ever think,  \”I'm a kid from The Hive. I can't do this \”? Bees have never been afraid to change the world. What about Bee Oolumbus? Bee Gandhi? Bejesus? Where I'm from, we'd never sue humans. We were thinking of stickball or candy stores. How old are you? The bee community is supporting you in this case, which will be the trial of the bee century. You know, they have a Larry King in the human world too. It's a common name. Next week... He looks like you and has a show and suspenders and colored dots... Next week... Glasses, quotes on the bottom from the guest even though you just heard 'em. Bear Week next week! They're scary, hairy and here live. Always leans forward, pointy shoulders, squinty eyes, very Jewish. In tennis, you attack at the point of weakness! It was my grandmother, Ken. She's 81. Honey, her backhand's a joke! I'm not gonna take advantage of that? Quiet, please. Actual work going on here. Is that that same bee? Yes, it is! I'm helping him sue the human race. Hello. Hello, bee. This is Ken. Yeah, I remember you. Timberland, size ten and a half. Vibram sole, I believe. Why does he talk again? Listen, you better go 'cause we're really busy working. But it's our yogurt night! Bye-bye. Why is yogurt night so difficult?! You poor thing. You two have been at this for hours! Yes, and Adam here has been a huge help. Frosting... How many sugars? Just one. I try not to use the competition. So why are you helping me? Bees have good qualities. And it takes my mind off the shop. Instead of flowers, people are giving balloon bouquets now. Those are great, if you're three. And artificial flowers. Oh, those just get me psychotic! Yeah, me too. Bent stingers, pointless pollination. Bees must hate those fake things! Nothing worse than a daffodil that's had work done. Maybe this could make up for it a little bit. This lawsuit's a pretty big deal. I guess. You sure you want to go through with it? Am I sure? When I'm done with the humans, they won't be able to say,  \”Honey, I'm home, \” without paying a royalty! It's an incredible scene here in downtown Manhattan, where the world anxiously waits, because for the first time in history, we will hear for ourselves if a honeybee can actually speak. What have we gotten into here, Barry? It's pretty big, isn't it? I can't believe how many humans don't work during the day. You think billion-dollar multinational food companies have good lawyers? Everybody needs to stay behind the barricade. What's the matter? I don't know, I just got a chill. Well, if it isn't the bee team. You boys work on this? All rise! The Honorable Judge Bumbleton presiding. All right. Case number 4475, Superior Court of New York, Barry Bee Benson v. the Honey Industry is now in session. Mr. Montgomery, you're representing the five food companies collectively? A privilege. Mr. Benson... you're representing all the bees of the world? I'm kidding. Yes, Your Honor, we're ready to proceed. Mr. Montgomery, your opening statement, please. Ladies and gentlemen of the jury, my grandmother was a simple woman. Born on a farm, she believed it was man's divine right to benefit from the bounty of nature God put before us. If we lived in the topsy-turvy world Mr. Benson imagines, just think of what would it mean. I would have to negotiate with the silkworm for the elastic in my britches! Talking bee! How do we know this isn't some sort of holographic motion-picture-capture Hollywood wizardry? They could be using laser beams! Robotics! Ventriloquism! Cloning! For all we know, he could be on steroids! Mr. Benson? Ladies and gentlemen, there's no trickery here. I'm just an ordinary bee. Honey's pretty important to me. It's important to all bees. We invented it! We make it. And we protect it with our lives. Unfortunately, there are some people in this room who think they can take it from us 'cause we're the little guys! I'm hoping that, after this is all over, you'll see how, by taking our honey, you not only take everything we have but everything we are! I wish he'd dress like that all the time. So nice! Call your first witness. So, Mr. Klauss Vanderhayden of Honey Farms, big company you have. I suppose so. I see you also own Honeyburton and Honron! Yes, they provide beekeepers for our farms. Beekeeper. I find that to be a very disturbing term. I don't imagine you employ any bee-free-ers, do you? No. I couldn't hear you. No. No. Because you don't free bees. You keep bees. Not only that, it seems you thought a bear would be an appropriate image for a jar of honey. They're very lovable creatures. Yogi Bear, Fozzie Bear, Build-A-Bear. You mean like this? Bears kill bees! How'd you like his head crashing through your living room?! Biting into your couch! Spitting out your throw pillows! OK, that's enough. Take him away. So, Mr. Sting, thank you for being here. Your name intrigues me. Where have I heard it before? I was with a band called The Police. But you've never been a police officer, have you? No, I haven't. No, you haven't. And so here we have yet another example of bee culture casually stolen by a human for nothing more than a prance-about stage name. Oh, please. Have you ever been stung, Mr. Sting? Because I'm feeling a little stung, Sting. Or should I say... Mr. Gordon M. Sumner! That's not his real name?! You idiots! Mr. Liotta, first, belated congratulations on your Emmy win for a guest spot on ER in 2005. Thank you. Thank you. I see from your resume that you're devilishly handsome with a churning inner turmoil that's ready to blow. I enjoy what I do. Is that a crime? Not yet it isn't. But is this what it's come to for you? Exploiting tiny, helpless bees so you don't have to rehearse your part and learn your lines, sir? Watch it, Benson! I could blow right now! This isn't a goodfella. This is a badfella! Why doesn't someone just step on this creep, and we can all go home?! Order in this court! You're all thinking it! Order! Order, I say! Say it! Mr. Liotta, please sit down! I think it was awfully nice of that bear to pitch in like that. I think the jury's on our side. Are we doing everything right, legally? I'm a florist. Right. Well, here's to a great team. To a great team! Well, hello. Ken! Hello. I didn't think you were coming. No, I was just late I tried to call, but... the battery. I didn't want all this to go to waste, so I called Barry. Luckily, he was free. Oh, that was lucky. There's a little left. I could heat it up. Yeah, heat it up, sure, whatever. So I hear you're quite a tennis player. I'm not much for the game myself. The ball's a little grabby. That's where I usually sit. Right... there. Ken, Barry was looking at your resume, and he agreed with me that eating with chopsticks isn't really a special skill. You think I don't see what you're doing? I know how hard it is to find the right job. We have that in common. Do we? Bees have 100 percent employment, but we do jobs like taking the crud out. That's just what I was thinking about doing. Ken, I let Barry borrow your razor for his fuzz. I hope that was all right. I'm going to drain the old stinger. Yeah, you do that. Look at that. You know, I've just about had it with your little Mind Games. What's that? Italian Vogue. Mamma mia, that's a lot of pages. A lot of ads. Remember what Van said, why is your life more valuable than mine? Funny, I just can't seem to recall that! I think something stinks in here! I love the smell of flowers. How do you like the smell of flames?! Not as much. Water bug! Not taking sides! Ken, I'm wearing a Chapstick hat! This is pathetic! I've got issues! Well, well, well, a royal flush! You're bluffing. Am I? Surf's up, dude! Poo water! That bowl is gnarly. Except for those dirty yellow rings! Kenneth! What are you doing?! You know, I don't even like honey! I don't eat it! We need to talk! He's just a little bee! And he happens to be the nicest bee I've met in a long time! Long time? What are you talking about?! Are there other bugs in your life?  No, but there are other things bugging me in life. And you're one of them! Fine! Talking bees, no yogurt night... My nerves are fried from riding on this emotional roller coaster! Goodbye, Ken. And for your information, I prefer sugar-free, artificial sweeteners made by man! I'm sorry about all that. I know it's got an aftertaste! I like it! I always felt there was some kind of barrier between Ken and me. I couldn't overcome it. Oh, well. Are you OK for the trial? I believe Mr. Montgomery is about out of ideas. We would like to call Mr. Barry Benson Bee to the stand. Good idea! You can really see why he's considered one of the best lawyers... Yeah. Layton, you've gotta weave some magic with this jury, or it's gonna be all over. Don't worry. The only thing I have to do to turn this jury around is to remind them of what they don't like about bees. You got the tweezers? Are you allergic? Only to losing, son. Only to losing. Mr. Benson Bee, I'll ask you what I think we'd all like to know. What exactly is your relationship to that woman? We're friends. Good friends? Yes. How good? Do you live together? Wait a minute... Are you her little... bedbug? I've seen a bee documentary or two. From what I understand, doesn't your queen give birth to all the bee children? Yeah, but... So those aren't your real parents! Oh, Barry... Yes, they are! Hold me back! You're an illegitimate bee, aren't you, Benson? He's denouncing bees! Don't y'all date your cousins? Objection! I'm going to pincushion this guy! Adam, don't! It's what he wants! Oh, I'm hit!! Oh, lordy, I am hit! Order! Order! The venom! The venom is coursing through my veins! I have been felled by a winged beast of destruction! You see? You can't treat them like equals! They're striped savages! Stinging's the only thing they know! It's their way! Adam, stay with me. I can't feel my legs. What Angel of Mercy will come forward to suck the poison from my heaving buttocks? I will have order in this court. Order! Order, please! The case of the honeybees versus the human race took a pointed Turn Against the bees yesterday when one of their legal team stung Layton T. Montgomery. Hey, buddy. Hey. Is there much pain? Yeah. I... I blew the whole case, didn't I? It doesn't matter. What matters is you're alive. You could have died. I'd be better off dead. Look at me. They got it from the cafeteria downstairs, in a tuna sandwich. Look, there's a little celery still on it. What was it like to sting someone? I can't explain it. It was all... All adrenaline and then...and then ecstasy! All right. You think it was all a trap? Of course. I'm sorry. I flew us right into this. What were we thinking? Look at us. We're just a couple of bugs in this world. What will the humans do to us if they win? I don't know. I hear they put the roaches in motels. That doesn't sound so bad. Adam, they check in, but they don't check out! Oh, my. Could you get a nurse to close that window? Why? The smoke. Bees don't smoke. Right. Bees don't smoke. Bees don't smoke! But some bees are smoking. That's it! That's our case! It is? It's not over? Get dressed. I've gotta go somewhere. Get back to the court and stall. Stall any way you can. And assuming you've done step correctly, you're ready for the tub. Mr. Flayman. Yes? Yes, Your Honor! Where is the rest of your team? Well, Your Honor, it's interesting. Bees are trained to fly haphazardly, and as a result, we don't make very good time. I actually heard a funny story about... Your Honor, haven't these ridiculous bugs taken up enough of this court's valuable time? How much longer will we allow these absurd shenanigans to go on? They have presented no compelling evidence to support their charges against my clients, who run legitimate businesses. I move for a complete dismissal of this entire case! Mr. Flayman, I'm afraid I'm going to have to consider Mr. Montgomery's motion. But you can't! We have a terrific case. Where is your proof? Where is the evidence? Show me the smoking gun! Hold it, Your Honor! You want a smoking gun? Here is your smoking gun. What is that? It's a bee smoker! What, this? This harmless little contraption? This couldn't hurt a fly, let alone a bee. Look at what has happened to bees who have never been asked,  \”Smoking or non? \” Is this what nature intended for us? To be forcibly addicted to smoke machines and man-made wooden slat work camps? Living out our lives as honey slaves to the white man? What are we gonna do? He's playing the species card. Ladies and gentlemen, please, free these bees! Free the bees! Free the bees! Free the bees! Free the bees! Free the bees! The court finds in favor of the bees! Vanessa, we won! I knew you could do it! High-five! Sorry. I'm OK! You know what this means? All the honey will finally belong to the bees. Now we won't have to work so hard all the time. This is an unholy perversion of the balance of nature, Benson. You'll regret this. Barry, how much honey is out there? All right. One at a time. Barry, who are you wearing? My sweater is Ralph Lauren, and I have no pants. What if Montgomery's right? What do you mean? We've been living the bee way a long time, 27 million years. Congratulations on your victory. What will you demand as a settlement? First, we'll demand a complete shutdown of all bee work camps. Then we want back the honey that was ours to begin with, every last drop. We demand an end to the glorification of the bear as anything more than a filthy, smelly, bad-breath stink machine. We're all aware of what they do in the woods. Wait for my signal. Take him out. He'll have nauseous for a few hours, then he'll be fine. And we will no longer tolerate bee-negative nicknames... But it's just a prance-about stage name! ...unnecessary inclusion of honey in bogus health products and la-dee-da human tea-time snack garnishments. Can't breathe. Bring it in, boys! Hold it right there! Good. Tap it. Mr. Buzzwell, we just passed three cups and there's gallons more coming! I think we need to shut down! Shut down? We've never shut down. Shut down honey production! Stop making honey! Turn your key, sir! What do we do now? Cannonball! We're shutting honey production! Mission abort. Aborting pollination and nectar detail. Returning to base. Adam, you wouldn't believe how much honey was out there. Oh, yeah? What's going on? Where is everybody? Are they out celebrating? They're home. They don't know what to do. Laying out, sleeping in. I heard your Uncle Carl was on his way to San Antonio with a cricket. At least we got our honey back. Sometimes I think, so what if humans liked our honey? Who wouldn't? It's the greatest thing in the world! I was excited to be part of making it. This was my new desk. This was my new job. I wanted to do it really well. And now... Now I can't. I don't understand why they're not happy. I thought their lives would be better! They're doing nothing. It's amazing. Honey really changes people. You don't have any idea what's going on, do you? What did you want to show me? This. What happened here? That is not the half of it. Oh, no. Oh, my. They're all wilting. Doesn't look very good, does it? No. And whose fault do you think that is? You know, I'm gonna guess bees. Bees? Specifically, me. I didn't think bees not needing to make honey would affect all these things. It's not just flowers. Fruits, vegetables, they all need bees. That's our whole SAT test right there. Take away produce, that affects the entire animal kingdom. And then, of course... The human species? So if there's no more pollination, it could all just go south here, couldn't it? I know this is also partly my fault. How about a suicide pact? How do we do it? I'll sting you, you step on me. That just kills you twice. Right, right. Listen, Barry... sorry, but I gotta get going. I had to open my mouth and talk. Vanessa? Vanessa? Why are you leaving? Where are you going? To the final Tournament of Roses parade in Pasadena. They've moved it to this weekend because all the flowers are dying. It's the Last Chance I'll ever have to see it. Vanessa, I just wanna say I'm sorry. I never meant it to turn out like this. I know. Me neither. Tournament of Roses. Roses can't do sports. Wait a minute. Roses. Roses? Roses! Vanessa! Roses?! Barry? Roses are flowers! Yes, they are. Flowers, bees, pollen! I know. That's why this is the last parade. Maybe not. Could you ask him to slow down? Could you slow down? Barry! OK, I made a huge mistake. This is a total disaster, all my fault. Yes, it kind of is. I've ruined the planet. I wanted to help you with the flower shop. I've made it worse. Actually, it's completely closed down. I thought maybe you were remodeling. But I have another idea, and it's greater than my previous ideas combined. I don't want to hear it! All right, they have the roses, the roses have the pollen. I know every bee, plant and flower bud in this park. All we gotta do is get what they've got back here with what we've got. Bees. Park. Pollen! Flowers. Repollination! Across the nation! Tournament of Roses, Pasadena, California. They've got nothing but flowers, floats and cotton candy. Security will be tight. I have an idea. Vanessa Bloome, FTD. Official floral business. It's real. Sorry, ma'am. Nice brooch. Thank you. It was a gift. Once inside, we just pick the right float. How about The Princess and the Pea? I could be the princess, and you could be the pea! Yes, I got it. Where should I sit? What are you? I believe I'm the pea. The pea? It goes under the mattresses. Not in this fairy tale, sweetheart. I'm getting the marshal. You do that! This whole parade is a fiasco! Let's see what this baby'll do. Hey, what are you doing?! Then all we do is blend in with traffic... without arousing suspicion. Once at the airport, there's no stopping us. Stop! Security. You and your insect pack your float? Yes. Has it been in your possession the entire time? Would you remove your shoes? Remove your stinger. It's part of me. I know. Just having some fun. Enjoy your flight. Then if we're lucky, we'll have just enough pollen to do the job. Can you believe how lucky we are? We have just enough pollen to do the job! I think this is gonna work. It's got to work. Attention, passengers, this is Captain Scott. We have a bit of bad weather in New York. It looks like we'll experience a couple hours delay. Barry, these are cut flowers with no water. They'll never make it. I gotta get up there and talk to them. Be careful. Can I get help with the Sky Mall magazine? I'd like to order the talking inflatable nose and ear hair trimmer. Captain, I'm in a real situation. What'd you say, Hal? Nothing. Bee! Don't freak out! My entire species... What are you doing? Wait a minute! I'm an attorney! Who's an attorney? Don't move. Oh, Barry. Good afternoon, passengers. This is your captain. Would a Miss Vanessa Bloome in 24B please report to the cockpit? And please hurry! What happened here? There was a DustBuster, a toupee, a life raft exploded. One's bald, one's in a boat, they're both unconscious! Is that another bee joke? No! No one's flying the plane! This is JFK control tower, Flight 356. What's your status? This is Vanessa Bloome. I'm a florist from New York. Where's the pilot? He's unconscious, and so is the copilot. Not good. Does anyone onboard have flight experience? As a matter of fact, there is. Who's that? Barry Benson. From the honey trial?! Oh, great. Vanessa, this is nothing more than a big metal bee. It's got giant wings, huge engines. I can't fly a plane. Why not? Isn't John Travolta a pilot? Yes. How hard could it be? Wait, Barry! We're headed into some lightning. This is Bob Bumble. We have some late-breaking news from JFK Airport, where a suspenseful scene is developing. Barry Benson, fresh from his legal victory... That's Barry! ...is attempting to land a plane, loaded with people, flowers and an incapacitated flight crew. Flowers?! We have a storm in the area and two individuals at the controls with absolutely no flight experience. Just a minute. There's a bee on that plane. I'm quite familiar with Mr. Benson and his no-account compadres. They've done enough damage. But isn't he your only hope? Technically, a bee shouldn't be able to fly at all. Their wings are too small... Haven't we heard this a million times?  \”The surface area of the wings and body mass make no sense. \” Get this on the air! Got it. Stand by. We're going live. The way we work may be a mystery to you. Making honey takes a lot of bees doing a lot of small jobs. But let me tell you about a small job. If you do it well, it makes a big difference. More than we realized. To us, to everyone. That's why I want to get bees back to working together. That's the bee way! We're not made of Jell-O. We get behind a fellow. Black and yellow! Hello! Left, right, down, hover. Hover? Forget hover. This isn't so hard. Beep-beep! Beep-beep! Barry, what happened?! Wait, I think we were on autopilot the whole time. That may have been helping me. And now we're not! So it turns out I cannot fly a plane. All of you, let's get behind this fellow! Move it out! Move out! Our only chance is if I do what I'd do, you copy me with the wings of the plane! Don't have to yell. I'm not yelling! We're in a lot of trouble. It's very hard to concentrate with that panicky tone in your voice! It's not a tone. I'm panicking! I can't do this! Vanessa, pull yourself together. You have to snap out of it! You snap out of it. You snap out of it. You snap out of it! You snap out of it! You snap out of it! You snap out of it! You snap out of it! You snap out of it! Hold it! Why? Come on, it's my turn. How is the plane flying? I don't know. Hello? Benson, got any flowers for a happy occasion in there? The Pollen Jocks! They do get behind a fellow. Black and yellow. Hello. All right, let's drop this tin can on the blacktop. Where? I can't see anything. Can you? No, nothing. It's all cloudy. Come on. You got to think bee, Barry. Thinking bee. Thinking bee. Thinking bee! Thinking bee! Thinking bee! Wait a minute. I think I'm feeling something. What? I don't know. It's strong, pulling me. Like a 27-million-year-old instinct. Bring the nose down. Thinking bee! Thinking bee! Thinking bee! What in the world is on the tarmac? Get some lights on that! Thinking bee! Thinking bee! Thinking bee! Vanessa, aim for the flower. OK. Cut the engines. We're going in on bee power. Ready, boys? Affirmative! Good. Good. Easy, now. That's it. Land on that flower! Ready? Full reverse! Spin it around! Not that flower! The other one! Which one? That flower. I'm aiming at the flower! That's a fat guy in a flowered shirt. I mean the giant pulsating flower made of millions of bees! Pull forward. Nose down. Tail up. Rotate around it. This is insane, Barry! This's the only way I know how to fly. Am I koo-koo-kachoo, or is this plane flying in an insect-like pattern? Get your nose in there. Don't be afraid. Smell it. Full reverse! Just drop it. Be a part of it. Aim for the center! Now drop it in! Drop it in, woman! Come on, already. Barry, we did it! You taught me how to fly! Yes. No high-five! Right. Barry, it worked! Did you see the giant flower? What giant flower? Where? Of course I saw the flower! That was genius! Thank you. But we're not done yet. Listen, everyone! This runway is covered with the last pollen from the last flowers available anywhere on Earth. That means this is our Last Chance. We're the only ones who make honey, pollinate flowers and dress like this. If we're gonna survive as a species, this is our moment! What do you say? Are we going to be bees, or just Museum of Natural History keychains? We're bees! Keychain! Then follow me! Except Keychain. Hold on, Barry. Here. You've earned this. Yeah! I'm a Pollen Jock! And it's a perfect fit. All I gotta do are the sleeves. Oh, yeah. That's our Barry. Mom! The bees are back! If anybody needs to make a call, now's the time. I got a feeling we'll be working late tonight! Here's your change. Have a great afternoon! Can I help who's next? Would you like some honey with that? It is bee-approved. Don't forget these. Milk, cream, cheese, it's all me.  And I don't see a nickel! Sometimes I just feel like a piece of meat! I had no idea. Barry, I'm sorry. Have you got a moment? Would you excuse me? My mosquito associate will help you. Sorry I'm late. He's a lawyer too? I was already a blood-sucking parasite. All I needed was a briefcase. Have a great afternoon! Barry, I just got this huge tulip order, and I can't get them anywhere. No problem, Vannie. Just leave it to me. You're a lifesaver, Barry. Can I help who's next? All right, scramble, jocks! It's time to fly. Thank you, Barry! That bee is living my life! Let it go, Kenny. When will this nightmare end?! Let it all go. Beautiful day to fly. Sure is. Between you and me, I was dying to get out of that office. You have got to start thinking bee, my friend. Thinking bee! Me? Hold it. Let's just stop for a second. Hold it. I'm sorry. I'm sorry, everyone. Can we stop here? I'm not making a major life decision during a production number! All right. Take ten, everybody. Wrap it up, guys. I had virtually no rehearsal for that. ");
		},
	},
	pinch: {
		num: 1501,
		accuracy: 100,
		basePower: 50,
		category: "Physical",
		isNonstandard: "Thing",
		name: "Pinch",
		pp: 30,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 50,
			volatileStatus: 'flinch',
		},
		target: "normal",
		type: "Arthropod",
		contestType: "Tough",
	},
	sting: {
		num: 1502,
		accuracy: 100,
		basePower: 60,
		category: "Physical",
		isNonstandard: "Thing",
		name: "Sting",
		pp: 25,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		critRatio: 2,
		secondary: null,
		target: "normal",
		type: "Arthropod",
		contestType: "Tough",
	},
	summonlocusts: {
		num: 1500,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Thing",
		name: "Summon Locusts",
		pp: 5,
		priority: 0,
		flags: {},
		weather: 'Locust Swarm',
		secondary: null,
		target: "all",
		type: "Arthropod",
		zMove: {boost: {spe: 1}},
		contestType: "Tough",
	},
	scuttle: {
		num: 1104,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Thing",
		name: "Scuttle",
		pp: 15,
		priority: -1,
		flags: {snatch: 1},
		boosts: {
			spe: 1,
			evasion: 1,
		},
		secondary: null,
		target: "self",
		type: "Arthropod",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Cute",
	},
	arthrobite: {
		num: 1695,
		accuracy: 95,
		basePower: 75,
		category: "Physical",
		isNonstandard: "Thing",
		name: "Arthro-Bite",
		pp: 15,
		priority: 0,
		flags: {bite: 1, contact: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 30,
			volatileStatus: 'flinch',
		},
		target: "normal",
		type: "Arthropod",
		contestType: "Tough",
	},
	swarm: {
		num: 1496,
		accuracy: 100,
		basePower: 60,
		basePowerCallback(target, source, move) {
			if (move.sourceEffect === 'swarm') {
				return move.basePower * 2;
			}
			return move.basePower;
		},
		category: "Special",
		isNonstandard: "Thing",
		name: "Swarm",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onTry(source, target, move) {
			for (const action of this.queue.list as MoveAction[]) {
				if (!action.pokemon || !action.move || action.maxMove || action.zmove) continue;
				if (action.move.id === 'swarm') {
					this.queue.prioritizeAction(action, move);
					return;
				}
			}
		},
		secondary: null,
		selfSwitch: true,
		target: "normal",
		type: "Arthropod",
		contestType: "Beautiful",
	},
	nuisancepest: {
		num: 4132,
		accuracy: 95,
		basePower: 50,
		category: "Special",
		isNonstandard: "Thing",
		name: "Nuisance Pest",
		pp: 20,
		priority: 0,
		flags: {protect: 1, mirror: 1, authentic: 1},
		onHit(target, source, move) {
			let success = false;
			const removeAll = [
				'reflect', 'lightscreen', 'auroraveil', 'safeguard', 'mist', 'spikes', 'toxicspikes', 'stealthrock', 'stickyweb', 'gmaxsteelsurge',
				'stormcell', 'dustcloud', 'wetfloor', 'beamfield', 'hotcoals', 'permafrost', 'autoturret', 'voidtrap', 'caltrops', 'lightningstorm', 'eggscatter',
			];
			for (const targetCondition of removeAll) {
				if (target.side.removeSideCondition(targetCondition)) {
					this.add('-sideend', target.side, this.dex.conditions.get(targetCondition).name, '[from] move: Nuisance Pest', '[of] ' + source);
					success = true;
				}
			}
			for (const sideCondition of removeAll) {
				if (source.side.removeSideCondition(sideCondition)) {
					this.add('-sideend', source.side, this.dex.conditions.get(sideCondition).name, '[from] move: Nuisance Pest', '[of] ' + source);
					success = true;
				}
			}
			return success;
		},
		secondary: null,
		target: "normal",
		type: "Arthropod",
		zMove: {boost: {accuracy: 1}},
		contestType: "Clever",
	},
	ecdyse: {
		num: 1692,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Thing",
		name: "Ecdyse",
		pp: 5,
		priority: 0,
		flags: {snatch: 1, heal: 1},
		volatileStatus: 'ecdyse',
		condition: {
			duration: 2,
			onStart(target, source, effect) {
				if (effect?.id === 'zpower') {
					this.add('-start', target, 'move: Ecdyse', '[zeffect]');
				} else if (effect && (['imposter', 'psychup', 'transform'].includes(effect.id))) {
					this.add('-start', target, 'move: Ecdyse', '[silent]');
				} else {
					this.add('-start', target, 'move: Ecdyse');
				}
			},
			onSourceModifyDamage(damage, source, target, move) {
				return this.chainModify(2);
			},
			onEnd(target) {
				if (target && !target.fainted) {
					this.boost({def: 1, spd: 1});
				}
			},
		},
		onTry(source) {
			if (source.volatiles['ecdyse']) return false;
		},
		heal: [1, 1],
		secondary: null,
		target: "self",
		type: "Arthropod",
		zMove: {boost: {evasion: 1}},
		contestType: "Clever",
	},
	pheromonemark: {
		num: 193,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Thing",
		name: "Pheromone Mark",
		pp: 10,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1, authentic: 1},
		volatileStatus: 'pheromonemark',
		onTryHit(target) {
			if (target.volatiles['pheromonemark']) return false;
		},
		condition: {
			noCopy: true,
			onStart(pokemon) {
				this.add('-start', pokemon, 'Pheromone Mark');
			},
			onSourceModifyCritRatio(critRatio, source, target) {
				if (source.hasType('Arthropod', true)) return critRatio + 2;
			},
		},
		secondary: null,
		target: "normal",
		type: "Arthropod",
		zMove: {effect: 'crit2'},
		contestType: "Clever",
	},
	chitinbeam: {
		num: 246,
		accuracy: 90,
		basePower: 70,
		category: "Special",
		name: "Chitin Beam",
		isNonstandard: "Thing",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 20,
			self: {
				boosts: {
					def: 1,
					spd: 1,
				},
			},
		},
		target: "normal",
		type: "Arthropod",
		contestType: "Tough",
	},
	styletslurp: {
		num: 1573,
		accuracy: 95,
		basePower: 60,
		category: "Physical",
		isNonstandard: "Thing",
		name: "Stylet Slurp",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1, contact: 1, bite: 1},
		onEffectiveness(typeMod, target, type) {
			if (type === 'Liquid') return 1;
		},
		target: "normal",
		type: "Arthropod",
		contestType: "Clever",
	},
	eggscatter: {
		num: 446,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Thing",
		name: "Egg Scatter",
		pp: 20,
		priority: 0,
		flags: {reflectable: 1},
		sideCondition: 'eggscatter',
		condition: {
			// this is a side condition
			onSideStart(side) {
				this.add('-sidestart', side, 'move: Egg Scatter');
			},
			onResidual(pokemon) {
				if (pokemon.hasItem('yellowsafetyvest')) return;
				const typeMod = this.clampIntRange(pokemon.runEffectiveness(this.dex.getActiveMove('eggscatter')), -6, 6);
				this.damage(pokemon.maxhp * Math.pow(2, typeMod) / 16);
			},
		},
		secondary: null,
		target: "foeSide",
		type: "Arthropod",
		zMove: {boost: {def: 1}},
		contestType: "Clever",
	},

	// Dirt
	landslide: {
		num: 1523,
		accuracy: 90,
		basePower: 80,
		category: "Physical",
		isNonstandard: "Thing",
		name: "Landslide",
		pp: 20,
		priority: 0,
		flags: {protect: 1, mirror: 1, nonsky: 1},
		secondary: {
			chance: 20,
			status: 'prone',
		},
		target: "allAdjacent",
		type: "Dirt",
		contestType: "Tough",
	},
	dirtypunch: {
		num: 8,
		accuracy: 100,
		basePower: 75,
		category: "Physical",
		name: "Dirty Punch",
		isNonstandard: "Thing",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, punch: 1},
		secondary: {
			chance: 10,
			status: 'blinded',
		},
		target: "normal",
		type: "Dirt",
		contestType: "Tough",
	},
	primordialsmoke: {
		num: 63,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Primordial Smoke",
		isNonstandard: "Thing",
		pp: 5,
		priority: 0,
		flags: {recharge: 1, snatch: 1, authentic: 1},
		onTry(source) {
			if (source.hp <= (source.maxhp / 2) || source.maxhp === 1) return false;
		},
		onHitSide(side, source, move) {
			const targets = [];
			for (const pokemon of side.active) {
				if (!pokemon.volatiles['maxguard'] || this.runEvent('TryHit', pokemon, source, move)) {
					targets.push(pokemon);
				}
			}
			const indexOfSource = targets.indexOf(source);
			let didSomething = false;
			switch (targets.length) {
			case 3:
				targets.splice(indexOfSource, 1);
				for (const target of targets) {
					didSomething = this.boost({atk: 1, def: 1, spa: 1, spd: 1, spe: 1}, target, source, move, false, true) || didSomething;
				}
				break;
			case 2:
				for (const target of targets) {
					didSomething = this.boost({atk: 1, def: 1, spa: 1, spd: 1, spe: 1}, target, source, move, false, true) || didSomething;
				}
				break;
			case 1:
				didSomething = this.boost({atk: 2, def: 2, spa: 2, spd: 2, spe: 2}, targets[0], source, move, false, true) || didSomething;
				break;
			}
			if (didSomething) {
				this.directDamage(source.maxhp / 2, source);
				source.addVolatile('mustrecharge');
			}
			return didSomething;
		},
		secondary: null,
		target: "allySide",
		type: "Dirt",
		contestType: "Cool",
	},
	dustcloud: {
		num: 1113,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Dust Cloud",
		isNonstandard: "Thing",
		pp: 15,
		priority: 0,
		flags: {snatch: 1},
		sideCondition: 'dustcloud',
		condition: {
			duration: 5,
			onModifyMove(move, pokemon, target) {
				if (typeof move.accuracy !== 'number' || pokemon.hasItem('yellowsafetyvest')) return;
				move.accuracy *= 0.8;
			},
			onSideStart(side) {
				this.add('-sidestart', side, 'move: Dust Cloud');
			},
			onSideResidualOrder: 21,
			onSideResidualSubOrder: 1,
			onSideEnd(side) {
				this.add('-sideend', side, 'move: Dust Cloud');
			},
		},
		secondary: null,
		target: "foeSide",
		type: "Dirt",
		zMove: {boost: {spd: 1}},
		contestType: "Tough",
	},
	cosmicdust: {
		num: 1605,
		accuracy: 90,
		basePower: 85,
		category: "Special",
		isNonstandard: "Thing",
		name: "Cosmic Dust",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 10,
			self: {
				boosts: {
					spa: 1,
				},
			},
		},
		target: "allAdjacentFoes",
		type: "Dirt",
		contestType: "Beautiful",
	},
	bludgeon: {
		num: 1719,
		accuracy: 90,
		basePower: 100,
		category: "Physical",
		isNonstandard: "Thing",
		name: "Bludgeon",
		pp: 5,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 30,
			status: 'wounded',
		},
		target: "normal",
		type: "Dirt",
		contestType: "Tough",
	},
	rockshot: {
		num: 1719,
		accuracy: 85,
		basePower: 80,
		category: "Physical",
		isNonstandard: "Thing",
		name: "Rock Shot",
		pp: 10,
		priority: 0,
		flags: {bullet: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 20,
			onHit(target, source) {
				const result = this.random(3);
				if (result === 0) {
					target.trySetStatus('blinded', source);
				} else if (result === 1) {
					target.trySetStatus('wounded', source);
				} else {
					target.trySetStatus('prone', source);
				}
			},
		},
		target: "normal",
		type: "Dirt",
		contestType: "Tough",
	},
	callmeteorites: {
		num: 1499,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Thing",
		name: "Call Meteorites",
		pp: 5,
		priority: 0,
		flags: {},
		weather: 'Meteor Shower',
		secondary: null,
		target: "all",
		type: "Dirt",
		zMove: {boost: {spe: 1}},
		contestType: "Clever",
	},
	bury: {
		num: 609,
		accuracy: 100,
		basePower: 40,
		category: "Physical",
		isNonstandard: "Thing",
		name: "Bury",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 100,
			status: 'banished',
		},
		onAfterHit(target, source, move) {
			if (target.status !== 'banished') return false;
			target.statusState.time = 2;
			target.statusState.startTime = 2;
		},
		target: "normal",
		type: "Dirt",
		contestType: "Tough",
	},
	earthjet: {
		num: 585,
		accuracy: 90,
		basePower: 100,
		category: "Special",
		isNonstandard: "Thing",
		name: "Earth Jet",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 10,
			boosts: {
				spd: -1,
			},
		},
		target: "normal",
		type: "Dirt",
		contestType: "Clever",
	},
	richsoil: {
		num: 581,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Thing",
		name: "Rich Soil",
		pp: 10,
		priority: 0,
		flags: {nonsky: 1},
		terrain: 'richsoil',
		condition: {
			duration: 5,
			durationCallback(source, effect) {
				if (source?.hasItem('landscapingpermit')) {
					return 10;
				}
				return 5;
			},
			onFieldStart(battle, source, effect) {
				if (effect?.effectType === 'Ability') {
					this.add('-fieldstart', 'move: Rich Soil', '[from] ability: ' + effect, '[of] ' + source);
				} else {
					this.add('-fieldstart', 'move: Rich Soil');
				}
			},
			onResidual(pokemon) {
				if (pokemon.hasType('Dirt', true) || pokemon.hasAbility('Landscape Blessing')) {
					if (this.blessedLand) this.heal(pokemon.baseMaxhp / 2, pokemon);
					else this.heal(pokemon.baseMaxhp / 4, pokemon);
				} else {
					if (this.blessedLand) this.heal(pokemon.baseMaxhp / 8, pokemon);
					else this.heal(pokemon.baseMaxhp / 16, pokemon);
				}
			},
			onResidualOrder: 21,
			onResidualSubOrder: 2,
			onFieldEnd(side) {
				this.add('-fieldend', 'move: Rich Soil');
			},
		},
		secondary: null,
		target: "all",
		type: "Dirt",
		zMove: {boost: {spd: 1}},
		contestType: "Clever",
	},

	// Far
	closein: {
		num: 1605,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Thing",
		name: "Close In",
		pp: 5,
		priority: 6,
		flags: {},
		onTryMove(pokemon, target, move) {
			if (pokemon.hasType('Far') || pokemon.status === 'distanced') return;
			this.add('-fail', pokemon, 'move: Close In');
			this.attrLastMove('[still]');
			return null;
		},
		self: {
			onHit(pokemon) {
				if (pokemon.status === 'distanced') {
					pokemon.cureStatus();
				} else {
					pokemon.setType(pokemon.getTypes(true).filter(type => type !== "Far"));
					this.add('-start', pokemon, 'typechange', pokemon.types.join('/'), '[from] move: Close In');
				}

				for (const foe of pokemon.foes()) {
					if (!foe || foe === pokemon) continue;
					if (!foe.isActive) {
						break;
					}
					if (this.queue.willMove(foe)?.originalTarget === pokemon) {
						foe.addVolatile('flinch', pokemon);
					}
				}
				for (const ally of pokemon.allies()) {
					if (!ally || ally === pokemon) continue;
					if (!ally.isActive) {
						return;
					}
					if (this.queue.willMove(ally)?.originalTarget === pokemon) {
						ally.addVolatile('flinch', pokemon);
					}
				}
			},
		},
		secondary: null,
		target: "self",
		type: "Far",
		contestType: "Tough",
	},
	changechannel: {
		num: 503,
		accuracy: 50,
		basePower: 0,
		category: "Status",
		isNonstandard: "Thing",
		name: "Change Channel",
		pp: 5,
		priority: 0,
		flags: {reflectable: 1, authentic: 1},
		forceSwitch: true,
		secondary: null,
		target: "normal",
		type: "Far",
		zMove: {boost: {spe: 2}},
	},
	spatialexpansion: {
		num: 581,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Thing",
		name: "Spatial Expansion",
		pp: 10,
		priority: 0,
		flags: {nonsky: 1},
		terrain: 'spatialexpansion',
		condition: {
			duration: 5,
			durationCallback(source, effect) {
				if (source?.hasItem('landscapingpermit')) {
					return 10;
				}
				return 5;
			},
			onModifyMove(move) {
				// redirects all spread moves
				if (move?.target !== 'allAdjacent' && move.target !== 'allAdjacentFoes') {
					return;
				}
				move.target = 'randomNormal';
			},
			onBasePowerPriority: 6,
			onBasePower(basePower, attacker, defender, move) {
				if (move.type !== 'Far' && !defender.isSemiInvulnerable()) {
					this.debug('spatial expansion drop');
					return this.chainModify(0.8);
				}
			},
			onBeforeMovePriority: 10,
			onBeforeMove(pokemon, target, move) {
				if (this.blessedLand && move.flags['contact'])	{
					this.add('cant', pokemon, 'spatialexpansion');
					return false;
				}
			},
			onFieldStart(battle, source, effect) {
				if (effect?.effectType === 'Ability') {
					this.add('-fieldstart', 'move: Spatial Expansion', '[from] ability: ' + effect, '[of] ' + source);
				} else {
					this.add('-fieldstart', 'move: Spatial Expansion');
				}
			},
			onResidualOrder: 21,
			onResidualSubOrder: 2,
			onFieldEnd(side) {
				this.add('-fieldend', 'move: Spatial Expansion');
			},
		},
		secondary: null,
		target: "all",
		type: "Far",
		zMove: {boost: {spd: 1}},
		contestType: "Clever",
	},
	sendoff: {
		num: 147,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		isNonstandard: "Thing",
		name: "Send Off",
		pp: 15,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1},
		status: 'distanced',
		secondary: null,
		target: "normal",
		type: "Far",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Clever",
	},
	shove: {
		num: 440,
		accuracy: 90,
		basePower: 50,
		category: "Physical",
		isNonstandard: "Thing",
		name: "Shove",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 100,
			status: 'distanced',
		},
		target: "normal",
		type: "Far",
		contestType: "Tough",
	},
	farbeam: {
		num: 440,
		accuracy: 110,
		basePower: 65,
		basePowerCallback(pokemon, target, move) {
			if (target.status === 'distanced') return move.basePower * 2;
			return move.basePower;
		},
		category: "Special",
		isNonstandard: "Thing",
		name: "Far Beam",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		target: "any",
		type: "Far",
		contestType: "Clever",
	},
	distantbarrage: {
		num: 541,
		accuracy: 110,
		basePower: 20,
		category: "Special",
		isNonstandard: "Thing",
		name: "Distant Barrage",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1, bullet: 1},
		multihit: [3, 5],
		secondary: null,
		target: "any",
		type: "Far",
		zMove: {basePower: 140},
		maxMove: {basePower: 130},
		contestType: "Clever",
	},
	lob: {
		num: 1561,
		accuracy: 85,
		basePower: 50,
		category: "Physical",
		isNonstandard: "Thing",
		name: "Lob",
		pp: 25,
		priority: 0,
		flags: {bullet: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 60,
			volatileStatus: 'flinch',
		},
		target: "any",
		type: "Far",
		contestType: "Clever",
	},
	updog: {
		num: 213,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Updog",
		isNonstandard: "Thing",
		pp: 10,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1},
		volatileStatus: 'updog',
		condition: {
			noCopy: true, // doesn't get copied by Baton Pass
			onStart(pokemon, source, effect) {
				if (!this.runEvent('Updog', pokemon, source)) {
					this.debug('Updog event failed');
					return false;
				}

				this.add('-start', pokemon, 'Updog');
			},
			onResidual(pokemon) {
				this.boost({evasion: 1});
				if (pokemon.boosts['evasion'] >= 3) pokemon.trySetStatus('distanced');
				if (pokemon.boosts['evasion'] >= 6 && !pokemon.hasAbility("What's up?")) pokemon.faint();
			},
			onEnd(pokemon) {
				this.add('-end', pokemon, 'Updog', '[silent]');
			},
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Clever",
	},
	ohio: {
		num: 329,
		accuracy: 20,
		basePower: 0,
		category: "Special",
		isNonstandard: "Thing",
		name: "Ohio",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		ohko: true,
		target: "normal",
		type: "Far",
		zMove: {basePower: 180},
		maxMove: {basePower: 130},
		contestType: "Beautiful",
	},
	arrowofupdog: {
		num: 1561,
		accuracy: 70,
		basePower: 50,
		category: "Physical",
		isNonstandard: "Thing",
		name: "Arrow of Updog",
		pp: 20,
		priority: 0,
		flags: {bullet: 1, protect: 1, mirror: 1},
		onHit(target, source, move) {
			target.addVolatile('updog');
		},
		target: "any",
		type: "Far",
		contestType: "Clever",
	},

	// Fish
	brilliantfish: {
		num: 1569,
		accuracy: 100,
		basePower: 50,
		category: "Special",
		isNonstandard: "Thing",
		name: "Brilliant Fish",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 25,
			self: {
				boosts: {
					spa: 1,
				},
			},
		},
		target: "allAdjacentFoes",
		type: "Fish",
		contestType: "Clever",
	},
	depthvanish: {
		num: 1692,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Thing",
		name: "Depth Vanish",
		pp: 5,
		priority: -2,
		flags: {snatch: 1},
		volatileStatus: 'depthvanish',
		condition: {
			onStart(target, source, effect) {
				if (effect?.id === 'zpower') {
					this.add('-start', target, 'move: Depth Vanish', '[zeffect]');
				} else if (effect && (['imposter', 'psychup', 'transform'].includes(effect.id))) {
					this.add('-start', target, 'move: Depth Vanish', '[silent]');
				} else {
					this.add('-start', target, 'move: Depth Vanish');
				}
			},
			onModifyCritRatio(critRatio) {
				return critRatio + 3;
			},
		},
		boosts: {
			accuracy: 2,
		},
		onTry(source) {
			if (source.status || source.volatiles['depthvanish']) return false;
		},
		onHit(target, source, move) {
			if (!target.setStatus('banished', source, move)) return false;
			target.statusState.time = 2;
			target.statusState.startTime = 2;
		},
		secondary: null,
		target: "self",
		type: "Fish",
		zMove: {boost: {evasion: 1}},
		contestType: "Clever",
	},
	hadalzone: {
		num: 433,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Thing",
		name: "Hadal Zone",
		pp: 10,
		priority: 0,
		flags: {mirror: 1},
		pseudoWeather: 'hadalzone',
		condition: {
			duration: 5,
			onStart(target, source) {
				this.add('-fieldstart', 'move: Hadal Zone', '[of] ' + source);
			},
			onRestart(target, source) {
				this.field.removePseudoWeather('hadalzone');
			},
			// Damage done in conditions.js#pressurizer
			onEnd() {
				this.add('-fieldend', 'move: Hadal Zone');
			},
		},
		secondary: null,
		target: "all",
		type: "Fish",
		zMove: {boost: {accuracy: 1}},
		contestType: "Clever",
	},
	fishslap: {
		num: 1561,
		accuracy: 100,
		basePower: 50,
		category: "Physical",
		isNonstandard: "Thing",
		name: "Fish Slap",
		pp: 25,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 10,
			volatileStatus: 'flinch',
		},
		target: "normal",
		type: "Fish",
		contestType: "Clever",
	},
	submerge: {
		num: 1499,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Thing",
		name: "Submerge",
		pp: 5,
		priority: 0,
		flags: {},
		weather: 'Underwater',
		secondary: null,
		target: "all",
		type: "Fish",
		zMove: {boost: {spe: 1}},
		contestType: "Cool",
	},
	fishbite: {
		num: -277,
		accuracy: 100,
		basePower: 75,
		category: "Physical",
		isNonstandard: "Thing",
		name: "Fish Bite",
		pp: 15,
		priority: 0,
		flags: {bite: 1, contact: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 30,
			volatileStatus: 'flinch',
		},
		target: "normal",
		type: "Fish",
		contestType: "Tough",
	},
	glidingcharge: {
		num: 803,
		accuracy: 90,
		basePower: 80,
		category: "Physical",
		isNonstandard: "Thing",
		name: "Gliding Charge",
		pp: 5,
		priority: 0,
		flags: {contact: 1, protect: 1, mystery: 1},
		onModifyPriority(priority, source, target, move) {
			if (this.field.isWeather('underwater')) {
				return priority + 1;
			}
		},
		secondary: null,
		target: "any",
		type: "Fish",
		contestType: "Cool",
	},
	breachimpact: {
		num: 803,
		accuracy: 90,
		basePower: 0,
		basePowerCallback(pokemon, target) {
			const targetWeight = target.getWeight();
			const pokemonWeight = pokemon.getWeight();
			if (pokemonWeight > targetWeight * 5) {
				return 120;
			}
			if (pokemonWeight > targetWeight * 4) {
				return 100;
			}
			if (pokemonWeight > targetWeight * 3) {
				return 80;
			}
			if (pokemonWeight > targetWeight * 2) {
				return 60;
			}
			return 40;
		},
		category: "Physical",
		isNonstandard: "Thing",
		name: "Breach Impact",
		pp: 5,
		priority: 0,
		recoil: [33, 100],
		onDamage(damage, target, source, effect) {
			if (effect.id === 'recoil' && this.field.isWeather('underwater')) {
				this.field.clearWeather();
				if (!this.activeMove) throw new Error("Battle.activeMove is null");
				if (this.activeMove.id !== 'struggle') return null;
			}
		},
		flags: {contact: 1, protect: 1, mystery: 1},
		secondary: null,
		target: "any",
		type: "Fish",
		contestType: "Cool",
	},
	ineptfish: {
		num: -277,
		accuracy: 65,
		basePower: 100,
		category: "Physical",
		isNonstandard: "Thing",
		name: "Inept Fish",
		pp: 20,
		priority: 0,
		flags: {bite: 1, contact: 1, protect: 1, mirror: 1},
		target: "normal",
		type: "Fish",
		contestType: "Cute",
	},
	arghhghg: {
		num: 28,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Arghhghg",
		isNonstandard: "Thing",
		pp: 10,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1},
		boosts: {
			atk: -1,
			spa: -1,
			accuracy: -1,
		},
		secondary: null,
		target: "normal",
		type: "Fish",
		zMove: {boost: {evasion: 1}},
		contestType: "Tough",
	},

	// Green
	greentackle: {
		num: 501,
		accuracy: 100,
		basePower: 40,
		category: "Physical",
		isNonstandard: "Thing",
		name: "Green Tackle",
		pp: 35,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Green",
		contestType: "Tough",
	},
	chartreusebeam: {
		num: -560,
		accuracy: 100,
		basePower: 90,
		category: "Special",
		isNonstandard: "Thing",
		name: "Chartreuse Beam",
		pp: 10,
		flags: {protect: 1, mirror: 1},
		onEffectiveness(typeMod, target, type, move) {
			return typeMod + this.dex.getEffectiveness('Yellow', type);
		},
		priority: 0,
		secondary: null,
		target: "any",
		type: "Green",
		zMove: {basePower: 160},
		contestType: "Tough",
	},
	greenify: {
		num: 1157,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Thing",
		name: "Greenify",
		pp: 5,
		priority: 0,
		flags: {snatch: 1},
		onHit(target) {
			if (!target.addType('Green')) return false;
			this.add('-start', target, 'typeadd', 'Green', '[from] move: Greenify');
		},
		secondary: null,
		target: "self",
		type: "Green",
		zMove: {boost: {atk: 1, def: 1, spa: 1, spd: 1, spe: 1}},
		contestType: "Beautiful",
	},
	greenpunch: {
		num: 8,
		accuracy: 100,
		basePower: 75,
		category: "Physical",
		name: "Green Punch",
		isNonstandard: "Thing",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, punch: 1},
		secondary: {
			chance: 10,
			onHit(target, source, move) {
				if (!target.addType('Green')) return false;
				this.add('-start', target, 'typeadd', 'Green', '[from] move: Green Punch');
			},
		},
		target: "normal",
		type: "Green",
		contestType: "Beautiful",
	},
	greenbite: {
		num: 1631,
		accuracy: 95,
		basePower: 75,
		category: "Physical",
		isNonstandard: "Thing",
		name: "Green Bite",
		pp: 15,
		priority: 0,
		flags: {bite: 1, contact: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 30,
			volatileStatus: 'flinch',
		},
		target: "normal",
		type: "Green",
		contestType: "Clever",
	},
	greenseeds: {
		num: 567,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Green Seeds",
		isNonstandard: "Thing",
		pp: 20,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1, mystery: 1},
		onHit(target) {
			if (!target.addType('Green')) return false;
			this.add('-start', target, 'typeadd', 'Green', '[from] move: Green Seeds');
		},
		secondary: null,
		target: "normal",
		type: "Green",
		zMove: {boost: {atk: 1, def: 1, spa: 1, spd: 1, spe: 1}},
		contestType: "Cute",
	},
	abilityseeds: {
		num: 494,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Ability Seeds",
		isNonstandard: "Thing",
		pp: 15,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1, mystery: 1},
		onTryHit(target, source) {
			if (target === source || target.volatiles['dynamax']) return false;

			const additionalBannedSourceAbilities = [
				'omega', 'reallybigsword', 'red',
			];
			if (
				target.ability === source.ability ||
				target.getAbility().isPermanent || target.ability === 'truant' ||
				source.getAbility().isPermanent || additionalBannedSourceAbilities.includes(source.ability)
			) {
				return false;
			}
		},
		onHit(target, source) {
			const oldAbility = target.setAbility(source.ability);
			if (oldAbility) {
				this.add('-ability', target, target.getAbility().name, '[from] move: Green Seeds');
				if (!target.isAlly(source)) target.volatileStaleness = 'external';
				return;
			}
			return false;
		},
		secondary: null,
		target: "normal",
		type: "Green",
		zMove: {boost: {spd: 1}},
		contestType: "Cute",
	},
	deciduousblast: {
		num: 682,
		accuracy: 95,
		basePower: 170,
		category: "Special",
		name: "Deciduous Blast",
		isNonstandard: "Thing",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onTryMove(pokemon, target, move) {
			if (pokemon.hasType('Green') || this.field.isTerrain('greenground')) return;
			this.add('-fail', pokemon, 'move: Deciduous Blast');
			this.attrLastMove('[still]');
			return null;
		},
		self: {
			onHit(pokemon) {
				if (this.field.isTerrain('greenground')) {
					this.field.clearTerrain();
					return;
				}
				if (!pokemon.hasType('Green')) return;
				if (pokemon.addedType === 'Green') {
					if (!pokemon.addType('')) return false;
					this.add('-start', pokemon, 'typeadd', '', '[from] move: Deciduous Blast');
				} else {
					let types = pokemon.getTypes(true);
					types.splice(types.indexOf('Green'), 1);
					if (!types.length) types = ['???'];
					pokemon.setType(types);
					this.add('-start', pokemon, 'typechange', pokemon.types.join('/'), '[from] move: Deciduous Blast');
				}
			},
		},
		secondary: null,
		target: "normal",
		type: "Green",
		contestType: "Clever",
	},
	photosynthesize: {
		num: 235,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Photosynthesize",
		isNonstandard: "Thing",
		pp: 5,
		priority: 0,
		flags: {snatch: 1, heal: 1},
		onHit(pokemon) {
			let count = pokemon.getTypes(false, true).filter(type => type === 'Green').length;
			if (this.field.isTerrain('greenground')) {
				if (this.blessedLand && count > 0) {
					count = count * 2;
				} else { count++; }
			}
			if (!count) {
				this.add('-fail', pokemon, 'move: Photosynthesize');
				this.attrLastMove('[still]');
				return null;
			}
			const heal = pokemon.maxhp * count * 0.25;
			return !!this.heal(heal, pokemon);
		},
		secondary: null,
		target: "self",
		type: "Green",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Clever",
	},
	greennetwork: {
		num: 63,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Green Network",
		isNonstandard: "Thing",
		pp: 5,
		priority: 0,
		flags: {recharge: 1, snatch: 1, authentic: 1},
		onHit(pokemon) {
			let count = this.getAllActive().reduce((total, active) => total + active.getTypes(false, true).filter(type => type === 'Green').length, 0);
			if (this.field.isTerrain('greenground')) {
				if (this.blessedLand && count > 0) {
					count = count * 2;
				} else { count++; }
			}
			if (!count) {
				this.add('-fail', pokemon, 'move: Green Network');
				this.attrLastMove('[still]');
				return null;
			}

			const oldStats = {...pokemon.boosts};
			const boost: SparseBoostsTable = {};
			let loopNum = 0;
			do {
				const stats: BoostID[] = [];
				let statPlus: BoostID;
				for (statPlus in oldStats) {
					// if (statPlus === 'accuracy' || statPlus === 'evasion') continue;
					if (oldStats[statPlus] < 6) {
						stats.push(statPlus);
					}
				}
				const randomStat: BoostID | undefined = stats.length ? this.sample(stats) : undefined;
				if (!randomStat) break;
				boost[randomStat] = boost[randomStat]! + 1 || 1;
				oldStats[randomStat]++;
				loopNum++;
			} while (loopNum < count && pokemon.hp);
			this.boost(boost);

			return;
		},
		secondary: null,
		target: "self",
		type: "Green",
		contestType: "Cool",
	},
	greenground: {
		num: 581,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Thing",
		name: "Green Ground",
		pp: 10,
		priority: 0,
		flags: {nonsky: 1},
		terrain: 'greenground',
		condition: {
			duration: 5,
			durationCallback(source, effect) {
				if (source?.hasItem('landscapingpermit')) {
					return 10;
				}
				return 5;
			},
			onBasePowerPriority: 6,
			onBasePower(basePower, attacker, defender, move) {
				if (move.type === 'Green' && !defender.isSemiInvulnerable()) {
					this.debug('greenground boost');
					return this.chainModify(1.2);
				}
			},
			onFieldStart(battle, source, effect) {
				if (effect?.effectType === 'Ability') {
					this.add('-fieldstart', 'move: Green Ground', '[from] ability: ' + effect, '[of] ' + source);
				} else {
					this.add('-fieldstart', 'move: Green Ground');
				}
			},
			onResidualOrder: 21,
			onResidualSubOrder: 2,
			onFieldEnd(side) {
				this.add('-fieldend', 'move: Green Ground');
			},
		},
		secondary: null,
		target: "all",
		type: "Green",
		zMove: {boost: {spd: 1}},
		contestType: "Cute",
	},
	stickattack: {
		num: 168,
		accuracy: 90,
		basePower: 30,
		category: "Physical",
		name: "Stick Attack",
		isNonstandard: "Thing",
		pp: 25,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 50,
			onHit(target, source, move) {
				if (!target.item) {
					return;
				} else {
					const old_item = target.getItem();
					target.setItem('');
					target.lastItem = old_item.id;
				}

				this.add('-item', target, this.dex.items.get('plainstick'), '[from] move: Stick Attack');
				target.setItem('plainstick');
			},
		},
		target: "normal",
		type: "Green",
		contestType: "Tough",
	},

	// H
	hostile: {
		num: 1000,
		accuracy: 95,
		basePower: 90,
		category: "Physical",
		isNonstandard: "Thing",
		name: "Hostile",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 10,
			self: {
				boosts: {
					def: -1,
				},
			},
		},
		target: "normal",
		type: "H",
		contestType: "Clever",
	},
	hullabaloo: {
		num: 1001,
		accuracy: 95,
		basePower: 90,
		category: "Special",
		isNonstandard: "Thing",
		name: "Hullabaloo",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 10,
			self: {
				boosts: {
					spd: -1,
				},
			},
		},
		target: "normal",
		type: "H",
		contestType: "Clever",
	},
	heckle: {
		num: 1541,
		accuracy: 85,
		basePower: 40,
		category: "Physical",
		isNonstandard: "Thing",
		name: "Heckle",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		multihit: [1, 3],
		secondary: null,
		target: "normal",
		type: "H",
		zMove: {basePower: 140},
		maxMove: {basePower: 130},
		contestType: "Cute",
	},
	harbinger: {
		num: 1163,
		accuracy: 90,
		basePower: 150,
		category: "Special",
		isNonstandard: "Thing",
		name: "Harbinger",
		pp: 5,
		priority: 0,
		flags: {recharge: 1, protect: 1, mirror: 1},
		self: {
			volatileStatus: 'mustrecharge',
		},
		secondary: null,
		target: "normal",
		type: "H",
		contestType: "Cool",
	},
	hbond: {
		num: 3135,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Thing",
		name: "H-Bond",
		pp: 5,
		priority: 0,
		flags: {reflectable: 1, mirror: 1},
		self: {
			volatileStatus: 'hbond',
		},
		onTry(source, target, move) {
			if (source.volatiles['hbond']) return false;
			if (source.volatiles['trapped']) {
				delete move.volatileStatus;
			}
		},
		condition: {
			onStart(pokemon) {
				this.add('-start', pokemon, 'move: H-Bond');
			},
			onTrapPokemon(pokemon) {
				pokemon.tryTrap();
			},
		},
		onHit(target, source, move) {
			return target.addVolatile('trapped', source, move, 'trapper');
		},
		boosts: {
			evasion: -2,
			def: -1,
		},
		secondary: null,
		target: "normal",
		type: "H",
		zMove: {boost: {def: 1}},
		contestType: "Clever",
	},
	hit: {
		num: 1000,
		accuracy: 110,
		basePower: 50,
		category: "Physical",
		isNonstandard: "Thing",
		name: "Hit",
		pp: 25,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "H",
		contestType: "Tough",
	},
	hide: {
		num: 1104,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Thing",
		name: "Hide",
		pp: 15,
		priority: 0,
		flags: {snatch: 1},
		boosts: {
			evasion: 1,
		},
		secondary: null,
		target: "self",
		type: "H",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Cute",
	},
	hsearch: {
		num: 1118,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Thing",
		name: "H Search",
		pp: 10,
		priority: 0,
		flags: {},
		noMetronome: ['H Search'],
		onHit(target, source, effect) {
			const moves: MoveData[] = [];
			for (const id in Moves) {
				const move = Moves[id];
				if (move.realMove) continue;
				if (move.isZ || move.isMax || move.isNonstandard !== 'Thing') continue;
				if (!/^[hH]/.test(move.name) || effect.noMetronome!.includes(move.name)) continue;
				moves.push(move);
			}
			let randomMove = '';
			if (moves.length) {
				moves.sort((a, b) => a.num! - b.num!);
				randomMove = this.sample(moves).name;
			}
			if (!randomMove) {
				return false;
			}
			this.actions.useMove(randomMove, target);
		},
		secondary: null,
		target: "self",
		type: "H",
		contestType: "Clever",
	},
	/* homoerectus: {
		num: 1981,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Homo erectus",
		pp: 15,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1, authentic: 1},
		volatileStatus: 'homoerectus',
		condition: {
			noCopy: true, // doesn't get copied by Baton Pass
			onStart(pokemon, source, effect) {
				if (!(pokemon.gender === 'M' && source.gender === 'M') && !(pokemon.gender === 'F' && source.gender === 'F')) {
					this.debug('incompatible gender');
					return false;
				}
				if (!this.runEvent('Homo erectus', pokemon, source)) {
					this.debug('Homo erectus event failed');
					return false;
				}
			},
			onUpdate(pokemon) {
				if (this.effectState.source && !this.effectState.source.isActive && pokemon.volatiles['homoerectus']) {
					this.debug('Removing Homo erectus volatile on ' + pokemon);
					pokemon.removeVolatile('homoerectus');
				}
			},
			onBeforeMovePriority: 2,
			onBeforeMove(pokemon, target, move) {
				this.add('-activate', pokemon, 'move: Homo erectus', '[of] ' + this.effectState.source);
				if (this.randomChance(1, 2)) {
					this.add('cant', pokemon, 'Homo Eeectus');
					return false;
				}
			},
			onEnd(pokemon) {
				this.add('-end', pokemon, 'Homo erectus', '[silent]');
			},
		},
		secondary: null,
		target: "normal",
		type: "H",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Cute",
	},*/
	handdownjudgement: {
		num: 1541,
		accuracy: 100,
		basePower: 70,
		category: "Physical",
		isNonstandard: "ThingInf",
		name: "Hand Down Judgement",
		pp: 3,
		priority: 0,
		useTargetOffensiveAsDefensive: true,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "H",
		zMove: {basePower: 140},
		maxMove: {basePower: 130},
		contestType: "Tough",
	},
	hello: {
		num: 213,
		accuracy: 95,
		basePower: 0,
		category: "Status",
		name: "Hello",
		isNonstandard: "Thing",
		pp: 5,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1, authentic: 1},
		volatileStatus: 'hello',
		onHit(target, source, move) {
			source.addVolatile('hello', target);
		},
		condition: {
			noCopy: true, // doesn't get copied by Baton Pass
			onStart(pokemon, source, effect) {
				if (pokemon.volatiles['conversed']) {
					this.debug('already talked');
					return false;
				}
				if (!source.volatiles['hello']) {
					if (!source.addVolatile('hello', pokemon)) return false;
					this.add('-start', source, "Hello");
				}

				this.add('-start', pokemon, 'Hello');

				// 1-3 turns
				this.effectState.startTime = this.random(2, 5);
				this.effectState.time = this.effectState.startTime;
			},
			onUpdate(pokemon) {
				if (this.effectState.source && !this.effectState.source.isActive && !this.effectState.source.volatiles['hello'] && pokemon.volatiles['hello']) {
					this.debug('Removing Hello volatile on ' + pokemon);
					pokemon.removeVolatile('hello');
				}
			},
			onBeforeMovePriority: 10,
			onBeforeMove(pokemon, target, move) {
				this.effectState.time--;
				if (this.effectState.time <= 0) {
					pokemon.removeVolatile('hello');
					pokemon.addVolatile('conversed');
				} else {
					this.add('cant', pokemon, 'hello');
					return false;
				}
			},
			onEnd(pokemon) {
				this.add('-end', pokemon, 'Hello', '[silent]');
			},
		},
		secondary: null,
		target: "normal",
		type: "H",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Clever",
	},

	// Hair
	whipcrack: {
		num: 813,
		accuracy: 90,
		basePower: 50,
		category: "Physical",
		isNonstandard: "Thing",
		basePowerCallback(pokemon, target, move) {
			if (move.hit === 1) move.category = 'Special';
			return 50;
		},
		name: "Whipcrack",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		multihit: 2,
		multiaccuracy: true,
		secondary: null,
		target: "normal",
		type: "Hair",
		zMove: {basePower: 120},
		maxMove: {basePower: 140},
	},
	brush: {
		num: 1287,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Thing",
		name: "Brush",
		pp: 15,
		priority: 0,
		flags: {snatch: 1},
		onHit(pokemon) {
			if (['', 'slp', 'frz', 'banished'].includes(pokemon.status)) return false;
			pokemon.cureStatus();
		},
		boosts: {
			spd: 1,
		},
		secondary: null,
		target: "self",
		type: "Hair",
		zMove: {effect: 'heal'},
		contestType: "Cute",
	},
	hairball: {
		num: 1412,
		accuracy: 100,
		basePower: 90,
		category: "Special",
		isNonstandard: "Thing",
		name: "Hair Ball",
		pp: 10,
		priority: 0,
		flags: {ball: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 10,
			boosts: {
				spd: -1,
			},
		},
		target: "normal",
		type: "Hair",
		contestType: "Cute",
	},
	hairycrash: {
		num: 1344,
		accuracy: 90,
		basePower: 120,
		category: "Physical",
		isNonstandard: "Thing",
		name: "Hairy Crash",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		recoil: [33, 100],
		target: "normal",
		type: "Hair",
		contestType: "Tough",
	},
	tidy: {
		num: 4132,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		isNonstandard: "Thing",
		name: "Tidy",
		pp: 20,
		priority: 0,
		flags: {protect: 1, mirror: 1, authentic: 1},
		onHit(target, source, move) {
			let success = 0;
			const removeAll = [
				'reflect', 'lightscreen', 'auroraveil', 'safeguard', 'mist', 'spikes', 'toxicspikes', 'stealthrock', 'stickyweb', 'gmaxsteelsurge',
				'stormcell', 'dustcloud', 'wetfloor', 'beamfield', 'hotcoals', 'permafrost', 'autoturret', 'voidtrap', 'caltrops', 'lightningstorm', 'eggscatter',
			];
			for (const targetCondition of removeAll) {
				if (source.side.foe.removeSideCondition(targetCondition)) {
					this.add('-sideend', source.side.foe, this.dex.conditions.get(targetCondition).name, '[from] move: Nuisance Pest', '[of] ' + source);
					success++;
				}
			}
			for (const sideCondition of removeAll) {
				if (source.side.removeSideCondition(sideCondition)) {
					this.add('-sideend', source.side, this.dex.conditions.get(sideCondition).name, '[from] move: Nuisance Pest', '[of] ' + source);
					success++;
				}
			}
			if (success) {
				if (success > 4) success = 4;
				this.heal(success * source.baseMaxhp / 4);
				return true;
			} else { return false; }
		},
		secondary: null,
		target: "self",
		type: "Hair",
		zMove: {boost: {accuracy: 1}},
		contestType: "Clever",
	},
	wipeaway: {
		num: 1344,
		accuracy: 100,
		basePower: 50,
		category: "Physical",
		isNonstandard: "Thing",
		name: "Wipe Away",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onHit(target) {
			this.field.clearWeather();
		},
		target: "normal",
		type: "Hair",
		contestType: "Clever",
	},
	hairykick: {
		num: 1909,
		accuracy: 80,
		basePower: 100,
		category: "Physical",
		isNonstandard: "Thing",
		name: "Hairy Kick",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1, kick: 1},
		target: "normal",
		type: "Hair",
		contestType: "Tough",
	},
	cushion: {
		num: 197,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Thing",
		name: "Cushion",
		pp: 5,
		priority: 4,
		flags: {},
		stallingMove: true,
		volatileStatus: 'protect',
		onPrepareHit(pokemon) {
			return !!this.queue.willAct() && this.runEvent('StallMove', pokemon);
		},
		onHit(pokemon) {
			pokemon.addVolatile('stall');
		},
		secondary: null,
		target: "adjacentAllyOrSelf",
		type: "Hair",
		zMove: {boost: {evasion: 1}},
		contestType: "Cute",
	},
	entangle: {
		num: 250,
		accuracy: 95,
		basePower: 25,
		category: "Special",
		isNonstandard: "Thing",
		name: "Entangle",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, contact: 1},
		volatileStatus: 'partiallytrapped',
		songFlags: ['hurt'],
		secondary: null,
		target: "normal",
		type: "Hair",
		contestType: "Cute",
	},
	cuddle: {
		num: 28,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Cuddle",
		isNonstandard: "Thing",
		pp: 10,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1, contact: 1},
		boosts: {
			atk: -1,
			def: -1,
			evasion: -1,
		},
		secondary: null,
		target: "normal",
		type: "Hair",
		zMove: {boost: {evasion: 1}},
		contestType: "Cute",
	},

	// Industrial
	toxicsmog: {
		num: 1789,
		accuracy: 85,
		basePower: 55,
		category: "Special",
		isNonstandard: "Thing",
		name: "Toxic Smog",
		pp: 20,
		priority: 0,
		flags: {protect: 1, mirror: 1, gas: 1},
		secondary: {
			chance: 75,
			status: 'blinded',
		},
		target: "normal",
		type: "Industrial",
		contestType: "Tough",
	},
	shrinkwrap: {
		num: 107,
		accuracy: 95,
		basePower: 0,
		category: "Status",
		isNonstandard: "Thing",
		name: "Shrink Wrap",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		volatileStatus: 'shrinkwrap',
		boosts: {
			atk: -1,
		},
		onHit(pokemon) {
			if (pokemon.heightdm > 1) {
				pokemon.heightdm = Math.max(1, pokemon.heightdm - 10);
				this.add('-start', pokemon, 'Shrink Wrap');
			}
		},
		secondary: null,
		target: "normal",
		type: "Industrial",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Clever",
	},
	apexcalibration: {
		num: 673,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Thing",
		name: "Apex-Calibration",
		pp: 10,
		priority: 0,
		flags: {charge: 1, snatch: 1},
		onTryMove(attacker, defender, move) {
			if (attacker.volatiles['calibration'] && !attacker.volatiles['twoturnmove']) {
				this.add('-fail', attacker);
				return false;
			}
			if (attacker.removeVolatile('twoturnmove')) {
				this.hint("Calibration complete.");
				attacker.addVolatile('calibration');
				return;
			}
			this.hint("Calibrating...");
			if (!this.runEvent('ChargeMove', attacker, defender, move)) {
				this.hint("Calibration complete.");
				attacker.addVolatile('calibration');
				return;
			}
			attacker.addVolatile('twoturnmove', defender);
			return null;
		},
		secondary: null,
		target: "self",
		type: "Industrial",
		zMove: {boost: {atk: 2, spa: 2}},
		contestType: "Cool",
	},
	accelerate: {
		num: 1197,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Thing",
		name: "Accelerate",
		pp: 20,
		priority: 0,
		flags: {snatch: 1},
		boosts: {
			spe: 1,
		},
		slotCondition: 'accelerate',
		condition: {
			duration: 2,
			onResidualOrder: 4,
			onEnd(target) {
				if (target && !target.fainted) {
					this.boost({spe: 1});
				}
			},
		},
		secondary: null,
		target: "self",
		type: "Industrial",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Cool",
	},
	vroom: {
		num: 1789,
		accuracy: 85,
		basePower: 100,
		category: "Physical",
		isNonstandard: "Thing",
		name: "Vroom",
		pp: 15,
		priority: 0,
		useSourceSpeedAsOffensive: true,
		flags: {protect: 1, mirror: 1},
		target: "normal",
		type: "Industrial",
		contestType: "Cool",
	},
	crashlanding: {
		num: 1513,
		accuracy: 100,
		basePower: 250,
		category: "Physical",
		isNonstandard: "Thing",
		name: "Crash Landing",
		pp: 5,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		selfdestruct: "always",
		secondary: null,
		target: "normal",
		type: "Industrial",
		contestType: "Beautiful",
	},
	piercinground: {
		num: 1514,
		accuracy: 50,
		basePower: 90,
		category: "Special",
		isNonstandard: "Thing",
		name: "Piercing Round",
		pp: 5,
		priority: 0,
		flags: {mirror: 1},
		secondary: {
			boosts: {
				spd: -1,
			},
		},
		target: "normal",
		type: "Industrial",
		contestType: "Cool",
	},
	delayedround: {
		num: 1515,
		accuracy: 65,
		basePower: 30,
		category: "Special",
		isNonstandard: "Thing",
		name: "Delayed Round",
		pp: 10,
		priority: 0,
		flags: {},
		ignoreImmunity: false,
		isFutureMove: true,
		onTry(source, target) {
			if (!target.side.addSlotCondition(target, 'delayedmove')) return false;
			Object.assign(target.side.slotConditions[target.position]['delayedmove'], {
				duration: 2,
				move: 'delayedround',
				source: source,
				moveData: {
					id: 'delayedround',
					name: "Delayed Round",
					accuracy: 100,
					basePower: 100,
					category: "Special",
					target: "allAdjacentFoes",
					priority: 0,
					flags: {},
					ignoreImmunity: false,
					effectType: 'Move',
					isFutureMove: true,
					type: 'Industrial',
				},
			});
			this.add('-start', source, 'move: Delayed Round');
			return this.NOT_FAIL;
		},
		secondary: null,
		target: "normal",
		type: "Industrial",
		contestType: "Clever",
	},
	shoot: {
		num: 1515,
		accuracy: 100,
		basePower: 50,
		category: "Physical",
		name: "Shoot",
		isNonstandard: "Thing",
		pp: 1,
		priority: 0,
		flags: {mirror: 1, bullet: 1},
		onModifyMove(move, pokemon) {
			pokemon.addVolatile('shoot');
		},
		condition: {
			duration: 1,
			onModifyAtkPriority: -101,
			onModifyAtk(atk, pokemon, defender, move) {
				if (move.id === 'shoot') {
					return 200;
				}
			},
		},
		target: "randomNormal",
		type: "Industrial",
		contestType: "Tough",
	},
	autoturret: {
		num: 1446,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Thing",
		name: "Auto-Turret",
		pp: 20,
		priority: 0,
		flags: {reflectable: 1},
		sideCondition: 'autoturret',
		condition: {
			duration: 5,
			// this is a side condition
			onSideStart(side, source) {
				this.add('-sidestart', side, 'move: Auto-Turret');
				this.effectState.source = source;
			},
			onModifyAtkPriority: -101,
			onModifyAtk(atk, pokemon, defender, move) {
				if (move.id === 'shoot') {
					return 200;
				}
			},
			onSideResidual() {
				const pokemon = this.effectState.source;
				const foes: Pokemon[] = [];
				for (const foe of pokemon.foes()) {
					if (foe.hasItem('yellowsafetyvest')) continue;
					foes.push(foe);
				}
				if (foes.length === 0) return;
				const foeNum = this.random(0, foes.length);
				const target = foes[foeNum];
				const hitMove = this.dex.getActiveMove('Shoot');
				if (pokemon !== null && target !== null) {
					this.add('-activate', target, 'move: Auto-Turret');
					this.actions.trySpreadMoveHit([target], pokemon, hitMove, true);
				}
				this.checkWin();
			},
			onSideEnd(side) {
				this.add('-sideend', side, 'move: Auto-Turret');
			},
		},
		secondary: null,
		target: "allySide",
		type: "Industrial",
		zMove: {boost: {def: 1}},
		contestType: "Clever",
	},
	prune: {
		num: 682,
		accuracy: 100,
		basePower: 50,
		category: "Physical",
		name: "Prune",
		isNonstandard: "Thing",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower, source, target) {
			if (target.hasType('Green') || this.field.isTerrain('greenground')) {
				return this.chainModify(2);
			}
		},
		onHit(pokemon) {
			if (this.field.isTerrain('greenground')) {
				this.field.clearTerrain();
				return;
			}
			if (!pokemon.hasType('Green')) return;
			if (pokemon.addedType === 'Green') {
				if (!pokemon.addType('')) return false;
				this.add('-start', pokemon, 'typeadd', '', '[from] move: Prune');
			} else {
				let types = pokemon.getTypes(true);
				types.splice(types.indexOf('Green'), 1);
				if (!types.length) types = ['???'];
				pokemon.setType(types);
				this.add('-start', pokemon, 'typechange', pokemon.types.join('/'), '[from] move: Prune');
			}
		},
		secondary: null,
		target: "normal",
		type: "Industrial",
		contestType: "Clever",
	},
	equip: {
		num: 1511,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Equip",
		isNonstandard: "Thing",
		pp: 10,
		priority: 0,
		flags: {contact: 1, authentic: 1},
		onHit(target, source) {
			if (source.volatiles['equipped'] && target.volatiles['equip']) return;
			target.addVolatile('equip');
			this.add('-start', target, 'Equip');
			if (!target.volatiles['equip']) return false;
			source.addVolatile('equipped');
			this.add('-start', source, 'Equipped');
		},
		onTryMove(source, target, move) {
			if (source.volatiles['equipped'] && target.volatiles['equip']) {
				this.attrLastMove('[still]');
				// Run side-effects normally associated with hitting (e.g., Protean, Libero)
				this.runEvent('PrepareHit', source, target, move);
				target.volatiles['equip'].duration++;
				source.volatiles['equipped'].duration++;
				return;
			} else if (target.volatiles['equip'] || target.volatiles['equipped']) {
				return false;
			} else if (source.volatiles['equipped']) {
				source.removeVolatile('equipped');
			}
		},
		condition: {
			duration: 2,
			onModifyAtkPriority: 5,
			onModifyAtk(atk, pokemon, defender, move) {
				const source = this.effectState.source;
				return atk + source.storedStats.atk;
			},
			onModifyDefPriority: 5,
			onModifyDef(def, pokemon, defender, move) {
				const source = this.effectState.source;
				return def + source.storedStats.def;
			},
			onModifySpAPriority: 5,
			onModifySpA(spa, pokemon, defender, move) {
				const source = this.effectState.source;
				return spa + source.storedStats.spa;
			},
			onModifySpDPriority: 5,
			onModifySpD(spd, pokemon, defender, move) {
				const source = this.effectState.source;
				return spd + source.storedStats.spd;
			},
			onModifySpe(spe, pokemon) {
				const source = this.effectState.source;
				return spe + source.storedStats.spe;
			},

			onSwitchOut(pokemon) {
				pokemon.removeVolatile('equip');
				let equipped = null;
				for (const ally of this.effectState.target.allies()) {
					if (!ally?.isActive || !ally.volatiles['equipped']) continue;
					equipped = ally;
				}
				if (equipped) equipped.removeVolatile('equipped');
			},

			onFaint(pokemon) {
				pokemon.removeVolatile('equip');
				let equipped = null;
				for (const ally of this.effectState.target.allies()) {
					if (!ally?.isActive || !ally.volatiles['equipped']) continue;
					equipped = ally;
				}
				if (equipped) equipped.removeVolatile('equipped');
			},

			onEnd(target) {
				this.add('-end', target, 'move: Equip', '[silent]');
			},
		},
		target: "adjacentAlly",
		type: "Industrial",
		contestType: "Clever",
	},
	cyberneticenhancement: {
		num: 1515,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Cybernetic Enhancement",
		isNonstandard: "Thing",
		pp: 5,
		priority: 0,
		flags: {mirror: 1, authentic: 1},
		boosts: {
			atk: 2,
			spa: 2,
		},
		onTryHit(target) {
			if (target.hasType('Industrial')) return false;
		},
		onHit(target) {
			if (!target.addType('Industrial')) return false;
			this.add('-start', target, 'typeadd', 'Industrial', '[from] move: Cybernetic Enhancement');
		},
		target: "normal",
		type: "Industrial",
		contestType: "Clever",
	},
	shiftchange: {
		num: 1515,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Shift Change",
		isNonstandard: "Thing",
		pp: 5,
		priority: -1,
		flags: {mirror: 1, authentic: 1},
		onHit(pokemon) {
			this.effectState.switchingIn = false;
			for (const foe of pokemon.foes()) {
				if (!foe?.isActive || foe === pokemon ||
					!this.canSwitch(foe.side) || foe.forceSwitchFlag) continue;
				if (this.runEvent('DragOut', pokemon, foe)) {
					foe.forceSwitchFlag = true;
				}
			}
			for (const ally of pokemon.allies()) {
				if (!ally?.isActive || ally === pokemon ||
					!this.canSwitch(ally.side) || ally.forceSwitchFlag) continue;
				if (this.runEvent('DragOut', pokemon, ally)) {
					ally.forceSwitchFlag = true;
				}
			}
		},
		selfSwitch: true,
		target: "self",
		type: "Industrial",
		contestType: "Clever",
	},
	borrow: {
		num: 415,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Thing",
		name: "Borrow",
		pp: 10,
		priority: 1,
		flags: {protect: 1, mirror: 1, mystery: 1},
		onTryImmunity(target) {
			return !target.hasAbility('stickyhold');
		},
		onHit(target, source, move) {
			if (source.volatiles['borrow']) return false;
			const yourItem = target.takeItem(source);
			const myItem = source.takeItem();
			if (target.item || source.item || (!yourItem && !myItem)) {
				if (yourItem) target.item = yourItem.id;
				if (myItem) source.item = myItem.id;
				return false;
			}
			if (
				(myItem && !this.singleEvent('TakeItem', myItem, source.itemState, target, source, move, myItem)) ||
				(yourItem && !this.singleEvent('TakeItem', yourItem, target.itemState, source, target, move, yourItem))
			) {
				if (yourItem) target.item = yourItem.id;
				if (myItem) source.item = myItem.id;
				return false;
			}
			this.add('-activate', source, 'move: Borrow', '[of] ' + target);
			if (myItem) {
				target.setItem(myItem);
				this.add('-item', target, myItem, '[from] move: Borrow');
			} else {
				this.add('-enditem', target, yourItem, '[silent]', '[from] move: Borrow');
			}
			if (yourItem) {
				source.setItem(yourItem);
				this.add('-item', source, yourItem, '[from] move: Borrow');
			} else {
				this.add('-enditem', source, myItem, '[silent]', '[from] move: Borrow');
			}
			target.addVolatile('borrowed');
			source.addVolatile('borrow');
		},
		condition: {
			duration: 2,
			onAfterMove(source, moveTarget, move) {
				// console.log(this.effectState.owner?.name);

				if (this.effectState.duration === 2) {
					// fails if lookup since target was self
					this.effectState.owner = moveTarget;
					return;
				}

				const target = this.effectState.owner;

				if (!(target?.isActive && target.volatiles['borrowed'] && this.effectState.duration < 2)) {
					source.removeVolatile('borrow');
					return false;
				}

				const yourItem = target.takeItem(source);
				const myItem = source.takeItem();
				if (target.item || source.item || (!yourItem && !myItem)) {
					if (yourItem) target.item = yourItem.id;
					if (myItem) source.item = myItem.id;
					return false;
				}
				if (
					(myItem && !this.singleEvent('TakeItem', myItem, source.itemState, target, source, move, myItem)) ||
					(yourItem && !this.singleEvent('TakeItem', yourItem, target.itemState, source, target, move, yourItem))
				) {
					if (yourItem) target.item = yourItem.id;
					if (myItem) source.item = myItem.id;
					return false;
				}
				this.add('-activate', source, 'move: Borrow', '[of] ' + target);
				if (myItem) {
					target.setItem(myItem);
					this.add('-item', target, myItem, '[from] move: Borrow');
				} else {
					this.add('-enditem', target, yourItem, '[silent]', '[from] move: Borrow');
				}
				if (yourItem) {
					source.setItem(yourItem);
					this.add('-item', source, yourItem, '[from] move: Borrow');
				} else {
					this.add('-enditem', source, myItem, '[silent]', '[from] move: Borrow');
				}
				source.removeVolatile('borrow');
			},
		},
		secondary: null,
		target: "normal",
		type: "Industrial",
		zMove: {boost: {spe: 2}},
		contestType: "Clever",
	},

	// Liquid
	wetfloor: {
		num: 1446,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Thing",
		name: "Wet Floor",
		pp: 20,
		priority: 0,
		flags: {reflectable: 1},
		sideCondition: 'wetfloor',
		condition: {
			// this is a side condition
			onSideStart(side) {
				this.add('-sidestart', side, 'move: Wet Floor');
			},
			onSwitchIn(pokemon) {
				if (pokemon.hasType('Liquid', true)) {
					this.add('-sideend', pokemon.side, 'move: Wet Floor', '[of] ' + pokemon);
					pokemon.side.removeSideCondition('wetfloor');
					return;
				} else if (pokemon.hasItem('yellowsafetyvest')) {
					return;
				} else { pokemon.trySetStatus('prone', this.effectState.source); }
			},
		},
		secondary: null,
		target: "foeSide",
		type: "Liquid",
		zMove: {boost: {def: 1}},
		contestType: "Clever",
	},
	pressurelock: {
		num: 1286,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		isNonstandard: "Thing",
		name: "Pressure Lock",
		pp: 20,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1},
		status: 'pressurized',
		secondary: null,
		target: "normal",
		type: "Liquid",
		zMove: {boost: {spd: 1}},
		contestType: "Cool",
	},
	refreshingcup: {
		num: 1135,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Thing",
		name: "Refreshing Cup",
		pp: 10,
		priority: 0,
		flags: {snatch: 1, heal: 1},
		heal: [1, 2],
		secondary: null,
		target: "normal",
		type: "Liquid",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Cute",
	},
	spill: {
		num: 1799,
		accuracy: 90,
		basePower: 50,
		category: "Special",
		isNonstandard: "Thing",
		name: "Spill",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 50,
			status: 'prone',
		},
		target: "normal",
		type: "Liquid",
		contestType: "Cute",
	},
	soppingslap: {
		num: 1679,
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		isNonstandard: "Thing",
		name: "Sopping Slap",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 50,
			boosts: {
				atk: -1,
			},
		},
		target: "normal",
		type: "Liquid",
		contestType: "Clever",
	},
	sudscape: {
		num: 581,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Thing",
		name: "Sudscape",
		pp: 10,
		priority: 0,
		flags: {nonsky: 1},
		terrain: 'sudscape',
		condition: {
			duration: 5,
			durationCallback(source, effect) {
				if (source?.hasItem('landscapingpermit')) {
					return 10;
				}
				return 5;
			},
			onSetStatus(status, target, source, effect) {
				if (target.isSemiInvulnerable()) return;
				if (target.ability === 'blind') return;
				if (status.id === 'prone') {
					if (this.blessedLand) {
						const stats: BoostID[] = [];
						const boost: SparseBoostsTable = {};
						const boost2: SparseBoostsTable = {};
						let statPlus: BoostID;
						for (statPlus in source.boosts) {
						// if (statPlus === 'accuracy' || statPlus === 'evasion') continue;
							if (source.boosts[statPlus] < 6) {
								stats.push(statPlus);
							}
						}
						const randomStat: BoostID | undefined = stats.length ? this.sample(stats) : undefined;
						if (randomStat) boost[randomStat] = -1;
						this.boost(boost);
						const randomStat2: BoostID | undefined = stats.length ? this.sample(stats) : undefined;
						if (randomStat2) boost2[randomStat2] = -1;
						this.boost(boost2);
					}
					return;
				}
				if (effect && ((effect as Move).status || effect.id === 'yawn')) {
					this.add('-activate', target, 'move: Sudscape');
				}
				return false;
			},
			onTryAddVolatile(status, target, source, effect) {
				if (target.isSemiInvulnerable()) return;
				if (status.id === 'confusion') {
					if (effect.effectType === 'Move' && !effect.secondaries) this.add('-activate', target, 'move: Sudscape');
					return null;
				}
			},
			onBasePowerPriority: 6,
			onBasePower(basePower, attacker, defender, move) {
				if (move.type === 'Liquid' && !defender.isSemiInvulnerable()) {
					this.debug('sudscape boost');
					return this.chainModify(1.2);
				}
			},
			onFieldStart(battle, source, effect) {
				if (effect?.effectType === 'Ability') {
					this.add('-fieldstart', 'move: Sudscape', '[from] ability: ' + effect, '[of] ' + source);
				} else {
					this.add('-fieldstart', 'move: Sudscape');
				}
			},
			onResidualOrder: 21,
			onResidualSubOrder: 2,
			onResidual(target) {
				if (target.status !== 'prone') target.cureStatus();
			},
			onFieldEnd(side) {
				this.add('-fieldend', 'move: Sudscape');
			},
		},
		secondary: null,
		target: "all",
		type: "Liquid",
		zMove: {boost: {spd: 1}},
		contestType: "Cute",
	},
	bubbleshield: {
		num: 596,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Thing",
		name: "Bubble Shield",
		pp: 10,
		priority: 4,
		flags: {},
		stallingMove: true,
		volatileStatus: 'bubbleshield',
		onPrepareHit(pokemon) {
			return !!this.queue.willAct() && this.runEvent('StallMove', pokemon);
		},
		onHit(pokemon) {
			pokemon.addVolatile('stall');
		},
		condition: {
			duration: 1,
			onStart(target) {
				this.add('-singleturn', target, 'move: Protect');
			},
			onTryHitPriority: 3,
			onTryHit(target, source, move) {
				if (!move.flags['protect']) {
					if (move.isZ || (move.isMax && !move.breaksProtect)) target.getMoveHitData(move).zBrokeProtect = true;
					return;
				}
				if (move.smartTarget) {
					move.smartTarget = false;
				} else {
					this.add('-activate', target, 'move: Protect');
				}
				const lockedmove = source.getVolatile('lockedmove');
				if (lockedmove) {
					// Outrage counter is reset
					if (source.volatiles['lockedmove'].duration === 2) {
						delete source.volatiles['lockedmove'];
					}
				}
				if (move.flags['contact']) {
					if (source.hasType('Fish')) {
						this.boost({atk: -1}, source, target, this.dex.getActiveMove('Bubble Shield'));
					} else {
						const typeMod = this.clampIntRange(source.runEffectiveness(this.dex.getActiveMove('Bubble Shield')), -6, 6);
						this.damage(source.baseMaxhp * Math.pow(2, typeMod) / 8, source, target);
					}
				}
				return this.NOT_FAIL;
			},
			onHit(target, source, move) {
				if (move.isZOrMaxPowered && move.flags['contact']) {
					if (source.hasType('Fish')) {
						this.boost({atk: -1}, source, target, this.dex.getActiveMove('bubbleshield'));
					} else {
						const typeMod = this.clampIntRange(source.runEffectiveness(this.dex.getActiveMove('bubbleshield')), -6, 6);
						this.damage(source.baseMaxhp * Math.pow(2, typeMod) / 8, source, target);
					}
				}
			},
		},
		secondary: null,
		target: "self",
		type: "Liquid",
		zMove: {boost: {def: 1}},
		contestType: "Tough",
	},
	spray: {
		num: 1119,
		accuracy: 100,
		basePower: 40,
		category: "Special",
		isNonstandard: "Thing",
		name: "Spray",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 100,
			boosts: {
				spe: -1,
			},
		},
		target: "allAdjacentFoes",
		type: "Liquid",
		contestType: "Beautiful",
	},
	alkalinesurge: {
		num: 1173,
		accuracy: 95,
		basePower: 75,
		category: "Special",
		isNonstandard: "Thing",
		name: "Alkaline Surge",
		ignoreImmunity: {'Liquid': true},
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onEffectiveness(typeMod, target, type) {
			if (type === 'Fish') return 1;
		},
		target: "normal",
		type: "Liquid",
		contestType: "Clever",
	},
	cascade: {
		num: 1126,
		accuracy: 85,
		basePower: 110,
		category: "Special",
		isNonstandard: "Thing",
		name: "Cascade",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 10,
			status: 'prone',
		},
		target: "allAdjacentFoes",
		type: "Liquid",
		contestType: "Beautiful",
	},
	spurt: {
		num: 1119,
		accuracy: 100,
		basePower: 40,
		category: "Physical",
		isNonstandard: "Thing",
		name: "Spurt",
		pp: 15,
		priority: 1,
		flags: {contact: 1, protect: 1, mirror: 1},
		target: "normal",
		type: "Liquid",
		contestType: "Clever",
	},
	lavaflow: {
		num: -5610,
		accuracy: 100,
		basePower: 90,
		category: "Physical",
		isNonstandard: "Thing",
		name: "Lava Flow",
		pp: 10,
		flags: {protect: 1, mirror: 1},
		onEffectiveness(typeMod, target, type, move) {
			return typeMod + this.dex.getEffectiveness('Temperature', type);
		},
		priority: 0,
		secondary: null,
		target: "normal",
		type: "Liquid",
		zMove: {basePower: 160},
		contestType: "Tough",
	},
	rootbeerblast: {
		num: -5610,
		accuracy: 90,
		basePower: 130,
		category: "Special",
		isNonstandard: "Thing",
		name: "Rootbeer Blast",
		pp: 5,
		flags: {protect: 1, mirror: 1, soda: 1},
		priority: 0,
		secondary: null,
		target: "normal",
		type: "Liquid",
		zMove: {basePower: 160},
		contestType: "Cute",
	},
	stickysituation: {
		num: 433,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Thing",
		name: "Sticky Situation",
		pp: 10,
		priority: 0,
		flags: {mirror: 1, soda: 1},
		pseudoWeather: 'stickysituation',
		condition: {
			duration: 5,
			onStart(target, source, effect) {
				this.add('-fieldstart', 'move: Sticky Situation', '[of] ' + source);
			},
			onFractionalPriority(priority, pokemon, target, move) {
				if (move.flags['soda']) {
					return 0.1;
				}
			},
			onBasePowerPriority: 6,
			onBasePower(basePower, attacker, defender, move) {
				if (move.flags['soda'] && !defender.isSemiInvulnerable()) {
					this.debug('soda boost');
					return this.chainModify(1.2);
				}
			},
			onEnd() {
				this.add('-fieldend', 'move: Sticky Situation');
			},
		},
		secondary: null,
		target: "all",
		type: "Fish",
		zMove: {boost: {accuracy: 1}},
		contestType: "Clever",
	},
	scrub: {
		num: 682,
		accuracy: 100,
		basePower: 55,
		category: "Physical",
		name: "Scrub",
		isNonstandard: "Thing",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, contact: 1},
		onBasePower(basePower, source, target) {
			if (target.hasType('Dirt')) {
				return this.chainModify(2);
			}
		},
		onHit(pokemon) {
			if (!pokemon.hasType('Dirt')) return;
			if (pokemon.addedType === 'Dirt') {
				if (!pokemon.addType('')) return false;
				this.add('-start', pokemon, 'typeadd', '', '[from] move: Scrub');
			} else {
				let types = pokemon.getTypes(true);
				types.splice(types.indexOf('Dirt'), 1);
				if (!types.length) types = ['???'];
				pokemon.setType(types);
				this.add('-start', pokemon, 'typechange', pokemon.types.join('/'), '[from] move: Scrub');
			}
		},
		secondary: null,
		target: "normal",
		type: "Liquid",
		contestType: "Clever",
	},
	empyreanspring: {
		num: 1135,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "ThingInf",
		name: "Empyrean Spring",
		pp: 3,
		priority: 0,
		flags: {snatch: 1, heal: 1},
		heal: [1, 1],
		onHit(target) {
			target.cureStatus();
			target.clearBoosts();
		},
		secondary: null,
		target: "normal",
		type: "Liquid",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Cute",
	},

	// Music
	earworm: {
		num: 250,
		accuracy: 85,
		basePower: 35,
		category: "Special",
		isNonstandard: "Thing",
		name: "Earworm",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		volatileStatus: 'partiallytrapped',
		songFlags: ['hurt'],
		secondary: null,
		target: "normal",
		type: "Music",
		contestType: "Cute",
	},
	hypnoticmelody: {
		num: 1213,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		isNonstandard: "Thing",
		name: "Hypnotic Melody",
		pp: 15,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1, authentic: 1},
		volatileStatus: 'hypnoticmelody',
		condition: {
			noCopy: true, // doesn't get copied by Baton Pass
			onStart(pokemon, source, effect) {
				if (!this.runEvent('Hypnotic Melody', pokemon, source)) {
					this.debug('Hypnotic Melody event failed');
					return false;
				}
				this.add('-start', pokemon, 'Hypnotic Melody');
			},
			onUpdate(pokemon) {
				if (this.effectState.source && !this.effectState.source.isActive && pokemon.volatiles['hypnoticmelody']) {
					this.debug('Removing Hypnotic Melody volatile on ' + pokemon);
					pokemon.removeVolatile('hypnoticmelody');
				}
			},
			onBeforeMovePriority: 2,
			onBeforeMove(pokemon, target, move) {
				this.add('-activate', pokemon, 'move: Hypnotic Melody', '[of] ' + this.effectState.source);
				if (this.randomChance(1, 3)) {
					this.add('cant', pokemon, 'Hypnotic Melody');
					return false;
				}
			},
			onEnd(pokemon) {
				this.add('-end', pokemon, 'Hypnotic Melody', '[silent]');
			},
		},
		secondary: null,
		target: "normal",
		type: "Music",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Beautiful",
	},
	arpeggio: {
		num: 3,
		accuracy: 95,
		basePower: 15,
		category: "Special",
		isNonstandard: "Thing",
		name: "Arpeggio",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		multihit: [2, 5],
		secondary: null,
		target: "normal",
		type: "Music",
		contestType: "Beautiful",
	},
	crescendo: {
		num: 1549,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Thing",
		name: "Crescendo",
		pp: 10,
		priority: 0,
		flags: {snatch: 1},
		boosts: {
			spa: 1,
		},
		songFlags: ['spaboost'],
		target: "self",
		type: "Music",
		contestType: "Clever",
	},
	accelerando: {
		num: 1519,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Thing",
		name: "Accelerando",
		pp: 10,
		priority: 0,
		flags: {snatch: 1},
		boosts: {
			spe: 1,
		},
		songFlags: ['speboost'],
		target: "self",
		type: "Music",
		contestType: "Clever",
	},
	diminuendo: {
		num: 1541,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Thing",
		name: "Diminuendo",
		pp: 10,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1, sound: 1, authentic: 1, mystery: 1},
		boosts: {
			spa: -1,
		},
		songFlags: ['spareduce'],
		target: "normal",
		type: "Music",
		contestType: "Clever",
	},
	lento: {
		num: 2341,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Thing",
		name: "Lento",
		pp: 10,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1, sound: 1, authentic: 1, mystery: 1},
		boosts: {
			spe: -1,
		},
		songFlags: ['nopriority'],
		target: "allAdjacentFoes",
		type: "Music",
		contestType: "Beautiful",
	},
	keychange: {
		num: 1111,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Thing",
		name: "Key Change",
		pp: 5,
		priority: 0,
		flags: {},
		songFlags: ['atkup', 'spaup'],
		target: "self",
		type: "Music",
		contestType: "Clever",
	},
	dacapo: {
		num: 1122,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Thing",
		name: "Da Capo",
		pp: 5,
		priority: 0,
		flags: {},
		onTryHit() {
			if (!this.field.isTerrain('mysticalsong')) return false;
		},
		onHit() {
			this.field.terrainState.duration = 5;
		},
		target: "self",
		type: "Music",
		contestType: "Clever",
	},
	accent: {
		num: 1250,
		accuracy: 95,
		basePower: 70,
		category: "Physical",
		isNonstandard: "Thing",
		name: "Accent",
		critRatio: 2,
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Music",
		contestType: "Clever",
	},
	glissando: {
		num: 1251,
		accuracy: 90,
		basePower: 80,
		category: "Special",
		isNonstandard: "Thing",
		name: "Glissando",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "allAdjacentFoes",
		type: "Music",
		contestType: "Cool",
	},
	harmoniouschord: {
		num: 1235,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Thing",
		name: "Harmonious Chord",
		pp: 10,
		priority: 0,
		flags: {snatch: 1, heal: 1},
		heal: [1, 2],
		secondary: null,
		songFlags: ['heal'],
		target: "normal",
		type: "Music",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Beautiful",
	},
	conduct: {
		num: 1118,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Thing",
		name: "Conduct",
		pp: 10,
		priority: 0,
		flags: {},
		onHit(target, source, effect) {
			const moves: MoveData[] = [];
			for (const id in Moves) {
				const move = Moves[id];
				if (move.realMove) continue;
				if (move.isZ || move.isMax || move.type !== 'Music' || move.isNonstandard !== 'Thing') continue;
				if (this.dex.moves.get(id).gen > this.gen) continue;
				if (move.name === 'Conduct') continue;
				moves.push(move);
			}
			let randomMove = '';
			if (moves.length) {
				moves.sort((a, b) => a.num! - b.num!);
				randomMove = this.sample(moves).name;
			}
			if (!randomMove) {
				return false;
			}
			this.actions.useMove(randomMove, target);
		},
		secondary: null,
		target: "self",
		type: "Music",
		contestType: "Clever",
	},
	mysticalsong: {
		num: 1581,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Thing",
		name: "Mystical Song",
		pp: 10,
		priority: 0,
		flags: {nonsky: 1},
		terrain: 'mysticalsong',
		condition: {
			duration: 5,
			durationCallback(source, effect) {
				if (source?.hasItem('landscapingpermit')) {
					return 10;
				}
				return 5;
			},
			onAfterMoveSecondary(target, source, move) {
				if (move.songFlags) {
					for (const flag of move.songFlags) {
						if (this.field.activeFlags.length && this.field.activeFlags.includes(flag)) continue;
						this.field.activeFlags.push(flag);
						this.hint("Mystical Song +: " + flag);
					}
					if (this.blessedLand) {
						const sflags = ['nopriority', 'nostatus', 'noprone', 'nobanished', 'noblinded', 'nopressurized', 'nofluctuant', 'nowounded', 'nodistanced', 'noinfected', 'novolatiles',
							'atkup', 'atkdown', 'defup', 'defdown', 'spaup', 'spadown', 'speup', 'spedown',
							'atkboost', 'atkreduce', 'defboost', 'defreduce', 'spaboost', 'spareduce', 'spdboost', 'spdreduce', 'speboost', 'spereduce',
							'hurt', 'heal'];
						const randomFlag2 = this.sample(sflags);
						if (this.field.activeFlags.length && this.field.activeFlags.includes(randomFlag2)) return;
						this.field.activeFlags.push(randomFlag2);
						this.hint("Mystical Song +: " + randomFlag2);
					}
				}
			},
			onTryHit(target, source, effect) {
				if (!this.field.activeFlags.length) return;
				if (this.field.activeFlags.includes('nopriority')) {
					if (['windy'].includes(target.effectiveWeather()) && effect.type === 'Weather' && effect.priority <= 1.5) return;
					if (effect && (effect.priority <= 0.5 || effect.target === 'self')) return;
					if (target.isSemiInvulnerable() || target.side === source.side) return;
					this.add('-activate', target, 'move: Mystical Song');
					return null;
				}
			},
			onSetStatus(status, target, source, effect) {
				if (!this.field.activeFlags.length) return;
				if (target.isSemiInvulnerable()) return;
				if (this.field.activeFlags.includes('nostatus')) {
					this.add('-activate', target, 'move: Mystical Song');
					return false;
				}
				if (status.id === 'prone' && this.field.activeFlags.includes('noprone')) {
					this.add('-activate', target, 'move: Mystical Song');
					return false;
				}
				if (status.id === 'banished' && this.field.activeFlags.includes('nobanished')) {
					this.add('-activate', target, 'move: Mystical Song');
					return false;
				}
				if (status.id === 'blinded' && this.field.activeFlags.includes('noblinded')) {
					this.add('-activate', target, 'move: Mystical Song');
					return false;
				}
				if (status.id === 'pressurized' && this.field.activeFlags.includes('nopressurized')) {
					this.add('-activate', target, 'move: Mystical Song');
					return false;
				}
				if (status.id === 'fluctuant' && this.field.activeFlags.includes('nofluctuant')) {
					this.add('-activate', target, 'move: Mystical Song');
					return false;
				}
				if (status.id === 'wounded' && this.field.activeFlags.includes('nowounded')) {
					this.add('-activate', target, 'move: Mystical Song');
					return false;
				}
				if (status.id === 'distanced' && this.field.activeFlags.includes('nodistanced')) {
					this.add('-activate', target, 'move: Mystical Song');
					return false;
				}
				if (status.id === 'infected' && this.field.activeFlags.includes('noinfected')) {
					this.add('-activate', target, 'move: Mystical Song');
					return false;
				}
			},
			onTryAddVolatile(status, target, source, effect) {
				if (!this.field.activeFlags.length) return;
				if (target.isSemiInvulnerable()) return;
				if (this.field.activeFlags.includes('novolatiles')) {
					this.add('-activate', target, 'move: Mystical Song');
					return null;
				}
			},
			onBasePowerPriority: 6,
			onBasePower(basePower, attacker, defender, move) {
				if (move.type === 'Music' && !defender.isSemiInvulnerable()) {
					this.debug('mystical song boost');
					return this.chainModify(1.1);
				}
			},
			onModifyAtkPriority: 9,
			onModifyAtk(atk, attacker, defender, move) {
				if (!this.field.activeFlags.length) return;
				if (this.field.activeFlags.includes('atkup')) {
					if (move.type === 'Music') {
						this.debug('mystical song boost');
						return this.chainModify(1.5);
					}
				}
				if (this.field.activeFlags.includes('atkdown')) {
					if (move.type !== 'Music') {
						this.debug('mystical song reduce');
						return this.chainModify(0.5);
					}
				}
			},
			onModifyDefPriority: 9,
			onModifyDef(def, pokemon) {
				if (!this.field.activeFlags.length) return;
				if (this.field.activeFlags.includes('defup')) {
					if (pokemon.hasType('Music', true) || pokemon.hasAbility('Landscape Blessing')) {
						this.debug('mystical song boost');
						return this.chainModify(1.5);
					}
				}
				if (this.field.activeFlags.includes('defdown')) {
					if (!pokemon.hasType('Music', true) && !pokemon.hasAbility('Landscape Blessing')) {
						this.debug('mystical song reduce');
						return this.chainModify(0.5);
					}
				}
			},
			onModifySpAPriority: 9,
			onModifySpA(atk, attacker, defender, move) {
				if (!this.field.activeFlags.length) return;
				if (this.field.activeFlags.includes('spaup')) {
					if (move.type === 'Music') {
						this.debug('mystical song boost');
						return this.chainModify(1.5);
					}
				}
				if (this.field.activeFlags.includes('spadown')) {
					if (move.type !== 'Music') {
						this.debug('mystical song reduce');
						return this.chainModify(0.5);
					}
				}
			},
			onModifySpDPriority: 9,
			onModifySpD(spd, pokemon) {
				if (!this.field.activeFlags.length) return;
				if (this.field.activeFlags.includes('spdup')) {
					if (pokemon.hasType('Music', true) || pokemon.hasAbility('Landscape Blessing')) {
						this.debug('mystical song boost');
						return this.chainModify(1.5);
					}
				}
				if (this.field.activeFlags.includes('spddown') && !pokemon.hasAbility('Landscape Blessing')) {
					if (!pokemon.hasType('Music', true)) {
						this.debug('mystical song reduce');
						return this.chainModify(0.5);
					}
				}
			},
			onModifySpe(spe, pokemon) {
				if (!this.field.activeFlags.length) return;
				if (this.field.activeFlags.includes('speup')) {
					if (pokemon.hasType('Music', true) || pokemon.hasAbility('Landscape Blessing')) {
						this.debug('mystical song boost');
						return this.chainModify(1.5);
					}
				}
				if (this.field.activeFlags.includes('spedown')) {
					if (!pokemon.hasType('Music', true) && !pokemon.hasAbility('Landscape Blessing')) {
						this.debug('mystical song reduce');
						return this.chainModify(0.5);
					}
				}
			},
			onFieldResidual() {
				if (!this.field.activeFlags.length) return;
				for (const side of this.sides) {
					for (const ally of side.active) {
						if (this.field.activeFlags.length && this.field.activeFlags.includes('atkboost')) {
							if (ally.hasType('Music', true) || ally.hasAbility('Landscape Blessing')) {
								this.boost({atk: 1}, ally);
							}
						}
						if (this.field.activeFlags.length && this.field.activeFlags.includes('defboost')) {
							if (ally.hasType('Music', true) || ally.hasAbility('Landscape Blessing')) {
								this.boost({def: 1}, ally);
							}
						}
						if (this.field.activeFlags.length && this.field.activeFlags.includes('spaboost')) {
							if (ally.hasType('Music', true) || ally.hasAbility('Landscape Blessing')) {
								this.boost({spa: 1}, ally);
							}
						}
						if (this.field.activeFlags.length && this.field.activeFlags.includes('spdboost')) {
							if (ally.hasType('Music', true) || ally.hasAbility('Landscape Blessing')) {
								this.boost({spd: 1}, ally);
							}
						}
						if (this.field.activeFlags.length && this.field.activeFlags.includes('speboost')) {
							if (ally.hasType('Music', true) || ally.hasAbility('Landscape Blessing')) {
								this.boost({spe: 1}, ally);
							}
						}
						if (this.field.activeFlags.length && this.field.activeFlags.includes('atkreduce')) {
							if (!ally.hasType('Music', true) && !ally.hasAbility('Landscape Blessing')) {
								this.boost({atk: -1}, ally);
							}
						}
						if (this.field.activeFlags.length && this.field.activeFlags.includes('defreduce')) {
							if (!ally.hasType('Music', true) && !ally.hasAbility('Landscape Blessing')) {
								this.boost({def: -1}, ally);
							}
						}
						if (this.field.activeFlags.length && this.field.activeFlags.includes('spareduce')) {
							if (!ally.hasType('Music', true) && !ally.hasAbility('Landscape Blessing')) {
								this.boost({spa: -1}, ally);
							}
						}
						if (this.field.activeFlags.length && this.field.activeFlags.includes('spdreduce')) {
							if (!ally.hasType('Music', true) && !ally.hasAbility('Landscape Blessing')) {
								this.boost({spd: -1}, ally);
							}
						}
						if (this.field.activeFlags.length && this.field.activeFlags.includes('spereduce')) {
							if (!ally.hasType('Music', true) && !ally.hasAbility('Landscape Blessing')) {
								this.boost({spe: -1}, ally);
							}
						}
						if (this.field.activeFlags.length && this.field.activeFlags.includes('heal')) {
							if (ally.hasType('Music', true) || ally.hasAbility('Landscape Blessing')) {
								this.heal(ally.baseMaxhp / 8, ally);
							}
						}
						if (this.field.activeFlags.length && this.field.activeFlags.includes('hurt')) {
							if (!ally.hasType('Music', true) && !ally.hasAbility('Landscape Blessing')) {
								this.directDamage(ally.baseMaxhp / 8, ally);
							}
						}
					}
				}
			},
			onFieldStart(battle, source, effect) {
				this.field.activeFlags = [];
				if (effect?.effectType === 'Ability') {
					this.add('-fieldstart', 'move: Mystical Song', '[from] ability: ' + effect, '[of] ' + source);
				} else {
					this.add('-fieldstart', 'move: Mystical Song');
				}
			},
			onResidualOrder: 21,
			onResidualSubOrder: 2,
			onFieldEnd(side) {
				this.field.activeFlags = [];
				this.add('-fieldend', 'move: Mystical Song');
			},
		},
		secondary: null,
		target: "all",
		type: "Music",
		zMove: {boost: {spd: 1}},
		contestType: "Beautiful",
	},
	jamminbasssolo: {
		num: 1235,
		accuracy: 100,
		basePower: 80,
		category: "Special",
		isNonstandard: "Thing",
		name: "Jammin' Bass Solo",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 10,
			self: {
				boosts: {
					spd: 1,
				},
			},
		},
		songFlags: ['spdboost', 'heal'],
		target: "normal",
		type: "Music",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Cool",
	},
	slammindrumsolo: {
		num: 1235,
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		isNonstandard: "Thing",
		name: "Slammin' Drum Solo",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 10,
			self: {
				boosts: {
					spe: 1,
				},
			},
		},
		songFlags: ['speboost', 'defboost'],
		target: "normal",
		type: "Music",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Cool",
	},
	whamminkeyboardsolo: {
		num: 1235,
		accuracy: 100,
		basePower: 80,
		category: "Special",
		isNonstandard: "Thing",
		name: "Whammin' Keyboard Solo",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 10,
			self: {
				boosts: {
					spa: 1,
				},
			},
		},
		songFlags: ['spaboost', 'atkboost'],
		target: "normal",
		type: "Music",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Cool",
	},
	volumeup: {
		num: 501,
		accuracy: 90,
		basePower: 0,
		category: "Status",
		isNonstandard: "Thing",
		name: "Volume Up",
		pp: 15,
		priority: 0,
		flags: {},
		boosts: {
			spa: 2,
		},
		secondary: null,
		target: "normal",
		type: "Music",
		zMove: {boost: {spd: 1}},
	},
	volumedown: {
		num: 502,
		accuracy: 90,
		basePower: 0,
		category: "Status",
		isNonstandard: "Thing",
		name: "Volume Down",
		pp: 15,
		priority: 0,
		flags: {},
		boosts: {
			spa: -2,
		},
		secondary: null,
		target: "normal",
		type: "Music",
		zMove: {boost: {spd: 1}},
	},
	augment: {
		num: 503,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Thing",
		name: "Augment",
		pp: 5,
		priority: 0,
		flags: {recharge: 1},
		songFlags: ['hurt'],
		self: {
			volatileStatus: 'mustrecharge',
		},
		boosts: {
			atk: 1,
			def: 1,
			spa: 1,
			spd: 1,
			spe: 1,
		},
		secondary: null,
		target: "self",
		type: "Music",
		zMove: {boost: {spa: 2}},
		contestType: "cool",
	},
	diminish: {
		num: 504,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Thing",
		name: "Diminish",
		pp: 5,
		priority: 0,
		flags: {recharge: 1},
		songFlags: ['heal'],
		self: {
			volatileStatus: 'mustrecharge',
		},
		boosts: {
			atk: -1,
			def: -1,
			spa: -1,
			spd: -1,
			spe: -1,
		},
		secondary: null,
		target: "normal",
		type: "Music",
		zMove: {boost: {spa: 2}},
		contestType: "Clever",
	},
	major: {
		num: 501,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Thing",
		name: "Major",
		pp: 15,
		priority: 0,
		flags: {},
		songFlags: ['speboost'],
		boosts: {
			atk: 1,
			spa: 1,
		},
		secondary: null,
		target: "self",
		type: "Music",
		zMove: {boost: {spa: 2}},
		contestType: "Beautiful",
	},
	minor: {
		num: 502,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Thing",
		name: "Minor",
		pp: 15,
		priority: 0,
		flags: {},
		songFlags: ['spereduce'],
		boosts: {
			atk: -1,
			spa: -1,
		},
		secondary: null,
		target: "normal",
		type: "Music",
		zMove: {boost: {spa: 2}},
		contestType: "Beautiful",
	},
	leitmotif: {
		num: 1538,
		accuracy: 100,
		basePower: 75,
		category: "Special",
		isNonstandard: "ThingInf",
		name: "Leitmotif",
		pp: 3,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onModifyType(move, pokemon) {
			move.type = this.dex.moves.get(pokemon.moveSlots[0].id).type;
		},
		onModifyMove(move, pokemon) {
			const sf: string[] = [];
			for (let i = 0; i < 4; i++) {
				const move = this.dex.moves.get(pokemon.moveSlots[i].id);
				if (!move.songFlags) continue;
				for (const flag of move.songFlags) {
					if (!sf.includes(flag)) sf.push(flag);
				}
			}
			move.songFlags = sf;

			if (pokemon.species.name === 'Sylphonie-Physical') {
				move.category = 'Physical';
			}
		},
		onHit() {
			if (this.field.isTerrain('mysticalsong')) { this.field.terrainState.duration = 5; }
		},
		secondary: null,
		target: "normal",
		type: "???",
		contestType: "Beautiful",
	},

	// Night
	stealthstrike: {
		num: -277,
		accuracy: 100,
		basePower: 75,
		category: "Physical",
		isNonstandard: "Thing",
		name: "Stealth Strike",
		pp: 15,
		priority: 0,
		flags: {bite: 1, contact: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 30,
			volatileStatus: 'flinch',
		},
		target: "normal",
		type: "Night",
		contestType: "Clever",
	},
	shootingstar: {
		num: 1789,
		accuracy: 95,
		basePower: 80,
		category: "Physical",
		isNonstandard: "Thing",
		name: "Shooting Star",
		pp: 15,
		priority: 0,
		useSourceSpeedAsOffensive: true,
		flags: {contact: 1, protect: 1, mirror: 1},
		target: "normal",
		type: "Night",
		contestType: "Beautiful",
	},
	nightmode: {
		num: 1601,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		isNonstandard: "Thing",
		name: "Night Mode",
		pp: 20,
		priority: 0,
		flags: {},
		onHit(target) {
			if (target.getTypes().join() === 'Night' || !target.setType('Night')) {
				// Night should animate even when it fails.
				// Returning false would suppress the animation.
				this.add('-fail', target);
				return null;
			}
			this.add('-start', target, 'typechange', 'Night');
		},
		secondary: null,
		target: "normal",
		type: "Night",
		zMove: {boost: {spa: 1}},
		contestType: "Cool",
	},
	moonbeam: {
		num: 250,
		accuracy: 95,
		basePower: 80,
		category: "Special",
		isNonstandard: "Thing",
		name: "Moonbeam",
		pp: 20,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 30,
			boosts: {
				spa: -1,
			},
		},
		target: "normal",
		type: "Night",
		contestType: "Beautiful",
	},
	nightfall: {
		num: 1501,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Thing",
		name: "Nightfall",
		pp: 5,
		priority: 0,
		flags: {},
		weather: 'Nighttime',
		secondary: null,
		target: "all",
		type: "Night",
		zMove: {boost: {evasion: 1}},
		contestType: "Beautiful",
	},
	stellaromen: {
		num: 1601,
		accuracy: 110,
		basePower: 50,
		category: "Special",
		isNonstandard: "ThingInf",
		name: "Stellar Omen",
		pp: 3,
		priority: 0,
		flags: {},
		onModifyMove(move, pokemon, target) {
			const nature = target?.getNature().name;

			switch (nature) {
			case ('Brave'):
			case ('Naughty'):
				move.channelling = 'Aries';
				break;
			case ('Bold'):
			case ('Docile'):
				move.channelling = 'Taurus';
				break;
			case ('Quirky'):
			case ('Rash'):
				move.channelling = 'Gemini';
				break;
			case ('Modest'):
			case ('Timid'):
				move.channelling = 'Cancer';
				break;
			case ('Hasty'):
			case ('Lax'):
				move.channelling = 'Leo';
				break;
			case ('Quiet'):
			case ('Careful'):
			case ('Serious'):
				move.channelling = 'Virgo';
				break;
			case ('Calm'):
			case ('Bashful'):
				move.channelling = 'Libra';
				break;
			case ('Sassy'):
			case ('Lonely'):
				move.channelling = 'Scorpio';
				break;
			case ('Impish'):
			case ('Jolly'):
				move.channelling = 'Sagittarius';
				break;
			case ('Adamant'):
			case ('Hardy'):
				move.channelling = 'Capricorn';
				break;
			case ('Naive'):
			case ('Mild'):
				move.channelling = 'Aquarius';
				break;
			case ('Relaxed'):
			case ('Gentle'):
				move.channelling = 'Pisces';
				break;
			default:
				move.channelling = 'Libra';
			}
		},
		onUseMoveMessage(pokemon, target, move) {
			this.hint(`Channelling ${move.channelling}!`);
		},
		onTryMove(pokemon, target, thisMove) {
			if (!pokemon.isActive || pokemon.baseSpecies.baseSpecies !== 'Oraxeed' || pokemon.transformed) {
				this.debug('not oraxeed');
			} else {
				if (!pokemon.hp) return;
				switch (thisMove.channelling) {
				case ('Aries'):
					if (pokemon.species.id !== 'oraxeedaries') {
						pokemon.formeChange('Oraxeed-Aries', this.effect, false, '[msg]');
					}
					break;
				case ('Taurus'):
					if (pokemon.species.id !== 'oraxeedtaurus') {
						pokemon.formeChange('Oraxeed-Taurus', this.effect, false, '[msg]');
					}
					break;
				case ('Gemini'):
					if (pokemon.species.id !== 'oraxeedgemini') {
						pokemon.formeChange('Oraxeed-Gemini', this.effect, false, '[msg]');
					}
					break;
				case ('Cancer'):
					if (pokemon.species.id !== 'oraxeedcancer') {
						pokemon.formeChange('Oraxeed-Cancer', this.effect, false, '[msg]');
					}
					break;
				case ('Leo'):
					if (pokemon.species.id !== 'oraxeedleo') {
						pokemon.formeChange('Oraxeed-Leo', this.effect, false, '[msg]');
					}
					break;
				case ('Virgo'):
					if (pokemon.species.id !== 'oraxeedvirgo') {
						pokemon.formeChange('Oraxeed-Virgo', this.effect, false, '[msg]');
					}
					break;
				case ('Libra'):
					if (pokemon.species.id !== 'oraxeedlibra') {
						pokemon.formeChange('Oraxeed-Libra', this.effect, false, '[msg]');
					}
					break;
				case ('Scorpio'):
					if (pokemon.species.id !== 'oraxeedscorpio') {
						pokemon.formeChange('Oraxeed-Scorpio', this.effect, false, '[msg]');
					}
					break;
				case ('Sagittarius'):
					if (pokemon.species.id !== 'oraxeedsagittarius') {
						pokemon.formeChange('Oraxeed-Sagittarius', this.effect, false, '[msg]');
					}
					break;
				case ('Capricorn'):
					if (pokemon.species.id !== 'oraxeedcapricorn') {
						pokemon.formeChange('Oraxeed-Capricorn', this.effect, false, '[msg]');
					}
					break;
				case ('Aquarius'):
					if (pokemon.species.id !== 'oraxeedaquarius') {
						pokemon.formeChange('Oraxeed-Aquarius', this.effect, false, '[msg]');
					}
					break;
				case ('Pisces'):
					if (pokemon.species.id !== 'oraxeedpisces') {
						pokemon.formeChange('Oraxeed-Pisces', this.effect, false, '[msg]');
					}
					break;
				}
			}
		},
		onHit(target, source, thisMove) {
			if (!target.hp) return;

			switch (thisMove.channelling) {
			case ('Aries'):
				this.boost({atk: 6}, target);
				target.addVolatile('perishsong');
				target.volatiles['perishsong'].duration = 2;
				break;
			case ('Taurus'):
				target.cureStatus();
				target.addVolatile('trapped');
				break;
			case ('Gemini'):
				const possibleTypes = [];
				const skippedTypes = ['Bug', 'Dark', 'Dragon', 'Electric', 'Fairy', 'Fighting', 'Fire', 'Flying', 'Ghost', 'Grass', 'Ground', 'Ice', 'Normal', 'Poison', 'Psychic', 'Rock', 'Steel', 'Water', 'Infinity'];
				for (const type of this.dex.types.names()) {
					if (skippedTypes.includes(type)) continue;
					possibleTypes.push(type);
				}
				if (!possibleTypes.length) return false;
				while (possibleTypes.length > 2) {
					possibleTypes.splice(Math.floor(Math.random() * possibleTypes.length), 1);
				}
				this.add('-start', target, 'typechange', possibleTypes.join('/'), '[from] move: Stellar Omen');
				target.setType(possibleTypes);
				target.setStatus('fluctuant');
				break;
			case ('Cancer'):
				if (!target.volatiles['pause'] && !target.volatiles['fastforward']) {
					const action = this.queue.willMove(target);
					target.addVolatile('fastforwarding');
					if (target.volatiles['fastforwarding']) {
						if (action) {
							this.queue.cancelMove(target);
							this.add('-activate', target, 'move: Fast Forward');
							this.actions.useMove(action.move, target);
						}

						if (target.volatiles['dynamax']) return false;
						const bannedMoves = ['openturn', 'fastforward', 'pause', 'replay'];
						const moves = [];
						for (const moveSlot of target.moveSlots) {
							const moveid = moveSlot.id;
							if (!moveid) continue;
							const move = this.dex.moves.get(moveid);
							if (bannedMoves.includes(moveid) || move.flags['charge'] || move.flags['recharge'] || (move.isZ && move.basePower !== 1)) {
								continue;
							}
							moves.push(moveid);
						}

						for (let i = 0; i < 2; i++) {
							let randomMove = '';
							if (moves.length) randomMove = this.sample(moves);
							if (!randomMove) break;
							this.actions.useMove(randomMove, target);
						}

						target.removeVolatile('fastforwarding');
						target.addVolatile('fastforward');
					}
				}
				target.setStatus('banished');
				break;
			case ('Leo'):
				target.setAbility('colossal');
				target.setStatus('prone');
				break;
			case ('Virgo'):
				target.side.addSideCondition('voidtrap');
				target.addVolatile('pause');
				target.addVolatile('calibration');
				break;
			case ('Libra'):
				target.setAbility('inert');
				target.clearBoosts();
				break;
			case ('Scorpio'):
				const items = Object.keys(this.dex.data.Items);

				if (!target.item) {
					if (target.hp <= target.maxhp / 4 || target.maxhp === 1) { // Shedinja clause
						return false;
					}
					this.directDamage(target.maxhp / 4);
				} else {
					const old_item = target.getItem();
					target.setItem('');
					target.lastItem = old_item.id;
					target.usedItemThisTurn = true;
				}

				let item = '';
				do {
					item = this.sample(items);
				} while (this.dex.data.Items[item].isNonstandard !== 'Thing');

				this.add('-item', target, this.dex.items.get(item), '[from] move: Transmute');
				target.setItem(item);
				target.addVolatile('pheromonemark');
				break;
			case ('Sagittarius'):
				target.setStatus('distanced');
				this.runEvent('DragOut', source, target, thisMove);
				target.forceSwitchFlag = true;
				break;
			case ('Capricorn'):
				this.field.setWeather('timedilation');
				this.field.addPseudoWeather('timeloop');
				break;
			case ('Aquarius'):
				this.field.setTerrain('sudscape');
				target.side.addSideCondition('timecapsule');
				break;
			case ('Pisces'):
				target.addVolatile('hypnoticmelody');
				let statName = 'atk';
				let bestStat = 0;
				let s: StatIDExceptHP;
				for (s in target.storedStats) {
					if (target.storedStats[s] > bestStat) {
						statName = s;
						bestStat = target.storedStats[s];
					}
				}
				this.boost({[statName]: 1}, target);
				this.boost({accuracy: -1}, target);
				break;
			}
		},
		secondary: null,
		target: "normal",
		type: "Night",
		zMove: {boost: {spa: 1}},
		contestType: "Clever",
	},
	trample: {
		num: 1484,
		accuracy: 85,
		basePower: 0,
		basePowerCallback(pokemon, target) {
			const targetWeight = target.getWeight();
			const pokemonWeight = pokemon.getWeight();
			if (pokemonWeight > targetWeight * 5) {
				return 120;
			}
			if (pokemonWeight > targetWeight * 4) {
				return 100;
			}
			if (pokemonWeight > targetWeight * 3) {
				return 80;
			}
			if (pokemonWeight > targetWeight * 2) {
				return 60;
			}
			return 40;
		},
		category: "Physical",
		isNonstandard: "Thing",
		name: "Trample",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, nonsky: 1},
		onTryHit(target, pokemon, move) {
			if (target.volatiles['dynamax']) {
				this.add('-fail', pokemon, 'Dynamax');
				this.attrLastMove('[still]');
				return null;
			}
		},
		secondary: null,
		target: "normal",
		type: "Night",
		zMove: {basePower: 160},
		maxMove: {basePower: 130},
		contestType: "Tough",
	},
	shadowlance: {
		num: 1502,
		accuracy: 80,
		basePower: 100,
		category: "Physical",
		isNonstandard: "Thing",
		name: "Shadow Lance",
		pp: 5,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		critRatio: 2,
		secondary: null,
		target: "normal",
		type: "Night",
		contestType: "Tough",
	},
	starrywave: {
		num: -257,
		accuracy: 110,
		basePower: 75,
		category: "Special",
		isNonstandard: "Thing",
		name: "Starry Wave",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 10,
			status: 'blinded',
		},
		target: "allAdjacentFoes",
		type: "Night",
		contestType: "Beautiful",
	},
	shadowmark: {
		num: 193,
		accuracy: 90,
		basePower: 0,
		category: "Status",
		isNonstandard: "Thing",
		name: "Shadow Mark",
		pp: 5,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1, authentic: 1},
		volatileStatus: 'shadowmark',
		onTryHit(target) {
			if (target.volatiles['shadowmark']) return false;
		},
		condition: {
			noCopy: true,
			duration: 2,
			onStart(pokemon) {
				this.add('-start', pokemon, 'Shadow Mark');
			},
			onSourceModifyDamage(damage, source, target, move) {
				if (source.hasType('Night', true)) return this.chainModify(2);
			},
			onEnd(pokemon) {
				this.add('-end', pokemon, 'Shadow Mark', '[silent]');
			},
		},
		secondary: null,
		target: "normal",
		type: "Night",
		zMove: {effect: 'crit2'},
		contestType: "Tough",
	},
	pitchblack: {
		num: 28,
		accuracy: 90,
		basePower: 0,
		category: "Status",
		name: "Pitch Black",
		isNonstandard: "Thing",
		pp: 10,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1},
		boosts: {
			accuracy: -2,
		},
		secondary: null,
		target: "normal",
		type: "Night",
		zMove: {boost: {evasion: 1}},
		contestType: "Tough",
	},
	naptime: {
		num: 284,
		accuracy: 50,
		basePower: 0,
		isNonstandard: "Thing",
		category: "Status",
		name: "Naptime",
		pp: 10,
		priority: 0,
		flags: {},
		onModifyMove(move, pokemon, target) {
			if (this.field.isWeather('nighttime') && !target?.hasItem('cowboyhat')) {
				move.accuracy = 100;
			}
		},
		onTryHit(target) {
			if (target.volatiles['naptime']) return false;
		},
		onHit(pokemon) {
			pokemon.trySetStatus('prone');
		},
		condition: {
			noCopy: true,
			duration: 2,
			onStart(pokemon, source, effect) {
				this.add('-start', pokemon, 'Naptime');
			},
			onBeforeMovePriority: 11,
			onBeforeMove(pokemon, target, move) {
				this.add('cant', pokemon, 'Naptime');
				pokemon.removeVolatile('naptime');
				return false;
			},
			onEnd(pokemon) {
				this.add('-end', pokemon, 'Naptime', '[silent]');
			},
		},
		volatileStatus: 'naptime',
		secondary: null,
		target: "normal",
		type: "Night",
		contestType: "Cute",
	},
	disorient: {
		num: 284,
		accuracy: 80,
		basePower: 0,
		isNonstandard: "Thing",
		category: "Status",
		name: "Disorient",
		pp: 5,
		priority: 5,
		flags: {},
		onModifyMove(move, pokemon, target) {
			if (this.field.isWeather('nighttime') && !target?.hasItem('cowboyhat')) {
				move.accuracy = true;
			}
		},
		onTryHit(target) {
			if (target.volatiles['disorient']) return false;
		},
		condition: {
			noCopy: true,
			duration: 1,
			onStart(target, source) {
				this.add('-start', target, 'move: Disorient');
			},
			onSourceAccuracy(accuracy, target, source, move) {
				if (target !== source) return 50;
				return accuracy;
			},
			onRedirectTarget(target, source, source2, move) {
				const potentialTargets: Pokemon[] = [];
				for (const foe of source.foes()) {
					if (this.validTarget(foe, source, move.target)) {
						potentialTargets.push(foe);
					}
				}
				for (const ally of source.allies()) {
					if (this.validTarget(ally, source, move.target)) {
						potentialTargets.push(ally);
					}
				}
				const newTarget: Pokemon | undefined = potentialTargets.length ? this.sample(potentialTargets) : undefined;
				this.debug("Disorient redirected target of move");
				return newTarget;
			},
			onEnd(pokemon) {
				this.add('-end', pokemon, 'move: Disorient', '[silent]');
			},
		},
		volatileStatus: 'disorient',
		secondary: null,
		target: "normal",
		type: "Night",
		contestType: "Clever",
	},

	// No
	banish: {
		num: 147,
		accuracy: 70,
		basePower: 0,
		category: "Status",
		isNonstandard: "Thing",
		name: "Banish",
		pp: 15,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1},
		status: 'banished',
		secondary: null,
		target: "normal",
		type: "No",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Cool",
	},
	voidscream: {
		num: 173,
		accuracy: 90,
		basePower: 30,
		category: "Special",
		isNonstandard: "Thing",
		name: "Void Scream",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1, sound: 1, authentic: 1},
		banishedUsable: true,
		onBasePower(basePower, pokemon) {
			if (pokemon.status === 'banished') {
				return this.chainModify(2);
			}
		},
		secondary: {
			chance: 40,
			volatileStatus: 'flinch',
		},
		target: "normal",
		type: "No",
		contestType: "Tough",
	},
	voidpunch: {
		num: 8,
		accuracy: 100,
		basePower: 75,
		category: "Physical",
		name: "Void Punch",
		isNonstandard: "Thing",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, punch: 1},
		secondary: {
			chance: 10,
			status: 'banished',
		},
		target: "normal",
		type: "No",
		contestType: "Clever",
	},
	noescape: {
		num: 8,
		accuracy: 100,
		basePower: 50,
		hitsBanished: true,
		category: "Physical",
		name: "No Escape",
		isNonstandard: "Thing",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, punch: 1},
		onHit(target) {
			if (target.status === 'banished') {
				target.cureStatus();
			}
		},
		onModifyMove(move, pokemon, target) {
			if (target?.status === 'banished') {
				move.accuracy = true;
			}
		},
		target: "normal",
		type: "No",
		contestType: "Tough",
	},
	nullland: {
		num: 581,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Thing",
		name: "Null Land",
		pp: 10,
		priority: 0,
		flags: {nonsky: 1},
		terrain: 'nullland',
		condition: {
			duration: 5,
			durationCallback(source, effect) {
				if (source?.hasItem('landscapingpermit')) {
					return 10;
				}
				return 5;
			},
			onStart() {
				this.effectState.doubleinversion = false;
			},
			onNegateImmunity: false,
			onEffectivenessPriority: 1,
			onEffectiveness(typeMod, target, type, move) {
				if (this.blessedLand && this.effectState.doubleinversion) return typeMod;
				if (move && !this.dex.getImmunity(move, type)) return 1;
				return -typeMod;
			},
			onModifyMovePriority: -5,
			onModifyMove(move) {
				if (this.effectState.doubleinversion) return;
				if (!move.ignoreImmunity) move.ignoreImmunity = {};
				if (move.ignoreImmunity !== true) {
					for (const type in this.dex.data.TypeChart) {
						move.ignoreImmunity[type] = true;
					}
				}
			},
			onAfterMoveSecondary(target, source, move) {
				if (this.blessedLand && target.runEffectiveness(move) > 0) {
					this.effectState.doubleinversion = !this.effectState.doubleinversion;
				}
			},
			onBasePowerPriority: 6,
			onBasePower(basePower, attacker, defender, move) {
				if (move.type === 'No' && !defender.isSemiInvulnerable()) {
					this.debug('null land boost');
					return this.chainModify(1.2);
				}
			},
			onFieldStart(battle, source, effect) {
				if (effect?.effectType === 'Ability') {
					this.add('-fieldstart', 'move: Null Land', '[from] ability: ' + effect, '[of] ' + source);
				} else {
					this.add('-fieldstart', 'move: Null Land');
				}
			},
			onResidualOrder: 21,
			onResidualSubOrder: 2,
			onFieldEnd(side) {
				this.add('-fieldend', 'move: Null Land');
			},
		},
		secondary: null,
		target: "all",
		type: "No",
		zMove: {boost: {spd: 1}},
		contestType: "Cute",
	},
	voidtrap: {
		num: 1447,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Thing",
		name: "Void Trap",
		pp: 20,
		priority: 0,
		flags: {reflectable: 1},
		sideCondition: 'voidtrap',
		condition: {
			// this is a side condition
			onSideStart(side) {
				this.add('-sidestart', side, 'move: Void Trap');
			},
			onSwitchIn(pokemon) {
				if (pokemon.hasItem('yellowsafetyvest')) return;
				else pokemon.trySetStatus('banished', this.effectState.source);
				this.add('-sideend', pokemon.side, 'move: Void Trap', '[of] ' + pokemon);
				pokemon.side.removeSideCondition('voidtrap');
			},
		},
		secondary: null,
		target: "foeSide",
		type: "No",
		zMove: {boost: {def: 1}},
		contestType: "Clever",
	},
	poweroff: {
		num: 504,
		accuracy: 50,
		basePower: 0,
		category: "Status",
		isNonstandard: "Thing",
		name: "Power Off",
		pp: 5,
		priority: 1,
		flags: {protect: 1, reflectable: 1, mirror: 1},
		status: 'banished',
		secondary: null,
		target: "normal",
		type: "No",
		zMove: {effect: 'clearnegativeboost'},
	},
	dematerialize: {
		num: 329,
		accuracy: 20,
		basePower: 0,
		category: "Special",
		isNonstandard: "Thing",
		name: "Dematerialize",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		ohko: true,
		target: "normal",
		type: "No",
		zMove: {basePower: 180},
		maxMove: {basePower: 130},
		contestType: "Beautiful",
	},
	clipthrough: {
		num: 1344,
		accuracy: 85,
		basePower: 130,
		category: "Physical",
		isNonstandard: "Thing",
		name: "Clip Through",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		recoil: [33, 100],
		target: "normal",
		type: "No",
		contestType: "Clever",
	},
	whirlwindofbones: {
		num: 541,
		accuracy: 90,
		basePower: 25,
		category: "Special",
		isNonstandard: "Thing",
		name: "Whirlwind of Bones",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		multihit: [2, 5],
		secondary: null,
		target: "allAdjacentFoes",
		type: "No",
		zMove: {basePower: 140},
		maxMove: {basePower: 130},
		contestType: "Tough",
	},
	corruption: {
		num: 1344,
		accuracy: 75,
		basePower: 120,
		category: "Special",
		isNonstandard: "Thing",
		name: "Corruption",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		target: "normal",
		type: "No",
		contestType: "Tough",
	},
	whispersindarkness: {
		num: 1344,
		accuracy: 120,
		basePower: 20,
		category: "Special",
		isNonstandard: "Thing",
		name: "Whispers in Darkness",
		pp: 20,
		priority: 0,
		flags: {protect: 1, mirror: 1, sound: 1, authentic: 1},
		banishedUsable: true,
		volatileStatus: 'whispersindarkness',
		condition: {
			noCopy: true,
			duration: 2,
			onStart(pokemon) {
				this.add('-start', pokemon, 'Whispers in Darkness');
			},
			onSourceModifyDamage(damage, source, target, move) {
				if (this.effectState.duration === 1) return this.chainModify(2);
			},
			onEnd(pokemon) {
				this.add('-end', pokemon, 'Whispers in Darkness', '[silent]');
			},
		},
		target: "normal",
		type: "No",
		contestType: "Clever",
	},
	noticesyourstuff: {
		num: 168,
		accuracy: 110,
		basePower: 90,
		category: "Special",
		name: "Notices your stuff",
		isNonstandard: "ThingInf",
		pp: 3,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onTryHit(source, target, move) {
			if (source.item || source.volatiles['gem'] || !target.item) {
				return false;
			}
		},
		onAfterHit(target, source, move) {
			if (source.item || source.volatiles['gem']) {
				return;
			}
			const yourItem = target.takeItem(source);
			if (!yourItem) {
				return;
			}
			if (!this.singleEvent('TakeItem', yourItem, target.itemState, source, target, move, yourItem) ||
				!source.setItem(yourItem)) {
				target.item = yourItem.id; // bypass setItem so we don't break choicelock or anything
				return;
			}
			this.add('-enditem', target, yourItem, '[silent]', '[from] move: Notices your stuff', '[of] ' + source);
			this.add('-item', source, yourItem, '[from] move: Notices your stuff', '[of] ' + target);
		},
		secondary: null,
		target: "normal",
		type: "No",
		contestType: "Cute",
	},
	nage: {
		num: 266,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Nage",
		isNonstandard: "Thing",
		pp: 10,
		priority: 2,
		flags: {},
		volatileStatus: 'nage',
		onTry(source) {
			return this.activePerHalf > 1;
		},
		onHit(target, source, move) {
			this.boost({spa: -1}, target);
		},
		condition: {
			duration: 1,
			onStart(target, source, effect) {
				if (effect?.id === 'zpower') {
					this.add('-singleturn', target, 'move: Nage', '[zeffect]');
				} else {
					this.add('-singleturn', target, 'move: Nage');
				}
			},
			onFoeRedirectTargetPriority: 1,
			onFoeRedirectTarget(target, source, source2, move) {
				if (!this.effectState.target.isSkyDropped() && this.validTarget(this.effectState.target, source, move.target)) {
					if (move.smartTarget) move.smartTarget = false;
					this.debug("Follow Me redirected target of move");
					return this.effectState.target;
				}
			},
		},
		secondary: null,
		target: "self",
		type: "No",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Cute",
	},
	nothanks: {
		num: 266,
		accuracy: 120,
		basePower: 0,
		category: "Status",
		name: "No Thanks",
		isNonstandard: "Thing",
		pp: 10,
		priority: 0,
		flags: {},
		onTry(source) {
			if (!source.status && !source.boosts && !source.volatiles) return false;
		},
		onHit(target, source, move) {
			if (source.status) {
				if (target.trySetStatus(source.status)) source.clearStatus();
			}
			if (source.volatiles) {
				for (const i in source.volatiles) {
					if (this.dex.conditions.getByID(i as ID).noCopy) continue;
					// shallow clones
					target.volatiles[i] = {...source.volatiles[i]};
					if (target.volatiles[i].linkedPokemon) {
						delete source.volatiles[i].linkedPokemon;
						delete source.volatiles[i].linkedStatus;
						for (const linkedPoke of target.volatiles[i].linkedPokemon) {
							const linkedPokeLinks = linkedPoke.volatiles[target.volatiles[i].linkedStatus].linkedPokemon;
							linkedPokeLinks[linkedPokeLinks.indexOf(source)] = this;
						}
					}
					source.removeVolatile(i);
				}
			}
			if (source.boosts) {
				let i: BoostID;
				for (i in source.boosts) {
					const stats: BoostID[] = [];
					const boost: SparseBoostsTable = {};
					let statPlus: BoostID;
					for (statPlus in source.boosts) {
						if (source.boosts[statPlus] !== 0) {
							boost[statPlus] = source.boosts[statPlus];
						}
					}
					this.boost(boost, target);
					source.clearBoosts();
				}
			}
		},
		secondary: null,
		target: "normal",
		type: "No",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Clever",
	},

	// Science
	study: {
		num: 1602,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Thing",
		name: "Study",
		pp: 15,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1},
		volatileStatus: 'study',
		condition: {
			onStart(pokemon) {
				this.add('-start', pokemon, 'Study');
			},
			onEffectivenessPriority: -2,
			onEffectiveness(typeMod, target, type, move) {
				if (move.type !== 'Science') return;
				if (!target) return;
				if (type !== target.getTypes()[0]) return;
				return typeMod + 1;
			},
		},
		boosts: {
			evasion: -1,
		},
		secondary: null,
		target: "normal",
		type: "Science",
		contestType: "Clever",
	},
	factsandlogic: {
		num: 1250,
		accuracy: 120,
		basePower: 50,
		category: "Special",
		isNonstandard: "Thing",
		name: "Facts and Logic",
		pp: 20,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		target: "normal",
		type: "Science",
		contestType: "Clever",
	},
	lookup: {
		num: 2118,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Thing",
		name: "Look Up",
		pp: 10,
		priority: 0,
		flags: {},
		noMetronome: ['Parry', 'Riposte', 'Whistle', 'Multi-strike'],
		onHit(target, source, effect) {
			const moves: MoveData[] = [];
			if (source.hasAbility("B92228z") && this.randomChance(1, 2)) {
				for (const id in Moves) {
					const move = Moves[id];
					if (move.realMove) continue;
					if (move.isZ || move.isMax || move.isNonstandard !== 'ThingInf') continue;
					if (effect.noMetronome!.includes(move.name) || move.noMetronome?.length) continue;
					moves.push(move);
				}
			} else {
				for (const id in Moves) {
					const move = Moves[id];
					if (move.realMove) continue;
					if (move.isZ || move.isMax || move.isNonstandard !== 'Thing') continue;
					if (effect.noMetronome!.includes(move.name) || move.noMetronome?.length) continue;
					moves.push(move);
				}
			}
			let randomMove = '';
			if (moves.length) {
				moves.sort((a, b) => a.num! - b.num!);
				randomMove = this.sample(moves).name;
			}
			if (!randomMove) {
				return false;
			}
			this.actions.useMove(randomMove, target);
		},
		secondary: null,
		target: "self",
		type: "Science",
		contestType: "Clever",
	},
	kineticenergy: {
		num: 1719,
		accuracy: 100,
		basePower: 70,
		category: "Physical",
		isNonstandard: "Thing",
		name: "Kinetic Energy",
		pp: 15,
		priority: 0,
		useSourceSpeedAsOffensive: true,
		flags: {contact: 1, protect: 1, mirror: 1},
		target: "normal",
		type: "Science",
		contestType: "Clever",
	},
	particlebeam: {
		num: 143,
		accuracy: 120,
		basePower: 140,
		category: "Special",
		isNonstandard: "Thing",
		name: "Particle Beam",
		pp: 5,
		priority: 0,
		flags: {charge: 1, protect: 1, mirror: 1, distance: 1},
		critRatio: 2,
		onTryMove(attacker, defender, move) {
			if (attacker.removeVolatile(move.id)) {
				return;
			}
			if (!this.runEvent('ChargeMove', attacker, defender, move)) {
				return;
			}
			attacker.addVolatile('twoturnmove', defender);
			return null;
		},
		target: "any",
		type: "Science",
		contestType: "Cool",
	},
	horizontaltranslation: {
		num: 502,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Thing",
		name: "Horizontal Translation",
		pp: 15,
		priority: 2,
		flags: {},
		onTryHit(source) {
			if (source.side.active.length === 1) return false;
			if (source.side.active.length === 3 && source.position === 1) return false;
		},
		onHit(pokemon) {
			const newPosition = (pokemon.position === 0 ? pokemon.side.active.length - 1 : 0);
			if (!pokemon.side.active[newPosition]) return false;
			if (pokemon.side.active[newPosition].fainted) return false;
			this.swapPosition(pokemon, newPosition, '[from] move: Horizontal Translation');
		},
		secondary: null,
		target: "self",
		type: "Science",
		zMove: {boost: {spe: 2}},
		contestType: "Clever",
	},
	reprogram: {
		num: 502,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Thing",
		name: "Reprogram",
		pp: 5,
		priority: 0,
		flags: {},
		volatileStatus: 'reprogram',
		condition: {
			duration: 2,
			noCopy: true,
			onStart(target, source) {
				this.add('-start', target, 'Reprogram');
			},
			onEnd(target) {
				this.add('-end', target, 'Reprogram');
				const old_ability = target.ability;
				target.formeChange(this.effectState.source.species, this.effect, true, '[msg]');
				target.setAbility(old_ability, null, true);
				target.baseAbility = old_ability;
			},
		},
		secondary: null,
		target: "normal",
		type: "Science",
		zMove: {boost: {spa: 2}},
		contestType: "Clever",
	},
	fossilize: {
		num: 1104,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Thing",
		name: "Fossilize",
		pp: 5,
		priority: 0,
		flags: {snatch: 1},
		boosts: {
			def: 3,
			spe: -1,
		},
		secondary: null,
		target: "self",
		type: "Science",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Tough",
	},
	brilliancy: {
		num: 5119,
		accuracy: true,
		basePower: 0,
		isNonstandard: "Thing",
		category: "Status",
		name: "Brilliancy",
		pp: 5,
		priority: 0,
		flags: {authentic: 1},
		volatileStatus: 'brilliancy',
		onPrepareHit(target, source, move) {
			for (const action of this.queue.list as MoveAction[]) {
				if (
					!action.move || !action.pokemon?.isActive ||
					action.pokemon.fainted || action.maxMove || action.zmove
				) {
					continue;
				}
				if (action.pokemon.isAlly(source) && action.move.id === 'rankandfile') {
					this.queue.cancelAction(action.pokemon);
					this.hint(`Brilliancy was upgraded by ${action.pokemon.name}'s Rank and File!`);
					target.removeVolatile('brilliancy');
					move.wargamesBoosted = true;
					return true;
				} else if (action.pokemon.isAlly(source) && action.move.id === 'promote') {
					this.queue.prioritizeAction(action, move);
					this.hint(`Brilliancy is upgrading ${action.pokemon.name}'s Promote!`);
					target.removeVolatile('brilliancy');
					return null;
				}
			}
			return !target.removeVolatile('brilliancy');
		},
		onModifyMove(move) {
			if (move.sourceEffect === 'rankandfile') {
				move.wargamesBoosted = true;
			}
		},
		condition: {
			onStart(pokemon, source, effect) {
				if (effect?.effectType === 'Move' && effect.wargamesBoosted) this.effectState.boosts = {def: 6, spd: 6, spe: 6};
				else this.effectState.boosts = {atk: 6, spa: 6};
				this.add('-singlemove', pokemon, 'Brilliancy');
			},
			onFaint(target, source, effect) {
				if (!source || !effect || target.isAlly(source)) return;
				if (effect.effectType === 'Move') {
					this.add('-activate', target, 'move: Brilliancy');
					target.side.addSlotCondition(target, 'brilliancyboost');
					target.side.slotConditions[target.position]['brilliancyboost'].boosts = this.effectState.boosts;
				}
			},
			onBeforeMovePriority: -1,
			onBeforeMove(pokemon, target, move) {
				if (move.id === 'brilliancy') return;
				this.debug('removing Brilliancy before attack');
				pokemon.removeVolatile('brilliancy');
			},
			onMoveAborted(pokemon, target, move) {
				pokemon.removeVolatile('brilliancy');
			},
		},
		secondary: null,
		target: "self",
		type: "Science",
		zMove: {effect: 'redirect'},
		contestType: "Clever",
	},
	inject: {
		num: 284,
		accuracy: 95,
		basePower: 1,
		isNonstandard: "Thing",
		basePowerCallback(pokemon, target, move) {
			return move.basePower * pokemon.hp / 6;
		},
		category: "Physical",
		name: "Inject",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, contact: 1},
		secondary: {
			chance: 10,
			status: 'infected',
		},
		target: "normal",
		type: "Science",
		contestType: "Clever",
	},
	infect: {
		num: 284,
		accuracy: 95,
		basePower: 0,
		isNonstandard: "Thing",
		category: "Status",
		name: "Infect",
		pp: 10,
		priority: 0,
		flags: {},
		onHit(pokemon) {
			pokemon.trySetStatus('infected');
		},
		secondary: null,
		target: "normal",
		type: "Science",
		contestType: "Clever",
	},
	launchanuclearwarhead: {
		num: 284,
		accuracy: true,
		basePower: 500,
		isNonstandard: "ThingInf",
		category: "Special",
		name: "Launch a Nuclear Warhead",
		pp: 1,
		priority: 0,
		flags: {},
		secondary: null,
		target: "any",
		type: "Science",
		contestType: "Clever",
	},
	virulencesurge: {
		num: 1250,
		accuracy: 110,
		basePower: 40,
		category: "Special",
		isNonstandard: "Thing",
		name: "Virulence Surge",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onTry(source, target) {
			return target.status === 'infected';
		},
		onAfterHit(source, target) {
			if (target.status === 'infected') {
				const inf = target.statusState.infection;
				// The % chance damage occurs
				const damageChance = this.clampIntRange(inf.damageChane + this.random(0, 50), 0, 100);
				// The amount damaged as 1 / x of max hp
				const damageFraction = this.clampIntRange(inf.damageFraction + this.random(-10, 0), 1, 32);
				target.statusState.infection.damageChance = damageChance;
				target.statusState.infection.damageFraction = damageFraction;
			}
		},
		target: "normal",
		type: "Science",
		contestType: "Clever",
	},
	transmissionsurge: {
		num: 1250,
		accuracy: 110,
		basePower: 40,
		category: "Special",
		isNonstandard: "Thing",
		name: "Transmission Surge",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onTry(source, target) {
			return target.status === 'infected';
		},
		onAfterHit(source, target) {
			if (target.status === 'infected') {
				const inf = target.statusState.infection;
				const spreadChance = this.clampIntRange(inf.spreadChance + this.random(0, 50), 0, 100);
				const newModes = this.random(0, 3);
				const i = 0;
				while (i < newModes) {
					target.statusState.infection.spreadMode.push(this.random(1, 5));
				}
				target.statusState.infection.damageChance = spreadChance;
			}
		},
		target: "normal",
		type: "Science",
		contestType: "Clever",
	},
	unlockannihilategene: {
		num: 215,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Thing",
		name: "Unlock Annihilate Gene",
		pp: 1,
		priority: 0,
		flags: {distance: 1, authentic: 1},
		onHit(pokemon, source) {
			this.add('-activate', source, 'move: Unlock Annihilate Gene');
			let success = false;
			for (const poke of this.getAllPokemon()) {
				if (poke.status === 'infected') {
					success = true;
					const damageAmt = poke.statusState.damageFraction;
					let collateral = this.clampIntRange(2 * pokemon.maxhp / damageAmt, 1);
					if (!poke.isActive && collateral >= pokemon.hp) collateral = pokemon.hp - 1;
					this.directDamage(collateral, pokemon);
				}
			}
			return success;
		},
		target: "all",
		type: "Science",
		zMove: {effect: 'heal'},
		contestType: "Clever",
	},

	// Sport
	fourseamfastball: {
		num: 709,
		accuracy: 100,
		basePower: 40,
		category: "Physical",
		isNonstandard: "Thing",
		name: "Four-seam Fastball",
		pp: 20,
		priority: 1,
		flags: {ball: 1, protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Sport",
		contestType: "Cool",
	},
	backtobreastturn: {
		num: -275,
		accuracy: 85,
		basePower: 90,
		category: "Physical",
		isNonstandard: "Thing",
		name: "Back-to-Breast Turn",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		selfSwitch: true,
		secondary: null,
		target: "normal",
		type: "Sport",
		contestType: "Cute",
	},
	openturn: {
		num: -274,
		accuracy: 100,
		basePower: 40,
		category: "Physical",
		isNonstandard: "Thing",
		name: "Open Turn",
		pp: 10,
		priority: -6,
		flags: {contact: 1, protect: 1, mirror: 1},
		forceSwitch: true,
		target: "normal",
		type: "Sport",
		contestType: "Cool",
	},
	whistle: {
		num: 1690,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Thing",
		name: "Whistle",
		pp: 10,
		priority: 4,
		flags: {},
		stallingMove: true,
		volatileStatus: 'whistle',
		onPrepareHit(pokemon) {
			return !!this.queue.willAct() && this.runEvent('StallMove', pokemon);
		},
		onHit(pokemon) {
			pokemon.addVolatile('stall');
		},
		condition: {
			duration: 1,
			onStart(target) {
				this.add('-singleturn', target, 'Protect');
			},
			onTryHitPriority: 3,
			onTryHit(target, source, move) {
				if (!move.flags['protect'] || move.category === 'Status') {
					if (move.isZ || (move.isMax && !move.breaksProtect)) target.getMoveHitData(move).zBrokeProtect = true;
					return;
				}
				if (move.smartTarget) {
					move.smartTarget = false;
				} else {
					this.add('-activate', target, 'move: Protect');
				}
				const lockedmove = source.getVolatile('lockedmove');
				if (lockedmove) {
					// Outrage counter is reset
					if (source.volatiles['lockedmove'].duration === 2) {
						delete source.volatiles['lockedmove'];
					}
				}
				if (move.flags['contact']) {
					this.boost({spe: -1, accuracy: -1}, source, target, this.dex.getActiveMove("Whistle"));
				}
				return this.NOT_FAIL;
			},
			onHit(target, source, move) {
				if (move.isZOrMaxPowered && move.flags['contact']) {
					this.boost({spe: -1, accuracy: -1}, source, target, this.dex.getActiveMove("Whistle"));
				}
			},
		},
		secondary: null,
		target: "self",
		type: "Sport",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Cool",
	},
	fourinarow: {
		num: 1709,
		accuracy: 85,
		basePower: 100,
		category: "Special",
		isNonstandard: "Thing",
		name: "Four-in-a-Row",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 20,
			boosts: {
				spa: -1,
			},
		},
		target: "normal",
		type: "Sport",
		contestType: "Clever",
	},
	feelinglucky: {
		num: 1719,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Thing",
		name: "Feeling Lucky",
		pp: 5,
		priority: 0,
		flags: {snatch: 1},
		onHit(pokemon) {
			let loopNum = 0;
			do {
				const randomChance = Math.floor(Math.random() * 100);
				if (randomChance < 1) {
				// die
				// console.log("die");
					this.damage(pokemon.baseMaxhp);
					break;
				} else if (randomChance < 50) {
				// boost random stat
				// console.log("boost");
					const stats: BoostID[] = [];
					const boost: SparseBoostsTable = {};
					let statPlus: BoostID;
					for (statPlus in pokemon.boosts) {
					// if (statPlus === 'accuracy' || statPlus === 'evasion') continue;
						if (pokemon.boosts[statPlus] < 6) {
							stats.push(statPlus);
						}
					}
					const randomStat: BoostID | undefined = stats.length ? this.sample(stats) : undefined;
					if (randomChance > 40) {
						if (randomStat) boost[randomStat] = 2;
					} else {
						if (randomStat) boost[randomStat] = 1;
					}
					this.boost(boost);
				} else if (randomChance < 75) {
				// lower random stat
				// console.log("negative boost");
					const stats: BoostID[] = [];
					const boost: SparseBoostsTable = {};
					let statPlus: BoostID;
					for (statPlus in pokemon.boosts) {
					// if (statPlus === 'accuracy' || statPlus === 'evasion') continue;
						if (pokemon.boosts[statPlus] < 6) {
							stats.push(statPlus);
						}
					}
					const randomStat: BoostID | undefined = stats.length ? this.sample(stats) : undefined;
					if (randomChance > 70) {
						if (randomStat) boost[randomStat] = -2;
					} else {
						if (randomStat) boost[randomStat] = -1;
					}
					this.boost(boost);
				} else if (randomChance < 90) {
				// cure status
				// console.log("heal");
					this.heal(pokemon.baseMaxhp / 8);
					if (pokemon.hp && pokemon.status) {
						this.debug('big gamble');
						pokemon.cureStatus();
					}
				} else if (randomChance < 99) {
				// gain random status
				// console.log("status");
					this.damage(pokemon.baseMaxhp / 8);
					const result = this.random(8);
					if (result === 0) {
						pokemon.trySetStatus('prone');
					} else if (result === 1) {
						pokemon.trySetStatus('banished');
					} else if (result === 2) {
						pokemon.trySetStatus('blinded');
					} else if (result === 3) {
						pokemon.trySetStatus('pressurized');
					} else if (result === 4) {
						pokemon.trySetStatus('fluctuant');
					} else if (result === 5) {
						pokemon.trySetStatus('wounded');
					} else if (result === 6) {
						pokemon.trySetStatus('distanced');
					} else {
						pokemon.trySetStatus('infected');
					}
				} else {
				// jackpot
				// console.log("win big");
					const boost: SparseBoostsTable = {};
					let statPlus: BoostID;
					for (statPlus in pokemon.boosts) {
						if (statPlus === 'accuracy' || statPlus === 'evasion') continue;
						if (pokemon.boosts[statPlus] < 6) {
							boost[statPlus] = 6;
						}
					}
					this.boost(boost);
					break;
				}
				loopNum++;
			} while (loopNum < 3 && pokemon.hp);
		},
		secondary: null,
		target: "self",
		type: "Sport",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Cool",
	},
	wager: {
		num: 194,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Thing",
		name: "Wager",
		pp: 5,
		priority: 0,
		flags: {authentic: 1},
		volatileStatus: 'wager',
		condition: {
			duration: 2,
			onStart(pokemon, source, effect) {
				this.add('-start', pokemon, 'move: Wager', '[of] ' + source);
				if (effect.id === 'legendsoftreasure') this.effectState.duration = 0;
			},
			onFaint(target, source, effect) {
				this.add('-activate', this.effectState.source, 'wager');
				this.boost({atk: 3, spa: 3}, this.effectState.source);
			},
			onEnd(pokemon) {
				this.add('-end', pokemon, 'Wager');
			},
		},
		secondary: null,
		target: "normal",
		type: "Sport",
		zMove: {effect: 'redirect'},
		contestType: "Clever",
	},
	warmup: {
		num: 1547,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Thing",
		name: "Warm-Up",
		pp: 10,
		priority: 0,
		flags: {snatch: 1},
		onHit(target, pokemon, move) {
			if (pokemon.baseSpecies.baseSpecies === 'Fjean' && !pokemon.transformed) {
				move.willChangeForme = true;
			}
		},
		onAfterMoveSecondarySelf(pokemon, target, move) {
			if (move.willChangeForme) {
				const fjeanForme = pokemon.species.id === 'fjeanbrawler' ? '' : '-Brawler';
				pokemon.formeChange('Fjean' + fjeanForme, this.effect, false, '[msg]');
			}
		},
		boosts: {
			spe: 1,
			atk: 1,
		},
		target: "self",
		type: "Sport",
		contestType: "Tough",
	},
	shotput: {
		num: 1909,
		accuracy: 80,
		basePower: 110,
		category: "Physical",
		isNonstandard: "Thing",
		name: "Shot Put",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, ball: 1},
		secondary: {
			chance: 10,
			volatileStatus: 'flinch',
		},
		target: "normal",
		type: "Sport",
		contestType: "Tough",
	},
	suplex: {
		num: 1484,
		accuracy: 100,
		basePower: 0,
		basePowerCallback(pokemon, target) {
			const targetWeight = target.getWeight();
			const pokemonWeight = pokemon.getWeight();
			if (pokemonWeight > targetWeight * 5) {
				return 120;
			}
			if (pokemonWeight > targetWeight * 4) {
				return 100;
			}
			if (pokemonWeight > targetWeight * 3) {
				return 80;
			}
			if (pokemonWeight > targetWeight * 2) {
				return 60;
			}
			return 40;
		},
		category: "Physical",
		isNonstandard: "Thing",
		name: "Suplex",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, nonsky: 1},
		onTryHit(target, pokemon, move) {
			if (target.volatiles['dynamax']) {
				this.add('-fail', pokemon, 'Dynamax');
				this.attrLastMove('[still]');
				return null;
			}
		},
		secondary: null,
		target: "normal",
		type: "Sport",
		zMove: {basePower: 160},
		maxMove: {basePower: 130},
		contestType: "Tough",
	},
	soaringaxekick: {
		num: 1119,
		accuracy: 95,
		basePower: 90,
		category: "Physical",
		isNonstandard: "Thing",
		name: "Soaring Axe Kick",
		pp: 15,
		priority: 0,
		flags: {contact: 1, charge: 1, protect: 1, mirror: 1, gravity: 1, distance: 1, kick: 1},
		onTryMove(attacker, defender, move) {
			if (attacker.removeVolatile(move.id)) {
				return;
			}
			this.add('-prepare', attacker, move.name);
			if (!this.runEvent('ChargeMove', attacker, defender, move)) {
				return;
			}
			attacker.addVolatile('twoturnmove', defender);
			return null;
		},
		condition: {
			duration: 2,
			onInvulnerability(target, source, move) {
				if (['gust', 'twister', 'skyuppercut', 'thunder', 'hurricane', 'smackdown', 'thousandarrows'].includes(move.id)) {
					return;
				}
				return false;
			},
			onSourceModifyDamage(damage, source, target, move) {
				if (move.id === 'gust' || move.id === 'twister') {
					return this.chainModify(2);
				}
			},
		},
		secondary: null,
		target: "any",
		type: "Sport",
		contestType: "Clever",
	},
	counterthrow: {
		num: 1168,
		accuracy: 100,
		basePower: 0,
		damageCallback(pokemon) {
			if (!pokemon.volatiles['counterthrow']) return 0;
			return pokemon.volatiles['counterthrow'].damage || 1;
		},
		category: "Physical",
		isNonstandard: "Thing",
		name: "Counter Throw",
		pp: 20,
		priority: -5,
		flags: {contact: 1, protect: 1},
		beforeTurnCallback(pokemon) {
			pokemon.addVolatile('counterthrow');
		},
		onTryHit(target, source, move) {
			if (!source.volatiles['counterthrow']) return false;
			if (source.volatiles['counterthrow'].position === null) return false;
		},
		condition: {
			duration: 1,
			noCopy: true,
			onStart(target, source, move) {
				this.effectState.position = null;
				this.effectState.damage = 0;
			},
			onRedirectTargetPriority: -1,
			onRedirectTarget(target, source, source2) {
				if (source !== this.effectState.target) return;
				return source.side.foe.active[this.effectState.position];
			},
			onDamagingHit(damage, target, source, move) {
				if (source.side !== target.side && this.getCategory(move) === 'Physical') {
					this.effectState.position = source.position;
					this.effectState.damage = 2 * damage;
				}
			},
		},
		forceSwitch: true,
		secondary: null,
		target: "scripted",
		type: "Sport",
		maxMove: {basePower: 75},
		contestType: "Tough",
	},
	springfloor: {
		num: 581,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Thing",
		name: "Spring Floor",
		pp: 10,
		priority: 0,
		flags: {nonsky: 1},
		terrain: 'springfloor',
		condition: {
			duration: 5,
			durationCallback(source, effect) {
				if (source?.hasItem('landscapingpermit')) {
					return 10;
				}
				return 5;
			},
			onDamage(damage, target, source, effect) {
				if (effect.id === 'recoil') {
					if (!this.activeMove) throw new Error("Battle.activeMove is null");
					if (this.activeMove.id !== 'struggle') return null;
				}
			},
			onModifyAtkPriority: 10,
			onModifyAtk(atk, pokemon) {
				if (pokemon.hasType('Sport', true) || pokemon.hasAbility('Landscape Blessing')) {
					return this.modify(atk, 1.5);
				}
			},
			onModifyDefPriority: 10,
			onModifyDef(def, pokemon) {
				if (pokemon.hasType('Sport', true) || pokemon.hasAbility('Landscape Blessing')) {
					return this.modify(def, 1.5);
				}
			},
			onModifySpe(spe, pokemon) {
				if (pokemon.hasType('Sport', true) || pokemon.hasAbility('Landscape Blessing')) {
					return this.modify(spe, 1.5);
				}
			},
			onFieldStart(battle, source, effect) {
				if (effect?.effectType === 'Ability') {
					this.add('-fieldstart', 'move: Spring Floor', '[from] ability: ' + effect, '[of] ' + source);
				} else {
					this.add('-fieldstart', 'move: Spring Floor');
				}
			},
			onFieldEnd(side) {
				this.add('-fieldend', 'move: Spring Floor');
			},
		},
		secondary: null,
		target: "all",
		type: "Sport",
		zMove: {boost: {spd: 1}},
		contestType: "Cool",
	},
	ballbounce: {
		num: 709,
		accuracy: 100,
		basePower: 0,
		category: "Physical",
		isNonstandard: "Thing",
		name: "Ball Bounce",
		pp: 1,
		priority: 1,
		flags: {ball: 1, protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Sport",
		contestType: "Cool",
	},
	cominginhot: {
		num: 710,
		accuracy: 50,
		basePower: 150,
		category: "Physical",
		isNonstandard: "Thing",
		name: "Coming in Hot",
		pp: 5,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Sport",
		contestType: "Tough",
	},
	rankandfile: {
		num: 5119,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Thing",
		name: "Rank and File",
		pp: 5,
		priority: 0,
		flags: {},
		pseudoWeather: 'rankandfile',
		onPrepareHit(target, source, move) {
			for (const action of this.queue.list as MoveAction[]) {
				if (
					!action.move || !action.pokemon?.isActive ||
					action.pokemon.fainted || action.maxMove || action.zmove
				) {
					continue;
				}
				if (action.pokemon.isAlly(source) && action.move.id === 'promote') {
					this.queue.cancelAction(action.pokemon);
					this.hint(`Rank and File was upgraded by ${action.pokemon.name}'s Promote!`);
					move.wargamesBoosted = true;
					return true;
				} else if (action.pokemon.isAlly(source) && action.move.id === 'brilliancy') {
					this.queue.prioritizeAction(action, move);
					this.hint(`Rank and File is upgrading ${action.pokemon.name}'s Brilliancy!`);
					return null;
				}
			}
		},
		onModifyMove(move) {
			if (move.sourceEffect === 'promote') {
				move.wargamesBoosted = true;
			}
		},
		condition: {
			duration: 5,
			onFieldStart(target, source, effect) {
				if (effect?.effectType === 'Move' && effect.wargamesBoosted) {
					this.effectState.duration = 0;
				}
				this.add('-fieldstart', 'move: Rank and File', '[of] ' + source);
			},
			onFieldRestart(target, source, effect) {
				if (this.effectState.duration > 0 || (effect?.effectType === 'Move' && effect.wargamesBoosted)) this.field.removePseudoWeather('rankandfile');
			},
			onFoeRedirectTargetPriority: 2,
			onFoeRedirectTarget(target, source, source2, move) {
				if (this.gameType === 'freeforall') {
					const positionIndex = source.side.n > 1;
					for (const foe of source.foes()) {
						if (!foe?.isActive || foe === source) return;
						const positionIndexFoe = foe.side.n > 1;
						if (positionIndex === positionIndexFoe) {
							if (this.validTarget(foe, source, move.target)) {
								this.debug("Rank and File redirected target of move");
								return foe;
							}
						}
					}
				} else if (this.gameType === 'multi') {
					const positionIndex = source.side.n % 3 > 0;
					for (const foe of source.foes()) {
						if (!foe?.isActive || foe === source) return;
						const positionIndexFoe = foe.side.n % 3 > 0;
						if (positionIndex === positionIndexFoe) {
							if (this.validTarget(foe, source, move.target)) {
								this.debug("Rank and File redirected target of move");
								return foe;
							}
						}
					}
				} else {
					const positionOffset = Math.floor(source.side.n / 2) * source.side.active.length;
					const positionLetter = 'abcdef'.charAt(source.position + positionOffset);
					for (const foe of source.foes()) {
						if (!foe?.isActive || foe === source) return;
						const positionOffsetFoe = Math.floor(foe.side.n / 2) * foe.side.active.length;
						const positionLetterFoe = 'fedcba'.charAt(6 - foe.side.active.length + foe.position + positionOffsetFoe);
						if (positionLetter === positionLetterFoe) {
							if (this.validTarget(foe, source, move.target)) {
								this.debug("Rank and File redirected target of move");
								return foe;
							}
						}
					}
				}
			},
			onRedirectTargetPriority: 2,
			onRedirectTarget(target, source, source2, move) {
				if (this.gameType === 'freeforall') {
					const positionIndex = source.side.n > 1;
					for (const foe of source.foes()) {
						if (!foe?.isActive || foe === source) return;
						const positionIndexFoe = foe.side.n > 1;
						if (positionIndex === positionIndexFoe) {
							if (this.validTarget(foe, source, move.target)) {
								this.debug("Rank and File redirected target of move");
								return foe;
							}
						}
					}
				} else if (this.gameType === 'multi') {
					const positionIndex = source.side.n % 3 > 0;
					for (const foe of source.foes()) {
						if (!foe?.isActive || foe === source) return;
						const positionIndexFoe = foe.side.n % 3 > 0;
						if (positionIndex === positionIndexFoe) {
							if (this.validTarget(foe, source, move.target)) {
								this.debug("Rank and File redirected target of move");
								return foe;
							}
						}
					}
				} else {
					const positionOffset = Math.floor(source.side.n / 2) * source.side.active.length;
					const positionLetter = 'abcdef'.charAt(source.position + positionOffset);
					for (const foe of source.foes()) {
						if (!foe?.isActive || foe === source) return;
						const positionOffsetFoe = Math.floor(foe.side.n / 2) * foe.side.active.length;
						const positionLetterFoe = 'fedcba'.charAt(6 - foe.side.active.length + foe.position + positionOffsetFoe);
						if (positionLetter === positionLetterFoe) {
							if (this.validTarget(foe, source, move.target)) {
								this.debug("Rank and File redirected target of move");
								return foe;
							}
						}
					}
				}
			},

			onFieldEnd() {
				this.add('-fieldend', 'move: Rank and File');
			},
		},
		secondary: null,
		target: "all",
		type: "Sport",
		contestType: "Clever",
	},
	cheeron: {
		num: 270,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Thing",
		name: "Cheer On",
		pp: 15,
		priority: 5,
		flags: {authentic: 1},
		volatileStatus: 'cheeron',
		onTryHit(target) {
			if (!target.newlySwitched && !this.queue.willMove(target)) return false;
		},
		condition: {
			duration: 1,
			onStart(target, source) {
				this.add('-singleturn', target, 'Cheer On', '[of] ' + source);
			},
			onRestart(target, source) {
				this.add('-singleturn', target, 'Cheer On', '[of] ' + source);
			},
			onModifyCritRatio(critRatio) {
				return 5;
			},
		},
		secondary: null,
		target: "any",
		type: "Sport",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Cute",
	},
	myman: {
		num: 1241,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "ThingInf",
		name: "My Man",
		pp: 3,
		priority: 0,
		flags: {protect: 1, mirror: 1, contact: 1, authentic: 1},
		secondary: null,
		onHit(target, source) {
			const boostSource: SparseBoostsTable = {};
			const boostTarget: SparseBoostsTable = {};
			let statPlus: BoostID;
			const stats: BoostID[] = ["atk", "def", "spa", "spd", "spe", "accuracy", "evasion"];
			for (statPlus of stats) {
				// if (statPlus === 'accuracy' || statPlus === 'evasion') continue;
				const statDiff = source.boosts[statPlus] - target.boosts[statPlus];
				if (statDiff < 0) {
					boostSource[statPlus] = Math.abs(statDiff);
				} else if (statDiff > 0) {
					boostTarget[statPlus] = statDiff;
				}
			}
			this.boost(boostSource, source);
			this.boost(boostTarget, target);
		},
		target: "normal",
		type: "Sport",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Tough",
	},
	stay: {
		num: 270,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Thing",
		name: "Stay",
		pp: 15,
		priority: 5,
		flags: {authentic: 1},
		volatileStatus: 'stay',
		condition: {
			duration: 1,
			onStart(target, source) {
				this.add('-singleturn', target, 'Stay', '[of] ' + source);
			},
			onTrapPokemon(pokemon) {
				pokemon.tryTrap();
			},
			onDragOut(pokemon) {
				this.add('-activate', pokemon, 'move: Stay');
				return null;
			},
		},
		secondary: null,
		target: "self",
		type: "Sport",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Cute",
	},
	invitingsurroundings: {
		num: 581,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Thing",
		name: "Inviting Surroundings",
		pp: 10,
		priority: 0,
		flags: {nonsky: 1},
		terrain: 'invitingsurroundings',
		condition: {
			duration: 5,
			durationCallback(source, effect) {
				/* if (source?.hasItem('landscapingpermit')) {
					return 10;
				} */
				return 5;
			},
			onTrapPokemon(pokemon) {
				pokemon.tryTrap(true);
			},
			onFieldStart(battle, source, effect) {
				if (effect?.effectType === 'Ability') {
					this.add('-fieldstart', 'move: Inviting Surroundings', '[from] ability: ' + effect, '[of] ' + source);
				} else {
					this.add('-fieldstart', 'move: Inviting Surroundings');
				}
			},
			onFieldEnd(side) {
				this.add('-fieldend', 'Inviting Surroundings');
			},
		},
		secondary: null,
		target: "all",
		type: "Sport",
		zMove: {boost: {spd: 1}},
		contestType: "Cool",
	},
	doubledribble: {
		num: 814,
		accuracy: 95,
		basePower: 40,
		category: "Physical",
		name: "Double Dribble",
		isNonstandard: "Thing",
		pp: 10,
		priority: 0,
		flags: {ball: 1, protect: 1, mirror: 1},
		multihit: 2,
		secondary: null,
		target: "normal",
		type: "Sport",
		maxMove: {basePower: 130},
	},
	brankle: {
		num: 814,
		accuracy: 85,
		basePower: 45,
		category: "Special",
		name: "Brankle",
		isNonstandard: "Thing",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 100,
			status: 'wounded',
			boosts: {
				spe: -1,
			},
		},
		target: "normal",
		type: "Sport",
		maxMove: {basePower: 130},
	},

	// Sword
	sharpslash: {
		num: 1400,
		accuracy: 100,
		basePower: 70,
		category: "Physical",
		isNonstandard: "Thing",
		name: "Sharp Slash",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		critRatio: 2,
		secondary: null,
		target: "normal",
		type: "Sword",
		contestType: "Cool",
	},
	parry: {
		num: 1197,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Thing",
		name: "Parry",
		pp: 5,
		priority: 4,
		flags: {},
		stallingMove: true,
		volatileStatus: 'parry',
		onPrepareHit(pokemon) {
			return !!this.queue.willAct() && this.runEvent('StallMove', pokemon);
		},
		onHit(pokemon) {
			pokemon.addVolatile('stall');
		},
		condition: {
			duration: 1,
			onStart(target) {
				this.add('-singleturn', target, 'Protect');
			},
			onTryHitPriority: 3,
			onTryHit(target, source, move) {
				if (!move.flags['protect'] || move.category === 'Status') {
					if (move.isZ || (move.isMax && !move.breaksProtect)) target.getMoveHitData(move).zBrokeProtect = true;
					return;
				}
				if (move.smartTarget) {
					move.smartTarget = false;
				} else {
					this.add('-activate', target, 'move: Protect');
				}
				const lockedmove = source.getVolatile('lockedmove');
				if (lockedmove) {
					// Outrage counter is reset
					if (source.volatiles['lockedmove'].duration === 2) {
						delete source.volatiles['lockedmove'];
					}
				}
				if (target.hasMove('riposte') || target.hasAbility('quickblade')) {
					target.addVolatile('ripostemove');
					this.actions.useMove('riposte', target, source);
				}
				return this.NOT_FAIL;
			},
		},
		secondary: null,
		target: "self",
		type: "Sword",
		zMove: {boost: {evasion: 1}},
		contestType: "Cool",
	},
	riposte: {
		num: 1252,
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		isNonstandard: "Thing",
		name: "Riposte",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onTry(source) {
			if (source.volatiles['ripostemove']) {
				source.removeVolatile('ripostemove');
			} else {
				this.hint("Riposte only works when used from Parry");
				return false;
			}
		},
		target: "normal",
		type: "Sword",
		contestType: "Cool",
	},
	swing: {
		num: 1269,
		accuracy: 80,
		basePower: 80,
		category: "Physical",
		isNonstandard: "Thing",
		name: "Swing",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		target: "allAdjacentFoes",
		type: "Sword",
		contestType: "Tough",
	},
	disarmingstrike: {
		num: 1169,
		accuracy: 100,
		basePower: 50,
		category: "Physical",
		isNonstandard: "Thing",
		name: "Disarming Strike",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 100,
			boosts: {
				atk: -2,
			},
		},
		target: "normal",
		type: "Sword",
		contestType: "Clever",
	},
	quickdrawstrike: {
		num: 1519,
		accuracy: 100,
		basePower: 40,
		category: "Physical",
		isNonstandard: "Thing",
		name: "Quick-draw Strike",
		pp: 15,
		priority: 1,
		flags: {contact: 1, protect: 1, mirror: 1},
		target: "normal",
		type: "Sword",
		contestType: "Clever",
	},
	swordbeam: {
		num: 1561,
		accuracy: 100,
		basePower: 80,
		category: "Special",
		isNonstandard: "Thing",
		name: "Sword Beam",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 10,
			boosts: {
				spd: -1,
			},
		},
		target: "normal",
		type: "Sword",
		contestType: "Beautiful",
	},
	cheapstrike: {
		num: 1719,
		accuracy: 90,
		basePower: 50,
		category: "Physical",
		isNonstandard: "Thing",
		name: "Cheap Strike",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 50,
			status: 'wounded',
		},
		target: "normal",
		type: "Sword",
		contestType: "Tough",
	},
	promote: {
		num: 5119,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Thing",
		name: "Promote",
		pp: 5,
		priority: 0,
		flags: {authentic: 1},
		volatileStatus: 'promote',
		onPrepareHit(target, source, move) {
			for (const action of this.queue.list as MoveAction[]) {
				if (
					!action.move || !action.pokemon?.isActive ||
					action.pokemon.fainted || action.maxMove || action.zmove
				) {
					continue;
				}
				if (action.pokemon.isAlly(source) && action.move.id === 'brilliancy') {
					this.queue.cancelAction(action.pokemon);
					this.hint(`Promote was upgraded by ${action.pokemon.name}'s Brilliancy!`);
					move.wargamesBoosted = true;
					return true;
				} else if (action.pokemon.isAlly(source) && action.move.id === 'rankandfile') {
					this.queue.prioritizeAction(action, move);
					this.hint(`Promote is upgrading ${action.pokemon.name}'s Rank and File!`);
					return null;
				}
			}
		},
		onModifyMove(move) {
			if (move.sourceEffect === 'brilliancy') {
				move.wargamesBoosted = true;
			}
		},
		condition: {
			onStart(target, source, effect) {
				if (effect?.effectType === 'Move') {
					this.effectState.wargamesBoosted = effect.wargamesBoosted ?? false;
				}
				this.add('-start', target, 'Promote');
			},
			onRestart(target, source, effect) {
				if (effect?.effectType === 'Move' && !this.effectState.wargamesBoosted) {
					this.effectState.wargamesBoosted = effect.wargamesBoosted ?? false;
				}
			},
			onModifyTypePriority: 5,
			onModifyType(move, pokemon) {
				if ((move.type === 'Sword' || this.effectState.wargamesBoosted) && move.id !== 'struggle') {
					move.type = 'Infinity';
				}
			},
		},
		secondary: null,
		target: "normal",
		type: "Sword",
		contestType: "Clever",
	},
	fullpowerstrike: {
		num: 1719,
		accuracy: 100,
		basePower: 75,
		category: "Physical",
		isNonstandard: "Thing",
		name: "Full Power Strike",
		pp: 5,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		// onModifyMove(move, pokemon, target) {
		// 	if (target.getMoveHitData(move).crit) {
		// 		this.debug('Full power strike boost');
		// 		move.basePower *= 2;
		// 	}
		// },
		onModifyMove(move, pokemon, target) {
			if (!move.critRatio) move.critRatio = 0;
			move.critRatio += pokemon.boosts.atk;
		},
		onAfterMoveSecondarySelf(pokemon, target, move) {
			if (target.getMoveHitData(move).crit) {
				pokemon.faint();
			}
		},
		target: "normal",
		type: "Sword",
		contestType: "Tough",
	},
	multistrike: {
		num: 1541,
		accuracy: 95,
		basePower: 35,
		category: "Physical",
		isNonstandard: "Thing",
		name: "Multi-strike",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onAfterMove(source, target, move) {
			if (!(source === this.effectState.target) && !target.isActive) return;
			if (this.randomChance(4, 5)) {
				this.actions.useMove(move, source, target);
			}
		},
		secondary: null,
		target: "normal",
		type: "Sword",
		zMove: {basePower: 140},
		maxMove: {basePower: 130},
		contestType: "Tough",
	},
	caltrops: {
		num: 191,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Thing",
		name: "Caltrops",
		pp: 20,
		priority: 0,
		flags: {reflectable: 1, nonsky: 1},
		sideCondition: 'caltrops',
		condition: {
			// this is a side condition
			onSideStart(side) {
				this.add('-sidestart', side, 'Caltrops');
			},
			onSwitchIn(pokemon) {
				if (!pokemon.isGrounded()) return;
				if (pokemon.hasItem('yellowsafetyvest')) return;
				const swordHazard = this.dex.getActiveMove('Stealth Rock');
				swordHazard.type = 'Sword';
				const typeMod = this.clampIntRange(pokemon.runEffectiveness(swordHazard), -6, 6);
				this.damage(pokemon.maxhp * Math.pow(2, typeMod) / 16);
				if (this.randomChance(1, 10)) {
					pokemon.trySetStatus('wounded', this.effectState.source);
				}
			},
		},
		secondary: null,
		target: "foeSide",
		type: "Sword",
		zMove: {boost: {def: 1}},
		contestType: "Clever",
	},

	// Temperature
	reheat: {
		num: 1573,
		accuracy: 100,
		basePower: 60,
		category: "Special",
		isNonstandard: "Thing",
		name: "Reheat",
		pp: 20,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onEffectiveness(typeMod, target, type) {
			if (type === 'Temperature') return 1;
		},
		target: "normal",
		type: "Temperature",
		contestType: "Clever",
	},
	thermalpunch: {
		num: 8,
		accuracy: 100,
		basePower: 75,
		category: "Physical",
		name: "Thermal Punch",
		isNonstandard: "Thing",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, punch: 1},
		secondary: {
			chance: 10,
			status: 'fluctuant',
		},
		target: "normal",
		type: "Temperature",
		contestType: "Clever",
	},
	thermicalcurrent: {
		num: -257,
		accuracy: 95,
		basePower: 50,
		category: "Special",
		isNonstandard: "Thing",
		name: "Thermical Current",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 70,
			status: 'fluctuant',
		},
		target: "allAdjacentFoes",
		type: "Temperature",
		contestType: "Beautiful",
	},
	heatup: {
		num: 5101,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Thing",
		name: "Heat Up",
		pp: 5,
		priority: 0,
		flags: {},
		weather: 'Hot',
		secondary: null,
		target: "all",
		type: "Temperature",
		zMove: {effect: 'crit2'},
		contestType: "Clever",
	},
	cooldown: {
		num: 5100,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Thing",
		name: "Cool Down",
		pp: 5,
		priority: 0,
		flags: {},
		weather: 'Cold',
		secondary: null,
		target: "all",
		type: "Temperature",
		zMove: {effect: 'crit2'},
		contestType: "Beautiful",
	},
	hotcoals: {
		num: 1446,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Thing",
		name: "Hot Coals",
		pp: 20,
		priority: 0,
		flags: {reflectable: 1},
		sideCondition: 'hotcoals',
		condition: {
			// this is a side condition
			onSideStart(side) {
				this.add('-sidestart', side, 'move: Hot Coals');
			},
			onSwitchIn(pokemon) {
				if (pokemon.hasType('Temperature', true)) {
					this.add('-sideend', pokemon.side, 'move: Hot Coals', '[of] ' + pokemon);
					pokemon.side.removeSideCondition('hotcoals');
					return;
				} else if (pokemon.hasItem('yellowsafetyvest')) {
					return;
				} else { pokemon.trySetStatus('fluctuant', this.effectState.source); }
			},
		},
		secondary: null,
		target: "foeSide",
		type: "Temperature",
		zMove: {boost: {def: 1}},
		contestType: "Tough",
	},
	permafrost: {
		num: 1446,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Thing",
		name: "Permafrost",
		pp: 20,
		priority: 0,
		flags: {reflectable: 1},
		sideCondition: 'permafrost',
		condition: {
			// this is a side condition
			onSideStart(side) {
				this.add('-sidestart', side, 'move: Permafrost');
			},
			onSwitchIn(pokemon) {
				if (pokemon.hasItem('yellowsafetyvest')) {
					return;
				} else { pokemon.trySetStatus('fluctuant', this.effectState.source); }
			},
		},
		secondary: null,
		target: "allySide",
		type: "Temperature",
		zMove: {boost: {def: 1}},
		contestType: "Tough",
	},
	radiate: {
		num: -2517,
		accuracy: 90,
		basePower: 95,
		category: "Special",
		isNonstandard: "Thing",
		name: "Radiate",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 10,
			status: 'fluctuant',
		},
		target: "allAdjacent",
		type: "Temperature",
		contestType: "Beautiful",
	},
	bask: {
		num: -2761,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Thing",
		name: "Bask",
		pp: 5,
		priority: 0,
		flags: {snatch: 1, heal: 1},
		onHit(pokemon) {
			if (this.field.isWeather('cold')) {
				this.boost({def: 1}, pokemon);
			}
			if (this.field.isWeather('hot')) {
				this.boost({spd: 1}, pokemon);
			}
		},
		heal: [1, 2],
		secondary: null,
		target: "self",
		type: "Temperature",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Clever",
	},
	thermalslam: {
		num: 8,
		accuracy: 95,
		basePower: 85,
		category: "Physical",
		name: "Thermal Slam",
		isNonstandard: "Thing",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 30,
			status: 'fluctuant',
		},
		target: "normal",
		type: "Temperature",
		contestType: "Tough",
	},
	thermalexplosion: {
		num: 1513,
		accuracy: 100,
		basePower: 250,
		category: "Special",
		isNonstandard: "Thing",
		name: "Thermal Explosion",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		selfdestruct: "always",
		secondary: null,
		target: "allAdjacent",
		type: "Temperature",
		contestType: "Clever",
	},
	outhoteat: {
		num: 498,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "ThingInf",
		name: "Out Hot Eat",
		pp: 3,
		priority: 0,
		flags: {},
		secondary: null,
		onPrepareHit(source) {
			if (!source.critLastMove) return false;
		},
		onHit(source) {
			this.field.setWeather('hot');
			for (const side of source.side.foeSidesWithConditions()) {
				side.addSideCondition('hotcoals');
			}
			for (const foe of source.foes()) {
				if (!foe?.isActive || foe === source ||
					!this.canSwitch(foe.side)) continue;
				if (this.runEvent('DragOut', source, foe)) {
					foe.forceSwitchFlag = true;
				}
			}
			this.heal(source.baseMaxhp / 2);
		},
		target: "self",
		type: "Temperature",
		contestType: "Cute",
	},
	crystallize: {
		num: -2761,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "ThingInf",
		name: "Crystallize",
		pp: 3,
		priority: 0,
		flags: {snatch: 1},
		onPrepareHit(pokemon) {
			if (pokemon.getEnergyValue() >= -1) return false;
		},
		onHit(pokemon) {
			const energy = Math.trunc(pokemon.getEnergyValue());

			if (energy < -1) {
				this.boost({atk: -energy - 1, def: -energy});
			} else if (energy < 0) {
				this.boost({def: -energy});
			}
		},
		secondary: null,
		target: "self",
		type: "Temperature",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Clever",
	},
	energybeam: {
		num: 8,
		accuracy: 100,
		basePower: 50,
		basePowerCallback(pokemon, target, move) {
			this.debug("Power modified by energy");
			return move.basePower * Math.abs(pokemon.getEnergyValue()) + 10;
		},
		category: "Special",
		name: "Energy Beam",
		isNonstandard: "Thing",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		target: "normal",
		type: "Temperature",
		contestType: "Clever",
	},

	// Time
	gravebite: {
		num: 1691,
		accuracy: 95,
		basePower: 90,
		category: "Physical",
		isNonstandard: "Thing",
		name: "Grave Bite",
		pp: 15,
		priority: 0,
		flags: {bite: 1, contact: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 30,
			volatileStatus: 'flinch',
		},
		target: "normal",
		type: "Time",
		contestType: "Clever",
	},
	minutehandslash: {
		num: 3,
		accuracy: 100,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Thing",
		name: "Minute Hand Slash",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		multihit: 6,
		secondary: null,
		target: "normal",
		type: "Time",
		contestType: "Cool",
	},
	hourhandslash: {
		num: 416,
		accuracy: 90,
		basePower: 150,
		category: "Physical",
		isNonstandard: "Thing",
		name: "Hour Hand Slash",
		pp: 5,
		priority: 0,
		flags: {contact: 1, recharge: 1, protect: 1, mirror: 1},
		self: {
			volatileStatus: 'mustrecharge',
		},
		secondary: null,
		target: "normal",
		type: "Time",
		contestType: "Tough",
	},
	/* midnightvision: {
		num: 500,
		accuracy: true,
		basePower: 120,
		category: "Special",
		isNonstandard: "Thing",
		name: "Midnight Vision",
		pp: 15,
		priority: 0,
		flags: {},
		sideCondition: 'midnightvision',
		onTryHit(source, target) {
			if (target.side.sideConditions['midnightvision']) {
				return false;
			}
		},
		condition: {
			duration: 0,
			onSideStart(side, source) {
				this.effectState.attackStat = (source.getStat('spa', false, true));
				this.hint(`Midnight Vision: ${this.effectState.attackStat}!`);
			},
			onSideResidualOrder: -10,
			onSideResidual(side) {
				for (const foe of side.active) {
					if (this.effectState.duration === 2) {
						this.hint(`A storm arrives for ${side.name}!`);
					}
				}
			},
		},
		secondary: null,
		target: "allySide",
		type: "Weather",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Clever",
	}, */
	sandsoftime: {
		num: 416,
		accuracy: true,
		basePower: 10,
		category: "Special",
		isNonstandard: "Thing",
		name: "Sands of Time",
		pp: 15,
		priority: 0,
		flags: {mirror: 1},
		volatileStatus: 'sandsoftime',
		condition: {
			duration: 5,
			onStart(pokemon) {
				this.add('-start', pokemon, 'Sands of Time');
			},
			onEnd(pokemon) {
				this.add('-end', pokemon, 'Sands of Time', '[silent]');
			},
			onResidual(pokemon) {
				const timeHazard = this.dex.getActiveMove('Stealth Rock');
				timeHazard.type = 'Time';
				const typeMod = this.clampIntRange(pokemon.runEffectiveness(timeHazard), -6, 6);
				this.damage(pokemon.maxhp * Math.pow(2, typeMod) / 16);
			},
		},
		secondary: null,
		target: "normal",
		type: "Time",
		contestType: "Smart",
	},
	ricochetmirror: {
		num: 416,
		accuracy: 100,
		basePower: 70,
		category: "Special",
		isNonstandard: "Thing",
		name: "Ricochet Mirror",
		pp: 10,
		priority: -5,
		flags: {contact: 1, protect: 1, mirror: 1},
		onAfterMoveSecondary(target) {
			if (!target || !target.hp) return false;
			const pos = target.position;
			if (!this.runEvent('DragOut', target)) return false;
			if (!this.actions.switchIn(target, pos, this.effect, true, true)) return false;
			return true;
		},
		onAfterMoveSecondarySelf(source) {
			if (!source || !source.hp) return false;
			const pos = source.position;
			if (!this.runEvent('DragOut', source)) return false;
			if (!this.actions.switchIn(source, pos, this.effect, true, true)) return false;
			return true;
		},
		secondary: null,
		target: "normal",
		type: "Time",
		contestType: "Smart",
	},
	replay: {
		num: 1689,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Thing",
		name: "Replay",
		pp: 15,
		priority: 0,
		flags: {protect: 1, authentic: 1, mystery: 1},
		onHit(target, source) {
			if (!target.lastMove || target.volatiles['dynamax']) return false;
			const lastMove = target.lastMove;
			const moveIndex = target.moves.indexOf(lastMove.id);
			const noReplay = [
				'assist', 'beakblast', 'belch', 'bide', 'celebrate', 'copycat', 'dynamaxcannon', 'focuspunch', 'iceball', 'instruct', 'kingsshield', 'mefirst', 'metronome', 'mimic', 'mirrormove', 'naturepower', 'obstruct', 'outrage', 'petaldance', 'rollout', 'shelltrap', 'sketch', 'sleeptalk', 'struggle', 'thrash', 'transform', 'uproar',
				'replay', 'lookup', 'multistrike',
			];
			if (
				noReplay.includes(lastMove.id) || lastMove.isZ || lastMove.isMax ||
				lastMove.flags['charge'] || lastMove.flags['recharge'] ||
				target.volatiles['beakblast'] || target.volatiles['focuspunch'] || target.volatiles['shelltrap'] ||
				(target.moveSlots[moveIndex] && target.moveSlots[moveIndex].pp <= 0)
			) {
				return false;
			}
			this.add('-singleturn', target, 'move: Replay', '[of] ' + source);
			this.actions.runMove(target.lastMove.id, target, target.lastMoveTargetLoc!);
		},
		secondary: null,
		target: "normal",
		type: "Time",
		zMove: {boost: {spa: 1}},
		contestType: "Clever",
	},
	timecapsule: {
		num: -273,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Thing",
		name: "Time Capsule",
		pp: 10,
		priority: 0,
		flags: {snatch: 1},
		onTryHit(pokemon, target, move) {
			let success = false;
			let statName: BoostID;
			for (statName in pokemon.boosts) {
				const stage = pokemon.boosts[statName];
				if (stage !== 0) success = true;
			}
			if (!success) return false;
		},
		slotCondition: 'timecapsule',
		condition: {
			onStart(source) {
				let success = false;
				const pendingBoosts: BoostsTable = {...source.boosts};
				let statName: BoostID;
				for (statName in pendingBoosts) {
					if (pendingBoosts[statName]) success = true;
					else delete pendingBoosts[statName];
				}

				if (success) {
					this.effectState.passedBoosts = {...pendingBoosts};
					this.add('-clearboost', source, '[from] move: Time Capsule');
					source.clearBoosts();
				} else {
					source.side.removeSlotCondition(source, 'timecapsule');
				}
			},
			onRestart(target, source) {
				let success = false;
				const pendingBoosts: BoostsTable = {...source.boosts};
				let statName: BoostID;
				for (statName in pendingBoosts) {
					const stage = this.effectState.passedBoosts[statName];
					if (stage !== 0) {
						pendingBoosts[statName] += stage;
						pendingBoosts[statName] = Math.min(Math.max(pendingBoosts[statName], -6), 6);
					}
					if (pendingBoosts[statName] !== stage) {
						success = true;
					}
					if (!pendingBoosts[statName]) delete pendingBoosts[statName];
				}
				if (success) {
					this.effectState.passedBoosts = {...pendingBoosts};
					this.add('-clearboost', source, '[from] move: Time Capsule');
					source.clearBoosts();
					if (!this.effectState.passedBoosts.keys().length) {
						source.side.removeSlotCondition(source, 'timecapsule');
					}
				}
			},
			onSwap(target) {
				if (!target.fainted) {
					this.add('-activate', '[from] move: Time Capsule');
					this.boost(this.effectState.passedBoosts, target);
					target.side.removeSlotCondition(target, 'timecapsule');
				}
			},
		},
		secondary: null,
		target: "self",
		type: "Time",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Clever",
	},
	coagulate: {
		num: -276,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Thing",
		name: "Coagulate",
		pp: 5,
		priority: 0,
		flags: {snatch: 1, heal: 1},
		volatileStatus: 'coagulate',
		condition: {
			duration: 2,
			onRestart(pokemon) {
				this.effectState.duration = 2;
			},
			onModifyPriority(priority, source, target, move) {
				if (move.id === 'coagulate') {
					return priority + 1;
				}
			},
		},
		heal: [1, 2],
		secondary: null,
		target: "self",
		type: "Time",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Clever",
	},
	timeloop: {
		num: 4313,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Thing",
		name: "Time Loop",
		pp: 10,
		priority: 0,
		flags: {mirror: 1},
		pseudoWeather: 'timeloop',
		condition: {
			duration: 5,
			onStart(target, source) {
				this.add('-fieldstart', 'move: Time Loop', '[of] ' + source);
			},
			onRestart(target, source) {
				this.field.removePseudoWeather('timeloop');
			},
			onOverrideAction(pokemon, target, move) {
				const noLoop = [
					'assist', 'copycat', 'encore', 'mefirst', 'metronome', 'mimic', 'mirrormove', 'naturepower', 'sketch', 'sleeptalk', 'struggle', 'transform', 'timeloop',
				];
				let loopMove: Move | ActiveMove | null = pokemon.lastMove;
				if (!loopMove || pokemon.volatiles['dynamax']) return;

				if (loopMove.isMax && loopMove.baseMove) loopMove = this.dex.moves.get(loopMove.baseMove);
				const moveIndex = pokemon.moves.indexOf(loopMove.id);
				if (loopMove.isZ || noLoop.includes(loopMove.id) || !pokemon.moveSlots[moveIndex] || pokemon.moveSlots[moveIndex].pp <= 0) {
					// it failed
					return;
				}
				if (move.id !== loopMove.id) return loopMove.id;
			},
			onDisableMove(pokemon) {
				const noLoop = [
					'assist', 'copycat', 'encore', 'mefirst', 'metronome', 'mimic', 'mirrormove', 'naturepower', 'sketch', 'sleeptalk', 'struggle', 'transform', 'timeloop',
				];
				let move: Move | ActiveMove | null = pokemon.lastMove;
				if (!move || pokemon.volatiles['dynamax']) return;
				if (move.isMax && move.baseMove) move = this.dex.moves.get(move.baseMove);
				const moveIndex = pokemon.moves.indexOf(move.id);
				if (move.isZ || noLoop.includes(move.id) || !pokemon.moveSlots[moveIndex] || pokemon.moveSlots[moveIndex].pp <= 0) return;
				for (const moveSlot of pokemon.moveSlots) {
					if (moveSlot.id !== move.id) {
						pokemon.disableMove(moveSlot.id);
					}
				}
			},
			onEnd() {
				this.add('-fieldend', 'move: Time Loop');
			},
		},
		secondary: null,
		target: "all",
		type: "Time",
		zMove: {boost: {accuracy: 1}},
		contestType: "Clever",
	},
	pause: {
		num: -276,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Thing",
		name: "Pause",
		pp: 5,
		priority: -7,
		flags: {protect: 1, reflectable: 1, mirror: 1, authentic: 1},
		volatileStatus: 'pause',
		onTry(source, target, move) {
			if (target.volatiles['pause']) return false;
			if (target.volatiles['fastforward']) return false;
		},
		condition: {
			duration: 2,
			onStart(pokemon) {
				this.add('-start', pokemon, 'Pause');
			},
			onEnd(pokemon) {
				this.add('-end', pokemon, 'Pause', '[silent]');
			},
			onTrapPokemon(pokemon) {
				pokemon.tryTrap();
			},
			onBeforeMove(attacker) {
				this.add('cant', attacker);
				return false;
			},
		},
		secondary: null,
		target: "normal",
		type: "Time",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Clever",
	},
	fastforward: {
		num: -276,
		accuracy: 80,
		basePower: 0,
		category: "Status",
		isNonstandard: "Thing",
		name: "Fast Forward",
		pp: 5,
		priority: 2,
		flags: {protect: 1, reflectable: 1, mirror: 1, authentic: 1},
		onTry(source, target, move) {
			if (target.volatiles['pause']) return false;
			if (target.volatiles['fastforward']) return false;
			target.addVolatile('fastforwarding');
			if (!target.volatiles['fastforwarding']) return false;
		},
		onHit(target, source) {
			const action = this.queue.willMove(target);
			if (action) {
				this.queue.cancelMove(target);
				this.add('-activate', target, 'move: Fast Forward');
				this.actions.useMove(action.move, target);
			}

			if (target.volatiles['dynamax']) return false;
			const bannedMoves = ['openturn', 'fastforward', 'pause', 'replay'];
			const moves = [];
			for (const moveSlot of target.moveSlots) {
				const moveid = moveSlot.id;
				if (!moveid) continue;
				const move = this.dex.moves.get(moveid);
				if (bannedMoves.includes(moveid) || move.flags['charge'] || move.flags['recharge'] || (move.isZ && move.basePower !== 1)) {
					continue;
				}
				moves.push(moveid);
			}

			for (let i = 0; i < 2; i++) {
				let randomMove = '';
				if (moves.length) randomMove = this.sample(moves);
				if (!randomMove) break;
				this.actions.useMove(randomMove, target);
			}

			target.removeVolatile('fastforwarding');
			target.addVolatile('fastforward');
		},
		secondary: null,
		target: "normal",
		type: "Time",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Clever",
	},
	temporaladjustment: {
		num: 500,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Thing",
		name: "Temporal Adjustment",
		pp: 5,
		priority: 0,
		flags: {},
		weather: 'Time Dilation',
		secondary: null,
		target: "all",
		type: "Time",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Clever",
	},
	countdown: {
		num: -276,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		isNonstandard: "Thing",
		name: "Countdown",
		pp: 5,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1},
		onTry(source, target, move) {
			if (target.volatiles['perishsong']) return false;
		},
		onHit(target, source, move) {
			target.addVolatile('perishsong');
			this.add('-start', target, 'perish3', '[silent]');
		},
		secondary: null,
		target: "normal",
		type: "Time",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Clever",
	},
	timesup: {
		num: 329,
		accuracy: 5,
		basePower: 0,
		category: "Special",
		isNonstandard: "Thing",
		name: "Time's Up",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		ohko: true,
		onModifyMove(move, pokemon, target) {
			if (target?.volatiles['perishsong']) {
				move.accuracy = true;
			}
		},
		target: "normal",
		type: "Time",
		zMove: {basePower: 180},
		maxMove: {basePower: 130},
		contestType: "Clever",
	},
	timebomb: {
		num: 248,
		accuracy: true,
		basePower: 100,
		category: "Physical",
		name: "Time Bomb",
		isNonstandard: "Thing",
		pp: 10,
		priority: 0,
		flags: {},
		ignoreImmunity: true,
		isFutureMove: true,
		onTry(source, target) {
			if (!target.side.addSlotCondition(target, 'futuremove')) return false;
			Object.assign(target.side.slotConditions[target.position]['futuremove'], {
				duration: 3,
				move: 'timebomb',
				source: source,
				moveData: {
					id: 'timebomb',
					name: "Time Bomb",
					accuracy: true,
					basePower: 100,
					category: "Physical",
					priority: 0,
					flags: {},
					ignoreImmunity: false,
					effectType: 'Move',
					isFutureMove: true,
					type: 'Time',
				},
			});
			this.add('-start', source, 'move: Time Bomb');
			return this.NOT_FAIL;
		},
		secondary: null,
		target: "normal",
		type: "Time",
		contestType: "Clever",
	},

	// Weather
	rapidvortex: {
		num: 250,
		accuracy: 100,
		basePower: 25,
		category: "Physical",
		isNonstandard: "Thing",
		name: "Rapid Vortex",
		pp: 20,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		volatileStatus: 'partiallytrapped',
		secondary: null,
		target: "normal",
		type: "Weather",
		contestType: "Cool",
	},
	winddispersal: {
		num: 525,
		accuracy: 90,
		basePower: 40,
		category: "Special",
		isNonstandard: "Thing",
		name: "Wind Dispersal",
		pp: 10,
		priority: -5,
		flags: {protect: 1, mirror: 1},
		forceSwitch: true,
		slotCondition: 'winddispersal',
		condition: {
			duration: 1,
			onStart(target) {
				const boosts: SparseBoostsTable = {};
				let statName: BoostID;
				for (statName in target.boosts) {
					const stage = target.boosts[statName];
					if (stage !== 0) {
						boosts[statName] = stage;
						this.effectState.success = true;
					}
				}
				this.effectState.passedBoosts = boosts;
			},
			onSwap(target) {
				if (!target.fainted && this.effectState.success) {
					this.add('-activate', target, 'move: Wind Dispersal', target);
					this.boost(this.effectState.passedBoosts, target);
				}
			},
		},
		target: "normal",
		type: "Weather",
		contestType: "Clever",
	},
	hurricanewinds: {
		num: 1222,
		accuracy: 100,
		basePower: 0,
		category: "Special",
		isNonstandard: "Thing",
		name: "Hurricane Winds",
		pp: 30,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onModifyMove(move, pokemon) {
			const i = this.random(100);
			if (i < 20) {
				move.magnitude = 1;
				move.basePower = 40;
			} else if (i < 50) {
				move.magnitude = 2;
				move.basePower = 70;
			} else if (i < 75) {
				move.magnitude = 3;
				move.basePower = 90;
			} else if (i < 95) {
				move.magnitude = 4;
				move.basePower = 110;
			} else {
				move.magnitude = 5;
				move.basePower = 150;
			}
		},
		onUseMoveMessage(pokemon, target, move) {
			this.hint(`Category ${move.magnitude}!`);
			// this.add('-activate', pokemon, 'move: Hurricane Winds', move.magnitude);
		},
		secondary: null,
		target: "allAdjacent",
		type: "Weather",
		zMove: {basePower: 140},
		maxMove: {basePower: 140},
		contestType: "Clever",
	},
	bluejet: {
		num: 1222,
		accuracy: 100,
		basePower: 140,
		category: "Special",
		isNonstandard: "Thing",
		name: "Blue Jet",
		pp: 0.625,
		priority: 0,
		flags: {protect: 1, mirror: 1, pulse: 1},
		secondary: null,
		target: "any",
		type: "Weather",
		contestType: "Cool",
	},
	stormcell: {
		num: 694,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Thing",
		name: "Storm Cell",
		pp: 20,
		priority: 0,
		flags: {snatch: 1},
		sideCondition: 'stormcell',
		condition: {
			duration: 2,
			durationCallback(target, source, effect) {
				if (effect?.id === 'legendsoftreasure') {
					return 6;
				} else if (this.field.isWeather('windy')) {
					return 4;
				}
				return 2;
			},
			onAnyModifyDamage(damage, source, target, move) {
				if (target !== source && target.side === this.effectState.target) {
					if (target.getMoveHitData(move).crit || move.infiltrates || move.id === 'staticstrike' || target.hasItem('yellowsafetyvest')) return;
					this.debug('stormcell weaken');
					if (target.side.active.length > 1) return this.chainModify(0.75);
					else return this.chainModify(0.66);
				}
				if (target !== source && source.side === this.effectState.target) {
					if (move.type !== 'Weather' || source.hasItem('yellowsafetyvest')) return;
					this.debug('stormcell strengthen');
					return this.chainModify(1.5);
				}
			},
			onSideStart(side) {
				this.add('-sidestart', side, 'move: Storm Cell');
			},
			onSideResidualOrder: 21,
			onSideResidualSubOrder: 1,
			onSideEnd(side) {
				this.add('-sideend', side, 'move: Storm Cell');
			},
		},
		secondary: null,
		target: "allySide",
		type: "Weather",
		zMove: {effect: 'redirect'},
		contestType: "Cool",
	},
	blessedrain: {
		num: 500,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Thing",
		name: "Blessed Rain",
		pp: 0.625,
		priority: 0,
		flags: {snatch: 1},
		onHitSide(side, source) {
			let success = false;
			for (const target of side.active) {
				for (const moveSlot of target.moveSlots) {
					if (moveSlot.move === 'Blessed Rain' || moveSlot.maxpp === moveSlot.pp) continue;
					success = true;
					if (moveSlot.maxpp - moveSlot.pp > 5) {
						moveSlot.pp += 5;
					} else {
						moveSlot.pp = moveSlot.maxpp;
					}
				}
			}
			if (success) {
				this.add('-activate', source, 'move: Blessed Rain');
			} else {
				return false;
			}
		},
		secondary: null,
		target: "allySide",
		type: "Weather",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Beautiful",
	},
	advancedforecasting: {
		num: 500,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Thing",
		name: "Advanced Forecasting",
		pp: 5,
		priority: 0,
		flags: {snatch: 1},
		sideCondition: 'advancedforecasting',
		condition: {
			duration: 3,
			durationCallback(target, source, effect) {
				const dur = 3 + Math.floor(Math.random() * 2);
				return dur;
			},
			onAnyModifyDamage(damage, source, target, move) {
				if (target !== source && source.side === this.effectState.target && this.effectState.duration === 1) {
					this.debug('adv forecast strengthen');
					return this.chainModify(2);
				}
			},
			onSideStart(side) {
				this.hint(`A storm was predicted to arrive in ${this.effectState.duration - 1} turns!`);
			},
			onSideResidualOrder: 21,
			onSideResidualSubOrder: 1,
			onSideResidual(side) {
				if (this.effectState.duration === 2) {
					this.hint(`A storm arrives for ${side.name}!`);
				}
			},
		},
		secondary: null,
		target: "allySide",
		type: "Weather",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Clever",
	},
	weatherfront: {
		num: 500,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Thing",
		name: "Weather Front",
		pp: 5,
		priority: 0,
		flags: {},
		weather: 'Windy',
		secondary: null,
		target: "all",
		type: "Weather",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Tough",
	},
	ascend: {
		num: 1119,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "ThingInf",
		name: "Ascend",
		pp: 3,
		priority: 0,
		flags: {charge: 1, gravity: 1, distance: 1},
		onTryMove(attacker, defender, move) {
			if (attacker.removeVolatile(move.id)) {
				this.boost({spa: 1, spe: 1}, attacker);
				return;
			}
			// this.add('-prepare', attacker, move.name);
			if (!this.runEvent('ChargeMove', attacker, defender, move)) {
				this.boost({spa: 1, spe: 1}, attacker);
				return;
			}
			attacker.addVolatile('twoturnmove', defender);
			return null;
		},
		condition: {
			duration: 2,
			onInvulnerability(target, source, move) {
				if (['gust', 'twister', 'skyuppercut', 'thunder', 'hurricane', 'smackdown', 'thousandarrows'].includes(move.id)) {
					return;
				}
				return false;
			},
			onSourceModifyDamage(damage, source, target, move) {
				if (move.id === 'gust' || move.id === 'twister') {
					return this.chainModify(2);
				}
			},
		},
		secondary: null,
		target: "self",
		type: "Weather",
		contestType: "Beautiful",
	},
	lightningstrike: {
		num: 1515,
		accuracy: 85,
		basePower: 70,
		category: "Special",
		name: "Lightning Strike",
		isNonstandard: "Thing",
		pp: 1,
		priority: 0,
		flags: {mirror: 1},
		onModifyMove(move, pokemon) {
			pokemon.addVolatile('lightningstrike');
		},
		condition: {
			duration: 1,
			onModifyAtkPriority: -101,
			onModifyAtk(atk, pokemon, defender, move) {
				if (move.id === 'lightningstrike') {
					return 200;
				}
			},
		},
		target: "randomNormal",
		type: "Weather",
		contestType: "Clever",
	},
	lightningstorm: {
		num: 1446,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Thing",
		name: "Lightning Storm",
		pp: 20,
		priority: 0,
		flags: {reflectable: 1},
		sideCondition: 'lightningstorm',
		condition: {
			duration: 5,
			// this is a side condition
			onSideStart(side, source) {
				this.add('-sidestart', side, 'move: Lightning Storm');
				this.effectState.source = source;
			},
			onModifyAtkPriority: -101,
			onModifyAtk(atk, pokemon, defender, move) {
				if (move.id === 'lightningstrike') {
					return 200;
				}
			},
			onSideResidual() {
				const pokemon = this.effectState.source;
				const foes: Pokemon[] = [];
				for (const foe of pokemon.foes()) {
					if (foe.hasItem('yellowsafetyvest')) continue;
					foes.push(foe);
				}
				if (foes.length === 0) return;
				const foeNum = this.random(0, foes.length);
				const target = foes[foeNum];
				const hitMove = this.dex.getActiveMove('Lightning Strike');
				if (pokemon !== null && target !== null) {
					this.add('-activate', target, 'move: Lightning Storm');
					this.actions.trySpreadMoveHit([target], pokemon, hitMove, true);
				}
				this.checkWin();
			},
			onSideEnd(side) {
				this.add('-sideend', side, 'move: Lightning Storm');
			},
		},
		secondary: null,
		target: "foeSide",
		type: "Weather",
		zMove: {boost: {def: 1}},
		contestType: "Clever",
	},

	// Yellow
	yellowslap: {
		num: 33,
		accuracy: 95,
		basePower: 40,
		category: "Physical",
		isNonstandard: "Thing",
		name: "Yellow Slap",
		pp: 35,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 10,
			status: 'blinded',
		},
		target: "normal",
		type: "Yellow",
		contestType: "Tough",
	},
	limboeclipse: {
		num: 679,
		accuracy: 65,
		basePower: 80,
		category: "Physical",
		isNonstandard: "Thing",
		name: "Limbo Eclipse",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onMoveFail(target, source, move) {
			this.boost({atk: 2}, source);
		},
		secondary: {
			chance: 100,
			boosts: {
				atk: -1,
			},
		},
		target: "normal",
		type: "Yellow",
		contestType: "Cool",
	},
	flashmissle: {
		num: 33,
		accuracy: 50,
		basePower: 100,
		category: "Physical",
		isNonstandard: "Thing",
		name: "Flash Missle",
		pp: 10,
		priority: 1,
		flags: {bullet: 1, distance: 1, protect: 1, mirror: 1},
		target: "normal",
		type: "Yellow",
		contestType: "Clever",
	},
	yellowgigahit: {
		num: 502,
		accuracy: 80,
		basePower: 110,
		category: "Physical",
		isNonstandard: "Thing",
		name: "Yellow Giga-Hit",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Yellow",
		contestType: "Tough",
	},
	luminesce: {
		num: 33,
		accuracy: 95,
		basePower: 40,
		category: "Special",
		isNonstandard: "Thing",
		name: "Luminesce",
		pp: 35,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 10,
			status: 'blinded',
		},
		target: "normal",
		type: "Yellow",
		contestType: "Cute",
	},
	staticstrike: {
		num: 33,
		accuracy: 90,
		basePower: 70,
		category: "Special",
		isNonstandard: "Thing",
		name: "Static Strike",
		pp: 25,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onTryHit(source, target, move) {
			if (target.side.sideConditions['stormcell'] || target.side.sideConditions['dustcloud']) {
				move.basePower *= 2;
				move.accuracy = true;
			}
		},
		secondary: null,
		target: "normal",
		type: "Yellow",
		contestType: "Clever",
	},
	beamscatter: {
		num: 679,
		accuracy: 65,
		basePower: 90,
		category: "Special",
		isNonstandard: "Thing",
		name: "Beam Scatter",
		pp: 15,
		priority: 0,
		flags: {pulse: 1, protect: 1, mirror: 1},
		onMoveFail(target, source, move) {
			target?.side.addSideCondition('beamfield');
		},
		secondary: null,
		target: "normal",
		type: "Yellow",
		contestType: "Cool",
	},
	brilliantflash: {
		num: -257,
		accuracy: 85,
		basePower: 100,
		category: "Special",
		isNonstandard: "Thing",
		name: "Brilliant Flash",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 20,
			status: 'blinded',
		},
		target: "allAdjacentFoes",
		type: "Yellow",
		contestType: "Beautiful",
	},
	yellowsoak: {
		num: 74,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Thing",
		name: "Yellow Soak",
		pp: 20,
		priority: 0,
		flags: {snatch: 1},
		onModifyMove(move, pokemon) {
			if (['yellowish'].includes(pokemon.effectiveWeather())) move.boosts = {atk: 1, def: 1, spa: 1, spd: 1, spe: 1};
		},
		boosts: {
			def: 1,
			spd: 1,
		},
		secondary: null,
		target: "self",
		type: "Yellow",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Cute",
	},
	autumnaloffering: {
		num: 694,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Thing",
		name: "Autumnal Offering",
		pp: 20,
		priority: 0,
		flags: {snatch: 1},
		sideCondition: 'autumnaloffering',
		condition: {
			duration: 1,
			onStart(side) {
				this.effectState.multiplier = 1.5;
				this.add('-sidestart', side, 'Autumnal Offering');
			},
			onRestart(side) {
				this.effectState.multiplier *= 1.5;
				this.add('-sidestart', side, 'Autumnal Offering');
			},
			onAllyBasePowerPriority: 10,
			onAllyBasePower(basePower) {
				this.debug('Boosting from Autumnal Offering: ' + this.effectState.multiplier);
				return this.chainModify(this.effectState.multiplier);
			},
			onResidualOrder: 21,
			onEnd(side) {
				this.add('-sideend', side, 'Autumnal Offering');
			},
		},
		secondary: null,
		target: "allySide",
		type: "Yellow",
		zMove: {boost: {spe: 1}},
		contestType: "Cute",
	},
	fireworks: {
		num: 361,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Thing",
		name: "Fireworks\u0021",
		pp: 10,
		priority: 0,
		flags: {snatch: 1},
		onTryHit(pokemon, target, move) {
			if (!this.canSwitch(pokemon.side)) {
				delete move.selfdestruct;
				return false;
			}
		},
		selfdestruct: "ifHit",
		slotCondition: 'fireworks',
		condition: {
			onStart() {
				this.effectState.counter = 1;
			},
			onRestart() {
				this.effectState.counter++;
			},
			onSwap(target) {
				let hasOffensive = false;
				for (const moveSlot of target.moveSlots) {
					const moveid = moveSlot.id;
					if (!moveid) continue;
					const move = this.dex.moves.get(moveid);
					if (move.category === 'Physical' || move.category === 'Special') hasOffensive = true;
				}
				if (!target.fainted && hasOffensive) {
					while (this.effectState.counter > 0) {
						target.addVolatile('fireworked');
						this.effectState.counter--;
					}
					target.side.removeSlotCondition(target, 'fireworks');
				}
			},
		},
		secondary: null,
		target: "self",
		type: "Yellow",
		zMove: {effect: 'healreplacement'},
		contestType: "Cool",
	},
	vetoslip: {
		num: 270,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		isNonstandard: "Thing",
		name: "Veto Slip",
		pp: 20,
		priority: 5,
		flags: {authentic: 1},
		volatileStatus: 'vetoslip',
		onTryHit(target) {
			if (target.volatiles['vetoslip'] || target.volatiles['vetoed']) return false;
		},
		condition: {
			duration: 1,
			onStart(target, source) {
				this.add('-start', target, 'move: Veto Slip');
			},
			onSourceAccuracy(accuracy, target, source, move) {
				if (target !== source) return false;
				return accuracy;
			},
			onEnd(pokemon) {
				pokemon.addVolatile('vetoed');
				this.add('-end', pokemon, 'move: Veto Slip', '[silent]');
			},
		},
		secondary: null,
		target: "normal",
		type: "Yellow",
		zMove: {effect: 'heal'},
		contestType: "Clever",
	},
	yellowshift: {
		num: 500,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Thing",
		name: "Yellow-Shift",
		pp: 5,
		priority: 0,
		flags: {},
		weather: 'Yellowish',
		secondary: null,
		target: "all",
		type: "Yellow",
		zMove: {effect: 'crit2'},
		contestType: "Beautiful",
	},
	transmute: {
		num: 500,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Thing",
		name: "Transmute",
		pp: 5,
		priority: 0,
		flags: {},
		onHit(pokemon) {
			const items = Object.keys(this.dex.data.Items);

			if (!pokemon.item) {
				if (pokemon.hp <= pokemon.maxhp / 4 || pokemon.maxhp === 1) { // Shedinja clause
					return false;
				}
				this.directDamage(pokemon.maxhp / 4);
			} else {
				const old_item = pokemon.getItem();
				pokemon.setItem('');
				pokemon.lastItem = old_item.id;
				pokemon.usedItemThisTurn = true;
			}

			let item = '';
			do {
				item = this.sample(items);
			} while (this.dex.data.Items[item].isNonstandard !== 'Thing');

			this.add('-item', pokemon, this.dex.items.get(item), '[from] move: Transmute');
			pokemon.setItem(item);
		},
		secondary: null,
		target: "self",
		type: "Yellow",
		zMove: {effect: 'heal'},
		contestType: "Clever",
	},
	truesight: {
		num: 498,
		accuracy: 10,
		basePower: 100,
		category: "Special",
		isNonstandard: "ThingInf",
		name: "True Sight",
		pp: 3,
		priority: 0,
		flags: {},
		ignorePositiveDefensive: true,
		secondary: null,
		target: "any",
		type: "Yellow",
		contestType: "Clever",
	},
	consume: {
		num: 374,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Thing",
		name: "Consume",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, mystery: 1},
		onPrepareHit(target, source, move) {
			if (source.ignoringItem()) return false;
			const item = source.getItem();
			if (!this.singleEvent('TakeItem', item, source.itemState, source, source, move, item)) return false;
			if (!item.consume) return false;
		},
		onHit(pokemon) {
			const item = pokemon.getItem();
			if (item.consume?.healPercent) {
				this.heal(pokemon.baseMaxhp * item.consume?.healPercent / 100, pokemon);
			}
			if (item.consume?.damagePercent) {
				this.damage(pokemon.baseMaxhp * item.consume?.damagePercent / 100, pokemon);
			}
			if (item.consume?.randomPercent) {
				const randP = this.random(-25, 100);
				if (randP > 0) {
					this.heal(pokemon.baseMaxhp * randP / 100, pokemon);
				} else if (randP < 0) {
					this.damage(-pokemon.baseMaxhp * randP / 100, pokemon);
				}
			}
			pokemon.addVolatile('consume');
		},
		condition: {
			onUpdate(pokemon) {
				const item = pokemon.getItem();
				pokemon.setItem('');
				pokemon.lastItem = item.id;
				pokemon.usedItemThisTurn = true;
				this.add('-enditem', pokemon, item.name, '[from] move: Consume');
				this.runEvent('AfterUseItem', pokemon, null, null, item);
				pokemon.removeVolatile('consume');
			},
		},
		secondary: null,
		target: "self",
		type: "Yellow",
		contestType: "Clever",
	},
	gascloud: {
		num: 433,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Thing",
		name: "Gas Cloud",
		pp: 10,
		priority: 0,
		flags: {gas: 1},
		pseudoWeather: 'gascloud',
		condition: {
			duration: 1,
			onStart(target, source, effect) {
				this.add('-fieldstart', 'move: Gas Cloud', '[of] ' + source);
				this.effectState.source = source;
			},
			onResidual(pokemon) {
				const source = this.effectState.source;
				if (source !== pokemon) {
					const hitMove = this.dex.getActiveMove('Gas');
					this.actions.trySpreadMoveHit([pokemon], source, hitMove, true);
				}
			},
			onEnd() {
				this.add('-fieldend', 'move: Gas Cloud');
			},
		},
		secondary: null,
		target: "all",
		type: "Yellow",
		zMove: {boost: {accuracy: 1}},
		contestType: "Tough",
	},
	gas: {
		num: 1515,
		accuracy: 100,
		basePower: 40,
		category: "Special",
		name: "Gas",
		isNonstandard: "Thing",
		pp: 30,
		priority: 0,
		flags: {authentic: 1, gas: 1},
		target: "normal",
		type: "Yellow",
		contestType: "Tough",
	},
	gasblast: {
		num: 1515,
		accuracy: 90,
		basePower: 90,
		category: "Special",
		name: "Gas Blast",
		isNonstandard: "Thing",
		pp: 10,
		priority: 0,
		flags: {authentic: 1, gas: 1},
		secondary: {
			chance: 20,
			volatileStatus: 'flinch',
		},
		target: "normal",
		type: "Yellow",
		contestType: "Tough",
	},


	// Infinity

	// NEW GENERICS
	maxbugs: {
		num: -200,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Thing",
		name: "Max Bugs",
		pp: 10,
		priority: 0,
		flags: {},
		isMax: true,
		self: {
			onHit(source) {
				if (!source.volatiles['dynamax']) return;
				this.field.setWeather('locustswarm');
			},
		},
		target: "adjacentFoe",
		type: "Arthropod",
		contestType: "Cool",
	},
	maxpowderfall: {
		num: -201,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Thing",
		name: "Max Powderfall",
		pp: 10,
		priority: 0,
		flags: {},
		isMax: true,
		self: {
			onHit(source) {
				if (!source.volatiles['dynamax']) return;
				this.field.setWeather('locustswarm');
			},
		},
		target: "adjacentFoe",
		type: "Dirt",
		contestType: "Cool",
	},
	maxdistance: {
		num: -202,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Thing",
		name: "Max Distance",
		pp: 10,
		priority: 0,
		flags: {},
		isMax: true,
		self: {
			onHit(source) {
				if (!source.volatiles['dynamax']) return;
				this.field.setWeather('locustswarm');
			},
		},
		target: "adjacentFoe",
		type: "Far",
		contestType: "Cool",
	},
	maxswimming: {
		num: -203,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Thing",
		name: "Max Swimming",
		pp: 10,
		priority: 0,
		flags: {},
		isMax: true,
		self: {
			onHit(source) {
				if (!source.volatiles['dynamax']) return;
				this.field.setWeather('locustswarm');
			},
		},
		target: "adjacentFoe",
		type: "Fish",
		contestType: "Cool",
	},
	maxgrowth: {
		num: -204,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Thing",
		name: "Max Growth",
		pp: 10,
		priority: 0,
		flags: {},
		isMax: true,
		self: {
			onHit(source) {
				if (!source.volatiles['dynamax']) return;
				this.field.setWeather('locustswarm');
			},
		},
		target: "adjacentFoe",
		type: "Green",
		contestType: "Cool",
	},
	hmax: {
		num: -205,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Thing",
		name: "Hmax",
		pp: 10,
		priority: 0,
		flags: {},
		isMax: true,
		self: {
			onHit(source) {
				if (!source.volatiles['dynamax']) return;
				this.field.setWeather('locustswarm');
			},
		},
		target: "adjacentFoe",
		type: "H",
		contestType: "Cool",
	},
	maxtentacles: {
		num: -206,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Thing",
		name: "Max Tentacles",
		pp: 10,
		priority: 0,
		flags: {},
		isMax: true,
		self: {
			onHit(source) {
				if (!source.volatiles['dynamax']) return;
				this.field.setWeather('locustswarm');
			},
		},
		target: "adjacentFoe",
		type: "Hair",
		contestType: "Cool",
	},
	maxindustry: {
		num: -207,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Thing",
		name: "Max Industry",
		pp: 10,
		priority: 0,
		flags: {},
		isMax: true,
		self: {
			onHit(source) {
				if (!source.volatiles['dynamax']) return;
				this.field.setWeather('locustswarm');
			},
		},
		target: "adjacentFoe",
		type: "Industrial",
		contestType: "Cool",
	},
	maxflood: {
		num: -208,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Thing",
		name: "Max Flood",
		pp: 10,
		priority: 0,
		flags: {},
		isMax: true,
		self: {
			onHit(source) {
				if (!source.volatiles['dynamax']) return;
				this.field.setWeather('locustswarm');
			},
		},
		target: "adjacentFoe",
		type: "Liquid",
		contestType: "Cool",
	},
	maxvolume: {
		num: -209,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Thing",
		name: "Max Volume",
		pp: 10,
		priority: 0,
		flags: {},
		isMax: true,
		self: {
			onHit(source) {
				if (!source.volatiles['dynamax']) return;
				this.field.setWeather('locustswarm');
			},
		},
		target: "adjacentFoe",
		type: "Music",
		contestType: "Cool",
	},
	maxfullmoon: {
		num: -210,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Thing",
		name: "Max Fullmoon",
		pp: 10,
		priority: 0,
		flags: {},
		isMax: true,
		self: {
			onHit(source) {
				if (!source.volatiles['dynamax']) return;
				this.field.setWeather('nighttime');
			},
		},
		target: "adjacentFoe",
		type: "Night",
		contestType: "Cool",
	},
	min: {
		num: -211,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Thing",
		name: "Min",
		pp: 10,
		priority: 0,
		flags: {},
		isMax: true,
		self: {
			onHit(source) {
				if (!source.volatiles['dynamax']) return;
				this.field.setWeather('locustswarm');
			},
		},
		target: "adjacentFoe",
		type: "No",
		contestType: "Cool",
	},
	maxmath: {
		num: -212,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Thing",
		name: "Max Math",
		pp: 10,
		priority: 0,
		flags: {},
		isMax: true,
		self: {
			onHit(source) {
				if (!source.volatiles['dynamax']) return;
				this.field.setWeather('locustswarm');
			},
		},
		target: "adjacentFoe",
		type: "Science",
		contestType: "Cool",
	},
	maxgoal: {
		num: -213,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Thing",
		name: "Max Goal",
		pp: 10,
		priority: 0,
		flags: {},
		isMax: true,
		self: {
			onHit(source) {
				if (!source.volatiles['dynamax']) return;
				this.field.setWeather('locustswarm');
			},
		},
		target: "adjacentFoe",
		type: "Sport",
		contestType: "Cool",
	},
	maxslash: {
		num: -214,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Thing",
		name: "Max Slash",
		pp: 10,
		priority: 0,
		flags: {},
		isMax: true,
		self: {
			onHit(source) {
				if (!source.volatiles['dynamax']) return;
				this.field.setWeather('locustswarm');
			},
		},
		target: "adjacentFoe",
		type: "Sword",
		contestType: "Cool",
	},
	maxflux: {
		num: -215,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Thing",
		name: "Max Flux",
		pp: 10,
		priority: 0,
		flags: {},
		isMax: true,
		self: {
			onHit(source) {
				if (!source.volatiles['dynamax']) return;
				if (Math.random() < 0.5) {
					this.field.setWeather('hot');
				} else {
					this.field.setWeather('cold');
				}
			},
		},
		target: "adjacentFoe",
		type: "Temperature",
		contestType: "Cool",
	},
	maxrelativity: {
		num: -216,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Thing",
		name: "Max Relativity",
		pp: 10,
		priority: 0,
		flags: {},
		isMax: true,
		self: {
			onHit(source) {
				if (!source.volatiles['dynamax']) return;
				this.field.setWeather('timedilation');
			},
		},
		target: "adjacentFoe",
		type: "Time",
		contestType: "Cool",
	},
	maxstorm: {
		num: -217,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Thing",
		name: "Max Storm",
		pp: 10,
		priority: 0,
		flags: {},
		isMax: true,
		self: {
			onHit(source) {
				if (!source.volatiles['dynamax']) return;
				this.field.setWeather('windy');
			},
		},
		target: "adjacentFoe",
		type: "Weather",
		contestType: "Cool",
	},
	maxyellow: {
		num: -218,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Thing",
		name: "Max Yellow",
		pp: 10,
		priority: 0,
		flags: {},
		isMax: true,
		self: {
			onHit(source) {
				if (!source.volatiles['dynamax']) return;
				this.field.setWeather('yellowish');
			},
		},
		target: "adjacentFoe",
		type: "Yellow",
		contestType: "Cool",
	},
	absolutemax: {
		num: -219,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Thing",
		name: "Absolute Max",
		pp: 10,
		priority: 0,
		flags: {},
		isMax: true,
		self: {
			onHit(source) {
				if (!source.volatiles['dynamax']) return;
				this.field.setWeather('locustswarm');
			},
		},
		target: "adjacentFoe",
		type: "Infinity",
		contestType: "Cool",
	},
	diversitydeluge: {
		num: -220,
		accuracy: true,
		basePower: 1,
		category: "Physical",
		isNonstandard: "Thing",
		name: "Diversity Deluge",
		pp: 1,
		priority: 0,
		flags: {},
		isZ: "arthropodiumz",
		secondary: null,
		target: "normal",
		type: "Arthropod",
		contestType: "Cool",
	},
	soilupheaval: {
		num: -221,
		accuracy: true,
		basePower: 1,
		category: "Physical",
		isNonstandard: "Thing",
		name: "Soil Upheaval",
		pp: 1,
		priority: 0,
		flags: {},
		isZ: "dirtiumz",
		secondary: null,
		target: "normal",
		type: "Dirt",
		contestType: "Cool",
	},
	deepspacegammaray: {
		num: -222,
		accuracy: true,
		basePower: 1,
		category: "Physical",
		isNonstandard: "Thing",
		name: "Deep Space Gamma Ray",
		pp: 1,
		priority: 0,
		flags: {},
		isZ: "fariumz",
		secondary: null,
		target: "normal",
		type: "Far",
		contestType: "Cool",
	},
	scaledslap: {
		num: -223,
		accuracy: true,
		basePower: 1,
		category: "Physical",
		isNonstandard: "Thing",
		name: "Scaled Slap",
		pp: 1,
		priority: 0,
		flags: {},
		isZ: "fishiumz",
		secondary: null,
		target: "normal",
		type: "Fish",
		contestType: "Cool",
	},
	greengreenupgrade: {
		num: -224,
		accuracy: true,
		basePower: 1,
		category: "Physical",
		isNonstandard: "Thing",
		name: "Green Green Upgrade",
		pp: 1,
		priority: 0,
		flags: {},
		isZ: "greeniumz",
		secondary: null,
		target: "normal",
		type: "Green",
		contestType: "Cool",
	},
	horrifichammer: {
		num: -225,
		accuracy: true,
		basePower: 1,
		category: "Physical",
		isNonstandard: "Thing",
		name: "Horrific Hammer",
		pp: 1,
		priority: 0,
		flags: {},
		isZ: "hiumz",
		secondary: null,
		target: "normal",
		type: "H",
		contestType: "Cool",
	},
	threadedvolley: {
		num: -226,
		accuracy: true,
		basePower: 1,
		category: "Physical",
		isNonstandard: "Thing",
		name: "Threaded Volley",
		pp: 1,
		priority: 0,
		flags: {},
		isZ: "hairiumz",
		secondary: null,
		target: "normal",
		type: "Hair",
		contestType: "Cool",
	},
	innovationcannon: {
		num: -227,
		accuracy: true,
		basePower: 1,
		category: "Physical",
		isNonstandard: "Thing",
		name: "Innovation Cannon",
		pp: 1,
		priority: 0,
		flags: {},
		isZ: "industrialiumz",
		secondary: null,
		target: "normal",
		type: "Industrial",
		contestType: "Cool",
	},
	drippingsmite: {
		num: -228,
		accuracy: true,
		basePower: 1,
		category: "Physical",
		isNonstandard: "Thing",
		name: "Dripping Smite",
		pp: 1,
		priority: 0,
		flags: {},
		isZ: "liquidiumz",
		secondary: null,
		target: "normal",
		type: "Liquid",
		contestType: "Cool",
	},
	climacticchorus: {
		num: -229,
		accuracy: true,
		basePower: 1,
		category: "Physical",
		isNonstandard: "Thing",
		name: "Climactic Chorus",
		pp: 1,
		priority: 0,
		flags: {},
		isZ: "musiciumz",
		secondary: null,
		target: "normal",
		type: "Music",
		contestType: "Cool",
	},
	moonlitassault: {
		num: -230,
		accuracy: true,
		basePower: 1,
		category: "Physical",
		isNonstandard: "Thing",
		name: "Moonlit Assault",
		pp: 1,
		priority: 0,
		flags: {},
		isZ: "nightiumz",
		secondary: null,
		target: "normal",
		type: "Night",
		contestType: "Cool",
	},
	redacted: {
		num: -231,
		accuracy: true,
		basePower: 1,
		category: "Physical",
		isNonstandard: "Thing",
		name: "[Redacted]",
		pp: 1,
		priority: 0,
		flags: {},
		isZ: "noiumz",
		secondary: null,
		target: "normal",
		type: "No",
		contestType: "Cool",
	},
	analysisattack: {
		num: -232,
		accuracy: true,
		basePower: 1,
		category: "Physical",
		isNonstandard: "Thing",
		name: "Analysis Attack",
		pp: 1,
		priority: 0,
		flags: {},
		isZ: "scienceiumz",
		secondary: null,
		target: "normal",
		type: "Science",
		contestType: "Cool",
	},
	buzzerbeater: {
		num: -233,
		accuracy: true,
		basePower: 1,
		category: "Physical",
		isNonstandard: "Thing",
		name: "Buzzer Beater",
		pp: 1,
		priority: 0,
		flags: {},
		isZ: "sportiumz",
		secondary: null,
		target: "normal",
		type: "Sport",
		contestType: "Cool",
	},
	"1000slashonslaught": {
		num: -234,
		accuracy: true,
		basePower: 1,
		category: "Physical",
		isNonstandard: "Thing",
		name: "1,000 Slash Onslaught",
		pp: 1,
		priority: 0,
		flags: {},
		isZ: "swordiumz",
		secondary: null,
		target: "normal",
		type: "Sword",
		contestType: "Cool",
	},
	freezerburnflame: {
		num: -235,
		accuracy: true,
		basePower: 1,
		category: "Physical",
		isNonstandard: "Thing",
		name: "Freezerburn Flame",
		pp: 1,
		priority: 0,
		flags: {},
		isZ: "temperatureiumz",
		secondary: null,
		target: "normal",
		type: "Temperature",
		contestType: "Cool",
	},
	zerohourending: {
		num: -236,
		accuracy: true,
		basePower: 1,
		category: "Physical",
		isNonstandard: "Thing",
		name: "Zero Hour Ending",
		pp: 1,
		priority: 0,
		flags: {},
		isZ: "timeiumz",
		secondary: null,
		target: "normal",
		type: "Time",
		contestType: "Cool",
	},
	emperorsgambit: {
		num: -237,
		accuracy: true,
		basePower: 1,
		category: "Physical",
		isNonstandard: "Thing",
		name: "Emperor's Gambit",
		pp: 1,
		priority: 0,
		flags: {},
		isZ: "weatheriumz",
		secondary: null,
		target: "normal",
		type: "Weather",
		contestType: "Cool",
	},
	yellowzzap: {
		num: -238,
		accuracy: true,
		basePower: 1,
		category: "Physical",
		isNonstandard: "Thing",
		name: "Yellow Z-Zap",
		pp: 1,
		priority: 0,
		flags: {},
		isZ: "yellowiumz",
		secondary: null,
		target: "normal",
		type: "Yellow",
		contestType: "Cool",
	},
	infinitycycle: {
		num: -239,
		accuracy: true,
		basePower: 1,
		category: "Physical",
		isNonstandard: "Thing",
		name: "Infinity Cycle",
		pp: 1,
		priority: 0,
		flags: {},
		isZ: "infinityiumz",
		secondary: null,
		target: "normal",
		type: "Infinity",
		contestType: "Cool",
	},
	arthropodphysical: {
		num: -240,
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		isNonstandard: "ThingGeneric",
		name: "Arthropod Physical",
		pp: 35,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Arthropod",
		contestType: "Tough",
	},
	dirtphysical: {
		num: -241,
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		isNonstandard: "ThingGeneric",
		name: "Dirt Physical",
		pp: 35,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Dirt",
		contestType: "Tough",
	},
	farphysical: {
		num: -242,
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		isNonstandard: "ThingGeneric",
		name: "Far Physical",
		pp: 35,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Far",
		contestType: "Tough",
	},
	fishphysical: {
		num: -243,
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		isNonstandard: "ThingGeneric",
		name: "Fish Physical",
		pp: 35,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Fish",
		contestType: "Tough",
	},
	greenphysical: {
		num: -244,
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		isNonstandard: "ThingGeneric",
		name: "Green Physical",
		pp: 35,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Green",
		contestType: "Tough",
	},
	hphysical: {
		num: -245,
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		isNonstandard: "ThingGeneric",
		name: "H Physical",
		pp: 35,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "H",
		contestType: "Tough",
	},
	hairphysical: {
		num: -246,
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		isNonstandard: "ThingGeneric",
		name: "Hair Physical",
		pp: 35,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Hair",
		contestType: "Tough",
	},
	industrialphysical: {
		num: -247,
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		isNonstandard: "ThingGeneric",
		name: "Industrial Physical",
		pp: 35,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Industrial",
		contestType: "Tough",
	},
	liquidphysical: {
		num: -248,
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		isNonstandard: "ThingGeneric",
		name: "Liquid Physical",
		pp: 35,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Liquid",
		contestType: "Tough",
	},
	musicphysical: {
		num: -249,
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		isNonstandard: "ThingGeneric",
		name: "Music Physical",
		pp: 35,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Music",
		contestType: "Tough",
	},
	nightphysical: {
		num: -250,
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		isNonstandard: "ThingGeneric",
		name: "Night Physical",
		pp: 35,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Night",
		contestType: "Tough",
	},
	nophysical: {
		num: -251,
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		isNonstandard: "ThingGeneric",
		name: "No Physical",
		pp: 35,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "No",
		contestType: "Tough",
	},
	sciencephysical: {
		num: -252,
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		isNonstandard: "ThingGeneric",
		name: "Science Physical",
		pp: 35,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Science",
		contestType: "Tough",
	},
	sportphysical: {
		num: -253,
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		isNonstandard: "ThingGeneric",
		name: "Sport Physical",
		pp: 35,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Sport",
		contestType: "Tough",
	},
	swordphysical: {
		num: -254,
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		isNonstandard: "ThingGeneric",
		name: "Sword Physical",
		pp: 35,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Sword",
		contestType: "Tough",
	},
	temperaturephysical: {
		num: -255,
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		isNonstandard: "ThingGeneric",
		name: "Temperature Physical",
		pp: 35,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Temperature",
		contestType: "Tough",
	},
	timephysical: {
		num: -256,
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		isNonstandard: "ThingGeneric",
		name: "Time Physical",
		pp: 35,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Time",
		contestType: "Tough",
	},
	weatherphysical: {
		num: -257,
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		isNonstandard: "ThingGeneric",
		name: "Weather Physical",
		pp: 35,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Weather",
		contestType: "Tough",
	},
	yellowphysical: {
		num: -258,
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		isNonstandard: "ThingGeneric",
		name: "Yellow Physical",
		pp: 35,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Yellow",
		contestType: "Tough",
	},
	infinityphysical: {
		num: -259,
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		isNonstandard: "ThingGeneric",
		name: "Infinity Physical",
		pp: 35,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Infinity",
		contestType: "Tough",
	},
	arthropodspecial: {
		num: -260,
		accuracy: 100,
		basePower: 80,
		category: "Special",
		isNonstandard: "ThingGeneric",
		name: "Arthropod Special",
		pp: 35,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Arthropod",
		contestType: "Tough",
	},
	dirtspecial: {
		num: -261,
		accuracy: 100,
		basePower: 80,
		category: "Special",
		isNonstandard: "ThingGeneric",
		name: "Dirt Special",
		pp: 35,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Dirt",
		contestType: "Tough",
	},
	farspecial: {
		num: -262,
		accuracy: 100,
		basePower: 80,
		category: "Special",
		isNonstandard: "ThingGeneric",
		name: "Far Special",
		pp: 35,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Far",
		contestType: "Tough",
	},
	fishspecial: {
		num: -263,
		accuracy: 100,
		basePower: 80,
		category: "Special",
		isNonstandard: "ThingGeneric",
		name: "Fish Special",
		pp: 35,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Fish",
		contestType: "Tough",
	},
	greenspecial: {
		num: -264,
		accuracy: 100,
		basePower: 80,
		category: "Special",
		isNonstandard: "ThingGeneric",
		name: "Green Special",
		pp: 35,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Green",
		contestType: "Tough",
	},
	hspecial: {
		num: -265,
		accuracy: 100,
		basePower: 80,
		category: "Special",
		isNonstandard: "ThingGeneric",
		name: "H Special",
		pp: 35,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "H",
		contestType: "Tough",
	},
	hairspecial: {
		num: -266,
		accuracy: 100,
		basePower: 80,
		category: "Special",
		isNonstandard: "ThingGeneric",
		name: "Hair Special",
		pp: 35,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Hair",
		contestType: "Tough",
	},
	industrialspecial: {
		num: -267,
		accuracy: 100,
		basePower: 80,
		category: "Special",
		isNonstandard: "ThingGeneric",
		name: "Industrial Special",
		pp: 35,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Industrial",
		contestType: "Tough",
	},
	liquidspecial: {
		num: -268,
		accuracy: 100,
		basePower: 80,
		category: "Special",
		isNonstandard: "ThingGeneric",
		name: "Liquid Special",
		pp: 35,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Liquid",
		contestType: "Tough",
	},
	musicspecial: {
		num: -269,
		accuracy: 100,
		basePower: 80,
		category: "Special",
		isNonstandard: "ThingGeneric",
		name: "Music Special",
		pp: 35,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Music",
		contestType: "Tough",
	},
	nightspecial: {
		num: -270,
		accuracy: 100,
		basePower: 80,
		category: "Special",
		isNonstandard: "ThingGeneric",
		name: "Night Special",
		pp: 35,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Night",
		contestType: "Tough",
	},
	nospecial: {
		num: -271,
		accuracy: 100,
		basePower: 80,
		category: "Special",
		isNonstandard: "ThingGeneric",
		name: "No Special",
		pp: 35,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "No",
		contestType: "Tough",
	},
	sciencespecial: {
		num: -272,
		accuracy: 100,
		basePower: 80,
		category: "Special",
		isNonstandard: "ThingGeneric",
		name: "Science Special",
		pp: 35,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Science",
		contestType: "Tough",
	},
	sportspecial: {
		num: -273,
		accuracy: 100,
		basePower: 80,
		category: "Special",
		isNonstandard: "ThingGeneric",
		name: "Sport Special",
		pp: 35,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Sport",
		contestType: "Tough",
	},
	swordspecial: {
		num: -274,
		accuracy: 100,
		basePower: 80,
		category: "Special",
		isNonstandard: "ThingGeneric",
		name: "Sword Special",
		pp: 35,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Sword",
		contestType: "Tough",
	},
	temperaturespecial: {
		num: -275,
		accuracy: 100,
		basePower: 80,
		category: "Special",
		isNonstandard: "ThingGeneric",
		name: "Temperature Special",
		pp: 35,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Temperature",
		contestType: "Tough",
	},
	timespecial: {
		num: -276,
		accuracy: 100,
		basePower: 80,
		category: "Special",
		isNonstandard: "ThingGeneric",
		name: "Time Special",
		pp: 35,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Time",
		contestType: "Tough",
	},
	weatherspecial: {
		num: -277,
		accuracy: 100,
		basePower: 80,
		category: "Special",
		isNonstandard: "ThingGeneric",
		name: "Weather Special",
		pp: 35,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Weather",
		contestType: "Tough",
	},
	yellowspecial: {
		num: -278,
		accuracy: 100,
		basePower: 80,
		category: "Special",
		isNonstandard: "ThingGeneric",
		name: "Yellow Special",
		pp: 35,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Yellow",
		contestType: "Tough",
	},
	infinityspecial: {
		num: -279,
		accuracy: 100,
		basePower: 80,
		category: "Special",
		isNonstandard: "ThingGeneric",
		name: "Infinity Special",
		pp: 35,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Infinity",
		contestType: "Tough",
	},

	// BASE GAME
};
