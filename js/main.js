// Глобальные переменные
const custTabsItems = document.querySelectorAll('.cust-accordion');
const custTabsButtons = document.querySelectorAll('.cust-tabs__button');
const custAccordions = document.querySelectorAll('.cust-tabs__content');
const NumFields = document.querySelectorAll('.cust-num-field');

// функция подключения скриптов
function include(url) {
  var script = document.createElement('script');
  script.src = url;
  document.getElementsByTagName('head')[0].appendChild(script);
}

include("./js/parts/accordion.js");
include("./js/parts/tabs.js");
include("./js/parts/numfields.js");
