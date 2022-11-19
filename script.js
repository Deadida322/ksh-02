let arr = [300, 0, 2, 1, 10, 15, 20];

for (let i of arr) {
    console.log(i); // получаем элемент
}

for (let i in arr) {
    console.log(i); // получаем индекс элемента
}

arr.forEach(function (value, index) {
    if (value == 2) {
        arr[index - 1] = 2; //в цикле forEach мы имеем доступ и до элемента и до его индекса
    }
});

arr.sort(); //выполняет изменение массива, не возвращая новый

let filteredArr = arr.filter(function (value) {
    if (value % 2 == 0) {
        //Функция filter возвращает новый массив, не меняя старый
        return true; // говорим, что такой элемент остаётся
    }
});

arr.sort(function (a, b) {
    return b - a;
});

let str = arr.join(""); // Соединяет все элементы массива в строку, возвращая новую строку, не меняя сам массив

console.log(str);

//Методы строк

let example = "Глеб лох";

let splittedExample = example.split(" "); //Выполняет разделение строки через заданный разделитель

console.log(splittedExample);

console.log(example.includes("лох")); // метод includes проверяет строку на вхождение подстроки
console.log(example.includes("молодец"));

let arrayFromString = example.split("");

console.log(arrayFromString);

let reversedStr = arrayFromString.reverse().join("");

let replacedExmpl = example.replace("лох", "молодец"); // заменяет одну подстроку на другую, возвращая изменённую строку

console.log(replacedExmpl);

//Стрелочные функции

// let filteredArr = arr.filter(function (value) {
//     if (value % 2 == 0) {
//         //Функция filter возвращает новый массив, не меняя старый
//         return true; // говорим, что такой элемент остаётся
//     }
// }); так писать неудобно

filteredArr = arr.filter((val) => val % 2 == 0); //равносильно тому, что сверху
console.log(filteredArr);

const sum = (a, b) => a + b; //стрелочная функция, которая выполняет суммирование
