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
