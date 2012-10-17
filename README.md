#Weird Name Generator jQuery Plugin

Copyright (C) 2012 Gary H. Wilson [http://www.jarofcode.com]

Weird Name Generator (WNG) is a jQuery plugin for generating random names. This is not a dictionary of randomly chosen names, but a generator that pieces together a name from phonetic rules of vowel and consonant combinations. WNG also has a built in leet converter. This combination of random pronounceable names and leet conversion make it handy for password generation.

* [WNG Homepage](http://jarofcode.com/weird-name-generator-jquery-plugin/)
* [GitHub Repository](https://github.com/ghwilson4456/Weird-Name-Generator-jQuery-Plugin)
* [jQuery Plugin Page](http://plugins.jquery.com/project/wng)


## Dependencies (not included in this repository)

- [jQuery](http://jquery.com)

##Usage

WNG is an utility that returns a value based on either it's default options or custom options. It can also be used to convert a string into leet-speak. This gives you the option of producing pronounceable but secure passwords.

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
    "leet"  : "vowels"
});

$('#names li').each(function() {
    $(this).html( wngPlugin.generate() );
});
</pre>

This one shows how to use the leet-speak method to convert a string.:

<pre>
var wngPlugin = new $.wng();
var myPassword = wngPlugin.leet("Winter", "basic");
</pre>

LICENSE
-------

Copyright (C) 2012 by Gary H. Wilson

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.