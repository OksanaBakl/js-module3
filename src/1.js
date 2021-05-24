// ================ Задание 11 =================
// Выполни рефакторинг решения предыдущего задания добавив
// в цикл for...in проверку на собственное свойство.
// const keys = [];
// const values = [];
// const advert = {
//   service: 'apt',
// };
// const apartment = Object.create(advert);
// apartment.descr = 'Spacious apartment in the city centre';
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {

//   if (apartment.hasOwnProperty(key)) {
//     keys.push(key);
//     values.push(apartment[key]);
//   }

// }

// ================ Задание 12 =================
// Напиши функцию countProps(object), которая считает и
// возвращает количество собственных свойств объекта
// в параметре object.Используй переменную propCount
// для хранения количества свойств объекта.
// function countProps(object) {
//   let propCount = 0;

//   let propCount = 0;

//   for (const key in object) {
//     if (object.hasOwnProperty(key)) {
//       propCount += 1;
//     }
//   }

//   return propCount;
// }
// console.log(countProps({ name: 'Mango', age: 2 }));

// ================ Задание 12 =================
// Перебери объект apartment используя метод Object.keys()
// и цикл for...of.Запиши в переменную keys массив ключей
// собственных свойств объекта apartment,
// и добавь в массив values все значения его свойств.
// const apartment = {
//   descr: 'Spacious apartment in the city centre',
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// const keys = Object.keys(apartment);
// for (const key of keys) {
//   values.push(apartment[key]);
// }
// console.log(values);

// ================ Задание 14 =================
// Выполни рефакторинг функции countProps(object)
// используя метод Object.keys()
// и, возможно, цикл for...of.
// function countProps(object) {
//   // Change code below this line
//   let propCount = 0;
//   propCount = Object.keys(object).length;
//   return propCount;
// Change code above this line
// }

// ================ Задание 16 =================
// Напиши функцию countTotalSalary(salaries) которая принимает объект
// зарплат, где имя свойства это имя сотрудника,
//     а значение свойства это зарплата.Функция должна рассчитать
//      общую
// сумму зарплат сотрудников и вернуть её.
// Используй переменную totalSalary для хранения общей суммы зарплаты.
// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   // Change code below this line
//   const keys = Object.keys(salaries);
//   for (const key of keys) {
//     totalSalary += salaries[key];
//   }
//   // Change code above this line
//   return totalSalary;
// }
// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 })); //330

// ================ Задание 17 =================
// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line
// for (const color of colors) {
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb);
// }

// ================ Задание 18 =================
// Напиши функцию getProductPrice(productName) которая принимает один параметр productName -
// название продукта.Функция ищет объект продукта с таким именем(свойство name)
// в массиве products и возвращает его цену(свойство price).
// Если продукт с таким названием не найден, функция должна возвращать null.

// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   // Change code below this line
//   for (const product of products) {
//     let name = product.name;
//     if (productName === name) {
//       return product.price;
//     }
//   }
//   return 'null';
//   // Change code above this line
// }
// console.log(getProductPrice('Engine'));
// console.log(getProductPrice('Radar'));
// console.log(getProductPrice('Scanner'));
// console.log(getProductPrice('Grip'));

// ================ Задание 19 =================
// Напиши функцию getAllPropValues(propName) которая принимает
// один параметр propName - имя(ключ) свойства.
// Функция должна вернуть массив всех значений свойства с таким
// именем из каждого объекта в массиве products.
// Если в объектах нет свойства с таким именем, функция должна вернуть пустой массив.
// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Change code below this line
//   const values = [];
//   for (const item of products) {
//     let value = item[propName];
//     if (value != undefined) {
//       values.push(value);
//     }
//   }
//   return values;
//   // Change code above this line
// }
// console.log(getAllPropValues('name'));
// console.log(getAllPropValues('quantity'));
// console.log(getAllPropValues('price'));
// console.log(getAllPropValues('category'));

// ================ Задание 20 =================
// Напиши функцию calculateTotalPrice(productName) которая принимает один параметр
// productName - название товара.
// Функция должна вернуть общую стоимость(цена * количество)
// товара с таким именем из массива products.
const products = [
  { name: 'Radar', price: 1300, quantity: 4 },
  { name: 'Scanner', price: 2700, quantity: 3 },
  { name: 'Droid', price: 400, quantity: 7 },
  { name: 'Grip', price: 1200, quantity: 9 },
];

function calculateTotalPrice(productName) {
  // Пиши код ниже этой строки
  let total = 0;
  for (const prop of products) {
    let name = prop.name;
    if (productName === name) {
      total += prop.price * prop.quantity;
    }
  }
  return total;
  // Пиши код выше этой строки
}

console.log(calculateTotalPrice('Blaster')); // 0

console.log(calculateTotalPrice('Radar')); // 5200
console.log(calculateTotalPrice('Radar'));
console.log(calculateTotalPrice('Droid'));
