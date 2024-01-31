function updateTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    
    const timeString = `${hours}:${minutes}:${seconds}`;
    
    const timeElement = document.getElementById('current-time');
    if (timeElement) {
        timeElement.textContent = timeString;
    }
}

// Обновляем время каждую секунду
setInterval(updateTime, 1000);

// Вызываем функцию updateTime для начальной установки времени
updateTime();

const feedbackForm = document.getElementById('feedback-form');

feedbackForm.addEventListener('submit', function (event) {
    event.preventDefault();
    
    const formData = new FormData(feedbackForm);
    const formDataObject = {};
    
    formData.forEach((value, key) => {
        formDataObject[key] = value;
    });
    
    // Здесь можно добавить код для отправки данных на сервер
    // В данном примере просто выведем данные в консоль
    console.log('Отправляем данные на сервер:', formDataObject);
    
    // Очищаем поля формы после отправки
    feedbackForm.reset();
});
