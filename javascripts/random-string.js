var form = document.getElementById('randomStringForm');

function generateRandom(max) {
    return Math.floor(Math.random() * max)
}
document.getElementById('generateButton').onclick = function() {
    var characters = '';
    if (form.upper.checked) characters += form.upper.value;
    if (form.lower.checked) characters += form.lower.value;
    if (form.numbers.checked) characters += form.numbers.value;
    if (form.special.checked) characters += form.special.value;
    var customChars = form.customChars.value.trim();
    if (customChars !== '') {
        characters += customChars
    }
    var results = [];
    var quantity = Number(form.quantity.value);
    while (results.length < quantity) {
        var charArr = characters.split('');
        var word = '';
        for (var i = 0, length = form.length.value; i < length; i++) {
            if (charArr.length < 1) break;
            var index = generateRandom(charArr.length);
            word += charArr[index]
        }
        if (results.indexOf(word) === -1) results.push(word)
    }
    form.output.value = results.join('\n')
};
document.getElementById('copyButton').onclick = function() {
    var output = document.getElementById('output');
    output.select();
    document.execCommand('copy')
};