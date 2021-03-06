/**
 * Lorem Ipsum generator
 * https://github.com/bares43/lorem_ipsum_generator
 * Jan Bares <janbares43@gmail.com>, <janbares.cz>, 2015
 */

lorem_ipsum_generator.TYPE_CHARACTERS = "type_characters";
lorem_ipsum_generator.TYPE_WORDS = "type_words";
lorem_ipsum_generator.TYPE_SENTENCES = "type_sentences";
lorem_ipsum_generator.TYPE_PARAGRAPHS = "type_paragraphs";

lorem_ipsum_generator.TEXT_SIZE_LOWERCASE = "text_size_lowercase";
lorem_ipsum_generator.TEXT_SIZE_UPPERCASE = "text_size_uppercase";
lorem_ipsum_generator.TEXT_SIZE_CAPITALIZE = "text_size_capitalize";
lorem_ipsum_generator.TEXT_SIZE_CAPITALIZE_TEXT = "text_size_capitalize_text";
lorem_ipsum_generator.TEXT_SIZE_CAPITALIZE_SENTENCE = "text_size_capitalize_sentence";

function lorem_ipsum_generator(user_options){

    var i,j;

    var options = {
        type : lorem_ipsum_generator.TYPE_CHARACTERS,
        length : '3',
        wrapHTML : false,
        addChars : [],
        remove : false,
        removeChars : [" ",",","\\."],
        shuffle : true,
        textSize : lorem_ipsum_generator.TEXT_SIZE_CAPITALIZE_SENTENCE
    };

    if(user_options !== undefined){
        for(var key in options){
            if(user_options.hasOwnProperty(key)){
                options[key] = user_options[key];
            }
        }
    }

    var lorem_paragraphs = [
        "Nam quis nulla. Integer malesuada. In in enim a arcu imperdiet malesuada. Sed vel lectus. Donec odio urna, tempus molestie, porttitor ut, iaculis quis, sem. Phasellus rhoncus. Aenean id metus id velit ullamcorper pulvinar. Vestibulum fermentum tortor id mi. Pellentesque ipsum. Nulla non arcu lacinia neque faucibus fringilla. Nulla non lectus sed nisl molestie malesuada. Proin in tellus sit amet nibh dignissim sagittis. Vivamus luctus egestas leo. Maecenas sollicitudin. Nullam rhoncus aliquam metus. Etiam egestas wisi a erat.",
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam feugiat, turpis at pulvinar vulputate, erat libero tristique tellus, nec bibendum odio risus sit amet ante. Aliquam erat volutpat. Nunc auctor. Mauris pretium quam et urna. Fusce nibh. Duis risus. Curabitur sagittis hendrerit ante. Aliquam erat volutpat. Vestibulum erat nulla, ullamcorper nec, rutrum non, nonummy ac, erat. Duis condimentum augue id magna semper rutrum. Nullam justo enim, consectetuer nec, ullamcorper ac, vestibulum in, elit. Proin pede metus, vulputate nec, fermentum fringilla, vehicula vitae, justo. Fusce consectetuer risus a nunc. Aliquam ornare wisi eu metus. Integer pellentesque quam vel velit. Duis pulvinar.",
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi gravida libero nec velit. Morbi scelerisque luctus velit. Etiam dui sem, fermentum vitae, sagittis id, malesuada in, quam. Proin mattis lacinia justo. Vestibulum facilisis auctor urna. Aliquam in lorem_paragraphs sit amet leo accumsan lacinia. Integer rutrum, orci vestibulum ullamcorper ultricies, lacus quam ultricies odio, vitae placerat pede sem sit amet enim. Phasellus et lorem_paragraphs id felis nonummy placerat. Fusce dui leo, imperdiet in, aliquam sit amet, feugiat eu, orci. Aenean vel massa quis mauris vehicula lacinia. Quisque tincidunt scelerisque libero. Maecenas libero. Etiam dictum tincidunt diam. Donec ipsum massa, ullamcorper in, auctor et, scelerisque sed, est. Suspendisse nisl. Sed convallis magna eu sem. Cras pede libero, dapibus nec, pretium sit amet, tempor quis, urna.",
        "Etiam posuere quam ac quam. Maecenas aliquet accumsan leo. Nullam dapibus fermentum ipsum. Etiam quis quam. Integer lacinia. Nulla est. Nulla turpis magna, cursus sit amet, suscipit a, interdum id, felis. Integer vulputate sem a nibh rutrum consequat. Maecenas lorem_paragraphs. Pellentesque pretium lectus id turpis. Etiam sapien elit, consequat eget, tristique non, venenatis quis, ante. Fusce wisi. Phasellus faucibus molestie nisl. Fusce eget urna. Curabitur vitae diam non enim vestibulum interdum. Nulla quis diam. Ut tempus purus at lorem_paragraphs.",
        "In sem justo, commodo ut, suscipit at, pharetra vitae, orci. Duis sapien nunc, commodo et, interdum suscipit, sollicitudin et, dolor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam id dolor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Mauris dictum facilisis augue. Fusce tellus. Pellentesque arcu. Maecenas fermentum, sem in pharetra pellentesque, velit turpis volutpat ante, in pharetra metus odio a lectus. Sed elit dui, pellentesque a, faucibus vel, interdum nec, diam. Mauris dolor felis, sagittis at, luctus sed, aliquam non, tellus. Etiam ligula pede, sagittis quis, interdum ultricies, scelerisque eu, urna. Nullam at arcu a est sollicitudin euismod. Praesent dapibus. Duis bibendum, lectus ut viverra rhoncus, dolor nunc faucibus libero, eget facilisis enim ipsum id lacus. Nam sed tellus id magna elementum tincidunt.",
        "Morbi a metus. Phasellus enim erat, vestibulum vel, aliquam a, posuere eu, velit. Nullam sapien sem, ornare ac, nonummy non, lobortis a, enim. Nunc tincidunt ante vitae massa. Duis ante orci, molestie vitae, vehicula venenatis, tincidunt ac, pede. Nulla accumsan, elit sit amet varius semper, nulla mauris mollis quam, tempor suscipit diam nulla vel leo. Etiam commodo dui eget wisi. Donec iaculis gravida nulla. Donec quis nibh at felis congue commodo. Etiam bibendum elit eget erat.",
        "Praesent in mauris eu tortor porttitor accumsan. Mauris suscipit, ligula sit amet pharetra semper, nibh ante cursus purus, vel sagittis velit mauris vel metus. Aenean fermentum risus id tortor. Integer imperdiet lectus quis justo. Integer tempor. Vivamus ac urna vel leo pretium faucibus. Mauris elementum mauris vitae tortor. In dapibus augue non sapien. Aliquam ante. Curabitur bibendum justo non orci.",
        "Morbi leo mi, nonummy eget, tristique non, rhoncus non, leo. Nullam faucibus mi quis velit. Integer in sapien. Fusce tellus odio, dapibus id, fermentum quis, suscipit id, erat. Fusce aliquam vestibulum ipsum. Aliquam erat volutpat. Pellentesque sapien. Cras elementum. Nulla pulvinar eleifend sem. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque porta. Vivamus porttitor turpis ac leo.",
        "Maecenas ipsum velit, consectetuer eu, lobortis ut, dictum at, dui. In rutrum. Sed ac dolor sit amet purus malesuada congue. In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Suspendisse sagittis ultrices augue. Mauris metus. Nunc dapibus tortor vel mi dapibus sollicitudin. Etiam posuere lacus quis dolor. Praesent id justo in neque elementum ultrices. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. In convallis. Fusce suscipit libero eget elit. Praesent vitae arcu tempor neque lacinia pretium. Morbi imperdiet, mauris ac auctor dictum, nisl ligula egestas nulla, et sollicitudin sem purus in lacus.",
        "Aenean placerat. In vulputate urna eu arcu. Aliquam erat volutpat. Suspendisse potenti. Morbi mattis felis at nunc. Duis viverra diam non justo. In nisl. Nullam sit amet magna in magna gravida vehicula. Mauris tincidunt sem sed arcu. Nunc posuere. Nullam lectus justo, vulputate eget, mollis sed, tempor sed, magna. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam neque. Curabitur ligula sapien, pulvinar a, vestibulum quis, facilisis vel, sapien. Nullam eget nisl. Donec vitae arcu."
    ];

    var removeRegular = new RegExp("("+options.removeChars.join("|")+")","g");

    if(options.shuffle){
        for (i = lorem_paragraphs.length-1; i >=0; i--) {

            var randomIndex = Math.floor(Math.random()*(i+1));
            var itemAtIndex = lorem_paragraphs[randomIndex];

            lorem_paragraphs[randomIndex] = lorem_paragraphs[i];
            lorem_paragraphs[i] = itemAtIndex;
        }
    }

    if(options.remove && options.type != lorem_ipsum_generator.TYPE_WORDS && options.type != lorem_ipsum_generator.TYPE_SENTENCES){
        for(i = 0;i<lorem_paragraphs.length;i++){
            lorem_paragraphs[i] = lorem_paragraphs[i].replace(removeRegular,"");
        }
    }

    var lorem = "";

    switch(options.type){
        case lorem_ipsum_generator.TYPE_WORDS:
            var lorem_join = lorem_paragraphs.join();
            var words = lorem_join.split(" ");
            for(i = 0;i < options.length;i++){
                lorem += words[i % words.length];
                if(i < options.length-1){
                    lorem += " ";
                }
            }
            if(options.remove){
                lorem = lorem.replace(removeRegular,"");
            }
            break;
        case lorem_ipsum_generator.TYPE_SENTENCES:
            var lorem_join = lorem_paragraphs.join();
            var sentences = lorem_join.split(". ");
            for(i = 0;i < options.length;i++){
                lorem += sentences[i % sentences.length]+".";
                if(i < options.length-1){
                    lorem += " ";
                }
            }
            if(options.remove){
                lorem = lorem.replace(removeRegular,"");
            }
            break;
        case lorem_ipsum_generator.TYPE_PARAGRAPHS:
            for(i = 0;i < options.length;i++){
                var p = lorem_paragraphs[i % lorem_paragraphs.length];
                if(options.wrapHTML){
                    p = "<p>" + p + "</p>";
                }
                lorem += p;
            }
            break;
        default:
            var lorem_characters = lorem_paragraphs.join();
            for(i = 0;i < options.length;i++){
                lorem += lorem_characters.charAt(i % lorem_characters.length);
            }
            break;
    }

    if(options.addChars.length > 0){
        var chars_count = 0;
        var chars = [];
        for(i = 0;i<options.addChars.length;i++){
            var char = options.addChars[i];
            for(j = 0;j<char.positions.length;j++){
                chars[char.positions[j]] = options.addChars[i].char;
                chars_count += options.addChars[i].char.length;
            }
        }

        if(options.type === lorem_ipsum_generator.TYPE_CHARACTERS) {
            lorem = lorem.substr(0, lorem.length - chars_count);
        }

        for(i = 0;i < chars.length; i++){
            if(chars[i] !== undefined){
                lorem = lorem.slice(0,i) + chars[i] + lorem.slice(i);
            }
        }
    }

    switch (options.textSize){
        case lorem_ipsum_generator.TEXT_SIZE_LOWERCASE:
            lorem = lorem.toLowerCase();
            break;
        case lorem_ipsum_generator.TEXT_SIZE_UPPERCASE:
            lorem = lorem.toUpperCase();
            break;
        case lorem_ipsum_generator.TEXT_SIZE_CAPITALIZE:
            lorem = lorem.toLowerCase();
            var words = lorem.split(" ");
            for(i = 0;i < words.length; ++i){
                words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
            }
            lorem = words.join(" ");
            break;
        case lorem_ipsum_generator.TEXT_SIZE_CAPITALIZE_TEXT:
            lorem = lorem.toLowerCase();
            lorem = lorem.charAt(0).toUpperCase() + lorem.slice(1);
            break;
        default:
            lorem = lorem.toLowerCase();
            lorem = lorem.charAt(0).toUpperCase() + lorem.slice(1);
            var reg = /(\. ?)|(<p>)/gi, result;
            while (result = reg.exec(lorem)) {
                lorem = lorem.slice(0, result.index + result[0].length) + lorem.charAt(result.index + result[0].length).toUpperCase() + lorem.slice(result.index + result[0].length + 1);
            }
            break;
    }

    return lorem;
}