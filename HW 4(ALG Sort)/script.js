// Имея два отсортированных массива размера m и n соответственно, вам нужно найти элемент, который будет находиться 
// на k - й позиции в конечном отсортированном массиве.
let arr1 = [100, 112, 256, 349, 770];
let arr2 = [72, 86, 113, 119, 265, 445, 892];
let num = 7;

function searchNum(arr1, arr2, num) {
    let i = 0
    let j = 0
    while (i < arr1.lenght && j < arr2.lenght) {
        if (arr1[i] < arr2[j]) {
            if (i + j === num - 1) {
                return arr1[i]
            }
            i++;
        } else {
            if (i + j === num - 1) {
                return arr2[j]
            }
            j++;
        }
    }

    while (i < arr1.length) {
        if (i + j === num - 1) {
          return arr1[i];
        }
        i++;
      }
      while (j < arr2.length) {
        if (i + j === num - 1) {
          return arr2[j];
        }
        j++;
    }
    return -1;
}
searchNum(arr1, arr2, num)


// Решите задачу: Расставьте в алфавитном порядке буквы.Разрешается использование техники Разделяй и властвуй. 
// Полученные данные напечатайте.
// На вход строка: "poiuytrewqlkjhgfdsamnbvcxz"
// На выходе должно быть: ABCDEFGHIJKLMNOPQRSTUVWXYZ (с большой буквы)
function mergeSort(str) {
    if (str.length === 1) {
      return str;
    }
    
    const mid = Math.floor(str.length / 2);
    const left = str.slice(0, mid);
    const right = str.slice(mid);
    
    return merge(mergeSort(left), mergeSort(right));
  }
  
  function merge(left, right) {
    let i = 0;
    let j = 0;
    let result = '';
    
    while (i < left.length && j < right.length) {
      if (left[i] < right[j]) {
        result += left[i];
        i++;
      } else {
        result += right[j];
        j++;
      }
    }
    
    while (i < left.length) {
      result += left[i];
      i++;
    }
    
    while (j < right.length) {
      result += right[j];
      j++;
    }
    
    return result;
  }
  
  const str = "poiuytrewqlkjhgfdsamnbvcxz";
  const sorted = mergeSort(str).toUpperCase();
  
  console.log(sorted);
  