import goods from "./goods.js";
import getDocumentElements from "./modules/getDocumentElements.js";
import { overlayControls } from "./modules/overlayControls.js";
import { renderGoods } from "./modules/renderGoods.js";
import { openWindow } from "./modules/openWindow.js";

const init = () => {
  const elements = getDocumentElements(); // Все необходимые элементы
  elements.overlay.classList.remove("active"); // Убрать оверлей
  const data = goods; // Товары из массива

  // Вывести товары на страницу
  renderGoods(elements, data);
  // Обработка событий модалки
  overlayControls(elements, data);
  
  const btnsPic = document.querySelectorAll('.table__btn_pic');
  btnsPic.forEach(button => {
    button.addEventListener('click', () => {
      openWindow(button.dataset.pic);
    });
  });
};
init();