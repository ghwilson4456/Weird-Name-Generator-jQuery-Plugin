/*
 * 	Weird Name Generator 0.1 - jQuery plugin
 *	written by Gary H. Wilson	
 *	http://www.jarofcode.com
 *
 *	Copyright (c) 2011 Gary H. Wilson (http://www.jarofcode.com)
 *	Built for jQuery library http://jquery.com
 */
 
(function($) {
	$.extend({
		wng : {
			
			// -------- Helper Functions  ---------------------------------------------------------------------
			
			randRange: function(min, max) {
				return Math.floor(Math.random() * (max - min + 1)) + min;
			},
			
			// -------- Leet Function  ------------------------------------------------------------------------
			
			leet: function(name, type) {
				type = Number(type);
				
				var leetObj = {
					numbers : {
						vowels : {
							"a" : "4",
							"e" : "3",
							"i" : "1",
							"o" : "0"
						},
						
						consonants : {
							"l" : "1",
							"r" : "2",
							"z" : "2",
							"s" : "5",
							"b" : "6",
							"g" : "6",
							"t" : "7",
							"l" : "7",
							"b" : "8",
							"g" : "9",
							"q" : "9"
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
							leetName[i] = leetObj.symbols.vowels[currLetter][this.randRange(0, leetObj.symbols.vowels[currLetter].length - 1)];
						}
						
						if (leetObj.symbols.consonants[currLetter]) {
							leetName[i] = leetObj.symbols.consonants[currLetter][this.randRange(0, leetObj.symbols.consonants[currLetter].length - 1)];
						}
						break;
					}
				}
				
				leetName = leetName.join("");
				
				return leetName;
			},
			
			// -------- Create Weird Name Function  -----------------------------------------------------------
			
			create: function( options ) {
				var settings = {
					'sound' : 'random',
					'size' : '5',
					'leet'      : 0
				};
			
				if ( options ) { 
					$.extend( settings, options );
				}
				
				var vowels = ['a','e','i','o','u','y'];
				var consonants = ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','z'];
				
				var vowelCombos = ['a','ai','ae','e','ea','ee','i','ie','o','oo','u','y'];
				
				var consonantsHardStart = ['B','Bl','Br','Chr','Cr','D','Dr','G','Gr','K','Kr','P','Pr','Sp','St','T','Tr'];
				var consonantsSoftStart = ['C','Ch','F','H','J','L','M','N','Ph','Qu','R','S','Sh','Sm','Sn','Th','V','W','X','Y','Z'];
				
				var consonantsHardMid = consonantsHardStart.slice(0).concat(['mbl','rb','rbl']);
				var consonantsSoftMid = consonantsSoftStart.slice(0).concat(['sm','sn','sr']);
				
				var consonantsHardEnd = ['b','c','d','g','k','p','sp','st','t'];
				var consonantsSoftEnd = ['f','h','j','l','m','n','r','s','th','v','w','x','y','z'];
				
				var isConst = true;
				var isHard = true;
				
				if (settings.sound == "random") {
					isConst = this.randRange(0, 1);
					isHard = (this.randRange(0, 1)) ? true : false;
				} else if (settings.sound == "soft") {
					isHard = false;
					isConst = false;
				}
				
				var weirdName = [];

				var part = "";
				
				if (isConst) {
					if (isHard) {
						weirdName.push(consonantsHardStart[this.randRange(0, consonantsHardStart.length - 1)]);
					} else {
						weirdName.push(consonantsSoftStart[this.randRange(0, consonantsSoftStart.length - 1)]);
					}
				} else {
					weirdName.push(vowels[this.randRange(0, vowels.length - 1)].toUpperCase());
				}
				
				var isValid = true;
					
				for (var i = 0; i < settings.size - 2; i++) {
					isConst = (isConst == false);
					
					if (settings.sound == "random") {
						isHard = (isHard == false);
					}
					
					do {
						if (isConst) {
							if (isHard) {
								part = consonantsHardMid[this.randRange(0, consonantsHardMid.length - 1)].toLowerCase();
							} else {
								part = consonantsSoftMid[this.randRange(0, consonantsSoftMid.length - 1)].toLowerCase();
							}
						} else {
							if (this.randRange(0,3) == 0) {
								part = vowelCombos[this.randRange(0, vowelCombos.length - 1)];
							} else {
								part = vowels[this.randRange(0, vowels.length - 1)];
							}
						}
					
						switch((weirdName[weirdName.length - 1] + part).toLowerCase()) {
							case "quu":
							case "quy":
							case "yy":
							case "cie":
							isValid = false;
							break;
						
							default :
							isValid = true;
							break;
						}
					
					} while(!isValid)
					
					weirdName.push(part);
				}
				
				isConst = (isConst == false);
				
				if (isConst) {
					if (isHard) {
						weirdName.push(consonantsHardEnd[this.randRange(0, consonantsHardEnd.length - 1)]);
					} else {
						weirdName.push(consonantsSoftEnd[this.randRange(0, consonantsSoftEnd.length - 1)]);
					}
				} else {
					weirdName.push(vowels[this.randRange(0, vowels.length - 1)]);
				}
				
				if (settings.leet) {
					return this.leet(weirdName.join(""), settings.leet);
				} else {
					return weirdName.join("");
				}
			}
		}
	});
})(jQuery);
