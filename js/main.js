const custTabsItems = document.querySelectorAll('.cust-tabs__item');
const custTabsButtons = document.querySelectorAll('.cust-tabs__button');
const custAccordions = document.querySelectorAll('.cust-accordion');

// слушаем событие клика по всем элементам коллекции
for (let custTabsItem of custTabsItems) {
  // уточняем что слушать клик нужно только по шпаке внутри каждого элемента (кнопка)
  custTabsItem.querySelector('.cust-tabs__content-header').onclick = function () {
    // если у элемента есть активный класс
    if (custTabsItem.classList.contains('show')) {
      // удаляем нахер все активные классы у всех элементов этой коллекции
      custTabsItem.classList.remove('show');
      // и у контента в каждом элементе коллекции тоже чистим активный класс, ибо нефиг висеть открытым без надобности!
      custTabsItem.querySelector('.cust-tabs__content-body').classList.remove('collapse');
    } else {
      // ну а в остальных случаях делаем то же самое, тока дополнительно в конце добавляем активные классы для элемента, по которому соершён клик и для его содержимого
      for (let elem of custTabsItems) {
        elem.classList.remove('show');
        elem.querySelector('.cust-tabs__content-body').classList.remove('collapse');
      }
      custTabsItem.classList.add('show');
      custTabsItem.querySelector('.cust-tabs__content-body').classList.toggle('collapse');
    }
  };
}

for (let custTabsButton of custTabsButtons) {
  custTabsButton.onclick = function () {
    for (elem of custTabsButtons) {
      elem.classList.remove('active');
    }
    custTabsButton.classList.add('active');

    let tadIndex = custTabsButton.getAttribute('data-index');

    if (custAccordions) {
      for (let custAccordion of custAccordions) {
        custAccordion.classList.remove('active');

        if (custAccordion.getAttribute('data-index') === tadIndex) {
          custAccordion.classList.add('active');
        }
      }
    }
  };
}
