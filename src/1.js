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
// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
// //   // Пиши код ниже этой строки
// let total = 0;
// for (const prop of products) {
//   let name = prop.name;
//   if (productName === name) {
//     total += prop.price * prop.quantity;
//   }
// }
// return total;
// //   // Пиши код выше этой строки
// }

// console.log(calculateTotalPrice('Blaster')); // 0

// console.log(calculateTotalPrice('Radar')); // 5200
// console.log(calculateTotalPrice('Radar'));
// console.log(calculateTotalPrice('Droid'));

// ================ Задание 21 =================

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line
// const { yesterday, today, tomorrow } = highTemperatures;

// // Change code above this line
// const meanTemperature = (yesterday + today + tomorrow) / 3;

// ================ Задание 22 =================
// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line
// const {
//   yesterday,
//   today,
//   tomorrow,
//   icon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
// } = highTemperatures;

// // Change code above this line
// const meanTemperature = (yesterday + today + tomorrow) / 3;

// ================ Задание 23  =================
// Замени объявления переменных highYesterday, highToday,
//   highTomorrow и highIcon одной операцией деструктуризации свойств объекта
// highTemperatures. Задай значение по умолчанию для highIcon -
//   строку "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line
// const {
//   yesterday: highYesterday,
//   today: highToday,
//   tomorrow: highTomorrow,
//   icon: highIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
// } = highTemperatures;

// // Change code above this line
// const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;

// ================ Задание 24  =================
// Выполни рефакторинг цикла for...of так,
//   чтобы в нём использовалась деструктуризация объекта..
// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line

// for (const { hex, rgb } of colors) {
//   hexColors.push(hex);
//   rgbColors.push(rgb);
// }

// ================ Задание 25  =================
// Мы получили прогноз погоды на два дня, с минимальными и максимальными температурами,
// а также необязательными иконками.
// Замени объявления всех переменных одной операцией деструктуризации свойств объекта forecast.
// Задай значение по умолчанию для иконок, переменных todayIcon и tomorrowIcon -
// строку "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".
// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg',
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };
// // Change code below this line
// const {
//   today: {
//     low: lowToday,
//     high: highToday,
//     icon: todayIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
//   },
//   tomorrow: {
//     low: lowTomorrow,
//     high: highTomorrow,
//     icon: tomorrowIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
//   },
// } = forecast;

// ================ Задание 26  =================
// Функция calculateMeanTemperature(forecast) принимает один параметр
// forecast - объект температур на два дня следующего формата.
// {
//   today: { low: 10, high: 20 },
//   tomorrow: { low: 20, high: 30 }
// }
// Замени объявления переменных todayLow, todayHigh, tomorrowLow и tomorrowHigh
// одной операцией деструктуризации свойств объекта forecast.
// // Change code below this line
// function calculateMeanTemperature(forecast) {
//   const {
//     today: { low: todayLow, high: todayHigh },
//     tomorrow: { low: tomorrowLow, high: tomorrowHigh },
//   } = forecast;

//   // Change code above this line
//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }

// ================ Задание 27  =================
// В переменной scores хранится массив результатов тестирования.Используя распыление и
// методы Math.max() и Math.min() дополни код так,
// чтобы в переменной bestScore был самый высокий балл, а в worstScore самый низкий.

// const scores = [89, 64, 42, 17, 93, 51, 26];
// // Change code below this line
// const bestScore = Math.max(...scores);
// const worstScore = Math.min(...scores);
// console.log(bestScore);
// console.log(worstScore);

// ================ Задание 28  =================
// В переменных firstGroupScores, secondGroupScores и thirdGroupScores
// хранятся результаты тестирования отдельных групп.Используя распыление дополни код так, чтобы:

// В переменной allScores хранился массив всех результатов от первой до третьей группы.
// В переменной bestScore был самый высокий общий балл.
// В переменной worstScore был самый низкий общий балл.
// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];
// // Change code below this line
// const allScores = [
//   ...firstGroupScores,
//   ...secondGroupScores,
//   ...thirdGroupScores,
// ];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);

// ================ Задание 29  =================
// В конструкторе можно создавать новые тесты, для которых есть настройки
// по умолчанию которые хранятся в переменной defaultSettings.
// Во время создания теста, все или часть настроек можно переопределить,
// они хранятся в переменной overrideSettings.

// Для того чтобы получить финальные настройки теста,
//   необходимо взять настройки по умолчанию и поверх них применить переопределённые настройки.
// Дополни код так, чтобы в переменной finalSettings получился объект финальных настроек теста.
// const defaultSettings = {
//   theme: 'light',
//   public: true,
//   withPassword: false,
//   minNumberOfQuestions: 10,
//   timePerQuestion: 60,
// };
// const overrideSettings = {
//   public: false,
//   withPassword: true,
//   timePerQuestion: 30,
// };
// // Change code below this line
// const finalSettings = { ...defaultSettings, ...overrideSettings };
// console.log(finalSettings);

// ================ Задание 30  =================
// Напиши функцию makeTask(data) которая принимает один параметр data - объект со следующими свойствами.

// text - текст задачи.
// category - категория задачи.
// priority - приоритет задачи.
// Функция должна составить и вернуть новый объект задачи,
//   не изменяя напрямую параметр data.В новом объекте должно быть свойство completed,
//     значение которого хранится в одноимённой локальной переменной.

// В параметре data гарантированно будет только свойство text, а остальные два, category и priority,
//   могут отсутствовать.
//     Тогда, в новом объекте задачи, в свойствах category и priority должны быть значения по умолчанию,
//   хранящиеся в одноимённых локальных переменных.
// function makeTask(data) {
//   const completed = false;
//   const category = 'General';
//   const priority = 'Normal';

//   // Change code belo this line
//   const newData = { completed, category, priority, ...data };
//   return newData;
//   // Change code above this line
// }
// console.log(makeTask({ priority: 'Low', text: 'Choose shampoo' })); //{ category: "General", priority: "Low", text: "Choose shampoo", completed: false }

// ================ Задание 31  =================
// Используя операцию rest дополни код функции add() так,
//   чтобы она принимала любое количество аргументов, считала и возвращала их сумму.
// Change code below this line

// function add(...args) {
//   let total = 0;

//   for (const arg of args) {
//     total += arg;
//   }

//   return total;
// Change code above this line
// }
// ================ Задание 32  =================
// Функция addOverNum() считает сумму всех аргументов.
// Измени параметры и тело функции addOverNum() так, чтобы она считала сумму
// только тех аргументов, которые больше чем заданное число.
// Это число должно быть первым параметром функции.
// Change code below this line
// function addOverNum(...args) {
//   let total = 0;
//   for (let i = 0; i <= args.length - 1; i += 1) {
//     if (args[i] > args[0]) {
//       total += args[i];
//     }
//   }
//   return total;
// }
// console.log(addOverNum(10, 12, 4, 11, 48, 10, 8));
// console.log(addOverNum(15, 32, 6, 13, 19, 8));

// ================ Задание 33  =================
// // Change code below this line
// function findMatches(...args) {
//   const matches = [];
//   for (let i = 1; i < args.length; i += 1) {
//     if (args[0].includes(args[i])) {
//       matches.push(args[i]);
//     }
//   }
//   return matches;
// }
// console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7));

// ================ Задание 34  =================
// Добавь объекту bookShelf ещё два метода, которые пока что будут возвращать
// просто строки по аналогии с getBooks() и addBook(bookName).

// Метод removeBook(bookName) будет удалять книгу по имени.
// Возвращает строку "Deleting book <имя книги>", где < имя книги > это значение параметра bookName.

// Метод updateBook(oldName, newName) будет обновлять название книги на новое.
// Возвращает строку "Updating book <старое имя> to <новое имя>", где < старое имя > и
//   < новое имя > это значения параметров oldName и newName соотвественно.

// const bookShelf = {
//   // Change code below this line
//   books: ['The last kingdom', 'The guardian of dreams'],
//   getBooks() {
//     return 'Returning all books';
//   },
//   addBook(bookName) {
//     return `Adding book ${bookName}`;
//   },
//   removeBook(bookName) {
//     return `Deleting book ${bookName}`;
//   },
//   updateBook(oldName, newName) {
//     return `Updating book ${oldName} to ${newName}`;
//   },
//   // Change code above this line
// };
// console.log(bookShelf.updateBook('Sands of dune', 'Dune'));

// ================ Задание 35  =================
// Дополни метод updateBook(oldName, newName) так, чтобы он изменял название книги с oldName
// на newName в свойстве books. Используй indexOf() для того,
// чтобы найти нужный элемент массива, и splice() для того чтобы заменить этот элемент
// const bookShelf = {
//   books: ['The last kingdom', 'Haze', 'The guardian of dreams'],
//   updateBook(oldName, newName) {
//     // Change code below this line
//     const oldBookIndex = this.books.indexOf(oldName);
//     this.books.splice(oldBookIndex, 1, newName);

//     // Change code above this line
//   },
// };
// bookShelf.updateBook('Haze', 'Dungeon chronicles');
// console.log(bookShelf.books);
// bookShelf.updateBook('The last kingdom', 'Dune');
// console.log(bookShelf.books);

// // ================ Задание 36  =================
// const atTheOldToad = {
//   // Change code below this line
//   potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
//   getPotions() {
//     return this.potions;
//   },
//   // Change code above this line
// };

// ================ Задание 38  =================
// const atTheOldToad = {
//   potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
//   addPotion(potionName) {
//     // Change code below this line
//     this.potions.push(potionName);
//     // Change code above this line
//   },
// };

// ================ Задание 39  =================
// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   removePotion(potionName) {
//     this.potions.splice(this.potions.indexOf(potionName), 1);
//   },
// };
// const atTheOldToad = {
//   potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
//   removePotion(potionName) {
//     // Change code below this line
//     const potionIndex = this.potions.indexOf(potionName);
//     this.potions.splice(potionIndex, 1);
//     // Change code above this line
//   },
// };

// atTheOldToad.removePotion('Dragon breath');
// console.log(atTheOldToad);
// atTheOldToad.removePotion('Speed potion');
// console.log(atTheOldToad);

// ================ Задание 40  =================
// Дополни метод updatePotionName(oldName, newName) так,
//   чтобы он обновлял название зелья с oldName на newName,
//     в массиве зелий в свойстве potions.
// const atTheOldToad = {
//   potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
//   updatePotionName(oldName, newName) {
//     const oldNameIndex = this.potions.indexOf(oldName);
//     this.potions.splice(oldNameIndex, 1, newName);
//   },
// };
// atTheOldToad.updatePotionName('Dragon breath', 'Polymorth');
// console.log(atTheOldToad.potions);
// atTheOldToad.updatePotionName('Stone skin', 'Invisible');
// console.log(atTheOldToad.potions);

// ================ Задание 41 =================

const atTheOldToad = {
  potions: [
    { name: 'Speed potion', price: 460 },
    { name: 'Dragon breath', price: 780 },
    { name: 'Stone skin', price: 520 },
  ],
  // Change code below this line
  getPotions() {
    return this.potions;
  },
  addPotion(potionName) {
    const { potions } = this;
    const { name } = potionName;
    for (let i = 0; i < potions.length; i += 1) {
      if (potions[i].name === name) {
        return `Potion ${name} is already equipped!`;
      }
      potions.push(potionName);
    }
  },
  removePotion(potionName) {
    const { potions } = this;
    for (let i = 0; i < potions.length; i += 1) {
      if (potions[i].name === potionName) {
        potions.splice(i, 1);
        return potions;
      }
    }
    return `Potion ${potionName} is not in inventory!`;
  },
  updatePotionName(oldName, newName) {
    const { potions } = this;
    for (let i = 0; i < potions.length; i += 1) {
      if (potions[i].name === oldName) {
        potions[i].name = newName;
        return potions;
      }
    }
    return `Potion ${oldName} is not in inventory!`;
  },
  // Change code above this line
};
