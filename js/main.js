const custTabsItems = document.querySelectorAll('.cust-accordion');
const custTabsButtons = document.querySelectorAll('.cust-tabs__button');
const custAccordions = document.querySelectorAll('.cust-tabs__content');

// слушаем событие клика по всем элементам коллекции
for (let custTabsItem of custTabsItems) {
  // уточняем что слушать клик нужно только по шпаке внутри каждого элемента (кнопка)
  custTabsItem.querySelector('.cust-accordion__button').onclick = function () {
    // если у элемента есть активный класс
    if (custTabsItem.classList.contains('show')) {
      // удаляем нахер все активные классы у всех элементов этой коллекции
      custTabsItem.classList.remove('show');
      // и у контента в каждом элементе коллекции тоже чистим активный класс, ибо нефиг висеть открытым без надобности!
      custTabsItem.querySelector('.cust-accordion__content').classList.remove('collapse');
    } else {
      // ну а в остальных случаях делаем то же самое, тока дополнительно в конце добавляем активные классы для элемента, по которому соершён клик и для его содержимого
      for (let elem of custTabsItems) {
        elem.classList.remove('show');
        elem.querySelector('.cust-accordion__content').classList.remove('collapse');
      }
      custTabsItem.classList.add('show');
      custTabsItem.querySelector('.cust-accordion__content').classList.toggle('collapse');
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


// Убавляем кол-во по клику
/*     $('.quantity_inner .bt_minus').click(function() {
    let $input = $(this).parent().find('.quantity');
    let count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
}); */


const NumFields = document.querySelectorAll('.cust-num-field');

for (let NumField of NumFields) {
  document.onclick = function () {
    if (Number(NumField.querySelector('.cust-num-field__input').value) <= 1) {
      document.querySelector("[data-index='minus']").disabled = true;
    } else {
      document.querySelector("[data-index='minus']").disabled = false;
    }
  }

}



if (NumFields) {
  for (let NumField of NumFields) {
    let numFieldBtns = NumField.querySelectorAll('.cust-num-field__btn');
    let numFieldInput = NumField.querySelector('.cust-num-field__input');

    for (let numFieldBtn of numFieldBtns) {
      numFieldBtn.onclick = function () {

        if (numFieldBtn.getAttribute('data-index') == 'plus') {
          numFieldInput.value = (Number(numFieldInput.value) + 1);
          //
        } else {
          numFieldInput.value = (Number(numFieldInput.value) - 1);
          // document.querySelector("[data-index='minus']").disabled = false;

        }


        // console.log(numFieldInput.value);
      }
    }
  }
}

// Прибавляем кол-во по клику
/* $('.quantity_inner .bt_plus').click(function() {
    let $input = $(this).parent().find('.quantity');
    let count = parseInt($input.val()) + 1;
    count = count > parseInt($input.data('max-count')) ? parseInt($input.data('max-count')) : count;
    $input.val(parseInt(count));
}); */
