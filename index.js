const readLine = require('readline-sync');

function start(){
    const content = {};

    content.shearchTearm = askAndReturnSearchTerm();
    content.prefix = askAndReturnPrefix();

    function askAndReturnSearchTerm(){
        return readLine.question('Type a wikipedia search term: ');
    }

    function askAndReturnPrefix(){
        const prefixs = ['Who is', 'What is', 'The history of'];
        const selectedPrefixIndex = readLine.keyInSelect(prefixs, "Choose one option: ")
        return prefixs[selectedPrefixIndex];
    }
    console.log(content);
}

start();