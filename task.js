// Функция для добавления отзыва
function addReview() {
	const productNameInput = document.getElementById('productName');
	const reviewTextInput = document.getElementById('reviewText');

	const productName = productNameInput.value.trim();
	const reviewText = reviewTextInput.value.trim();

	if (!productName || !reviewText) {
		alert('Пожалуйста, введите название продукта и отзыв.');
		return;
	}

	const review = {
		productName: productName,
		reviewText: reviewText
	};

	// Получаем текущие отзывы из LocalStorage
	let reviews = JSON.parse(localStorage.getItem('reviews')) || {};

	// Проверяем, есть ли уже отзывы для данного продукта
	if (!reviews[productName]) {
		reviews[productName] = [];
	}

	// Добавляем новый отзыв к существующим для продукта
	reviews[productName].push(review);

	// Сохраняем обновленные отзывы в LocalStorage
	localStorage.setItem('reviews', JSON.stringify(reviews));

	// Очищаем поля ввода после добавления отзыва
	productNameInput.value = '';
	reviewTextInput.value = '';

	// Обновляем список продуктов с отзывами
	updateProductList();

	// Показываем отзывы для последнего добавленного продукта
	showReviews(productName);
}

// Функция для обновления списка продуктов с отзывами
function updateProductList() {
	const productList = document.getElementById('productList');
	productList.innerHTML = '';

	const reviews = JSON.parse(localStorage.getItem('reviews')) || {};

	for (let productName in reviews) {
		const productItem = document.createElement('li');
		productItem.classList.add('product-item');
		productItem.textContent = productName;
		productItem.addEventListener('click', function () {
			showReviews(productName);
		});
		productList.appendChild(productItem);
	}
}

// Функция для показа отзывов по выбранному продукту
function showReviews(productName) {
	const reviewsList = document.createElement('ul');
	reviewsList.classList.add('reviews-list');

	const reviews = JSON.parse(localStorage.getItem('reviews')) || {};

	if (reviews[productName]) {
		reviews[productName].forEach((review, index) => {
			const template = document.getElementById('reviewTemplate');
			const clone = template.content.cloneNode(true);
			clone.querySelector('#productNameSpan').textContent = productName;
			clone.querySelector('#reviewTextPara').textContent = review.reviewText;
			reviewsList.appendChild(clone);
		});
	}

	const viewReviewsSection = document.getElementById('viewReviewsSection');
	viewReviewsSection.appendChild(reviewsList);
}

// Функция для удаления отзыва
function deleteReview(button) {
	const productName = button.previousSibling.previousSibling.textContent;
	const reviewText = button.nextSibling.nextSibling.textContent;

	let reviews = JSON.parse(localStorage.getItem('reviews')) || {};
	const productReviews = reviews[productName];

	// Находим индекс отзыва, который нужно удалить
	const index = productReviews.findIndex(review => review.reviewText === reviewText);
	if (index !== -1) {
		// Удаляем отзыв из массива
		productReviews.splice(index, 1);

		// Обновляем данные в LocalStorage
		reviews[productName] = productReviews;
		localStorage.setItem('reviews', JSON.stringify(reviews));

		// Удаляем отзыв из DOM
		button.parentNode.remove();
	}
}

// Загрузка начальных отзывов при загрузке страницы
window.onload = function () {
	updateProductList();
};
