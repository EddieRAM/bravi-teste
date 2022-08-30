// Itera a string, adiciona colchetes a pilha e remove os pares.

// Complexidade de tempo: O(n);
// Complexidade de espaço: O(n)

function validateContext(string) {
  // chave : valor = abre : fecha
  const hashMap = { "(": ")", "{": "}", "[": "]" };
  const stack = [];
  for (let character of string) {
    if (hashMap[character]) { 
      // se o caractere da string é um colchete que abre, envia para a pilha
      stack.push(hashMap[character]);
    } else if (stack.length > 0 && stack[stack.length - 1] === character) {
      // verifica se o último caractere é um colchete que fecha e remove o par   
      stack.pop();
    } else {
      return false;
    }
  }
  // se a pilha estiver vazia ao final, o input é válido
  return stack.length === 0;
}

console.log(validateContext(')(')); // false
console.log(validateContext('[)')); // false
console.log(validateContext('a'));  // false
console.log(validateContext('(){}[]')); // true
console.log(validateContext('[{()}](){}')); // true
console.log(validateContext('[]{()'));  // false
console.log(validateContext('[{)]')); // false


// ● (){}[] é válido
// ● [{()}](){} é válido
// ● []{() não é válido
// ● [{)] não é válido
