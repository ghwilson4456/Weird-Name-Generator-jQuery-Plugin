;(function($) {

	$.wng = function(options) {

		var defaults = {
			'sound'	: 'random',
			'size'	: '5',
			'leet'	: 0
		}

		var plugin = this;
		plugin.settings = {}
		
		var vowels = ['a','e','i','o','u','y'];
		var consonants = ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','z'];
		
		var vowelCombos = ['a','ai','ae','e','ea','ee','ey','i','ia','ie','o','oo','ou','u','y','ye'];
		
		var vowelsStart = ['a','e','i','o','u'];
		var consonantsHardStart = ['B','Bl','Br','Chr','Cr','D','Dr','G','Gr','K','Kr','P','Pr','Sp','St','T','Tr'];
		var consonantsSoftStart = ['C','Ch','F','H','J','L','M','N','Ph','Qu','R','S','Sh','Sm','Sn','Th','V','W','X','Y','Z'];
		
		var consonantsHardMid = consonantsHardStart.slice(0).concat(['hm','lbl','mbl','rb','rbl']);
		var consonantsSoftMid = consonantsSoftStart.slice(0).concat(['sm','sn','sr']);
		
		var consonantsHardEnd = ['b','c','ck','d','g','k','nd','p','rt','sp','st','t'];
		var consonantsSoftEnd = ['f','h','j','l','m','n','r','rs','s','th','v','w','x','y','z'];

		var init = function() {
			plugin.settings = $.extend({}, defaults, options);
			// code goes here
		}

		plugin.generate = function(options) {
			var isConst = true;
			var isHard = true;
			
			if (plugin.settings.sound == "random") {
				isConst = randRange(0, 1);
				isHard = (randRange(0, 1)) ? true : false;
			} else if (plugin.settings.sound == "soft") {
				isHard = false;
				isConst = false;
			}
			
			var weirdName = [];

			var part = "";
			
			if (isConst) {
				if (isHard) {
					weirdName.push(validCombo(weirdName, consonantsHardStart));
				} else {
					weirdName.push(validCombo(weirdName, consonantsSoftStart));
				}
			} else {
				weirdName.push(validCombo(weirdName, vowelsStart).toUpperCase());
			}
			
			var isValid = true;
				
			for (var i = 0; i < plugin.settings.size - 2; i++) {
				isConst = (isConst == false);
				
				if (plugin.settings.sound == "random") {
					isHard = (isHard == false);
				}
				
				if (isConst) {
					if (isHard) {
						part = validCombo(weirdName, consonantsHardMid).toLowerCase();
					} else {
						part = validCombo(weirdName, consonantsSoftMid).toLowerCase();
					}
				} else {
					if (randRange(0,3) == 0) {
						part = validCombo(weirdName, vowelCombos);
					} else {
						part = validCombo(weirdName, vowels);
					}
				}
				
				weirdName.push(part);
			}
			
			isConst = (isConst == false);
			
			if (isConst) {
				if (isHard) {
					weirdName.push(validCombo(weirdName, consonantsHardEnd));
				} else {
					weirdName.push(validCombo(weirdName, consonantsSoftEnd));
				}
				
				if (randRange(0, 2) == 0) {
					weirdName.push(validCombo(weirdName, vowels));
				}
			} else {
				weirdName.push(validCombo(weirdName, vowels));
				
				if (randRange(0, 2) == 0) {
					weirdName.push(validCombo(weirdName, consonants));
				}
			}
			
			if (plugin.settings.leet) {
				return this.leet(weirdName.join(""), plugin.settings.leet);
			} else {
				return weirdName.join("");
			}
		}

		plugin.leet = function(name, type) {
			type = Number(type);
			
			var leetObj = {
				numbers : {
					vowels : {
						a : "4",
						e : "3",
						i : "1",
						o : "0"
					},
					
					consonants : {
						l : "1",
						r : "2",
						z : "2",
						s : "5",
						b : "6",
						g : "6",
						t : "7",
						l : "7",
						b : "8",
						g : "9",
						q : "9"
					}
				},

				symbols : {
					vowels : {
						a: ["4","/-\\","/_\\","@","/\\"],
						e: ["3"],
						i: ["1","|"],
						o: ["0","()","[]","{}"],
						u: ["|_|","\\_\\","/_/","\\_/","(_)"]
					},
					
					consonants : {
						b: ["8,|3","13","|}","|:","|8","18","6","|B"],
						c: ["<","{","[","("],
						d: ["|>","|)","|}","|]"],
						f: ["|=","ph","|#"],
						g: ["[","-","[+","6"],
						h: ["|-|","[-]","{-}","|=|","[=]","{=}"],
						j: ["_|","_/","_7","_)"],
						k: ["|<","1<"],
						l: ["|_","|,"],
						m: ["|\\/|","^^","/\\/\\","[]\\/][","[]V[]","][\\\\//][","//.",".\\\\","N\\"],
						n: ["|\\|","/\\/","/V","][\\\\]["],
						p: ["|o","|O","|>","|*","|°","|D"],
						q: ["O_","9","(,)"],
						r: ["|2","12",".-","|^"],
						s: ["5","$","§"],
						t: ["7","+","7`","'|'"],
						v: ["\\/"],
						w: ["\\/\\/","(/\\)","\\^/","|/\\|","\\X/","][1][","\\\\'","'//"],
						x: ["%","*","><","}{",")("],
						y: ["`/","¥"],
						z: ["2","7_",">_"]
					}
				}
			}
			
			var leetName = name.split("");
			var currLetter;
			
			for (var i = 0; i < leetName.length; i++) {
				currLetter = leetName[i].toLowerCase();
				
				switch (type) {
					case 1 :
					if (leetObj.numbers.vowels[currLetter]) {
						leetName[i] = leetObj.numbers.vowels[currLetter];
					}
					break;
					
					case 2 :
					if (i > 0) {
						if (leetObj.numbers.vowels[currLetter]) {
							leetName[i] = leetObj.numbers.vowels[currLetter];
						}
					}
					break;
					
					case 3 :
					if (i > 0) {
						if (leetObj.numbers.vowels[currLetter]) {
							leetName[i] = leetObj.numbers.vowels[currLetter];
						}
					
						if (leetObj.numbers.consonants[currLetter]) {
							leetName[i] = leetObj.numbers.consonants[currLetter];
						}
					}
					break;
					
					case 4 :
					if (leetObj.numbers.vowels[currLetter]) {
						leetName[i] = leetObj.numbers.vowels[currLetter];
					}
					
					if (leetObj.numbers.consonants[currLetter]) {
						leetName[i] = leetObj.numbers.consonants[currLetter];
					}
					break;
					
					case 5 :
					if (leetObj.symbols.vowels[currLetter]) {
						leetName[i] = leetObj.symbols.vowels[currLetter][randRange(0, leetObj.symbols.vowels[currLetter].length - 1)];
					}
					
					if (leetObj.symbols.consonants[currLetter]) {
						leetName[i] = leetObj.symbols.consonants[currLetter][randRange(0, leetObj.symbols.consonants[currLetter].length - 1)];
					}
					break;
				}
			}
			
			leetName = leetName.join("");
			
			return leetName;
		}

		var validCombo = function( name, parts ) {
			var validPart;
			var isValid = true;
			
			do {
				validPart = parts[randRange(0, parts.length - 1)];
			
				switch((name[name.length - 1] + validPart).toLowerCase()) {
					case "yy":
					case "quu":
					case "quy":
					case "cie":
					case "ylbl":
					isValid = false;
					break;
					
					default :
					isValid = true;
					break;
				}
				
				// Too many y's are a bad thing...
				if (isValid && validPart.indexOf("y") > -1 && randRange(0, 2) == 1) {
					isValid = false;
				}
			
			} while(!isValid)
			
			return validPart;
		}
		
		var randRange = function(min, max) {
			return Math.floor(Math.random() * (max - min + 1)) + min;
		}

		init();

	}

})(jQuery);
