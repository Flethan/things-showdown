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
				'stormcell', 'dustcloud', 'wetfloor', 'beamfield', 'hotcoals', 'permafrost', 'autoturret',
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
				if (source.hasType('Arthropod')) return critRatio + 2;
			},
		},
		secondary: null,
		target: "normal",
		type: "Arthropod",
		zMove: {effect: 'crit2'},
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
				this.add('-fieldend', 'Spatial Expansion');
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
		flags: {contact: 1, protect: 1, mirror: 1},
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
			if (pokemon.hasType('Green')) return;
			this.add('-fail', pokemon, 'move: Deciduous Blast');
			this.attrLastMove('[still]');
			return null;
		},
		self: {
			onHit(pokemon) {
				if (!pokemon.hasType('Green')) return;
				if (pokemon.addedType === 'Green') {
					if (!pokemon.addType('')) return false;
					this.add('-start', pokemon, 'typechange', pokemon.types.join('/'), '[from] move: Deciduous Blast');
				} else {
					let types = pokemon.getTypes(true);
					const newTypes = [];
					let skip = false;
					for (const type of types) {
						if (type === 'Green' && !skip) {
							skip = true;
							continue;
						}
						newTypes.push(type);
					}
					if (!types.length) types = ['???'];
					const addedType = pokemon.addedType;
					pokemon.setType(newTypes);
					this.add('-start', pokemon, 'typechange', pokemon.types.join('/'), '[from] move: Deciduous Blast');
					if (addedType) {
						if (!pokemon.addType(addedType)) return false;
						this.add('-start', pokemon, 'typeadd', addedType);
					}
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
			let factor = 0.25;
			for (const type of pokemon.getTypes()) {
				if (type === 'Green') factor += 0.25;
			}
			return !!this.heal(this.modify(pokemon.maxhp, factor));
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
			let count = 0;
			this.getAllActive().forEach(
				active => active.getTypes().forEach(
					type => { if (type === 'Green') count++; }
				)
			);
			if (!count) {
				this.add('-fail', pokemon, 'move: Green Network');
				this.attrLastMove('[still]');
				return null;
			}

			const oldStats = pokemon.boosts;
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
		flags: {bullet: 1, protect: 1, mirror: 1},
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
				'stormcell', 'dustcloud', 'wetfloor', 'beamfield', 'hotcoals', 'permafrost', 'autoturret',
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
		flags: {protect: 1, mirror: 1},
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
		slotCondition: 'Accelerate',
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
			if (target.hasType('Green')) {
				return this.chainModify(2);
			}
		},
		onHit(pokemon) {
			if (!pokemon.hasType('Green')) return;
			if (pokemon.addedType === 'Green') {
				if (!pokemon.addType('')) return false;
				this.add('-start', pokemon, 'typechange', pokemon.types.join('/'), '[from] move: Deciduous Blast');
			} else {
				let types = pokemon.getTypes(true);
				const newTypes = [];
				let skip = false;
				for (const type of types) {
					if (type === 'Green' && !skip) {
						skip = true;
						continue;
					}
					newTypes.push(type);
				}
				if (!types.length) types = ['???'];
				const addedType = pokemon.addedType;
				pokemon.setType(newTypes);
				this.add('-start', pokemon, 'typechange', pokemon.types.join('/'), '[from] move: Deciduous Blast');
				if (addedType) {
					if (!pokemon.addType(addedType)) return false;
					this.add('-start', pokemon, 'typeadd', addedType);
				}
			}
		},
		secondary: null,
		target: "normal",
		type: "Industrial",
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
				if (pokemon.hasType('Liquid')) {
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
				if (status.id === 'prone' || target.ability === 'blind') return;
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
				this.add('-fieldend', 'Sudscape');
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
					if (pokemon.hasType('Music')) {
						this.debug('mystical song boost');
						return this.chainModify(1.5);
					}
				}
				if (this.field.activeFlags.includes('defdown')) {
					if (!pokemon.hasType('Music')) {
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
					if (pokemon.hasType('Music')) {
						this.debug('mystical song boost');
						return this.chainModify(1.5);
					}
				}
				if (this.field.activeFlags.includes('spddown')) {
					if (!pokemon.hasType('Music')) {
						this.debug('mystical song reduce');
						return this.chainModify(0.5);
					}
				}
			},
			onModifySpe(spe, pokemon) {
				if (!this.field.activeFlags.length) return;
				if (this.field.activeFlags.includes('speup')) {
					if (pokemon.hasType('Music')) {
						this.debug('mystical song boost');
						return this.chainModify(1.5);
					}
				}
				if (this.field.activeFlags.includes('spedown')) {
					if (!pokemon.hasType('Music')) {
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
							if (ally.hasType('Music')) {
								this.boost({atk: 1}, ally);
							}
						}
						if (this.field.activeFlags.length && this.field.activeFlags.includes('defboost')) {
							if (ally.hasType('Music')) {
								this.boost({def: 1}, ally);
							}
						}
						if (this.field.activeFlags.length && this.field.activeFlags.includes('spaboost')) {
							if (ally.hasType('Music')) {
								this.boost({spa: 1}, ally);
							}
						}
						if (this.field.activeFlags.length && this.field.activeFlags.includes('spdboost')) {
							if (ally.hasType('Music')) {
								this.boost({spd: 1}, ally);
							}
						}
						if (this.field.activeFlags.length && this.field.activeFlags.includes('speboost')) {
							if (ally.hasType('Music')) {
								this.boost({spe: 1}, ally);
							}
						}
						if (this.field.activeFlags.length && this.field.activeFlags.includes('atkreduce')) {
							if (!ally.hasType('Music')) {
								this.boost({atk: -1}, ally);
							}
						}
						if (this.field.activeFlags.length && this.field.activeFlags.includes('defreduce')) {
							if (!ally.hasType('Music')) {
								this.boost({def: -1}, ally);
							}
						}
						if (this.field.activeFlags.length && this.field.activeFlags.includes('spareduce')) {
							if (!ally.hasType('Music')) {
								this.boost({spa: -1}, ally);
							}
						}
						if (this.field.activeFlags.length && this.field.activeFlags.includes('spdreduce')) {
							if (!ally.hasType('Music')) {
								this.boost({spd: -1}, ally);
							}
						}
						if (this.field.activeFlags.length && this.field.activeFlags.includes('spereduce')) {
							if (!ally.hasType('Music')) {
								this.boost({spe: -1}, ally);
							}
						}
						if (this.field.activeFlags.length && this.field.activeFlags.includes('heal')) {
							if (ally.hasType('Music')) {
								this.heal(ally.baseMaxhp / 8, ally);
							}
						}
						if (this.field.activeFlags.length && this.field.activeFlags.includes('hurt')) {
							if (!ally.hasType('Music')) {
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
				this.add('-fieldend', 'Mystical Song');
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
			onNegateImmunity: false,
			onEffectivenessPriority: 1,
			onEffectiveness(typeMod, target, type, move) {
				if (move && !this.dex.getImmunity(move, type)) return 1;
				return -typeMod;
			},
			onModifyMovePriority: -5,
			onModifyMove(move) {
				if (!move.ignoreImmunity) move.ignoreImmunity = {};
				if (move.ignoreImmunity !== true) {
					for (const type in this.dex.data.TypeChart) {
						move.ignoreImmunity[type] = true;
					}
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
				this.add('-fieldend', 'Null Land');
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
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1},
		status: 'banished',
		secondary: null,
		target: "normal",
		type: "No",
		zMove: {effect: 'clearnegativeboost'},
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
		noMetronome: ['Parry', 'Riposte', 'Whistle'],
		onHit(target, source, effect) {
			const moves: MoveData[] = [];
			for (const id in Moves) {
				const move = Moves[id];
				if (move.realMove) continue;
				if (move.isZ || move.isMax || move.isNonstandard !== 'Thing') continue;
				if (effect.noMetronome!.includes(move.name) || move.noMetronome?.length) continue;
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
		flags: {bullet: 1, protect: 1, mirror: 1},
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
					const result = this.random(5);
					if (result === 0) {
						pokemon.trySetStatus('prone');
					} else if (result === 1) {
						pokemon.trySetStatus('banished');
					} else if (result === 2) {
						pokemon.trySetStatus('blinded');
					} else if (result === 3) {
						pokemon.trySetStatus('pressurized');
					} else {
						pokemon.trySetStatus('fluctuant');
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
		flags: {protect: 1, mirror: 1, bullet: 1},
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
		flags: {contact: 1, charge: 1, protect: 1, mirror: 1, gravity: 1, distance: 1},
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
				if (pokemon.hasType('Sport')) {
					return this.modify(atk, 1.5);
				}
			},
			onModifyDefPriority: 10,
			onModifyDef(def, pokemon) {
				if (pokemon.hasType('Sport')) {
					return this.modify(def, 1.5);
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
				this.add('-fieldend', 'Spring Floor');
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
		flags: {bullet: 1, protect: 1, mirror: 1},
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
			onFieldEnd() {
				this.add('-fieldend', 'move: Rank and File');
			},
		},
		secondary: null,
		target: "all",
		type: "Sport",
		contestType: "Clever",
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
				if (pokemon.hasType('Temperature')) {
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
				'assist', 'beakblast', 'belch', 'bide', 'celebrate', 'copycat', 'dynamaxcannon', 'focuspunch', 'iceball', 'instruct', 'kingsshield', 'mefirst', 'metronome', 'mimic', 'mirrormove', 'naturepower', 'obstruct', 'outrage', 'petaldance', 'replay', 'rollout', 'shelltrap', 'sketch', 'sleeptalk', 'struggle', 'thrash', 'transform', 'uproar', 'lookup',
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
				let statName: BoostID;
				for (statName in source.boosts) {
					const stage = source.boosts[statName];
					if (stage !== 0) {
						success = true;
					}
				}
				if (success) {
					this.effectState.passedBoosts = source.boosts;
					this.add('-clearboost', source, '[from] move: Time Capsule');
					source.clearBoosts();
				}
			},
			onRestart(source) {
				const boosts = this.effectState.passedBoosts;
				let success = false;
				let statName: BoostID;
				for (statName in source.boosts) {
					const stage = source.boosts[statName];
					if (stage !== 0) {
						boosts[statName] += stage;
						boosts[statName] = Math.min(Math.max(boosts[statName], -6), 6);
						if (boosts[statName] !== source.boosts[statName]) success = true;
					}
				}
				if (success) {
					this.effectState.passedBoosts = boosts;
					this.add('-clearboost', source, '[from] move: Time Capsule');
					source.clearBoosts();
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
		accuracy: true,
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

			target.addVolatile('fastforward');
		},
		secondary: null,
		target: "normal",
		type: "Time",
		zMove: {effect: 'clearnegativeboost'},
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

	// Infinity

	// NEW GENERICS
	maxarthropod: {
		num: -200,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Thing",
		name: "Max Arthropod",
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
	maxdirt: {
		num: -201,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Thing",
		name: "Max Dirt",
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
	maxfar: {
		num: -202,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Thing",
		name: "Max Far",
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
	maxfish: {
		num: -203,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Thing",
		name: "Max Fish",
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
	maxgreen: {
		num: -204,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Thing",
		name: "Max Green",
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
	maxh: {
		num: -205,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Thing",
		name: "Max H",
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
	maxhair: {
		num: -206,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Thing",
		name: "Max Hair",
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
	maxindustrial: {
		num: -207,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Thing",
		name: "Max Industrial",
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
	maxliquid: {
		num: -208,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Thing",
		name: "Max Liquid",
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
	maxmusic: {
		num: -209,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Thing",
		name: "Max Music",
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
	maxnight: {
		num: -210,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Thing",
		name: "Max Night",
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
	maxno: {
		num: -211,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Thing",
		name: "Max No",
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
	maxscience: {
		num: -212,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Thing",
		name: "Max Science",
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
	maxsport: {
		num: -213,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Thing",
		name: "Max Sport",
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
	maxsword: {
		num: -214,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Thing",
		name: "Max Sword",
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
	maxtemperature: {
		num: -215,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Thing",
		name: "Max Temperature",
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
	maxtime: {
		num: -216,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Thing",
		name: "Max Time",
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
	maxweather: {
		num: -217,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Thing",
		name: "Max Weather",
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
	maxinfinity: {
		num: -219,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Thing",
		name: "Max Infinity",
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
	zarthropod: {
		num: -220,
		accuracy: true,
		basePower: 1,
		category: "Physical",
		isNonstandard: "Thing",
		name: "Z-Arthropod",
		pp: 1,
		priority: 0,
		flags: {},
		isZ: "arthropodiumz",
		secondary: null,
		target: "normal",
		type: "Arthropod",
		contestType: "Cool",
	},
	zdirt: {
		num: -221,
		accuracy: true,
		basePower: 1,
		category: "Physical",
		isNonstandard: "Thing",
		name: "Z-Dirt",
		pp: 1,
		priority: 0,
		flags: {},
		isZ: "dirtiumz",
		secondary: null,
		target: "normal",
		type: "Dirt",
		contestType: "Cool",
	},
	zfar: {
		num: -222,
		accuracy: true,
		basePower: 1,
		category: "Physical",
		isNonstandard: "Thing",
		name: "Z-Far",
		pp: 1,
		priority: 0,
		flags: {},
		isZ: "fariumz",
		secondary: null,
		target: "normal",
		type: "Far",
		contestType: "Cool",
	},
	zfish: {
		num: -223,
		accuracy: true,
		basePower: 1,
		category: "Physical",
		isNonstandard: "Thing",
		name: "Z-Fish",
		pp: 1,
		priority: 0,
		flags: {},
		isZ: "fishiumz",
		secondary: null,
		target: "normal",
		type: "Fish",
		contestType: "Cool",
	},
	zgreen: {
		num: -224,
		accuracy: true,
		basePower: 1,
		category: "Physical",
		isNonstandard: "Thing",
		name: "Z-Green",
		pp: 1,
		priority: 0,
		flags: {},
		isZ: "greeniumz",
		secondary: null,
		target: "normal",
		type: "Green",
		contestType: "Cool",
	},
	zh: {
		num: -225,
		accuracy: true,
		basePower: 1,
		category: "Physical",
		isNonstandard: "Thing",
		name: "Z-H",
		pp: 1,
		priority: 0,
		flags: {},
		isZ: "hiumz",
		secondary: null,
		target: "normal",
		type: "H",
		contestType: "Cool",
	},
	zhair: {
		num: -226,
		accuracy: true,
		basePower: 1,
		category: "Physical",
		isNonstandard: "Thing",
		name: "Z-Hair",
		pp: 1,
		priority: 0,
		flags: {},
		isZ: "hairiumz",
		secondary: null,
		target: "normal",
		type: "Hair",
		contestType: "Cool",
	},
	zindustrial: {
		num: -227,
		accuracy: true,
		basePower: 1,
		category: "Physical",
		isNonstandard: "Thing",
		name: "Z-Industrial",
		pp: 1,
		priority: 0,
		flags: {},
		isZ: "industrialiumz",
		secondary: null,
		target: "normal",
		type: "Industrial",
		contestType: "Cool",
	},
	zliquid: {
		num: -228,
		accuracy: true,
		basePower: 1,
		category: "Physical",
		isNonstandard: "Thing",
		name: "Z-Liquid",
		pp: 1,
		priority: 0,
		flags: {},
		isZ: "liquidiumz",
		secondary: null,
		target: "normal",
		type: "Liquid",
		contestType: "Cool",
	},
	zmusic: {
		num: -229,
		accuracy: true,
		basePower: 1,
		category: "Physical",
		isNonstandard: "Thing",
		name: "Z-Music",
		pp: 1,
		priority: 0,
		flags: {},
		isZ: "musiciumz",
		secondary: null,
		target: "normal",
		type: "Music",
		contestType: "Cool",
	},
	znight: {
		num: -230,
		accuracy: true,
		basePower: 1,
		category: "Physical",
		isNonstandard: "Thing",
		name: "Z-Night",
		pp: 1,
		priority: 0,
		flags: {},
		isZ: "nightiumz",
		secondary: null,
		target: "normal",
		type: "Night",
		contestType: "Cool",
	},
	zno: {
		num: -231,
		accuracy: true,
		basePower: 1,
		category: "Physical",
		isNonstandard: "Thing",
		name: "Z-No",
		pp: 1,
		priority: 0,
		flags: {},
		isZ: "noiumz",
		secondary: null,
		target: "normal",
		type: "No",
		contestType: "Cool",
	},
	zscience: {
		num: -232,
		accuracy: true,
		basePower: 1,
		category: "Physical",
		isNonstandard: "Thing",
		name: "Z-Science",
		pp: 1,
		priority: 0,
		flags: {},
		isZ: "scienceiumz",
		secondary: null,
		target: "normal",
		type: "Science",
		contestType: "Cool",
	},
	zsport: {
		num: -233,
		accuracy: true,
		basePower: 1,
		category: "Physical",
		isNonstandard: "Thing",
		name: "Z-Sport",
		pp: 1,
		priority: 0,
		flags: {},
		isZ: "sportiumz",
		secondary: null,
		target: "normal",
		type: "Sport",
		contestType: "Cool",
	},
	zsword: {
		num: -234,
		accuracy: true,
		basePower: 1,
		category: "Physical",
		isNonstandard: "Thing",
		name: "Z-Sword",
		pp: 1,
		priority: 0,
		flags: {},
		isZ: "swordiumz",
		secondary: null,
		target: "normal",
		type: "Sword",
		contestType: "Cool",
	},
	ztemperature: {
		num: -235,
		accuracy: true,
		basePower: 1,
		category: "Physical",
		isNonstandard: "Thing",
		name: "Z-Temperature",
		pp: 1,
		priority: 0,
		flags: {},
		isZ: "temperatureiumz",
		secondary: null,
		target: "normal",
		type: "Temperature",
		contestType: "Cool",
	},
	ztime: {
		num: -236,
		accuracy: true,
		basePower: 1,
		category: "Physical",
		isNonstandard: "Thing",
		name: "Z-Time",
		pp: 1,
		priority: 0,
		flags: {},
		isZ: "timeiumz",
		secondary: null,
		target: "normal",
		type: "Time",
		contestType: "Cool",
	},
	zweather: {
		num: -237,
		accuracy: true,
		basePower: 1,
		category: "Physical",
		isNonstandard: "Thing",
		name: "Z-Weather",
		pp: 1,
		priority: 0,
		flags: {},
		isZ: "weatheriumz",
		secondary: null,
		target: "normal",
		type: "Weather",
		contestType: "Cool",
	},
	zyellow: {
		num: -238,
		accuracy: true,
		basePower: 1,
		category: "Physical",
		isNonstandard: "Thing",
		name: "Z-Yellow",
		pp: 1,
		priority: 0,
		flags: {},
		isZ: "yellowiumz",
		secondary: null,
		target: "normal",
		type: "Yellow",
		contestType: "Cool",
	},
	zinfinity: {
		num: -239,
		accuracy: true,
		basePower: 1,
		category: "Physical",
		isNonstandard: "Thing",
		name: "Z-Infinity",
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
	"10000000voltthunderbolt": {
		num: 719,
		accuracy: true,
		basePower: 195,
		category: "Special",
		isNonstandard: "Past",
		name: "10,000,000 Volt Thunderbolt",
		pp: 1,
		priority: 0,
		flags: {},
		isZ: "pikashuniumz",
		critRatio: 3,
		secondary: null,
		target: "normal",
		type: "Electric",
		contestType: "Cool",
	},
	absorb: {
		num: 71,
		accuracy: 100,
		basePower: 20,
		category: "Special",
		name: "Absorb",
		pp: 25,
		priority: 0,
		flags: {protect: 1, mirror: 1, heal: 1},
		drain: [1, 2],
		secondary: null,
		target: "normal",
		type: "Grass",
		contestType: "Clever",
	},
	accelerock: {
		num: 709,
		accuracy: 100,
		basePower: 40,
		category: "Physical",
		name: "Accelerock",
		pp: 20,
		priority: 1,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Rock",
		contestType: "Cool",
	},
	acid: {
		num: 51,
		accuracy: 100,
		basePower: 40,
		category: "Special",
		name: "Acid",
		pp: 30,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 10,
			boosts: {
				spd: -1,
			},
		},
		target: "allAdjacentFoes",
		type: "Poison",
		contestType: "Clever",
	},
	acidarmor: {
		num: 151,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Acid Armor",
		pp: 20,
		priority: 0,
		flags: {snatch: 1},
		boosts: {
			def: 2,
		},
		secondary: null,
		target: "self",
		type: "Poison",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Tough",
	},
	aciddownpour: {
		num: 628,
		accuracy: true,
		basePower: 1,
		category: "Physical",
		isNonstandard: "Past",
		name: "Acid Downpour",
		pp: 1,
		priority: 0,
		flags: {},
		isZ: "poisoniumz",
		secondary: null,
		target: "normal",
		type: "Poison",
		contestType: "Cool",
	},
	acidspray: {
		num: 491,
		accuracy: 100,
		basePower: 40,
		category: "Special",
		name: "Acid Spray",
		pp: 20,
		priority: 0,
		flags: {bullet: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 100,
			boosts: {
				spd: -2,
			},
		},
		target: "normal",
		type: "Poison",
		contestType: "Beautiful",
	},
	acrobatics: {
		num: 512,
		accuracy: 100,
		basePower: 55,
		basePowerCallback(pokemon, target, move) {
			if (!pokemon.item) {
				this.debug("Power doubled for no item");
				return move.basePower * 2;
			}
			return move.basePower;
		},
		category: "Physical",
		name: "Acrobatics",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, distance: 1},
		secondary: null,
		target: "any",
		type: "Flying",
		contestType: "Cool",
	},
	acupressure: {
		num: 367,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Acupressure",
		pp: 30,
		priority: 0,
		flags: {},
		onHit(target) {
			const stats: BoostID[] = [];
			let stat: BoostID;
			for (stat in target.boosts) {
				if (target.boosts[stat] < 6) {
					stats.push(stat);
				}
			}
			if (stats.length) {
				const randomStat = this.sample(stats);
				const boost: SparseBoostsTable = {};
				boost[randomStat] = 2;
				this.boost(boost);
			} else {
				return false;
			}
		},
		secondary: null,
		target: "adjacentAllyOrSelf",
		type: "Normal",
		zMove: {effect: 'crit2'},
		contestType: "Tough",
	},
	aerialace: {
		num: 332,
		accuracy: true,
		basePower: 60,
		category: "Physical",
		name: "Aerial Ace",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, distance: 1},
		secondary: null,
		target: "any",
		type: "Flying",
		contestType: "Cool",
	},
	aeroblast: {
		num: 177,
		accuracy: 95,
		basePower: 100,
		category: "Special",
		name: "Aeroblast",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1, distance: 1},
		critRatio: 2,
		secondary: null,
		target: "any",
		type: "Flying",
		contestType: "Cool",
	},
	afteryou: {
		num: 495,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "After You",
		pp: 15,
		priority: 0,
		flags: {authentic: 1, mystery: 1},
		onHit(target) {
			if (target.side.active.length < 2) return false; // fails in singles
			const action = this.queue.willMove(target);
			if (action) {
				this.queue.prioritizeAction(action);
				this.add('-activate', target, 'move: After You');
			} else {
				return false;
			}
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {boost: {spe: 1}},
		contestType: "Cute",
	},
	agility: {
		num: 97,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Agility",
		pp: 30,
		priority: 0,
		flags: {snatch: 1},
		boosts: {
			spe: 2,
		},
		secondary: null,
		target: "self",
		type: "Psychic",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Cool",
	},
	aircutter: {
		num: 314,
		accuracy: 95,
		basePower: 60,
		category: "Special",
		name: "Air Cutter",
		pp: 25,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		critRatio: 2,
		secondary: null,
		target: "allAdjacentFoes",
		type: "Flying",
		contestType: "Cool",
	},
	airslash: {
		num: 403,
		accuracy: 95,
		basePower: 75,
		category: "Special",
		name: "Air Slash",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1, distance: 1},
		secondary: {
			chance: 30,
			volatileStatus: 'flinch',
		},
		target: "any",
		type: "Flying",
		contestType: "Cool",
	},
	alloutpummeling: {
		num: 624,
		accuracy: true,
		basePower: 1,
		category: "Physical",
		isNonstandard: "Past",
		name: "All-Out Pummeling",
		pp: 1,
		priority: 0,
		flags: {},
		isZ: "fightiniumz",
		secondary: null,
		target: "normal",
		type: "Fighting",
		contestType: "Cool",
	},
	allyswitch: {
		num: 502,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Ally Switch",
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
			this.swapPosition(pokemon, newPosition, '[from] move: Ally Switch');
		},
		secondary: null,
		target: "self",
		type: "Psychic",
		zMove: {boost: {spe: 2}},
		contestType: "Clever",
	},
	amnesia: {
		num: 133,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Amnesia",
		pp: 20,
		priority: 0,
		flags: {snatch: 1},
		boosts: {
			spd: 2,
		},
		secondary: null,
		target: "self",
		type: "Psychic",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Cute",
	},
	anchorshot: {
		num: 677,
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		name: "Anchor Shot",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 100,
			onHit(target, source, move) {
				if (source.isActive) target.addVolatile('trapped', source, move, 'trapper');
			},
		},
		target: "normal",
		type: "Steel",
		contestType: "Tough",
	},
	ancientpower: {
		num: 246,
		accuracy: 100,
		basePower: 60,
		category: "Special",
		name: "Ancient Power",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 10,
			self: {
				boosts: {
					atk: 1,
					def: 1,
					spa: 1,
					spd: 1,
					spe: 1,
				},
			},
		},
		target: "normal",
		type: "Rock",
		contestType: "Tough",
	},
	appleacid: {
		num: 787,
		accuracy: 100,
		basePower: 80,
		category: "Special",
		name: "Apple Acid",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 100,
			boosts: {
				spd: -1,
			},
		},
		target: "normal",
		type: "Grass",
	},
	aquajet: {
		num: 453,
		accuracy: 100,
		basePower: 40,
		category: "Physical",
		name: "Aqua Jet",
		pp: 20,
		priority: 1,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Water",
		contestType: "Cool",
	},
	aquaring: {
		num: 392,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Aqua Ring",
		pp: 20,
		priority: 0,
		flags: {snatch: 1},
		volatileStatus: 'aquaring',
		condition: {
			onStart(pokemon) {
				this.add('-start', pokemon, 'Aqua Ring');
			},
			onResidualOrder: 6,
			onResidual(pokemon) {
				this.heal(pokemon.baseMaxhp / 16);
			},
		},
		secondary: null,
		target: "self",
		type: "Water",
		zMove: {boost: {def: 1}},
		contestType: "Beautiful",
	},
	aquatail: {
		num: 401,
		accuracy: 90,
		basePower: 90,
		category: "Physical",
		name: "Aqua Tail",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Water",
		contestType: "Beautiful",
	},
	armthrust: {
		num: 292,
		accuracy: 100,
		basePower: 15,
		category: "Physical",
		name: "Arm Thrust",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		multihit: [2, 5],
		secondary: null,
		target: "normal",
		type: "Fighting",
		contestType: "Tough",
	},
	aromatherapy: {
		num: 312,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Aromatherapy",
		pp: 5,
		priority: 0,
		flags: {snatch: 1, distance: 1},
		onHit(pokemon, source, move) {
			this.add('-activate', source, 'move: Aromatherapy');
			let success = false;
			for (const ally of pokemon.side.pokemon) {
				if (ally !== source && ((ally.hasAbility('sapsipper')) ||
						(ally.volatiles['substitute'] && !move.infiltrates))) {
					continue;
				}
				if (ally.cureStatus()) success = true;
			}
			return success;
		},
		target: "allyTeam",
		type: "Grass",
		zMove: {effect: 'heal'},
		contestType: "Clever",
	},
	aromaticmist: {
		num: 597,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Aromatic Mist",
		pp: 20,
		priority: 0,
		flags: {authentic: 1},
		boosts: {
			spd: 1,
		},
		secondary: null,
		target: "adjacentAlly",
		type: "Fairy",
		zMove: {boost: {spd: 2}},
		contestType: "Beautiful",
	},
	assist: {
		num: 274,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Past",
		name: "Assist",
		pp: 20,
		priority: 0,
		flags: {},
		onHit(target) {
			const noAssist = [
				'assist', 'banefulbunker', 'beakblast', 'belch', 'bestow', 'bounce', 'celebrate', 'chatter', 'circlethrow', 'copycat', 'counter', 'covet', 'destinybond', 'detect', 'dig', 'dive', 'dragontail', 'endure', 'feint', 'fly', 'focuspunch', 'followme', 'helpinghand', 'holdhands', 'kingsshield', 'matblock', 'mefirst', 'metronome', 'mimic', 'mirrorcoat', 'mirrormove', 'naturepower', 'phantomforce', 'protect', 'ragepowder', 'roar', 'shadowforce', 'shelltrap', 'sketch', 'skydrop', 'sleeptalk', 'snatch', 'spikyshield', 'spotlight', 'struggle', 'switcheroo', 'thief', 'transform', 'trick', 'whirlwind',
			];

			const moves = [];
			for (const pokemon of target.side.pokemon) {
				if (pokemon === target) continue;
				for (const moveSlot of pokemon.moveSlots) {
					const moveid = moveSlot.id;
					if (noAssist.includes(moveid)) continue;
					const move = this.dex.moves.get(moveid);
					if (move.isZ || move.isMax) {
						continue;
					}
					moves.push(moveid);
				}
			}
			let randomMove = '';
			if (moves.length) randomMove = this.sample(moves);
			if (!randomMove) {
				return false;
			}
			this.actions.useMove(randomMove, target);
		},
		secondary: null,
		target: "self",
		type: "Normal",
		contestType: "Cute",
	},
	assurance: {
		num: 372,
		accuracy: 100,
		basePower: 60,
		basePowerCallback(pokemon, target, move) {
			if (target.hurtThisTurn) {
				this.debug('Boosted for being damaged this turn');
				return move.basePower * 2;
			}
			return move.basePower;
		},
		category: "Physical",
		name: "Assurance",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Dark",
		contestType: "Clever",
	},
	astonish: {
		num: 310,
		accuracy: 100,
		basePower: 30,
		category: "Physical",
		name: "Astonish",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 30,
			volatileStatus: 'flinch',
		},
		target: "normal",
		type: "Ghost",
		contestType: "Cute",
	},
	astralbarrage: {
		num: 825,
		accuracy: 100,
		basePower: 120,
		category: "Special",
		name: "Astral Barrage",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "allAdjacentFoes",
		type: "Ghost",
	},
	attackorder: {
		num: 454,
		accuracy: 100,
		basePower: 90,
		category: "Physical",
		name: "Attack Order",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		critRatio: 2,
		secondary: null,
		target: "normal",
		type: "Bug",
		contestType: "Clever",
	},
	attract: {
		num: 213,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Attract",
		pp: 15,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1, authentic: 1},
		volatileStatus: 'attract',
		condition: {
			noCopy: true, // doesn't get copied by Baton Pass
			onStart(pokemon, source, effect) {
				if (!(pokemon.gender === 'M' && source.gender === 'F') && !(pokemon.gender === 'F' && source.gender === 'M')) {
					this.debug('incompatible gender');
					return false;
				}
				if (!this.runEvent('Attract', pokemon, source)) {
					this.debug('Attract event failed');
					return false;
				}

				if (effect.id === 'cutecharm') {
					this.add('-start', pokemon, 'Attract', '[from] ability: Cute Charm', '[of] ' + source);
				} else if (effect.id === 'destinyknot') {
					this.add('-start', pokemon, 'Attract', '[from] item: Destiny Knot', '[of] ' + source);
				} else {
					this.add('-start', pokemon, 'Attract');
				}
			},
			onUpdate(pokemon) {
				if (this.effectState.source && !this.effectState.source.isActive && pokemon.volatiles['attract']) {
					this.debug('Removing Attract volatile on ' + pokemon);
					pokemon.removeVolatile('attract');
				}
			},
			onBeforeMovePriority: 2,
			onBeforeMove(pokemon, target, move) {
				this.add('-activate', pokemon, 'move: Attract', '[of] ' + this.effectState.source);
				if (this.randomChance(1, 2)) {
					this.add('cant', pokemon, 'Attract');
					return false;
				}
			},
			onEnd(pokemon) {
				this.add('-end', pokemon, 'Attract', '[silent]');
			},
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Cute",
	},
	aurasphere: {
		num: 396,
		accuracy: true,
		basePower: 80,
		category: "Special",
		name: "Aura Sphere",
		pp: 20,
		priority: 0,
		flags: {bullet: 1, protect: 1, pulse: 1, mirror: 1, distance: 1},
		secondary: null,
		target: "any",
		type: "Fighting",
		contestType: "Beautiful",
	},
	aurawheel: {
		num: 783,
		accuracy: 100,
		basePower: 110,
		category: "Physical",
		name: "Aura Wheel",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 100,
			self: {
				boosts: {
					spe: 1,
				},
			},
		},
		onTry(source) {
			if (source.species.baseSpecies === 'Morpeko') {
				return;
			}
			this.attrLastMove('[still]');
			this.add('-fail', source, 'move: Aura Wheel');
			this.hint("Only a Pokemon whose form is Morpeko or Morpeko-Hangry can use this move.");
			return null;
		},
		onModifyType(move, pokemon) {
			if (pokemon.species.name === 'Morpeko-Hangry') {
				move.type = 'Dark';
			} else {
				move.type = 'Electric';
			}
		},
		target: "normal",
		type: "Electric",
	},
	aurorabeam: {
		num: 62,
		accuracy: 100,
		basePower: 65,
		category: "Special",
		name: "Aurora Beam",
		pp: 20,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 10,
			boosts: {
				atk: -1,
			},
		},
		target: "normal",
		type: "Ice",
		contestType: "Beautiful",
	},
	auroraveil: {
		num: 694,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Aurora Veil",
		pp: 20,
		priority: 0,
		flags: {snatch: 1},
		sideCondition: 'auroraveil',
		onTry() {
			return this.field.isWeather('hail');
		},
		condition: {
			duration: 5,
			durationCallback(target, source, effect) {
				if (source?.hasItem('lightclay')) {
					return 8;
				}
				return 5;
			},
			onAnyModifyDamage(damage, source, target, move) {
				if (target !== source && this.effectState.target.hasAlly(target)) {
					if ((target.side.getSideCondition('reflect') && this.getCategory(move) === 'Physical') ||
							(target.side.getSideCondition('lightscreen') && this.getCategory(move) === 'Special')) {
						return;
					}
					if (!target.getMoveHitData(move).crit && !move.infiltrates) {
						this.debug('Aurora Veil weaken');
						if (this.activePerHalf > 1) return this.chainModify([2732, 4096]);
						return this.chainModify(0.5);
					}
				}
			},
			onSideStart(side) {
				this.add('-sidestart', side, 'move: Aurora Veil');
			},
			onSideResidualOrder: 26,
			onSideResidualSubOrder: 10,
			onSideEnd(side) {
				this.add('-sideend', side, 'move: Aurora Veil');
			},
		},
		secondary: null,
		target: "allySide",
		type: "Ice",
		zMove: {boost: {spe: 1}},
		contestType: "Beautiful",
	},
	autotomize: {
		num: 475,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Autotomize",
		pp: 15,
		priority: 0,
		flags: {snatch: 1},
		onTryHit(pokemon) {
			const hasContrary = pokemon.hasAbility('contrary');
			if ((!hasContrary && pokemon.boosts.spe === 6) || (hasContrary && pokemon.boosts.spe === -6)) {
				return false;
			}
		},
		boosts: {
			spe: 2,
		},
		onHit(pokemon) {
			if (pokemon.weighthg > 1) {
				pokemon.weighthg = Math.max(1, pokemon.weighthg - 1000);
				this.add('-start', pokemon, 'Autotomize');
			}
		},
		secondary: null,
		target: "self",
		type: "Steel",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Beautiful",
	},
	avalanche: {
		num: 419,
		accuracy: 100,
		basePower: 60,
		basePowerCallback(pokemon, target, move) {
			const damagedByTarget = pokemon.attackedBy.some(
				p => p.source === target && p.damage > 0 && p.thisTurn
			);
			if (damagedByTarget) {
				this.debug('Boosted for getting hit by ' + target);
				return move.basePower * 2;
			}
			return move.basePower;
		},
		category: "Physical",
		name: "Avalanche",
		pp: 10,
		priority: -4,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Ice",
		contestType: "Beautiful",
	},
	babydolleyes: {
		num: 608,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Baby-Doll Eyes",
		pp: 30,
		priority: 1,
		flags: {protect: 1, reflectable: 1, mirror: 1, mystery: 1},
		boosts: {
			atk: -1,
		},
		secondary: null,
		target: "normal",
		type: "Fairy",
		zMove: {boost: {def: 1}},
		contestType: "Cute",
	},
	baddybad: {
		num: 737,
		accuracy: 95,
		basePower: 80,
		category: "Special",
		isNonstandard: "LGPE",
		name: "Baddy Bad",
		pp: 15,
		priority: 0,
		flags: {protect: 1},
		self: {
			sideCondition: 'reflect',
		},
		secondary: null,
		target: "normal",
		type: "Dark",
		contestType: "Clever",
	},
	banefulbunker: {
		num: 661,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Baneful Bunker",
		pp: 10,
		priority: 4,
		flags: {},
		stallingMove: true,
		volatileStatus: 'banefulbunker',
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
					if (['gmaxoneblow', 'gmaxrapidflow'].includes(move.id)) return;
					if (move.isZ || move.isMax) target.getMoveHitData(move).zBrokeProtect = true;
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
				if (this.checkMoveMakesContact(move, source, target)) {
					source.trySetStatus('psn', target);
				}
				return this.NOT_FAIL;
			},
			onHit(target, source, move) {
				if (move.isZOrMaxPowered && this.checkMoveMakesContact(move, source, target)) {
					source.trySetStatus('psn', target);
				}
			},
		},
		secondary: null,
		target: "self",
		type: "Poison",
		zMove: {boost: {def: 1}},
		contestType: "Tough",
	},
	barrage: {
		num: 140,
		accuracy: 85,
		basePower: 15,
		category: "Physical",
		isNonstandard: "Past",
		name: "Barrage",
		pp: 20,
		priority: 0,
		flags: {bullet: 1, protect: 1, mirror: 1},
		multihit: [2, 5],
		secondary: null,
		target: "normal",
		type: "Normal",
		contestType: "Cute",
	},
	barrier: {
		num: 112,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Past",
		name: "Barrier",
		pp: 20,
		priority: 0,
		flags: {snatch: 1},
		boosts: {
			def: 2,
		},
		secondary: null,
		target: "self",
		type: "Psychic",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Cool",
	},
	batonpass: {
		num: 226,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Baton Pass",
		pp: 40,
		priority: 0,
		flags: {},
		self: {
			onHit(source) {
				source.skipBeforeSwitchOutEventFlag = true;
			},
		},
		selfSwitch: 'copyvolatile',
		secondary: null,
		target: "self",
		type: "Normal",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Cute",
	},
	beakblast: {
		num: 690,
		accuracy: 100,
		basePower: 100,
		category: "Physical",
		isNonstandard: "Past",
		name: "Beak Blast",
		pp: 15,
		priority: -3,
		flags: {bullet: 1, protect: 1},
		beforeTurnCallback(pokemon) {
			pokemon.addVolatile('beakblast');
		},
		condition: {
			duration: 1,
			onStart(pokemon) {
				this.add('-singleturn', pokemon, 'move: Beak Blast');
			},
			onHit(target, source, move) {
				if (this.checkMoveMakesContact(move, source, target)) {
					source.trySetStatus('brn', target);
				}
			},
		},
		// FIXME: onMoveAborted(pokemon) {pokemon.removeVolatile('beakblast')},
		onAfterMove(pokemon) {
			pokemon.removeVolatile('beakblast');
		},
		secondary: null,
		target: "normal",
		type: "Flying",
		contestType: "Tough",
	},
	beatup: {
		num: 251,
		accuracy: 100,
		basePower: 0,
		basePowerCallback(pokemon, target, move) {
			return 5 + Math.floor(move.allies!.shift()!.species.baseStats.atk / 10);
		},
		category: "Physical",
		name: "Beat Up",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, mystery: 1},
		onModifyMove(move, pokemon) {
			move.allies = pokemon.side.pokemon.filter(ally => ally === pokemon || !ally.fainted && !ally.status);
			move.multihit = move.allies.length;
		},
		secondary: null,
		target: "normal",
		type: "Dark",
		contestType: "Clever",
	},
	behemothbash: {
		num: 782,
		accuracy: 100,
		basePower: 100,
		category: "Physical",
		name: "Behemoth Bash",
		pp: 5,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Steel",
	},
	behemothblade: {
		num: 781,
		accuracy: 100,
		basePower: 100,
		category: "Physical",
		name: "Behemoth Blade",
		pp: 5,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Steel",
	},
	belch: {
		num: 562,
		accuracy: 90,
		basePower: 120,
		category: "Special",
		name: "Belch",
		pp: 10,
		priority: 0,
		flags: {protect: 1},
		// Move disabling implemented in Battle#nextTurn in sim/battle.js
		secondary: null,
		target: "normal",
		type: "Poison",
		contestType: "Tough",
	},
	bellydrum: {
		num: 187,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Belly Drum",
		pp: 10,
		priority: 0,
		flags: {snatch: 1},
		onHit(target) {
			if (target.hp <= target.maxhp / 2 || target.boosts.atk >= 6 || target.maxhp === 1) { // Shedinja clause
				return false;
			}
			this.directDamage(target.maxhp / 2);
			this.boost({atk: 12}, target);
		},
		secondary: null,
		target: "self",
		type: "Normal",
		zMove: {effect: 'heal'},
		contestType: "Cute",
	},
	bestow: {
		num: 516,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Past",
		name: "Bestow",
		pp: 15,
		priority: 0,
		flags: {mirror: 1, authentic: 1, mystery: 1},
		onHit(target, source, move) {
			if (target.item) {
				return false;
			}
			const myItem = source.takeItem();
			if (!myItem) return false;
			if (!this.singleEvent('TakeItem', myItem, source.itemState, target, source, move, myItem) || !target.setItem(myItem)) {
				source.item = myItem.id;
				return false;
			}
			this.add('-item', target, myItem.name, '[from] move: Bestow', '[of] ' + source);
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {boost: {spe: 2}},
		contestType: "Cute",
	},
	bide: {
		num: 117,
		accuracy: true,
		basePower: 0,
		category: "Physical",
		isNonstandard: "Past",
		name: "Bide",
		pp: 10,
		priority: 1,
		flags: {contact: 1, protect: 1},
		volatileStatus: 'bide',
		ignoreImmunity: true,
		beforeMoveCallback(pokemon) {
			if (pokemon.volatiles['bide']) return true;
		},
		condition: {
			duration: 3,
			onLockMove: 'bide',
			onStart(pokemon) {
				this.effectState.totalDamage = 0;
				this.add('-start', pokemon, 'move: Bide');
			},
			onDamagePriority: -101,
			onDamage(damage, target, source, move) {
				if (!move || move.effectType !== 'Move' || !source) return;
				this.effectState.totalDamage += damage;
				this.effectState.lastDamageSource = source;
			},
			onBeforeMove(pokemon, target, move) {
				if (this.effectState.duration === 1) {
					this.add('-end', pokemon, 'move: Bide');
					target = this.effectState.lastDamageSource;
					if (!target || !this.effectState.totalDamage) {
						this.attrLastMove('[still]');
						this.add('-fail', pokemon);
						return false;
					}
					if (!target.isActive) {
						const possibleTarget = this.getRandomTarget(pokemon, this.dex.moves.get('pound'));
						if (!possibleTarget) {
							this.add('-miss', pokemon);
							return false;
						}
						target = possibleTarget;
					}
					const moveData: Partial<ActiveMove> = {
						id: 'bide' as ID,
						name: "Bide",
						accuracy: true,
						damage: this.effectState.totalDamage * 2,
						category: "Physical",
						priority: 1,
						flags: {contact: 1, protect: 1},
						effectType: 'Move',
						type: 'Normal',
					};
					this.actions.tryMoveHit(target, pokemon, moveData as ActiveMove);
					pokemon.removeVolatile('bide');
					return false;
				}
				this.add('-activate', pokemon, 'move: Bide');
			},
			onMoveAborted(pokemon) {
				pokemon.removeVolatile('bide');
			},
			onEnd(pokemon) {
				this.add('-end', pokemon, 'move: Bide', '[silent]');
			},
		},
		secondary: null,
		target: "self",
		type: "Normal",
		contestType: "Tough",
	},
	bind: {
		num: 20,
		accuracy: 85,
		basePower: 15,
		category: "Physical",
		name: "Bind",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		volatileStatus: 'partiallytrapped',
		secondary: null,
		target: "normal",
		type: "Normal",
		contestType: "Tough",
	},
	bite: {
		num: 44,
		accuracy: 100,
		basePower: 60,
		category: "Physical",
		name: "Bite",
		pp: 25,
		priority: 0,
		flags: {bite: 1, contact: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 30,
			volatileStatus: 'flinch',
		},
		target: "normal",
		type: "Dark",
		contestType: "Tough",
	},
	blackholeeclipse: {
		num: 654,
		accuracy: true,
		basePower: 1,
		category: "Physical",
		isNonstandard: "Past",
		name: "Black Hole Eclipse",
		pp: 1,
		priority: 0,
		flags: {},
		isZ: "darkiniumz",
		secondary: null,
		target: "normal",
		type: "Dark",
		contestType: "Cool",
	},
	blastburn: {
		num: 307,
		accuracy: 90,
		basePower: 150,
		category: "Special",
		name: "Blast Burn",
		pp: 5,
		priority: 0,
		flags: {recharge: 1, protect: 1, mirror: 1},
		self: {
			volatileStatus: 'mustrecharge',
		},
		secondary: null,
		target: "normal",
		type: "Fire",
		contestType: "Beautiful",
	},
	blazekick: {
		num: 299,
		accuracy: 90,
		basePower: 85,
		category: "Physical",
		name: "Blaze Kick",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		critRatio: 2,
		secondary: {
			chance: 10,
			status: 'brn',
		},
		target: "normal",
		type: "Fire",
		contestType: "Cool",
	},
	blizzard: {
		num: 59,
		accuracy: 70,
		basePower: 110,
		category: "Special",
		name: "Blizzard",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onModifyMove(move) {
			if (this.field.isWeather('hail')) move.accuracy = true;
		},
		secondary: {
			chance: 10,
			status: 'frz',
		},
		target: "allAdjacentFoes",
		type: "Ice",
		contestType: "Beautiful",
	},
	block: {
		num: 335,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Block",
		pp: 5,
		priority: 0,
		flags: {reflectable: 1, mirror: 1},
		onHit(target, source, move) {
			return target.addVolatile('trapped', source, move, 'trapper');
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {boost: {def: 1}},
		contestType: "Cute",
	},
	bloomdoom: {
		num: 644,
		accuracy: true,
		basePower: 1,
		category: "Physical",
		isNonstandard: "Past",
		name: "Bloom Doom",
		pp: 1,
		priority: 0,
		flags: {},
		isZ: "grassiumz",
		secondary: null,
		target: "normal",
		type: "Grass",
		contestType: "Cool",
	},
	blueflare: {
		num: 551,
		accuracy: 85,
		basePower: 130,
		category: "Special",
		name: "Blue Flare",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 20,
			status: 'brn',
		},
		target: "normal",
		type: "Fire",
		contestType: "Beautiful",
	},
	bodypress: {
		num: 776,
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		name: "Body Press",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		useSourceDefensiveAsOffensive: true,
		secondary: null,
		target: "normal",
		type: "Fighting",
	},
	bodyslam: {
		num: 34,
		accuracy: 100,
		basePower: 85,
		category: "Physical",
		name: "Body Slam",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, nonsky: 1},
		secondary: {
			chance: 30,
			status: 'par',
		},
		target: "normal",
		type: "Normal",
		contestType: "Tough",
	},
	boltbeak: {
		num: 754,
		accuracy: 100,
		basePower: 85,
		basePowerCallback(pokemon, target, move) {
			if (target.newlySwitched || this.queue.willMove(target)) {
				this.debug('Bolt Beak damage boost');
				return move.basePower * 2;
			}
			this.debug('Bolt Beak NOT boosted');
			return move.basePower;
		},
		category: "Physical",
		name: "Bolt Beak",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Electric",
	},
	boltstrike: {
		num: 550,
		accuracy: 85,
		basePower: 130,
		category: "Physical",
		name: "Bolt Strike",
		pp: 5,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 20,
			status: 'par',
		},
		target: "normal",
		type: "Electric",
		contestType: "Beautiful",
	},
	boneclub: {
		num: 125,
		accuracy: 85,
		basePower: 65,
		category: "Physical",
		isNonstandard: "Past",
		name: "Bone Club",
		pp: 20,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 10,
			volatileStatus: 'flinch',
		},
		target: "normal",
		type: "Ground",
		contestType: "Tough",
	},
	bonemerang: {
		num: 155,
		accuracy: 90,
		basePower: 50,
		category: "Physical",
		name: "Bonemerang",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		multihit: 2,
		secondary: null,
		target: "normal",
		type: "Ground",
		maxMove: {basePower: 130},
		contestType: "Tough",
	},
	bonerush: {
		num: 198,
		accuracy: 90,
		basePower: 25,
		category: "Physical",
		name: "Bone Rush",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		multihit: [2, 5],
		secondary: null,
		target: "normal",
		type: "Ground",
		zMove: {basePower: 140},
		maxMove: {basePower: 130},
		contestType: "Tough",
	},
	boomburst: {
		num: 586,
		accuracy: 100,
		basePower: 140,
		category: "Special",
		name: "Boomburst",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, sound: 1, authentic: 1},
		secondary: null,
		target: "allAdjacent",
		type: "Normal",
		contestType: "Tough",
	},
	bounce: {
		num: 340,
		accuracy: 85,
		basePower: 85,
		category: "Physical",
		name: "Bounce",
		pp: 5,
		priority: 0,
		flags: {contact: 1, charge: 1, protect: 1, mirror: 1, gravity: 1, distance: 1},
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
			onSourceBasePower(basePower, target, source, move) {
				if (move.id === 'gust' || move.id === 'twister') {
					return this.chainModify(2);
				}
			},
		},
		secondary: {
			chance: 30,
			status: 'par',
		},
		target: "any",
		type: "Flying",
		contestType: "Cute",
	},
	bouncybubble: {
		num: 733,
		accuracy: 100,
		basePower: 60,
		category: "Special",
		isNonstandard: "LGPE",
		name: "Bouncy Bubble",
		pp: 20,
		priority: 0,
		flags: {protect: 1, heal: 1},
		drain: [1, 2],
		secondary: null,
		target: "normal",
		type: "Water",
		contestType: "Clever",
	},
	branchpoke: {
		num: 785,
		accuracy: 100,
		basePower: 40,
		category: "Physical",
		name: "Branch Poke",
		pp: 40,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Grass",
	},
	bravebird: {
		num: 413,
		accuracy: 100,
		basePower: 120,
		category: "Physical",
		name: "Brave Bird",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, distance: 1},
		recoil: [33, 100],
		secondary: null,
		target: "any",
		type: "Flying",
		contestType: "Cool",
	},
	breakingswipe: {
		num: 784,
		accuracy: 100,
		basePower: 60,
		category: "Physical",
		name: "Breaking Swipe",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 100,
			boosts: {
				atk: -1,
			},
		},
		target: "allAdjacentFoes",
		type: "Dragon",
	},
	breakneckblitz: {
		num: 622,
		accuracy: true,
		basePower: 1,
		category: "Physical",
		isNonstandard: "Past",
		name: "Breakneck Blitz",
		pp: 1,
		priority: 0,
		flags: {},
		isZ: "normaliumz",
		secondary: null,
		target: "normal",
		type: "Normal",
		contestType: "Cool",
	},
	brickbreak: {
		num: 280,
		accuracy: 100,
		basePower: 75,
		category: "Physical",
		name: "Brick Break",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onTryHit(pokemon) {
			// will shatter screens through sub, before you hit
			pokemon.side.removeSideCondition('reflect');
			pokemon.side.removeSideCondition('lightscreen');
			pokemon.side.removeSideCondition('auroraveil');
		},
		secondary: null,
		target: "normal",
		type: "Fighting",
		contestType: "Cool",
	},
	brine: {
		num: 362,
		accuracy: 100,
		basePower: 65,
		category: "Special",
		name: "Brine",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (target.hp * 2 <= target.maxhp) {
				return this.chainModify(2);
			}
		},
		secondary: null,
		target: "normal",
		type: "Water",
		contestType: "Tough",
	},
	brutalswing: {
		num: 693,
		accuracy: 100,
		basePower: 60,
		category: "Physical",
		name: "Brutal Swing",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: null,
		target: "allAdjacent",
		type: "Dark",
		contestType: "Tough",
	},
	bubble: {
		num: 145,
		accuracy: 100,
		basePower: 40,
		category: "Special",
		isNonstandard: "Past",
		name: "Bubble",
		pp: 30,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 10,
			boosts: {
				spe: -1,
			},
		},
		target: "allAdjacentFoes",
		type: "Water",
		contestType: "Cute",
	},
	bubblebeam: {
		num: 61,
		accuracy: 100,
		basePower: 65,
		category: "Special",
		name: "Bubble Beam",
		pp: 20,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 10,
			boosts: {
				spe: -1,
			},
		},
		target: "normal",
		type: "Water",
		contestType: "Beautiful",
	},
	bugbite: {
		num: 450,
		accuracy: 100,
		basePower: 60,
		category: "Physical",
		name: "Bug Bite",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onHit(target, source) {
			const item = target.getItem();
			if (source.hp && item.isBerry && target.takeItem(source)) {
				this.add('-enditem', target, item.name, '[from] stealeat', '[move] Bug Bite', '[of] ' + source);
				if (this.singleEvent('Eat', item, null, source, null, null)) {
					this.runEvent('EatItem', source, null, null, item);
					if (item.id === 'leppaberry') target.staleness = 'external';
				}
				if (item.onEat) source.ateBerry = true;
			}
		},
		secondary: null,
		target: "normal",
		type: "Bug",
		contestType: "Cute",
	},
	bugbuzz: {
		num: 405,
		accuracy: 100,
		basePower: 90,
		category: "Special",
		name: "Bug Buzz",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, sound: 1, authentic: 1},
		secondary: {
			chance: 10,
			boosts: {
				spd: -1,
			},
		},
		target: "normal",
		type: "Bug",
		contestType: "Beautiful",
	},
	bulkup: {
		num: 339,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Bulk Up",
		pp: 20,
		priority: 0,
		flags: {snatch: 1},
		boosts: {
			atk: 1,
			def: 1,
		},
		secondary: null,
		target: "self",
		type: "Fighting",
		zMove: {boost: {atk: 1}},
		contestType: "Cool",
	},
	bulldoze: {
		num: 523,
		accuracy: 100,
		basePower: 60,
		category: "Physical",
		name: "Bulldoze",
		pp: 20,
		priority: 0,
		flags: {protect: 1, mirror: 1, nonsky: 1},
		secondary: {
			chance: 100,
			boosts: {
				spe: -1,
			},
		},
		target: "allAdjacent",
		type: "Ground",
		contestType: "Tough",
	},
	bulletpunch: {
		num: 418,
		accuracy: 100,
		basePower: 40,
		category: "Physical",
		name: "Bullet Punch",
		pp: 30,
		priority: 1,
		flags: {contact: 1, protect: 1, mirror: 1, punch: 1},
		secondary: null,
		target: "normal",
		type: "Steel",
		contestType: "Tough",
	},
	bulletseed: {
		num: 331,
		accuracy: 100,
		basePower: 25,
		category: "Physical",
		name: "Bullet Seed",
		pp: 30,
		priority: 0,
		flags: {bullet: 1, protect: 1, mirror: 1},
		multihit: [2, 5],
		secondary: null,
		target: "normal",
		type: "Grass",
		zMove: {basePower: 140},
		maxMove: {basePower: 130},
		contestType: "Cool",
	},
	burningjealousy: {
		num: 807,
		accuracy: 100,
		basePower: 70,
		category: "Special",
		name: "Burning Jealousy",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 100,
			onHit(target, source, move) {
				if (target?.statsRaisedThisTurn) {
					target.trySetStatus('brn', source, move);
				}
			},
		},
		target: "allAdjacentFoes",
		type: "Fire",
		contestType: "Tough",
	},
	burnup: {
		num: 682,
		accuracy: 100,
		basePower: 130,
		category: "Special",
		name: "Burn Up",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1, defrost: 1},
		onTryMove(pokemon, target, move) {
			if (pokemon.hasType('Fire')) return;
			this.add('-fail', pokemon, 'move: Burn Up');
			this.attrLastMove('[still]');
			return null;
		},
		self: {
			onHit(pokemon) {
				pokemon.setType(pokemon.getTypes(true).map(type => type === "Fire" ? "???" : type));
				this.add('-start', pokemon, 'typechange', pokemon.types.join('/'), '[from] move: Burn Up');
			},
		},
		secondary: null,
		target: "normal",
		type: "Fire",
		contestType: "Clever",
	},
	buzzybuzz: {
		num: 734,
		accuracy: 100,
		basePower: 60,
		category: "Special",
		isNonstandard: "LGPE",
		name: "Buzzy Buzz",
		pp: 20,
		priority: 0,
		flags: {protect: 1},
		secondary: {
			chance: 100,
			status: 'par',
		},
		target: "normal",
		type: "Electric",
		contestType: "Clever",
	},
	calmmind: {
		num: 347,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Calm Mind",
		pp: 20,
		priority: 0,
		flags: {snatch: 1},
		boosts: {
			spa: 1,
			spd: 1,
		},
		secondary: null,
		target: "self",
		type: "Psychic",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Clever",
	},
	camouflage: {
		num: 293,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Past",
		name: "Camouflage",
		pp: 20,
		priority: 0,
		flags: {snatch: 1},
		onHit(target) {
			let newType = 'Normal';
			if (this.field.isTerrain('electricterrain')) {
				newType = 'Electric';
			} else if (this.field.isTerrain('grassyterrain')) {
				newType = 'Grass';
			} else if (this.field.isTerrain('mistyterrain')) {
				newType = 'Fairy';
			} else if (this.field.isTerrain('psychicterrain')) {
				newType = 'Psychic';
			}

			if (target.getTypes().join() === newType || !target.setType(newType)) return false;
			this.add('-start', target, 'typechange', newType);
		},
		secondary: null,
		target: "self",
		type: "Normal",
		zMove: {boost: {evasion: 1}},
		contestType: "Clever",
	},
	captivate: {
		num: 445,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		isNonstandard: "Past",
		name: "Captivate",
		pp: 20,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1},
		onTryImmunity(pokemon, source) {
			return (pokemon.gender === 'M' && source.gender === 'F') || (pokemon.gender === 'F' && source.gender === 'M');
		},
		boosts: {
			spa: -2,
		},
		secondary: null,
		target: "allAdjacentFoes",
		type: "Normal",
		zMove: {boost: {spd: 2}},
		contestType: "Cute",
	},
	catastropika: {
		num: 658,
		accuracy: true,
		basePower: 210,
		category: "Physical",
		isNonstandard: "Past",
		name: "Catastropika",
		pp: 1,
		priority: 0,
		flags: {contact: 1},
		isZ: "pikaniumz",
		secondary: null,
		target: "normal",
		type: "Electric",
		contestType: "Cool",
	},
	celebrate: {
		num: 606,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Celebrate",
		pp: 40,
		priority: 0,
		flags: {},
		onTryHit(target, source) {
			this.add('-activate', target, 'move: Celebrate');
		},
		secondary: null,
		target: "self",
		type: "Normal",
		zMove: {boost: {atk: 1, def: 1, spa: 1, spd: 1, spe: 1}},
		contestType: "Cute",
	},
	charge: {
		num: 268,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Charge",
		pp: 20,
		priority: 0,
		flags: {snatch: 1},
		volatileStatus: 'charge',
		onHit(pokemon) {
			this.add('-activate', pokemon, 'move: Charge');
		},
		condition: {
			duration: 2,
			onRestart(pokemon) {
				this.effectState.duration = 2;
			},
			onBasePowerPriority: 9,
			onBasePower(basePower, attacker, defender, move) {
				if (move.type === 'Electric') {
					this.debug('charge boost');
					return this.chainModify(2);
				}
			},
		},
		boosts: {
			spd: 1,
		},
		secondary: null,
		target: "self",
		type: "Electric",
		zMove: {boost: {spd: 1}},
		contestType: "Clever",
	},
	chargebeam: {
		num: 451,
		accuracy: 90,
		basePower: 50,
		category: "Special",
		name: "Charge Beam",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 70,
			self: {
				boosts: {
					spa: 1,
				},
			},
		},
		target: "normal",
		type: "Electric",
		contestType: "Beautiful",
	},
	charm: {
		num: 204,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Charm",
		pp: 20,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1, mystery: 1},
		boosts: {
			atk: -2,
		},
		secondary: null,
		target: "normal",
		type: "Fairy",
		zMove: {boost: {def: 1}},
		contestType: "Cute",
	},
	chatter: {
		num: 448,
		accuracy: 100,
		basePower: 65,
		category: "Special",
		isNonstandard: "Past",
		name: "Chatter",
		pp: 20,
		priority: 0,
		flags: {protect: 1, mirror: 1, sound: 1, distance: 1, authentic: 1},
		noSketch: true,
		secondary: {
			chance: 100,
			volatileStatus: 'confusion',
		},
		target: "any",
		type: "Flying",
		contestType: "Cute",
	},
	chipaway: {
		num: 498,
		accuracy: 100,
		basePower: 70,
		category: "Physical",
		isNonstandard: "Past",
		name: "Chip Away",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		ignoreDefensive: true,
		ignoreEvasion: true,
		secondary: null,
		target: "normal",
		type: "Normal",
		contestType: "Tough",
	},
	circlethrow: {
		num: 509,
		accuracy: 90,
		basePower: 60,
		category: "Physical",
		name: "Circle Throw",
		pp: 10,
		priority: -6,
		flags: {contact: 1, protect: 1, mirror: 1},
		forceSwitch: true,
		target: "normal",
		type: "Fighting",
		contestType: "Cool",
	},
	clamp: {
		num: 128,
		accuracy: 85,
		basePower: 35,
		category: "Physical",
		isNonstandard: "Past",
		name: "Clamp",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		volatileStatus: 'partiallytrapped',
		secondary: null,
		target: "normal",
		type: "Water",
		contestType: "Tough",
	},
	clangingscales: {
		num: 691,
		accuracy: 100,
		basePower: 110,
		category: "Special",
		name: "Clanging Scales",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1, sound: 1, authentic: 1},
		selfBoost: {
			boosts: {
				def: -1,
			},
		},
		secondary: null,
		target: "allAdjacentFoes",
		type: "Dragon",
		contestType: "Tough",
	},
	clangoroussoul: {
		num: 775,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Clangorous Soul",
		pp: 5,
		priority: 0,
		flags: {snatch: 1, sound: 1, dance: 1},
		onTry(source) {
			if (source.hp <= (source.maxhp * 33 / 100) || source.maxhp === 1) return false;
		},
		onTryHit(pokemon, target, move) {
			if (!this.boost(move.boosts as SparseBoostsTable)) return null;
			delete move.boosts;
		},
		onHit(pokemon) {
			this.directDamage(pokemon.maxhp * 33 / 100);
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
		type: "Dragon",
	},
	clangoroussoulblaze: {
		num: 728,
		accuracy: true,
		basePower: 185,
		category: "Special",
		isNonstandard: "Past",
		name: "Clangorous Soulblaze",
		pp: 1,
		priority: 0,
		flags: {sound: 1, authentic: 1},
		selfBoost: {
			boosts: {
				atk: 1,
				def: 1,
				spa: 1,
				spd: 1,
				spe: 1,
			},
		},
		isZ: "kommoniumz",
		secondary: {
			// Sheer Force negates the selfBoost even though it is not secondary
		},
		target: "allAdjacentFoes",
		type: "Dragon",
		contestType: "Cool",
	},
	clearsmog: {
		num: 499,
		accuracy: true,
		basePower: 50,
		category: "Special",
		name: "Clear Smog",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onHit(target) {
			target.clearBoosts();
			this.add('-clearboost', target);
		},
		secondary: null,
		target: "normal",
		type: "Poison",
		contestType: "Beautiful",
	},
	closecombat: {
		num: 370,
		accuracy: 100,
		basePower: 120,
		category: "Physical",
		name: "Close Combat",
		pp: 5,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		self: {
			boosts: {
				def: -1,
				spd: -1,
			},
		},
		secondary: null,
		target: "normal",
		type: "Fighting",
		contestType: "Tough",
	},
	coaching: {
		num: 811,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Coaching",
		pp: 10,
		priority: 0,
		flags: {authentic: 1},
		secondary: null,
		boosts: {
			atk: 1,
			def: 1,
		},
		target: "adjacentAlly",
		type: "Fighting",
	},
	coil: {
		num: 489,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Coil",
		pp: 20,
		priority: 0,
		flags: {snatch: 1},
		boosts: {
			atk: 1,
			def: 1,
			accuracy: 1,
		},
		secondary: null,
		target: "self",
		type: "Poison",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Tough",
	},
	cometpunch: {
		num: 4,
		accuracy: 85,
		basePower: 18,
		category: "Physical",
		isNonstandard: "Past",
		name: "Comet Punch",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, punch: 1},
		multihit: [2, 5],
		secondary: null,
		target: "normal",
		type: "Normal",
		maxMove: {basePower: 100},
		contestType: "Tough",
	},
	confide: {
		num: 590,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Confide",
		pp: 20,
		priority: 0,
		flags: {reflectable: 1, mirror: 1, sound: 1, authentic: 1},
		boosts: {
			spa: -1,
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {boost: {spd: 1}},
		contestType: "Cute",
	},
	confuseray: {
		num: 109,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Confuse Ray",
		pp: 10,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1},
		volatileStatus: 'confusion',
		secondary: null,
		target: "normal",
		type: "Ghost",
		zMove: {boost: {spa: 1}},
		contestType: "Clever",
	},
	confusion: {
		num: 93,
		accuracy: 100,
		basePower: 50,
		category: "Special",
		name: "Confusion",
		pp: 25,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 10,
			volatileStatus: 'confusion',
		},
		target: "normal",
		type: "Psychic",
		contestType: "Clever",
	},
	constrict: {
		num: 132,
		accuracy: 100,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Past",
		name: "Constrict",
		pp: 35,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 10,
			boosts: {
				spe: -1,
			},
		},
		target: "normal",
		type: "Normal",
		contestType: "Tough",
	},
	continentalcrush: {
		num: 632,
		accuracy: true,
		basePower: 1,
		category: "Physical",
		isNonstandard: "Past",
		name: "Continental Crush",
		pp: 1,
		priority: 0,
		flags: {},
		isZ: "rockiumz",
		secondary: null,
		target: "normal",
		type: "Rock",
		contestType: "Cool",
	},
	conversion: {
		num: 160,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Conversion",
		pp: 30,
		priority: 0,
		flags: {snatch: 1},
		onHit(target) {
			const type = this.dex.moves.get(target.moveSlots[0].id).type;
			if (target.hasType(type) || !target.setType(type)) return false;
			this.add('-start', target, 'typechange', type);
		},
		secondary: null,
		target: "self",
		type: "Normal",
		zMove: {boost: {atk: 1, def: 1, spa: 1, spd: 1, spe: 1}},
		contestType: "Beautiful",
	},
	conversion2: {
		num: 176,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Conversion 2",
		pp: 30,
		priority: 0,
		flags: {authentic: 1},
		onHit(target, source) {
			if (!target.lastMoveUsed) {
				return false;
			}
			const possibleTypes = [];
			const attackType = target.lastMoveUsed.type;
			for (const type of this.dex.types.names()) {
				if (source.hasType(type)) continue;
				const typeCheck = this.dex.types.get(type).damageTaken[attackType];
				if (typeCheck === 2 || typeCheck === 3) {
					possibleTypes.push(type);
				}
			}
			if (!possibleTypes.length) {
				return false;
			}
			const randomType = this.sample(possibleTypes);

			if (!source.setType(randomType)) return false;
			this.add('-start', source, 'typechange', randomType);
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {effect: 'heal'},
		contestType: "Beautiful",
	},
	copycat: {
		num: 383,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Copycat",
		pp: 20,
		priority: 0,
		flags: {},
		onHit(pokemon) {
			const noCopycat = [
				'assist', 'banefulbunker', 'beakblast', 'behemothbash', 'behemothblade', 'belch', 'bestow', 'celebrate', 'chatter', 'circlethrow', 'copycat', 'counter', 'covet', 'craftyshield', 'destinybond', 'detect', 'dragontail', 'dynamaxcannon', 'endure', 'feint', 'focuspunch', 'followme', 'helpinghand', 'holdhands', 'kingsshield', 'matblock', 'mefirst', 'metronome', 'mimic', 'mirrorcoat', 'mirrormove', 'naturepower', 'obstruct', 'protect', 'ragepowder', 'roar', 'shelltrap', 'sketch', 'sleeptalk', 'snatch', 'spikyshield', 'spotlight', 'struggle', 'switcheroo', 'thief', 'transform', 'trick', 'whirlwind',
			];
			let move: Move | ActiveMove | null = this.lastMove;
			if (!move) return;

			if (move.isMax && move.baseMove) move = this.dex.moves.get(move.baseMove);
			if (noCopycat.includes(move.id) || move.isZ || move.isMax) {
				return false;
			}
			this.actions.useMove(move.id, pokemon);
		},
		secondary: null,
		target: "self",
		type: "Normal",
		zMove: {boost: {accuracy: 1}},
		contestType: "Cute",
	},
	coreenforcer: {
		num: 687,
		accuracy: 100,
		basePower: 100,
		category: "Special",
		name: "Core Enforcer",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onHit(target) {
			if (target.getAbility().isPermanent) return;
			if (target.newlySwitched || this.queue.willMove(target)) return;
			target.addVolatile('gastroacid');
		},
		onAfterSubDamage(damage, target) {
			if (target.getAbility().isPermanent) return;
			if (target.newlySwitched || this.queue.willMove(target)) return;
			target.addVolatile('gastroacid');
		},
		secondary: null,
		target: "allAdjacentFoes",
		type: "Dragon",
		zMove: {basePower: 140},
		contestType: "Tough",
	},
	corkscrewcrash: {
		num: 638,
		accuracy: true,
		basePower: 1,
		category: "Physical",
		isNonstandard: "Past",
		name: "Corkscrew Crash",
		pp: 1,
		priority: 0,
		flags: {},
		isZ: "steeliumz",
		secondary: null,
		target: "normal",
		type: "Steel",
		contestType: "Cool",
	},
	corrosivegas: {
		num: 810,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Corrosive Gas",
		pp: 40,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1, mystery: 1},
		onHit(target, source) {
			const item = target.takeItem(source);
			if (item) {
				this.add('-enditem', target, item.name, '[from] move: Corrosive Gas', '[of] ' + source);
			} else {
				this.add('-fail', target, 'move: Corrosive Gas');
			}
		},
		secondary: null,
		target: "allAdjacent",
		type: "Poison",
	},
	cosmicpower: {
		num: 322,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Cosmic Power",
		pp: 20,
		priority: 0,
		flags: {snatch: 1},
		boosts: {
			def: 1,
			spd: 1,
		},
		secondary: null,
		target: "self",
		type: "Psychic",
		zMove: {boost: {spd: 1}},
		contestType: "Beautiful",
	},
	cottonguard: {
		num: 538,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Cotton Guard",
		pp: 10,
		priority: 0,
		flags: {snatch: 1},
		boosts: {
			def: 3,
		},
		secondary: null,
		target: "self",
		type: "Grass",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Cute",
	},
	cottonspore: {
		num: 178,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Cotton Spore",
		pp: 40,
		priority: 0,
		flags: {powder: 1, protect: 1, reflectable: 1, mirror: 1},
		boosts: {
			spe: -2,
		},
		secondary: null,
		target: "allAdjacentFoes",
		type: "Grass",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Beautiful",
	},
	counter: {
		num: 68,
		accuracy: 100,
		basePower: 0,
		damageCallback(pokemon) {
			if (!pokemon.volatiles['counter']) return 0;
			return pokemon.volatiles['counter'].damage || 1;
		},
		category: "Physical",
		name: "Counter",
		pp: 20,
		priority: -5,
		flags: {contact: 1, protect: 1},
		beforeTurnCallback(pokemon) {
			pokemon.addVolatile('counter');
		},
		onTryHit(target, source, move) {
			if (!source.volatiles['counter']) return false;
			if (source.volatiles['counter'].slot === null) return false;
		},
		condition: {
			duration: 1,
			noCopy: true,
			onStart(target, source, move) {
				this.effectState.slot = null;
				this.effectState.damage = 0;
			},
			onRedirectTargetPriority: -1,
			onRedirectTarget(target, source, source2, move) {
				if (move.id !== 'counter') return;
				if (source !== this.effectState.target || !this.effectState.slot) return;
				return this.getAtSlot(this.effectState.slot);
			},
			onDamagingHit(damage, target, source, move) {
				if (!source.isAlly(target) && this.getCategory(move) === 'Physical') {
					this.effectState.slot = source.getSlot();
					this.effectState.damage = 2 * damage;
				}
			},
		},
		secondary: null,
		target: "scripted",
		type: "Fighting",
		maxMove: {basePower: 75},
		contestType: "Tough",
	},
	courtchange: {
		num: 756,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Court Change",
		pp: 10,
		priority: 0,
		flags: {mirror: 1},
		onHitField(target, source) {
			const sideConditions = [
				'mist', 'lightscreen', 'reflect', 'spikes', 'safeguard', 'tailwind', 'toxicspikes', 'stealthrock', 'waterpledge', 'firepledge', 'grasspledge', 'stickyweb', 'auroraveil', 'gmaxsteelsurge', 'gmaxcannonade', 'gmaxvinelash', 'gmaxwildfire',
			];
			let success = false;
			if (this.gameType === "freeforall") {
				// random integer from 1-3 inclusive
				const offset = this.random(3) + 1;
				// the list of all sides in counterclockwise order
				const sides = [this.sides[0], this.sides[2]!, this.sides[1], this.sides[3]!];
				for (const id of sideConditions) {
					const effectName = this.dex.conditions.get(id).name;
					const rotatedSides = [];
					let someCondition = false;
					for (let i = 0; i < 4; i++) {
						const sourceSide = sides[i];
						const targetSide = sides[(i + offset) % 4]; // the next side in rotation
						rotatedSides.push(targetSide.sideConditions[id]);
						if (sourceSide.sideConditions[id]) {
							this.add('-sideend', sourceSide, effectName, '[silent]');
							someCondition = true;
						}
					}
					if (!someCondition) continue;
					[
						sides[0].sideConditions[id], sides[1].sideConditions[id],
						sides[2]!.sideConditions[id], sides[3]!.sideConditions[id],
					] = [...rotatedSides];
					for (const side of sides) {
						if (side.sideConditions[id]) {
							let layers = side.sideConditions[id].layers || 1;
							for (; layers > 0; layers--) this.add('-sidestart', side, effectName, '[silent]');
						} else {
							delete side.sideConditions[id];
						}
					}
					success = true;
				}
			} else {
				const sourceSide = source.side;
				const targetSide = source.side.foe;
				for (const id of sideConditions) {
					const effectName = this.dex.conditions.get(id).name;
					if (sourceSide.sideConditions[id] && targetSide.sideConditions[id]) {
						[sourceSide.sideConditions[id], targetSide.sideConditions[id]] = [
							targetSide.sideConditions[id], sourceSide.sideConditions[id],
						];
						this.add('-sideend', sourceSide, effectName, '[silent]');
						this.add('-sideend', targetSide, effectName, '[silent]');
					} else if (sourceSide.sideConditions[id] && !targetSide.sideConditions[id]) {
						targetSide.sideConditions[id] = sourceSide.sideConditions[id];
						delete sourceSide.sideConditions[id];
						this.add('-sideend', sourceSide, effectName, '[silent]');
					} else if (targetSide.sideConditions[id] && !sourceSide.sideConditions[id]) {
						sourceSide.sideConditions[id] = targetSide.sideConditions[id];
						delete targetSide.sideConditions[id];
						this.add('-sideend', targetSide, effectName, '[silent]');
					} else {
						continue;
					}
					let sourceLayers = sourceSide.sideConditions[id] ? (sourceSide.sideConditions[id].layers || 1) : 0;
					let targetLayers = targetSide.sideConditions[id] ? (targetSide.sideConditions[id].layers || 1) : 0;
					for (; sourceLayers > 0; sourceLayers--) {
						this.add('-sidestart', sourceSide, effectName, '[silent]');
					}
					for (; targetLayers > 0; targetLayers--) {
						this.add('-sidestart', targetSide, effectName, '[silent]');
					}
					success = true;
				}
			}
			if (!success) return false;
			this.add('-activate', source, 'move: Court Change');
		},
		secondary: null,
		target: "all",
		type: "Normal",
	},
	covet: {
		num: 343,
		accuracy: 100,
		basePower: 60,
		category: "Physical",
		name: "Covet",
		pp: 25,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onAfterHit(target, source, move) {
			if (source.item || source.volatiles['gem']) {
				return;
			}
			const yourItem = target.takeItem(source);
			if (!yourItem) {
				return;
			}
			if (
				!this.singleEvent('TakeItem', yourItem, target.itemState, source, target, move, yourItem) ||
				!source.setItem(yourItem)
			) {
				target.item = yourItem.id; // bypass setItem so we don't break choicelock or anything
				return;
			}
			this.add('-item', source, yourItem, '[from] move: Covet', '[of] ' + target);
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		contestType: "Cute",
	},
	crabhammer: {
		num: 152,
		accuracy: 90,
		basePower: 100,
		category: "Physical",
		name: "Crabhammer",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		critRatio: 2,
		secondary: null,
		target: "normal",
		type: "Water",
		contestType: "Tough",
	},
	craftyshield: {
		num: 578,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Crafty Shield",
		pp: 10,
		priority: 3,
		flags: {},
		sideCondition: 'craftyshield',
		onTry() {
			return !!this.queue.willAct();
		},
		condition: {
			duration: 1,
			onSideStart(target, source) {
				this.add('-singleturn', source, 'Crafty Shield');
			},
			onTryHitPriority: 3,
			onTryHit(target, source, move) {
				if (['self', 'all'].includes(move.target) || move.category !== 'Status') return;
				this.add('-activate', target, 'move: Crafty Shield');
				return this.NOT_FAIL;
			},
		},
		secondary: null,
		target: "allySide",
		type: "Fairy",
		zMove: {boost: {spd: 1}},
		contestType: "Clever",
	},
	crosschop: {
		num: 238,
		accuracy: 80,
		basePower: 100,
		category: "Physical",
		name: "Cross Chop",
		pp: 5,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		critRatio: 2,
		secondary: null,
		target: "normal",
		type: "Fighting",
		contestType: "Cool",
	},
	crosspoison: {
		num: 440,
		accuracy: 100,
		basePower: 70,
		category: "Physical",
		name: "Cross Poison",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 10,
			status: 'psn',
		},
		critRatio: 2,
		target: "normal",
		type: "Poison",
		contestType: "Cool",
	},
	crunch: {
		num: 242,
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		name: "Crunch",
		pp: 15,
		priority: 0,
		flags: {bite: 1, contact: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 20,
			boosts: {
				def: -1,
			},
		},
		target: "normal",
		type: "Dark",
		contestType: "Tough",
	},
	crushclaw: {
		num: 306,
		accuracy: 95,
		basePower: 75,
		category: "Physical",
		name: "Crush Claw",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 50,
			boosts: {
				def: -1,
			},
		},
		target: "normal",
		type: "Normal",
		contestType: "Cool",
	},
	crushgrip: {
		num: 462,
		accuracy: 100,
		basePower: 0,
		basePowerCallback(pokemon, target) {
			return Math.floor(Math.floor((120 * (100 * Math.floor(target.hp * 4096 / target.maxhp)) + 2048 - 1) / 4096) / 100) || 1;
		},
		category: "Physical",
		name: "Crush Grip",
		pp: 5,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {basePower: 190},
		maxMove: {basePower: 140},
		contestType: "Tough",
	},
	curse: {
		num: 174,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Curse",
		pp: 10,
		priority: 0,
		flags: {authentic: 1},
		volatileStatus: 'curse',
		onModifyMove(move, source, target) {
			if (!source.hasType('Ghost')) {
				move.target = move.nonGhostTarget as MoveTarget;
			}
		},
		onTryHit(target, source, move) {
			if (!source.hasType('Ghost')) {
				delete move.volatileStatus;
				delete move.onHit;
				move.self = {boosts: {spe: -1, atk: 1, def: 1}};
			} else if (move.volatileStatus && target.volatiles['curse']) {
				return false;
			}
		},
		onHit(target, source) {
			this.directDamage(source.maxhp / 2, source, source);
		},
		condition: {
			onStart(pokemon, source) {
				this.add('-start', pokemon, 'Curse', '[of] ' + source);
			},
			onResidualOrder: 12,
			onResidual(pokemon) {
				this.damage(pokemon.baseMaxhp / 4);
			},
		},
		secondary: null,
		target: "randomNormal",
		nonGhostTarget: "self",
		type: "Ghost",
		zMove: {effect: 'curse'},
		contestType: "Tough",
	},
	cut: {
		num: 15,
		accuracy: 95,
		basePower: 50,
		category: "Physical",
		name: "Cut",
		pp: 30,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Normal",
		contestType: "Cool",
	},
	darkestlariat: {
		num: 663,
		accuracy: 100,
		basePower: 85,
		category: "Physical",
		name: "Darkest Lariat",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		ignoreEvasion: true,
		ignoreDefensive: true,
		secondary: null,
		target: "normal",
		type: "Dark",
		contestType: "Cool",
	},
	darkpulse: {
		num: 399,
		accuracy: 100,
		basePower: 80,
		category: "Special",
		name: "Dark Pulse",
		pp: 15,
		priority: 0,
		flags: {protect: 1, pulse: 1, mirror: 1, distance: 1},
		secondary: {
			chance: 20,
			volatileStatus: 'flinch',
		},
		target: "any",
		type: "Dark",
		contestType: "Cool",
	},
	darkvoid: {
		num: 464,
		accuracy: 50,
		basePower: 0,
		category: "Status",
		isNonstandard: "Past",
		name: "Dark Void",
		pp: 10,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1},
		status: 'slp',
		onTry(source, target, move) {
			if (source.species.name === 'Darkrai' || move.hasBounced) {
				return;
			}
			this.add('-fail', source, 'move: Dark Void');
			this.hint("Only a Pokemon whose form is Darkrai can use this move.");
			return null;
		},
		secondary: null,
		target: "allAdjacentFoes",
		type: "Dark",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Clever",
	},
	dazzlinggleam: {
		num: 605,
		accuracy: 100,
		basePower: 80,
		category: "Special",
		name: "Dazzling Gleam",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "allAdjacentFoes",
		type: "Fairy",
		contestType: "Beautiful",
	},
	decorate: {
		num: 777,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Decorate",
		pp: 15,
		priority: 0,
		flags: {mystery: 1},
		secondary: null,
		boosts: {
			atk: 2,
			spa: 2,
		},
		target: "normal",
		type: "Fairy",
	},
	defendorder: {
		num: 455,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Defend Order",
		pp: 10,
		priority: 0,
		flags: {snatch: 1},
		boosts: {
			def: 1,
			spd: 1,
		},
		secondary: null,
		target: "self",
		type: "Bug",
		zMove: {boost: {def: 1}},
		contestType: "Clever",
	},
	defensecurl: {
		num: 111,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Defense Curl",
		pp: 40,
		priority: 0,
		flags: {snatch: 1},
		boosts: {
			def: 1,
		},
		volatileStatus: 'defensecurl',
		condition: {
			noCopy: true,
		},
		secondary: null,
		target: "self",
		type: "Normal",
		zMove: {boost: {accuracy: 1}},
		contestType: "Cute",
	},
	defog: {
		num: 432,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Defog",
		pp: 15,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1, authentic: 1},
		onHit(target, source, move) {
			let success = false;
			if (!target.volatiles['substitute'] || move.infiltrates) success = !!this.boost({evasion: -1});
			const removeTarget = [
				'reflect', 'lightscreen', 'auroraveil', 'safeguard', 'mist', 'spikes', 'toxicspikes', 'stealthrock', 'stickyweb', 'gmaxsteelsurge',
			];
			const removeAll = [
				'spikes', 'toxicspikes', 'stealthrock', 'stickyweb', 'gmaxsteelsurge',
			];
			for (const targetCondition of removeTarget) {
				if (target.side.removeSideCondition(targetCondition)) {
					if (!removeAll.includes(targetCondition)) continue;
					this.add('-sideend', target.side, this.dex.conditions.get(targetCondition).name, '[from] move: Defog', '[of] ' + source);
					success = true;
				}
			}
			for (const sideCondition of removeAll) {
				if (source.side.removeSideCondition(sideCondition)) {
					this.add('-sideend', source.side, this.dex.conditions.get(sideCondition).name, '[from] move: Defog', '[of] ' + source);
					success = true;
				}
			}
			this.field.clearTerrain();
			return success;
		},
		secondary: null,
		target: "normal",
		type: "Flying",
		zMove: {boost: {accuracy: 1}},
		contestType: "Cool",
	},
	destinybond: {
		num: 194,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Destiny Bond",
		pp: 5,
		priority: 0,
		flags: {authentic: 1},
		volatileStatus: 'destinybond',
		onPrepareHit(pokemon) {
			return !pokemon.removeVolatile('destinybond');
		},
		condition: {
			onStart(pokemon) {
				this.add('-singlemove', pokemon, 'Destiny Bond');
			},
			onFaint(target, source, effect) {
				if (!source || !effect || target.isAlly(source)) return;
				if (effect.effectType === 'Move' && !effect.isFutureMove) {
					if (source.volatiles['dynamax']) {
						this.add('-hint', "Dynamaxed Pokémon are immune to Destiny Bond.");
						return;
					}
					this.add('-activate', target, 'move: Destiny Bond');
					source.faint();
				}
			},
			onBeforeMovePriority: -1,
			onBeforeMove(pokemon, target, move) {
				if (move.id === 'destinybond') return;
				this.debug('removing Destiny Bond before attack');
				pokemon.removeVolatile('destinybond');
			},
			onMoveAborted(pokemon, target, move) {
				pokemon.removeVolatile('destinybond');
			},
		},
		secondary: null,
		target: "self",
		type: "Ghost",
		zMove: {effect: 'redirect'},
		contestType: "Clever",
	},
	detect: {
		num: 197,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Detect",
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
		target: "self",
		type: "Fighting",
		zMove: {boost: {evasion: 1}},
		contestType: "Cool",
	},
	devastatingdrake: {
		num: 652,
		accuracy: true,
		basePower: 1,
		category: "Physical",
		isNonstandard: "Past",
		name: "Devastating Drake",
		pp: 1,
		priority: 0,
		flags: {},
		isZ: "dragoniumz",
		secondary: null,
		target: "normal",
		type: "Dragon",
		contestType: "Cool",
	},
	diamondstorm: {
		num: 591,
		accuracy: 95,
		basePower: 100,
		category: "Physical",
		name: "Diamond Storm",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		self: {
			chance: 50,
			boosts: {
				def: 2,
			},
		},
		secondary: {
			// Sheer Force negates the self even though it is not secondary
		},
		target: "allAdjacentFoes",
		type: "Rock",
		contestType: "Beautiful",
	},
	dig: {
		num: 91,
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		name: "Dig",
		pp: 10,
		priority: 0,
		flags: {contact: 1, charge: 1, protect: 1, mirror: 1, nonsky: 1},
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
			onImmunity(type, pokemon) {
				if (type === 'sandstorm' || type === 'hail') return false;
			},
			onInvulnerability(target, source, move) {
				if (['earthquake', 'magnitude'].includes(move.id)) {
					return;
				}
				return false;
			},
			onSourceModifyDamage(damage, source, target, move) {
				if (move.id === 'earthquake' || move.id === 'magnitude') {
					return this.chainModify(2);
				}
			},
		},
		secondary: null,
		target: "normal",
		type: "Ground",
		contestType: "Tough",
	},
	disable: {
		num: 50,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Disable",
		pp: 20,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1, authentic: 1},
		volatileStatus: 'disable',
		onTryHit(target) {
			if (!target.lastMove || target.lastMove.isZ || target.lastMove.isMax || target.lastMove.id === 'struggle') {
				return false;
			}
		},
		condition: {
			duration: 5,
			noCopy: true, // doesn't get copied by Baton Pass
			onStart(pokemon, source, effect) {
				// The target hasn't taken its turn, or Cursed Body activated and the move was not used through Dancer or Instruct
				if (
					this.queue.willMove(pokemon) ||
					(pokemon === this.activePokemon && this.activeMove && !this.activeMove.isExternal)
				) {
					this.effectState.duration--;
				}
				if (!pokemon.lastMove) {
					this.debug(`Pokemon hasn't moved yet`);
					return false;
				}
				for (const moveSlot of pokemon.moveSlots) {
					if (moveSlot.id === pokemon.lastMove.id) {
						if (!moveSlot.pp) {
							this.debug('Move out of PP');
							return false;
						}
					}
				}
				if (effect.effectType === 'Ability') {
					this.add('-start', pokemon, 'Disable', pokemon.lastMove.name, '[from] ability: Cursed Body', '[of] ' + source);
				} else {
					this.add('-start', pokemon, 'Disable', pokemon.lastMove.name);
				}
				this.effectState.move = pokemon.lastMove.id;
			},
			onResidualOrder: 17,
			onEnd(pokemon) {
				this.add('-end', pokemon, 'Disable');
			},
			onBeforeMovePriority: 7,
			onBeforeMove(attacker, defender, move) {
				if (!move.isZ && move.id === this.effectState.move) {
					this.add('cant', attacker, 'Disable', move);
					return false;
				}
			},
			onDisableMove(pokemon) {
				for (const moveSlot of pokemon.moveSlots) {
					if (moveSlot.id === this.effectState.move) {
						pokemon.disableMove(moveSlot.id);
					}
				}
			},
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Clever",
	},
	disarmingvoice: {
		num: 574,
		accuracy: true,
		basePower: 40,
		category: "Special",
		name: "Disarming Voice",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1, sound: 1, authentic: 1},
		secondary: null,
		target: "allAdjacentFoes",
		type: "Fairy",
		contestType: "Cute",
	},
	discharge: {
		num: 435,
		accuracy: 100,
		basePower: 80,
		category: "Special",
		name: "Discharge",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 30,
			status: 'par',
		},
		target: "allAdjacent",
		type: "Electric",
		contestType: "Beautiful",
	},
	dive: {
		num: 291,
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		name: "Dive",
		pp: 10,
		priority: 0,
		flags: {contact: 1, charge: 1, protect: 1, mirror: 1, nonsky: 1},
		onTryMove(attacker, defender, move) {
			if (attacker.removeVolatile(move.id)) {
				return;
			}
			if (attacker.hasAbility('gulpmissile') && attacker.species.name === 'Cramorant' && !attacker.transformed) {
				const forme = attacker.hp <= attacker.maxhp / 2 ? 'cramorantgorging' : 'cramorantgulping';
				attacker.formeChange(forme, move);
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
			onImmunity(type, pokemon) {
				if (type === 'sandstorm' || type === 'hail') return false;
			},
			onInvulnerability(target, source, move) {
				if (['surf', 'whirlpool'].includes(move.id)) {
					return;
				}
				return false;
			},
			onSourceModifyDamage(damage, source, target, move) {
				if (move.id === 'surf' || move.id === 'whirlpool') {
					return this.chainModify(2);
				}
			},
		},
		secondary: null,
		target: "normal",
		type: "Water",
		contestType: "Beautiful",
	},
	dizzypunch: {
		num: 146,
		accuracy: 100,
		basePower: 70,
		category: "Physical",
		isNonstandard: "Past",
		name: "Dizzy Punch",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, punch: 1},
		secondary: {
			chance: 20,
			volatileStatus: 'confusion',
		},
		target: "normal",
		type: "Normal",
		contestType: "Cute",
	},
	doomdesire: {
		num: 353,
		accuracy: 100,
		basePower: 140,
		category: "Special",
		name: "Doom Desire",
		pp: 5,
		priority: 0,
		flags: {},
		isFutureMove: true,
		onTry(source, target) {
			if (!target.side.addSlotCondition(target, 'futuremove')) return false;
			Object.assign(target.side.slotConditions[target.position]['futuremove'], {
				move: 'doomdesire',
				source: source,
				moveData: {
					id: 'doomdesire',
					name: "Doom Desire",
					accuracy: 100,
					basePower: 140,
					category: "Special",
					priority: 0,
					flags: {},
					effectType: 'Move',
					isFutureMove: true,
					type: 'Steel',
				},
			});
			this.add('-start', source, 'Doom Desire');
			return this.NOT_FAIL;
		},
		secondary: null,
		target: "normal",
		type: "Steel",
		contestType: "Beautiful",
	},
	doubleedge: {
		num: 38,
		accuracy: 100,
		basePower: 120,
		category: "Physical",
		name: "Double-Edge",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		recoil: [33, 100],
		secondary: null,
		target: "normal",
		type: "Normal",
		contestType: "Tough",
	},
	doublehit: {
		num: 458,
		accuracy: 90,
		basePower: 35,
		category: "Physical",
		name: "Double Hit",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		multihit: 2,
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {basePower: 140},
		maxMove: {basePower: 120},
		contestType: "Cool",
	},
	doubleironbash: {
		num: 742,
		accuracy: 100,
		basePower: 60,
		category: "Physical",
		name: "Double Iron Bash",
		pp: 5,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, punch: 1},
		multihit: 2,
		secondary: {
			chance: 30,
			volatileStatus: 'flinch',
		},
		target: "normal",
		type: "Steel",
		zMove: {basePower: 180},
		maxMove: {basePower: 140},
		contestType: "Clever",
	},
	doublekick: {
		num: 24,
		accuracy: 100,
		basePower: 30,
		category: "Physical",
		name: "Double Kick",
		pp: 30,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		multihit: 2,
		secondary: null,
		target: "normal",
		type: "Fighting",
		maxMove: {basePower: 80},
		contestType: "Cool",
	},
	doubleslap: {
		num: 3,
		accuracy: 85,
		basePower: 15,
		category: "Physical",
		isNonstandard: "Past",
		name: "Double Slap",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		multihit: [2, 5],
		secondary: null,
		target: "normal",
		type: "Normal",
		contestType: "Cute",
	},
	doubleteam: {
		num: 104,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Double Team",
		pp: 15,
		priority: 0,
		flags: {snatch: 1},
		boosts: {
			evasion: 1,
		},
		secondary: null,
		target: "self",
		type: "Normal",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Cool",
	},
	dracometeor: {
		num: 434,
		accuracy: 90,
		basePower: 130,
		category: "Special",
		name: "Draco Meteor",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		self: {
			boosts: {
				spa: -2,
			},
		},
		secondary: null,
		target: "normal",
		type: "Dragon",
		contestType: "Beautiful",
	},
	dragonascent: {
		num: 620,
		accuracy: 100,
		basePower: 120,
		category: "Physical",
		name: "Dragon Ascent",
		pp: 5,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, distance: 1},
		self: {
			boosts: {
				def: -1,
				spd: -1,
			},
		},
		target: "any",
		type: "Flying",
		contestType: "Beautiful",
	},
	dragonbreath: {
		num: 225,
		accuracy: 100,
		basePower: 60,
		category: "Special",
		name: "Dragon Breath",
		pp: 20,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 30,
			status: 'par',
		},
		target: "normal",
		type: "Dragon",
		contestType: "Cool",
	},
	dragonclaw: {
		num: 337,
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		name: "Dragon Claw",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Dragon",
		contestType: "Cool",
	},
	dragondance: {
		num: 349,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Dragon Dance",
		pp: 20,
		priority: 0,
		flags: {snatch: 1, dance: 1},
		boosts: {
			atk: 1,
			spe: 1,
		},
		secondary: null,
		target: "self",
		type: "Dragon",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Cool",
	},
	dragondarts: {
		num: 751,
		accuracy: 100,
		basePower: 50,
		category: "Physical",
		name: "Dragon Darts",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		multihit: 2,
		smartTarget: true,
		secondary: null,
		target: "normal",
		type: "Dragon",
		maxMove: {basePower: 130},
	},
	dragonenergy: {
		num: 820,
		accuracy: 100,
		basePower: 150,
		basePowerCallback(pokemon, target, move) {
			return move.basePower * pokemon.hp / pokemon.maxhp;
		},
		category: "Special",
		name: "Dragon Energy",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "allAdjacentFoes",
		type: "Dragon",
	},
	dragonhammer: {
		num: 692,
		accuracy: 100,
		basePower: 90,
		category: "Physical",
		name: "Dragon Hammer",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Dragon",
		contestType: "Tough",
	},
	dragonpulse: {
		num: 406,
		accuracy: 100,
		basePower: 85,
		category: "Special",
		name: "Dragon Pulse",
		pp: 10,
		priority: 0,
		flags: {protect: 1, pulse: 1, mirror: 1, distance: 1},
		secondary: null,
		target: "any",
		type: "Dragon",
		contestType: "Beautiful",
	},
	dragonrage: {
		num: 82,
		accuracy: 100,
		basePower: 0,
		damage: 40,
		category: "Special",
		isNonstandard: "Past",
		name: "Dragon Rage",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Dragon",
		contestType: "Cool",
	},
	dragonrush: {
		num: 407,
		accuracy: 75,
		basePower: 100,
		category: "Physical",
		name: "Dragon Rush",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 20,
			volatileStatus: 'flinch',
		},
		target: "normal",
		type: "Dragon",
		contestType: "Tough",
	},
	dragontail: {
		num: 525,
		accuracy: 90,
		basePower: 60,
		category: "Physical",
		name: "Dragon Tail",
		pp: 10,
		priority: -6,
		flags: {contact: 1, protect: 1, mirror: 1},
		forceSwitch: true,
		target: "normal",
		type: "Dragon",
		contestType: "Tough",
	},
	drainingkiss: {
		num: 577,
		accuracy: 100,
		basePower: 50,
		category: "Special",
		name: "Draining Kiss",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, heal: 1},
		drain: [3, 4],
		secondary: null,
		target: "normal",
		type: "Fairy",
		contestType: "Cute",
	},
	drainpunch: {
		num: 409,
		accuracy: 100,
		basePower: 75,
		category: "Physical",
		name: "Drain Punch",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, punch: 1, heal: 1},
		drain: [1, 2],
		secondary: null,
		target: "normal",
		type: "Fighting",
		contestType: "Tough",
	},
	dreameater: {
		num: 138,
		accuracy: 100,
		basePower: 100,
		category: "Special",
		name: "Dream Eater",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1, heal: 1},
		drain: [1, 2],
		onTryImmunity(target) {
			return target.status === 'slp' || target.hasAbility('comatose');
		},
		secondary: null,
		target: "normal",
		type: "Psychic",
		contestType: "Clever",
	},
	drillpeck: {
		num: 65,
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		name: "Drill Peck",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, distance: 1},
		secondary: null,
		target: "any",
		type: "Flying",
		contestType: "Cool",
	},
	drillrun: {
		num: 529,
		accuracy: 95,
		basePower: 80,
		category: "Physical",
		name: "Drill Run",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		critRatio: 2,
		secondary: null,
		target: "normal",
		type: "Ground",
		contestType: "Tough",
	},
	drumbeating: {
		num: 778,
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		name: "Drum Beating",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 100,
			boosts: {
				spe: -1,
			},
		},
		target: "normal",
		type: "Grass",
	},
	dualchop: {
		num: 530,
		accuracy: 90,
		basePower: 40,
		category: "Physical",
		name: "Dual Chop",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		multihit: 2,
		secondary: null,
		target: "normal",
		type: "Dragon",
		maxMove: {basePower: 130},
		contestType: "Tough",
	},
	dualwingbeat: {
		num: 814,
		accuracy: 90,
		basePower: 40,
		category: "Physical",
		name: "Dual Wingbeat",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		multihit: 2,
		secondary: null,
		target: "normal",
		type: "Flying",
		maxMove: {basePower: 130},
	},
	dynamaxcannon: {
		num: 744,
		accuracy: 100,
		basePower: 100,
		category: "Special",
		name: "Dynamax Cannon",
		pp: 5,
		priority: 0,
		flags: {protect: 1},
		secondary: null,
		target: "normal",
		type: "Dragon",
	},
	dynamicpunch: {
		num: 223,
		accuracy: 50,
		basePower: 100,
		category: "Physical",
		name: "Dynamic Punch",
		pp: 5,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, punch: 1},
		secondary: {
			chance: 100,
			volatileStatus: 'confusion',
		},
		target: "normal",
		type: "Fighting",
		contestType: "Cool",
	},
	earthpower: {
		num: 414,
		accuracy: 100,
		basePower: 90,
		category: "Special",
		name: "Earth Power",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, nonsky: 1},
		secondary: {
			chance: 10,
			boosts: {
				spd: -1,
			},
		},
		target: "normal",
		type: "Ground",
		contestType: "Beautiful",
	},
	earthquake: {
		num: 89,
		accuracy: 100,
		basePower: 100,
		category: "Physical",
		name: "Earthquake",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, nonsky: 1},
		secondary: null,
		target: "allAdjacent",
		type: "Ground",
		contestType: "Tough",
	},
	echoedvoice: {
		num: 497,
		accuracy: 100,
		basePower: 40,
		basePowerCallback() {
			if (this.field.pseudoWeather.echoedvoice) {
				return 40 * this.field.pseudoWeather.echoedvoice.multiplier;
			}
			return 40;
		},
		category: "Special",
		name: "Echoed Voice",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1, sound: 1, authentic: 1},
		onTry() {
			this.field.addPseudoWeather('echoedvoice');
		},
		condition: {
			duration: 2,
			onFieldStart() {
				this.effectState.multiplier = 1;
			},
			onFieldRestart() {
				if (this.effectState.duration !== 2) {
					this.effectState.duration = 2;
					if (this.effectState.multiplier < 5) {
						this.effectState.multiplier++;
					}
				}
			},
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		contestType: "Beautiful",
	},
	eerieimpulse: {
		num: 598,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Eerie Impulse",
		pp: 15,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1},
		boosts: {
			spa: -2,
		},
		secondary: null,
		target: "normal",
		type: "Electric",
		zMove: {boost: {spd: 1}},
		contestType: "Clever",
	},
	eeriespell: {
		num: 826,
		accuracy: 100,
		basePower: 80,
		category: "Special",
		name: "Eerie Spell",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1, sound: 1, authentic: 1},
		secondary: {
			chance: 100,
			onHit(target) {
				if (!target.hp) return;
				let move: Move | ActiveMove | null = target.lastMove;
				if (!move || move.isZ) return;
				if (move.isMax && move.baseMove) move = this.dex.moves.get(move.baseMove);

				const ppDeducted = target.deductPP(move.id, 3);
				if (!ppDeducted) return;
				this.add('-activate', target, 'move: Eerie Spell', move.name, ppDeducted);
			},
		},
		target: "normal",
		type: "Psychic",
	},
	eggbomb: {
		num: 121,
		accuracy: 75,
		basePower: 100,
		category: "Physical",
		isNonstandard: "Past",
		name: "Egg Bomb",
		pp: 10,
		priority: 0,
		flags: {bullet: 1, protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Normal",
		contestType: "Cute",
	},
	electricterrain: {
		num: 604,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Electric Terrain",
		pp: 10,
		priority: 0,
		flags: {nonsky: 1},
		terrain: 'electricterrain',
		condition: {
			duration: 5,
			durationCallback(source, effect) {
				if (source?.hasItem('terrainextender')) {
					return 8;
				}
				return 5;
			},
			onSetStatus(status, target, source, effect) {
				if (status.id === 'slp' && target.isGrounded() && !target.isSemiInvulnerable()) {
					if (effect.id === 'yawn' || (effect.effectType === 'Move' && !effect.secondaries)) {
						this.add('-activate', target, 'move: Electric Terrain');
					}
					return false;
				}
			},
			onTryAddVolatile(status, target) {
				if (!target.isGrounded() || target.isSemiInvulnerable()) return;
				if (status.id === 'yawn') {
					this.add('-activate', target, 'move: Electric Terrain');
					return null;
				}
			},
			onBasePowerPriority: 6,
			onBasePower(basePower, attacker, defender, move) {
				if (move.type === 'Electric' && attacker.isGrounded() && !attacker.isSemiInvulnerable()) {
					this.debug('electric terrain boost');
					return this.chainModify([5325, 4096]);
				}
			},
			onFieldStart(field, source, effect) {
				if (effect?.effectType === 'Ability') {
					this.add('-fieldstart', 'move: Electric Terrain', '[from] ability: ' + effect, '[of] ' + source);
				} else {
					this.add('-fieldstart', 'move: Electric Terrain');
				}
			},
			onFieldResidualOrder: 27,
			onFieldResidualSubOrder: 7,
			onFieldEnd() {
				this.add('-fieldend', 'move: Electric Terrain');
			},
		},
		secondary: null,
		target: "all",
		type: "Electric",
		zMove: {boost: {spe: 1}},
		contestType: "Clever",
	},
	electrify: {
		num: 582,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Electrify",
		pp: 20,
		priority: 0,
		flags: {protect: 1, mirror: 1, mystery: 1},
		volatileStatus: 'electrify',
		onTryHit(target) {
			if (!this.queue.willMove(target) && target.activeTurns) return false;
		},
		condition: {
			duration: 1,
			onStart(target) {
				this.add('-singleturn', target, 'move: Electrify');
			},
			onModifyTypePriority: -2,
			onModifyType(move) {
				if (move.id !== 'struggle') {
					this.debug('Electrify making move type electric');
					move.type = 'Electric';
				}
			},
		},
		secondary: null,
		target: "normal",
		type: "Electric",
		zMove: {boost: {spa: 1}},
		contestType: "Clever",
	},
	electroball: {
		num: 486,
		accuracy: 100,
		basePower: 0,
		basePowerCallback(pokemon, target) {
			let ratio = Math.floor(pokemon.getStat('spe') / target.getStat('spe'));
			if (!isFinite(ratio)) ratio = 0;
			const bp = [40, 60, 80, 120, 150][Math.min(ratio, 4)];
			this.debug(`${bp} bp`);
			return bp;
		},
		category: "Special",
		name: "Electro Ball",
		pp: 10,
		priority: 0,
		flags: {bullet: 1, protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Electric",
		zMove: {basePower: 160},
		maxMove: {basePower: 130},
		contestType: "Cool",
	},
	electroweb: {
		num: 527,
		accuracy: 95,
		basePower: 55,
		category: "Special",
		name: "Electroweb",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 100,
			boosts: {
				spe: -1,
			},
		},
		target: "allAdjacentFoes",
		type: "Electric",
		contestType: "Beautiful",
	},
	embargo: {
		num: 373,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		isNonstandard: "Past",
		name: "Embargo",
		pp: 15,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1},
		volatileStatus: 'embargo',
		condition: {
			duration: 5,
			onStart(pokemon) {
				this.add('-start', pokemon, 'Embargo');
			},
			// Item suppression implemented in Pokemon.ignoringItem() within sim/pokemon.js
			onResidualOrder: 21,
			onEnd(pokemon) {
				this.add('-end', pokemon, 'Embargo');
			},
		},
		secondary: null,
		target: "normal",
		type: "Dark",
		zMove: {boost: {spa: 1}},
		contestType: "Clever",
	},
	ember: {
		num: 52,
		accuracy: 100,
		basePower: 40,
		category: "Special",
		name: "Ember",
		pp: 25,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 10,
			status: 'brn',
		},
		target: "normal",
		type: "Fire",
		contestType: "Cute",
	},
	encore: {
		num: 227,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Encore",
		pp: 5,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1, authentic: 1},
		volatileStatus: 'encore',
		condition: {
			duration: 3,
			noCopy: true, // doesn't get copied by Z-Baton Pass
			onStart(target) {
				const noEncore = [
					'assist', 'copycat', 'dynamaxcannon', 'encore', 'mefirst', 'metronome', 'mimic', 'mirrormove', 'naturepower', 'sketch', 'sleeptalk', 'struggle', 'transform',
				];
				let move: Move | ActiveMove | null = target.lastMove;
				if (!move || target.volatiles['dynamax']) return false;

				if (move.isMax && move.baseMove) move = this.dex.moves.get(move.baseMove);
				const moveIndex = target.moves.indexOf(move.id);
				if (move.isZ || noEncore.includes(move.id) || !target.moveSlots[moveIndex] || target.moveSlots[moveIndex].pp <= 0) {
					// it failed
					return false;
				}
				this.effectState.move = move.id;
				this.add('-start', target, 'Encore');
				if (!this.queue.willMove(target)) {
					this.effectState.duration++;
				}
			},
			onOverrideAction(pokemon, target, move) {
				if (move.id !== this.effectState.move) return this.effectState.move;
			},
			onResidualOrder: 16,
			onResidual(target) {
				if (target.moves.includes(this.effectState.move) &&
					target.moveSlots[target.moves.indexOf(this.effectState.move)].pp <= 0) {
					// early termination if you run out of PP
					target.removeVolatile('encore');
				}
			},
			onEnd(target) {
				this.add('-end', target, 'Encore');
			},
			onDisableMove(pokemon) {
				if (!this.effectState.move || !pokemon.hasMove(this.effectState.move)) {
					return;
				}
				for (const moveSlot of pokemon.moveSlots) {
					if (moveSlot.id !== this.effectState.move) {
						pokemon.disableMove(moveSlot.id);
					}
				}
			},
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {boost: {spe: 1}},
		contestType: "Cute",
	},
	endeavor: {
		num: 283,
		accuracy: 100,
		basePower: 0,
		damageCallback(pokemon, target) {
			return target.getUndynamaxedHP() - pokemon.hp;
		},
		category: "Physical",
		name: "Endeavor",
		pp: 5,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onTryImmunity(target, pokemon) {
			return pokemon.hp < target.hp;
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {basePower: 160},
		maxMove: {basePower: 130},
		contestType: "Tough",
	},
	endure: {
		num: 203,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Endure",
		pp: 10,
		priority: 4,
		flags: {},
		stallingMove: true,
		volatileStatus: 'endure',
		onPrepareHit(pokemon) {
			return !!this.queue.willAct() && this.runEvent('StallMove', pokemon);
		},
		onHit(pokemon) {
			pokemon.addVolatile('stall');
		},
		condition: {
			duration: 1,
			onStart(target) {
				this.add('-singleturn', target, 'move: Endure');
			},
			onDamagePriority: -10,
			onDamage(damage, target, source, effect) {
				if (effect?.effectType === 'Move' && damage >= target.hp) {
					this.add('-activate', target, 'move: Endure');
					return target.hp - 1;
				}
			},
		},
		secondary: null,
		target: "self",
		type: "Normal",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Tough",
	},
	energyball: {
		num: 412,
		accuracy: 100,
		basePower: 90,
		category: "Special",
		name: "Energy Ball",
		pp: 10,
		priority: 0,
		flags: {bullet: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 10,
			boosts: {
				spd: -1,
			},
		},
		target: "normal",
		type: "Grass",
		contestType: "Beautiful",
	},
	entrainment: {
		num: 494,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Entrainment",
		pp: 15,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1, mystery: 1},
		onTryHit(target, source) {
			if (target === source || target.volatiles['dynamax']) return false;

			const additionalBannedSourceAbilities = [
				// Zen Mode included here for compatability with Gen 5-6
				'flowergift', 'forecast', 'hungerswitch', 'illusion', 'imposter', 'neutralizinggas', 'powerofalchemy', 'receiver', 'trace', 'zenmode',
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
				this.add('-ability', target, target.getAbility().name, '[from] move: Entrainment');
				if (!target.isAlly(source)) target.volatileStaleness = 'external';
				return;
			}
			return false;
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {boost: {spd: 1}},
		contestType: "Cute",
	},
	eruption: {
		num: 284,
		accuracy: 100,
		basePower: 150,
		basePowerCallback(pokemon, target, move) {
			return move.basePower * pokemon.hp / pokemon.maxhp;
		},
		category: "Special",
		name: "Eruption",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "allAdjacentFoes",
		type: "Fire",
		contestType: "Beautiful",
	},
	eternabeam: {
		num: 795,
		accuracy: 90,
		basePower: 160,
		category: "Special",
		name: "Eternabeam",
		pp: 5,
		priority: 0,
		flags: {recharge: 1, protect: 1, mirror: 1},
		self: {
			volatileStatus: 'mustrecharge',
		},
		secondary: null,
		target: "normal",
		type: "Dragon",
	},
	expandingforce: {
		num: 797,
		accuracy: 100,
		basePower: 80,
		category: "Special",
		name: "Expanding Force",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower, source) {
			if (this.field.isTerrain('psychicterrain') && source.isGrounded()) {
				this.debug('terrain buff');
				return this.chainModify(1.5);
			}
		},
		onModifyMove(move, source, target) {
			if (this.field.isTerrain('psychicterrain') && source.isGrounded()) {
				move.target = 'allAdjacentFoes';
			}
		},
		secondary: null,
		target: "normal",
		type: "Psychic",
	},
	explosion: {
		num: 153,
		accuracy: 100,
		basePower: 250,
		category: "Physical",
		name: "Explosion",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		selfdestruct: "always",
		secondary: null,
		target: "allAdjacent",
		type: "Normal",
		contestType: "Beautiful",
	},
	extrasensory: {
		num: 326,
		accuracy: 100,
		basePower: 80,
		category: "Special",
		name: "Extrasensory",
		pp: 20,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 10,
			volatileStatus: 'flinch',
		},
		target: "normal",
		type: "Psychic",
		contestType: "Cool",
	},
	extremeevoboost: {
		num: 702,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Past",
		name: "Extreme Evoboost",
		pp: 1,
		priority: 0,
		flags: {},
		isZ: "eeviumz",
		boosts: {
			atk: 2,
			def: 2,
			spa: 2,
			spd: 2,
			spe: 2,
		},
		secondary: null,
		target: "self",
		type: "Normal",
		contestType: "Beautiful",
	},
	extremespeed: {
		num: 245,
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		name: "Extreme Speed",
		pp: 5,
		priority: 2,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Normal",
		contestType: "Cool",
	},
	facade: {
		num: 263,
		accuracy: 100,
		basePower: 70,
		category: "Physical",
		name: "Facade",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon) {
			if (pokemon.status && pokemon.status !== 'slp') {
				return this.chainModify(2);
			}
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		contestType: "Cute",
	},
	fairylock: {
		num: 587,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Fairy Lock",
		pp: 10,
		priority: 0,
		flags: {mirror: 1, authentic: 1},
		pseudoWeather: 'fairylock',
		condition: {
			duration: 2,
			onStart(target) {
				this.add('-fieldactivate', 'move: Fairy Lock');
			},
			onTrapPokemon(pokemon) {
				pokemon.tryTrap();
			},
		},
		secondary: null,
		target: "all",
		type: "Fairy",
		zMove: {boost: {def: 1}},
		contestType: "Clever",
	},
	fairywind: {
		num: 584,
		accuracy: 100,
		basePower: 40,
		category: "Special",
		name: "Fairy Wind",
		pp: 30,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Fairy",
		contestType: "Beautiful",
	},
	fakeout: {
		num: 252,
		accuracy: 100,
		basePower: 40,
		category: "Physical",
		name: "Fake Out",
		pp: 10,
		priority: 3,
		flags: {contact: 1, protect: 1, mirror: 1},
		onTry(source) {
			if (source.activeMoveActions > 1) {
				this.hint("Fake Out only works on your first turn out.");
				return false;
			}
		},
		secondary: {
			chance: 100,
			volatileStatus: 'flinch',
		},
		target: "normal",
		type: "Normal",
		contestType: "Cute",
	},
	faketears: {
		num: 313,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Fake Tears",
		pp: 20,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1, mystery: 1},
		boosts: {
			spd: -2,
		},
		secondary: null,
		target: "normal",
		type: "Dark",
		zMove: {boost: {spa: 1}},
		contestType: "Cute",
	},
	falsesurrender: {
		num: 793,
		accuracy: true,
		basePower: 80,
		category: "Physical",
		name: "False Surrender",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Dark",
	},
	falseswipe: {
		num: 206,
		accuracy: 100,
		basePower: 40,
		category: "Physical",
		name: "False Swipe",
		pp: 40,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onDamagePriority: -20,
		onDamage(damage, target, source, effect) {
			if (damage >= target.hp) return target.hp - 1;
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		contestType: "Cool",
	},
	featherdance: {
		num: 297,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Feather Dance",
		pp: 15,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1, mystery: 1, dance: 1},
		boosts: {
			atk: -2,
		},
		secondary: null,
		target: "normal",
		type: "Flying",
		zMove: {boost: {def: 1}},
		contestType: "Beautiful",
	},
	feint: {
		num: 364,
		accuracy: 100,
		basePower: 30,
		category: "Physical",
		name: "Feint",
		pp: 10,
		priority: 2,
		flags: {mirror: 1},
		breaksProtect: true,
		// Breaking protection implemented in scripts.js
		secondary: null,
		target: "normal",
		type: "Normal",
		contestType: "Clever",
	},
	feintattack: {
		num: 185,
		accuracy: true,
		basePower: 60,
		category: "Physical",
		isNonstandard: "Past",
		name: "Feint Attack",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Dark",
		contestType: "Clever",
	},
	fellstinger: {
		num: 565,
		accuracy: 100,
		basePower: 50,
		category: "Physical",
		name: "Fell Stinger",
		pp: 25,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onAfterMoveSecondarySelf(pokemon, target, move) {
			if (!target || target.fainted || target.hp <= 0) this.boost({atk: 3}, pokemon, pokemon, move);
		},
		secondary: null,
		target: "normal",
		type: "Bug",
		contestType: "Cool",
	},
	fierydance: {
		num: 552,
		accuracy: 100,
		basePower: 80,
		category: "Special",
		name: "Fiery Dance",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, dance: 1},
		secondary: {
			chance: 50,
			self: {
				boosts: {
					spa: 1,
				},
			},
		},
		target: "normal",
		type: "Fire",
		contestType: "Beautiful",
	},
	fierywrath: {
		num: 822,
		accuracy: 100,
		basePower: 90,
		category: "Special",
		name: "Fiery Wrath",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 20,
			volatileStatus: 'flinch',
		},
		target: "allAdjacentFoes",
		type: "Dark",
	},
	finalgambit: {
		num: 515,
		accuracy: 100,
		basePower: 0,
		damageCallback(pokemon) {
			const damage = pokemon.hp;
			pokemon.faint();
			return damage;
		},
		category: "Special",
		name: "Final Gambit",
		pp: 5,
		priority: 0,
		flags: {protect: 1},
		selfdestruct: "ifHit",
		secondary: null,
		target: "normal",
		type: "Fighting",
		zMove: {basePower: 180},
		contestType: "Tough",
	},
	fireblast: {
		num: 126,
		accuracy: 85,
		basePower: 110,
		category: "Special",
		name: "Fire Blast",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 10,
			status: 'brn',
		},
		target: "normal",
		type: "Fire",
		contestType: "Beautiful",
	},
	firefang: {
		num: 424,
		accuracy: 95,
		basePower: 65,
		category: "Physical",
		name: "Fire Fang",
		pp: 15,
		priority: 0,
		flags: {bite: 1, contact: 1, protect: 1, mirror: 1},
		secondaries: [
			{
				chance: 10,
				status: 'brn',
			}, {
				chance: 10,
				volatileStatus: 'flinch',
			},
		],
		target: "normal",
		type: "Fire",
		contestType: "Cool",
	},
	firelash: {
		num: 680,
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		name: "Fire Lash",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 100,
			boosts: {
				def: -1,
			},
		},
		target: "normal",
		type: "Fire",
		contestType: "Cute",
	},
	firepledge: {
		num: 519,
		accuracy: 100,
		basePower: 80,
		basePowerCallback(target, source, move) {
			if (['grasspledge', 'waterpledge'].includes(move.sourceEffect)) {
				this.add('-combine');
				return 150;
			}
			return 80;
		},
		category: "Special",
		name: "Fire Pledge",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, nonsky: 1},
		onPrepareHit(target, source, move) {
			for (const action of this.queue.list as MoveAction[]) {
				if (
					!action.move || !action.pokemon?.isActive ||
					action.pokemon.fainted || action.maxMove || action.zmove
				) {
					continue;
				}
				if (action.pokemon.isAlly(source) && ['grasspledge', 'waterpledge'].includes(action.move.id)) {
					this.queue.prioritizeAction(action, move);
					this.add('-waiting', source, action.pokemon);
					return null;
				}
			}
		},
		onModifyMove(move) {
			if (move.sourceEffect === 'waterpledge') {
				move.type = 'Water';
				move.forceSTAB = true;
				move.self = {sideCondition: 'waterpledge'};
			}
			if (move.sourceEffect === 'grasspledge') {
				move.type = 'Fire';
				move.forceSTAB = true;
				move.sideCondition = 'firepledge';
			}
		},
		condition: {
			duration: 4,
			onSideStart(targetSide) {
				this.add('-sidestart', targetSide, 'Fire Pledge');
			},
			onResidualOrder: 5,
			onResidualSubOrder: 1,
			onResidual(pokemon) {
				if (!pokemon.hasType('Fire')) this.damage(pokemon.baseMaxhp / 8, pokemon);
			},
			onSideResidualOrder: 26,
			onSideResidualSubOrder: 8,
			onSideEnd(targetSide) {
				this.add('-sideend', targetSide, 'Fire Pledge');
			},
		},
		secondary: null,
		target: "normal",
		type: "Fire",
		contestType: "Beautiful",
	},
	firepunch: {
		num: 7,
		accuracy: 100,
		basePower: 75,
		category: "Physical",
		name: "Fire Punch",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, punch: 1},
		secondary: {
			chance: 10,
			status: 'brn',
		},
		target: "normal",
		type: "Fire",
		contestType: "Tough",
	},
	firespin: {
		num: 83,
		accuracy: 85,
		basePower: 35,
		category: "Special",
		name: "Fire Spin",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		volatileStatus: 'partiallytrapped',
		secondary: null,
		target: "normal",
		type: "Fire",
		contestType: "Beautiful",
	},
	firstimpression: {
		num: 660,
		accuracy: 100,
		basePower: 90,
		category: "Physical",
		name: "First Impression",
		pp: 10,
		priority: 2,
		flags: {contact: 1, protect: 1, mirror: 1},
		onTry(source) {
			if (source.activeMoveActions > 1) {
				this.hint("First Impression only works on your first turn out.");
				return false;
			}
		},
		secondary: null,
		target: "normal",
		type: "Bug",
		contestType: "Cute",
	},
	fishiousrend: {
		num: 755,
		accuracy: 100,
		basePower: 85,
		basePowerCallback(pokemon, target, move) {
			if (target.newlySwitched || this.queue.willMove(target)) {
				this.debug('Fishious Rend damage boost');
				return move.basePower * 2;
			}
			this.debug('Fishious Rend NOT boosted');
			return move.basePower;
		},
		category: "Physical",
		name: "Fishious Rend",
		pp: 10,
		priority: 0,
		flags: {bite: 1, contact: 1, protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Water",
	},
	fissure: {
		num: 90,
		accuracy: 30,
		basePower: 0,
		category: "Physical",
		name: "Fissure",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1, nonsky: 1},
		ohko: true,
		secondary: null,
		target: "normal",
		type: "Ground",
		zMove: {basePower: 180},
		maxMove: {basePower: 130},
		contestType: "Tough",
	},
	flail: {
		num: 175,
		accuracy: 100,
		basePower: 0,
		basePowerCallback(pokemon, target) {
			const ratio = pokemon.hp * 48 / pokemon.maxhp;
			if (ratio < 2) {
				return 200;
			}
			if (ratio < 5) {
				return 150;
			}
			if (ratio < 10) {
				return 100;
			}
			if (ratio < 17) {
				return 80;
			}
			if (ratio < 33) {
				return 40;
			}
			return 20;
		},
		category: "Physical",
		name: "Flail",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {basePower: 160},
		maxMove: {basePower: 130},
		contestType: "Cute",
	},
	flameburst: {
		num: 481,
		accuracy: 100,
		basePower: 70,
		category: "Special",
		isNonstandard: "Past",
		name: "Flame Burst",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onHit(target, source, move) {
			for (const ally of target.adjacentAllies()) {
				this.damage(ally.baseMaxhp / 16, ally, source, this.dex.conditions.get('Flame Burst'));
			}
		},
		onAfterSubDamage(damage, target, source, move) {
			for (const ally of target.adjacentAllies()) {
				this.damage(ally.baseMaxhp / 16, ally, source, this.dex.conditions.get('Flame Burst'));
			}
		},
		secondary: null,
		target: "normal",
		type: "Fire",
		contestType: "Beautiful",
	},
	flamecharge: {
		num: 488,
		accuracy: 100,
		basePower: 50,
		category: "Physical",
		name: "Flame Charge",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 100,
			self: {
				boosts: {
					spe: 1,
				},
			},
		},
		target: "normal",
		type: "Fire",
		contestType: "Cool",
	},
	flamewheel: {
		num: 172,
		accuracy: 100,
		basePower: 60,
		category: "Physical",
		name: "Flame Wheel",
		pp: 25,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, defrost: 1},
		secondary: {
			chance: 10,
			status: 'brn',
		},
		target: "normal",
		type: "Fire",
		contestType: "Beautiful",
	},
	flamethrower: {
		num: 53,
		accuracy: 100,
		basePower: 90,
		category: "Special",
		name: "Flamethrower",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 10,
			status: 'brn',
		},
		target: "normal",
		type: "Fire",
		contestType: "Beautiful",
	},
	flareblitz: {
		num: 394,
		accuracy: 100,
		basePower: 120,
		category: "Physical",
		name: "Flare Blitz",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, defrost: 1},
		recoil: [33, 100],
		secondary: {
			chance: 10,
			status: 'brn',
		},
		target: "normal",
		type: "Fire",
		contestType: "Cool",
	},
	flash: {
		num: 148,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		isNonstandard: "Past",
		name: "Flash",
		pp: 20,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1},
		boosts: {
			accuracy: -1,
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {boost: {evasion: 1}},
		contestType: "Beautiful",
	},
	flashcannon: {
		num: 430,
		accuracy: 100,
		basePower: 80,
		category: "Special",
		name: "Flash Cannon",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 10,
			boosts: {
				spd: -1,
			},
		},
		target: "normal",
		type: "Steel",
		contestType: "Beautiful",
	},
	flatter: {
		num: 260,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Flatter",
		pp: 15,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1, mystery: 1},
		volatileStatus: 'confusion',
		boosts: {
			spa: 1,
		},
		secondary: null,
		target: "normal",
		type: "Dark",
		zMove: {boost: {spd: 1}},
		contestType: "Clever",
	},
	fleurcannon: {
		num: 705,
		accuracy: 90,
		basePower: 130,
		category: "Special",
		name: "Fleur Cannon",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		self: {
			boosts: {
				spa: -2,
			},
		},
		secondary: null,
		target: "normal",
		type: "Fairy",
		contestType: "Beautiful",
	},
	fling: {
		num: 374,
		accuracy: 100,
		basePower: 0,
		category: "Physical",
		name: "Fling",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, mystery: 1},
		onPrepareHit(target, source, move) {
			if (source.ignoringItem()) return false;
			const item = source.getItem();
			if (!this.singleEvent('TakeItem', item, source.itemState, source, source, move, item)) return false;
			if (!item.fling) return false;
			move.basePower = item.fling.basePower;
			if (item.isBerry) {
				move.onHit = function (foe) {
					if (this.singleEvent('Eat', item, null, foe, null, null)) {
						this.runEvent('EatItem', foe, null, null, item);
						if (item.id === 'leppaberry') foe.staleness = 'external';
					}
					if (item.onEat) foe.ateBerry = true;
				};
			} else if (item.fling.effect) {
				move.onHit = item.fling.effect;
			} else {
				if (!move.secondaries) move.secondaries = [];
				if (item.fling.status) {
					move.secondaries.push({status: item.fling.status});
				} else if (item.fling.volatileStatus) {
					move.secondaries.push({volatileStatus: item.fling.volatileStatus});
				}
			}
			source.addVolatile('fling');
		},
		condition: {
			onUpdate(pokemon) {
				const item = pokemon.getItem();
				pokemon.setItem('');
				pokemon.lastItem = item.id;
				pokemon.usedItemThisTurn = true;
				this.add('-enditem', pokemon, item.name, '[from] move: Fling');
				this.runEvent('AfterUseItem', pokemon, null, null, item);
				pokemon.removeVolatile('fling');
			},
		},
		secondary: null,
		target: "normal",
		type: "Dark",
		contestType: "Cute",
	},
	flipturn: {
		num: 812,
		accuracy: 100,
		basePower: 60,
		category: "Physical",
		name: "Flip Turn",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		selfSwitch: true,
		secondary: null,
		target: "normal",
		type: "Water",
	},
	floatyfall: {
		num: 731,
		accuracy: 95,
		basePower: 90,
		category: "Physical",
		isNonstandard: "LGPE",
		name: "Floaty Fall",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, gravity: 1},
		secondary: {
			chance: 30,
			volatileStatus: 'flinch',
		},
		target: "normal",
		type: "Flying",
		contestType: "Cool",
	},
	floralhealing: {
		num: 666,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Floral Healing",
		pp: 10,
		priority: 0,
		flags: {protect: 1, reflectable: 1, heal: 1, mystery: 1},
		onHit(target, source) {
			let success = false;
			if (this.field.isTerrain('grassyterrain')) {
				success = !!this.heal(this.modify(target.baseMaxhp, 0.667));
			} else {
				success = !!this.heal(Math.ceil(target.baseMaxhp * 0.5));
			}
			if (success && !target.isAlly(source)) {
				target.staleness = 'external';
			}
			return success;
		},
		secondary: null,
		target: "normal",
		type: "Fairy",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Beautiful",
	},
	flowershield: {
		num: 579,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Flower Shield",
		pp: 10,
		priority: 0,
		flags: {distance: 1},
		onHitField(t, source, move) {
			const targets: Pokemon[] = [];
			for (const pokemon of this.getAllActive()) {
				if (
					pokemon.hasType('Grass') &&
					(!pokemon.volatiles['maxguard'] ||
					  this.runEvent('TryHit', pokemon, source, move))
				  ) {
					// This move affects every Grass-type Pokemon in play.
					targets.push(pokemon);
				  }
			}
			let success = false;
			for (const target of targets) {
				success = this.boost({def: 1}, target, source, move) || success;
			}
			return success;
		},
		secondary: null,
		target: "all",
		type: "Fairy",
		zMove: {boost: {def: 1}},
		contestType: "Beautiful",
	},
	fly: {
		num: 19,
		accuracy: 95,
		basePower: 90,
		category: "Physical",
		name: "Fly",
		pp: 15,
		priority: 0,
		flags: {contact: 1, charge: 1, protect: 1, mirror: 1, gravity: 1, distance: 1},
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
		type: "Flying",
		contestType: "Clever",
	},
	flyingpress: {
		num: 560,
		accuracy: 95,
		basePower: 100,
		category: "Physical",
		name: "Flying Press",
		pp: 10,
		flags: {contact: 1, protect: 1, mirror: 1, gravity: 1, distance: 1, nonsky: 1},
		onEffectiveness(typeMod, target, type, move) {
			return typeMod + this.dex.getEffectiveness('Flying', type);
		},
		priority: 0,
		secondary: null,
		target: "any",
		type: "Fighting",
		zMove: {basePower: 170},
		contestType: "Tough",
	},
	focusblast: {
		num: 411,
		accuracy: 70,
		basePower: 120,
		category: "Special",
		name: "Focus Blast",
		pp: 5,
		priority: 0,
		flags: {bullet: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 10,
			boosts: {
				spd: -1,
			},
		},
		target: "normal",
		type: "Fighting",
		contestType: "Cool",
	},
	focusenergy: {
		num: 116,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Focus Energy",
		pp: 30,
		priority: 0,
		flags: {snatch: 1},
		volatileStatus: 'focusenergy',
		condition: {
			onStart(target, source, effect) {
				if (effect?.id === 'zpower') {
					this.add('-start', target, 'move: Focus Energy', '[zeffect]');
				} else if (effect && (['imposter', 'psychup', 'transform'].includes(effect.id))) {
					this.add('-start', target, 'move: Focus Energy', '[silent]');
				} else {
					this.add('-start', target, 'move: Focus Energy');
				}
			},
			onModifyCritRatio(critRatio) {
				return critRatio + 2;
			},
		},
		secondary: null,
		target: "self",
		type: "Normal",
		zMove: {boost: {accuracy: 1}},
		contestType: "Cool",
	},
	focuspunch: {
		num: 264,
		accuracy: 100,
		basePower: 150,
		category: "Physical",
		name: "Focus Punch",
		pp: 20,
		priority: -3,
		flags: {contact: 1, protect: 1, punch: 1},
		beforeTurnCallback(pokemon) {
			pokemon.addVolatile('focuspunch');
		},
		beforeMoveCallback(pokemon) {
			if (pokemon.volatiles['focuspunch'] && pokemon.volatiles['focuspunch'].lostFocus) {
				this.add('cant', pokemon, 'Focus Punch', 'Focus Punch');
				return true;
			}
		},
		condition: {
			duration: 1,
			onStart(pokemon) {
				this.add('-singleturn', pokemon, 'move: Focus Punch');
			},
			onHit(pokemon, source, move) {
				if (move.category !== 'Status') {
					pokemon.volatiles['focuspunch'].lostFocus = true;
				}
			},
			onTryAddVolatile(status, pokemon) {
				if (status.id === 'flinch') return null;
			},
		},
		secondary: null,
		target: "normal",
		type: "Fighting",
		contestType: "Tough",
	},
	followme: {
		num: 266,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Follow Me",
		pp: 20,
		priority: 2,
		flags: {},
		volatileStatus: 'followme',
		onTry(source) {
			return this.activePerHalf > 1;
		},
		condition: {
			duration: 1,
			onStart(target, source, effect) {
				if (effect?.id === 'zpower') {
					this.add('-singleturn', target, 'move: Follow Me', '[zeffect]');
				} else {
					this.add('-singleturn', target, 'move: Follow Me');
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
		type: "Normal",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Cute",
	},
	forcepalm: {
		num: 395,
		accuracy: 100,
		basePower: 60,
		category: "Physical",
		name: "Force Palm",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 30,
			status: 'par',
		},
		target: "normal",
		type: "Fighting",
		contestType: "Cool",
	},
	foresight: {
		num: 193,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Past",
		name: "Foresight",
		pp: 40,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1, authentic: 1},
		volatileStatus: 'foresight',
		onTryHit(target) {
			if (target.volatiles['miracleeye']) return false;
		},
		condition: {
			noCopy: true,
			onStart(pokemon) {
				this.add('-start', pokemon, 'Foresight');
			},
			onNegateImmunity(pokemon, type) {
				if (pokemon.hasType('Ghost') && ['Normal', 'Fighting'].includes(type)) return false;
			},
			onModifyBoost(boosts) {
				if (boosts.evasion && boosts.evasion > 0) {
					boosts.evasion = 0;
				}
			},
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {effect: 'crit2'},
		contestType: "Clever",
	},
	forestscurse: {
		num: 571,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Forest's Curse",
		pp: 20,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1, mystery: 1},
		onHit(target) {
			if (target.hasType('Grass')) return false;
			if (!target.addType('Grass')) return false;
			this.add('-start', target, 'typeadd', 'Grass', '[from] move: Forest\'s Curse');
		},
		secondary: null,
		target: "normal",
		type: "Grass",
		zMove: {boost: {atk: 1, def: 1, spa: 1, spd: 1, spe: 1}},
		contestType: "Clever",
	},
	foulplay: {
		num: 492,
		accuracy: 100,
		basePower: 95,
		category: "Physical",
		name: "Foul Play",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		useTargetOffensive: true,
		secondary: null,
		target: "normal",
		type: "Dark",
		contestType: "Clever",
	},
	freezedry: {
		num: 573,
		accuracy: 100,
		basePower: 70,
		category: "Special",
		name: "Freeze-Dry",
		pp: 20,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onEffectiveness(typeMod, target, type) {
			if (type === 'Water') return 1;
		},
		secondary: {
			chance: 10,
			status: 'frz',
		},
		target: "normal",
		type: "Ice",
		contestType: "Beautiful",
	},
	freezeshock: {
		num: 553,
		accuracy: 90,
		basePower: 140,
		category: "Physical",
		name: "Freeze Shock",
		pp: 5,
		priority: 0,
		flags: {charge: 1, protect: 1, mirror: 1},
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
		secondary: {
			chance: 30,
			status: 'par',
		},
		target: "normal",
		type: "Ice",
		contestType: "Beautiful",
	},
	freezingglare: {
		num: 821,
		accuracy: 100,
		basePower: 90,
		category: "Special",
		name: "Freezing Glare",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 10,
			status: 'frz',
		},
		target: "normal",
		type: "Psychic",
	},
	freezyfrost: {
		num: 739,
		accuracy: 90,
		basePower: 100,
		category: "Special",
		isNonstandard: "LGPE",
		name: "Freezy Frost",
		pp: 10,
		priority: 0,
		flags: {protect: 1},
		onHit() {
			this.add('-clearallboost');
			for (const pokemon of this.getAllActive()) {
				pokemon.clearBoosts();
			}
		},
		secondary: null,
		target: "normal",
		type: "Ice",
		contestType: "Clever",
	},
	frenzyplant: {
		num: 338,
		accuracy: 90,
		basePower: 150,
		category: "Special",
		name: "Frenzy Plant",
		pp: 5,
		priority: 0,
		flags: {recharge: 1, protect: 1, mirror: 1, nonsky: 1},
		self: {
			volatileStatus: 'mustrecharge',
		},
		secondary: null,
		target: "normal",
		type: "Grass",
		contestType: "Cool",
	},
	frostbreath: {
		num: 524,
		accuracy: 90,
		basePower: 60,
		category: "Special",
		name: "Frost Breath",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		willCrit: true,
		secondary: null,
		target: "normal",
		type: "Ice",
		contestType: "Beautiful",
	},
	frustration: {
		num: 218,
		accuracy: 100,
		basePower: 0,
		basePowerCallback(pokemon) {
			return Math.floor(((255 - pokemon.happiness) * 10) / 25) || 1;
		},
		category: "Physical",
		isNonstandard: "Past",
		name: "Frustration",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {basePower: 160},
		maxMove: {basePower: 130},
		contestType: "Cute",
	},
	furyattack: {
		num: 31,
		accuracy: 85,
		basePower: 15,
		category: "Physical",
		name: "Fury Attack",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		multihit: [2, 5],
		secondary: null,
		target: "normal",
		type: "Normal",
		contestType: "Cool",
	},
	furycutter: {
		num: 210,
		accuracy: 95,
		basePower: 40,
		basePowerCallback(pokemon, target, move) {
			if (!pokemon.volatiles['furycutter'] || move.hit === 1) {
				pokemon.addVolatile('furycutter');
			}
			return this.clampIntRange(move.basePower * pokemon.volatiles['furycutter'].multiplier, 1, 160);
		},
		category: "Physical",
		name: "Fury Cutter",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		condition: {
			duration: 2,
			onStart() {
				this.effectState.multiplier = 1;
			},
			onRestart() {
				if (this.effectState.multiplier < 4) {
					this.effectState.multiplier <<= 1;
				}
				this.effectState.duration = 2;
			},
		},
		secondary: null,
		target: "normal",
		type: "Bug",
		contestType: "Cool",
	},
	furyswipes: {
		num: 154,
		accuracy: 80,
		basePower: 18,
		category: "Physical",
		name: "Fury Swipes",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		multihit: [2, 5],
		secondary: null,
		target: "normal",
		type: "Normal",
		maxMove: {basePower: 100},
		contestType: "Tough",
	},
	fusionbolt: {
		num: 559,
		accuracy: 100,
		basePower: 100,
		category: "Physical",
		name: "Fusion Bolt",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower, pokemon) {
			if (this.lastSuccessfulMoveThisTurn === 'fusionflare') {
				this.debug('double power');
				return this.chainModify(2);
			}
		},
		secondary: null,
		target: "normal",
		type: "Electric",
		contestType: "Cool",
	},
	fusionflare: {
		num: 558,
		accuracy: 100,
		basePower: 100,
		category: "Special",
		name: "Fusion Flare",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1, defrost: 1},
		onBasePower(basePower, pokemon) {
			if (this.lastSuccessfulMoveThisTurn === 'fusionbolt') {
				this.debug('double power');
				return this.chainModify(2);
			}
		},
		secondary: null,
		target: "normal",
		type: "Fire",
		contestType: "Beautiful",
	},
	futuresight: {
		num: 248,
		accuracy: 100,
		basePower: 120,
		category: "Special",
		name: "Future Sight",
		pp: 10,
		priority: 0,
		flags: {},
		ignoreImmunity: true,
		isFutureMove: true,
		onTry(source, target) {
			if (!target.side.addSlotCondition(target, 'futuremove')) return false;
			Object.assign(target.side.slotConditions[target.position]['futuremove'], {
				duration: 3,
				move: 'futuresight',
				source: source,
				moveData: {
					id: 'futuresight',
					name: "Future Sight",
					accuracy: 100,
					basePower: 120,
					category: "Special",
					priority: 0,
					flags: {},
					ignoreImmunity: false,
					effectType: 'Move',
					isFutureMove: true,
					type: 'Psychic',
				},
			});
			this.add('-start', source, 'move: Future Sight');
			return this.NOT_FAIL;
		},
		secondary: null,
		target: "normal",
		type: "Psychic",
		contestType: "Clever",
	},
	gastroacid: {
		num: 380,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Gastro Acid",
		pp: 10,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1, mystery: 1},
		volatileStatus: 'gastroacid',
		onTryHit(target) {
			if (target.getAbility().isPermanent) {
				return false;
			}
		},
		condition: {
			// Ability suppression implemented in Pokemon.ignoringAbility() within sim/pokemon.js
			onStart(pokemon) {
				this.add('-endability', pokemon);
				this.singleEvent('End', pokemon.getAbility(), pokemon.abilityState, pokemon, pokemon, 'gastroacid');
			},
			onCopy(pokemon) {
				if (pokemon.getAbility().isPermanent) pokemon.removeVolatile('gastroacid');
			},
		},
		secondary: null,
		target: "normal",
		type: "Poison",
		zMove: {boost: {spe: 1}},
		contestType: "Tough",
	},
	geargrind: {
		num: 544,
		accuracy: 85,
		basePower: 50,
		category: "Physical",
		name: "Gear Grind",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		multihit: 2,
		secondary: null,
		target: "normal",
		type: "Steel",
		zMove: {basePower: 180},
		maxMove: {basePower: 130},
		contestType: "Clever",
	},
	gearup: {
		num: 674,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Gear Up",
		pp: 20,
		priority: 0,
		flags: {snatch: 1, authentic: 1},
		onHitSide(side, source, move) {
			const targets = side.allies().filter(target => (
				target.hasAbility(['plus', 'minus']) &&
				(!target.volatiles['maxguard'] || this.runEvent('TryHit', target, source, move))
			));
			if (!targets.length) return false;
			let didSomething = false;
			for (const target of targets) {
				didSomething = this.boost({atk: 1, spa: 1}, target, source, move, false, true) || didSomething;
			}
			return didSomething;
		},
		secondary: null,
		target: "allySide",
		type: "Steel",
		zMove: {boost: {spa: 1}},
		contestType: "Clever",
	},
	genesissupernova: {
		num: 703,
		accuracy: true,
		basePower: 185,
		category: "Special",
		isNonstandard: "Past",
		name: "Genesis Supernova",
		pp: 1,
		priority: 0,
		flags: {},
		isZ: "mewniumz",
		secondary: {
			chance: 100,
			self: {
				onHit() {
					this.field.setTerrain('psychicterrain');
				},
			},
		},
		target: "normal",
		type: "Psychic",
		contestType: "Cool",
	},
	geomancy: {
		num: 601,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Geomancy",
		pp: 10,
		priority: 0,
		flags: {charge: 1, nonsky: 1},
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
		boosts: {
			spa: 2,
			spd: 2,
			spe: 2,
		},
		secondary: null,
		target: "self",
		type: "Fairy",
		zMove: {boost: {atk: 1, def: 1, spa: 1, spd: 1, spe: 1}},
		contestType: "Beautiful",
	},
	gigadrain: {
		num: 202,
		accuracy: 100,
		basePower: 75,
		category: "Special",
		name: "Giga Drain",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, heal: 1},
		drain: [1, 2],
		secondary: null,
		target: "normal",
		type: "Grass",
		contestType: "Clever",
	},
	gigaimpact: {
		num: 416,
		accuracy: 90,
		basePower: 150,
		category: "Physical",
		name: "Giga Impact",
		pp: 5,
		priority: 0,
		flags: {contact: 1, recharge: 1, protect: 1, mirror: 1},
		self: {
			volatileStatus: 'mustrecharge',
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		contestType: "Tough",
	},
	gigavolthavoc: {
		num: 646,
		accuracy: true,
		basePower: 1,
		category: "Physical",
		isNonstandard: "Past",
		name: "Gigavolt Havoc",
		pp: 1,
		priority: 0,
		flags: {},
		isZ: "electriumz",
		secondary: null,
		target: "normal",
		type: "Electric",
		contestType: "Cool",
	},
	glaciallance: {
		num: 824,
		accuracy: 100,
		basePower: 130,
		category: "Physical",
		name: "Glacial Lance",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "allAdjacentFoes",
		type: "Ice",
	},
	glaciate: {
		num: 549,
		accuracy: 95,
		basePower: 65,
		category: "Special",
		name: "Glaciate",
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
		type: "Ice",
		contestType: "Beautiful",
	},
	glare: {
		num: 137,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Glare",
		pp: 30,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1},
		status: 'par',
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {boost: {spd: 1}},
		contestType: "Tough",
	},
	glitzyglow: {
		num: 736,
		accuracy: 95,
		basePower: 80,
		category: "Special",
		isNonstandard: "LGPE",
		name: "Glitzy Glow",
		pp: 15,
		priority: 0,
		flags: {protect: 1},
		self: {
			sideCondition: 'lightscreen',
		},
		secondary: null,
		target: "normal",
		type: "Psychic",
		contestType: "Clever",
	},
	gmaxbefuddle: {
		num: 1000,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Gigantamax",
		name: "G-Max Befuddle",
		pp: 5,
		priority: 0,
		flags: {},
		isMax: "Butterfree",
		self: {
			onHit(source) {
				for (const pokemon of source.foes()) {
					const result = this.random(3);
					if (result === 0) {
						pokemon.trySetStatus('slp', source);
					} else if (result === 1) {
						pokemon.trySetStatus('par', source);
					} else {
						pokemon.trySetStatus('psn', source);
					}
				}
			},
		},
		target: "adjacentFoe",
		type: "Bug",
		contestType: "Cool",
	},
	gmaxcannonade: {
		num: 1000,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Gigantamax",
		name: "G-Max Cannonade",
		pp: 10,
		priority: 0,
		flags: {},
		isMax: "Blastoise",
		self: {
			onHit(source) {
				for (const side of source.side.foeSidesWithConditions()) {
					side.addSideCondition('gmaxcannonade');
				}
			},
		},
		condition: {
			duration: 4,
			onSideStart(targetSide) {
				this.add('-sidestart', targetSide, 'G-Max Cannonade');
			},
			onResidualOrder: 5,
			onResidualSubOrder: 1,
			onResidual(target) {
				if (!target.hasType('Water')) this.damage(target.baseMaxhp / 6, target);
			},
			onSideResidualOrder: 26,
			onSideResidualSubOrder: 11,
			onSideEnd(targetSide) {
				this.add('-sideend', targetSide, 'G-Max Cannonade');
			},
		},
		secondary: null,
		target: "adjacentFoe",
		type: "Water",
		contestType: "Cool",
	},
	gmaxcentiferno: {
		num: 1000,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Gigantamax",
		name: "G-Max Centiferno",
		pp: 5,
		priority: 0,
		flags: {},
		isMax: "Centiskorch",
		self: {
			onHit(source) {
				for (const pokemon of source.foes()) {
					pokemon.addVolatile('partiallytrapped', source, this.dex.getActiveMove('G-Max Centiferno'));
				}
			},
		},
		secondary: null,
		target: "adjacentFoe",
		type: "Fire",
		contestType: "Cool",
	},
	gmaxchistrike: {
		num: 1000,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Gigantamax",
		name: "G-Max Chi Strike",
		pp: 5,
		priority: 0,
		flags: {},
		isMax: "Machamp",
		self: {
			onHit(source) {
				for (const pokemon of source.alliesAndSelf()) {
					pokemon.addVolatile('gmaxchistrike');
				}
			},
		},
		condition: {
			noCopy: true,
			onStart(target, source, effect) {
				this.effectState.layers = 1;
				if (!['imposter', 'psychup', 'transform'].includes(effect?.id)) {
					this.add('-start', target, 'move: G-Max Chi Strike');
				}
			},
			onRestart(target, source, effect) {
				if (this.effectState.layers >= 3) return false;
				this.effectState.layers++;
				if (!['imposter', 'psychup', 'transform'].includes(effect?.id)) {
					this.add('-start', target, 'move: G-Max Chi Strike');
				}
			},
			onModifyCritRatio(critRatio) {
				return critRatio + this.effectState.layers;
			},
		},
		secondary: null,
		target: "adjacentFoe",
		type: "Fighting",
		contestType: "Cool",
	},
	gmaxcuddle: {
		num: 1000,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Gigantamax",
		name: "G-Max Cuddle",
		pp: 5,
		priority: 0,
		flags: {},
		isMax: "Eevee",
		self: {
			onHit(source) {
				for (const pokemon of source.foes()) {
					pokemon.addVolatile('attract');
				}
			},
		},
		secondary: null,
		target: "adjacentFoe",
		type: "Normal",
		contestType: "Cool",
	},
	gmaxdepletion: {
		num: 1000,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Gigantamax",
		name: "G-Max Depletion",
		pp: 5,
		priority: 0,
		flags: {},
		isMax: "Duraludon",
		self: {
			onHit(source) {
				for (const pokemon of source.foes()) {
					let move: Move | ActiveMove | null = pokemon.lastMove;
					if (!move || move.isZ) continue;
					if (move.isMax && move.baseMove) move = this.dex.moves.get(move.baseMove);

					const ppDeducted = pokemon.deductPP(move.id, 2);
					if (ppDeducted) {
						this.add("-activate", pokemon, 'move: G-Max Depletion', move.name, ppDeducted);
						// Don't return here because returning early doesn't trigger
						// activation text for the second Pokemon in doubles
					}
				}
			},
		},
		secondary: null,
		target: "adjacentFoe",
		type: "Dragon",
		contestType: "Cool",
	},
	gmaxdrumsolo: {
		num: 1000,
		accuracy: true,
		basePower: 160,
		category: "Physical",
		isNonstandard: "Gigantamax",
		name: "G-Max Drum Solo",
		pp: 5,
		priority: 0,
		flags: {},
		isMax: "Rillaboom",
		ignoreAbility: true,
		secondary: null,
		target: "adjacentFoe",
		type: "Grass",
		contestType: "Cool",
	},
	gmaxfinale: {
		num: 1000,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Gigantamax",
		name: "G-Max Finale",
		pp: 5,
		priority: 0,
		flags: {},
		isMax: "Alcremie",
		self: {
			onHit(target, source, move) {
				for (const pokemon of source.alliesAndSelf()) {
					this.heal(pokemon.maxhp / 6, pokemon, source, move);
				}
			},
		},
		secondary: null,
		target: "adjacentFoe",
		type: "Fairy",
		contestType: "Cool",
	},
	gmaxfireball: {
		num: 1000,
		accuracy: true,
		basePower: 160,
		category: "Physical",
		isNonstandard: "Gigantamax",
		name: "G-Max Fireball",
		pp: 5,
		priority: 0,
		flags: {},
		isMax: "Cinderace",
		ignoreAbility: true,
		secondary: null,
		target: "adjacentFoe",
		type: "Fire",
		contestType: "Cool",
	},
	gmaxfoamburst: {
		num: 1000,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Gigantamax",
		name: "G-Max Foam Burst",
		pp: 5,
		priority: 0,
		flags: {},
		isMax: "Kingler",
		self: {
			onHit(source) {
				for (const pokemon of source.foes()) {
					this.boost({spe: -2}, pokemon);
				}
			},
		},
		secondary: null,
		target: "adjacentFoe",
		type: "Water",
		contestType: "Cool",
	},
	gmaxgoldrush: {
		num: 1000,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Gigantamax",
		name: "G-Max Gold Rush",
		pp: 5,
		priority: 0,
		flags: {},
		isMax: "Meowth",
		self: {
			onHit(source) {
				for (const pokemon of source.foes()) {
					pokemon.addVolatile('confusion');
				}
			},
		},
		secondary: null,
		target: "adjacentFoe",
		type: "Normal",
		contestType: "Cool",
	},
	gmaxgravitas: {
		num: 1000,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Gigantamax",
		name: "G-Max Gravitas",
		pp: 5,
		priority: 0,
		flags: {},
		isMax: "Orbeetle",
		self: {
			pseudoWeather: 'gravity',
		},
		target: "adjacentFoe",
		type: "Psychic",
		contestType: "Cool",
	},
	gmaxhydrosnipe: {
		num: 1000,
		accuracy: true,
		basePower: 160,
		category: "Physical",
		isNonstandard: "Gigantamax",
		name: "G-Max Hydrosnipe",
		pp: 5,
		priority: 0,
		flags: {},
		isMax: "Inteleon",
		ignoreAbility: true,
		secondary: null,
		target: "adjacentFoe",
		type: "Water",
		contestType: "Cool",
	},
	gmaxmalodor: {
		num: 1000,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Gigantamax",
		name: "G-Max Malodor",
		pp: 5,
		priority: 0,
		flags: {},
		isMax: "Garbodor",
		self: {
			onHit(source) {
				for (const pokemon of source.foes()) {
					pokemon.trySetStatus('psn', source);
				}
			},
		},
		target: "adjacentFoe",
		type: "Poison",
		contestType: "Cool",
	},
	gmaxmeltdown: {
		num: 1000,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Gigantamax",
		name: "G-Max Meltdown",
		pp: 5,
		priority: 0,
		flags: {},
		isMax: "Melmetal",
		self: {
			onHit(source) {
				for (const pokemon of source.foes()) {
					if (!pokemon.volatiles['dynamax']) pokemon.addVolatile('torment');
				}
			},
		},
		secondary: null,
		target: "adjacentFoe",
		type: "Steel",
		contestType: "Cool",
	},
	gmaxoneblow: {
		num: 1000,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Gigantamax",
		name: "G-Max One Blow",
		pp: 5,
		priority: 0,
		flags: {},
		isMax: "Urshifu",
		secondary: null,
		target: "adjacentFoe",
		type: "Dark",
		contestType: "Cool",
	},
	gmaxrapidflow: {
		num: 1000,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Gigantamax",
		name: "G-Max Rapid Flow",
		pp: 5,
		priority: 0,
		flags: {},
		isMax: "Urshifu-Rapid-Strike",
		secondary: null,
		target: "adjacentFoe",
		type: "Water",
		contestType: "Cool",
	},
	gmaxreplenish: {
		num: 1000,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Gigantamax",
		name: "G-Max Replenish",
		pp: 5,
		priority: 0,
		flags: {},
		isMax: "Snorlax",
		self: {
			onHit(source) {
				if (this.random(2) === 0) return;
				for (const pokemon of source.alliesAndSelf()) {
					if (pokemon.item) continue;

					if (pokemon.lastItem && this.dex.items.get(pokemon.lastItem).isBerry) {
						const item = pokemon.lastItem;
						pokemon.lastItem = '';
						this.add('-item', pokemon, this.dex.items.get(item), '[from] move: G-Max Replenish');
						pokemon.setItem(item);
					}
				}
			},
		},
		secondary: null,
		target: "adjacentFoe",
		type: "Normal",
		contestType: "Cool",
	},
	gmaxresonance: {
		num: 1000,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Gigantamax",
		name: "G-Max Resonance",
		pp: 5,
		priority: 0,
		flags: {},
		isMax: "Lapras",
		self: {
			sideCondition: 'auroraveil',
		},
		secondary: null,
		target: "adjacentFoe",
		type: "Ice",
		contestType: "Cool",
	},
	gmaxsandblast: {
		num: 1000,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Gigantamax",
		name: "G-Max Sandblast",
		pp: 5,
		priority: 0,
		flags: {},
		isMax: "Sandaconda",
		self: {
			onHit(source) {
				for (const pokemon of source.foes()) {
					pokemon.addVolatile('partiallytrapped', source, this.dex.getActiveMove('G-Max Sandblast'));
				}
			},
		},
		secondary: null,
		target: "adjacentFoe",
		type: "Ground",
		contestType: "Cool",
	},
	gmaxsmite: {
		num: 1000,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Gigantamax",
		name: "G-Max Smite",
		pp: 5,
		priority: 0,
		flags: {},
		isMax: "Hatterene",
		self: {
			onHit(source) {
				for (const pokemon of source.foes()) {
					pokemon.addVolatile('confusion', source);
				}
			},
		},
		secondary: null,
		target: "adjacentFoe",
		type: "Fairy",
		contestType: "Cool",
	},
	gmaxsnooze: {
		num: 1000,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Gigantamax",
		name: "G-Max Snooze",
		pp: 5,
		priority: 0,
		flags: {},
		isMax: "Grimmsnarl",
		onHit(target) {
			if (target.status || !target.runStatusImmunity('slp')) return;
			if (this.random(2) === 0) return;
			target.addVolatile('yawn');
		},
		onAfterSubDamage(damage, target) {
			if (target.status || !target.runStatusImmunity('slp')) return;
			if (this.random(2) === 0) return;
			target.addVolatile('yawn');
		},
		secondary: null,
		target: "adjacentFoe",
		type: "Dark",
		contestType: "Cool",
	},
	gmaxsteelsurge: {
		num: 1000,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Gigantamax",
		name: "G-Max Steelsurge",
		pp: 5,
		priority: 0,
		flags: {},
		isMax: "Copperajah",
		self: {
			onHit(source) {
				for (const side of source.side.foeSidesWithConditions()) {
					side.addSideCondition('gmaxsteelsurge');
				}
			},
		},
		condition: {
			onSideStart(side) {
				this.add('-sidestart', side, 'move: G-Max Steelsurge');
			},
			onSwitchIn(pokemon) {
				if (pokemon.hasItem('heavydutyboots')) return;
				// Ice Face and Disguise correctly get typed damage from Stealth Rock
				// because Stealth Rock bypasses Substitute.
				// They don't get typed damage from Steelsurge because Steelsurge doesn't,
				// so we're going to test the damage of a Steel-type Stealth Rock instead.
				const steelHazard = this.dex.getActiveMove('Stealth Rock');
				steelHazard.type = 'Steel';
				const typeMod = this.clampIntRange(pokemon.runEffectiveness(steelHazard), -6, 6);
				this.damage(pokemon.maxhp * Math.pow(2, typeMod) / 8);
			},
		},
		secondary: null,
		target: "adjacentFoe",
		type: "Steel",
		contestType: "Cool",
	},
	gmaxstonesurge: {
		num: 1000,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Gigantamax",
		name: "G-Max Stonesurge",
		pp: 5,
		priority: 0,
		flags: {},
		isMax: "Drednaw",
		self: {
			onHit(source) {
				for (const side of source.side.foeSidesWithConditions()) {
					side.addSideCondition('stealthrock');
				}
			},
		},
		secondary: null,
		target: "adjacentFoe",
		type: "Water",
		contestType: "Cool",
	},
	gmaxstunshock: {
		num: 1000,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Gigantamax",
		name: "G-Max Stun Shock",
		pp: 10,
		priority: 0,
		flags: {},
		isMax: "Toxtricity",
		self: {
			onHit(source) {
				for (const pokemon of source.foes()) {
					const result = this.random(2);
					if (result === 0) {
						pokemon.trySetStatus('par', source);
					} else {
						pokemon.trySetStatus('psn', source);
					}
				}
			},
		},
		secondary: null,
		target: "adjacentFoe",
		type: "Electric",
		contestType: "Cool",
	},
	gmaxsweetness: {
		num: 1000,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Gigantamax",
		name: "G-Max Sweetness",
		pp: 10,
		priority: 0,
		flags: {},
		isMax: "Appletun",
		self: {
			onHit(source) {
				for (const ally of source.side.pokemon) {
					ally.cureStatus();
				}
			},
		},
		secondary: null,
		target: "adjacentFoe",
		type: "Grass",
		contestType: "Cool",
	},
	gmaxtartness: {
		num: 1000,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Gigantamax",
		name: "G-Max Tartness",
		pp: 10,
		priority: 0,
		flags: {},
		isMax: "Flapple",
		self: {
			onHit(source) {
				for (const pokemon of source.foes()) {
					this.boost({evasion: -1}, pokemon);
				}
			},
		},
		secondary: null,
		target: "adjacentFoe",
		type: "Grass",
		contestType: "Cool",
	},
	gmaxterror: {
		num: 1000,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Gigantamax",
		name: "G-Max Terror",
		pp: 10,
		priority: 0,
		flags: {},
		isMax: "Gengar",
		self: {
			onHit(source) {
				for (const pokemon of source.foes()) {
					pokemon.addVolatile('trapped', source, null, 'trapper');
				}
			},
		},
		secondary: null,
		target: "adjacentFoe",
		type: "Ghost",
		contestType: "Cool",
	},
	gmaxvinelash: {
		num: 1000,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Gigantamax",
		name: "G-Max Vine Lash",
		pp: 10,
		priority: 0,
		flags: {},
		isMax: "Venusaur",
		self: {
			onHit(source) {
				for (const side of source.side.foeSidesWithConditions()) {
					side.addSideCondition('gmaxvinelash');
				}
			},
		},
		condition: {
			duration: 4,
			onSideStart(targetSide) {
				this.add('-sidestart', targetSide, 'G-Max Vine Lash');
			},
			onResidualOrder: 5,
			onResidualSubOrder: 1,
			onResidual(target) {
				if (!target.hasType('Grass')) this.damage(target.baseMaxhp / 6, target);
			},
			onSideResidualOrder: 26,
			onSideResidualSubOrder: 11,
			onSideEnd(targetSide) {
				this.add('-sideend', targetSide, 'G-Max Vine Lash');
			},
		},
		secondary: null,
		target: "adjacentFoe",
		type: "Grass",
		contestType: "Cool",
	},
	gmaxvolcalith: {
		num: 1000,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Gigantamax",
		name: "G-Max Volcalith",
		pp: 10,
		priority: 0,
		flags: {},
		isMax: "Coalossal",
		self: {
			onHit(source) {
				for (const side of source.side.foeSidesWithConditions()) {
					side.addSideCondition('gmaxvolcalith');
				}
			},
		},
		condition: {
			duration: 4,
			onSideStart(targetSide) {
				this.add('-sidestart', targetSide, 'G-Max Volcalith');
			},
			onResidualOrder: 5,
			onResidualSubOrder: 1,
			onResidual(target) {
				if (!target.hasType('Rock')) this.damage(target.baseMaxhp / 6, target);
			},
			onSideResidualOrder: 26,
			onSideResidualSubOrder: 11,
			onSideEnd(targetSide) {
				this.add('-sideend', targetSide, 'G-Max Volcalith');
			},
		},
		secondary: null,
		target: "adjacentFoe",
		type: "Rock",
		contestType: "Cool",
	},
	gmaxvoltcrash: {
		num: 1000,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Gigantamax",
		name: "G-Max Volt Crash",
		pp: 10,
		priority: 0,
		flags: {},
		isMax: "Pikachu",
		self: {
			onHit(source) {
				for (const pokemon of source.foes()) {
					pokemon.trySetStatus('par', source);
				}
			},
		},
		secondary: null,
		target: "adjacentFoe",
		type: "Electric",
		contestType: "Cool",
	},
	gmaxwildfire: {
		num: 1000,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Gigantamax",
		name: "G-Max Wildfire",
		pp: 10,
		priority: 0,
		flags: {},
		isMax: "Charizard",
		self: {
			onHit(source) {
				for (const side of source.side.foeSidesWithConditions()) {
					side.addSideCondition('gmaxwildfire');
				}
			},
		},
		condition: {
			duration: 4,
			onSideStart(targetSide) {
				this.add('-sidestart', targetSide, 'G-Max Wildfire');
			},
			onResidualOrder: 5,
			onResidualSubOrder: 1,
			onResidual(target) {
				if (!target.hasType('Fire')) this.damage(target.baseMaxhp / 6, target);
			},
			onSideResidualOrder: 26,
			onSideResidualSubOrder: 11,
			onSideEnd(targetSide) {
				this.add('-sideend', targetSide, 'G-Max Wildfire');
			},
		},
		secondary: null,
		target: "adjacentFoe",
		type: "Fire",
		contestType: "Cool",
	},
	gmaxwindrage: {
		num: 1000,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Gigantamax",
		name: "G-Max Wind Rage",
		pp: 10,
		priority: 0,
		flags: {},
		isMax: "Corviknight",
		self: {
			onHit(source) {
				let success = false;
				const removeTarget = [
					'reflect', 'lightscreen', 'auroraveil', 'safeguard', 'mist', 'spikes', 'toxicspikes', 'stealthrock', 'stickyweb',
				];
				const removeAll = ['spikes', 'toxicspikes', 'stealthrock', 'stickyweb', 'gmaxsteelsurge'];
				for (const targetCondition of removeTarget) {
					if (source.side.foe.removeSideCondition(targetCondition)) {
						if (!removeAll.includes(targetCondition)) continue;
						this.add('-sideend', source.side.foe, this.dex.conditions.get(targetCondition).name, '[from] move: G-Max Wind Rage', '[of] ' + source);
						success = true;
					}
				}
				for (const sideCondition of removeAll) {
					if (source.side.removeSideCondition(sideCondition)) {
						this.add('-sideend', source.side, this.dex.conditions.get(sideCondition).name, '[from] move: G-Max Wind Rage', '[of] ' + source);
						success = true;
					}
				}
				this.field.clearTerrain();
				return success;
			},
		},
		secondary: null,
		target: "adjacentFoe",
		type: "Flying",
		contestType: "Cool",
	},
	grassknot: {
		num: 447,
		accuracy: 100,
		basePower: 0,
		basePowerCallback(pokemon, target) {
			const targetWeight = target.getWeight();
			if (targetWeight >= 2000) {
				this.debug('120 bp');
				return 120;
			}
			if (targetWeight >= 1000) {
				this.debug('100 bp');
				return 100;
			}
			if (targetWeight >= 500) {
				this.debug('80 bp');
				return 80;
			}
			if (targetWeight >= 250) {
				this.debug('60 bp');
				return 60;
			}
			if (targetWeight >= 100) {
				this.debug('40 bp');
				return 40;
			}
			this.debug('20 bp');
			return 20;
		},
		category: "Special",
		name: "Grass Knot",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, nonsky: 1},
		onTryHit(target, source, move) {
			if (target.volatiles['dynamax']) {
				this.add('-fail', source, 'move: Grass Knot', '[from] Dynamax');
				this.attrLastMove('[still]');
				return null;
			}
		},
		secondary: null,
		target: "normal",
		type: "Grass",
		zMove: {basePower: 160},
		maxMove: {basePower: 130},
		contestType: "Cute",
	},
	grasspledge: {
		num: 520,
		accuracy: 100,
		basePower: 80,
		basePowerCallback(target, source, move) {
			if (['waterpledge', 'firepledge'].includes(move.sourceEffect)) {
				this.add('-combine');
				return 150;
			}
			return 80;
		},
		category: "Special",
		name: "Grass Pledge",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, nonsky: 1},
		onPrepareHit(target, source, move) {
			for (const action of this.queue.list as MoveAction[]) {
				if (
					!action.move || !action.pokemon?.isActive ||
					action.pokemon.fainted || action.maxMove || action.zmove
				) {
					continue;
				}
				if (action.pokemon.isAlly(source) && ['waterpledge', 'firepledge'].includes(action.move.id)) {
					this.queue.prioritizeAction(action, move);
					this.add('-waiting', source, action.pokemon);
					return null;
				}
			}
		},
		onModifyMove(move) {
			if (move.sourceEffect === 'waterpledge') {
				move.type = 'Grass';
				move.forceSTAB = true;
				move.sideCondition = 'grasspledge';
			}
			if (move.sourceEffect === 'firepledge') {
				move.type = 'Fire';
				move.forceSTAB = true;
				move.sideCondition = 'firepledge';
			}
		},
		condition: {
			duration: 4,
			onSideStart(targetSide) {
				this.add('-sidestart', targetSide, 'Grass Pledge');
			},
			onSideResidualOrder: 26,
			onSideResidualSubOrder: 9,
			onSideEnd(targetSide) {
				this.add('-sideend', targetSide, 'Grass Pledge');
			},
			onModifySpe(spe, pokemon) {
				return this.chainModify(0.25);
			},
		},
		secondary: null,
		target: "normal",
		type: "Grass",
		contestType: "Beautiful",
	},
	grasswhistle: {
		num: 320,
		accuracy: 55,
		basePower: 0,
		category: "Status",
		isNonstandard: "Past",
		name: "Grass Whistle",
		pp: 15,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1, sound: 1, authentic: 1},
		status: 'slp',
		secondary: null,
		target: "normal",
		type: "Grass",
		zMove: {boost: {spe: 1}},
		contestType: "Clever",
	},
	grassyglide: {
		num: 803,
		accuracy: 100,
		basePower: 70,
		category: "Physical",
		name: "Grassy Glide",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1, mystery: 1},
		onModifyPriority(priority, source, target, move) {
			if (this.field.isTerrain('grassyterrain') && source.isGrounded()) {
				return priority + 1;
			}
		},
		secondary: null,
		target: "normal",
		type: "Grass",
		contestType: "Cool",
	},
	grassyterrain: {
		num: 580,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Grassy Terrain",
		pp: 10,
		priority: 0,
		flags: {nonsky: 1},
		terrain: 'grassyterrain',
		condition: {
			duration: 5,
			durationCallback(source, effect) {
				if (source?.hasItem('terrainextender')) {
					return 8;
				}
				return 5;
			},
			onBasePowerPriority: 6,
			onBasePower(basePower, attacker, defender, move) {
				const weakenedMoves = ['earthquake', 'bulldoze', 'magnitude'];
				if (weakenedMoves.includes(move.id) && defender.isGrounded() && !defender.isSemiInvulnerable()) {
					this.debug('move weakened by grassy terrain');
					return this.chainModify(0.5);
				}
				if (move.type === 'Grass' && attacker.isGrounded()) {
					this.debug('grassy terrain boost');
					return this.chainModify([5325, 4096]);
				}
			},
			onFieldStart(field, source, effect) {
				if (effect?.effectType === 'Ability') {
					this.add('-fieldstart', 'move: Grassy Terrain', '[from] ability: ' + effect, '[of] ' + source);
				} else {
					this.add('-fieldstart', 'move: Grassy Terrain');
				}
			},
			onResidualOrder: 5,
			onResidualSubOrder: 2,
			onResidual(pokemon) {
				if (pokemon.isGrounded() && !pokemon.isSemiInvulnerable()) {
					this.heal(pokemon.baseMaxhp / 16, pokemon, pokemon);
				} else {
					this.debug(`Pokemon semi-invuln or not grounded; Grassy Terrain skipped`);
				}
			},
			onFieldResidualOrder: 27,
			onFieldResidualSubOrder: 7,
			onFieldEnd() {
				this.add('-fieldend', 'move: Grassy Terrain');
			},
		},
		secondary: null,
		target: "all",
		type: "Grass",
		zMove: {boost: {def: 1}},
		contestType: "Beautiful",
	},
	gravapple: {
		num: 788,
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		name: "Grav Apple",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower) {
			if (this.field.getPseudoWeather('gravity')) {
				return this.chainModify(1.5);
			}
		},
		secondary: {
			chance: 100,
			boosts: {
				def: -1,
			},
		},
		target: "normal",
		type: "Grass",
	},
	gravity: {
		num: 356,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Gravity",
		pp: 5,
		priority: 0,
		flags: {nonsky: 1},
		pseudoWeather: 'gravity',
		condition: {
			duration: 5,
			durationCallback(source, effect) {
				if (source?.hasAbility('persistent')) {
					this.add('-activate', source, 'ability: Persistent', effect);
					return 7;
				}
				return 5;
			},
			onFieldStart() {
				this.add('-fieldstart', 'move: Gravity');
				for (const pokemon of this.getAllActive()) {
					let applies = false;
					if (pokemon.removeVolatile('bounce') || pokemon.removeVolatile('fly')) {
						applies = true;
						this.queue.cancelMove(pokemon);
						pokemon.removeVolatile('twoturnmove');
					}
					if (pokemon.volatiles['skydrop']) {
						applies = true;
						this.queue.cancelMove(pokemon);

						if (pokemon.volatiles['skydrop'].source) {
							this.add('-end', pokemon.volatiles['twoturnmove'].source, 'Sky Drop', '[interrupt]');
						}
						pokemon.removeVolatile('skydrop');
						pokemon.removeVolatile('twoturnmove');
					}
					if (pokemon.volatiles['magnetrise']) {
						applies = true;
						delete pokemon.volatiles['magnetrise'];
					}
					if (pokemon.volatiles['telekinesis']) {
						applies = true;
						delete pokemon.volatiles['telekinesis'];
					}
					if (applies) this.add('-activate', pokemon, 'move: Gravity');
				}
			},
			onModifyAccuracy(accuracy) {
				if (typeof accuracy !== 'number') return;
				return this.chainModify([6840, 4096]);
			},
			onDisableMove(pokemon) {
				for (const moveSlot of pokemon.moveSlots) {
					if (this.dex.moves.get(moveSlot.id).flags['gravity']) {
						pokemon.disableMove(moveSlot.id);
					}
				}
			},
			// groundedness implemented in battle.engine.js:BattlePokemon#isGrounded
			onBeforeMovePriority: 6,
			onBeforeMove(pokemon, target, move) {
				if (move.flags['gravity'] && !move.isZ) {
					this.add('cant', pokemon, 'move: Gravity', move);
					return false;
				}
			},
			onModifyMove(move, pokemon, target) {
				if (move.flags['gravity'] && !move.isZ) {
					this.add('cant', pokemon, 'move: Gravity', move);
					return false;
				}
			},
			onFieldResidualOrder: 27,
			onFieldResidualSubOrder: 2,
			onFieldEnd() {
				this.add('-fieldend', 'move: Gravity');
			},
		},
		secondary: null,
		target: "all",
		type: "Psychic",
		zMove: {boost: {spa: 1}},
		contestType: "Clever",
	},
	growl: {
		num: 45,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Growl",
		pp: 40,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1, sound: 1, authentic: 1},
		boosts: {
			atk: -1,
		},
		secondary: null,
		target: "allAdjacentFoes",
		type: "Normal",
		zMove: {boost: {def: 1}},
		contestType: "Cute",
	},
	growth: {
		num: 74,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Growth",
		pp: 20,
		priority: 0,
		flags: {snatch: 1},
		onModifyMove(move, pokemon) {
			if (['sunnyday', 'desolateland'].includes(pokemon.effectiveWeather())) move.boosts = {atk: 2, spa: 2};
		},
		boosts: {
			atk: 1,
			spa: 1,
		},
		secondary: null,
		target: "self",
		type: "Normal",
		zMove: {boost: {spa: 1}},
		contestType: "Beautiful",
	},
	grudge: {
		num: 288,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Grudge",
		pp: 5,
		priority: 0,
		flags: {authentic: 1},
		volatileStatus: 'grudge',
		condition: {
			onStart(pokemon) {
				this.add('-singlemove', pokemon, 'Grudge');
			},
			onFaint(target, source, effect) {
				if (!source || source.fainted || !effect) return;
				if (effect.effectType === 'Move' && !effect.isFutureMove && source.lastMove) {
					let move: Move = source.lastMove;
					if (move.isMax && move.baseMove) move = this.dex.moves.get(move.baseMove);

					for (const moveSlot of source.moveSlots) {
						if (moveSlot.id === move.id) {
							moveSlot.pp = 0;
							this.add('-activate', source, 'move: Grudge', move.name);
						}
					}
				}
			},
			onBeforeMovePriority: 100,
			onBeforeMove(pokemon) {
				this.debug('removing Grudge before attack');
				pokemon.removeVolatile('grudge');
			},
		},
		secondary: null,
		target: "self",
		type: "Ghost",
		zMove: {effect: 'redirect'},
		contestType: "Tough",
	},
	guardianofalola: {
		num: 698,
		accuracy: true,
		basePower: 0,
		damageCallback(pokemon, target) {
			const hp75 = Math.floor(target.getUndynamaxedHP() * 3 / 4);
			if (
				target.volatiles['protect'] || target.volatiles['banefulbunker'] || target.volatiles['kingsshield'] ||
				target.volatiles['spikyshield'] || target.side.getSideCondition('matblock')
			) {
				this.add('-zbroken', target);
				return this.clampIntRange(Math.ceil(hp75 / 4 - 0.5), 1);
			}
			return this.clampIntRange(hp75, 1);
		},
		category: "Special",
		isNonstandard: "Past",
		name: "Guardian of Alola",
		pp: 1,
		priority: 0,
		flags: {},
		isZ: "tapuniumz",
		secondary: null,
		target: "normal",
		type: "Fairy",
		contestType: "Tough",
	},
	guardsplit: {
		num: 470,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Guard Split",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mystery: 1},
		onHit(target, source) {
			const newdef = Math.floor((target.storedStats.def + source.storedStats.def) / 2);
			target.storedStats.def = newdef;
			source.storedStats.def = newdef;
			const newspd = Math.floor((target.storedStats.spd + source.storedStats.spd) / 2);
			target.storedStats.spd = newspd;
			source.storedStats.spd = newspd;
			this.add('-activate', source, 'move: Guard Split', '[of] ' + target);
		},
		secondary: null,
		target: "normal",
		type: "Psychic",
		zMove: {boost: {spe: 1}},
		contestType: "Clever",
	},
	guardswap: {
		num: 385,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Guard Swap",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, authentic: 1, mystery: 1},
		onHit(target, source) {
			const targetBoosts: SparseBoostsTable = {};
			const sourceBoosts: SparseBoostsTable = {};

			const defSpd: BoostID[] = ['def', 'spd'];
			for (const stat of defSpd) {
				targetBoosts[stat] = target.boosts[stat];
				sourceBoosts[stat] = source.boosts[stat];
			}

			source.setBoost(targetBoosts);
			target.setBoost(sourceBoosts);

			this.add('-swapboost', source, target, 'def, spd', '[from] move: Guard Swap');
		},
		secondary: null,
		target: "normal",
		type: "Psychic",
		zMove: {boost: {spe: 1}},
		contestType: "Clever",
	},
	guillotine: {
		num: 12,
		accuracy: 30,
		basePower: 0,
		category: "Physical",
		name: "Guillotine",
		pp: 5,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		ohko: true,
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {basePower: 180},
		maxMove: {basePower: 130},
		contestType: "Cool",
	},
	gunkshot: {
		num: 441,
		accuracy: 80,
		basePower: 120,
		category: "Physical",
		name: "Gunk Shot",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 30,
			status: 'psn',
		},
		target: "normal",
		type: "Poison",
		contestType: "Tough",
	},
	gust: {
		num: 16,
		accuracy: 100,
		basePower: 40,
		category: "Special",
		name: "Gust",
		pp: 35,
		priority: 0,
		flags: {protect: 1, mirror: 1, distance: 1},
		secondary: null,
		target: "any",
		type: "Flying",
		contestType: "Clever",
	},
	gyroball: {
		num: 360,
		accuracy: 100,
		basePower: 0,
		basePowerCallback(pokemon, target) {
			let power = Math.floor(25 * target.getStat('spe') / pokemon.getStat('spe')) + 1;
			if (!isFinite(power)) power = 1;
			if (power > 150) power = 150;
			this.debug(`${power} bp`);
			return power;
		},
		category: "Physical",
		name: "Gyro Ball",
		pp: 5,
		priority: 0,
		flags: {bullet: 1, contact: 1, protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Steel",
		zMove: {basePower: 160},
		maxMove: {basePower: 130},
		contestType: "Cool",
	},
	hail: {
		num: 258,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Hail",
		pp: 10,
		priority: 0,
		flags: {},
		weather: 'hail',
		secondary: null,
		target: "all",
		type: "Ice",
		zMove: {boost: {spe: 1}},
		contestType: "Beautiful",
	},
	hammerarm: {
		num: 359,
		accuracy: 90,
		basePower: 100,
		category: "Physical",
		name: "Hammer Arm",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, punch: 1},
		self: {
			boosts: {
				spe: -1,
			},
		},
		secondary: null,
		target: "normal",
		type: "Fighting",
		contestType: "Tough",
	},
	happyhour: {
		num: 603,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Happy Hour",
		pp: 30,
		priority: 0,
		flags: {},
		onTryHit(target, source) {
			this.add('-activate', target, 'move: Happy Hour');
		},
		secondary: null,
		target: "allySide",
		type: "Normal",
		zMove: {boost: {atk: 1, def: 1, spa: 1, spd: 1, spe: 1}},
		contestType: "Cute",
	},
	harden: {
		num: 106,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Harden",
		pp: 30,
		priority: 0,
		flags: {snatch: 1},
		boosts: {
			def: 1,
		},
		secondary: null,
		target: "self",
		type: "Normal",
		zMove: {boost: {def: 1}},
		contestType: "Tough",
	},
	haze: {
		num: 114,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Haze",
		pp: 30,
		priority: 0,
		flags: {authentic: 1},
		onHitField() {
			this.add('-clearallboost');
			for (const pokemon of this.getAllActive()) {
				pokemon.clearBoosts();
			}
		},
		secondary: null,
		target: "all",
		type: "Ice",
		zMove: {effect: 'heal'},
		contestType: "Beautiful",
	},
	headbutt: {
		num: 29,
		accuracy: 100,
		basePower: 70,
		category: "Physical",
		name: "Headbutt",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 30,
			volatileStatus: 'flinch',
		},
		target: "normal",
		type: "Normal",
		contestType: "Tough",
	},
	headcharge: {
		num: 543,
		accuracy: 100,
		basePower: 120,
		category: "Physical",
		name: "Head Charge",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		recoil: [1, 4],
		secondary: null,
		target: "normal",
		type: "Normal",
		contestType: "Tough",
	},
	headsmash: {
		num: 457,
		accuracy: 80,
		basePower: 150,
		category: "Physical",
		name: "Head Smash",
		pp: 5,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		recoil: [1, 2],
		secondary: null,
		target: "normal",
		type: "Rock",
		contestType: "Tough",
	},
	healbell: {
		num: 215,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Heal Bell",
		pp: 5,
		priority: 0,
		flags: {snatch: 1, sound: 1, distance: 1, authentic: 1},
		onHit(pokemon, source) {
			this.add('-activate', source, 'move: Heal Bell');
			const side = pokemon.side;
			let success = false;
			for (const ally of side.pokemon) {
				if (ally !== source && ally.hasAbility('soundproof')) continue;
				if (ally.cureStatus()) success = true;
			}
			return success;
		},
		target: "allyTeam",
		type: "Normal",
		zMove: {effect: 'heal'},
		contestType: "Beautiful",
	},
	healblock: {
		num: 377,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		isNonstandard: "Past",
		name: "Heal Block",
		pp: 15,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1},
		volatileStatus: 'healblock',
		condition: {
			duration: 5,
			durationCallback(target, source, effect) {
				if (source?.hasAbility('persistent')) {
					this.add('-activate', source, 'ability: Persistent', effect);
					return 7;
				}
				return 5;
			},
			onStart(pokemon, source) {
				this.add('-start', pokemon, 'move: Heal Block');
				source.moveThisTurnResult = true;
			},
			onDisableMove(pokemon) {
				for (const moveSlot of pokemon.moveSlots) {
					if (this.dex.moves.get(moveSlot.id).flags['heal']) {
						pokemon.disableMove(moveSlot.id);
					}
				}
			},
			onBeforeMovePriority: 6,
			onBeforeMove(pokemon, target, move) {
				if (move.flags['heal'] && !move.isZ && !move.isMax) {
					this.add('cant', pokemon, 'move: Heal Block', move);
					return false;
				}
			},
			onModifyMove(move, pokemon, target) {
				if (move.flags['heal'] && !move.isZ && !move.isMax) {
					this.add('cant', pokemon, 'move: Heal Block', move);
					return false;
				}
			},
			onResidualOrder: 20,
			onEnd(pokemon) {
				this.add('-end', pokemon, 'move: Heal Block');
			},
			onTryHeal(damage, target, source, effect) {
				if ((effect?.id === 'zpower') || this.effectState.isZ) return damage;
				return false;
			},
			onRestart(target, source) {
				this.add('-fail', target, 'move: Heal Block'); // Succeeds to supress downstream messages
				if (!source.moveThisTurnResult) {
					source.moveThisTurnResult = false;
				}
			},
		},
		secondary: null,
		target: "allAdjacentFoes",
		type: "Psychic",
		zMove: {boost: {spa: 2}},
		contestType: "Clever",
	},
	healingwish: {
		num: 361,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Healing Wish",
		pp: 10,
		priority: 0,
		flags: {snatch: 1, heal: 1},
		onTryHit(pokemon, target, move) {
			if (!this.canSwitch(pokemon.side)) {
				delete move.selfdestruct;
				return false;
			}
		},
		selfdestruct: "ifHit",
		slotCondition: 'healingwish',
		condition: {
			onSwap(target) {
				if (!target.fainted && (target.hp < target.maxhp || target.status)) {
					target.heal(target.maxhp);
					target.setStatus('');
					this.add('-heal', target, target.getHealth, '[from] move: Healing Wish');
					target.side.removeSlotCondition(target, 'healingwish');
				}
			},
		},
		secondary: null,
		target: "self",
		type: "Psychic",
		contestType: "Beautiful",
	},
	healorder: {
		num: 456,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Past",
		name: "Heal Order",
		pp: 10,
		priority: 0,
		flags: {snatch: 1, heal: 1},
		heal: [1, 2],
		secondary: null,
		target: "self",
		type: "Bug",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Clever",
	},
	healpulse: {
		num: 505,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Heal Pulse",
		pp: 10,
		priority: 0,
		flags: {protect: 1, pulse: 1, reflectable: 1, distance: 1, heal: 1, mystery: 1},
		onHit(target, source) {
			let success = false;
			if (source.hasAbility('megalauncher')) {
				success = !!this.heal(this.modify(target.baseMaxhp, 0.75));
			} else {
				success = !!this.heal(Math.ceil(target.baseMaxhp * 0.5));
			}
			if (success && !target.isAlly(source)) {
				target.staleness = 'external';
			}
			return success;
		},
		secondary: null,
		target: "any",
		type: "Psychic",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Beautiful",
	},
	heartstamp: {
		num: 531,
		accuracy: 100,
		basePower: 60,
		category: "Physical",
		isNonstandard: "Past",
		name: "Heart Stamp",
		pp: 25,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 30,
			volatileStatus: 'flinch',
		},
		target: "normal",
		type: "Psychic",
		contestType: "Cute",
	},
	heartswap: {
		num: 391,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Past",
		name: "Heart Swap",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, authentic: 1, mystery: 1},
		onHit(target, source) {
			const targetBoosts: SparseBoostsTable = {};
			const sourceBoosts: SparseBoostsTable = {};

			let i: BoostID;
			for (i in target.boosts) {
				targetBoosts[i] = target.boosts[i];
				sourceBoosts[i] = source.boosts[i];
			}

			target.setBoost(sourceBoosts);
			source.setBoost(targetBoosts);

			this.add('-swapboost', source, target, '[from] move: Heart Swap');
		},
		secondary: null,
		target: "normal",
		type: "Psychic",
		zMove: {effect: 'crit2'},
		contestType: "Clever",
	},
	heatcrash: {
		num: 535,
		accuracy: 100,
		basePower: 0,
		basePowerCallback(pokemon, target) {
			const targetWeight = target.getWeight();
			const pokemonWeight = pokemon.getWeight();
			if (pokemonWeight >= targetWeight * 5) {
				return 120;
			}
			if (pokemonWeight >= targetWeight * 4) {
				return 100;
			}
			if (pokemonWeight >= targetWeight * 3) {
				return 80;
			}
			if (pokemonWeight >= targetWeight * 2) {
				return 60;
			}
			return 40;
		},
		category: "Physical",
		name: "Heat Crash",
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
		type: "Fire",
		zMove: {basePower: 160},
		maxMove: {basePower: 130},
		contestType: "Tough",
	},
	heatwave: {
		num: 257,
		accuracy: 90,
		basePower: 95,
		category: "Special",
		name: "Heat Wave",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 10,
			status: 'brn',
		},
		target: "allAdjacentFoes",
		type: "Fire",
		contestType: "Beautiful",
	},
	heavyslam: {
		num: 484,
		accuracy: 100,
		basePower: 0,
		basePowerCallback(pokemon, target) {
			const targetWeight = target.getWeight();
			const pokemonWeight = pokemon.getWeight();
			if (pokemonWeight >= targetWeight * 5) {
				return 120;
			}
			if (pokemonWeight >= targetWeight * 4) {
				return 100;
			}
			if (pokemonWeight >= targetWeight * 3) {
				return 80;
			}
			if (pokemonWeight >= targetWeight * 2) {
				return 60;
			}
			return 40;
		},
		category: "Physical",
		name: "Heavy Slam",
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
		type: "Steel",
		zMove: {basePower: 160},
		maxMove: {basePower: 130},
		contestType: "Tough",
	},
	helpinghand: {
		num: 270,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Helping Hand",
		pp: 20,
		priority: 5,
		flags: {authentic: 1},
		volatileStatus: 'helpinghand',
		onTryHit(target) {
			if (!target.newlySwitched && !this.queue.willMove(target)) return false;
		},
		condition: {
			duration: 1,
			onStart(target, source) {
				this.effectState.multiplier = 1.5;
				this.add('-singleturn', target, 'Helping Hand', '[of] ' + source);
			},
			onRestart(target, source) {
				this.effectState.multiplier *= 1.5;
				this.add('-singleturn', target, 'Helping Hand', '[of] ' + source);
			},
			onBasePowerPriority: 10,
			onBasePower(basePower) {
				this.debug('Boosting from Helping Hand: ' + this.effectState.multiplier);
				return this.chainModify(this.effectState.multiplier);
			},
		},
		secondary: null,
		target: "adjacentAlly",
		type: "Normal",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Clever",
	},
	hex: {
		num: 506,
		accuracy: 100,
		basePower: 65,
		basePowerCallback(pokemon, target, move) {
			if (target.status || target.hasAbility('comatose')) return move.basePower * 2;
			return move.basePower;
		},
		category: "Special",
		name: "Hex",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Ghost",
		zMove: {basePower: 160},
		contestType: "Clever",
	},
	hiddenpower: {
		num: 237,
		accuracy: 100,
		basePower: 60,
		category: "Special",
		isNonstandard: "Past",
		name: "Hidden Power",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onModifyType(move, pokemon) {
			move.type = pokemon.hpType || 'Dark';
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		contestType: "Clever",
	},
	hiddenpowerbug: {
		num: 237,
		accuracy: 100,
		basePower: 60,
		category: "Special",
		realMove: "Hidden Power",
		isNonstandard: "Past",
		name: "Hidden Power Bug",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Bug",
		contestType: "Clever",
	},
	hiddenpowerdark: {
		num: 237,
		accuracy: 100,
		basePower: 60,
		category: "Special",
		realMove: "Hidden Power",
		isNonstandard: "Past",
		name: "Hidden Power Dark",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Dark",
		contestType: "Clever",
	},
	hiddenpowerdragon: {
		num: 237,
		accuracy: 100,
		basePower: 60,
		category: "Special",
		realMove: "Hidden Power",
		isNonstandard: "Past",
		name: "Hidden Power Dragon",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Dragon",
		contestType: "Clever",
	},
	hiddenpowerelectric: {
		num: 237,
		accuracy: 100,
		basePower: 60,
		category: "Special",
		realMove: "Hidden Power",
		isNonstandard: "Past",
		name: "Hidden Power Electric",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Electric",
		contestType: "Clever",
	},
	hiddenpowerfighting: {
		num: 237,
		accuracy: 100,
		basePower: 60,
		category: "Special",
		realMove: "Hidden Power",
		isNonstandard: "Past",
		name: "Hidden Power Fighting",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Fighting",
		contestType: "Clever",
	},
	hiddenpowerfire: {
		num: 237,
		accuracy: 100,
		basePower: 60,
		category: "Special",
		realMove: "Hidden Power",
		isNonstandard: "Past",
		name: "Hidden Power Fire",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Fire",
		contestType: "Clever",
	},
	hiddenpowerflying: {
		num: 237,
		accuracy: 100,
		basePower: 60,
		category: "Special",
		realMove: "Hidden Power",
		isNonstandard: "Past",
		name: "Hidden Power Flying",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Flying",
		contestType: "Clever",
	},
	hiddenpowerghost: {
		num: 237,
		accuracy: 100,
		basePower: 60,
		category: "Special",
		realMove: "Hidden Power",
		isNonstandard: "Past",
		name: "Hidden Power Ghost",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Ghost",
		contestType: "Clever",
	},
	hiddenpowergrass: {
		num: 237,
		accuracy: 100,
		basePower: 60,
		category: "Special",
		realMove: "Hidden Power",
		isNonstandard: "Past",
		name: "Hidden Power Grass",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Grass",
		contestType: "Clever",
	},
	hiddenpowerground: {
		num: 237,
		accuracy: 100,
		basePower: 60,
		category: "Special",
		realMove: "Hidden Power",
		isNonstandard: "Past",
		name: "Hidden Power Ground",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Ground",
		contestType: "Clever",
	},
	hiddenpowerice: {
		num: 237,
		accuracy: 100,
		basePower: 60,
		category: "Special",
		realMove: "Hidden Power",
		isNonstandard: "Past",
		name: "Hidden Power Ice",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Ice",
		contestType: "Clever",
	},
	hiddenpowerpoison: {
		num: 237,
		accuracy: 100,
		basePower: 60,
		category: "Special",
		realMove: "Hidden Power",
		isNonstandard: "Past",
		name: "Hidden Power Poison",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Poison",
		contestType: "Clever",
	},
	hiddenpowerpsychic: {
		num: 237,
		accuracy: 100,
		basePower: 60,
		category: "Special",
		realMove: "Hidden Power",
		isNonstandard: "Past",
		name: "Hidden Power Psychic",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Psychic",
		contestType: "Clever",
	},
	hiddenpowerrock: {
		num: 237,
		accuracy: 100,
		basePower: 60,
		category: "Special",
		realMove: "Hidden Power",
		isNonstandard: "Past",
		name: "Hidden Power Rock",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Rock",
		contestType: "Clever",
	},
	hiddenpowersteel: {
		num: 237,
		accuracy: 100,
		basePower: 60,
		category: "Special",
		realMove: "Hidden Power",
		isNonstandard: "Past",
		name: "Hidden Power Steel",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Steel",
		contestType: "Clever",
	},
	hiddenpowerwater: {
		num: 237,
		accuracy: 100,
		basePower: 60,
		category: "Special",
		realMove: "Hidden Power",
		isNonstandard: "Past",
		name: "Hidden Power Water",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Water",
		contestType: "Clever",
	},
	highhorsepower: {
		num: 667,
		accuracy: 95,
		basePower: 95,
		category: "Physical",
		name: "High Horsepower",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Ground",
		contestType: "Tough",
	},
	highjumpkick: {
		num: 136,
		accuracy: 90,
		basePower: 130,
		category: "Physical",
		name: "High Jump Kick",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, gravity: 1},
		hasCrashDamage: true,
		onMoveFail(target, source, move) {
			this.damage(source.baseMaxhp / 2, source, source, this.dex.conditions.get('High Jump Kick'));
		},
		secondary: null,
		target: "normal",
		type: "Fighting",
		contestType: "Cool",
	},
	holdback: {
		num: 610,
		accuracy: 100,
		basePower: 40,
		category: "Physical",
		name: "Hold Back",
		pp: 40,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onDamagePriority: -20,
		onDamage(damage, target, source, effect) {
			if (damage >= target.hp) return target.hp - 1;
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		contestType: "Cool",
	},
	holdhands: {
		num: 607,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Hold Hands",
		pp: 40,
		priority: 0,
		flags: {authentic: 1},
		secondary: null,
		target: "adjacentAlly",
		type: "Normal",
		zMove: {boost: {atk: 1, def: 1, spa: 1, spd: 1, spe: 1}},
		contestType: "Cute",
	},
	honeclaws: {
		num: 468,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Hone Claws",
		pp: 15,
		priority: 0,
		flags: {snatch: 1},
		boosts: {
			atk: 1,
			accuracy: 1,
		},
		secondary: null,
		target: "self",
		type: "Dark",
		zMove: {boost: {atk: 1}},
		contestType: "Cute",
	},
	hornattack: {
		num: 30,
		accuracy: 100,
		basePower: 65,
		category: "Physical",
		name: "Horn Attack",
		pp: 25,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Normal",
		contestType: "Cool",
	},
	horndrill: {
		num: 32,
		accuracy: 30,
		basePower: 0,
		category: "Physical",
		name: "Horn Drill",
		pp: 5,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		ohko: true,
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {basePower: 180},
		maxMove: {basePower: 130},
		contestType: "Cool",
	},
	hornleech: {
		num: 532,
		accuracy: 100,
		basePower: 75,
		category: "Physical",
		name: "Horn Leech",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, heal: 1},
		drain: [1, 2],
		secondary: null,
		target: "normal",
		type: "Grass",
		contestType: "Tough",
	},
	howl: {
		num: 336,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Howl",
		pp: 40,
		priority: 0,
		flags: {snatch: 1, sound: 1},
		boosts: {
			atk: 1,
		},
		secondary: null,
		target: "allies",
		type: "Normal",
		zMove: {boost: {atk: 1}},
		contestType: "Cool",
	},
	hurricane: {
		num: 542,
		accuracy: 70,
		basePower: 110,
		category: "Special",
		name: "Hurricane",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, distance: 1},
		onModifyMove(move, pokemon, target) {
			switch (target?.effectiveWeather()) {
			case 'raindance':
			case 'primordialsea':
				move.accuracy = true;
				break;
			case 'sunnyday':
			case 'desolateland':
				move.accuracy = 50;
				break;
			}
		},
		secondary: {
			chance: 30,
			volatileStatus: 'confusion',
		},
		target: "any",
		type: "Flying",
		contestType: "Tough",
	},
	hydrocannon: {
		num: 308,
		accuracy: 90,
		basePower: 150,
		category: "Special",
		name: "Hydro Cannon",
		pp: 5,
		priority: 0,
		flags: {recharge: 1, protect: 1, mirror: 1},
		self: {
			volatileStatus: 'mustrecharge',
		},
		secondary: null,
		target: "normal",
		type: "Water",
		contestType: "Beautiful",
	},
	hydropump: {
		num: 56,
		accuracy: 80,
		basePower: 110,
		category: "Special",
		name: "Hydro Pump",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Water",
		contestType: "Beautiful",
	},
	hydrovortex: {
		num: 642,
		accuracy: true,
		basePower: 1,
		category: "Physical",
		isNonstandard: "Past",
		name: "Hydro Vortex",
		pp: 1,
		priority: 0,
		flags: {},
		isZ: "wateriumz",
		secondary: null,
		target: "normal",
		type: "Water",
		contestType: "Cool",
	},
	hyperbeam: {
		num: 63,
		accuracy: 90,
		basePower: 150,
		category: "Special",
		name: "Hyper Beam",
		pp: 5,
		priority: 0,
		flags: {recharge: 1, protect: 1, mirror: 1},
		self: {
			volatileStatus: 'mustrecharge',
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		contestType: "Cool",
	},
	hyperfang: {
		num: 158,
		accuracy: 90,
		basePower: 80,
		category: "Physical",
		isNonstandard: "Past",
		name: "Hyper Fang",
		pp: 15,
		priority: 0,
		flags: {bite: 1, contact: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 10,
			volatileStatus: 'flinch',
		},
		target: "normal",
		type: "Normal",
		contestType: "Cool",
	},
	hyperspacefury: {
		num: 621,
		accuracy: true,
		basePower: 100,
		category: "Physical",
		isNonstandard: "Past",
		name: "Hyperspace Fury",
		pp: 5,
		priority: 0,
		flags: {mirror: 1, authentic: 1},
		breaksProtect: true,
		onTry(source) {
			if (source.species.name === 'Hoopa-Unbound') {
				return;
			}
			this.hint("Only a Pokemon whose form is Hoopa Unbound can use this move.");
			if (source.species.name === 'Hoopa') {
				this.attrLastMove('[still]');
				this.add('-fail', source, 'move: Hyperspace Fury', '[forme]');
				return null;
			}
			this.attrLastMove('[still]');
			this.add('-fail', source, 'move: Hyperspace Fury');
			return null;
		},
		self: {
			boosts: {
				def: -1,
			},
		},
		secondary: null,
		target: "normal",
		type: "Dark",
		contestType: "Tough",
	},
	hyperspacehole: {
		num: 593,
		accuracy: true,
		basePower: 80,
		category: "Special",
		isNonstandard: "Past",
		name: "Hyperspace Hole",
		pp: 5,
		priority: 0,
		flags: {mirror: 1, authentic: 1},
		breaksProtect: true,
		secondary: null,
		target: "normal",
		type: "Psychic",
		contestType: "Clever",
	},
	hypervoice: {
		num: 304,
		accuracy: 100,
		basePower: 90,
		category: "Special",
		name: "Hyper Voice",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, sound: 1, authentic: 1},
		secondary: null,
		target: "allAdjacentFoes",
		type: "Normal",
		contestType: "Cool",
	},
	hypnosis: {
		num: 95,
		accuracy: 60,
		basePower: 0,
		category: "Status",
		name: "Hypnosis",
		pp: 20,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1},
		status: 'slp',
		secondary: null,
		target: "normal",
		type: "Psychic",
		zMove: {boost: {spe: 1}},
		contestType: "Clever",
	},
	iceball: {
		num: 301,
		accuracy: 90,
		basePower: 30,
		basePowerCallback(pokemon, target, move) {
			let bp = move.basePower;
			if (pokemon.volatiles['iceball'] && pokemon.volatiles['iceball'].hitCount) {
				bp *= Math.pow(2, pokemon.volatiles['iceball'].hitCount);
			}
			if (pokemon.status !== 'slp') pokemon.addVolatile('iceball');
			if (pokemon.volatiles['defensecurl']) {
				bp *= 2;
			}
			this.debug("Ice Ball bp: " + bp);
			return bp;
		},
		category: "Physical",
		isNonstandard: "Past",
		name: "Ice Ball",
		pp: 20,
		priority: 0,
		flags: {bullet: 1, contact: 1, protect: 1, mirror: 1},
		condition: {
			duration: 2,
			onLockMove: 'iceball',
			onStart() {
				this.effectState.hitCount = 1;
			},
			onRestart() {
				this.effectState.hitCount++;
				if (this.effectState.hitCount < 5) {
					this.effectState.duration = 2;
				}
			},
			onResidual(target) {
				if (target.lastMove && target.lastMove.id === 'struggle') {
					// don't lock
					delete target.volatiles['iceball'];
				}
			},
		},
		secondary: null,
		target: "normal",
		type: "Ice",
		contestType: "Beautiful",
	},
	icebeam: {
		num: 58,
		accuracy: 100,
		basePower: 90,
		category: "Special",
		name: "Ice Beam",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 10,
			status: 'frz',
		},
		target: "normal",
		type: "Ice",
		contestType: "Beautiful",
	},
	iceburn: {
		num: 554,
		accuracy: 90,
		basePower: 140,
		category: "Special",
		name: "Ice Burn",
		pp: 5,
		priority: 0,
		flags: {charge: 1, protect: 1, mirror: 1},
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
		secondary: {
			chance: 30,
			status: 'brn',
		},
		target: "normal",
		type: "Ice",
		contestType: "Beautiful",
	},
	icefang: {
		num: 423,
		accuracy: 95,
		basePower: 65,
		category: "Physical",
		name: "Ice Fang",
		pp: 15,
		priority: 0,
		flags: {bite: 1, contact: 1, protect: 1, mirror: 1},
		secondaries: [
			{
				chance: 10,
				status: 'frz',
			}, {
				chance: 10,
				volatileStatus: 'flinch',
			},
		],
		target: "normal",
		type: "Ice",
		contestType: "Cool",
	},
	icehammer: {
		num: 665,
		accuracy: 90,
		basePower: 100,
		category: "Physical",
		isNonstandard: "Past",
		name: "Ice Hammer",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, punch: 1},
		self: {
			boosts: {
				spe: -1,
			},
		},
		secondary: null,
		target: "normal",
		type: "Ice",
		contestType: "Tough",
	},
	icepunch: {
		num: 8,
		accuracy: 100,
		basePower: 75,
		category: "Physical",
		name: "Ice Punch",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, punch: 1},
		secondary: {
			chance: 10,
			status: 'frz',
		},
		target: "normal",
		type: "Ice",
		contestType: "Beautiful",
	},
	iceshard: {
		num: 420,
		accuracy: 100,
		basePower: 40,
		category: "Physical",
		name: "Ice Shard",
		pp: 30,
		priority: 1,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Ice",
		contestType: "Beautiful",
	},
	iciclecrash: {
		num: 556,
		accuracy: 90,
		basePower: 85,
		category: "Physical",
		name: "Icicle Crash",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 30,
			volatileStatus: 'flinch',
		},
		target: "normal",
		type: "Ice",
		contestType: "Beautiful",
	},
	iciclespear: {
		num: 333,
		accuracy: 100,
		basePower: 25,
		category: "Physical",
		name: "Icicle Spear",
		pp: 30,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		multihit: [2, 5],
		secondary: null,
		target: "normal",
		type: "Ice",
		zMove: {basePower: 140},
		maxMove: {basePower: 130},
		contestType: "Beautiful",
	},
	icywind: {
		num: 196,
		accuracy: 95,
		basePower: 55,
		category: "Special",
		name: "Icy Wind",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 100,
			boosts: {
				spe: -1,
			},
		},
		target: "allAdjacentFoes",
		type: "Ice",
		contestType: "Beautiful",
	},
	imprison: {
		num: 286,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Imprison",
		pp: 10,
		priority: 0,
		flags: {snatch: 1, authentic: 1},
		volatileStatus: 'imprison',
		condition: {
			noCopy: true,
			onStart(target) {
				this.add('-start', target, 'move: Imprison');
			},
			onFoeDisableMove(pokemon) {
				for (const moveSlot of this.effectState.source.moveSlots) {
					if (moveSlot.id === 'struggle') continue;
					pokemon.disableMove(moveSlot.id, 'hidden');
				}
				pokemon.maybeDisabled = true;
			},
			onFoeBeforeMovePriority: 4,
			onFoeBeforeMove(attacker, defender, move) {
				if (move.id !== 'struggle' && this.effectState.source.hasMove(move.id) && !move.isZ && !move.isMax) {
					this.add('cant', attacker, 'move: Imprison', move);
					return false;
				}
			},
		},
		secondary: null,
		pressureTarget: "foeSide",
		target: "self",
		type: "Psychic",
		zMove: {boost: {spd: 2}},
		contestType: "Clever",
	},
	incinerate: {
		num: 510,
		accuracy: 100,
		basePower: 60,
		category: "Special",
		name: "Incinerate",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onHit(pokemon, source) {
			const item = pokemon.getItem();
			if ((item.isBerry || item.isGem) && pokemon.takeItem(source)) {
				this.add('-enditem', pokemon, item.name, '[from] move: Incinerate');
			}
		},
		secondary: null,
		target: "allAdjacentFoes",
		type: "Fire",
		contestType: "Tough",
	},
	inferno: {
		num: 517,
		accuracy: 50,
		basePower: 100,
		category: "Special",
		name: "Inferno",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 100,
			status: 'brn',
		},
		target: "normal",
		type: "Fire",
		contestType: "Beautiful",
	},
	infernooverdrive: {
		num: 640,
		accuracy: true,
		basePower: 1,
		category: "Physical",
		isNonstandard: "Past",
		name: "Inferno Overdrive",
		pp: 1,
		priority: 0,
		flags: {},
		isZ: "firiumz",
		secondary: null,
		target: "normal",
		type: "Fire",
		contestType: "Cool",
	},
	infestation: {
		num: 611,
		accuracy: 100,
		basePower: 20,
		category: "Special",
		name: "Infestation",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		volatileStatus: 'partiallytrapped',
		secondary: null,
		target: "normal",
		type: "Bug",
		contestType: "Cute",
	},
	ingrain: {
		num: 275,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Ingrain",
		pp: 20,
		priority: 0,
		flags: {snatch: 1, nonsky: 1},
		volatileStatus: 'ingrain',
		condition: {
			onStart(pokemon) {
				this.add('-start', pokemon, 'move: Ingrain');
			},
			onResidualOrder: 7,
			onResidual(pokemon) {
				this.heal(pokemon.baseMaxhp / 16);
			},
			onTrapPokemon(pokemon) {
				pokemon.tryTrap();
			},
			// groundedness implemented in battle.engine.js:BattlePokemon#isGrounded
			onDragOut(pokemon) {
				this.add('-activate', pokemon, 'move: Ingrain');
				return null;
			},
		},
		secondary: null,
		target: "self",
		type: "Grass",
		zMove: {boost: {spd: 1}},
		contestType: "Clever",
	},
	instruct: {
		num: 689,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Instruct",
		pp: 15,
		priority: 0,
		flags: {protect: 1, authentic: 1, mystery: 1},
		onHit(target, source) {
			if (!target.lastMove || target.volatiles['dynamax']) return false;
			const lastMove = target.lastMove;
			const moveIndex = target.moves.indexOf(lastMove.id);
			const noInstruct = [
				'assist', 'beakblast', 'belch', 'bide', 'celebrate', 'copycat', 'dynamaxcannon', 'focuspunch', 'iceball', 'instruct', 'kingsshield', 'mefirst', 'metronome', 'mimic', 'mirrormove', 'naturepower', 'obstruct', 'outrage', 'petaldance', 'rollout', 'shelltrap', 'sketch', 'sleeptalk', 'struggle', 'thrash', 'transform', 'uproar',
			];
			if (
				noInstruct.includes(lastMove.id) || lastMove.isZ || lastMove.isMax ||
				lastMove.flags['charge'] || lastMove.flags['recharge'] ||
				target.volatiles['beakblast'] || target.volatiles['focuspunch'] || target.volatiles['shelltrap'] ||
				(target.moveSlots[moveIndex] && target.moveSlots[moveIndex].pp <= 0)
			) {
				return false;
			}
			this.add('-singleturn', target, 'move: Instruct', '[of] ' + source);
			this.actions.runMove(target.lastMove.id, target, target.lastMoveTargetLoc!);
		},
		secondary: null,
		target: "normal",
		type: "Psychic",
		zMove: {boost: {spa: 1}},
		contestType: "Clever",
	},
	iondeluge: {
		num: 569,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Past",
		name: "Ion Deluge",
		pp: 25,
		priority: 1,
		flags: {},
		pseudoWeather: 'iondeluge',
		condition: {
			duration: 1,
			onStart(target, source, sourceEffect) {
				this.add('-fieldactivate', 'move: Ion Deluge');
				this.hint(`Normal-type moves become Electric-type after using ${sourceEffect}.`);
			},
			onModifyTypePriority: -2,
			onModifyType(move) {
				if (move.type === 'Normal') {
					move.type = 'Electric';
					this.debug(move.name + "'s type changed to Electric");
				}
			},
		},
		secondary: null,
		target: "all",
		type: "Electric",
		zMove: {boost: {spa: 1}},
		contestType: "Beautiful",
	},
	irondefense: {
		num: 334,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Iron Defense",
		pp: 15,
		priority: 0,
		flags: {snatch: 1},
		boosts: {
			def: 2,
		},
		secondary: null,
		target: "self",
		type: "Steel",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Tough",
	},
	ironhead: {
		num: 442,
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		name: "Iron Head",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 30,
			volatileStatus: 'flinch',
		},
		target: "normal",
		type: "Steel",
		contestType: "Tough",
	},
	irontail: {
		num: 231,
		accuracy: 75,
		basePower: 100,
		category: "Physical",
		name: "Iron Tail",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 30,
			boosts: {
				def: -1,
			},
		},
		target: "normal",
		type: "Steel",
		contestType: "Cool",
	},
	jawlock: {
		num: 746,
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		name: "Jaw Lock",
		pp: 10,
		priority: 0,
		flags: {bite: 1, contact: 1, protect: 1, mirror: 1},
		onHit(target, source, move) {
			source.addVolatile('trapped', target, move, 'trapper');
			target.addVolatile('trapped', source, move, 'trapper');
		},
		secondary: null,
		target: "normal",
		type: "Dark",
	},
	judgment: {
		num: 449,
		accuracy: 100,
		basePower: 100,
		category: "Special",
		isNonstandard: "Past",
		name: "Judgment",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onModifyType(move, pokemon) {
			if (pokemon.ignoringItem()) return;
			const item = pokemon.getItem();
			if (item.id && item.onPlate && !item.zMove) {
				move.type = item.onPlate;
			}
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		contestType: "Beautiful",
	},
	jumpkick: {
		num: 26,
		accuracy: 95,
		basePower: 100,
		category: "Physical",
		isNonstandard: "Past",
		name: "Jump Kick",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, gravity: 1},
		hasCrashDamage: true,
		onMoveFail(target, source, move) {
			this.damage(source.baseMaxhp / 2, source, source, this.dex.conditions.get('Jump Kick'));
		},
		secondary: null,
		target: "normal",
		type: "Fighting",
		contestType: "Cool",
	},
	junglehealing: {
		num: 816,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Jungle Healing",
		pp: 10,
		priority: 0,
		flags: {heal: 1, authentic: 1, mystery: 1},
		onHit(pokemon) {
			const success = !!this.heal(this.modify(pokemon.maxhp, 0.25));
			return pokemon.cureStatus() || success;
		},
		secondary: null,
		target: "allies",
		type: "Grass",
	},
	karatechop: {
		num: 2,
		accuracy: 100,
		basePower: 50,
		category: "Physical",
		isNonstandard: "Past",
		name: "Karate Chop",
		pp: 25,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		critRatio: 2,
		secondary: null,
		target: "normal",
		type: "Fighting",
		contestType: "Tough",
	},
	kinesis: {
		num: 134,
		accuracy: 80,
		basePower: 0,
		category: "Status",
		name: "Kinesis",
		pp: 15,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1},
		boosts: {
			accuracy: -1,
		},
		secondary: null,
		target: "normal",
		type: "Psychic",
		zMove: {boost: {evasion: 1}},
		contestType: "Clever",
	},
	kingsshield: {
		num: 588,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "King's Shield",
		pp: 10,
		priority: 4,
		flags: {},
		stallingMove: true,
		volatileStatus: 'kingsshield',
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
					if (['gmaxoneblow', 'gmaxrapidflow'].includes(move.id)) return;
					if (move.isZ || move.isMax) target.getMoveHitData(move).zBrokeProtect = true;
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
				if (this.checkMoveMakesContact(move, source, target)) {
					this.boost({atk: -1}, source, target, this.dex.getActiveMove("King's Shield"));
				}
				return this.NOT_FAIL;
			},
			onHit(target, source, move) {
				if (move.isZOrMaxPowered && this.checkMoveMakesContact(move, source, target)) {
					this.boost({atk: -1}, source, target, this.dex.getActiveMove("King's Shield"));
				}
			},
		},
		secondary: null,
		target: "self",
		type: "Steel",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Cool",
	},
	knockoff: {
		num: 282,
		accuracy: 100,
		basePower: 65,
		category: "Physical",
		name: "Knock Off",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onBasePower(basePower, source, target, move) {
			const item = target.getItem();
			if (!this.singleEvent('TakeItem', item, target.itemState, target, target, move, item)) return;
			if (item.id) {
				return this.chainModify(1.5);
			}
		},
		onAfterHit(target, source) {
			if (source.hp) {
				const item = target.takeItem();
				if (item) {
					this.add('-enditem', target, item.name, '[from] move: Knock Off', '[of] ' + source);
				}
			}
		},
		secondary: null,
		target: "normal",
		type: "Dark",
		contestType: "Clever",
	},
	landswrath: {
		num: 616,
		accuracy: 100,
		basePower: 90,
		category: "Physical",
		name: "Land's Wrath",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, nonsky: 1},
		secondary: null,
		target: "allAdjacentFoes",
		type: "Ground",
		zMove: {basePower: 185},
		contestType: "Beautiful",
	},
	laserfocus: {
		num: 673,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Laser Focus",
		pp: 30,
		priority: 0,
		flags: {snatch: 1},
		volatileStatus: 'laserfocus',
		condition: {
			duration: 2,
			onStart(pokemon, source, effect) {
				if (effect && (['imposter', 'psychup', 'transform'].includes(effect.id))) {
					this.add('-start', pokemon, 'move: Laser Focus', '[silent]');
				} else {
					this.add('-start', pokemon, 'move: Laser Focus');
				}
			},
			onRestart(pokemon) {
				this.effectState.duration = 2;
				this.add('-start', pokemon, 'move: Laser Focus');
			},
			onModifyCritRatio(critRatio) {
				return 5;
			},
			onEnd(pokemon) {
				this.add('-end', pokemon, 'move: Laser Focus', '[silent]');
			},
		},
		secondary: null,
		target: "self",
		type: "Normal",
		zMove: {boost: {atk: 1}},
		contestType: "Cool",
	},
	lashout: {
		num: 808,
		accuracy: 100,
		basePower: 75,
		category: "Physical",
		name: "Lash Out",
		pp: 5,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onBasePower(basePower, source) {
			if (source.statsLoweredThisTurn) {
				this.debug('lashout buff');
				return this.chainModify(2);
			}
		},
		secondary: null,
		target: "normal",
		type: "Dark",
	},
	lastresort: {
		num: 387,
		accuracy: 100,
		basePower: 140,
		category: "Physical",
		name: "Last Resort",
		pp: 5,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onTry(source) {
			if (source.moveSlots.length < 2) return false; // Last Resort fails unless the user knows at least 2 moves
			let hasLastResort = false; // User must actually have Last Resort for it to succeed
			for (const moveSlot of source.moveSlots) {
				if (moveSlot.id === 'lastresort') {
					hasLastResort = true;
					continue;
				}
				if (!moveSlot.used) return false;
			}
			return hasLastResort;
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		contestType: "Cute",
	},
	lavaplume: {
		num: 436,
		accuracy: 100,
		basePower: 80,
		category: "Special",
		name: "Lava Plume",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 30,
			status: 'brn',
		},
		target: "allAdjacent",
		type: "Fire",
		contestType: "Tough",
	},
	leafage: {
		num: 670,
		accuracy: 100,
		basePower: 40,
		category: "Physical",
		name: "Leafage",
		pp: 40,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Grass",
		contestType: "Tough",
	},
	leafblade: {
		num: 348,
		accuracy: 100,
		basePower: 90,
		category: "Physical",
		name: "Leaf Blade",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		critRatio: 2,
		secondary: null,
		target: "normal",
		type: "Grass",
		contestType: "Cool",
	},
	leafstorm: {
		num: 437,
		accuracy: 90,
		basePower: 130,
		category: "Special",
		name: "Leaf Storm",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		self: {
			boosts: {
				spa: -2,
			},
		},
		secondary: null,
		target: "normal",
		type: "Grass",
		contestType: "Beautiful",
	},
	leaftornado: {
		num: 536,
		accuracy: 90,
		basePower: 65,
		category: "Special",
		name: "Leaf Tornado",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 50,
			boosts: {
				accuracy: -1,
			},
		},
		target: "normal",
		type: "Grass",
		contestType: "Cool",
	},
	leechlife: {
		num: 141,
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		name: "Leech Life",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, heal: 1},
		drain: [1, 2],
		secondary: null,
		target: "normal",
		type: "Bug",
		contestType: "Clever",
	},
	leechseed: {
		num: 73,
		accuracy: 90,
		basePower: 0,
		category: "Status",
		name: "Leech Seed",
		pp: 10,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1},
		volatileStatus: 'leechseed',
		condition: {
			onStart(target) {
				this.add('-start', target, 'move: Leech Seed');
			},
			onResidualOrder: 8,
			onResidual(pokemon) {
				const target = this.getAtSlot(pokemon.volatiles['leechseed'].sourceSlot);
				if (!target || target.fainted || target.hp <= 0) {
					this.debug('Nothing to leech into');
					return;
				}
				const damage = this.damage(pokemon.baseMaxhp / 8, pokemon, target);
				if (damage) {
					this.heal(damage, target, pokemon);
				}
			},
		},
		onTryImmunity(target) {
			return !target.hasType('Grass');
		},
		secondary: null,
		target: "normal",
		type: "Grass",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Clever",
	},
	leer: {
		num: 43,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Leer",
		pp: 30,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1},
		boosts: {
			def: -1,
		},
		secondary: null,
		target: "allAdjacentFoes",
		type: "Normal",
		zMove: {boost: {atk: 1}},
		contestType: "Cool",
	},
	letssnuggleforever: {
		num: 726,
		accuracy: true,
		basePower: 190,
		category: "Physical",
		isNonstandard: "Past",
		name: "Let's Snuggle Forever",
		pp: 1,
		priority: 0,
		flags: {contact: 1},
		isZ: "mimikiumz",
		secondary: null,
		target: "normal",
		type: "Fairy",
		contestType: "Cool",
	},
	lick: {
		num: 122,
		accuracy: 100,
		basePower: 30,
		category: "Physical",
		name: "Lick",
		pp: 30,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 30,
			status: 'par',
		},
		target: "normal",
		type: "Ghost",
		contestType: "Cute",
	},
	lifedew: {
		num: 791,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Life Dew",
		pp: 10,
		priority: 0,
		flags: {snatch: 1, heal: 1, authentic: 1},
		heal: [1, 4],
		secondary: null,
		target: "allies",
		type: "Water",
	},
	lightofruin: {
		num: 617,
		accuracy: 90,
		basePower: 140,
		category: "Special",
		isNonstandard: "Past",
		name: "Light of Ruin",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		recoil: [1, 2],
		secondary: null,
		target: "normal",
		type: "Fairy",
		contestType: "Beautiful",
	},
	lightscreen: {
		num: 113,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Light Screen",
		pp: 30,
		priority: 0,
		flags: {snatch: 1},
		sideCondition: 'lightscreen',
		condition: {
			duration: 5,
			durationCallback(target, source, effect) {
				if (source?.hasItem('lightclay')) {
					return 8;
				}
				return 5;
			},
			onAnyModifyDamage(damage, source, target, move) {
				if (target !== source && this.effectState.target.hasAlly(target) && this.getCategory(move) === 'Special') {
					if (!target.getMoveHitData(move).crit && !move.infiltrates) {
						this.debug('Light Screen weaken');
						if (this.activePerHalf > 1) return this.chainModify([2732, 4096]);
						return this.chainModify(0.5);
					}
				}
			},
			onSideStart(side) {
				this.add('-sidestart', side, 'move: Light Screen');
			},
			onSideResidualOrder: 26,
			onSideResidualSubOrder: 2,
			onSideEnd(side) {
				this.add('-sideend', side, 'move: Light Screen');
			},
		},
		secondary: null,
		target: "allySide",
		type: "Psychic",
		zMove: {boost: {spd: 1}},
		contestType: "Beautiful",
	},
	lightthatburnsthesky: {
		num: 723,
		accuracy: true,
		basePower: 200,
		category: "Special",
		isNonstandard: "Past",
		name: "Light That Burns the Sky",
		pp: 1,
		priority: 0,
		flags: {},
		onModifyMove(move, pokemon) {
			if (pokemon.getStat('atk', false, true) > pokemon.getStat('spa', false, true)) move.category = 'Physical';
		},
		ignoreAbility: true,
		isZ: "ultranecroziumz",
		secondary: null,
		target: "normal",
		type: "Psychic",
		contestType: "Cool",
	},
	liquidation: {
		num: 710,
		accuracy: 100,
		basePower: 85,
		category: "Physical",
		name: "Liquidation",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 20,
			boosts: {
				def: -1,
			},
		},
		target: "normal",
		type: "Water",
		contestType: "Cool",
	},
	lockon: {
		num: 199,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Lock-On",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onTryHit(target, source) {
			if (source.volatiles['lockon']) return false;
		},
		onHit(target, source) {
			source.addVolatile('lockon', target);
			this.add('-activate', source, 'move: Lock-On', '[of] ' + target);
		},
		condition: {
			noCopy: true, // doesn't get copied by Baton Pass
			duration: 2,
			onSourceInvulnerabilityPriority: 1,
			onSourceInvulnerability(target, source, move) {
				if (move && source === this.effectState.target && target === this.effectState.source) return 0;
			},
			onSourceAccuracy(accuracy, target, source, move) {
				if (move && source === this.effectState.target && target === this.effectState.source) return true;
			},
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {boost: {spe: 1}},
		contestType: "Clever",
	},
	lovelykiss: {
		num: 142,
		accuracy: 75,
		basePower: 0,
		category: "Status",
		name: "Lovely Kiss",
		pp: 10,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1},
		status: 'slp',
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {boost: {spe: 1}},
		contestType: "Beautiful",
	},
	lowkick: {
		num: 67,
		accuracy: 100,
		basePower: 0,
		basePowerCallback(pokemon, target) {
			const targetWeight = target.getWeight();
			if (targetWeight >= 2000) {
				return 120;
			}
			if (targetWeight >= 1000) {
				return 100;
			}
			if (targetWeight >= 500) {
				return 80;
			}
			if (targetWeight >= 250) {
				return 60;
			}
			if (targetWeight >= 100) {
				return 40;
			}
			return 20;
		},
		category: "Physical",
		name: "Low Kick",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onTryHit(target, pokemon, move) {
			if (target.volatiles['dynamax']) {
				this.add('-fail', pokemon, 'Dynamax');
				this.attrLastMove('[still]');
				return null;
			}
		},
		secondary: null,
		target: "normal",
		type: "Fighting",
		zMove: {basePower: 160},
		contestType: "Tough",
	},
	lowsweep: {
		num: 490,
		accuracy: 100,
		basePower: 65,
		category: "Physical",
		name: "Low Sweep",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 100,
			boosts: {
				spe: -1,
			},
		},
		target: "normal",
		type: "Fighting",
		contestType: "Clever",
	},
	luckychant: {
		num: 381,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Past",
		name: "Lucky Chant",
		pp: 30,
		priority: 0,
		flags: {snatch: 1},
		sideCondition: 'luckychant',
		condition: {
			duration: 5,
			onSideStart(side) {
				this.add('-sidestart', side, 'move: Lucky Chant'); // "The Lucky Chant shielded [side.name]'s team from critical hits!"
			},
			onCriticalHit: false,
			onSideResidualOrder: 26,
			onSideResidualSubOrder: 6,
			onSideEnd(side) {
				this.add('-sideend', side, 'move: Lucky Chant'); // "[side.name]'s team's Lucky Chant wore off!"
			},
		},
		secondary: null,
		target: "allySide",
		type: "Normal",
		zMove: {boost: {evasion: 1}},
		contestType: "Cute",
	},
	lunardance: {
		num: 461,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Lunar Dance",
		pp: 10,
		priority: 0,
		flags: {snatch: 1, heal: 1, dance: 1},
		onTryHit(pokemon, target, move) {
			if (!this.canSwitch(pokemon.side)) {
				delete move.selfdestruct;
				return false;
			}
		},
		selfdestruct: "ifHit",
		slotCondition: 'lunardance',
		condition: {
			onSwap(target) {
				if (
					!target.fainted && (
						target.hp < target.maxhp ||
						target.status ||
						target.moveSlots.some(moveSlot => moveSlot.pp < moveSlot.maxpp)
					)
				) {
					target.heal(target.maxhp);
					target.setStatus('');
					for (const moveSlot of target.moveSlots) {
						moveSlot.pp = moveSlot.maxpp;
					}
					this.add('-heal', target, target.getHealth, '[from] move: Lunar Dance');
					target.side.removeSlotCondition(target, 'lunardance');
				}
			},
		},
		secondary: null,
		target: "self",
		type: "Psychic",
		contestType: "Beautiful",
	},
	lunge: {
		num: 679,
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		name: "Lunge",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 100,
			boosts: {
				atk: -1,
			},
		},
		target: "normal",
		type: "Bug",
		contestType: "Cute",
	},
	lusterpurge: {
		num: 295,
		accuracy: 100,
		basePower: 70,
		category: "Special",
		name: "Luster Purge",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 50,
			boosts: {
				spd: -1,
			},
		},
		target: "normal",
		type: "Psychic",
		contestType: "Clever",
	},
	machpunch: {
		num: 183,
		accuracy: 100,
		basePower: 40,
		category: "Physical",
		name: "Mach Punch",
		pp: 30,
		priority: 1,
		flags: {contact: 1, protect: 1, mirror: 1, punch: 1},
		secondary: null,
		target: "normal",
		type: "Fighting",
		contestType: "Cool",
	},
	magicalleaf: {
		num: 345,
		accuracy: true,
		basePower: 60,
		category: "Special",
		name: "Magical Leaf",
		pp: 20,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Grass",
		contestType: "Beautiful",
	},
	magiccoat: {
		num: 277,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Magic Coat",
		pp: 15,
		priority: 4,
		flags: {},
		volatileStatus: 'magiccoat',
		condition: {
			duration: 1,
			onStart(target, source, effect) {
				this.add('-singleturn', target, 'move: Magic Coat');
				if (effect?.effectType === 'Move') {
					this.effectState.pranksterBoosted = effect.pranksterBoosted;
				}
			},
			onTryHitPriority: 2,
			onTryHit(target, source, move) {
				if (target === source || move.hasBounced || !move.flags['reflectable']) {
					return;
				}
				const newMove = this.dex.getActiveMove(move.id);
				newMove.hasBounced = true;
				newMove.pranksterBoosted = this.effectState.pranksterBoosted;
				this.actions.useMove(newMove, target, source);
				return null;
			},
			onAllyTryHitSide(target, source, move) {
				if (target.isAlly(source) || move.hasBounced || !move.flags['reflectable']) {
					return;
				}
				const newMove = this.dex.getActiveMove(move.id);
				newMove.hasBounced = true;
				newMove.pranksterBoosted = false;
				this.actions.useMove(newMove, this.effectState.target, source);
				return null;
			},
		},
		secondary: null,
		target: "self",
		type: "Psychic",
		zMove: {boost: {spd: 2}},
		contestType: "Beautiful",
	},
	magicpowder: {
		num: 750,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Magic Powder",
		pp: 20,
		priority: 0,
		flags: {powder: 1, protect: 1, reflectable: 1, mirror: 1, mystery: 1},
		onHit(target) {
			if (target.getTypes().join() === 'Psychic' || !target.setType('Psychic')) return false;
			this.add('-start', target, 'typechange', 'Psychic');
		},
		secondary: null,
		target: "normal",
		type: "Psychic",
	},
	magicroom: {
		num: 478,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Magic Room",
		pp: 10,
		priority: 0,
		flags: {mirror: 1},
		pseudoWeather: 'magicroom',
		condition: {
			duration: 5,
			durationCallback(source, effect) {
				if (source?.hasAbility('persistent')) {
					this.add('-activate', source, 'ability: Persistent', effect);
					return 7;
				}
				return 5;
			},
			onFieldStart(target, source) {
				this.add('-fieldstart', 'move: Magic Room', '[of] ' + source);
			},
			onFieldRestart(target, source) {
				this.field.removePseudoWeather('magicroom');
			},
			// Item suppression implemented in Pokemon.ignoringItem() within sim/pokemon.js
			onFieldResidualOrder: 27,
			onFieldResidualSubOrder: 6,
			onFieldEnd() {
				this.add('-fieldend', 'move: Magic Room', '[of] ' + this.effectState.source);
			},
		},
		secondary: null,
		target: "all",
		type: "Psychic",
		zMove: {boost: {spd: 1}},
		contestType: "Clever",
	},
	magmastorm: {
		num: 463,
		accuracy: 75,
		basePower: 100,
		category: "Special",
		name: "Magma Storm",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		volatileStatus: 'partiallytrapped',
		secondary: null,
		target: "normal",
		type: "Fire",
		contestType: "Tough",
	},
	magnetbomb: {
		num: 443,
		accuracy: true,
		basePower: 60,
		category: "Physical",
		isNonstandard: "Past",
		name: "Magnet Bomb",
		pp: 20,
		priority: 0,
		flags: {bullet: 1, protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Steel",
		contestType: "Cool",
	},
	magneticflux: {
		num: 602,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Magnetic Flux",
		pp: 20,
		priority: 0,
		flags: {snatch: 1, distance: 1, authentic: 1},
		onHitSide(side, source, move) {
			const targets = side.allies().filter(ally => (
				ally.hasAbility(['plus', 'minus']) &&
				(!ally.volatiles['maxguard'] || this.runEvent('TryHit', ally, source, move))
			));
			if (!targets.length) return false;

			let didSomething = false;
			for (const target of targets) {
				didSomething = this.boost({def: 1, spd: 1}, target, source, move, false, true) || didSomething;
			}
			return didSomething;
		},
		secondary: null,
		target: "allySide",
		type: "Electric",
		zMove: {boost: {spd: 1}},
		contestType: "Clever",
	},
	magnetrise: {
		num: 393,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Magnet Rise",
		pp: 10,
		priority: 0,
		flags: {snatch: 1, gravity: 1},
		volatileStatus: 'magnetrise',
		onTry(source, target, move) {
			if (target.volatiles['smackdown'] || target.volatiles['ingrain']) return false;

			// Additional Gravity check for Z-move variant
			if (this.field.getPseudoWeather('Gravity')) {
				this.add('cant', source, 'move: Gravity', move);
				return null;
			}
		},
		condition: {
			duration: 5,
			onStart(target) {
				this.add('-start', target, 'Magnet Rise');
			},
			onImmunity(type) {
				if (type === 'Ground') return false;
			},
			onResidualOrder: 18,
			onEnd(target) {
				this.add('-end', target, 'Magnet Rise');
			},
		},
		secondary: null,
		target: "self",
		type: "Electric",
		zMove: {boost: {evasion: 1}},
		contestType: "Clever",
	},
	magnitude: {
		num: 222,
		accuracy: 100,
		basePower: 0,
		category: "Physical",
		isNonstandard: "Past",
		name: "Magnitude",
		pp: 30,
		priority: 0,
		flags: {protect: 1, mirror: 1, nonsky: 1},
		onModifyMove(move, pokemon) {
			const i = this.random(100);
			if (i < 5) {
				move.magnitude = 4;
				move.basePower = 10;
			} else if (i < 15) {
				move.magnitude = 5;
				move.basePower = 30;
			} else if (i < 35) {
				move.magnitude = 6;
				move.basePower = 50;
			} else if (i < 65) {
				move.magnitude = 7;
				move.basePower = 70;
			} else if (i < 85) {
				move.magnitude = 8;
				move.basePower = 90;
			} else if (i < 95) {
				move.magnitude = 9;
				move.basePower = 110;
			} else {
				move.magnitude = 10;
				move.basePower = 150;
			}
		},
		onUseMoveMessage(pokemon, target, move) {
			this.add('-activate', pokemon, 'move: Magnitude', move.magnitude);
		},
		secondary: null,
		target: "allAdjacent",
		type: "Ground",
		zMove: {basePower: 140},
		maxMove: {basePower: 140},
		contestType: "Tough",
	},
	maliciousmoonsault: {
		num: 696,
		accuracy: true,
		basePower: 180,
		category: "Physical",
		isNonstandard: "Past",
		name: "Malicious Moonsault",
		pp: 1,
		priority: 0,
		flags: {contact: 1},
		isZ: "inciniumz",
		secondary: null,
		target: "normal",
		type: "Dark",
		contestType: "Cool",
	},
	matblock: {
		num: 561,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Mat Block",
		pp: 10,
		priority: 0,
		flags: {snatch: 1, nonsky: 1},
		stallingMove: true,
		sideCondition: 'matblock',
		onTry(source) {
			if (source.activeMoveActions > 1) {
				this.hint("Mat Block only works on your first turn out.");
				return false;
			}
			return !!this.queue.willAct();
		},
		condition: {
			duration: 1,
			onSideStart(target, source) {
				this.add('-singleturn', source, 'Mat Block');
			},
			onTryHitPriority: 3,
			onTryHit(target, source, move) {
				if (!move.flags['protect']) {
					if (['gmaxoneblow', 'gmaxrapidflow'].includes(move.id)) return;
					if (move.isZ || move.isMax) target.getMoveHitData(move).zBrokeProtect = true;
					return;
				}
				if (move && (move.target === 'self' || move.category === 'Status')) return;
				this.add('-activate', target, 'move: Mat Block', move.name);
				const lockedmove = source.getVolatile('lockedmove');
				if (lockedmove) {
					// Outrage counter is reset
					if (source.volatiles['lockedmove'].duration === 2) {
						delete source.volatiles['lockedmove'];
					}
				}
				return this.NOT_FAIL;
			},
		},
		secondary: null,
		target: "allySide",
		type: "Fighting",
		zMove: {boost: {def: 1}},
		contestType: "Cool",
	},
	maxairstream: {
		num: 766,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		name: "Max Airstream",
		pp: 10,
		priority: 0,
		flags: {},
		isMax: true,
		self: {
			onHit(source) {
				if (!source.volatiles['dynamax']) return;
				for (const pokemon of source.alliesAndSelf()) {
					this.boost({spe: 1}, pokemon);
				}
			},
		},
		target: "adjacentFoe",
		type: "Flying",
		contestType: "Cool",
	},
	maxdarkness: {
		num: 772,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		name: "Max Darkness",
		pp: 10,
		priority: 0,
		flags: {},
		isMax: true,
		self: {
			onHit(source) {
				if (!source.volatiles['dynamax']) return;
				for (const pokemon of source.foes()) {
					this.boost({spd: -1}, pokemon);
				}
			},
		},
		target: "adjacentFoe",
		type: "Dark",
		contestType: "Cool",
	},
	maxflare: {
		num: 757,
		accuracy: true,
		basePower: 100,
		category: "Physical",
		name: "Max Flare",
		pp: 10,
		priority: 0,
		flags: {},
		isMax: true,
		self: {
			onHit(source) {
				if (!source.volatiles['dynamax']) return;
				this.field.setWeather('sunnyday');
			},
		},
		target: "adjacentFoe",
		type: "Fire",
		contestType: "Cool",
	},
	maxflutterby: {
		num: 758,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		name: "Max Flutterby",
		pp: 10,
		priority: 0,
		flags: {},
		isMax: true,
		self: {
			onHit(source) {
				if (!source.volatiles['dynamax']) return;
				for (const pokemon of source.foes()) {
					this.boost({spa: -1}, pokemon);
				}
			},
		},
		target: "adjacentFoe",
		type: "Bug",
		contestType: "Cool",
	},
	maxgeyser: {
		num: 765,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		name: "Max Geyser",
		pp: 10,
		priority: 0,
		flags: {},
		isMax: true,
		self: {
			onHit(source) {
				if (!source.volatiles['dynamax']) return;
				this.field.setWeather('raindance');
			},
		},
		target: "adjacentFoe",
		type: "Water",
		contestType: "Cool",
	},
	maxguard: {
		num: 743,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Max Guard",
		pp: 10,
		priority: 4,
		flags: {},
		isMax: true,
		stallingMove: true,
		volatileStatus: 'maxguard',
		onPrepareHit(pokemon) {
			return !!this.queue.willAct() && this.runEvent('StallMove', pokemon);
		},
		onHit(pokemon) {
			pokemon.addVolatile('stall');
		},
		condition: {
			duration: 1,
			onStart(target) {
				this.add('-singleturn', target, 'Max Guard');
			},
			onTryHitPriority: 3,
			onTryHit(target, source, move) {
				if (['gmaxoneblow', 'gmaxrapidflow'].includes(move.id)) return;
				/** moves blocked by Max Guard but not Protect */
				const overrideBypassProtect = [
					'block', 'flowershield', 'gearup', 'magneticflux', 'phantomforce', 'psychup', 'shadowforce', 'teatime', 'transform',
				];
				const blockedByMaxGuard = (this.dex.moves.get(move.id).flags['protect'] ||
						move.isZ || move.isMax || overrideBypassProtect.includes(move.id));
				if (!blockedByMaxGuard) {
					return;
				}
				if (move.smartTarget) {
					move.smartTarget = false;
				} else {
					this.add('-activate', target, 'move: Max Guard');
				}
				const lockedmove = source.getVolatile('lockedmove');
				if (lockedmove) {
					// Outrage counter is reset
					if (source.volatiles['lockedmove'].duration === 2) {
						delete source.volatiles['lockedmove'];
					}
				}
				return this.NOT_FAIL;
			},
		},
		secondary: null,
		target: "self",
		type: "Normal",
		contestType: "Cool",
	},
	maxhailstorm: {
		num: 763,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		name: "Max Hailstorm",
		pp: 10,
		priority: 0,
		flags: {},
		isMax: true,
		self: {
			onHit(source) {
				if (!source.volatiles['dynamax']) return;
				this.field.setWeather('hail');
			},
		},
		target: "adjacentFoe",
		type: "Ice",
		contestType: "Cool",
	},
	maxknuckle: {
		num: 761,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		name: "Max Knuckle",
		pp: 10,
		priority: 0,
		flags: {},
		isMax: true,
		self: {
			onHit(source) {
				if (!source.volatiles['dynamax']) return;
				for (const pokemon of source.alliesAndSelf()) {
					this.boost({atk: 1}, pokemon);
				}
			},
		},
		target: "adjacentFoe",
		type: "Fighting",
		contestType: "Cool",
	},
	maxlightning: {
		num: 759,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		name: "Max Lightning",
		pp: 10,
		priority: 0,
		flags: {},
		isMax: true,
		self: {
			onHit(source) {
				if (!source.volatiles['dynamax']) return;
				this.field.setTerrain('electricterrain');
			},
		},
		target: "adjacentFoe",
		type: "Electric",
		contestType: "Cool",
	},
	maxmindstorm: {
		num: 769,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		name: "Max Mindstorm",
		pp: 10,
		priority: 0,
		flags: {},
		isMax: true,
		self: {
			onHit(source) {
				if (!source.volatiles['dynamax']) return;
				this.field.setTerrain('psychicterrain');
			},
		},
		target: "adjacentFoe",
		type: "Psychic",
		contestType: "Cool",
	},
	maxooze: {
		num: 764,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		name: "Max Ooze",
		pp: 10,
		priority: 0,
		flags: {},
		isMax: true,
		self: {
			onHit(source) {
				if (!source.volatiles['dynamax']) return;
				for (const pokemon of source.alliesAndSelf()) {
					this.boost({spa: 1}, pokemon);
				}
			},
		},
		target: "adjacentFoe",
		type: "Poison",
		contestType: "Cool",
	},
	maxovergrowth: {
		num: 773,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		name: "Max Overgrowth",
		pp: 10,
		priority: 0,
		flags: {},
		isMax: true,
		self: {
			onHit(source) {
				if (!source.volatiles['dynamax']) return;
				this.field.setTerrain('grassyterrain');
			},
		},
		target: "adjacentFoe",
		type: "Grass",
		contestType: "Cool",
	},
	maxphantasm: {
		num: 762,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		name: "Max Phantasm",
		pp: 10,
		priority: 0,
		flags: {},
		isMax: true,
		self: {
			onHit(source) {
				if (!source.volatiles['dynamax']) return;
				for (const pokemon of source.foes()) {
					this.boost({def: -1}, pokemon);
				}
			},
		},
		target: "adjacentFoe",
		type: "Ghost",
		contestType: "Cool",
	},
	maxquake: {
		num: 771,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		name: "Max Quake",
		pp: 10,
		priority: 0,
		flags: {},
		isMax: true,
		self: {
			onHit(source) {
				if (!source.volatiles['dynamax']) return;
				for (const pokemon of source.alliesAndSelf()) {
					this.boost({spd: 1}, pokemon);
				}
			},
		},
		target: "adjacentFoe",
		type: "Ground",
		contestType: "Cool",
	},
	maxrockfall: {
		num: 770,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		name: "Max Rockfall",
		pp: 10,
		priority: 0,
		flags: {},
		isMax: true,
		self: {
			onHit(source) {
				if (!source.volatiles['dynamax']) return;
				this.field.setWeather('sandstorm');
			},
		},
		target: "adjacentFoe",
		type: "Rock",
		contestType: "Cool",
	},
	maxstarfall: {
		num: 767,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		name: "Max Starfall",
		pp: 10,
		priority: 0,
		flags: {},
		isMax: true,
		self: {
			onHit(source) {
				if (!source.volatiles['dynamax']) return;
				this.field.setTerrain('mistyterrain');
			},
		},
		target: "adjacentFoe",
		type: "Fairy",
		contestType: "Cool",
	},
	maxsteelspike: {
		num: 774,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		name: "Max Steelspike",
		pp: 10,
		priority: 0,
		flags: {},
		isMax: true,
		self: {
			onHit(source) {
				if (!source.volatiles['dynamax']) return;
				for (const pokemon of source.alliesAndSelf()) {
					this.boost({def: 1}, pokemon);
				}
			},
		},
		target: "adjacentFoe",
		type: "Steel",
		contestType: "Cool",
	},
	maxstrike: {
		num: 760,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		name: "Max Strike",
		pp: 10,
		priority: 0,
		flags: {},
		isMax: true,
		self: {
			onHit(source) {
				if (!source.volatiles['dynamax']) return;
				for (const pokemon of source.foes()) {
					this.boost({spe: -1}, pokemon);
				}
			},
		},
		target: "adjacentFoe",
		type: "Normal",
		contestType: "Cool",
	},
	maxwyrmwind: {
		num: 768,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		name: "Max Wyrmwind",
		pp: 10,
		priority: 0,
		flags: {},
		isMax: true,
		self: {
			onHit(source) {
				if (!source.volatiles['dynamax']) return;
				for (const pokemon of source.foes()) {
					this.boost({atk: -1}, pokemon);
				}
			},
		},
		target: "adjacentFoe",
		type: "Dragon",
		contestType: "Cool",
	},
	meanlook: {
		num: 212,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Mean Look",
		pp: 5,
		priority: 0,
		flags: {reflectable: 1, mirror: 1},
		onHit(target, source, move) {
			return target.addVolatile('trapped', source, move, 'trapper');
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {boost: {spd: 1}},
		contestType: "Beautiful",
	},
	meditate: {
		num: 96,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Past",
		name: "Meditate",
		pp: 40,
		priority: 0,
		flags: {snatch: 1},
		boosts: {
			atk: 1,
		},
		secondary: null,
		target: "self",
		type: "Psychic",
		zMove: {boost: {atk: 1}},
		contestType: "Beautiful",
	},
	mefirst: {
		num: 382,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Past",
		name: "Me First",
		pp: 20,
		priority: 0,
		flags: {protect: 1, authentic: 1},
		onTryHit(target, pokemon) {
			const action = this.queue.willMove(target);
			if (!action) return false;

			const noMeFirst = [
				'beakblast', 'chatter', 'counter', 'covet', 'focuspunch', 'mefirst', 'metalburst', 'mirrorcoat', 'shelltrap', 'struggle', 'thief',
			];
			const move = this.dex.getActiveMove(action.move.id);
			if (action.zmove || move.isZ || move.isMax) return false;
			if (target.volatiles['mustrecharge']) return false;
			if (move.category === 'Status' || noMeFirst.includes(move.id)) return false;

			pokemon.addVolatile('mefirst');
			this.actions.useMove(move, pokemon, target);
			return null;
		},
		condition: {
			duration: 1,
			onBasePowerPriority: 12,
			onBasePower(basePower) {
				return this.chainModify(1.5);
			},
		},
		secondary: null,
		target: "adjacentFoe",
		type: "Normal",
		zMove: {boost: {spe: 2}},
		contestType: "Clever",
	},
	megadrain: {
		num: 72,
		accuracy: 100,
		basePower: 40,
		category: "Special",
		name: "Mega Drain",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1, heal: 1},
		drain: [1, 2],
		secondary: null,
		target: "normal",
		type: "Grass",
		zMove: {basePower: 120},
		contestType: "Clever",
	},
	megahorn: {
		num: 224,
		accuracy: 85,
		basePower: 120,
		category: "Physical",
		name: "Megahorn",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Bug",
		contestType: "Cool",
	},
	megakick: {
		num: 25,
		accuracy: 75,
		basePower: 120,
		category: "Physical",
		name: "Mega Kick",
		pp: 5,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Normal",
		contestType: "Cool",
	},
	megapunch: {
		num: 5,
		accuracy: 85,
		basePower: 80,
		category: "Physical",
		name: "Mega Punch",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, punch: 1},
		secondary: null,
		target: "normal",
		type: "Normal",
		contestType: "Tough",
	},
	memento: {
		num: 262,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Memento",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		boosts: {
			atk: -2,
			spa: -2,
		},
		selfdestruct: "ifHit",
		secondary: null,
		target: "normal",
		type: "Dark",
		zMove: {effect: 'healreplacement'},
		contestType: "Tough",
	},
	menacingmoonrazemaelstrom: {
		num: 725,
		accuracy: true,
		basePower: 200,
		category: "Special",
		isNonstandard: "Past",
		name: "Menacing Moonraze Maelstrom",
		pp: 1,
		priority: 0,
		flags: {},
		isZ: "lunaliumz",
		ignoreAbility: true,
		secondary: null,
		target: "normal",
		type: "Ghost",
		contestType: "Cool",
	},
	metalburst: {
		num: 368,
		accuracy: 100,
		basePower: 0,
		damageCallback(pokemon) {
			const lastDamagedBy = pokemon.getLastDamagedBy(true);
			if (lastDamagedBy !== undefined) {
				return (lastDamagedBy.damage * 1.5) || 1;
			}
			return 0;
		},
		category: "Physical",
		name: "Metal Burst",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onTryHit(target, source, move) {
			const lastDamagedBy = source.getLastDamagedBy(true);
			if (lastDamagedBy === undefined || !lastDamagedBy.thisTurn) return false;
		},
		onModifyTarget(targetRelayVar, source, target, move) {
			const lastDamagedBy = source.getLastDamagedBy(true);
			if (lastDamagedBy) {
				targetRelayVar.target = this.getAtSlot(lastDamagedBy.slot);
			}
		},
		secondary: null,
		target: "scripted",
		type: "Steel",
		contestType: "Cool",
	},
	metalclaw: {
		num: 232,
		accuracy: 95,
		basePower: 50,
		category: "Physical",
		name: "Metal Claw",
		pp: 35,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 10,
			self: {
				boosts: {
					atk: 1,
				},
			},
		},
		target: "normal",
		type: "Steel",
		contestType: "Cool",
	},
	metalsound: {
		num: 319,
		accuracy: 85,
		basePower: 0,
		category: "Status",
		name: "Metal Sound",
		pp: 40,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1, sound: 1, authentic: 1, mystery: 1},
		boosts: {
			spd: -2,
		},
		secondary: null,
		target: "normal",
		type: "Steel",
		zMove: {boost: {spa: 1}},
		contestType: "Clever",
	},
	meteorassault: {
		num: 794,
		accuracy: 100,
		basePower: 150,
		category: "Physical",
		name: "Meteor Assault",
		pp: 5,
		priority: 0,
		flags: {protect: 1, recharge: 1, mirror: 1},
		self: {
			volatileStatus: 'mustrecharge',
		},
		secondary: null,
		target: "normal",
		type: "Fighting",
	},
	meteorbeam: {
		num: 800,
		accuracy: 90,
		basePower: 120,
		category: "Special",
		name: "Meteor Beam",
		pp: 10,
		priority: 0,
		flags: {charge: 1, protect: 1, mirror: 1},
		onTryMove(attacker, defender, move) {
			if (attacker.removeVolatile(move.id)) {
				return;
			}
			this.add('-prepare', attacker, move.name);
			this.boost({spa: 1}, attacker, attacker, move);
			if (!this.runEvent('ChargeMove', attacker, defender, move)) {
				return;
			}
			attacker.addVolatile('twoturnmove', defender);
			return null;
		},
		secondary: null,
		target: "normal",
		type: "Rock",
	},
	meteormash: {
		num: 309,
		accuracy: 90,
		basePower: 90,
		category: "Physical",
		name: "Meteor Mash",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, punch: 1},
		secondary: {
			chance: 20,
			self: {
				boosts: {
					atk: 1,
				},
			},
		},
		target: "normal",
		type: "Steel",
		contestType: "Cool",
	},
	metronome: {
		num: 118,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Metronome",
		pp: 10,
		priority: 0,
		flags: {},
		noMetronome: [
			"After You", "Apple Acid", "Assist", "Astral Barrage", "Aura Wheel", "Baneful Bunker", "Beak Blast", "Behemoth Bash", "Behemoth Blade", "Belch", "Bestow", "Body Press", "Branch Poke", "Breaking Swipe", "Celebrate", "Chatter", "Clangorous Soul", "Copycat", "Counter", "Covet", "Crafty Shield", "Decorate", "Destiny Bond", "Detect", "Diamond Storm", "Double Iron Bash", "Dragon Ascent", "Dragon Energy", "Drum Beating", "Dynamax Cannon", "Endure", "Eternabeam", "False Surrender", "Feint", "Fiery Wrath", "Fleur Cannon", "Focus Punch", "Follow Me", "Freeze Shock", "Freezing Glare", "Glacial Lance", "Grav Apple", "Helping Hand", "Hold Hands", "Hyperspace Fury", "Hyperspace Hole", "Ice Burn", "Instruct", "Jungle Healing", "King's Shield", "Life Dew", "Light of Ruin", "Mat Block", "Me First", "Meteor Assault", "Metronome", "Mimic", "Mind Blown", "Mirror Coat", "Mirror Move", "Moongeist Beam", "Nature Power", "Nature's Madness", "Obstruct", "Origin Pulse", "Overdrive", "Photon Geyser", "Plasma Fists", "Precipice Blades", "Protect", "Pyro Ball", "Quash", "Quick Guard", "Rage Powder", "Relic Song", "Secret Sword", "Shell Trap", "Sketch", "Sleep Talk", "Snap Trap", "Snarl", "Snatch", "Snore", "Spectral Thief", "Spiky Shield", "Spirit Break", "Spotlight", "Steam Eruption", "Steel Beam", "Strange Steam", "Struggle", "Sunsteel Strike", "Surging Strikes", "Switcheroo", "Techno Blast", "Thief", "Thousand Arrows", "Thousand Waves", "Thunder Cage", "Thunderous Kick", "Transform", "Trick", "V-create", "Wicked Blow", "Wide Guard",
		],
		onHit(target, source, effect) {
			const moves: MoveData[] = [];
			for (const id in Moves) {
				const move = Moves[id];
				if (move.realMove) continue;
				if (move.isZ || move.isMax || move.isNonstandard) continue;
				if (effect.noMetronome!.includes(move.name)) continue;
				if (this.dex.moves.get(id).gen > this.gen) continue;
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
		type: "Normal",
		contestType: "Cute",
	},
	milkdrink: {
		num: 208,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Milk Drink",
		pp: 10,
		priority: 0,
		flags: {snatch: 1, heal: 1},
		heal: [1, 2],
		secondary: null,
		target: "self",
		type: "Normal",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Cute",
	},
	mimic: {
		num: 102,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Mimic",
		pp: 10,
		priority: 0,
		flags: {protect: 1, authentic: 1, mystery: 1},
		onHit(target, source) {
			const disallowedMoves = ['chatter', 'dynamaxcannon', 'mimic', 'sketch', 'struggle', 'transform'];
			const move = target.lastMove;
			if (source.transformed || !move || disallowedMoves.includes(move.id) || source.moves.includes(move.id)) {
				return false;
			}
			if (move.isZ || move.isMax) return false;
			const mimicIndex = source.moves.indexOf('mimic');
			if (mimicIndex < 0) return false;

			source.moveSlots[mimicIndex] = {
				move: move.name,
				id: move.id,
				pp: move.pp,
				maxpp: move.pp,
				target: move.target,
				disabled: false,
				used: false,
				virtual: true,
			};
			this.add('-start', source, 'Mimic', move.name);
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {boost: {accuracy: 1}},
		contestType: "Cute",
	},
	mindblown: {
		num: 720,
		accuracy: 100,
		basePower: 150,
		category: "Special",
		name: "Mind Blown",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		mindBlownRecoil: true,
		onAfterMove(pokemon, target, move) {
			if (move.mindBlownRecoil && !move.multihit) {
				this.damage(Math.round(pokemon.maxhp / 2), pokemon, pokemon, this.dex.conditions.get('Mind Blown'), true);
			}
		},
		secondary: null,
		target: "allAdjacent",
		type: "Fire",
		contestType: "Cool",
	},
	mindreader: {
		num: 170,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Mind Reader",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onTryHit(target, source) {
			if (source.volatiles['lockon']) return false;
		},
		onHit(target, source) {
			source.addVolatile('lockon', target);
			this.add('-activate', source, 'move: Mind Reader', '[of] ' + target);
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {boost: {spa: 1}},
		contestType: "Clever",
	},
	minimize: {
		num: 107,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Minimize",
		pp: 10,
		priority: 0,
		flags: {snatch: 1},
		volatileStatus: 'minimize',
		condition: {
			noCopy: true,
			onSourceModifyDamage(damage, source, target, move) {
				const boostedMoves = [
					'stomp', 'steamroller', 'bodyslam', 'flyingpress', 'dragonrush', 'heatcrash', 'heavyslam', 'maliciousmoonsault',
				];
				if (boostedMoves.includes(move.id)) {
					return this.chainModify(2);
				}
			},
			onAccuracy(accuracy, target, source, move) {
				const boostedMoves = [
					'stomp', 'steamroller', 'bodyslam', 'flyingpress', 'dragonrush', 'heatcrash', 'heavyslam', 'maliciousmoonsault',
				];
				if (boostedMoves.includes(move.id)) {
					return true;
				}
				return accuracy;
			},
		},
		boosts: {
			evasion: 2,
		},
		secondary: null,
		target: "self",
		type: "Normal",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Cute",
	},
	miracleeye: {
		num: 357,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Past",
		name: "Miracle Eye",
		pp: 40,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1, authentic: 1},
		volatileStatus: 'miracleeye',
		onTryHit(target) {
			if (target.volatiles['foresight']) return false;
		},
		condition: {
			noCopy: true,
			onStart(pokemon) {
				this.add('-start', pokemon, 'Miracle Eye');
			},
			onNegateImmunity(pokemon, type) {
				if (pokemon.hasType('Dark') && type === 'Psychic') return false;
			},
			onModifyBoost(boosts) {
				if (boosts.evasion && boosts.evasion > 0) {
					boosts.evasion = 0;
				}
			},
		},
		secondary: null,
		target: "normal",
		type: "Psychic",
		zMove: {boost: {spa: 1}},
		contestType: "Clever",
	},
	mirrorcoat: {
		num: 243,
		accuracy: 100,
		basePower: 0,
		damageCallback(pokemon) {
			if (!pokemon.volatiles['mirrorcoat']) return 0;
			return pokemon.volatiles['mirrorcoat'].damage || 1;
		},
		category: "Special",
		name: "Mirror Coat",
		pp: 20,
		priority: -5,
		flags: {protect: 1},
		beforeTurnCallback(pokemon) {
			pokemon.addVolatile('mirrorcoat');
		},
		onTryHit(target, source, move) {
			if (!source.volatiles['mirrorcoat']) return false;
			if (source.volatiles['mirrorcoat'].slot === null) return false;
		},
		condition: {
			duration: 1,
			noCopy: true,
			onStart(target, source, move) {
				this.effectState.slot = null;
				this.effectState.damage = 0;
			},
			onRedirectTargetPriority: -1,
			onRedirectTarget(target, source, source2, move) {
				if (move.id !== 'mirrorcoat') return;
				if (source !== this.effectState.target || !this.effectState.slot) return;
				return this.getAtSlot(this.effectState.slot);
			},
			onDamagingHit(damage, target, source, move) {
				if (!source.isAlly(target) && this.getCategory(move) === 'Special') {
					this.effectState.slot = source.getSlot();
					this.effectState.damage = 2 * damage;
				}
			},
		},
		secondary: null,
		target: "scripted",
		type: "Psychic",
		contestType: "Beautiful",
	},
	mirrormove: {
		num: 119,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Past",
		name: "Mirror Move",
		pp: 20,
		priority: 0,
		flags: {},
		onTryHit(target, pokemon) {
			const move = target.lastMove;
			if (!move?.flags['mirror'] || move.isZ || move.isMax) {
				return false;
			}
			this.actions.useMove(move.id, pokemon, target);
			return null;
		},
		secondary: null,
		target: "normal",
		type: "Flying",
		zMove: {boost: {atk: 2}},
		contestType: "Clever",
	},
	mirrorshot: {
		num: 429,
		accuracy: 85,
		basePower: 65,
		category: "Special",
		isNonstandard: "Past",
		name: "Mirror Shot",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 30,
			boosts: {
				accuracy: -1,
			},
		},
		target: "normal",
		type: "Steel",
		contestType: "Beautiful",
	},
	mist: {
		num: 54,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Mist",
		pp: 30,
		priority: 0,
		flags: {snatch: 1},
		sideCondition: 'mist',
		condition: {
			duration: 5,
			onBoost(boost, target, source, effect) {
				if (effect.effectType === 'Move' && effect.infiltrates && !target.isAlly(source)) return;
				if (source && target !== source) {
					let showMsg = false;
					let i: BoostID;
					for (i in boost) {
						if (boost[i]! < 0) {
							delete boost[i];
							showMsg = true;
						}
					}
					if (showMsg && !(effect as ActiveMove).secondaries) {
						this.add('-activate', target, 'move: Mist');
					}
				}
			},
			onSideStart(side) {
				this.add('-sidestart', side, 'Mist');
			},
			onSideResidualOrder: 26,
			onSideResidualSubOrder: 4,
			onSideEnd(side) {
				this.add('-sideend', side, 'Mist');
			},
		},
		secondary: null,
		target: "allySide",
		type: "Ice",
		zMove: {effect: 'heal'},
		contestType: "Beautiful",
	},
	mistball: {
		num: 296,
		accuracy: 100,
		basePower: 70,
		category: "Special",
		name: "Mist Ball",
		pp: 5,
		priority: 0,
		flags: {bullet: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 50,
			boosts: {
				spa: -1,
			},
		},
		target: "normal",
		type: "Psychic",
		contestType: "Clever",
	},
	mistyexplosion: {
		num: 802,
		accuracy: 100,
		basePower: 100,
		category: "Special",
		name: "Misty Explosion",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		selfdestruct: "always",
		onBasePower(basePower, source) {
			if (this.field.isTerrain('mistyterrain') && source.isGrounded()) {
				this.debug('misty terrain boost');
				return this.chainModify(1.5);
			}
		},
		secondary: null,
		target: "allAdjacent",
		type: "Fairy",
	},
	mistyterrain: {
		num: 581,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Misty Terrain",
		pp: 10,
		priority: 0,
		flags: {nonsky: 1},
		terrain: 'mistyterrain',
		condition: {
			duration: 5,
			durationCallback(source, effect) {
				if (source?.hasItem('terrainextender')) {
					return 8;
				}
				return 5;
			},
			onSetStatus(status, target, source, effect) {
				if (!target.isGrounded() || target.isSemiInvulnerable()) return;
				if (effect && ((effect as Move).status || effect.id === 'yawn')) {
					this.add('-activate', target, 'move: Misty Terrain');
				}
				return false;
			},
			onTryAddVolatile(status, target, source, effect) {
				if (!target.isGrounded() || target.isSemiInvulnerable()) return;
				if (status.id === 'confusion') {
					if (effect.effectType === 'Move' && !effect.secondaries) this.add('-activate', target, 'move: Misty Terrain');
					return null;
				}
			},
			onBasePowerPriority: 6,
			onBasePower(basePower, attacker, defender, move) {
				if (move.type === 'Dragon' && defender.isGrounded() && !defender.isSemiInvulnerable()) {
					this.debug('misty terrain weaken');
					return this.chainModify(0.5);
				}
			},
			onFieldStart(field, source, effect) {
				if (effect?.effectType === 'Ability') {
					this.add('-fieldstart', 'move: Misty Terrain', '[from] ability: ' + effect, '[of] ' + source);
				} else {
					this.add('-fieldstart', 'move: Misty Terrain');
				}
			},
			onFieldResidualOrder: 27,
			onFieldResidualSubOrder: 7,
			onFieldEnd() {
				this.add('-fieldend', 'Misty Terrain');
			},
		},
		secondary: null,
		target: "all",
		type: "Fairy",
		zMove: {boost: {spd: 1}},
		contestType: "Beautiful",
	},
	moonblast: {
		num: 585,
		accuracy: 100,
		basePower: 95,
		category: "Special",
		name: "Moonblast",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 30,
			boosts: {
				spa: -1,
			},
		},
		target: "normal",
		type: "Fairy",
		contestType: "Beautiful",
	},
	moongeistbeam: {
		num: 714,
		accuracy: 100,
		basePower: 100,
		category: "Special",
		name: "Moongeist Beam",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		ignoreAbility: true,
		secondary: null,
		target: "normal",
		type: "Ghost",
		contestType: "Cool",
	},
	moonlight: {
		num: 236,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Moonlight",
		pp: 5,
		priority: 0,
		flags: {snatch: 1, heal: 1},
		onHit(pokemon) {
			let factor = 0.5;
			switch (pokemon.effectiveWeather()) {
			case 'sunnyday':
			case 'desolateland':
				factor = 0.667;
				break;
			case 'raindance':
			case 'primordialsea':
			case 'sandstorm':
			case 'hail':
				factor = 0.25;
				break;
			}
			return !!this.heal(this.modify(pokemon.maxhp, factor));
		},
		secondary: null,
		target: "self",
		type: "Fairy",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Beautiful",
	},
	morningsun: {
		num: 234,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Morning Sun",
		pp: 5,
		priority: 0,
		flags: {snatch: 1, heal: 1},
		onHit(pokemon) {
			let factor = 0.5;
			switch (pokemon.effectiveWeather()) {
			case 'sunnyday':
			case 'desolateland':
				factor = 0.667;
				break;
			case 'raindance':
			case 'primordialsea':
			case 'sandstorm':
			case 'hail':
				factor = 0.25;
				break;
			}
			return !!this.heal(this.modify(pokemon.maxhp, factor));
		},
		secondary: null,
		target: "self",
		type: "Normal",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Beautiful",
	},
	mudbomb: {
		num: 426,
		accuracy: 85,
		basePower: 65,
		category: "Special",
		isNonstandard: "Past",
		name: "Mud Bomb",
		pp: 10,
		priority: 0,
		flags: {bullet: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 30,
			boosts: {
				accuracy: -1,
			},
		},
		target: "normal",
		type: "Ground",
		contestType: "Cute",
	},
	mudshot: {
		num: 341,
		accuracy: 95,
		basePower: 55,
		category: "Special",
		name: "Mud Shot",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 100,
			boosts: {
				spe: -1,
			},
		},
		target: "normal",
		type: "Ground",
		contestType: "Tough",
	},
	mudslap: {
		num: 189,
		accuracy: 100,
		basePower: 20,
		category: "Special",
		name: "Mud-Slap",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 100,
			boosts: {
				accuracy: -1,
			},
		},
		target: "normal",
		type: "Ground",
		contestType: "Cute",
	},
	mudsport: {
		num: 300,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Past",
		name: "Mud Sport",
		pp: 15,
		priority: 0,
		flags: {nonsky: 1},
		pseudoWeather: 'mudsport',
		condition: {
			duration: 5,
			onFieldStart(field, source) {
				this.add('-fieldstart', 'move: Mud Sport', '[of] ' + source);
			},
			onBasePowerPriority: 1,
			onBasePower(basePower, attacker, defender, move) {
				if (move.type === 'Electric') {
					this.debug('mud sport weaken');
					return this.chainModify([1352, 4096]);
				}
			},
			onFieldResidualOrder: 27,
			onFieldResidualSubOrder: 4,
			onFieldEnd() {
				this.add('-fieldend', 'move: Mud Sport');
			},
		},
		secondary: null,
		target: "all",
		type: "Ground",
		zMove: {boost: {spd: 1}},
		contestType: "Cute",
	},
	muddywater: {
		num: 330,
		accuracy: 85,
		basePower: 90,
		category: "Special",
		name: "Muddy Water",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, nonsky: 1},
		secondary: {
			chance: 30,
			boosts: {
				accuracy: -1,
			},
		},
		target: "allAdjacentFoes",
		type: "Water",
		contestType: "Tough",
	},
	multiattack: {
		num: 718,
		accuracy: 100,
		basePower: 120,
		category: "Physical",
		name: "Multi-Attack",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onModifyType(move, pokemon) {
			if (pokemon.ignoringItem()) return;
			move.type = this.runEvent('Memory', pokemon, null, move, 'Normal');
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {basePower: 185},
		maxMove: {basePower: 95},
		contestType: "Tough",
	},
	mysticalfire: {
		num: 595,
		accuracy: 100,
		basePower: 75,
		category: "Special",
		name: "Mystical Fire",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 100,
			boosts: {
				spa: -1,
			},
		},
		target: "normal",
		type: "Fire",
		contestType: "Beautiful",
	},
	nastyplot: {
		num: 417,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Nasty Plot",
		pp: 20,
		priority: 0,
		flags: {snatch: 1},
		boosts: {
			spa: 2,
		},
		secondary: null,
		target: "self",
		type: "Dark",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Clever",
	},
	naturalgift: {
		num: 363,
		accuracy: 100,
		basePower: 0,
		category: "Physical",
		isNonstandard: "Past",
		name: "Natural Gift",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onModifyType(move, pokemon) {
			if (pokemon.ignoringItem()) return;
			const item = pokemon.getItem();
			if (!item.naturalGift) return;
			move.type = item.naturalGift.type;
		},
		onPrepareHit(target, pokemon, move) {
			if (pokemon.ignoringItem()) return false;
			const item = pokemon.getItem();
			if (!item.naturalGift) return false;
			move.basePower = item.naturalGift.basePower;
			pokemon.setItem('');
			pokemon.lastItem = item.id;
			pokemon.usedItemThisTurn = true;
			this.runEvent('AfterUseItem', pokemon, null, null, item);
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {basePower: 160},
		maxMove: {basePower: 130},
		contestType: "Clever",
	},
	naturepower: {
		num: 267,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Nature Power",
		pp: 20,
		priority: 0,
		flags: {},
		onTryHit(target, pokemon) {
			let move = 'triattack';
			if (this.field.isTerrain('electricterrain')) {
				move = 'thunderbolt';
			} else if (this.field.isTerrain('grassyterrain')) {
				move = 'energyball';
			} else if (this.field.isTerrain('mistyterrain')) {
				move = 'moonblast';
			} else if (this.field.isTerrain('psychicterrain')) {
				move = 'psychic';
			}
			this.actions.useMove(move, pokemon, target);
			return null;
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		contestType: "Beautiful",
	},
	naturesmadness: {
		num: 717,
		accuracy: 90,
		basePower: 0,
		damageCallback(pokemon, target) {
			return this.clampIntRange(Math.floor(target.getUndynamaxedHP() / 2), 1);
		},
		category: "Special",
		name: "Nature's Madness",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Fairy",
		contestType: "Tough",
	},
	needlearm: {
		num: 302,
		accuracy: 100,
		basePower: 60,
		category: "Physical",
		isNonstandard: "Past",
		name: "Needle Arm",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 30,
			volatileStatus: 'flinch',
		},
		target: "normal",
		type: "Grass",
		contestType: "Clever",
	},
	neverendingnightmare: {
		num: 636,
		accuracy: true,
		basePower: 1,
		category: "Physical",
		isNonstandard: "Past",
		name: "Never-Ending Nightmare",
		pp: 1,
		priority: 0,
		flags: {},
		isZ: "ghostiumz",
		secondary: null,
		target: "normal",
		type: "Ghost",
		contestType: "Cool",
	},
	nightdaze: {
		num: 539,
		accuracy: 95,
		basePower: 85,
		category: "Special",
		name: "Night Daze",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 40,
			boosts: {
				accuracy: -1,
			},
		},
		target: "normal",
		type: "Dark",
		contestType: "Cool",
	},
	nightmare: {
		num: 171,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		isNonstandard: "Past",
		name: "Nightmare",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		volatileStatus: 'nightmare',
		condition: {
			noCopy: true,
			onStart(pokemon) {
				if (pokemon.status !== 'slp' && !pokemon.hasAbility('comatose')) {
					return false;
				}
				this.add('-start', pokemon, 'Nightmare');
			},
			onResidualOrder: 11,
			onResidual(pokemon) {
				this.damage(pokemon.baseMaxhp / 4);
			},
		},
		secondary: null,
		target: "normal",
		type: "Ghost",
		zMove: {boost: {spa: 1}},
		contestType: "Clever",
	},
	nightshade: {
		num: 101,
		accuracy: 100,
		basePower: 0,
		damage: 'level',
		category: "Special",
		name: "Night Shade",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Ghost",
		contestType: "Clever",
	},
	nightslash: {
		num: 400,
		accuracy: 100,
		basePower: 70,
		category: "Physical",
		name: "Night Slash",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		critRatio: 2,
		secondary: null,
		target: "normal",
		type: "Dark",
		contestType: "Cool",
	},
	nobleroar: {
		num: 568,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Noble Roar",
		pp: 30,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1, sound: 1, authentic: 1},
		boosts: {
			atk: -1,
			spa: -1,
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {boost: {def: 1}},
		contestType: "Tough",
	},
	noretreat: {
		num: 748,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "No Retreat",
		pp: 5,
		priority: 0,
		flags: {snatch: 1},
		volatileStatus: 'noretreat',
		onTry(source, target, move) {
			if (source.volatiles['noretreat']) return false;
			if (source.volatiles['trapped']) {
				delete move.volatileStatus;
			}
		},
		condition: {
			onStart(pokemon) {
				this.add('-start', pokemon, 'move: No Retreat');
			},
			onTrapPokemon(pokemon) {
				pokemon.tryTrap();
			},
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
		type: "Fighting",
	},
	nuzzle: {
		num: 609,
		accuracy: 100,
		basePower: 20,
		category: "Physical",
		name: "Nuzzle",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 100,
			status: 'par',
		},
		target: "normal",
		type: "Electric",
		contestType: "Cute",
	},
	oblivionwing: {
		num: 613,
		accuracy: 100,
		basePower: 80,
		category: "Special",
		name: "Oblivion Wing",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, distance: 1, heal: 1},
		drain: [3, 4],
		secondary: null,
		target: "any",
		type: "Flying",
		contestType: "Cool",
	},
	obstruct: {
		num: 792,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Obstruct",
		pp: 10,
		priority: 4,
		flags: {},
		stallingMove: true,
		volatileStatus: 'obstruct',
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
					if (['gmaxoneblow', 'gmaxrapidflow'].includes(move.id)) return;
					if (move.isZ || move.isMax) target.getMoveHitData(move).zBrokeProtect = true;
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
				if (this.checkMoveMakesContact(move, source, target)) {
					this.boost({def: -2}, source, target, this.dex.getActiveMove("Obstruct"));
				}
				return this.NOT_FAIL;
			},
			onHit(target, source, move) {
				if (move.isZOrMaxPowered && this.checkMoveMakesContact(move, source, target)) {
					this.boost({def: -2}, source, target, this.dex.getActiveMove("Obstruct"));
				}
			},
		},
		secondary: null,
		target: "self",
		type: "Dark",
	},
	oceanicoperetta: {
		num: 697,
		accuracy: true,
		basePower: 195,
		category: "Special",
		isNonstandard: "Past",
		name: "Oceanic Operetta",
		pp: 1,
		priority: 0,
		flags: {},
		isZ: "primariumz",
		secondary: null,
		target: "normal",
		type: "Water",
		contestType: "Cool",
	},
	octazooka: {
		num: 190,
		accuracy: 85,
		basePower: 65,
		category: "Special",
		name: "Octazooka",
		pp: 10,
		priority: 0,
		flags: {bullet: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 50,
			boosts: {
				accuracy: -1,
			},
		},
		target: "normal",
		type: "Water",
		contestType: "Tough",
	},
	octolock: {
		num: 753,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Octolock",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onTryImmunity(target) {
			return this.dex.getImmunity('trapped', target);
		},
		volatileStatus: 'octolock',
		condition: {
			onStart(pokemon, source) {
				this.add('-start', pokemon, 'move: Octolock', '[of] ' + source);
			},
			onResidualOrder: 14,
			onResidual(pokemon) {
				const source = this.effectState.source;
				if (source && (!source.isActive || source.hp <= 0 || !source.activeTurns)) {
					delete pokemon.volatiles['octolock'];
					this.add('-end', pokemon, 'Octolock', '[partiallytrapped]', '[silent]');
					return;
				}
				this.boost({def: -1, spd: -1}, pokemon, source, this.dex.getActiveMove('octolock'));
			},
			onTrapPokemon(pokemon) {
				if (this.effectState.source && this.effectState.source.isActive) pokemon.tryTrap();
			},
		},
		secondary: null,
		target: "normal",
		type: "Fighting",
	},
	odorsleuth: {
		num: 316,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Past",
		name: "Odor Sleuth",
		pp: 40,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1, authentic: 1, mystery: 1},
		volatileStatus: 'foresight',
		onTryHit(target) {
			if (target.volatiles['miracleeye']) return false;
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {boost: {atk: 1}},
		contestType: "Clever",
	},
	ominouswind: {
		num: 466,
		accuracy: 100,
		basePower: 60,
		category: "Special",
		isNonstandard: "Past",
		name: "Ominous Wind",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 10,
			self: {
				boosts: {
					atk: 1,
					def: 1,
					spa: 1,
					spd: 1,
					spe: 1,
				},
			},
		},
		target: "normal",
		type: "Ghost",
		contestType: "Beautiful",
	},
	originpulse: {
		num: 618,
		accuracy: 85,
		basePower: 110,
		category: "Special",
		name: "Origin Pulse",
		pp: 10,
		priority: 0,
		flags: {protect: 1, pulse: 1, mirror: 1},
		target: "allAdjacentFoes",
		type: "Water",
		contestType: "Beautiful",
	},
	outrage: {
		num: 200,
		accuracy: 100,
		basePower: 120,
		category: "Physical",
		name: "Outrage",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		self: {
			volatileStatus: 'lockedmove',
		},
		onAfterMove(pokemon) {
			if (pokemon.volatiles['lockedmove'] && pokemon.volatiles['lockedmove'].duration === 1) {
				pokemon.removeVolatile('lockedmove');
			}
		},
		secondary: null,
		target: "randomNormal",
		type: "Dragon",
		contestType: "Cool",
	},
	overdrive: {
		num: 786,
		accuracy: 100,
		basePower: 80,
		category: "Special",
		name: "Overdrive",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, sound: 1, authentic: 1},
		secondary: null,
		target: "allAdjacentFoes",
		type: "Electric",
	},
	overheat: {
		num: 315,
		accuracy: 90,
		basePower: 130,
		category: "Special",
		name: "Overheat",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		self: {
			boosts: {
				spa: -2,
			},
		},
		secondary: null,
		target: "normal",
		type: "Fire",
		contestType: "Beautiful",
	},
	painsplit: {
		num: 220,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Pain Split",
		pp: 20,
		priority: 0,
		flags: {protect: 1, mirror: 1, mystery: 1},
		onHit(target, pokemon) {
			const targetHP = target.getUndynamaxedHP();
			const averagehp = Math.floor((targetHP + pokemon.hp) / 2) || 1;
			const targetChange = targetHP - averagehp;
			target.sethp(target.hp - targetChange);
			this.add('-sethp', target, target.getHealth, '[from] move: Pain Split', '[silent]');
			pokemon.sethp(averagehp);
			this.add('-sethp', pokemon, pokemon.getHealth, '[from] move: Pain Split');
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {boost: {def: 1}},
		contestType: "Clever",
	},
	paleowave: {
		num: 0,
		accuracy: 100,
		basePower: 85,
		category: "Special",
		isNonstandard: "CAP",
		name: "Paleo Wave",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 20,
			boosts: {
				atk: -1,
			},
		},
		target: "normal",
		type: "Rock",
		contestType: "Beautiful",
	},
	paraboliccharge: {
		num: 570,
		accuracy: 100,
		basePower: 65,
		category: "Special",
		name: "Parabolic Charge",
		pp: 20,
		priority: 0,
		flags: {protect: 1, mirror: 1, heal: 1},
		drain: [1, 2],
		secondary: null,
		target: "allAdjacent",
		type: "Electric",
		contestType: "Clever",
	},
	partingshot: {
		num: 575,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Parting Shot",
		pp: 20,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1, sound: 1, authentic: 1},
		onHit(target, source, move) {
			const success = this.boost({atk: -1, spa: -1}, target, source);
			if (!success && !target.hasAbility('mirrorarmor')) {
				delete move.selfSwitch;
			}
		},
		selfSwitch: true,
		secondary: null,
		target: "normal",
		type: "Dark",
		zMove: {effect: 'healreplacement'},
		contestType: "Cool",
	},
	payback: {
		num: 371,
		accuracy: 100,
		basePower: 50,
		basePowerCallback(pokemon, target, move) {
			if (target.newlySwitched || this.queue.willMove(target)) {
				this.debug('Payback NOT boosted');
				return move.basePower;
			}
			this.debug('Payback damage boost');
			return move.basePower * 2;
		},
		category: "Physical",
		name: "Payback",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Dark",
		contestType: "Tough",
	},
	payday: {
		num: 6,
		accuracy: 100,
		basePower: 40,
		category: "Physical",
		name: "Pay Day",
		pp: 20,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onHit() {
			this.add('-fieldactivate', 'move: Pay Day');
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		contestType: "Clever",
	},
	peck: {
		num: 64,
		accuracy: 100,
		basePower: 35,
		category: "Physical",
		name: "Peck",
		pp: 35,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, distance: 1},
		secondary: null,
		target: "any",
		type: "Flying",
		contestType: "Cool",
	},
	perishsong: {
		num: 195,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Perish Song",
		pp: 5,
		priority: 0,
		flags: {sound: 1, distance: 1, authentic: 1},
		onHitField(target, source, move) {
			let result = false;
			let message = false;
			for (const pokemon of this.getAllActive()) {
				if (this.runEvent('Invulnerability', pokemon, source, move) === false) {
					this.add('-miss', source, pokemon);
					result = true;
				} else if (this.runEvent('TryHit', pokemon, source, move) === null) {
					result = true;
				} else if (!pokemon.volatiles['perishsong']) {
					pokemon.addVolatile('perishsong');
					this.add('-start', pokemon, 'perish3', '[silent]');
					result = true;
					message = true;
				}
			}
			if (!result) return false;
			if (message) this.add('-fieldactivate', 'move: Perish Song');
		},
		condition: {
			duration: 4,
			onEnd(target) {
				this.add('-start', target, 'perish0');
				target.faint();
			},
			onResidualOrder: 24,
			onResidual(pokemon) {
				const duration = pokemon.volatiles['perishsong'].duration;
				this.add('-start', pokemon, 'perish' + duration);
			},
		},
		secondary: null,
		target: "all",
		type: "Normal",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Beautiful",
	},
	petalblizzard: {
		num: 572,
		accuracy: 100,
		basePower: 90,
		category: "Physical",
		name: "Petal Blizzard",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "allAdjacent",
		type: "Grass",
		contestType: "Beautiful",
	},
	petaldance: {
		num: 80,
		accuracy: 100,
		basePower: 120,
		category: "Special",
		name: "Petal Dance",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, dance: 1},
		self: {
			volatileStatus: 'lockedmove',
		},
		onAfterMove(pokemon) {
			if (pokemon.volatiles['lockedmove'] && pokemon.volatiles['lockedmove'].duration === 1) {
				pokemon.removeVolatile('lockedmove');
			}
		},
		secondary: null,
		target: "randomNormal",
		type: "Grass",
		contestType: "Beautiful",
	},
	phantomforce: {
		num: 566,
		accuracy: 100,
		basePower: 90,
		category: "Physical",
		name: "Phantom Force",
		pp: 10,
		priority: 0,
		flags: {contact: 1, charge: 1, mirror: 1},
		breaksProtect: true,
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
			onInvulnerability: false,
		},
		secondary: null,
		target: "normal",
		type: "Ghost",
		contestType: "Cool",
	},
	photongeyser: {
		num: 722,
		accuracy: 100,
		basePower: 100,
		category: "Special",
		name: "Photon Geyser",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onModifyMove(move, pokemon) {
			if (pokemon.getStat('atk', false, true) > pokemon.getStat('spa', false, true)) move.category = 'Physical';
		},
		ignoreAbility: true,
		secondary: null,
		target: "normal",
		type: "Psychic",
		contestType: "Cool",
	},
	pikapapow: {
		num: 732,
		accuracy: true,
		basePower: 0,
		basePowerCallback(pokemon) {
			return Math.floor((pokemon.happiness * 10) / 25) || 1;
		},
		category: "Special",
		isNonstandard: "LGPE",
		name: "Pika Papow",
		pp: 20,
		priority: 0,
		flags: {protect: 1},
		secondary: null,
		target: "normal",
		type: "Electric",
		contestType: "Cute",
	},
	pinmissile: {
		num: 42,
		accuracy: 95,
		basePower: 25,
		category: "Physical",
		name: "Pin Missile",
		pp: 20,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		multihit: [2, 5],
		secondary: null,
		target: "normal",
		type: "Bug",
		zMove: {basePower: 140},
		maxMove: {basePower: 130},
		contestType: "Cool",
	},
	plasmafists: {
		num: 721,
		accuracy: 100,
		basePower: 100,
		category: "Physical",
		name: "Plasma Fists",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, punch: 1},
		pseudoWeather: 'iondeluge',
		secondary: null,
		target: "normal",
		type: "Electric",
		contestType: "Cool",
	},
	playnice: {
		num: 589,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Play Nice",
		pp: 20,
		priority: 0,
		flags: {reflectable: 1, mirror: 1, authentic: 1},
		boosts: {
			atk: -1,
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {boost: {def: 1}},
		contestType: "Cute",
	},
	playrough: {
		num: 583,
		accuracy: 90,
		basePower: 90,
		category: "Physical",
		name: "Play Rough",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 10,
			boosts: {
				atk: -1,
			},
		},
		target: "normal",
		type: "Fairy",
		contestType: "Cute",
	},
	pluck: {
		num: 365,
		accuracy: 100,
		basePower: 60,
		category: "Physical",
		name: "Pluck",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, distance: 1},
		onHit(target, source) {
			const item = target.getItem();
			if (source.hp && item.isBerry && target.takeItem(source)) {
				this.add('-enditem', target, item.name, '[from] stealeat', '[move] Pluck', '[of] ' + source);
				if (this.singleEvent('Eat', item, null, source, null, null)) {
					this.runEvent('EatItem', source, null, null, item);
					if (item.id === 'leppaberry') target.staleness = 'external';
				}
				if (item.onEat) source.ateBerry = true;
			}
		},
		secondary: null,
		target: "any",
		type: "Flying",
		contestType: "Cute",
	},
	poisonfang: {
		num: 305,
		accuracy: 100,
		basePower: 50,
		category: "Physical",
		name: "Poison Fang",
		pp: 15,
		priority: 0,
		flags: {bite: 1, contact: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 50,
			status: 'tox',
		},
		target: "normal",
		type: "Poison",
		contestType: "Clever",
	},
	poisongas: {
		num: 139,
		accuracy: 90,
		basePower: 0,
		category: "Status",
		name: "Poison Gas",
		pp: 40,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1},
		status: 'psn',
		secondary: null,
		target: "allAdjacentFoes",
		type: "Poison",
		zMove: {boost: {def: 1}},
		contestType: "Clever",
	},
	poisonjab: {
		num: 398,
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		name: "Poison Jab",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 30,
			status: 'psn',
		},
		target: "normal",
		type: "Poison",
		contestType: "Tough",
	},
	poisonpowder: {
		num: 77,
		accuracy: 75,
		basePower: 0,
		category: "Status",
		name: "Poison Powder",
		pp: 35,
		priority: 0,
		flags: {powder: 1, protect: 1, reflectable: 1, mirror: 1},
		status: 'psn',
		secondary: null,
		target: "normal",
		type: "Poison",
		zMove: {boost: {def: 1}},
		contestType: "Clever",
	},
	poisonsting: {
		num: 40,
		accuracy: 100,
		basePower: 15,
		category: "Physical",
		name: "Poison Sting",
		pp: 35,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 30,
			status: 'psn',
		},
		target: "normal",
		type: "Poison",
		contestType: "Clever",
	},
	poisontail: {
		num: 342,
		accuracy: 100,
		basePower: 50,
		category: "Physical",
		name: "Poison Tail",
		pp: 25,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		critRatio: 2,
		secondary: {
			chance: 10,
			status: 'psn',
		},
		target: "normal",
		type: "Poison",
		contestType: "Clever",
	},
	pollenpuff: {
		num: 676,
		accuracy: 100,
		basePower: 90,
		category: "Special",
		name: "Pollen Puff",
		pp: 15,
		priority: 0,
		flags: {bullet: 1, protect: 1, mirror: 1},
		onTryHit(target, source, move) {
			if (source.isAlly(target)) {
				move.basePower = 0;
				move.infiltrates = true;
			}
		},
		onHit(target, source) {
			if (source.isAlly(target)) {
				if (!this.heal(Math.floor(target.baseMaxhp * 0.5))) {
					this.add('-immune', target);
				}
			}
		},
		secondary: null,
		target: "normal",
		type: "Bug",
		contestType: "Cute",
	},
	poltergeist: {
		num: 809,
		accuracy: 90,
		basePower: 110,
		category: "Physical",
		name: "Poltergeist",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onTry(source, target) {
			return !!target.item;
		},
		onTryHit(target, source, move) {
			this.add('-activate', target, 'move: Poltergeist', this.dex.items.get(target.item).name);
		},
		secondary: null,
		target: "normal",
		type: "Ghost",
	},
	pound: {
		num: 1,
		accuracy: 100,
		basePower: 40,
		category: "Physical",
		name: "Pound",
		pp: 35,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Normal",
		contestType: "Tough",
	},
	powder: {
		num: 600,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		isNonstandard: "Past",
		name: "Powder",
		pp: 20,
		priority: 1,
		flags: {powder: 1, protect: 1, reflectable: 1, mirror: 1, authentic: 1},
		volatileStatus: 'powder',
		condition: {
			duration: 1,
			onStart(target) {
				this.add('-singleturn', target, 'Powder');
			},
			onTryMovePriority: -1,
			onTryMove(pokemon, target, move) {
				if (move.type === 'Fire') {
					this.add('-activate', pokemon, 'move: Powder');
					this.damage(this.clampIntRange(Math.round(pokemon.maxhp / 4), 1));
					return false;
				}
			},
		},
		secondary: null,
		target: "normal",
		type: "Bug",
		zMove: {boost: {spd: 2}},
		contestType: "Clever",
	},
	powdersnow: {
		num: 181,
		accuracy: 100,
		basePower: 40,
		category: "Special",
		name: "Powder Snow",
		pp: 25,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 10,
			status: 'frz',
		},
		target: "allAdjacentFoes",
		type: "Ice",
		contestType: "Beautiful",
	},
	powergem: {
		num: 408,
		accuracy: 100,
		basePower: 80,
		category: "Special",
		name: "Power Gem",
		pp: 20,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Rock",
		contestType: "Beautiful",
	},
	powersplit: {
		num: 471,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Power Split",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mystery: 1},
		onHit(target, source) {
			const newatk = Math.floor((target.storedStats.atk + source.storedStats.atk) / 2);
			target.storedStats.atk = newatk;
			source.storedStats.atk = newatk;
			const newspa = Math.floor((target.storedStats.spa + source.storedStats.spa) / 2);
			target.storedStats.spa = newspa;
			source.storedStats.spa = newspa;
			this.add('-activate', source, 'move: Power Split', '[of] ' + target);
		},
		secondary: null,
		target: "normal",
		type: "Psychic",
		zMove: {boost: {spe: 1}},
		contestType: "Clever",
	},
	powerswap: {
		num: 384,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Power Swap",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, authentic: 1, mystery: 1},
		onHit(target, source) {
			const targetBoosts: SparseBoostsTable = {};
			const sourceBoosts: SparseBoostsTable = {};

			const atkSpa: BoostID[] = ['atk', 'spa'];
			for (const stat of atkSpa) {
				targetBoosts[stat] = target.boosts[stat];
				sourceBoosts[stat] = source.boosts[stat];
			}

			source.setBoost(targetBoosts);
			target.setBoost(sourceBoosts);

			this.add('-swapboost', source, target, 'atk, spa', '[from] move: Power Swap');
		},
		secondary: null,
		target: "normal",
		type: "Psychic",
		zMove: {boost: {spe: 1}},
		contestType: "Clever",
	},
	powertrick: {
		num: 379,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Power Trick",
		pp: 10,
		priority: 0,
		flags: {snatch: 1},
		volatileStatus: 'powertrick',
		condition: {
			onStart(pokemon) {
				this.add('-start', pokemon, 'Power Trick');
				const newatk = pokemon.storedStats.def;
				const newdef = pokemon.storedStats.atk;
				pokemon.storedStats.atk = newatk;
				pokemon.storedStats.def = newdef;
			},
			onCopy(pokemon) {
				const newatk = pokemon.storedStats.def;
				const newdef = pokemon.storedStats.atk;
				pokemon.storedStats.atk = newatk;
				pokemon.storedStats.def = newdef;
			},
			onEnd(pokemon) {
				this.add('-end', pokemon, 'Power Trick');
				const newatk = pokemon.storedStats.def;
				const newdef = pokemon.storedStats.atk;
				pokemon.storedStats.atk = newatk;
				pokemon.storedStats.def = newdef;
			},
			onRestart(pokemon) {
				pokemon.removeVolatile('Power Trick');
			},
		},
		secondary: null,
		target: "self",
		type: "Psychic",
		zMove: {boost: {atk: 1}},
		contestType: "Clever",
	},
	powertrip: {
		num: 681,
		accuracy: 100,
		basePower: 20,
		basePowerCallback(pokemon, target, move) {
			return move.basePower + 20 * pokemon.positiveBoosts();
		},
		category: "Physical",
		name: "Power Trip",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Dark",
		zMove: {basePower: 160},
		maxMove: {basePower: 130},
		contestType: "Clever",
	},
	poweruppunch: {
		num: 612,
		accuracy: 100,
		basePower: 40,
		category: "Physical",
		name: "Power-Up Punch",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, punch: 1},
		secondary: {
			chance: 100,
			self: {
				boosts: {
					atk: 1,
				},
			},
		},
		target: "normal",
		type: "Fighting",
		contestType: "Tough",
	},
	powerwhip: {
		num: 438,
		accuracy: 85,
		basePower: 120,
		category: "Physical",
		name: "Power Whip",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Grass",
		contestType: "Tough",
	},
	precipiceblades: {
		num: 619,
		accuracy: 85,
		basePower: 120,
		category: "Physical",
		name: "Precipice Blades",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, nonsky: 1},
		target: "allAdjacentFoes",
		type: "Ground",
		contestType: "Cool",
	},
	present: {
		num: 217,
		accuracy: 90,
		basePower: 0,
		category: "Physical",
		name: "Present",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onModifyMove(move, pokemon, target) {
			const rand = this.random(10);
			if (rand < 2) {
				move.heal = [1, 4];
				move.infiltrates = true;
			} else if (rand < 6) {
				move.basePower = 40;
			} else if (rand < 9) {
				move.basePower = 80;
			} else {
				move.basePower = 120;
			}
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		contestType: "Cute",
	},
	prismaticlaser: {
		num: 711,
		accuracy: 100,
		basePower: 160,
		category: "Special",
		name: "Prismatic Laser",
		pp: 10,
		priority: 0,
		flags: {recharge: 1, protect: 1, mirror: 1},
		self: {
			volatileStatus: 'mustrecharge',
		},
		secondary: null,
		target: "normal",
		type: "Psychic",
		contestType: "Cool",
	},
	protect: {
		num: 182,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Protect",
		pp: 10,
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
		condition: {
			duration: 1,
			onStart(target) {
				this.add('-singleturn', target, 'Protect');
			},
			onTryHitPriority: 3,
			onTryHit(target, source, move) {
				if (!move.flags['protect']) {
					if (['gmaxoneblow', 'gmaxrapidflow'].includes(move.id)) return;
					if (move.isZ || move.isMax) target.getMoveHitData(move).zBrokeProtect = true;
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
				return this.NOT_FAIL;
			},
		},
		secondary: null,
		target: "self",
		type: "Normal",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Cute",
	},
	psybeam: {
		num: 60,
		accuracy: 100,
		basePower: 65,
		category: "Special",
		name: "Psybeam",
		pp: 20,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 10,
			volatileStatus: 'confusion',
		},
		target: "normal",
		type: "Psychic",
		contestType: "Beautiful",
	},
	psychup: {
		num: 244,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Psych Up",
		pp: 10,
		priority: 0,
		flags: {authentic: 1, mystery: 1},
		onHit(target, source) {
			let i: BoostID;
			for (i in target.boosts) {
				source.boosts[i] = target.boosts[i];
			}
			const volatilesToCopy = ['focusenergy', 'gmaxchistrike', 'laserfocus'];
			for (const volatile of volatilesToCopy) {
				if (target.volatiles[volatile]) {
					source.addVolatile(volatile);
					if (volatile === 'gmaxchistrike') source.volatiles[volatile].layers = target.volatiles[volatile].layers;
				} else {
					source.removeVolatile(volatile);
				}
			}
			this.add('-copyboost', source, target, '[from] move: Psych Up');
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {effect: 'heal'},
		contestType: "Clever",
	},
	psychic: {
		num: 94,
		accuracy: 100,
		basePower: 90,
		category: "Special",
		name: "Psychic",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 10,
			boosts: {
				spd: -1,
			},
		},
		target: "normal",
		type: "Psychic",
		contestType: "Clever",
	},
	psychicfangs: {
		num: 706,
		accuracy: 100,
		basePower: 85,
		category: "Physical",
		name: "Psychic Fangs",
		pp: 10,
		priority: 0,
		flags: {bite: 1, contact: 1, protect: 1, mirror: 1},
		onTryHit(pokemon) {
			// will shatter screens through sub, before you hit
			pokemon.side.removeSideCondition('reflect');
			pokemon.side.removeSideCondition('lightscreen');
			pokemon.side.removeSideCondition('auroraveil');
		},
		secondary: null,
		target: "normal",
		type: "Psychic",
		contestType: "Clever",
	},
	psychicterrain: {
		num: 678,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Psychic Terrain",
		pp: 10,
		priority: 0,
		flags: {nonsky: 1},
		terrain: 'psychicterrain',
		condition: {
			duration: 5,
			durationCallback(source, effect) {
				if (source?.hasItem('terrainextender')) {
					return 8;
				}
				return 5;
			},
			onTryHitPriority: 4,
			onTryHit(target, source, effect) {
				if (effect && (effect.priority <= 0.1 || effect.target === 'self')) {
					return;
				}
				if (target.isSemiInvulnerable() || target.isAlly(source)) return;
				if (!target.isGrounded()) {
					const baseMove = this.dex.moves.get(effect.id);
					if (baseMove.priority > 0) {
						this.hint("Psychic Terrain doesn't affect Pokémon immune to Ground.");
					}
					return;
				}
				this.add('-activate', target, 'move: Psychic Terrain');
				return null;
			},
			onBasePowerPriority: 6,
			onBasePower(basePower, attacker, defender, move) {
				if (move.type === 'Psychic' && attacker.isGrounded() && !attacker.isSemiInvulnerable()) {
					this.debug('psychic terrain boost');
					return this.chainModify([5325, 4096]);
				}
			},
			onFieldStart(field, source, effect) {
				if (effect?.effectType === 'Ability') {
					this.add('-fieldstart', 'move: Psychic Terrain', '[from] ability: ' + effect, '[of] ' + source);
				} else {
					this.add('-fieldstart', 'move: Psychic Terrain');
				}
			},
			onFieldResidualOrder: 27,
			onFieldResidualSubOrder: 7,
			onFieldEnd() {
				this.add('-fieldend', 'move: Psychic Terrain');
			},
		},
		secondary: null,
		target: "all",
		type: "Psychic",
		zMove: {boost: {spa: 1}},
		contestType: "Clever",
	},
	psychoboost: {
		num: 354,
		accuracy: 90,
		basePower: 140,
		category: "Special",
		isNonstandard: "Past",
		name: "Psycho Boost",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		self: {
			boosts: {
				spa: -2,
			},
		},
		secondary: null,
		target: "normal",
		type: "Psychic",
		contestType: "Clever",
	},
	psychocut: {
		num: 427,
		accuracy: 100,
		basePower: 70,
		category: "Physical",
		name: "Psycho Cut",
		pp: 20,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		critRatio: 2,
		secondary: null,
		target: "normal",
		type: "Psychic",
		contestType: "Cool",
	},
	psychoshift: {
		num: 375,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Psycho Shift",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onTryHit(target, source, move) {
			if (!source.status) return false;
			move.status = source.status;
		},
		self: {
			onHit(pokemon) {
				pokemon.cureStatus();
			},
		},
		secondary: null,
		target: "normal",
		type: "Psychic",
		zMove: {boost: {spa: 2}},
		contestType: "Clever",
	},
	psyshock: {
		num: 473,
		accuracy: 100,
		basePower: 80,
		category: "Special",
		defensiveCategory: "Physical",
		name: "Psyshock",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Psychic",
		contestType: "Beautiful",
	},
	psystrike: {
		num: 540,
		accuracy: 100,
		basePower: 100,
		category: "Special",
		defensiveCategory: "Physical",
		name: "Psystrike",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Psychic",
		contestType: "Cool",
	},
	psywave: {
		num: 149,
		accuracy: 100,
		basePower: 0,
		damageCallback(pokemon) {
			return (this.random(50, 151) * pokemon.level) / 100;
		},
		category: "Special",
		isNonstandard: "Past",
		name: "Psywave",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Psychic",
		contestType: "Clever",
	},
	pulverizingpancake: {
		num: 701,
		accuracy: true,
		basePower: 210,
		category: "Physical",
		isNonstandard: "Past",
		name: "Pulverizing Pancake",
		pp: 1,
		priority: 0,
		flags: {contact: 1},
		isZ: "snorliumz",
		secondary: null,
		target: "normal",
		type: "Normal",
		contestType: "Cool",
	},
	punishment: {
		num: 386,
		accuracy: 100,
		basePower: 0,
		basePowerCallback(pokemon, target) {
			let power = 60 + 20 * target.positiveBoosts();
			if (power > 200) power = 200;
			return power;
		},
		category: "Physical",
		isNonstandard: "Past",
		name: "Punishment",
		pp: 5,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Dark",
		zMove: {basePower: 160},
		maxMove: {basePower: 130},
		contestType: "Cool",
	},
	purify: {
		num: 685,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Purify",
		pp: 20,
		priority: 0,
		flags: {protect: 1, reflectable: 1, heal: 1},
		onHit(target, source) {
			if (!target.cureStatus()) return false;
			this.heal(Math.ceil(source.maxhp * 0.5), source);
		},
		secondary: null,
		target: "normal",
		type: "Poison",
		zMove: {boost: {atk: 1, def: 1, spa: 1, spd: 1, spe: 1}},
		contestType: "Beautiful",
	},
	pursuit: {
		num: 228,
		accuracy: 100,
		basePower: 40,
		basePowerCallback(pokemon, target, move) {
			// You can't get here unless the pursuit succeeds
			if (target.beingCalledBack || target.switchFlag) {
				this.debug('Pursuit damage boost');
				return move.basePower * 2;
			}
			return move.basePower;
		},
		category: "Physical",
		isNonstandard: "Past",
		name: "Pursuit",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		beforeTurnCallback(pokemon) {
			for (const side of this.sides) {
				if (side.hasAlly(pokemon)) continue;
				side.addSideCondition('pursuit', pokemon);
				const data = side.getSideConditionData('pursuit');
				if (!data.sources) {
					data.sources = [];
				}
				data.sources.push(pokemon);
			}
		},
		onModifyMove(move, source, target) {
			if (target?.beingCalledBack || target?.switchFlag) move.accuracy = true;
		},
		onTryHit(target, pokemon) {
			target.side.removeSideCondition('pursuit');
		},
		condition: {
			duration: 1,
			onBeforeSwitchOut(pokemon) {
				this.debug('Pursuit start');
				let alreadyAdded = false;
				pokemon.removeVolatile('destinybond');
				for (const source of this.effectState.sources) {
					if (!this.queue.cancelMove(source) || !source.hp) continue;
					if (!alreadyAdded) {
						this.add('-activate', pokemon, 'move: Pursuit');
						alreadyAdded = true;
					}
					// Run through each action in queue to check if the Pursuit user is supposed to Mega Evolve this turn.
					// If it is, then Mega Evolve before moving.
					if (source.canMegaEvo || source.canUltraBurst) {
						for (const [actionIndex, action] of this.queue.entries()) {
							if (action.pokemon === source && action.choice === 'megaEvo') {
								this.actions.runMegaEvo(source);
								this.queue.list.splice(actionIndex, 1);
								break;
							}
						}
					}
					this.actions.runMove('pursuit', source, source.getLocOf(pokemon));
				}
			},
		},
		secondary: null,
		target: "normal",
		type: "Dark",
		contestType: "Clever",
	},
	pyroball: {
		num: 780,
		accuracy: 90,
		basePower: 120,
		category: "Physical",
		name: "Pyro Ball",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1, defrost: 1, bullet: 1},
		secondary: {
			chance: 10,
			status: 'brn',
		},
		target: "normal",
		type: "Fire",
	},
	quash: {
		num: 511,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Quash",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onHit(target) {
			if (this.activePerHalf === 1) return false; // fails in singles
			const action = this.queue.willMove(target);
			if (!action) return false;

			action.order = 201;
			this.add('-activate', target, 'move: Quash');
		},
		secondary: null,
		target: "normal",
		type: "Dark",
		zMove: {boost: {spe: 1}},
		contestType: "Clever",
	},
	quickattack: {
		num: 98,
		accuracy: 100,
		basePower: 40,
		category: "Physical",
		name: "Quick Attack",
		pp: 30,
		priority: 1,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Normal",
		contestType: "Cool",
	},
	quickguard: {
		num: 501,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Quick Guard",
		pp: 15,
		priority: 3,
		flags: {snatch: 1},
		sideCondition: 'quickguard',
		onTry() {
			return !!this.queue.willAct();
		},
		onHitSide(side, source) {
			source.addVolatile('stall');
		},
		condition: {
			duration: 1,
			onSideStart(target, source) {
				this.add('-singleturn', source, 'Quick Guard');
			},
			onTryHitPriority: 4,
			onTryHit(target, source, move) {
				// Quick Guard blocks moves with positive priority, even those given increased priority by Prankster or Gale Wings.
				// (e.g. it blocks 0 priority moves boosted by Prankster or Gale Wings; Quick Claw/Custap Berry do not count)
				if (move.priority <= 0.1) return;
				if (!move.flags['protect']) {
					if (['gmaxoneblow', 'gmaxrapidflow'].includes(move.id)) return;
					if (move.isZ || move.isMax) target.getMoveHitData(move).zBrokeProtect = true;
					return;
				}
				this.add('-activate', target, 'move: Quick Guard');
				const lockedmove = source.getVolatile('lockedmove');
				if (lockedmove) {
					// Outrage counter is reset
					if (source.volatiles['lockedmove'].duration === 2) {
						delete source.volatiles['lockedmove'];
					}
				}
				return this.NOT_FAIL;
			},
		},
		secondary: null,
		target: "allySide",
		type: "Fighting",
		zMove: {boost: {def: 1}},
		contestType: "Cool",
	},
	quiverdance: {
		num: 483,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Quiver Dance",
		pp: 20,
		priority: 0,
		flags: {snatch: 1, dance: 1},
		boosts: {
			spa: 1,
			spd: 1,
			spe: 1,
		},
		secondary: null,
		target: "self",
		type: "Bug",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Beautiful",
	},
	rage: {
		num: 99,
		accuracy: 100,
		basePower: 20,
		category: "Physical",
		isNonstandard: "Past",
		name: "Rage",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		self: {
			volatileStatus: 'rage',
		},
		condition: {
			onStart(pokemon) {
				this.add('-singlemove', pokemon, 'Rage');
			},
			onHit(target, source, move) {
				if (target !== source && move.category !== 'Status') {
					this.boost({atk: 1});
				}
			},
			onBeforeMovePriority: 100,
			onBeforeMove(pokemon) {
				this.debug('removing Rage before attack');
				pokemon.removeVolatile('rage');
			},
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		contestType: "Tough",
	},
	ragepowder: {
		num: 476,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Rage Powder",
		pp: 20,
		priority: 2,
		flags: {powder: 1},
		volatileStatus: 'ragepowder',
		onTry(source) {
			return this.activePerHalf > 1;
		},
		condition: {
			duration: 1,
			onStart(pokemon) {
				this.add('-singleturn', pokemon, 'move: Rage Powder');
			},
			onFoeRedirectTargetPriority: 1,
			onFoeRedirectTarget(target, source, source2, move) {
				const ragePowderUser = this.effectState.target;
				if (ragePowderUser.isSkyDropped()) return;

				if (source.runStatusImmunity('powder') && this.validTarget(ragePowderUser, source, move.target)) {
					if (move.smartTarget) move.smartTarget = false;
					this.debug("Rage Powder redirected target of move");
					return ragePowderUser;
				}
			},
		},
		secondary: null,
		target: "self",
		type: "Bug",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Clever",
	},
	raindance: {
		num: 240,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Rain Dance",
		pp: 5,
		priority: 0,
		flags: {},
		weather: 'RainDance',
		secondary: null,
		target: "all",
		type: "Water",
		zMove: {boost: {spe: 1}},
		contestType: "Beautiful",
	},
	rapidspin: {
		num: 229,
		accuracy: 100,
		basePower: 50,
		category: "Physical",
		name: "Rapid Spin",
		pp: 40,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onAfterHit(target, pokemon) {
			if (pokemon.hp && pokemon.removeVolatile('leechseed')) {
				this.add('-end', pokemon, 'Leech Seed', '[from] move: Rapid Spin', '[of] ' + pokemon);
			}
			const sideConditions = ['spikes', 'toxicspikes', 'stealthrock', 'stickyweb', 'gmaxsteelsurge'];
			for (const condition of sideConditions) {
				if (pokemon.hp && pokemon.side.removeSideCondition(condition)) {
					this.add('-sideend', pokemon.side, this.dex.conditions.get(condition).name, '[from] move: Rapid Spin', '[of] ' + pokemon);
				}
			}
			if (pokemon.hp && pokemon.volatiles['partiallytrapped']) {
				pokemon.removeVolatile('partiallytrapped');
			}
		},
		onAfterSubDamage(damage, target, pokemon) {
			if (pokemon.hp && pokemon.removeVolatile('leechseed')) {
				this.add('-end', pokemon, 'Leech Seed', '[from] move: Rapid Spin', '[of] ' + pokemon);
			}
			const sideConditions = ['spikes', 'toxicspikes', 'stealthrock', 'stickyweb', 'gmaxsteelsurge'];
			for (const condition of sideConditions) {
				if (pokemon.hp && pokemon.side.removeSideCondition(condition)) {
					this.add('-sideend', pokemon.side, this.dex.conditions.get(condition).name, '[from] move: Rapid Spin', '[of] ' + pokemon);
				}
			}
			if (pokemon.hp && pokemon.volatiles['partiallytrapped']) {
				pokemon.removeVolatile('partiallytrapped');
			}
		},
		secondary: {
			chance: 100,
			self: {
				boosts: {
					spe: 1,
				},
			},
		},
		target: "normal",
		type: "Normal",
		contestType: "Cool",
	},
	razorleaf: {
		num: 75,
		accuracy: 95,
		basePower: 55,
		category: "Physical",
		name: "Razor Leaf",
		pp: 25,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		critRatio: 2,
		secondary: null,
		target: "allAdjacentFoes",
		type: "Grass",
		contestType: "Cool",
	},
	razorshell: {
		num: 534,
		accuracy: 95,
		basePower: 75,
		category: "Physical",
		name: "Razor Shell",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 50,
			boosts: {
				def: -1,
			},
		},
		target: "normal",
		type: "Water",
		contestType: "Cool",
	},
	razorwind: {
		num: 13,
		accuracy: 100,
		basePower: 80,
		category: "Special",
		isNonstandard: "Past",
		name: "Razor Wind",
		pp: 10,
		priority: 0,
		flags: {charge: 1, protect: 1, mirror: 1},
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
		critRatio: 2,
		secondary: null,
		target: "allAdjacentFoes",
		type: "Normal",
		contestType: "Cool",
	},
	recover: {
		num: 105,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Recover",
		pp: 10,
		priority: 0,
		flags: {snatch: 1, heal: 1},
		heal: [1, 2],
		secondary: null,
		target: "self",
		type: "Normal",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Clever",
	},
	recycle: {
		num: 278,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Recycle",
		pp: 10,
		priority: 0,
		flags: {snatch: 1},
		onHit(pokemon) {
			if (pokemon.item || !pokemon.lastItem) return false;
			const item = pokemon.lastItem;
			pokemon.lastItem = '';
			this.add('-item', pokemon, this.dex.items.get(item), '[from] move: Recycle');
			pokemon.setItem(item);
		},
		secondary: null,
		target: "self",
		type: "Normal",
		zMove: {boost: {spe: 2}},
		contestType: "Clever",
	},
	reflect: {
		num: 115,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Reflect",
		pp: 20,
		priority: 0,
		flags: {snatch: 1},
		sideCondition: 'reflect',
		condition: {
			duration: 5,
			durationCallback(target, source, effect) {
				if (source?.hasItem('lightclay')) {
					return 8;
				}
				return 5;
			},
			onAnyModifyDamage(damage, source, target, move) {
				if (target !== source && this.effectState.target.hasAlly(target) && this.getCategory(move) === 'Physical') {
					if (!target.getMoveHitData(move).crit && !move.infiltrates) {
						this.debug('Reflect weaken');
						if (this.activePerHalf > 1) return this.chainModify([2732, 4096]);
						return this.chainModify(0.5);
					}
				}
			},
			onSideStart(side) {
				this.add('-sidestart', side, 'Reflect');
			},
			onSideResidualOrder: 26,
			onSideResidualSubOrder: 1,
			onSideEnd(side) {
				this.add('-sideend', side, 'Reflect');
			},
		},
		secondary: null,
		target: "allySide",
		type: "Psychic",
		zMove: {boost: {def: 1}},
		contestType: "Clever",
	},
	reflecttype: {
		num: 513,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Reflect Type",
		pp: 15,
		priority: 0,
		flags: {protect: 1, authentic: 1, mystery: 1},
		onHit(target, source) {
			if (source.species && (source.species.num === 493 || source.species.num === 773)) return false;
			let newBaseTypes = target.getTypes(true).filter(type => type !== '???');
			if (!newBaseTypes.length) {
				if (target.addedType) {
					newBaseTypes = ['Normal'];
				} else {
					return false;
				}
			}
			this.add('-start', source, 'typechange', '[from] move: Reflect Type', '[of] ' + target);
			source.setType(newBaseTypes);
			source.addedType = target.addedType;
			source.knownType = target.isAlly(source) && target.knownType;
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {boost: {spa: 1}},
		contestType: "Clever",
	},
	refresh: {
		num: 287,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Past",
		name: "Refresh",
		pp: 20,
		priority: 0,
		flags: {snatch: 1},
		onHit(pokemon) {
			if (['', 'slp', 'frz'].includes(pokemon.status)) return false;
			pokemon.cureStatus();
		},
		secondary: null,
		target: "self",
		type: "Normal",
		zMove: {effect: 'heal'},
		contestType: "Cute",
	},
	relicsong: {
		num: 547,
		accuracy: 100,
		basePower: 75,
		category: "Special",
		isNonstandard: "Past",
		name: "Relic Song",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, sound: 1, authentic: 1},
		secondary: {
			chance: 10,
			status: 'slp',
		},
		onHit(target, pokemon, move) {
			if (pokemon.baseSpecies.baseSpecies === 'Meloetta' && !pokemon.transformed) {
				move.willChangeForme = true;
			}
		},
		onAfterMoveSecondarySelf(pokemon, target, move) {
			if (move.willChangeForme) {
				const meloettaForme = pokemon.species.id === 'meloettapirouette' ? '' : '-Pirouette';
				pokemon.formeChange('Meloetta' + meloettaForme, this.effect, false, '[msg]');
			}
		},
		target: "allAdjacentFoes",
		type: "Normal",
		contestType: "Beautiful",
	},
	rest: {
		num: 156,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Rest",
		pp: 10,
		priority: 0,
		flags: {snatch: 1, heal: 1},
		onTry(source) {
			if (source.status === 'slp' || source.hasAbility('comatose')) return false;

			if (source.hp === source.maxhp) {
				this.add('-fail', source, 'heal');
				return null;
			}
			if (source.hasAbility(['insomnia', 'vitalspirit'])) {
				this.add('-fail', source, '[from] ability: ' + source.getAbility().name, '[of] ' + source);
				return null;
			}
		},
		onHit(target, source, move) {
			if (!target.setStatus('slp', source, move)) return false;
			target.statusState.time = 3;
			target.statusState.startTime = 3;
			this.heal(target.maxhp); // Aesthetic only as the healing happens after you fall asleep in-game
		},
		secondary: null,
		target: "self",
		type: "Psychic",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Cute",
	},
	retaliate: {
		num: 514,
		accuracy: 100,
		basePower: 70,
		category: "Physical",
		name: "Retaliate",
		pp: 5,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon) {
			if (pokemon.side.faintedLastTurn) {
				this.debug('Boosted for a faint last turn');
				return this.chainModify(2);
			}
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		contestType: "Cool",
	},
	return: {
		num: 216,
		accuracy: 100,
		basePower: 0,
		basePowerCallback(pokemon) {
			return Math.floor((pokemon.happiness * 10) / 25) || 1;
		},
		category: "Physical",
		isNonstandard: "Past",
		name: "Return",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {basePower: 160},
		maxMove: {basePower: 130},
		contestType: "Cute",
	},
	revelationdance: {
		num: 686,
		accuracy: 100,
		basePower: 90,
		category: "Special",
		isNonstandard: "Past",
		name: "Revelation Dance",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1, dance: 1},
		onModifyType(move, pokemon) {
			let type = pokemon.getTypes()[0];
			if (type === "Bird") type = "???";
			move.type = type;
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		contestType: "Beautiful",
	},
	revenge: {
		num: 279,
		accuracy: 100,
		basePower: 60,
		basePowerCallback(pokemon, target, move) {
			const damagedByTarget = pokemon.attackedBy.some(
				p => p.source === target && p.damage > 0 && p.thisTurn
			);
			if (damagedByTarget) {
				this.debug('Boosted for getting hit by ' + target);
				return move.basePower * 2;
			}
			return move.basePower;
		},
		category: "Physical",
		name: "Revenge",
		pp: 10,
		priority: -4,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Fighting",
		contestType: "Tough",
	},
	reversal: {
		num: 179,
		accuracy: 100,
		basePower: 0,
		basePowerCallback(pokemon, target) {
			const ratio = pokemon.hp * 48 / pokemon.maxhp;
			if (ratio < 2) {
				return 200;
			}
			if (ratio < 5) {
				return 150;
			}
			if (ratio < 10) {
				return 100;
			}
			if (ratio < 17) {
				return 80;
			}
			if (ratio < 33) {
				return 40;
			}
			return 20;
		},
		category: "Physical",
		name: "Reversal",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Fighting",
		zMove: {basePower: 160},
		contestType: "Cool",
	},
	risingvoltage: {
		num: 804,
		accuracy: 100,
		basePower: 70,
		category: "Special",
		name: "Rising Voltage",
		pp: 20,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (this.field.isTerrain('electricterrain') && target.isGrounded()) {
				this.debug('terrain buff');
				return this.chainModify(2);
			}
		},
		secondary: null,
		target: "normal",
		type: "Electric",
		maxMove: {basePower: 140},
	},
	roar: {
		num: 46,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Roar",
		pp: 20,
		priority: -6,
		flags: {reflectable: 1, mirror: 1, sound: 1, authentic: 1, mystery: 1},
		forceSwitch: true,
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {boost: {def: 1}},
		contestType: "Cool",
	},
	roaroftime: {
		num: 459,
		accuracy: 90,
		basePower: 150,
		category: "Special",
		name: "Roar of Time",
		pp: 5,
		priority: 0,
		flags: {recharge: 1, protect: 1, mirror: 1},
		self: {
			volatileStatus: 'mustrecharge',
		},
		secondary: null,
		target: "normal",
		type: "Dragon",
		contestType: "Beautiful",
	},
	rockblast: {
		num: 350,
		accuracy: 90,
		basePower: 25,
		category: "Physical",
		name: "Rock Blast",
		pp: 10,
		priority: 0,
		flags: {bullet: 1, protect: 1, mirror: 1},
		multihit: [2, 5],
		secondary: null,
		target: "normal",
		type: "Rock",
		zMove: {basePower: 140},
		maxMove: {basePower: 130},
		contestType: "Tough",
	},
	rockclimb: {
		num: 431,
		accuracy: 85,
		basePower: 90,
		category: "Physical",
		isNonstandard: "Past",
		name: "Rock Climb",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 20,
			volatileStatus: 'confusion',
		},
		target: "normal",
		type: "Normal",
		contestType: "Tough",
	},
	rockpolish: {
		num: 397,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Rock Polish",
		pp: 20,
		priority: 0,
		flags: {snatch: 1},
		boosts: {
			spe: 2,
		},
		secondary: null,
		target: "self",
		type: "Rock",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Tough",
	},
	rockslide: {
		num: 157,
		accuracy: 90,
		basePower: 75,
		category: "Physical",
		name: "Rock Slide",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 30,
			volatileStatus: 'flinch',
		},
		target: "allAdjacentFoes",
		type: "Rock",
		contestType: "Tough",
	},
	rocksmash: {
		num: 249,
		accuracy: 100,
		basePower: 40,
		category: "Physical",
		name: "Rock Smash",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 50,
			boosts: {
				def: -1,
			},
		},
		target: "normal",
		type: "Fighting",
		contestType: "Tough",
	},
	rockthrow: {
		num: 88,
		accuracy: 90,
		basePower: 50,
		category: "Physical",
		name: "Rock Throw",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Rock",
		contestType: "Tough",
	},
	rocktomb: {
		num: 317,
		accuracy: 95,
		basePower: 60,
		category: "Physical",
		name: "Rock Tomb",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 100,
			boosts: {
				spe: -1,
			},
		},
		target: "normal",
		type: "Rock",
		contestType: "Clever",
	},
	rockwrecker: {
		num: 439,
		accuracy: 90,
		basePower: 150,
		category: "Physical",
		name: "Rock Wrecker",
		pp: 5,
		priority: 0,
		flags: {bullet: 1, recharge: 1, protect: 1, mirror: 1},
		self: {
			volatileStatus: 'mustrecharge',
		},
		secondary: null,
		target: "normal",
		type: "Rock",
		contestType: "Tough",
	},
	roleplay: {
		num: 272,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Role Play",
		pp: 10,
		priority: 0,
		flags: {authentic: 1, mystery: 1},
		onTryHit(target, source) {
			if (target.ability === source.ability) return false;

			const additionalBannedTargetAbilities = [
				// Zen Mode included here for compatability with Gen 5-6
				'flowergift', 'forecast', 'hungerswitch', 'illusion', 'imposter', 'neutralizinggas', 'powerofalchemy', 'receiver', 'trace', 'wonderguard', 'zenmode',
			];

			if (target.getAbility().isPermanent || additionalBannedTargetAbilities.includes(target.ability) ||
				source.getAbility().isPermanent) {
				return false;
			}
		},
		onHit(target, source) {
			const oldAbility = source.setAbility(target.ability);
			if (oldAbility) {
				this.add('-ability', source, source.getAbility().name, '[from] move: Role Play', '[of] ' + target);
				return;
			}
			return false;
		},
		secondary: null,
		target: "normal",
		type: "Psychic",
		zMove: {boost: {spe: 1}},
		contestType: "Cute",
	},
	rollingkick: {
		num: 27,
		accuracy: 85,
		basePower: 60,
		category: "Physical",
		isNonstandard: "Past",
		name: "Rolling Kick",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 30,
			volatileStatus: 'flinch',
		},
		target: "normal",
		type: "Fighting",
		contestType: "Cool",
	},
	rollout: {
		num: 205,
		accuracy: 90,
		basePower: 30,
		basePowerCallback(pokemon, target, move) {
			let bp = move.basePower;
			if (pokemon.volatiles['rollout'] && pokemon.volatiles['rollout'].hitCount) {
				bp *= Math.pow(2, pokemon.volatiles['rollout'].hitCount);
			}
			if (pokemon.status !== 'slp') pokemon.addVolatile('rollout');
			if (pokemon.volatiles['defensecurl']) {
				bp *= 2;
			}
			this.debug("Rollout bp: " + bp);
			return bp;
		},
		category: "Physical",
		name: "Rollout",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		condition: {
			duration: 2,
			onLockMove: 'rollout',
			onStart() {
				this.effectState.hitCount = 1;
			},
			onRestart() {
				this.effectState.hitCount++;
				if (this.effectState.hitCount < 5) {
					this.effectState.duration = 2;
				}
			},
			onResidual(target) {
				if (target.lastMove && target.lastMove.id === 'struggle') {
					// don't lock
					delete target.volatiles['rollout'];
				}
			},
		},
		secondary: null,
		target: "normal",
		type: "Rock",
		contestType: "Cute",
	},
	roost: {
		num: 355,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Roost",
		pp: 10,
		priority: 0,
		flags: {snatch: 1, heal: 1},
		heal: [1, 2],
		self: {
			volatileStatus: 'roost',
		},
		condition: {
			duration: 1,
			onResidualOrder: 25,
			onStart(target) {
				this.add('-singleturn', target, 'move: Roost');
			},
			onTypePriority: -1,
			onType(types, pokemon) {
				this.effectState.typeWas = types;
				return types.filter(type => type !== 'Flying');
			},
		},
		secondary: null,
		target: "self",
		type: "Flying",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Clever",
	},
	rototiller: {
		num: 563,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Past",
		name: "Rototiller",
		pp: 10,
		priority: 0,
		flags: {distance: 1, nonsky: 1},
		onHitField(target, source) {
			const targets: Pokemon[] = [];
			let anyAirborne = false;
			for (const pokemon of this.getAllActive()) {
				if (!pokemon.runImmunity('Ground')) {
					this.add('-immune', pokemon);
					anyAirborne = true;
					continue;
				}
				if (pokemon.hasType('Grass')) {
					// This move affects every grounded Grass-type Pokemon in play.
					targets.push(pokemon);
				}
			}
			if (!targets.length && !anyAirborne) return false; // Fails when there are no grounded Grass types or airborne Pokemon
			for (const pokemon of targets) {
				this.boost({atk: 1, spa: 1}, pokemon, source);
			}
		},
		secondary: null,
		target: "all",
		type: "Ground",
		zMove: {boost: {atk: 1}},
		contestType: "Tough",
	},
	round: {
		num: 496,
		accuracy: 100,
		basePower: 60,
		basePowerCallback(target, source, move) {
			if (move.sourceEffect === 'round') {
				return move.basePower * 2;
			}
			return move.basePower;
		},
		category: "Special",
		name: "Round",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1, sound: 1, authentic: 1},
		onTry(source, target, move) {
			for (const action of this.queue.list as MoveAction[]) {
				if (!action.pokemon || !action.move || action.maxMove || action.zmove) continue;
				if (action.move.id === 'round') {
					this.queue.prioritizeAction(action, move);
					return;
				}
			}
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		contestType: "Beautiful",
	},
	sacredfire: {
		num: 221,
		accuracy: 95,
		basePower: 100,
		category: "Physical",
		name: "Sacred Fire",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1, defrost: 1},
		secondary: {
			chance: 50,
			status: 'brn',
		},
		target: "normal",
		type: "Fire",
		contestType: "Beautiful",
	},
	sacredsword: {
		num: 533,
		accuracy: 100,
		basePower: 90,
		category: "Physical",
		name: "Sacred Sword",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		ignoreEvasion: true,
		ignoreDefensive: true,
		secondary: null,
		target: "normal",
		type: "Fighting",
		contestType: "Cool",
	},
	safeguard: {
		num: 219,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Safeguard",
		pp: 25,
		priority: 0,
		flags: {snatch: 1},
		sideCondition: 'safeguard',
		condition: {
			duration: 5,
			durationCallback(target, source, effect) {
				if (source?.hasAbility('persistent')) {
					this.add('-activate', source, 'ability: Persistent', effect);
					return 7;
				}
				return 5;
			},
			onSetStatus(status, target, source, effect) {
				if (!effect || !source) return;
				if (effect.id === 'yawn') return;
				if (effect.effectType === 'Move' && effect.infiltrates && !target.isAlly(source)) return;
				if (target !== source) {
					this.debug('interrupting setStatus');
					if (effect.id === 'synchronize' || (effect.effectType === 'Move' && !effect.secondaries)) {
						this.add('-activate', target, 'move: Safeguard');
					}
					return null;
				}
			},
			onTryAddVolatile(status, target, source, effect) {
				if (!effect || !source) return;
				if (effect.effectType === 'Move' && effect.infiltrates && !target.isAlly(source)) return;
				if ((status.id === 'confusion' || status.id === 'yawn') && target !== source) {
					if (effect.effectType === 'Move' && !effect.secondaries) this.add('-activate', target, 'move: Safeguard');
					return null;
				}
			},
			onSideStart(side) {
				this.add('-sidestart', side, 'Safeguard');
			},
			onSideResidualOrder: 26,
			onSideResidualSubOrder: 3,
			onSideEnd(side) {
				this.add('-sideend', side, 'Safeguard');
			},
		},
		secondary: null,
		target: "allySide",
		type: "Normal",
		zMove: {boost: {spe: 1}},
		contestType: "Beautiful",
	},
	sandattack: {
		num: 28,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Sand Attack",
		pp: 15,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1},
		boosts: {
			accuracy: -1,
		},
		secondary: null,
		target: "normal",
		type: "Ground",
		zMove: {boost: {evasion: 1}},
		contestType: "Cute",
	},
	sandstorm: {
		num: 201,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Sandstorm",
		pp: 10,
		priority: 0,
		flags: {},
		weather: 'Sandstorm',
		secondary: null,
		target: "all",
		type: "Rock",
		zMove: {boost: {spe: 1}},
		contestType: "Tough",
	},
	sandtomb: {
		num: 328,
		accuracy: 85,
		basePower: 35,
		category: "Physical",
		name: "Sand Tomb",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		volatileStatus: 'partiallytrapped',
		secondary: null,
		target: "normal",
		type: "Ground",
		contestType: "Clever",
	},
	sappyseed: {
		num: 738,
		accuracy: 90,
		basePower: 100,
		category: "Physical",
		isNonstandard: "LGPE",
		name: "Sappy Seed",
		pp: 10,
		priority: 0,
		flags: {protect: 1, reflectable: 1},
		onHit(target, source) {
			if (target.hasType('Grass')) return null;
			target.addVolatile('leechseed', source);
		},
		secondary: null,
		target: "normal",
		type: "Grass",
		contestType: "Clever",
	},
	savagespinout: {
		num: 634,
		accuracy: true,
		basePower: 1,
		category: "Physical",
		isNonstandard: "Past",
		name: "Savage Spin-Out",
		pp: 1,
		priority: 0,
		flags: {},
		isZ: "buginiumz",
		secondary: null,
		target: "normal",
		type: "Bug",
		contestType: "Cool",
	},
	scald: {
		num: 503,
		accuracy: 100,
		basePower: 80,
		category: "Special",
		name: "Scald",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1, defrost: 1},
		thawsTarget: true,
		secondary: {
			chance: 30,
			status: 'brn',
		},
		target: "normal",
		type: "Water",
		contestType: "Tough",
	},
	scaleshot: {
		num: 799,
		accuracy: 90,
		basePower: 25,
		category: "Physical",
		name: "Scale Shot",
		pp: 20,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		multihit: [2, 5],
		selfBoost: {
			boosts: {
				def: -1,
				spe: 1,
			},
		},
		secondary: null,
		target: "normal",
		type: "Dragon",
		zMove: {basePower: 140},
		maxMove: {basePower: 130},
	},
	scaryface: {
		num: 184,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Scary Face",
		pp: 10,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1, mystery: 1},
		boosts: {
			spe: -2,
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {boost: {spe: 1}},
		contestType: "Tough",
	},
	scorchingsands: {
		num: 815,
		accuracy: 100,
		basePower: 70,
		category: "Special",
		name: "Scorching Sands",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, defrost: 1},
		thawsTarget: true,
		secondary: {
			chance: 30,
			status: 'brn',
		},
		target: "normal",
		type: "Ground",
	},
	scratch: {
		num: 10,
		accuracy: 100,
		basePower: 40,
		category: "Physical",
		name: "Scratch",
		pp: 35,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Normal",
		contestType: "Tough",
	},
	screech: {
		num: 103,
		accuracy: 85,
		basePower: 0,
		category: "Status",
		name: "Screech",
		pp: 40,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1, sound: 1, authentic: 1, mystery: 1},
		boosts: {
			def: -2,
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {boost: {atk: 1}},
		contestType: "Clever",
	},
	searingshot: {
		num: 545,
		accuracy: 100,
		basePower: 100,
		category: "Special",
		name: "Searing Shot",
		pp: 5,
		priority: 0,
		flags: {bullet: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 30,
			status: 'brn',
		},
		target: "allAdjacent",
		type: "Fire",
		contestType: "Cool",
	},
	searingsunrazesmash: {
		num: 724,
		accuracy: true,
		basePower: 200,
		category: "Physical",
		isNonstandard: "Past",
		name: "Searing Sunraze Smash",
		pp: 1,
		priority: 0,
		flags: {contact: 1},
		isZ: "solganiumz",
		ignoreAbility: true,
		secondary: null,
		target: "normal",
		type: "Steel",
		contestType: "Cool",
	},
	secretpower: {
		num: 290,
		accuracy: 100,
		basePower: 70,
		category: "Physical",
		isNonstandard: "Past",
		name: "Secret Power",
		pp: 20,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onModifyMove(move, pokemon) {
			if (this.field.isTerrain('')) return;
			move.secondaries = [];
			if (this.field.isTerrain('electricterrain')) {
				move.secondaries.push({
					chance: 30,
					status: 'par',
				});
			} else if (this.field.isTerrain('grassyterrain')) {
				move.secondaries.push({
					chance: 30,
					status: 'slp',
				});
			} else if (this.field.isTerrain('mistyterrain')) {
				move.secondaries.push({
					chance: 30,
					boosts: {
						spa: -1,
					},
				});
			} else if (this.field.isTerrain('psychicterrain')) {
				move.secondaries.push({
					chance: 30,
					boosts: {
						spe: -1,
					},
				});
			}
		},
		secondary: {
			chance: 30,
			status: 'par',
		},
		target: "normal",
		type: "Normal",
		contestType: "Clever",
	},
	secretsword: {
		num: 548,
		accuracy: 100,
		basePower: 85,
		category: "Special",
		defensiveCategory: "Physical",
		name: "Secret Sword",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Fighting",
		contestType: "Beautiful",
	},
	seedbomb: {
		num: 402,
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		name: "Seed Bomb",
		pp: 15,
		priority: 0,
		flags: {bullet: 1, protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Grass",
		contestType: "Tough",
	},
	seedflare: {
		num: 465,
		accuracy: 85,
		basePower: 120,
		category: "Special",
		isNonstandard: "Past",
		name: "Seed Flare",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 40,
			boosts: {
				spd: -2,
			},
		},
		target: "normal",
		type: "Grass",
		contestType: "Beautiful",
	},
	seismictoss: {
		num: 69,
		accuracy: 100,
		basePower: 0,
		damage: 'level',
		category: "Physical",
		name: "Seismic Toss",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, nonsky: 1},
		secondary: null,
		target: "normal",
		type: "Fighting",
		maxMove: {basePower: 75},
		contestType: "Tough",
	},
	selfdestruct: {
		num: 120,
		accuracy: 100,
		basePower: 200,
		category: "Physical",
		name: "Self-Destruct",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		selfdestruct: "always",
		secondary: null,
		target: "allAdjacent",
		type: "Normal",
		contestType: "Beautiful",
	},
	shadowball: {
		num: 247,
		accuracy: 100,
		basePower: 80,
		category: "Special",
		name: "Shadow Ball",
		pp: 15,
		priority: 0,
		flags: {bullet: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 20,
			boosts: {
				spd: -1,
			},
		},
		target: "normal",
		type: "Ghost",
		contestType: "Clever",
	},
	shadowbone: {
		num: 708,
		accuracy: 100,
		basePower: 85,
		category: "Physical",
		name: "Shadow Bone",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 20,
			boosts: {
				def: -1,
			},
		},
		target: "normal",
		type: "Ghost",
		contestType: "Cool",
	},
	shadowclaw: {
		num: 421,
		accuracy: 100,
		basePower: 70,
		category: "Physical",
		name: "Shadow Claw",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		critRatio: 2,
		secondary: null,
		target: "normal",
		type: "Ghost",
		contestType: "Cool",
	},
	shadowforce: {
		num: 467,
		accuracy: 100,
		basePower: 120,
		category: "Physical",
		name: "Shadow Force",
		pp: 5,
		priority: 0,
		flags: {contact: 1, charge: 1, mirror: 1},
		breaksProtect: true,
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
			onInvulnerability: false,
		},
		secondary: null,
		target: "normal",
		type: "Ghost",
		contestType: "Cool",
	},
	shadowpunch: {
		num: 325,
		accuracy: true,
		basePower: 60,
		category: "Physical",
		name: "Shadow Punch",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, punch: 1},
		secondary: null,
		target: "normal",
		type: "Ghost",
		contestType: "Clever",
	},
	shadowsneak: {
		num: 425,
		accuracy: 100,
		basePower: 40,
		category: "Physical",
		name: "Shadow Sneak",
		pp: 30,
		priority: 1,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Ghost",
		contestType: "Clever",
	},
	shadowstrike: {
		num: 0,
		accuracy: 95,
		basePower: 80,
		category: "Physical",
		isNonstandard: "CAP",
		name: "Shadow Strike",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 50,
			boosts: {
				def: -1,
			},
		},
		target: "normal",
		type: "Ghost",
		contestType: "Clever",
	},
	sharpen: {
		num: 159,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Past",
		name: "Sharpen",
		pp: 30,
		priority: 0,
		flags: {snatch: 1},
		boosts: {
			atk: 1,
		},
		secondary: null,
		target: "self",
		type: "Normal",
		zMove: {boost: {atk: 1}},
		contestType: "Cute",
	},
	shatteredpsyche: {
		num: 648,
		accuracy: true,
		basePower: 1,
		category: "Physical",
		isNonstandard: "Past",
		name: "Shattered Psyche",
		pp: 1,
		priority: 0,
		flags: {},
		isZ: "psychiumz",
		secondary: null,
		target: "normal",
		type: "Psychic",
		contestType: "Cool",
	},
	sheercold: {
		num: 329,
		accuracy: 30,
		basePower: 0,
		category: "Special",
		name: "Sheer Cold",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		ohko: 'Ice',
		target: "normal",
		type: "Ice",
		zMove: {basePower: 180},
		maxMove: {basePower: 130},
		contestType: "Beautiful",
	},
	shellsidearm: {
		num: 801,
		accuracy: 100,
		basePower: 90,
		category: "Special",
		name: "Shell Side Arm",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onPrepareHit(target, source, move) {
			if (!source.isAlly(target)) {
				this.attrLastMove('[anim] Shell Side Arm ' + move.category);
			}
		},
		onModifyMove(move, pokemon, target) {
			if (!target) return;
			const atk = pokemon.getStat('atk', false, true);
			const spa = pokemon.getStat('spa', false, true);
			const def = target.getStat('def', false, true);
			const spd = target.getStat('spd', false, true);
			const physical = Math.floor(Math.floor(Math.floor(Math.floor(2 * pokemon.level / 5 + 2) * 90 * atk) / def) / 50);
			const special = Math.floor(Math.floor(Math.floor(Math.floor(2 * pokemon.level / 5 + 2) * 90 * spa) / spd) / 50);
			if (physical > special || (physical === special && this.random(2) === 0)) {
				move.category = 'Physical';
				move.flags.contact = 1;
			}
		},
		onHit(target, source, move) {
			// Shell Side Arm normally reveals its category via animation on cart, but doesn't play either custom animation against allies
			if (!source.isAlly(target)) this.hint(move.category + " Shell Side Arm");
		},
		onAfterSubDamage(damage, target, source, move) {
			if (!source.isAlly(target)) this.hint(move.category + " Shell Side Arm");
		},
		secondary: {
			chance: 20,
			status: 'psn',
		},
		target: "normal",
		type: "Poison",
	},
	shellsmash: {
		num: 504,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Shell Smash",
		pp: 15,
		priority: 0,
		flags: {snatch: 1},
		boosts: {
			def: -1,
			spd: -1,
			atk: 2,
			spa: 2,
			spe: 2,
		},
		secondary: null,
		target: "self",
		type: "Normal",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Tough",
	},
	shelltrap: {
		num: 704,
		accuracy: 100,
		basePower: 150,
		category: "Special",
		name: "Shell Trap",
		pp: 5,
		priority: -3,
		flags: {protect: 1},
		beforeTurnCallback(pokemon) {
			pokemon.addVolatile('shelltrap');
		},
		onTryMove(pokemon) {
			if (!pokemon.volatiles['shelltrap']?.gotHit) {
				this.attrLastMove('[still]');
				this.add('cant', pokemon, 'Shell Trap', 'Shell Trap');
				return null;
			}
		},
		condition: {
			duration: 1,
			onStart(pokemon) {
				this.add('-singleturn', pokemon, 'move: Shell Trap');
			},
			onHit(pokemon, source, move) {
				if (!pokemon.isAlly(source) && move.category === 'Physical') {
					pokemon.volatiles['shelltrap'].gotHit = true;
					const action = this.queue.willMove(pokemon);
					if (action) {
						this.queue.prioritizeAction(action);
					}
				}
			},
		},
		secondary: null,
		target: "allAdjacentFoes",
		type: "Fire",
		contestType: "Tough",
	},
	shiftgear: {
		num: 508,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Shift Gear",
		pp: 10,
		priority: 0,
		flags: {snatch: 1},
		boosts: {
			spe: 2,
			atk: 1,
		},
		secondary: null,
		target: "self",
		type: "Steel",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Clever",
	},
	shockwave: {
		num: 351,
		accuracy: true,
		basePower: 60,
		category: "Special",
		name: "Shock Wave",
		pp: 20,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Electric",
		contestType: "Cool",
	},
	shoreup: {
		num: 659,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Shore Up",
		pp: 10,
		priority: 0,
		flags: {snatch: 1, heal: 1},
		onHit(pokemon) {
			let factor = 0.5;
			if (this.field.isWeather('sandstorm')) {
				factor = 0.667;
			}
			return !!this.heal(this.modify(pokemon.maxhp, factor));
		},
		secondary: null,
		target: "self",
		type: "Ground",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Beautiful",
	},
	signalbeam: {
		num: 324,
		accuracy: 100,
		basePower: 75,
		category: "Special",
		isNonstandard: "Past",
		name: "Signal Beam",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 10,
			volatileStatus: 'confusion',
		},
		target: "normal",
		type: "Bug",
		contestType: "Beautiful",
	},
	silverwind: {
		num: 318,
		accuracy: 100,
		basePower: 60,
		category: "Special",
		isNonstandard: "Past",
		name: "Silver Wind",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 10,
			self: {
				boosts: {
					atk: 1,
					def: 1,
					spa: 1,
					spd: 1,
					spe: 1,
				},
			},
		},
		target: "normal",
		type: "Bug",
		contestType: "Beautiful",
	},
	simplebeam: {
		num: 493,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Simple Beam",
		pp: 15,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1, mystery: 1},
		onTryHit(target) {
			if (target.getAbility().isPermanent || target.ability === 'simple' || target.ability === 'truant') {
				return false;
			}
		},
		onHit(pokemon) {
			const oldAbility = pokemon.setAbility('simple');
			if (oldAbility) {
				this.add('-ability', pokemon, 'Simple', '[from] move: Simple Beam');
				return;
			}
			return false;
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {boost: {spa: 1}},
		contestType: "Cute",
	},
	sing: {
		num: 47,
		accuracy: 55,
		basePower: 0,
		category: "Status",
		name: "Sing",
		pp: 15,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1, sound: 1, authentic: 1},
		status: 'slp',
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {boost: {spe: 1}},
		contestType: "Cute",
	},
	sinisterarrowraid: {
		num: 695,
		accuracy: true,
		basePower: 180,
		category: "Physical",
		isNonstandard: "Past",
		name: "Sinister Arrow Raid",
		pp: 1,
		priority: 0,
		flags: {},
		isZ: "decidiumz",
		secondary: null,
		target: "normal",
		type: "Ghost",
		contestType: "Cool",
	},
	sizzlyslide: {
		num: 735,
		accuracy: 100,
		basePower: 60,
		category: "Physical",
		isNonstandard: "LGPE",
		name: "Sizzly Slide",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1, defrost: 1},
		secondary: {
			chance: 100,
			status: 'brn',
		},
		target: "normal",
		type: "Fire",
		contestType: "Clever",
	},
	sketch: {
		num: 166,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Past",
		name: "Sketch",
		pp: 1,
		noPPBoosts: true,
		priority: 0,
		flags: {authentic: 1, mystery: 1},
		onHit(target, source) {
			const disallowedMoves = ['chatter', 'sketch', 'struggle'];
			const move = target.lastMove;
			if (source.transformed || !move || source.moves.includes(move.id)) return false;
			if (disallowedMoves.includes(move.id) || move.isZ || move.isMax) return false;
			const sketchIndex = source.moves.indexOf('sketch');
			if (sketchIndex < 0) return false;
			const sketchedMove = {
				move: move.name,
				id: move.id,
				pp: move.pp,
				maxpp: move.pp,
				target: move.target,
				disabled: false,
				used: false,
			};
			source.moveSlots[sketchIndex] = sketchedMove;
			source.baseMoveSlots[sketchIndex] = sketchedMove;
			this.add('-activate', source, 'move: Sketch', move.name);
		},
		noSketch: true,
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {boost: {atk: 1, def: 1, spa: 1, spd: 1, spe: 1}},
		contestType: "Clever",
	},
	skillswap: {
		num: 285,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Skill Swap",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, authentic: 1, mystery: 1},
		onTryHit(target, source) {
			const additionalBannedAbilities = ['hungerswitch', 'illusion', 'neutralizinggas', 'wonderguard'];
			if (
				target.volatiles['dynamax'] ||
				target.getAbility().isPermanent || source.getAbility().isPermanent ||
				additionalBannedAbilities.includes(target.ability) || additionalBannedAbilities.includes(source.ability)
			) {
				return false;
			}
		},
		onHit(target, source, move) {
			const targetAbility = target.getAbility();
			const sourceAbility = source.getAbility();
			if (target.isAlly(source)) {
				this.add('-activate', source, 'move: Skill Swap', '', '', '[of] ' + target);
			} else {
				this.add('-activate', source, 'move: Skill Swap', targetAbility, sourceAbility, '[of] ' + target);
			}
			this.singleEvent('End', sourceAbility, source.abilityState, source);
			this.singleEvent('End', targetAbility, target.abilityState, target);
			source.ability = targetAbility.id;
			target.ability = sourceAbility.id;
			source.abilityState = {id: this.toID(source.ability), target: source};
			target.abilityState = {id: this.toID(target.ability), target: target};
			if (!target.isAlly(source)) target.volatileStaleness = 'external';
			this.singleEvent('Start', targetAbility, source.abilityState, source);
			this.singleEvent('Start', sourceAbility, target.abilityState, target);
		},
		secondary: null,
		target: "normal",
		type: "Psychic",
		zMove: {boost: {spe: 1}},
		contestType: "Clever",
	},
	skittersmack: {
		num: 806,
		accuracy: 90,
		basePower: 70,
		category: "Physical",
		name: "Skitter Smack",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 100,
			boosts: {
				spa: -1,
			},
		},
		target: "normal",
		type: "Bug",
	},
	skullbash: {
		num: 130,
		accuracy: 100,
		basePower: 130,
		category: "Physical",
		name: "Skull Bash",
		pp: 10,
		priority: 0,
		flags: {contact: 1, charge: 1, protect: 1, mirror: 1},
		onTryMove(attacker, defender, move) {
			if (attacker.removeVolatile(move.id)) {
				return;
			}
			this.add('-prepare', attacker, move.name);
			this.boost({def: 1}, attacker, attacker, move);
			if (!this.runEvent('ChargeMove', attacker, defender, move)) {
				return;
			}
			attacker.addVolatile('twoturnmove', defender);
			return null;
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		contestType: "Tough",
	},
	skyattack: {
		num: 143,
		accuracy: 90,
		basePower: 140,
		category: "Physical",
		name: "Sky Attack",
		pp: 5,
		priority: 0,
		flags: {charge: 1, protect: 1, mirror: 1, distance: 1},
		critRatio: 2,
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
		secondary: {
			chance: 30,
			volatileStatus: 'flinch',
		},
		target: "any",
		type: "Flying",
		contestType: "Cool",
	},
	skydrop: {
		num: 507,
		accuracy: 100,
		basePower: 60,
		category: "Physical",
		isNonstandard: "Past",
		name: "Sky Drop",
		pp: 10,
		priority: 0,
		flags: {contact: 1, charge: 1, protect: 1, mirror: 1, gravity: 1, distance: 1},
		onModifyMove(move, source) {
			if (!source.volatiles['skydrop']) {
				move.accuracy = true;
				move.flags.contact = 0;
			}
		},
		onMoveFail(target, source) {
			if (source.volatiles['twoturnmove'] && source.volatiles['twoturnmove'].duration === 1) {
				source.removeVolatile('skydrop');
				source.removeVolatile('twoturnmove');
				if (target === this.effectState.target) {
					this.add('-end', target, 'Sky Drop', '[interrupt]');
				}
			}
		},
		onTry(source, target) {
			return !target.fainted;
		},
		onTryHit(target, source, move) {
			if (source.removeVolatile(move.id)) {
				if (target !== source.volatiles['twoturnmove'].source) return false;

				if (target.hasType('Flying')) {
					this.add('-immune', target);
					return null;
				}
			} else {
				if (target.volatiles['substitute'] || target.isAlly(source)) {
					return false;
				}
				if (target.getWeight() >= 2000) {
					this.add('-fail', target, 'move: Sky Drop', '[heavy]');
					return null;
				}

				this.add('-prepare', source, move.name, target);
				source.addVolatile('twoturnmove', target);
				return null;
			}
		},
		onHit(target, source) {
			if (target.hp) this.add('-end', target, 'Sky Drop');
		},
		condition: {
			duration: 2,
			onAnyDragOut(pokemon) {
				if (pokemon === this.effectState.target || pokemon === this.effectState.source) return false;
			},
			onFoeTrapPokemonPriority: -15,
			onFoeTrapPokemon(defender) {
				if (defender !== this.effectState.source) return;
				defender.trapped = true;
			},
			onFoeBeforeMovePriority: 12,
			onFoeBeforeMove(attacker, defender, move) {
				if (attacker === this.effectState.source) {
					attacker.activeMoveActions--;
					this.debug('Sky drop nullifying.');
					return null;
				}
			},
			onRedirectTargetPriority: 99,
			onRedirectTarget(target, source, source2) {
				if (source !== this.effectState.target) return;
				if (this.effectState.source.fainted) return;
				return this.effectState.source;
			},
			onAnyInvulnerability(target, source, move) {
				if (target !== this.effectState.target && target !== this.effectState.source) {
					return;
				}
				if (source === this.effectState.target && target === this.effectState.source) {
					return;
				}
				if (['gust', 'twister', 'skyuppercut', 'thunder', 'hurricane', 'smackdown', 'thousandarrows'].includes(move.id)) {
					return;
				}
				return false;
			},
			onAnyBasePower(basePower, target, source, move) {
				if (target !== this.effectState.target && target !== this.effectState.source) {
					return;
				}
				if (source === this.effectState.target && target === this.effectState.source) {
					return;
				}
				if (move.id === 'gust' || move.id === 'twister') {
					return this.chainModify(2);
				}
			},
			onFaint(target) {
				if (target.volatiles['skydrop'] && target.volatiles['twoturnmove'].source) {
					this.add('-end', target.volatiles['twoturnmove'].source, 'Sky Drop', '[interrupt]');
				}
			},
		},
		secondary: null,
		target: "any",
		type: "Flying",
		contestType: "Tough",
	},
	skyuppercut: {
		num: 327,
		accuracy: 90,
		basePower: 85,
		category: "Physical",
		isNonstandard: "Past",
		name: "Sky Uppercut",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, punch: 1},
		secondary: null,
		target: "normal",
		type: "Fighting",
		contestType: "Cool",
	},
	slackoff: {
		num: 303,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Slack Off",
		pp: 10,
		priority: 0,
		flags: {snatch: 1, heal: 1},
		heal: [1, 2],
		secondary: null,
		target: "self",
		type: "Normal",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Cute",
	},
	slam: {
		num: 21,
		accuracy: 75,
		basePower: 80,
		category: "Physical",
		name: "Slam",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, nonsky: 1},
		secondary: null,
		target: "normal",
		type: "Normal",
		contestType: "Tough",
	},
	slash: {
		num: 163,
		accuracy: 100,
		basePower: 70,
		category: "Physical",
		name: "Slash",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		critRatio: 2,
		secondary: null,
		target: "normal",
		type: "Normal",
		contestType: "Cool",
	},
	sleeppowder: {
		num: 79,
		accuracy: 75,
		basePower: 0,
		category: "Status",
		name: "Sleep Powder",
		pp: 15,
		priority: 0,
		flags: {powder: 1, protect: 1, reflectable: 1, mirror: 1},
		status: 'slp',
		secondary: null,
		target: "normal",
		type: "Grass",
		zMove: {boost: {spe: 1}},
		contestType: "Clever",
	},
	sleeptalk: {
		num: 214,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Sleep Talk",
		pp: 10,
		priority: 0,
		flags: {},
		sleepUsable: true,
		onTry(source) {
			return source.status === 'slp' || source.hasAbility('comatose');
		},
		onHit(pokemon) {
			const noSleepTalk = [
				'assist', 'beakblast', 'belch', 'bide', 'celebrate', 'chatter', 'copycat', 'dynamaxcannon', 'focuspunch', 'mefirst', 'metronome', 'mimic', 'mirrormove', 'naturepower', 'shelltrap', 'sketch', 'sleeptalk', 'uproar',
			];
			const moves = [];
			for (const moveSlot of pokemon.moveSlots) {
				const moveid = moveSlot.id;
				if (!moveid) continue;
				const move = this.dex.moves.get(moveid);
				if (noSleepTalk.includes(moveid) || move.flags['charge'] || (move.isZ && move.basePower !== 1)) {
					continue;
				}
				moves.push(moveid);
			}
			let randomMove = '';
			if (moves.length) randomMove = this.sample(moves);
			if (!randomMove) {
				return false;
			}
			this.actions.useMove(randomMove, pokemon);
		},
		secondary: null,
		target: "self",
		type: "Normal",
		zMove: {effect: 'crit2'},
		contestType: "Cute",
	},
	sludge: {
		num: 124,
		accuracy: 100,
		basePower: 65,
		category: "Special",
		name: "Sludge",
		pp: 20,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 30,
			status: 'psn',
		},
		target: "normal",
		type: "Poison",
		contestType: "Tough",
	},
	sludgebomb: {
		num: 188,
		accuracy: 100,
		basePower: 90,
		category: "Special",
		name: "Sludge Bomb",
		pp: 10,
		priority: 0,
		flags: {bullet: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 30,
			status: 'psn',
		},
		target: "normal",
		type: "Poison",
		contestType: "Tough",
	},
	sludgewave: {
		num: 482,
		accuracy: 100,
		basePower: 95,
		category: "Special",
		name: "Sludge Wave",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 10,
			status: 'psn',
		},
		target: "allAdjacent",
		type: "Poison",
		contestType: "Tough",
	},
	smackdown: {
		num: 479,
		accuracy: 100,
		basePower: 50,
		category: "Physical",
		name: "Smack Down",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1, nonsky: 1},
		volatileStatus: 'smackdown',
		condition: {
			noCopy: true,
			onStart(pokemon) {
				let applies = false;
				if (pokemon.hasType('Flying') || pokemon.hasAbility('levitate')) applies = true;
				if (pokemon.hasItem('ironball') || pokemon.volatiles['ingrain'] ||
					this.field.getPseudoWeather('gravity')) applies = false;
				if (pokemon.removeVolatile('fly') || pokemon.removeVolatile('bounce')) {
					applies = true;
					this.queue.cancelMove(pokemon);
					pokemon.removeVolatile('twoturnmove');
				}
				if (pokemon.volatiles['magnetrise']) {
					applies = true;
					delete pokemon.volatiles['magnetrise'];
				}
				if (pokemon.volatiles['telekinesis']) {
					applies = true;
					delete pokemon.volatiles['telekinesis'];
				}
				if (!applies) return false;
				this.add('-start', pokemon, 'Smack Down');
			},
			onRestart(pokemon) {
				if (pokemon.removeVolatile('fly') || pokemon.removeVolatile('bounce')) {
					this.queue.cancelMove(pokemon);
					this.add('-start', pokemon, 'Smack Down');
				}
			},
			// groundedness implemented in battle.engine.js:BattlePokemon#isGrounded
		},
		secondary: null,
		target: "normal",
		type: "Rock",
		contestType: "Tough",
	},
	smartstrike: {
		num: 684,
		accuracy: true,
		basePower: 70,
		category: "Physical",
		name: "Smart Strike",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Steel",
		contestType: "Cool",
	},
	smellingsalts: {
		num: 265,
		accuracy: 100,
		basePower: 70,
		basePowerCallback(pokemon, target, move) {
			if (target.status === 'par') return move.basePower * 2;
			return move.basePower;
		},
		category: "Physical",
		isNonstandard: "Past",
		name: "Smelling Salts",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onHit(target) {
			if (target.status === 'par') target.cureStatus();
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		contestType: "Tough",
	},
	smog: {
		num: 123,
		accuracy: 70,
		basePower: 30,
		category: "Special",
		name: "Smog",
		pp: 20,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 40,
			status: 'psn',
		},
		target: "normal",
		type: "Poison",
		contestType: "Tough",
	},
	smokescreen: {
		num: 108,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Smokescreen",
		pp: 20,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1},
		boosts: {
			accuracy: -1,
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {boost: {evasion: 1}},
		contestType: "Clever",
	},
	snaptrap: {
		num: 779,
		accuracy: 100,
		basePower: 35,
		category: "Physical",
		name: "Snap Trap",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		volatileStatus: 'partiallytrapped',
		secondary: null,
		target: "normal",
		type: "Grass",
	},
	snarl: {
		num: 555,
		accuracy: 95,
		basePower: 55,
		category: "Special",
		name: "Snarl",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1, sound: 1, authentic: 1},
		secondary: {
			chance: 100,
			boosts: {
				spa: -1,
			},
		},
		target: "allAdjacentFoes",
		type: "Dark",
		contestType: "Tough",
	},
	snatch: {
		num: 289,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Past",
		name: "Snatch",
		pp: 10,
		priority: 4,
		flags: {authentic: 1},
		volatileStatus: 'snatch',
		condition: {
			duration: 1,
			onStart(pokemon) {
				this.add('-singleturn', pokemon, 'Snatch');
			},
			onAnyPrepareHitPriority: -1,
			onAnyPrepareHit(source, target, move) {
				const snatchUser = this.effectState.source;
				if (snatchUser.isSkyDropped()) return;
				if (!move || move.isZ || move.isMax || !move.flags['snatch'] || move.sourceEffect === 'snatch') {
					return;
				}
				snatchUser.removeVolatile('snatch');
				this.add('-activate', snatchUser, 'move: Snatch', '[of] ' + source);
				this.actions.useMove(move.id, snatchUser);
				return null;
			},
		},
		secondary: null,
		pressureTarget: "foeSide",
		target: "self",
		type: "Dark",
		zMove: {boost: {spe: 2}},
		contestType: "Clever",
	},
	snipeshot: {
		num: 745,
		accuracy: 100,
		basePower: 80,
		category: "Special",
		name: "Snipe Shot",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		critRatio: 2,
		tracksTarget: true,
		secondary: null,
		target: "normal",
		type: "Water",
	},
	snore: {
		num: 173,
		accuracy: 100,
		basePower: 50,
		category: "Special",
		name: "Snore",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1, sound: 1, authentic: 1},
		sleepUsable: true,
		onTry(source) {
			return source.status === 'slp' || source.hasAbility('comatose');
		},
		secondary: {
			chance: 30,
			volatileStatus: 'flinch',
		},
		target: "normal",
		type: "Normal",
		contestType: "Cute",
	},
	soak: {
		num: 487,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Soak",
		pp: 20,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1, mystery: 1},
		onHit(target) {
			if (target.getTypes().join() === 'Water' || !target.setType('Water')) {
				// Soak should animate even when it fails.
				// Returning false would suppress the animation.
				this.add('-fail', target);
				return null;
			}
			this.add('-start', target, 'typechange', 'Water');
		},
		secondary: null,
		target: "normal",
		type: "Water",
		zMove: {boost: {spa: 1}},
		contestType: "Cute",
	},
	softboiled: {
		num: 135,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Soft-Boiled",
		pp: 10,
		priority: 0,
		flags: {snatch: 1, heal: 1},
		heal: [1, 2],
		secondary: null,
		target: "self",
		type: "Normal",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Cute",
	},
	solarbeam: {
		num: 76,
		accuracy: 100,
		basePower: 120,
		category: "Special",
		name: "Solar Beam",
		pp: 10,
		priority: 0,
		flags: {charge: 1, protect: 1, mirror: 1},
		onTryMove(attacker, defender, move) {
			if (attacker.removeVolatile(move.id)) {
				return;
			}
			this.add('-prepare', attacker, move.name);
			if (['sunnyday', 'desolateland'].includes(attacker.effectiveWeather())) {
				this.attrLastMove('[still]');
				this.addMove('-anim', attacker, move.name, defender);
				return;
			}
			if (!this.runEvent('ChargeMove', attacker, defender, move)) {
				return;
			}
			attacker.addVolatile('twoturnmove', defender);
			return null;
		},
		onBasePower(basePower, pokemon, target) {
			if (['raindance', 'primordialsea', 'sandstorm', 'hail'].includes(pokemon.effectiveWeather())) {
				this.debug('weakened by weather');
				return this.chainModify(0.5);
			}
		},
		secondary: null,
		target: "normal",
		type: "Grass",
		contestType: "Cool",
	},
	solarblade: {
		num: 669,
		accuracy: 100,
		basePower: 125,
		category: "Physical",
		name: "Solar Blade",
		pp: 10,
		priority: 0,
		flags: {contact: 1, charge: 1, protect: 1, mirror: 1},
		onTryMove(attacker, defender, move) {
			if (attacker.removeVolatile(move.id)) {
				return;
			}
			this.add('-prepare', attacker, move.name);
			if (['sunnyday', 'desolateland'].includes(attacker.effectiveWeather())) {
				this.attrLastMove('[still]');
				this.addMove('-anim', attacker, move.name, defender);
				return;
			}
			if (!this.runEvent('ChargeMove', attacker, defender, move)) {
				return;
			}
			attacker.addVolatile('twoturnmove', defender);
			return null;
		},
		onBasePower(basePower, pokemon, target) {
			if (['raindance', 'primordialsea', 'sandstorm', 'hail'].includes(pokemon.effectiveWeather())) {
				this.debug('weakened by weather');
				return this.chainModify(0.5);
			}
		},
		secondary: null,
		target: "normal",
		type: "Grass",
		contestType: "Cool",
	},
	sonicboom: {
		num: 49,
		accuracy: 90,
		basePower: 0,
		damage: 20,
		category: "Special",
		isNonstandard: "Past",
		name: "Sonic Boom",
		pp: 20,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Normal",
		contestType: "Cool",
	},
	soulstealing7starstrike: {
		num: 699,
		accuracy: true,
		basePower: 195,
		category: "Physical",
		isNonstandard: "Past",
		name: "Soul-Stealing 7-Star Strike",
		pp: 1,
		priority: 0,
		flags: {contact: 1},
		isZ: "marshadiumz",
		secondary: null,
		target: "normal",
		type: "Ghost",
		contestType: "Cool",
	},
	spacialrend: {
		num: 460,
		accuracy: 95,
		basePower: 100,
		category: "Special",
		name: "Spacial Rend",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		critRatio: 2,
		secondary: null,
		target: "normal",
		type: "Dragon",
		contestType: "Beautiful",
	},
	spark: {
		num: 209,
		accuracy: 100,
		basePower: 65,
		category: "Physical",
		name: "Spark",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 30,
			status: 'par',
		},
		target: "normal",
		type: "Electric",
		contestType: "Cool",
	},
	sparklingaria: {
		num: 664,
		accuracy: 100,
		basePower: 90,
		category: "Special",
		name: "Sparkling Aria",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, sound: 1, authentic: 1},
		secondary: {
			dustproof: true,
			chance: 100,
			onHit(target) {
				if (target.status === 'brn') target.cureStatus();
			},
		},
		target: "allAdjacent",
		type: "Water",
		contestType: "Tough",
	},
	sparklyswirl: {
		num: 740,
		accuracy: 85,
		basePower: 120,
		category: "Special",
		isNonstandard: "LGPE",
		name: "Sparkly Swirl",
		pp: 5,
		priority: 0,
		flags: {protect: 1},
		self: {
			onHit(pokemon, source, move) {
				this.add('-activate', source, 'move: Aromatherapy');
				for (const ally of source.side.pokemon) {
					if (ally !== source && (ally.volatiles['substitute'] && !move.infiltrates)) {
						continue;
					}
					ally.cureStatus();
				}
			},
		},
		secondary: null,
		target: "normal",
		type: "Fairy",
		contestType: "Clever",
	},
	spectralthief: {
		num: 712,
		accuracy: 100,
		basePower: 90,
		category: "Physical",
		name: "Spectral Thief",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, authentic: 1},
		stealsBoosts: true,
		// Boost stealing implemented in scripts.js
		secondary: null,
		target: "normal",
		type: "Ghost",
		contestType: "Cool",
	},
	speedswap: {
		num: 683,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Speed Swap",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, authentic: 1, mystery: 1},
		onHit(target, source) {
			const targetSpe = target.storedStats.spe;
			target.storedStats.spe = source.storedStats.spe;
			source.storedStats.spe = targetSpe;
			this.add('-activate', source, 'move: Speed Swap', '[of] ' + target);
		},
		secondary: null,
		target: "normal",
		type: "Psychic",
		zMove: {boost: {spe: 1}},
		contestType: "Clever",
	},
	spiderweb: {
		num: 169,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Past",
		name: "Spider Web",
		pp: 10,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1},
		onHit(target, source, move) {
			return target.addVolatile('trapped', source, move, 'trapper');
		},
		secondary: null,
		target: "normal",
		type: "Bug",
		zMove: {boost: {def: 1}},
		contestType: "Clever",
	},
	spikecannon: {
		num: 131,
		accuracy: 100,
		basePower: 20,
		category: "Physical",
		isNonstandard: "Past",
		name: "Spike Cannon",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		multihit: [2, 5],
		secondary: null,
		target: "normal",
		type: "Normal",
		maxMove: {basePower: 120},
		contestType: "Cool",
	},
	spikes: {
		num: 191,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Spikes",
		pp: 20,
		priority: 0,
		flags: {reflectable: 1, nonsky: 1},
		sideCondition: 'spikes',
		condition: {
			// this is a side condition
			onSideStart(side) {
				this.add('-sidestart', side, 'Spikes');
				this.effectState.layers = 1;
			},
			onSideRestart(side) {
				if (this.effectState.layers >= 3) return false;
				this.add('-sidestart', side, 'Spikes');
				this.effectState.layers++;
			},
			onSwitchIn(pokemon) {
				if (!pokemon.isGrounded()) return;
				if (pokemon.hasItem('heavydutyboots')) return;
				const damageAmounts = [0, 3, 4, 6]; // 1/8, 1/6, 1/4
				this.damage(damageAmounts[this.effectState.layers] * pokemon.maxhp / 24);
			},
		},
		secondary: null,
		target: "foeSide",
		type: "Ground",
		zMove: {boost: {def: 1}},
		contestType: "Clever",
	},
	spikyshield: {
		num: 596,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Spiky Shield",
		pp: 10,
		priority: 4,
		flags: {},
		stallingMove: true,
		volatileStatus: 'spikyshield',
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
					if (['gmaxoneblow', 'gmaxrapidflow'].includes(move.id)) return;
					if (move.isZ || move.isMax) target.getMoveHitData(move).zBrokeProtect = true;
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
				if (this.checkMoveMakesContact(move, source, target)) {
					this.damage(source.baseMaxhp / 8, source, target);
				}
				return this.NOT_FAIL;
			},
			onHit(target, source, move) {
				if (move.isZOrMaxPowered && this.checkMoveMakesContact(move, source, target)) {
					this.damage(source.baseMaxhp / 8, source, target);
				}
			},
		},
		secondary: null,
		target: "self",
		type: "Grass",
		zMove: {boost: {def: 1}},
		contestType: "Tough",
	},
	spiritbreak: {
		num: 789,
		accuracy: 100,
		basePower: 75,
		category: "Physical",
		name: "Spirit Break",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 100,
			boosts: {
				spa: -1,
			},
		},
		target: "normal",
		type: "Fairy",
	},
	spiritshackle: {
		num: 662,
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		name: "Spirit Shackle",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 100,
			onHit(target, source, move) {
				if (source.isActive) target.addVolatile('trapped', source, move, 'trapper');
			},
		},
		target: "normal",
		type: "Ghost",
		contestType: "Tough",
	},
	spitup: {
		num: 255,
		accuracy: 100,
		basePower: 0,
		basePowerCallback(pokemon) {
			if (!pokemon.volatiles['stockpile']?.layers) return false;
			return pokemon.volatiles['stockpile'].layers * 100;
		},
		category: "Special",
		name: "Spit Up",
		pp: 10,
		priority: 0,
		flags: {protect: 1},
		onTry(source) {
			return !!source.volatiles['stockpile'];
		},
		onAfterMove(pokemon) {
			pokemon.removeVolatile('stockpile');
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		contestType: "Tough",
	},
	spite: {
		num: 180,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Spite",
		pp: 10,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1, authentic: 1},
		onHit(target) {
			let move: Move | ActiveMove | null = target.lastMove;
			if (!move || move.isZ) return false;
			if (move.isMax && move.baseMove) move = this.dex.moves.get(move.baseMove);

			const ppDeducted = target.deductPP(move.id, 4);
			if (!ppDeducted) return false;
			this.add("-activate", target, 'move: Spite', move.name, ppDeducted);
		},
		secondary: null,
		target: "normal",
		type: "Ghost",
		zMove: {effect: 'heal'},
		contestType: "Tough",
	},
	splash: {
		num: 150,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Splash",
		pp: 40,
		priority: 0,
		flags: {gravity: 1},
		onTry(source, target, move) {
			// Additional Gravity check for Z-move variant
			if (this.field.getPseudoWeather('Gravity')) {
				this.add('cant', source, 'move: Gravity', move);
				return null;
			}
		},
		onTryHit(target, source) {
			this.add('-nothing');
		},
		secondary: null,
		target: "self",
		type: "Normal",
		zMove: {boost: {atk: 3}},
		contestType: "Cute",
	},
	splinteredstormshards: {
		num: 727,
		accuracy: true,
		basePower: 190,
		category: "Physical",
		isNonstandard: "Past",
		name: "Splintered Stormshards",
		pp: 1,
		priority: 0,
		flags: {},
		onHit() {
			this.field.clearTerrain();
		},
		onAfterSubDamage() {
			this.field.clearTerrain();
		},
		isZ: "lycaniumz",
		secondary: null,
		target: "normal",
		type: "Rock",
		contestType: "Cool",
	},
	splishysplash: {
		num: 730,
		accuracy: 100,
		basePower: 90,
		category: "Special",
		isNonstandard: "LGPE",
		name: "Splishy Splash",
		pp: 15,
		priority: 0,
		flags: {protect: 1},
		secondary: {
			chance: 30,
			status: 'par',
		},
		target: "allAdjacentFoes",
		type: "Water",
		contestType: "Cool",
	},
	spore: {
		num: 147,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Spore",
		pp: 15,
		priority: 0,
		flags: {powder: 1, protect: 1, reflectable: 1, mirror: 1},
		status: 'slp',
		secondary: null,
		target: "normal",
		type: "Grass",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Beautiful",
	},
	spotlight: {
		num: 671,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Past",
		name: "Spotlight",
		pp: 15,
		priority: 3,
		flags: {protect: 1, reflectable: 1, mystery: 1},
		volatileStatus: 'spotlight',
		onTryHit(target) {
			if (this.activePerHalf === 1) return false;
		},
		condition: {
			duration: 1,
			onStart(pokemon) {
				this.add('-singleturn', pokemon, 'move: Spotlight');
			},
			onFoeRedirectTargetPriority: 2,
			onFoeRedirectTarget(target, source, source2, move) {
				if (this.validTarget(this.effectState.target, source, move.target)) {
					this.debug("Spotlight redirected target of move");
					return this.effectState.target;
				}
			},
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {boost: {spd: 1}},
		contestType: "Cute",
	},
	stealthrock: {
		num: 446,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Stealth Rock",
		pp: 20,
		priority: 0,
		flags: {reflectable: 1},
		sideCondition: 'stealthrock',
		condition: {
			// this is a side condition
			onSideStart(side) {
				this.add('-sidestart', side, 'move: Stealth Rock');
			},
			onSwitchIn(pokemon) {
				if (pokemon.hasItem('heavydutyboots')) return;
				const typeMod = this.clampIntRange(pokemon.runEffectiveness(this.dex.getActiveMove('stealthrock')), -6, 6);
				this.damage(pokemon.maxhp * Math.pow(2, typeMod) / 8);
			},
		},
		secondary: null,
		target: "foeSide",
		type: "Rock",
		zMove: {boost: {def: 1}},
		contestType: "Cool",
	},
	steameruption: {
		num: 592,
		accuracy: 95,
		basePower: 110,
		category: "Special",
		name: "Steam Eruption",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1, defrost: 1},
		thawsTarget: true,
		secondary: {
			chance: 30,
			status: 'brn',
		},
		target: "normal",
		type: "Water",
		contestType: "Beautiful",
	},
	steamroller: {
		num: 537,
		accuracy: 100,
		basePower: 65,
		category: "Physical",
		isNonstandard: "Past",
		name: "Steamroller",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 30,
			volatileStatus: 'flinch',
		},
		target: "normal",
		type: "Bug",
		contestType: "Tough",
	},
	steelbeam: {
		num: 796,
		accuracy: 95,
		basePower: 140,
		category: "Special",
		name: "Steel Beam",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		mindBlownRecoil: true,
		onAfterMove(pokemon, target, move) {
			if (move.mindBlownRecoil && !move.multihit) {
				this.damage(Math.round(pokemon.maxhp / 2), pokemon, pokemon, this.dex.conditions.get('Steel Beam'), true);
			}
		},
		secondary: null,
		target: "normal",
		type: "Steel",
	},
	steelroller: {
		num: 798,
		accuracy: 100,
		basePower: 130,
		category: "Physical",
		name: "Steel Roller",
		pp: 5,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onTry() {
			return !this.field.isTerrain('');
		},
		onHit() {
			this.field.clearTerrain();
		},
		onAfterSubDamage() {
			this.field.clearTerrain();
		},
		secondary: null,
		target: "normal",
		type: "Steel",
	},
	steelwing: {
		num: 211,
		accuracy: 90,
		basePower: 70,
		category: "Physical",
		name: "Steel Wing",
		pp: 25,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 10,
			self: {
				boosts: {
					def: 1,
				},
			},
		},
		target: "normal",
		type: "Steel",
		contestType: "Cool",
	},
	stickyweb: {
		num: 564,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Sticky Web",
		pp: 20,
		priority: 0,
		flags: {reflectable: 1},
		sideCondition: 'stickyweb',
		condition: {
			onSideStart(side) {
				this.add('-sidestart', side, 'move: Sticky Web');
			},
			onSwitchIn(pokemon) {
				if (!pokemon.isGrounded()) return;
				if (pokemon.hasItem('heavydutyboots')) return;
				this.add('-activate', pokemon, 'move: Sticky Web');
				this.boost({spe: -1}, pokemon, this.effectState.source, this.dex.getActiveMove('stickyweb'));
			},
		},
		secondary: null,
		pressureTarget: "self",
		target: "foeSide",
		type: "Bug",
		zMove: {boost: {spe: 1}},
		contestType: "Tough",
	},
	stockpile: {
		num: 254,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Stockpile",
		pp: 20,
		priority: 0,
		flags: {snatch: 1},
		onTry(source) {
			if (source.volatiles['stockpile'] && source.volatiles['stockpile'].layers >= 3) return false;
		},
		volatileStatus: 'stockpile',
		condition: {
			noCopy: true,
			onStart(target) {
				this.effectState.layers = 1;
				this.effectState.def = 0;
				this.effectState.spd = 0;
				this.add('-start', target, 'stockpile' + this.effectState.layers);
				const [curDef, curSpD] = [target.boosts.def, target.boosts.spd];
				this.boost({def: 1, spd: 1}, target, target);
				if (curDef !== target.boosts.def) this.effectState.def--;
				if (curSpD !== target.boosts.spd) this.effectState.spd--;
			},
			onRestart(target) {
				if (this.effectState.layers >= 3) return false;
				this.effectState.layers++;
				this.add('-start', target, 'stockpile' + this.effectState.layers);
				const curDef = target.boosts.def;
				const curSpD = target.boosts.spd;
				this.boost({def: 1, spd: 1}, target, target);
				if (curDef !== target.boosts.def) this.effectState.def--;
				if (curSpD !== target.boosts.spd) this.effectState.spd--;
			},
			onEnd(target) {
				if (this.effectState.def || this.effectState.spd) {
					const boosts: SparseBoostsTable = {};
					if (this.effectState.def) boosts.def = this.effectState.def;
					if (this.effectState.spd) boosts.spd = this.effectState.spd;
					this.boost(boosts, target, target);
				}
				this.add('-end', target, 'Stockpile');
				if (this.effectState.def !== this.effectState.layers * -1 || this.effectState.spd !== this.effectState.layers * -1) {
					this.hint("In Gen 7, Stockpile keeps track of how many times it successfully altered each stat individually.");
				}
			},
		},
		secondary: null,
		target: "self",
		type: "Normal",
		zMove: {effect: 'heal'},
		contestType: "Tough",
	},
	stokedsparksurfer: {
		num: 700,
		accuracy: true,
		basePower: 175,
		category: "Special",
		isNonstandard: "Past",
		name: "Stoked Sparksurfer",
		pp: 1,
		priority: 0,
		flags: {},
		isZ: "aloraichiumz",
		secondary: {
			chance: 100,
			status: 'par',
		},
		target: "normal",
		type: "Electric",
		contestType: "Cool",
	},
	stomp: {
		num: 23,
		accuracy: 100,
		basePower: 65,
		category: "Physical",
		name: "Stomp",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, nonsky: 1},
		secondary: {
			chance: 30,
			volatileStatus: 'flinch',
		},
		target: "normal",
		type: "Normal",
		contestType: "Tough",
	},
	stompingtantrum: {
		num: 707,
		accuracy: 100,
		basePower: 75,
		basePowerCallback(pokemon, target, move) {
			if (pokemon.moveLastTurnResult === false) {
				this.debug('doubling Stomping Tantrum BP due to previous move failure');
				return move.basePower * 2;
			}
			return move.basePower;
		},
		category: "Physical",
		name: "Stomping Tantrum",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Ground",
		contestType: "Tough",
	},
	stoneedge: {
		num: 444,
		accuracy: 80,
		basePower: 100,
		category: "Physical",
		name: "Stone Edge",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		critRatio: 2,
		secondary: null,
		target: "normal",
		type: "Rock",
		contestType: "Tough",
	},
	storedpower: {
		num: 500,
		accuracy: 100,
		basePower: 20,
		basePowerCallback(pokemon, target, move) {
			return move.basePower + 20 * pokemon.positiveBoosts();
		},
		category: "Special",
		name: "Stored Power",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Psychic",
		zMove: {basePower: 160},
		maxMove: {basePower: 130},
		contestType: "Clever",
	},
	stormthrow: {
		num: 480,
		accuracy: 100,
		basePower: 60,
		category: "Physical",
		name: "Storm Throw",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		willCrit: true,
		secondary: null,
		target: "normal",
		type: "Fighting",
		contestType: "Cool",
	},
	strangesteam: {
		num: 790,
		accuracy: 95,
		basePower: 90,
		category: "Special",
		name: "Strange Steam",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 20,
			volatileStatus: 'confusion',
		},
		target: "normal",
		type: "Fairy",
	},
	strength: {
		num: 70,
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		name: "Strength",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Normal",
		contestType: "Tough",
	},
	strengthsap: {
		num: 668,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Strength Sap",
		pp: 10,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1, heal: 1},
		onHit(target, source) {
			if (target.boosts.atk === -6) return false;
			const atk = target.getStat('atk', false, true);
			const success = this.boost({atk: -1}, target, source, null, false, true);
			return !!(this.heal(atk, source, target) || success);
		},
		secondary: null,
		target: "normal",
		type: "Grass",
		zMove: {boost: {def: 1}},
		contestType: "Cute",
	},
	stringshot: {
		num: 81,
		accuracy: 95,
		basePower: 0,
		category: "Status",
		name: "String Shot",
		pp: 40,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1},
		boosts: {
			spe: -2,
		},
		secondary: null,
		target: "allAdjacentFoes",
		type: "Bug",
		zMove: {boost: {spe: 1}},
		contestType: "Clever",
	},
	struggle: {
		num: 165,
		accuracy: true,
		basePower: 50,
		category: "Physical",
		name: "Struggle",
		pp: 1,
		noPPBoosts: true,
		priority: 0,
		flags: {contact: 1, protect: 1},
		noSketch: true,
		onModifyMove(move, pokemon, target) {
			move.type = '???';
			this.add('-activate', pokemon, 'move: Struggle');
		},
		struggleRecoil: true,
		secondary: null,
		target: "randomNormal",
		type: "Normal",
		contestType: "Tough",
	},
	strugglebug: {
		num: 522,
		accuracy: 100,
		basePower: 50,
		category: "Special",
		name: "Struggle Bug",
		pp: 20,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 100,
			boosts: {
				spa: -1,
			},
		},
		target: "allAdjacentFoes",
		type: "Bug",
		contestType: "Cute",
	},
	stuffcheeks: {
		num: 747,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Stuff Cheeks",
		pp: 10,
		priority: 0,
		flags: {snatch: 1},
		// Move disabling implemented in Battle#nextTurn in sim/battle.ts
		onTry(source) {
			const item = source.getItem();
			if (item.isBerry && source.eatItem(true)) {
				this.boost({def: 2}, source, null, null, false, true);
			} else {
				return false;
			}
		},
		secondary: null,
		target: "self",
		type: "Normal",
	},
	stunspore: {
		num: 78,
		accuracy: 75,
		basePower: 0,
		category: "Status",
		name: "Stun Spore",
		pp: 30,
		priority: 0,
		flags: {powder: 1, protect: 1, reflectable: 1, mirror: 1},
		status: 'par',
		secondary: null,
		target: "normal",
		type: "Grass",
		zMove: {boost: {spd: 1}},
		contestType: "Clever",
	},
	submission: {
		num: 66,
		accuracy: 80,
		basePower: 80,
		category: "Physical",
		name: "Submission",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		recoil: [1, 4],
		secondary: null,
		target: "normal",
		type: "Fighting",
		contestType: "Cool",
	},
	substitute: {
		num: 164,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Substitute",
		pp: 10,
		priority: 0,
		flags: {snatch: 1, nonsky: 1},
		volatileStatus: 'substitute',
		onTryHit(target) {
			if (target.volatiles['substitute']) {
				this.add('-fail', target, 'move: Substitute');
				return null;
			}
			if (target.hp <= target.maxhp / 4 || target.maxhp === 1) { // Shedinja clause
				this.add('-fail', target, 'move: Substitute', '[weak]');
				return null;
			}
		},
		onHit(target) {
			this.directDamage(target.maxhp / 4);
		},
		condition: {
			onStart(target) {
				this.add('-start', target, 'Substitute');
				this.effectState.hp = Math.floor(target.maxhp / 4);
				if (target.volatiles['partiallytrapped']) {
					this.add('-end', target, target.volatiles['partiallytrapped'].sourceEffect, '[partiallytrapped]', '[silent]');
					delete target.volatiles['partiallytrapped'];
				}
			},
			onTryPrimaryHitPriority: -1,
			onTryPrimaryHit(target, source, move) {
				if (target === source || move.flags['authentic'] || move.infiltrates) {
					return;
				}
				let damage = this.actions.getDamage(source, target, move);
				if (!damage && damage !== 0) {
					this.add('-fail', source);
					this.attrLastMove('[still]');
					return null;
				}
				damage = this.runEvent('SubDamage', target, source, move, damage);
				if (!damage) {
					return damage;
				}
				if (damage > target.volatiles['substitute'].hp) {
					damage = target.volatiles['substitute'].hp as number;
				}
				target.volatiles['substitute'].hp -= damage;
				source.lastDamage = damage;
				if (target.volatiles['substitute'].hp <= 0) {
					if (move.ohko) this.add('-ohko');
					target.removeVolatile('substitute');
				} else {
					this.add('-activate', target, 'move: Substitute', '[damage]');
				}
				if (move.recoil) {
					this.damage(this.actions.calcRecoilDamage(damage, move), source, target, 'recoil');
				}
				if (move.drain) {
					this.heal(Math.ceil(damage * move.drain[0] / move.drain[1]), source, target, 'drain');
				}
				this.singleEvent('AfterSubDamage', move, null, target, source, move, damage);
				this.runEvent('AfterSubDamage', target, source, move, damage);
				return this.HIT_SUBSTITUTE;
			},
			onEnd(target) {
				this.add('-end', target, 'Substitute');
			},
		},
		secondary: null,
		target: "self",
		type: "Normal",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Cute",
	},
	subzeroslammer: {
		num: 650,
		accuracy: true,
		basePower: 1,
		category: "Physical",
		isNonstandard: "Past",
		name: "Subzero Slammer",
		pp: 1,
		priority: 0,
		flags: {},
		isZ: "iciumz",
		secondary: null,
		target: "normal",
		type: "Ice",
		contestType: "Cool",
	},
	suckerpunch: {
		num: 389,
		accuracy: 100,
		basePower: 70,
		category: "Physical",
		name: "Sucker Punch",
		pp: 5,
		priority: 1,
		flags: {contact: 1, protect: 1, mirror: 1},
		onTry(source, target) {
			const action = this.queue.willMove(target);
			const move = action?.choice === 'move' ? action.move : null;
			if (!move || (move.category === 'Status' && move.id !== 'mefirst') || target.volatiles['mustrecharge']) {
				return false;
			}
		},
		secondary: null,
		target: "normal",
		type: "Dark",
		contestType: "Clever",
	},
	sunnyday: {
		num: 241,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Sunny Day",
		pp: 5,
		priority: 0,
		flags: {},
		weather: 'sunnyday',
		secondary: null,
		target: "all",
		type: "Fire",
		zMove: {boost: {spe: 1}},
		contestType: "Beautiful",
	},
	sunsteelstrike: {
		num: 713,
		accuracy: 100,
		basePower: 100,
		category: "Physical",
		name: "Sunsteel Strike",
		pp: 5,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		ignoreAbility: true,
		secondary: null,
		target: "normal",
		type: "Steel",
		contestType: "Cool",
	},
	superfang: {
		num: 162,
		accuracy: 90,
		basePower: 0,
		damageCallback(pokemon, target) {
			return this.clampIntRange(target.getUndynamaxedHP() / 2, 1);
		},
		category: "Physical",
		name: "Super Fang",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Normal",
		contestType: "Tough",
	},
	superpower: {
		num: 276,
		accuracy: 100,
		basePower: 120,
		category: "Physical",
		name: "Superpower",
		pp: 5,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		self: {
			boosts: {
				atk: -1,
				def: -1,
			},
		},
		secondary: null,
		target: "normal",
		type: "Fighting",
		contestType: "Tough",
	},
	supersonic: {
		num: 48,
		accuracy: 55,
		basePower: 0,
		category: "Status",
		name: "Supersonic",
		pp: 20,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1, sound: 1, authentic: 1},
		volatileStatus: 'confusion',
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {boost: {spe: 1}},
		contestType: "Clever",
	},
	supersonicskystrike: {
		num: 626,
		accuracy: true,
		basePower: 1,
		category: "Physical",
		isNonstandard: "Past",
		name: "Supersonic Skystrike",
		pp: 1,
		priority: 0,
		flags: {},
		isZ: "flyiniumz",
		secondary: null,
		target: "normal",
		type: "Flying",
		contestType: "Cool",
	},
	surf: {
		num: 57,
		accuracy: 100,
		basePower: 90,
		category: "Special",
		name: "Surf",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1, nonsky: 1},
		secondary: null,
		target: "allAdjacent",
		type: "Water",
		contestType: "Beautiful",
	},
	surgingstrikes: {
		num: 818,
		accuracy: 100,
		basePower: 25,
		category: "Physical",
		name: "Surging Strikes",
		pp: 5,
		priority: 0,
		flags: {contact: 1, protect: 1, punch: 1, mirror: 1},
		willCrit: true,
		multihit: 3,
		secondary: null,
		target: "normal",
		type: "Water",
		zMove: {basePower: 140},
		maxMove: {basePower: 130},
	},
	swagger: {
		num: 207,
		accuracy: 85,
		basePower: 0,
		category: "Status",
		name: "Swagger",
		pp: 15,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1, mystery: 1},
		volatileStatus: 'confusion',
		boosts: {
			atk: 2,
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Cute",
	},
	swallow: {
		num: 256,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Swallow",
		pp: 10,
		priority: 0,
		flags: {snatch: 1, heal: 1},
		onTry(source) {
			return !!source.volatiles['stockpile'];
		},
		onHit(pokemon) {
			const healAmount = [0.25, 0.5, 1];
			const healedBy = this.heal(this.modify(pokemon.maxhp, healAmount[(pokemon.volatiles['stockpile'].layers - 1)]));
			pokemon.removeVolatile('stockpile');
			return !!healedBy;
		},
		secondary: null,
		target: "self",
		type: "Normal",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Tough",
	},
	sweetkiss: {
		num: 186,
		accuracy: 75,
		basePower: 0,
		category: "Status",
		name: "Sweet Kiss",
		pp: 10,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1},
		volatileStatus: 'confusion',
		secondary: null,
		target: "normal",
		type: "Fairy",
		zMove: {boost: {spa: 1}},
		contestType: "Cute",
	},
	sweetscent: {
		num: 230,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Sweet Scent",
		pp: 20,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1},
		boosts: {
			evasion: -2,
		},
		secondary: null,
		target: "allAdjacentFoes",
		type: "Normal",
		zMove: {boost: {accuracy: 1}},
		contestType: "Cute",
	},
	swift: {
		num: 129,
		accuracy: true,
		basePower: 60,
		category: "Special",
		name: "Swift",
		pp: 20,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "allAdjacentFoes",
		type: "Normal",
		contestType: "Cool",
	},
	switcheroo: {
		num: 415,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Switcheroo",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, mystery: 1},
		onTryImmunity(target) {
			return !target.hasAbility('stickyhold');
		},
		onHit(target, source, move) {
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
			this.add('-activate', source, 'move: Trick', '[of] ' + target);
			if (myItem) {
				target.setItem(myItem);
				this.add('-item', target, myItem, '[from] move: Switcheroo');
			} else {
				this.add('-enditem', target, yourItem, '[silent]', '[from] move: Switcheroo');
			}
			if (yourItem) {
				source.setItem(yourItem);
				this.add('-item', source, yourItem, '[from] move: Switcheroo');
			} else {
				this.add('-enditem', source, myItem, '[silent]', '[from] move: Switcheroo');
			}
		},
		secondary: null,
		target: "normal",
		type: "Dark",
		zMove: {boost: {spe: 2}},
		contestType: "Clever",
	},
	swordsdance: {
		num: 14,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Swords Dance",
		pp: 20,
		priority: 0,
		flags: {snatch: 1, dance: 1},
		boosts: {
			atk: 2,
		},
		secondary: null,
		target: "self",
		type: "Normal",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Beautiful",
	},
	synchronoise: {
		num: 485,
		accuracy: 100,
		basePower: 120,
		category: "Special",
		isNonstandard: "Past",
		name: "Synchronoise",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onTryImmunity(target, source) {
			return target.hasType(source.getTypes());
		},
		secondary: null,
		target: "allAdjacent",
		type: "Psychic",
		contestType: "Clever",
	},
	synthesis: {
		num: 235,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Synthesis",
		pp: 5,
		priority: 0,
		flags: {snatch: 1, heal: 1},
		onHit(pokemon) {
			let factor = 0.5;
			switch (pokemon.effectiveWeather()) {
			case 'sunnyday':
			case 'desolateland':
				factor = 0.667;
				break;
			case 'raindance':
			case 'primordialsea':
			case 'sandstorm':
			case 'hail':
				factor = 0.25;
				break;
			}
			return !!this.heal(this.modify(pokemon.maxhp, factor));
		},
		secondary: null,
		target: "self",
		type: "Grass",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Clever",
	},
	tackle: {
		num: 33,
		accuracy: 100,
		basePower: 40,
		category: "Physical",
		name: "Tackle",
		pp: 35,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Normal",
		contestType: "Tough",
	},
	tailglow: {
		num: 294,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Past",
		name: "Tail Glow",
		pp: 20,
		priority: 0,
		flags: {snatch: 1},
		boosts: {
			spa: 3,
		},
		secondary: null,
		target: "self",
		type: "Bug",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Beautiful",
	},
	tailslap: {
		num: 541,
		accuracy: 85,
		basePower: 25,
		category: "Physical",
		name: "Tail Slap",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		multihit: [2, 5],
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {basePower: 140},
		maxMove: {basePower: 130},
		contestType: "Cute",
	},
	tailwhip: {
		num: 39,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Tail Whip",
		pp: 30,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1},
		boosts: {
			def: -1,
		},
		secondary: null,
		target: "allAdjacentFoes",
		type: "Normal",
		zMove: {boost: {atk: 1}},
		contestType: "Cute",
	},
	tailwind: {
		num: 366,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Tailwind",
		pp: 15,
		priority: 0,
		flags: {snatch: 1},
		sideCondition: 'tailwind',
		condition: {
			duration: 4,
			durationCallback(target, source, effect) {
				if (source?.hasAbility('persistent')) {
					this.add('-activate', source, 'ability: Persistent', effect);
					return 6;
				}
				return 4;
			},
			onSideStart(side) {
				this.add('-sidestart', side, 'move: Tailwind');
			},
			onModifySpe(spe, pokemon) {
				return this.chainModify(2);
			},
			onSideResidualOrder: 26,
			onSideResidualSubOrder: 5,
			onSideEnd(side) {
				this.add('-sideend', side, 'move: Tailwind');
			},
		},
		secondary: null,
		target: "allySide",
		type: "Flying",
		zMove: {effect: 'crit2'},
		contestType: "Cool",
	},
	takedown: {
		num: 36,
		accuracy: 85,
		basePower: 90,
		category: "Physical",
		name: "Take Down",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		recoil: [1, 4],
		secondary: null,
		target: "normal",
		type: "Normal",
		contestType: "Tough",
	},
	tarshot: {
		num: 749,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Tar Shot",
		pp: 15,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1},
		volatileStatus: 'tarshot',
		condition: {
			onStart(pokemon) {
				this.add('-start', pokemon, 'Tar Shot');
			},
			onEffectivenessPriority: -2,
			onEffectiveness(typeMod, target, type, move) {
				if (move.type !== 'Fire') return;
				if (!target) return;
				if (type !== target.getTypes()[0]) return;
				return typeMod + 1;
			},
		},
		boosts: {
			spe: -1,
		},
		secondary: null,
		target: "normal",
		type: "Rock",
	},
	taunt: {
		num: 269,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Taunt",
		pp: 20,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1, authentic: 1},
		volatileStatus: 'taunt',
		condition: {
			duration: 3,
			onStart(target) {
				if (target.activeTurns && !this.queue.willMove(target)) {
					this.effectState.duration++;
				}
				this.add('-start', target, 'move: Taunt');
			},
			onResidualOrder: 15,
			onEnd(target) {
				this.add('-end', target, 'move: Taunt');
			},
			onDisableMove(pokemon) {
				for (const moveSlot of pokemon.moveSlots) {
					const move = this.dex.moves.get(moveSlot.id);
					if (move.category === 'Status' && move.id !== 'mefirst') {
						pokemon.disableMove(moveSlot.id);
					}
				}
			},
			onBeforeMovePriority: 5,
			onBeforeMove(attacker, defender, move) {
				if (!move.isZ && !move.isMax && move.category === 'Status' && move.id !== 'mefirst') {
					this.add('cant', attacker, 'move: Taunt', move);
					return false;
				}
			},
		},
		secondary: null,
		target: "normal",
		type: "Dark",
		zMove: {boost: {atk: 1}},
		contestType: "Clever",
	},
	tearfullook: {
		num: 715,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Tearful Look",
		pp: 20,
		priority: 0,
		flags: {reflectable: 1, mirror: 1},
		boosts: {
			atk: -1,
			spa: -1,
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {boost: {def: 1}},
		contestType: "Cute",
	},
	teatime: {
		num: 752,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Teatime",
		pp: 10,
		priority: 0,
		flags: {authentic: 1},
		onHitField(target, source, move) {
			let result = false;
			for (const active of this.getAllActive()) {
				if (this.runEvent('Invulnerability', active, source, move) === false) {
					this.add('-miss', source, active);
					result = true;
				} else if (this.runEvent('TryHit', active, source, move)) {
					const item = active.getItem();
					if (active.hp && item.isBerry) {
						// bypasses Unnerve
						active.eatItem(true);
						result = true;
					}
				}
			}
			return result;
		},
		secondary: null,
		target: "all",
		type: "Normal",
	},
	technoblast: {
		num: 546,
		accuracy: 100,
		basePower: 120,
		category: "Special",
		name: "Techno Blast",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onModifyType(move, pokemon) {
			if (pokemon.ignoringItem()) return;
			move.type = this.runEvent('Drive', pokemon, null, move, 'Normal');
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		contestType: "Cool",
	},
	tectonicrage: {
		num: 630,
		accuracy: true,
		basePower: 1,
		category: "Physical",
		isNonstandard: "Past",
		name: "Tectonic Rage",
		pp: 1,
		priority: 0,
		flags: {},
		isZ: "groundiumz",
		secondary: null,
		target: "normal",
		type: "Ground",
		contestType: "Cool",
	},
	teeterdance: {
		num: 298,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Teeter Dance",
		pp: 20,
		priority: 0,
		flags: {protect: 1, mirror: 1, dance: 1},
		volatileStatus: 'confusion',
		secondary: null,
		target: "allAdjacent",
		type: "Normal",
		zMove: {boost: {spa: 1}},
		contestType: "Cute",
	},
	telekinesis: {
		num: 477,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Past",
		name: "Telekinesis",
		pp: 15,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1, gravity: 1, mystery: 1},
		volatileStatus: 'telekinesis',
		onTry(source, target, move) {
			// Additional Gravity check for Z-move variant
			if (this.field.getPseudoWeather('Gravity')) {
				this.attrLastMove('[still]');
				this.add('cant', source, 'move: Gravity', move);
				return null;
			}
		},
		condition: {
			duration: 3,
			onStart(target) {
				if (['Diglett', 'Dugtrio', 'Palossand', 'Sandygast'].includes(target.baseSpecies.baseSpecies) ||
						target.baseSpecies.name === 'Gengar-Mega') {
					this.add('-immune', target);
					return null;
				}
				if (target.volatiles['smackdown'] || target.volatiles['ingrain']) return false;
				this.add('-start', target, 'Telekinesis');
			},
			onAccuracyPriority: -1,
			onAccuracy(accuracy, target, source, move) {
				if (move && !move.ohko) return true;
			},
			onImmunity(type) {
				if (type === 'Ground') return false;
			},
			onUpdate(pokemon) {
				if (pokemon.baseSpecies.name === 'Gengar-Mega') {
					delete pokemon.volatiles['telekinesis'];
					this.add('-end', pokemon, 'Telekinesis', '[silent]');
				}
			},
			onResidualOrder: 19,
			onEnd(target) {
				this.add('-end', target, 'Telekinesis');
			},
		},
		secondary: null,
		target: "normal",
		type: "Psychic",
		zMove: {boost: {spa: 1}},
		contestType: "Clever",
	},
	teleport: {
		num: 100,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Teleport",
		pp: 20,
		priority: -6,
		flags: {},
		selfSwitch: true,
		onTryHit: true,
		secondary: null,
		target: "self",
		type: "Psychic",
		zMove: {effect: 'heal'},
		contestType: "Cool",
	},
	terrainpulse: {
		num: 805,
		accuracy: 100,
		basePower: 50,
		category: "Special",
		name: "Terrain Pulse",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, pulse: 1},
		onModifyType(move, pokemon) {
			if (!pokemon.isGrounded()) return;
			switch (this.field.terrain) {
			case 'electricterrain':
				move.type = 'Electric';
				break;
			case 'grassyterrain':
				move.type = 'Grass';
				break;
			case 'mistyterrain':
				move.type = 'Fairy';
				break;
			case 'psychicterrain':
				move.type = 'Psychic';
				break;
			}
		},
		onModifyMove(move, pokemon) {
			if (this.field.terrain && pokemon.isGrounded()) {
				move.basePower *= 2;
			}
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {basePower: 160},
		maxMove: {basePower: 130},
	},
	thief: {
		num: 168,
		accuracy: 100,
		basePower: 60,
		category: "Physical",
		name: "Thief",
		pp: 25,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
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
			this.add('-enditem', target, yourItem, '[silent]', '[from] move: Thief', '[of] ' + source);
			this.add('-item', source, yourItem, '[from] move: Thief', '[of] ' + target);
		},
		secondary: null,
		target: "normal",
		type: "Dark",
		contestType: "Tough",
	},
	thousandarrows: {
		num: 614,
		accuracy: 100,
		basePower: 90,
		category: "Physical",
		name: "Thousand Arrows",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, nonsky: 1},
		onEffectiveness(typeMod, target, type, move) {
			if (move.type !== 'Ground') return;
			if (!target) return; // avoid crashing when called from a chat plugin
			// ignore effectiveness if the target is Flying type and immune to Ground
			if (!target.runImmunity('Ground')) {
				if (target.hasType('Flying')) return 0;
			}
		},
		volatileStatus: 'smackdown',
		ignoreImmunity: {'Ground': true},
		secondary: null,
		target: "allAdjacentFoes",
		type: "Ground",
		zMove: {basePower: 180},
		contestType: "Beautiful",
	},
	thousandwaves: {
		num: 615,
		accuracy: 100,
		basePower: 90,
		category: "Physical",
		name: "Thousand Waves",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, nonsky: 1},
		onHit(target, source, move) {
			if (source.isActive) target.addVolatile('trapped', source, move, 'trapper');
		},
		secondary: null,
		target: "allAdjacentFoes",
		type: "Ground",
		contestType: "Tough",
	},
	thrash: {
		num: 37,
		accuracy: 100,
		basePower: 120,
		category: "Physical",
		name: "Thrash",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		self: {
			volatileStatus: 'lockedmove',
		},
		onAfterMove(pokemon) {
			if (pokemon.volatiles['lockedmove'] && pokemon.volatiles['lockedmove'].duration === 1) {
				pokemon.removeVolatile('lockedmove');
			}
		},
		secondary: null,
		target: "randomNormal",
		type: "Normal",
		contestType: "Tough",
	},
	throatchop: {
		num: 675,
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		name: "Throat Chop",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		condition: {
			duration: 2,
			onStart(target) {
				this.add('-start', target, 'Throat Chop', '[silent]');
			},
			onDisableMove(pokemon) {
				for (const moveSlot of pokemon.moveSlots) {
					if (this.dex.moves.get(moveSlot.id).flags['sound']) {
						pokemon.disableMove(moveSlot.id);
					}
				}
			},
			onBeforeMovePriority: 6,
			onBeforeMove(pokemon, target, move) {
				if (!move.isZ && !move.isMax && move.flags['sound']) {
					this.add('cant', pokemon, 'move: Throat Chop');
					return false;
				}
			},
			onModifyMove(move, pokemon, target) {
				if (!move.isZ && !move.isMax && move.flags['sound']) {
					this.add('cant', pokemon, 'move: Throat Chop');
					return false;
				}
			},
			onResidualOrder: 22,
			onEnd(target) {
				this.add('-end', target, 'Throat Chop', '[silent]');
			},
		},
		secondary: {
			chance: 100,
			onHit(target) {
				target.addVolatile('throatchop');
			},
		},
		target: "normal",
		type: "Dark",
		contestType: "Clever",
	},
	thunder: {
		num: 87,
		accuracy: 70,
		basePower: 110,
		category: "Special",
		name: "Thunder",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onModifyMove(move, pokemon, target) {
			switch (target?.effectiveWeather()) {
			case 'raindance':
			case 'primordialsea':
				move.accuracy = true;
				break;
			case 'sunnyday':
			case 'desolateland':
				move.accuracy = 50;
				break;
			}
		},
		secondary: {
			chance: 30,
			status: 'par',
		},
		target: "normal",
		type: "Electric",
		contestType: "Cool",
	},
	thunderbolt: {
		num: 85,
		accuracy: 100,
		basePower: 90,
		category: "Special",
		name: "Thunderbolt",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 10,
			status: 'par',
		},
		target: "normal",
		type: "Electric",
		contestType: "Cool",
	},
	thundercage: {
		num: 819,
		accuracy: 90,
		basePower: 80,
		category: "Special",
		name: "Thunder Cage",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		volatileStatus: 'partiallytrapped',
		secondary: null,
		target: "normal",
		type: "Electric",
	},
	thunderfang: {
		num: 422,
		accuracy: 95,
		basePower: 65,
		category: "Physical",
		name: "Thunder Fang",
		pp: 15,
		priority: 0,
		flags: {bite: 1, contact: 1, protect: 1, mirror: 1},
		secondaries: [
			{
				chance: 10,
				status: 'par',
			}, {
				chance: 10,
				volatileStatus: 'flinch',
			},
		],
		target: "normal",
		type: "Electric",
		contestType: "Cool",
	},
	thunderouskick: {
		num: 823,
		accuracy: 100,
		basePower: 90,
		category: "Physical",
		name: "Thunderous Kick",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 100,
			boosts: {
				def: -1,
			},
		},
		target: "normal",
		type: "Fighting",
	},
	thunderpunch: {
		num: 9,
		accuracy: 100,
		basePower: 75,
		category: "Physical",
		name: "Thunder Punch",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, punch: 1},
		secondary: {
			chance: 10,
			status: 'par',
		},
		target: "normal",
		type: "Electric",
		contestType: "Cool",
	},
	thundershock: {
		num: 84,
		accuracy: 100,
		basePower: 40,
		category: "Special",
		name: "Thunder Shock",
		pp: 30,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 10,
			status: 'par',
		},
		target: "normal",
		type: "Electric",
		contestType: "Cool",
	},
	thunderwave: {
		num: 86,
		accuracy: 90,
		basePower: 0,
		category: "Status",
		name: "Thunder Wave",
		pp: 20,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1},
		status: 'par',
		ignoreImmunity: false,
		secondary: null,
		target: "normal",
		type: "Electric",
		zMove: {boost: {spd: 1}},
		contestType: "Cool",
	},
	tickle: {
		num: 321,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Tickle",
		pp: 20,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1, mystery: 1},
		boosts: {
			atk: -1,
			def: -1,
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {boost: {def: 1}},
		contestType: "Cute",
	},
	topsyturvy: {
		num: 576,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Topsy-Turvy",
		pp: 20,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1, mystery: 1},
		onHit(target) {
			let success = false;
			let i: BoostID;
			for (i in target.boosts) {
				if (target.boosts[i] === 0) continue;
				target.boosts[i] = -target.boosts[i];
				success = true;
			}
			if (!success) return false;
			this.add('-invertboost', target, '[from] move: Topsy-Turvy');
		},
		secondary: null,
		target: "normal",
		type: "Dark",
		zMove: {boost: {atk: 1}},
		contestType: "Clever",
	},
	torment: {
		num: 259,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Torment",
		pp: 15,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1, authentic: 1},
		volatileStatus: 'torment',
		condition: {
			noCopy: true,
			onStart(pokemon) {
				if (pokemon.volatiles['dynamax']) {
					delete pokemon.volatiles['torment'];
					return false;
				}
				this.add('-start', pokemon, 'Torment');
			},
			onEnd(pokemon) {
				this.add('-end', pokemon, 'Torment');
			},
			onDisableMove(pokemon) {
				if (pokemon.lastMove && pokemon.lastMove.id !== 'struggle') pokemon.disableMove(pokemon.lastMove.id);
			},
		},
		secondary: null,
		target: "normal",
		type: "Dark",
		zMove: {boost: {def: 1}},
		contestType: "Tough",
	},
	toxic: {
		num: 92,
		accuracy: 90,
		basePower: 0,
		category: "Status",
		name: "Toxic",
		pp: 10,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1},
		// No Guard-like effect for Poison-type users implemented in Scripts#tryMoveHit
		status: 'tox',
		secondary: null,
		target: "normal",
		type: "Poison",
		zMove: {boost: {def: 1}},
		contestType: "Clever",
	},
	toxicspikes: {
		num: 390,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Toxic Spikes",
		pp: 20,
		priority: 0,
		flags: {reflectable: 1, nonsky: 1},
		sideCondition: 'toxicspikes',
		condition: {
			// this is a side condition
			onSideStart(side) {
				this.add('-sidestart', side, 'move: Toxic Spikes');
				this.effectState.layers = 1;
			},
			onSideRestart(side) {
				if (this.effectState.layers >= 2) return false;
				this.add('-sidestart', side, 'move: Toxic Spikes');
				this.effectState.layers++;
			},
			onSwitchIn(pokemon) {
				if (!pokemon.isGrounded()) return;
				if (pokemon.hasType('Poison')) {
					this.add('-sideend', pokemon.side, 'move: Toxic Spikes', '[of] ' + pokemon);
					pokemon.side.removeSideCondition('toxicspikes');
				} else if (pokemon.hasType('Steel') || pokemon.hasItem('heavydutyboots')) {
					return;
				} else if (this.effectState.layers >= 2) {
					pokemon.trySetStatus('tox', pokemon.side.foe.active[0]);
				} else {
					pokemon.trySetStatus('psn', pokemon.side.foe.active[0]);
				}
			},
		},
		secondary: null,
		target: "foeSide",
		type: "Poison",
		zMove: {boost: {def: 1}},
		contestType: "Clever",
	},
	toxicthread: {
		num: 672,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		isNonstandard: "Past",
		name: "Toxic Thread",
		pp: 20,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1},
		status: 'psn',
		boosts: {
			spe: -1,
		},
		secondary: null,
		target: "normal",
		type: "Poison",
		zMove: {boost: {spe: 1}},
		contestType: "Tough",
	},
	transform: {
		num: 144,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Transform",
		pp: 10,
		priority: 0,
		flags: {mystery: 1},
		onHit(target, pokemon) {
			if (!pokemon.transformInto(target)) {
				return false;
			}
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {effect: 'heal'},
		contestType: "Clever",
	},
	triattack: {
		num: 161,
		accuracy: 100,
		basePower: 80,
		category: "Special",
		name: "Tri Attack",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 20,
			onHit(target, source) {
				const result = this.random(3);
				if (result === 0) {
					target.trySetStatus('brn', source);
				} else if (result === 1) {
					target.trySetStatus('par', source);
				} else {
					target.trySetStatus('frz', source);
				}
			},
		},
		target: "normal",
		type: "Normal",
		contestType: "Beautiful",
	},
	trick: {
		num: 271,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Trick",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, mystery: 1},
		onTryImmunity(target) {
			return !target.hasAbility('stickyhold');
		},
		onHit(target, source, move) {
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
			this.add('-activate', source, 'move: Trick', '[of] ' + target);
			if (myItem) {
				target.setItem(myItem);
				this.add('-item', target, myItem, '[from] move: Trick');
			} else {
				this.add('-enditem', target, yourItem, '[silent]', '[from] move: Trick');
			}
			if (yourItem) {
				source.setItem(yourItem);
				this.add('-item', source, yourItem, '[from] move: Trick');
			} else {
				this.add('-enditem', source, myItem, '[silent]', '[from] move: Trick');
			}
		},
		secondary: null,
		target: "normal",
		type: "Psychic",
		zMove: {boost: {spe: 2}},
		contestType: "Clever",
	},
	trickortreat: {
		num: 567,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Trick-or-Treat",
		pp: 20,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1, mystery: 1},
		onHit(target) {
			if (target.hasType('Ghost')) return false;
			if (!target.addType('Ghost')) return false;
			this.add('-start', target, 'typeadd', 'Ghost', '[from] move: Trick-or-Treat');

			if (target.side.active.length === 2 && target.position === 1) {
				// Curse Glitch
				const action = this.queue.willMove(target);
				if (action && action.move.id === 'curse') {
					action.targetLoc = -1;
				}
			}
		},
		secondary: null,
		target: "normal",
		type: "Ghost",
		zMove: {boost: {atk: 1, def: 1, spa: 1, spd: 1, spe: 1}},
		contestType: "Cute",
	},
	trickroom: {
		num: 433,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Trick Room",
		pp: 5,
		priority: -7,
		flags: {mirror: 1},
		pseudoWeather: 'trickroom',
		condition: {
			duration: 5,
			durationCallback(source, effect) {
				if (source?.hasAbility('persistent')) {
					this.add('-activate', source, 'ability: Persistent', effect);
					return 7;
				}
				return 5;
			},
			onFieldStart(target, source) {
				this.add('-fieldstart', 'move: Trick Room', '[of] ' + source);
			},
			onFieldRestart(target, source) {
				this.field.removePseudoWeather('trickroom');
			},
			// Speed modification is changed in Pokemon.getActionSpeed() in sim/pokemon.js
			onFieldResidualOrder: 27,
			onFieldResidualSubOrder: 1,
			onFieldEnd() {
				this.add('-fieldend', 'move: Trick Room');
			},
		},
		secondary: null,
		target: "all",
		type: "Psychic",
		zMove: {boost: {accuracy: 1}},
		contestType: "Clever",
	},
	tripleaxel: {
		num: 813,
		accuracy: 90,
		basePower: 20,
		basePowerCallback(pokemon, target, move) {
			return 20 * move.hit;
		},
		category: "Physical",
		name: "Triple Axel",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		multihit: 3,
		multiaccuracy: true,
		secondary: null,
		target: "normal",
		type: "Ice",
		zMove: {basePower: 120},
		maxMove: {basePower: 140},
	},
	triplekick: {
		num: 167,
		accuracy: 90,
		basePower: 10,
		basePowerCallback(pokemon, target, move) {
			return 10 * move.hit;
		},
		category: "Physical",
		name: "Triple Kick",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		multihit: 3,
		multiaccuracy: true,
		secondary: null,
		target: "normal",
		type: "Fighting",
		zMove: {basePower: 120},
		maxMove: {basePower: 80},
		contestType: "Cool",
	},
	tropkick: {
		num: 688,
		accuracy: 100,
		basePower: 70,
		category: "Physical",
		name: "Trop Kick",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 100,
			boosts: {
				atk: -1,
			},
		},
		target: "normal",
		type: "Grass",
		contestType: "Cute",
	},
	trumpcard: {
		num: 376,
		accuracy: true,
		basePower: 0,
		basePowerCallback(source, target, move) {
			const callerMoveId = move.sourceEffect || move.id;
			const moveSlot = callerMoveId === 'instruct' ? source.getMoveData(move.id) : source.getMoveData(callerMoveId);
			if (!moveSlot) return 40;
			switch (moveSlot.pp) {
			case 0:
				return 200;
			case 1:
				return 80;
			case 2:
				return 60;
			case 3:
				return 50;
			default:
				return 40;
			}
		},
		category: "Special",
		isNonstandard: "Past",
		name: "Trump Card",
		pp: 5,
		noPPBoosts: true,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {basePower: 160},
		maxMove: {basePower: 130},
		contestType: "Cool",
	},
	twineedle: {
		num: 41,
		accuracy: 100,
		basePower: 25,
		category: "Physical",
		isNonstandard: "Past",
		name: "Twineedle",
		pp: 20,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		multihit: 2,
		secondary: {
			chance: 20,
			status: 'psn',
		},
		target: "normal",
		type: "Bug",
		maxMove: {basePower: 100},
		contestType: "Cool",
	},
	twinkletackle: {
		num: 656,
		accuracy: true,
		basePower: 1,
		category: "Physical",
		isNonstandard: "Past",
		name: "Twinkle Tackle",
		pp: 1,
		priority: 0,
		flags: {},
		isZ: "fairiumz",
		secondary: null,
		target: "normal",
		type: "Fairy",
		contestType: "Cool",
	},
	twister: {
		num: 239,
		accuracy: 100,
		basePower: 40,
		category: "Special",
		name: "Twister",
		pp: 20,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 20,
			volatileStatus: 'flinch',
		},
		target: "allAdjacentFoes",
		type: "Dragon",
		contestType: "Cool",
	},
	uturn: {
		num: 369,
		accuracy: 100,
		basePower: 70,
		category: "Physical",
		name: "U-turn",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		selfSwitch: true,
		secondary: null,
		target: "normal",
		type: "Bug",
		contestType: "Cute",
	},
	uproar: {
		num: 253,
		accuracy: 100,
		basePower: 90,
		category: "Special",
		name: "Uproar",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, sound: 1, authentic: 1},
		self: {
			volatileStatus: 'uproar',
		},
		onTryHit(target) {
			const activeTeam = target.side.activeTeam();
			const foeActiveTeam = target.side.foe.activeTeam();
			for (const [i, allyActive] of activeTeam.entries()) {
				if (allyActive && allyActive.status === 'slp') allyActive.cureStatus();
				const foeActive = foeActiveTeam[i];
				if (foeActive && foeActive.status === 'slp') foeActive.cureStatus();
			}
		},
		condition: {
			duration: 3,
			onStart(target) {
				this.add('-start', target, 'Uproar');
			},
			onResidual(target) {
				if (target.volatiles['throatchop']) {
					target.removeVolatile('uproar');
					return;
				}
				if (target.lastMove && target.lastMove.id === 'struggle') {
					// don't lock
					delete target.volatiles['uproar'];
				}
				this.add('-start', target, 'Uproar', '[upkeep]');
			},
			onResidualOrder: 28,
			onResidualSubOrder: 1,
			onEnd(target) {
				this.add('-end', target, 'Uproar');
			},
			onLockMove: 'uproar',
			onAnySetStatus(status, pokemon) {
				if (status.id === 'slp') {
					if (pokemon === this.effectState.target) {
						this.add('-fail', pokemon, 'slp', '[from] Uproar', '[msg]');
					} else {
						this.add('-fail', pokemon, 'slp', '[from] Uproar');
					}
					return null;
				}
			},
		},
		secondary: null,
		target: "randomNormal",
		type: "Normal",
		contestType: "Cute",
	},
	vacuumwave: {
		num: 410,
		accuracy: 100,
		basePower: 40,
		category: "Special",
		name: "Vacuum Wave",
		pp: 30,
		priority: 1,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Fighting",
		contestType: "Cool",
	},
	vcreate: {
		num: 557,
		accuracy: 95,
		basePower: 180,
		category: "Physical",
		name: "V-create",
		pp: 5,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		self: {
			boosts: {
				spe: -1,
				def: -1,
				spd: -1,
			},
		},
		secondary: null,
		target: "normal",
		type: "Fire",
		zMove: {basePower: 220},
		contestType: "Cool",
	},
	veeveevolley: {
		num: 741,
		accuracy: true,
		basePower: 0,
		basePowerCallback(pokemon) {
			return Math.floor((pokemon.happiness * 10) / 25) || 1;
		},
		category: "Physical",
		isNonstandard: "LGPE",
		name: "Veevee Volley",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1},
		secondary: null,
		target: "normal",
		type: "Normal",
		contestType: "Cute",
	},
	venomdrench: {
		num: 599,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Venom Drench",
		pp: 20,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1},
		onHit(target, source, move) {
			if (target.status === 'psn' || target.status === 'tox') {
				return !!this.boost({atk: -1, spa: -1, spe: -1}, target, source, move);
			}
			return false;
		},
		secondary: null,
		target: "allAdjacentFoes",
		type: "Poison",
		zMove: {boost: {def: 1}},
		contestType: "Clever",
	},
	venoshock: {
		num: 474,
		accuracy: 100,
		basePower: 65,
		category: "Special",
		name: "Venoshock",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (target.status === 'psn' || target.status === 'tox') {
				return this.chainModify(2);
			}
		},
		secondary: null,
		target: "normal",
		type: "Poison",
		contestType: "Beautiful",
	},
	vinewhip: {
		num: 22,
		accuracy: 100,
		basePower: 45,
		category: "Physical",
		name: "Vine Whip",
		pp: 25,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Grass",
		contestType: "Cool",
	},
	visegrip: {
		num: 11,
		accuracy: 100,
		basePower: 55,
		category: "Physical",
		name: "Vise Grip",
		pp: 30,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Normal",
		contestType: "Tough",
	},
	vitalthrow: {
		num: 233,
		accuracy: true,
		basePower: 70,
		category: "Physical",
		name: "Vital Throw",
		pp: 10,
		priority: -1,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Fighting",
		contestType: "Cool",
	},
	voltswitch: {
		num: 521,
		accuracy: 100,
		basePower: 70,
		category: "Special",
		name: "Volt Switch",
		pp: 20,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		selfSwitch: true,
		secondary: null,
		target: "normal",
		type: "Electric",
		contestType: "Cool",
	},
	volttackle: {
		num: 344,
		accuracy: 100,
		basePower: 120,
		category: "Physical",
		name: "Volt Tackle",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		recoil: [33, 100],
		secondary: {
			chance: 10,
			status: 'par',
		},
		target: "normal",
		type: "Electric",
		contestType: "Cool",
	},
	wakeupslap: {
		num: 358,
		accuracy: 100,
		basePower: 70,
		basePowerCallback(pokemon, target, move) {
			if (target.status === 'slp' || target.hasAbility('comatose')) return move.basePower * 2;
			return move.basePower;
		},
		category: "Physical",
		isNonstandard: "Past",
		name: "Wake-Up Slap",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onHit(target) {
			if (target.status === 'slp') target.cureStatus();
		},
		secondary: null,
		target: "normal",
		type: "Fighting",
		contestType: "Tough",
	},
	waterfall: {
		num: 127,
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		name: "Waterfall",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 20,
			volatileStatus: 'flinch',
		},
		target: "normal",
		type: "Water",
		contestType: "Tough",
	},
	watergun: {
		num: 55,
		accuracy: 100,
		basePower: 40,
		category: "Special",
		name: "Water Gun",
		pp: 25,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Water",
		contestType: "Cute",
	},
	waterpledge: {
		num: 518,
		accuracy: 100,
		basePower: 80,
		basePowerCallback(target, source, move) {
			if (['firepledge', 'grasspledge'].includes(move.sourceEffect)) {
				this.add('-combine');
				return 150;
			}
			return 80;
		},
		category: "Special",
		name: "Water Pledge",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, nonsky: 1},
		onPrepareHit(target, source, move) {
			for (const action of this.queue) {
				if (action.choice !== 'move') continue;
				const otherMove = action.move;
				const otherMoveUser = action.pokemon;
				if (
					!otherMove || !action.pokemon || !otherMoveUser.isActive ||
					otherMoveUser.fainted || action.maxMove || action.zmove
				) {
					continue;
				}
				if (otherMoveUser.isAlly(source) && ['firepledge', 'grasspledge'].includes(otherMove.id)) {
					this.queue.prioritizeAction(action, move);
					this.add('-waiting', source, otherMoveUser);
					return null;
				}
			}
		},
		onModifyMove(move) {
			if (move.sourceEffect === 'grasspledge') {
				move.type = 'Grass';
				move.forceSTAB = true;
				move.sideCondition = 'grasspledge';
			}
			if (move.sourceEffect === 'firepledge') {
				move.type = 'Water';
				move.forceSTAB = true;
				move.self = {sideCondition: 'waterpledge'};
			}
		},
		condition: {
			duration: 4,
			onSideStart(targetSide) {
				this.add('-sidestart', targetSide, 'Water Pledge');
			},
			onSideResidualOrder: 26,
			onSideResidualSubOrder: 7,
			onSideEnd(targetSide) {
				this.add('-sideend', targetSide, 'Water Pledge');
			},
			onModifyMove(move, pokemon) {
				if (move.secondaries && move.id !== 'secretpower') {
					this.debug('doubling secondary chance');
					for (const secondary of move.secondaries) {
						if (pokemon.hasAbility('serenegrace') && secondary.volatileStatus === 'flinch') continue;
						if (secondary.chance) secondary.chance *= 2;
					}
					if (move.self?.chance) move.self.chance *= 2;
				}
			},
		},
		secondary: null,
		target: "normal",
		type: "Water",
		contestType: "Beautiful",
	},
	waterpulse: {
		num: 352,
		accuracy: 100,
		basePower: 60,
		category: "Special",
		name: "Water Pulse",
		pp: 20,
		priority: 0,
		flags: {protect: 1, pulse: 1, mirror: 1, distance: 1},
		secondary: {
			chance: 20,
			volatileStatus: 'confusion',
		},
		target: "any",
		type: "Water",
		contestType: "Beautiful",
	},
	watershuriken: {
		num: 594,
		accuracy: 100,
		basePower: 15,
		basePowerCallback(pokemon, target, move) {
			if (pokemon.species.name === 'Greninja-Ash' && pokemon.hasAbility('battlebond')) {
				return move.basePower + 5;
			}
			return move.basePower;
		},
		category: "Special",
		name: "Water Shuriken",
		pp: 20,
		priority: 1,
		flags: {protect: 1, mirror: 1},
		multihit: [2, 5],
		secondary: null,
		target: "normal",
		type: "Water",
		contestType: "Cool",
	},
	watersport: {
		num: 346,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Past",
		name: "Water Sport",
		pp: 15,
		priority: 0,
		flags: {nonsky: 1},
		pseudoWeather: 'watersport',
		condition: {
			duration: 5,
			onFieldStart(field, source) {
				this.add('-fieldstart', 'move: Water Sport', '[of] ' + source);
			},
			onBasePowerPriority: 1,
			onBasePower(basePower, attacker, defender, move) {
				if (move.type === 'Fire') {
					this.debug('water sport weaken');
					return this.chainModify([1352, 4096]);
				}
			},
			onFieldResidualOrder: 27,
			onFieldResidualSubOrder: 3,
			onFieldEnd() {
				this.add('-fieldend', 'move: Water Sport');
			},
		},
		secondary: null,
		target: "all",
		type: "Water",
		zMove: {boost: {spd: 1}},
		contestType: "Cute",
	},
	waterspout: {
		num: 323,
		accuracy: 100,
		basePower: 150,
		basePowerCallback(pokemon, target, move) {
			return move.basePower * pokemon.hp / pokemon.maxhp;
		},
		category: "Special",
		name: "Water Spout",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "allAdjacentFoes",
		type: "Water",
		contestType: "Beautiful",
	},
	weatherball: {
		num: 311,
		accuracy: 100,
		basePower: 50,
		category: "Special",
		name: "Weather Ball",
		pp: 10,
		priority: 0,
		flags: {bullet: 1, protect: 1, mirror: 1},
		onModifyType(move, pokemon) {
			switch (pokemon.effectiveWeather()) {
			case 'sunnyday':
			case 'desolateland':
				move.type = 'Fire';
				break;
			case 'raindance':
			case 'primordialsea':
				move.type = 'Water';
				break;
			case 'sandstorm':
				move.type = 'Rock';
				break;
			case 'hail':
				move.type = 'Ice';
				break;
			}
		},
		onModifyMove(move, pokemon) {
			switch (pokemon.effectiveWeather()) {
			case 'sunnyday':
			case 'desolateland':
				move.basePower *= 2;
				break;
			case 'raindance':
			case 'primordialsea':
				move.basePower *= 2;
				break;
			case 'sandstorm':
				move.basePower *= 2;
				break;
			case 'hail':
				move.basePower *= 2;
				break;
			}
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {basePower: 160},
		maxMove: {basePower: 130},
		contestType: "Beautiful",
	},
	whirlpool: {
		num: 250,
		accuracy: 85,
		basePower: 35,
		category: "Special",
		name: "Whirlpool",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		volatileStatus: 'partiallytrapped',
		secondary: null,
		target: "normal",
		type: "Water",
		contestType: "Beautiful",
	},
	whirlwind: {
		num: 18,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Whirlwind",
		pp: 20,
		priority: -6,
		flags: {reflectable: 1, mirror: 1, authentic: 1, mystery: 1},
		forceSwitch: true,
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {boost: {spd: 1}},
		contestType: "Clever",
	},
	wickedblow: {
		num: 817,
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		name: "Wicked Blow",
		pp: 5,
		priority: 0,
		flags: {contact: 1, protect: 1, punch: 1, mirror: 1},
		willCrit: true,
		secondary: null,
		target: "normal",
		type: "Dark",
	},
	wideguard: {
		num: 469,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Wide Guard",
		pp: 10,
		priority: 3,
		flags: {snatch: 1},
		sideCondition: 'wideguard',
		onTry() {
			return !!this.queue.willAct();
		},
		onHitSide(side, source) {
			source.addVolatile('stall');
		},
		condition: {
			duration: 1,
			onSideStart(target, source) {
				this.add('-singleturn', source, 'Wide Guard');
			},
			onTryHitPriority: 4,
			onTryHit(target, source, move) {
				// Wide Guard blocks all spread moves
				if (move?.target !== 'allAdjacent' && move.target !== 'allAdjacentFoes') {
					return;
				}
				if (move.isZ || move.isMax) {
					if (['gmaxoneblow', 'gmaxrapidflow'].includes(move.id)) return;
					target.getMoveHitData(move).zBrokeProtect = true;
					return;
				}
				this.add('-activate', target, 'move: Wide Guard');
				const lockedmove = source.getVolatile('lockedmove');
				if (lockedmove) {
					// Outrage counter is reset
					if (source.volatiles['lockedmove'].duration === 2) {
						delete source.volatiles['lockedmove'];
					}
				}
				return this.NOT_FAIL;
			},
		},
		secondary: null,
		target: "allySide",
		type: "Rock",
		zMove: {boost: {def: 1}},
		contestType: "Tough",
	},
	wildcharge: {
		num: 528,
		accuracy: 100,
		basePower: 90,
		category: "Physical",
		name: "Wild Charge",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		recoil: [1, 4],
		secondary: null,
		target: "normal",
		type: "Electric",
		contestType: "Tough",
	},
	willowisp: {
		num: 261,
		accuracy: 85,
		basePower: 0,
		category: "Status",
		name: "Will-O-Wisp",
		pp: 15,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1},
		status: 'brn',
		secondary: null,
		target: "normal",
		type: "Fire",
		zMove: {boost: {atk: 1}},
		contestType: "Beautiful",
	},
	wingattack: {
		num: 17,
		accuracy: 100,
		basePower: 60,
		category: "Physical",
		name: "Wing Attack",
		pp: 35,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, distance: 1},
		secondary: null,
		target: "any",
		type: "Flying",
		contestType: "Cool",
	},
	wish: {
		num: 273,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Wish",
		pp: 10,
		priority: 0,
		flags: {snatch: 1, heal: 1},
		slotCondition: 'Wish',
		condition: {
			duration: 2,
			onStart(pokemon, source) {
				this.effectState.hp = source.maxhp / 2;
			},
			onResidualOrder: 4,
			onEnd(target) {
				if (target && !target.fainted) {
					const damage = this.heal(this.effectState.hp, target, target);
					if (damage) {
						this.add('-heal', target, target.getHealth, '[from] move: Wish', '[wisher] ' + this.effectState.source.name);
					}
				}
			},
		},
		secondary: null,
		target: "self",
		type: "Normal",
		zMove: {boost: {spd: 1}},
		contestType: "Cute",
	},
	withdraw: {
		num: 110,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Withdraw",
		pp: 40,
		priority: 0,
		flags: {snatch: 1},
		boosts: {
			def: 1,
		},
		secondary: null,
		target: "self",
		type: "Water",
		zMove: {boost: {def: 1}},
		contestType: "Cute",
	},
	wonderroom: {
		num: 472,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Wonder Room",
		pp: 10,
		priority: 0,
		flags: {mirror: 1},
		pseudoWeather: 'wonderroom',
		condition: {
			duration: 5,
			durationCallback(source, effect) {
				if (source?.hasAbility('persistent')) {
					this.add('-activate', source, 'ability: Persistent', effect);
					return 7;
				}
				return 5;
			},
			onFieldStart(field, source) {
				this.add('-fieldstart', 'move: Wonder Room', '[of] ' + source);
			},
			onFieldRestart(target, source) {
				this.field.removePseudoWeather('wonderroom');
			},
			// Swapping defenses implemented in sim/pokemon.js:Pokemon#calculateStat and Pokemon#getStat
			onFieldResidualOrder: 27,
			onFieldResidualSubOrder: 5,
			onFieldEnd() {
				this.add('-fieldend', 'move: Wonder Room');
			},
		},
		secondary: null,
		target: "all",
		type: "Psychic",
		zMove: {boost: {spd: 1}},
		contestType: "Clever",
	},
	woodhammer: {
		num: 452,
		accuracy: 100,
		basePower: 120,
		category: "Physical",
		name: "Wood Hammer",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		recoil: [33, 100],
		secondary: null,
		target: "normal",
		type: "Grass",
		contestType: "Tough",
	},
	workup: {
		num: 526,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Work Up",
		pp: 30,
		priority: 0,
		flags: {snatch: 1},
		boosts: {
			atk: 1,
			spa: 1,
		},
		secondary: null,
		target: "self",
		type: "Normal",
		zMove: {boost: {atk: 1}},
		contestType: "Tough",
	},
	worryseed: {
		num: 388,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Worry Seed",
		pp: 10,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1, mystery: 1},
		onTryImmunity(target) {
			// Truant and Insomnia have special treatment; they fail before
			// checking accuracy and will double Stomping Tantrum's BP
			if (target.ability === 'truant' || target.ability === 'insomnia') {
				return false;
			}
		},
		onTryHit(target) {
			if (target.getAbility().isPermanent) {
				return false;
			}
		},
		onHit(pokemon) {
			const oldAbility = pokemon.setAbility('insomnia');
			if (oldAbility) {
				this.add('-ability', pokemon, 'Insomnia', '[from] move: Worry Seed');
				if (pokemon.status === 'slp') {
					pokemon.cureStatus();
				}
				return;
			}
			return false;
		},
		secondary: null,
		target: "normal",
		type: "Grass",
		zMove: {boost: {spe: 1}},
		contestType: "Clever",
	},
	wrap: {
		num: 35,
		accuracy: 90,
		basePower: 15,
		category: "Physical",
		name: "Wrap",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		volatileStatus: 'partiallytrapped',
		secondary: null,
		target: "normal",
		type: "Normal",
		contestType: "Tough",
	},
	wringout: {
		num: 378,
		accuracy: 100,
		basePower: 0,
		basePowerCallback(pokemon, target) {
			return Math.floor(Math.floor((120 * (100 * Math.floor(target.hp * 4096 / target.maxhp)) + 2048 - 1) / 4096) / 100) || 1;
		},
		category: "Special",
		isNonstandard: "Past",
		name: "Wring Out",
		pp: 5,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {basePower: 190},
		maxMove: {basePower: 140},
		contestType: "Tough",
	},
	xscissor: {
		num: 404,
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		name: "X-Scissor",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Bug",
		contestType: "Cool",
	},
	yawn: {
		num: 281,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Yawn",
		pp: 10,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1},
		volatileStatus: 'yawn',
		onTryHit(target) {
			if (target.status || !target.runStatusImmunity('slp')) {
				return false;
			}
		},
		condition: {
			noCopy: true, // doesn't get copied by Baton Pass
			duration: 2,
			onStart(target, source) {
				this.add('-start', target, 'move: Yawn', '[of] ' + source);
			},
			onResidualOrder: 23,
			onEnd(target) {
				this.add('-end', target, 'move: Yawn', '[silent]');
				target.trySetStatus('slp', this.effectState.source);
			},
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {boost: {spe: 1}},
		contestType: "Cute",
	},
	zapcannon: {
		num: 192,
		accuracy: 50,
		basePower: 120,
		category: "Special",
		name: "Zap Cannon",
		pp: 5,
		priority: 0,
		flags: {bullet: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 100,
			status: 'par',
		},
		target: "normal",
		type: "Electric",
		contestType: "Cool",
	},
	zenheadbutt: {
		num: 428,
		accuracy: 90,
		basePower: 80,
		category: "Physical",
		name: "Zen Headbutt",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 20,
			volatileStatus: 'flinch',
		},
		target: "normal",
		type: "Psychic",
		contestType: "Clever",
	},
	zingzap: {
		num: 716,
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		name: "Zing Zap",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 30,
			volatileStatus: 'flinch',
		},
		target: "normal",
		type: "Electric",
		contestType: "Cool",
	},
	zippyzap: {
		num: 729,
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		isNonstandard: "LGPE",
		name: "Zippy Zap",
		pp: 10,
		priority: 2,
		flags: {contact: 1, protect: 1},
		secondary: {
			chance: 100,
			self: {
				boosts: {
					evasion: 1,
				},
			},
		},
		target: "normal",
		type: "Electric",
		contestType: "Cool",
	},
};
