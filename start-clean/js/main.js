function changeFilter(filterText) {
    // Находим элемент с текстом "Сначала дороже"
    const dropdownText = document.getElementById("dropdown-text");
    // Меняем его содержимое на выбранное значение
    dropdownText.textContent = filterText;
}


