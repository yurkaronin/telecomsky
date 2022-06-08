if (NumFields) {

  for (let NumField of NumFields) {
    document.onclick = function () {
      if (Number(NumField.querySelector('.cust-num-field__input').value) <= 1) {
        document.querySelector("[data-index='minus']").disabled = true;
      } else {
        document.querySelector("[data-index='minus']").disabled = false;
      }
    }

  }

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

        }

      }
    }
  }
}
