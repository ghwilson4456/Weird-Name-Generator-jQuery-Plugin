#Weird Name Generator jQuery Plugin

Copyright 2011 Gary H. Wilson [http://www.jarofcode.com]

Weird Name Generator (WNG) is a jQuery plugin for generating random names. This is not a dictionary of randomly chosen names, but a generator that pieces together a name from phonetic rules of vowel and consonant combinations.

* [WNG Homepage](http://jarofcode.com/weird-name-generator-jquery-plugin/)

* [GitHub Repository](https://github.com/ghwilson4456/Weird-Name-Generator-jQuery-Plugin)

* [jQuery Plugin Page](http://plugins.jquery.com/project/wng)


## Dependencies (not included in this repository)

- [jQuery](http://jquery.com)

##Usage

WNG does not directly affect elements. It's a utility that returns a value based on either it's default options or custom options. It can also be used to convert a string into leet-speak. This gives you the option of producing pronounceable but secure passwords.

Here is a basic example:

<pre>
var wngPlugin = new $.wng();
var myWeirdName = wngPlugin.generate();
</pre>

Here is another example that writes a weird name to a line item list with options:

<pre>
var wngPlugin = new $.wng({
    "size"  : 3,
    "sound" : "hard",
    "leet"  : 1
});

$('#names li').each(function() {
    $(this).html( wngPlugin.generate() );
});
</pre>

This one shows how to use the leet-speak method to convert a string.:

<pre>
var wngPlugin = new $.wng();
var myPassword = wngPlugin.leet("Winter", 1);
</pre>
