let arr = [3, 4, 2, 5, 8, 9, 12, 32, 45, 78, 43, 11, 15, 1]
let num = +prompt("Enter number")
let index;
let sum = 0;

//-----1------
for (let i = 0; i < arr.length; i++) {
    index = arr.indexOf(num)
}

if (isNaN(num) || num == '') {
    alert('NOT A NUMBER')
}else if (arr.includes(num)) {
    alert("Ваше число: "+num+" Находиться в масиве под индексом: "+index);
}else {
    alert("Number not in Array") 
}

//------2-----
for (let i = 0; i < arr.length; i++) {
    sum += arr[i]**2
}
alert("Сума всех числе в масиве в квадрате ровна: "+sum)