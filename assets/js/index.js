/*
Задание . функцию которая выводит чисоа  от 1 до 10  с интервалом
0.1 с. т ою вывод 1 с.
*/
// -
for(let i=1; i<=10; i++){
    setTimeout (() => {
        console.log(i);
    }, 100)
}

// +

let start = 100, end = 110;
const timerId = setInterval( () => {
    start <= end ? console.log(start++) : clearInterval(timerId);
});