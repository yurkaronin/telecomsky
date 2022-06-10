  // бЛОКИРУЕМ ВСЕ КНОПКИ МИНУС 1
  if (custNumFieldBtn) {
    for (let numFieldBtnItem of custNumFieldBtn) {

      if (numFieldBtnItem.dataset.index === 'minus') {
        numFieldBtnItem.disabled = true;
      } else {
        numFieldBtnItem.disabled = false;
      }
    }
  }

   // ОБНУЛЯЕМ ЧИСЛО В ПОЛЕ, ЕСЛИ ОПЦИЮ ОТКЛЮЧИЛИ
   if (groupSwitsh) {
    for (let groupSwitshItem of groupSwitsh) {
      groupSwitshItem.onclick = function () {
        let parent = groupSwitshItem.closest('.options-group');
        if (!groupSwitshItem.checked) {
          parent.querySelector("[data-index='minus']").disabled = true;
          parent.querySelector('.cust-num-field__input').value = '0';

        }
      }

    }
  }

// НАВЕШИВАЕМ СОБЫТИЕ КЛИКА НА КАЖДЫЙ ЭЛЕМЕНТ КОЛЛЕКЦИИ
  if (optionsGroup) {
    for (let optionsGroupItem of optionsGroup) {
      optionsGroupItem.onclick = function (e) {
        let elem = optionsGroupItem.querySelector('.cust-num-field__input');

        if (e.target === optionsGroupItem.querySelector("[data-index='plus']")) {

          optionsGroupItem.querySelector("[data-index='minus']").disabled = false;
          elem.value = (Number(elem.value) + 1);

        } else if (e.target === optionsGroupItem.querySelector("[data-index='minus']")) {
          if (Number(elem.value) <= 1) {
            optionsGroupItem.querySelector("[data-index='minus']").disabled = true;

          } else {
            elem.value = (Number(elem.value) - 1);
          }

        } else if (e.target === optionsGroupItem.querySelector('.cust-num-field__input')) {
          if (Number(elem.value) <= 1) {
            optionsGroupItem.querySelector("[data-index='minus']").disabled = false;
          }
        }
      }
    }
  }
