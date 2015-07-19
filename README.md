# Lorem Ipsum generator

Lorem Ipsum generator which allows generate characters, words, sentences or paragraphs of specified length, remove some characters from text or add characters to specified positions.

## Usage
```javascript
// simple lorem ipsum (by default 3 chars)
var lorem = lorem_ipsum_generator();

// defined length
var lorem = lorem_ipsum_generator({length:10});

// 10 words without spaces, dotes and commas
var lorem = lorem_ipsum_generator({
    length : 10,
    type : lorem_ipsum_generator.TYPE_WORDS,
    remove : true
});

// 10 words without spaces, dotes and commas but then add spaces to positions 5,10 and 15
var lorem = lorem_ipsum_generator({
    length : 10,
    type : lorem_ipsum_generator.TYPE_WORDS,
    remove : true,
    addChars : [
        {
            char : " ",
            positions : [5,10,15]
        }
    ]
});
```

## Params
- type : lorem_ipsum_generator.TYPE_CHARACTERS (by default) | lorem_ipsum_generator.TYPE_WORDS | lorem_ipsum_generator.TYPE_SENTENCES | lorem_ipsum_generator.TYPE_PARAGRAPHS
    - type of lorem ipsum text
- length : number (3)
    - length of lorem ipsum (amount of characters or words or paragraphs, this depends on type parameter)
- wrapHTML : boolean (false)
    - wrap paragraphs with HTMl p tag; works only if type is set to lorem_ipsum_generator.TYPE_PARAGRAPHS
- addChars : array
    - add chars on specified positions
    ```javascript
    addChars : [
        // add spaces to position 1 and 5 (positions are counted from 0 like arrays)
        {
            char : " ",
            positions : [1,5] 
        },
        // add string "hello" to position 10
        {
            char : "hello",
            positions : [10]
        }
    ]
    ```
- remove : boolean (false)
    - remove characters specified by removeChars parameter
- removeChars : array
    - default
    ```javascript
    [" ",",","\\."]
    ```
- shuffle : boolean (true)
    - get random lorem ipsum text
    
## Licence
MIT
Author: Jan Bares <janbares43@gmail.com>

## Version
0.1.0
