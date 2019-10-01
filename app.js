//  Лекция 1.Строки и задачи //

// 1. Получить первую и последнюю буквы строки//

let string = 'some test string';
// string = string.length;
let first;
first = string[0]
console.log(first)
let last;
last = string[string.length -1]
console.log(last)


// 2.Сделать первую и последнюю буквы в верхнем регистре //
let upper;
upper = string.toLocaleUpperCase() [0] ;
console.log(upper)
let lower;
lower = string.toLocaleUpperCase() [string.length -1];
console.log(lower)

// 3. Найти положение слова ‘string’ в строке //
let index;
index = string.indexOf('string')
console.log(index)

// 4. Найти положение второго пробела (“вручную” ничего не считать) //
let lastIndex;
lastIndex = string.lastIndexOf(' ')
console.log(lastIndex)

// 5. Получить строку с 5-го символа длиной 4 буквы //   - НЕ ПОНЯЛ КАК ДЕЛАТЬ.

string = string.slice(4,)

// 6. Получить строку с 5-го по 9-й символы //

string = string.slice(4,9)

// 7. Получить новую строку из исходной путем удаления последних 6-и символов //

string = string.slice(0 , -6)

// 8. Из двух переменных a=20 и b=16 получить переменную string, в которой будет
//содержаться текст “2016”

let a = '20'
let b = '16'
string = a + b
console.log(a + b)



// Числа и задачи //

//1. Получить число pi из Math и округлить его до 2-х знаков после точки//

let value;
value = (Math.PI).toFixed(2);


// 2. Используя Math, найти максимальное и минимальное числа из представленного ряда 15, 11, 16, 12, 51, 12, 13, 51 //

value = Math.min(15,11,16,12,51,12,13,51);
value = Math.max(15,11,16,12,51,12,13,51);

// 3. Работа с Math.random:

// a. Получить случайное число и округлить его до двух цифр после запятой //

value = Math.random().toFixed(2)

// b. Получить случайное целое число от 0 до X. X - любое произвольное число //

value = Math.floor(Math.random() * 10 )

//4. Проверить результат вычисления 0.6 + 0.7 - как привести к нормальному виду (1.3)? //

value = 0.6 + 0.7;
value = parseFloat(value.toFixed(1));

// 5. Получить число из строки ‘100$’ //

value = parseFloat("100$")






// Лекция 2. if else.Задачи

// 5. Дан следующий код:


let product = { name: "Яблоко", price: ("10$") };

let name = "Яблоко"

let price = parseFloat("10$")

let min = 10; // минимальная цена
let max = 20; // максимальная цена

 if (price >= min && price <= max) {
   console.log(name)
 }
 else {
    console.log("Товаров не найдено")
}



// 1 Если переменная равна “hidden”, присвоить ей значение “visible”, иначе - “hidden”.


let hdd = "hidden"

if (hdd === "hidden") {
hdd = "visible"
} else { 
  hdd = "hidden"
}
console.log(hdd)

//2. Используя if, записать условие:
 // a ) если переменная равна нулю, присвоить ей 1;

let c = 0

if (c = 0) {
  c = 1
}

// b) если меньше нуля - строку “less then zero”;

if (c < 0) {
  c = "less then zero"
}


//c)   если больше нуля - используя оператор “присвоение”, переменную умножить на 10 (использовать краткую запись).

if (c > 0) {
  c *= 10
}
console.log(c) 


// 4 .Дан объект let item = { name: 'Intel core i7', price: '100$', discount: '15%' }.
//Написать условие если у item есть поле discount и там есть значение то в объекте item создать поле priceWithDiscount и записать туда цену с учетом скидки и вывести ее в консоль, обратите внимание  что поля discount и price это строки и вам из них нужно получить числа чтобы выполнить расчет. иначе если поля discount нет то вывести просто поле price в консоль.


let item = { name: 'Intel core i7', price: '100$', discount: '15%' };

if(item.discount) {
  item.priceWithDiscount = parseFloat(item.price) - (parseFloat(item.price) * parseFloat(item.discount) / 100);
  console.log(item.priceWithDiscount)
} else if(item.discount) {
  console.log(item.price)
}






// 3. Дан объект let car = { name: 'Lexus', age: 10, create: 2008, needRepair: false }. 
//Написать условие если возраст машины больше 5 лет то нужно вывести в консоль сообщение 'Need Repair' и свойство needRepair в объекте car изменить на true; иначе изменить на false.


let car = { name: 'Lexus', age: 10, create: 2008, needRepair: false }
let carAge = 5

if (car.age > carAge) {
  car.needRepair = true
  console.log("Need repair", car.needRepair = true)
} else {
  console.log(car.needRepair = false)
}







// Преобразование примитивов. Задачи.
 
 let z 
 z = 0 || 'string' // string ; 0 = false , 'string' - true . Оператор ИЛИ возвращает true
 console.log(z)
 z = 1 && 'string'; // string ; 1 = true , 'string' - true . Оператор И возращает true
 console.log(z)
 z = null || 25; // 25;  null = false , 25 = true . Оператор ИЛИ возвращает true
 console.log(z)
 z = null && 25; // null; null = false, 25 - true . Оператор И возвращает false
 console.log(z)
 z = null || 0 || 35; // 35; По сути null и 0 - false , 35 true . false || true = true ;
 console.log(z)
 z = null && 0 && 35; // null. null, 0 = false , 35 = true . false && true = false
 console.log(z)




 console.log(12 + 14 + '12') // 2612 ; при сложении всё преобразуется в строку 
 console.log(3 + 2 - '1') // 4 ;  При других  - преобразовываться к числу 3+2 = 5 , 5 - '1' = 4 ; 
 console.log('3' + 2 - 1) // 31 ; 2 - 1 = 1, '3' + 1 = 31;
 console.log(true + 2) // 3;  true = 1 , 2 = 2
 console.log(+'10' + 1) // 11 ; +  перед "10" приравнивает её к числу то есть 10 + 1 = 11
 console.log(undefined + 2) // NaN ; 2 = 2 , underfined = NaN . underfined + 2 = NaN
 console.log(null + 5)  // 5 ;  null = 0 , 5 = 5
 console.log(true + undefined) // NaN ; в Boolean true = 1 , underfined = NaN . 1 + NaN = NaN

 
