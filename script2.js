let input1 = document.getElementById("num1");
let input2 = document.getElementById("num2");
let res = document.getElementById("result")
let btn = document.getElementById("btn");
let btn2 = document.getElementById("btn2");
//document - глобальная переменная, где хранится вся страница, куда подключен скрипт

const sum = (a, b) => a + b;//Стрелочная функция, выполняющая суммирование двух элементов
const razn = (a, b) => a - b;
const doOnCLick = (fun)=>{ //функия, которая принимает функцию fun 
    let a = +input1.value // получаем значения первого инпута
    let b = Number(input2.value) // получаем значения второго инпута 
    // + или Number() нужен для преобразования строки в число

    if(a && b){ //Если a не получится закастить к числу, оно станет NaN а это эквивалентно false
        res.innerText = fun(a,b) //функция fun будет взята из аргументов и вызвана здесь
    }
    else{
        alert("Ты свою фигню в другом месте вводи")
    }
}
btn.onclick = () => { //Задаём первой кнопке действие, которое будет выполняться по клику на неё
    doOnCLick(sum) // Вызов функции которая будет выполнять  сложение 
};

btn2.onclick = () => {
    doOnCLick(razn)
};


