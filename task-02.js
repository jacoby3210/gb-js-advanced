// Создаем коллекцию для хранения информации о поварах и их специализации
let chefsSpecialization = new Map();

// Добавляем данные о поварах и их специализации
chefsSpecialization.set('Виктор', 'Пицца');
chefsSpecialization.set('Ольга', 'Суши');
chefsSpecialization.set('Дмитрий', 'Десерты');

// Создаем коллекцию для хранения блюд и их поваров
let dishesAndChefs = new Map();

// Добавляем данные о блюдах и их поварах
dishesAndChefs.set('Пицца "Маргарита"', 'Виктор');
dishesAndChefs.set('Пицца "Пепперони"', 'Виктор');
dishesAndChefs.set('Суши "Филадельфия"', 'Ольга');
dishesAndChefs.set('Суши "Калифорния"', 'Ольга');
dishesAndChefs.set('Тирамису', 'Дмитрий');
dishesAndChefs.set('Чизкейк', 'Дмитрий');

// Создаем коллекцию для хранения заказов клиентов
let orders = new Map();

// Добавляем заказы клиентов
let clientAlexey = { name: "Алексей" };
let clientMaria = { name: "Мария" };
let clientIrina = { name: "Ирина" };

orders.set(clientAlexey, [
	'Пицца "Пепперони"',
	'Тирамису'
]);

orders.set(clientMaria, [
	'Суши "Калифорния"',
	'Пицца "Маргарита"'
]);

orders.set(clientIrina, [
	'Чизкейк'
]);

// Вывод информации о поварах и их специализации
console.log("Информация о поварах и их специализации:");
for (let [chef, specialization] of chefsSpecialization) {
	console.log(`${chef} - специализация: ${specialization}`);
}

console.log("\n");

// Вывод информации о блюдах и их поварах
console.log("Информация о блюдах и их поварах:");
for (let [dish, chef] of dishesAndChefs) {
	console.log(`${dish} - повар: ${chef}`);
}

console.log("\n");

// Вывод информации о заказах клиентов
console.log("Информация о заказах клиентов:");
for (let [client, order] of orders) {
	let clientName = Object.keys(client)[0]; // получаем имя клиента
	console.log(`${client.name} заказал: ${order.join(', ')}`);
}
