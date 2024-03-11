// 1) функция createMap() принимает _любой_ массив объектов и название свойства в этом объекте
// возвращает объект Map, в котором ключи -- это значения свойства из объекта, а значения -- это сами объекты
//
// 2) функция createMap() может принять третий аргумент -- ещё одно названия свойства из объекта.
// В этом случае значениями в объекте Map должны быть значения этого свойства из объекта
//
// Надо реализовать функцию и типизировать её наилучшим образом
//
// Примеры использования и тесты ниже

function createMap() {}

type Person = {
  id: number;
  name: string;
  age: number;
  passport: string;
}

const collection: Person[] = [
  {
    id: 12,
    name: 'Viago',
    age: 379,
    passport: '12vi',
  },
  {
    id: 34,
    name: 'Vladislav',
    age: 862,
    passport: '34vl',
  },
  {
    id: 56,
    name: 'Deacon',
    age: 183,
    passport: '56de',
  },
  {
    id: 78,
    name: 'Petyr',
    age: 8000,
    passport: '78pe',
  },
];

// Пример: создание объекта Map по свойству id

const mapById = createMap(collection, 'id');

// Map [
//   [12, { id: 12, ... }],
//   [34, { id: 34, ... }],
//   [56, { id: 56, ... }],
//   [78, { id: 78, ... }],
// ]

const viago = mapById.get(12) // { id: 12, ... }
const isNick = mapById.has(0) // false

// Пример: создание объекта Map по свойству passport

const mapByPassport = createMap(collection, 'passport');

// Map [
//   ['12vi', { passport: '12vi', ... }],
//   ['34vl', { passport: '34vl', ... }],
//   ['56de', { passport: '56de', ... }],
//   ['78pe', { passport: '78pe', ... }],
// ]

const deacon = mapByPassport.get('56de') // { passport: '56de', ... }
const isJackie = mapByPassport.has('00jc') // false

// Пример: создание объекта Map по свойствам id и name

const namesMapById = createMap(collection, 'id', 'name');

// Map [
//   [12, 'Viago'],
//   [34, 'Vladislav'],
//   [56, 'Deacon'],
//   [78, 'Petyr'],
// ]

const vladislavName = namesMapById.get(34) // 'Vladislav'

// Примеры вызовов для проверки типизации функции createMap()

// 1
createMap(collection, 'id') // ok
createMap(collection, 'passport') // ok
createMap(collection, 'surname') // error
createMap(collection, 4) // error

// 2
createMap(collection, 'id', 'name') // ok
createMap(collection, 'passport', 'age') // ok
createMap(collection, 'passport', 'surname') // error
