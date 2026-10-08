// Задание 2. Переменные и вывод

let userName = 'Артём'

console.log('Практическая работа №1')
console.log('Основы JavaScript')
console.log(`Привет, ${userName}!`)

// Задание 3. Математика и приведение типов

let price = '150.5'

console.log('Исходное значение price:', price)
console.log('Тип price:', typeof price)

let subtraction = price - 50
console.log('price - 50 =', subtraction)
console.log('Тип результата:', typeof subtraction)

let addition = price + 10
console.log('price + 10 =', addition)
console.log('Тип результата:', typeof addition)

let result = price / 2
console.log('price / 2 =', result)

let integerResult = Math.trunc(result)
console.log('Целая часть результата:', integerResult)
