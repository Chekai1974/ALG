// У вас есть список из n элементов, которые представляют собой оценки студентов по математике.
// Вам нужно отсортировать этот список в порядке убывания оценок с использованием алгоритма
// сортировки Merge sort.Для решения этой задачи напишите функцию, которая принимает на
// вход список оценок и возвращает новый список, отсортированный в порядке убывания.
// { 3, 8, 1, 9, 4, 2, 7, 6, 5 };
// Решения
function mergeSort(marks) {
    if (marks.length <= 1) {
        return marks
    }
    const middle = Math.floor(marks.length / 2)
    const leftPart = marks.slice(0, middle)
    const rightPart = marks.slice(middle)

    const leftSorted = mergeSort(leftPart);
    const rightSorted = mergeSort(rightPart);

    const sortedArray = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < leftSorted.length && rightIndex < rightSorted.length) {
        if (leftSorted[leftIndex] < rightSorted[rightIndex]) {
            sortedArray.push(rightSorted[rightIndex])
            rightIndex++
        } else {
            sortedArray.push(leftSorted[leftIndex])
            leftIndex++
        }
    }
    return sortedArray.concat(leftSorted.slice(leftIndex)).concat(rightSorted.slice(rightIndex));
}

console.log(mergeSort([3, 8, 1, 9, 4, 2, 7, 6, 5]));

// Задача #1
// У вас есть 12 монет среди которых 1 монета фальшивая, весом отличающаяся от других монет.
// Вы должны определить фальшивую монету, используя только двухчашечные весы.
// Какое количество взвешиваний потребуется ?
// Как мы можем определить фальшивую монету и узнать, тяжелее она или легче остальных ?

// Шаг 1: Разделите монеты на три группы по 4 монеты в каждой.
// Шаг 2: Положить на весы две группы монет. Если они имеют одинаковый вес,
// фальшивая монета находится в третьей группе
// Если же веса не совпадают, фальшивая монета находится в одной из них
// Шаг 3: Свесить по одной монете в групе



// Level 2
// Дан массив объектов типа Person, который содержит поля name(тип String) и age(тип int).
// Необходимо отсортировать этот массив по возрасту в порядке убывания, используя алгоритм Merge sort.
// [{ name: "Alice", age: 25 }, { name: "Bob", age: 20 }, { name: "Charlie", age: 30 }, { name: "David", age: 35 }, { name: "Eve", age: 28 }]
// Так же просто нуно добавить в условия while(.age)
function mergeSort2(marks) {
    if (marks.length <= 1) {
        return marks
    }
    const middle = Math.floor(marks.length / 2)
    const leftPart = marks.slice(0, middle)
    const rightPart = marks.slice(middle)

    const leftSorted = mergeSort2(leftPart);
    const rightSorted = mergeSort2(rightPart);

    const sortedArray = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < leftSorted.length && rightIndex < rightSorted.length) {
        if (leftSorted[leftIndex].age < rightSorted[rightIndex].age) {
            sortedArray.push(rightSorted[rightIndex])
            rightIndex++
        } else {
            sortedArray.push(leftSorted[leftIndex])
            leftIndex++
        }
    }
    return sortedArray.concat(leftSorted.slice(leftIndex)).concat(rightSorted.slice(rightIndex));
}

console.log(mergeSort2([{ name: "Alice", age: 25 }, { name: "Bob", age: 20 }, { name: "Charlie", age: 30 }, { name: "David", age: 35 }, { name: "Eve", age: 28 }]));