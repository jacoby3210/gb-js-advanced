const initialData = [
	{
		product: "Apple iPhone 13",
		reviews: [
			{
				id: "1",
				text: "Отличный телефон! Батарея держится долго.",
			},
			{
				id: "2",
				text: "Камера супер, фото выглядят просто потрясающе.",
			},
		],
	},
	{
		product: "Samsung Galaxy Z Fold 3",
		reviews: [
			{
				id: "3",
				text: "Интересный дизайн, но дорогой.",
			},
		],
	},
	{
		product: "Sony PlayStation 5",
		reviews: [
			{
				id: "4",
				text: "Люблю играть на PS5, графика на высоте.",
			},
		],
	},
];

// Загрузка начальных отзывов при загрузке страницы
window.onload = function () {
	const reviewsContainer = document.getElementById('reviewsContainer');
	initialData.forEach(product => {
		product.reviews.forEach(review => {
			const reviewElement = createReviewElement(review.text);
			reviewsContainer.appendChild(reviewElement);
		});
	});
};

// Функция для добавления отзыва
function addReview() {
	const reviewInput = document.getElementById('reviewInput');
	const reviewText = reviewInput.value.trim();

	try {
		validateReview(reviewText); // Проверка на длину отзыва

		const reviewElement = createReviewElement(reviewText);
		const reviewsContainer = document.getElementById('reviewsContainer');
		reviewsContainer.appendChild(reviewElement);

		// Очистка поля ввода после добавления отзыва
		reviewInput.value = '';

	} catch (error) {
		alert(error.message);
	}
}

// Функция для создания элемента отзыва
function createReviewElement(text) {
	const reviewElement = document.createElement('div');
	reviewElement.classList.add('review');
	reviewElement.textContent = text;
	return reviewElement;
}

// Функция для валидации длины отзыва
function validateReview(text) {
	const minLength = 50;
	const maxLength = 500;

	if (text.length < minLength) {
		throw new Error(`Отзыв должен содержать как минимум ${minLength} символов.`);
	}

	if (text.length > maxLength) {
		throw new Error(`Отзыв не должен превышать ${maxLength} символов.`);
	}
}