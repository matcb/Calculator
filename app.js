/*

TODO

[MATH OPERATION] UNDONE

[CLEAR ALL] DONE

[CLEAR ONE BY ONE] UNDONE

[RESTRIÇÕES]:
- SEM LETRAS, espaçoes E CARACTERES ESPECIAIS
- ACEITAR ENTRADA PELO TECLADO
*/

let input = document.getElementById('num_val');
let res;
let opList = document.getElementById('basicOp');
let _opList = opList.querySelectorAll('button.btOp');
let equals = document.getElementById('result');
let clear = document.getElementById('cleanAll');


function display(a){

   (input.value === undefined ? input.value = '' : res = input.value += a )

}


function clearAll(){
  (input.value !== undefined ? input.value = '' : display())
}

function result(){

}

function clear_ (){
  let res_ = input.value;
  (res_ !== undefined ? res.pop('') : display())
}
