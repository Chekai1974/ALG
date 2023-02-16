// -----1----
// Дано натуральное число N. Выведите слово YES, если число N является точной степенью двойки, или слово NO в противном случае.
// Операцией возведения в степень пользоваться нельзя!
n = +prompt()
i = 1
while (i < n){
    i = i * 2
}
if (i === n){
    console.log('YES')
}else{
    console.log('NO')
}


// -----2----Дано натуральное число N. Вычислите сумму его цифр.
function factorial(n, res){
    res = res || 1;
    if(!n){
        return res;
    }else{
        return factorial(n-1, res*n);
    }
}
console.log(factorial(5))
//Если передать значения res в function то рекурися начнеться с него factorial(5, 2)= 2*5*4*3*2*1=240


// 2.1 Напишите рекурсивный метод, который выводит на экран числа Фибоначчи до N-ого элемента.
function fibonacci(n) {
    if (n <= 1) {
      return n;
    } else {
      return fibonacci(n - 1) + fibonacci(n - 2);
    }
  }
console.log(fibonacci(4));
// но с большими числа все будет очень долго работать О(е^n)
// нашел правильный спсобо но сам немного не понял его, но суть понятна (use memoization)
function fibonacci(n, memo = {}) {
    if (n in memo) {
      return memo[n];
    }
    if (n <= 1) {
      return n;
    }
    memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
    return memo[n];
}
console.log(fibonacci(55));

// 2.2 Напишите рекурсивный метод, который проверяет, является ли строка палиндромом.
function isPalindrome(str) {
    if (str.length <= 1) {
      return true;
    }
  
    let i = 0;
    let j = str.length - 1;
  
    while (i < j) {
      if (str[i] !== str[j]) {
        return false;
      }
      i++;
      j--;
    }
    return true;
 }

// Подумал что должен быть какой-то метод для это задачи и нашел его перепеисал чере метод slice() но ещё есть substring()
function isPalindrome(str) {
    if (str.length <= 1) {
      return true;
    }
    if (str[0] === str[str.length - 1]) {
      return isPalindrome(str.slice(1, str.length - 2));
    } else {
      return false;
    }
  }