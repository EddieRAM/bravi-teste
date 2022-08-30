# Desafio 01 - Suportes Balanceados

Solução da primeira tarefa da avaliação técnica da Bravi.

## Problema:

Escreva uma função que receba uma string de colchetes como entrada e determine se a
ordem dos parênteses é válida. Um colchete é considerado qualquer um dos seguintes
caracteres: (, ), {, }, [, ou ].
Dizemos que uma sequência de colchetes é válida se as seguintes condições forem
atendidas:
● Não contém colchetes sem correspondência.
● O subconjunto de colchetes dentro dos limites de um par de colchetes correspondente é
também um par de colchetes.
Exemplos:
● (){}[] é válido
● [{()}](){} é válido
● []{() não é válido
● [{)] não é válido

## Solução:

O arquivo contextValidation.js contém a função que recebe uma string e retorna um valor
booleano verdadeiro para os casos em que o input é válido e falso para os casos inválidos.
