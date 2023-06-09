// ({sigint: true})
const pt = require('prompt-sync');
const prompt = pt();
let input = prompt("Digite uma frase: ");

function MytoUpperCase(input) {
    var result = '';

    for (var i = 0; i < input.length; i++) {
      var char = input[i];
      
      if (char >= 'a' && char <= 'z') {
        var codigoUnicode = char.charCodeAt(0) - 32;
        var charMaiusculo = String.fromCharCode(codigoUnicode);
        result += charMaiusculo;
      } else {
        result += char;
      }
    }
    return result;
  }

  input = MytoUpperCase(input) ;
  console.log(input);