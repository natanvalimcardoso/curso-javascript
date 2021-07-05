var result = someFn({ someProperty: 'interview' }, function (param1, param2) {
    console.log('This pointing to', this);
    console.log('Param 1 is', param1);
    console.log('Param 2 is', param2);
}, ['cool', 'interview']);

console.log('Result is', result);

// Resultado esperado
This pointing to { someProperty: 'interview' }
Param 1 is "cool"
Param 2 is "interview"
Result is 1
