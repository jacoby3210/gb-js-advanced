// Создаем объект "Музыкальная коллекция"
let musicCollection = {
	albums: [
		{ title: "Album 1", artist: "Artist 1", year: "2020" },
		{ title: "Album 2", artist: "Artist 2", year: "2021" },
		{ title: "Album 3", artist: "Artist 3", year: "2022" }
	],
	// Реализация Symbol.iterator
	[Symbol.iterator]() {
		let index = 0;
		// Возвращаем итератор
		return {
			next: () => {
				if (index < this.albums.length) {
					return { value: this.albums[index++], done: false };
				} else {
					return { done: true };
				}
			}
		};
	}
};

// Пример использования: цикл for...of для перебора и вывода альбомов
for (let album of musicCollection) {
	console.log(`${album.title} - ${album.artist} (${album.year})`);
}
