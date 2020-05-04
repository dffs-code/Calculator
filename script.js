let display = document.getElementById('display');
let num1
let num2
let ope
let res

function insertNum(id){
    display.value += id;
}
function op(id){
    if(ope == null){
        ope = id;
        display.value += ope;
    }else{
        let dis = display.value.slice(0, -1)
        display.value = dis + id
    }
}
function equal(){
    let expression = display.value.replace("x", "*")
    expression = expression.replace("^", "**")
    res = eval(expression)
    if(res == Infinity){
        alert('Impossível dividir por 0')
        display.value = display.value.slice(0, -1)
    }else{
        display.value = res
        ope = null
    }
}
function clearAll(){
    ope = null
    display.value = ''
}