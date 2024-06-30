class Library {
	#books;

	constructor(initialBooks = []) {
		// Проверяем наличие дубликатов в начальном массиве книг
		if (new Set(initialBooks).size !== initialBooks.length) {
			throw new Error('Начальный список книг содержит дубликаты.');
		}

		this.#books = [...initialBooks];
	}

	// Геттер для получения текущего списка книг
	get allBooks() {
		return this.#books;
	}

	// Метод для добавления книги
	addBook(title) {
		if (this.#books.includes(title)) {
			throw new Error('Книга с таким названием уже существует в библиотеке.');
		}
		this.#books.push(title);
	}

	// Метод для удаления книги
	removeBook(title) {
		const index = this.#books.indexOf(title);
		if (index === -1) {
			throw new Error('Книги с таким названием нет в библиотеке.');
		}
		this.#books.splice(index, 1);
	}

	// Метод для проверки наличия книги в библиотеке
	hasBook(title) {
		return this.#books.includes(title);
	}
}

// Пример использования класса Library:

try {
	const library = new Library(['Книга 1', 'Книга 2', 'Книга 3']);

	console.log('Начальный список книг:', library.allBooks);

	library.addBook('Книга 4');
	console.log('Список книг после добавления:', library.allBooks);

	library.removeBook('Книга 2');
	console.log('Список книг после удаления:', library.allBooks);

	console.log('Есть ли книга "Книга 3" в библиотеке?', library.hasBook('Книга 3'));
	console.log('Есть ли книга "Книга 2" в библиотеке?', library.hasBook('Книга 2'));

	// Попытка добавить существующую книгу должна вызывать ошибку
	// library.addBook('Книга 4'); // Раскомментировать для проверки ошибки

	// Попытка удалить несуществующую книгу также должна вызывать ошибку
	// library.removeBook('Книга 5'); // Раскомментировать для проверки ошибки

} catch (error) {
	console.error('Ошибка:', error.message);
}
