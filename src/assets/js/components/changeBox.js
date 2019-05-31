function changeBox(obj) {
  const elements = Array.from(document.querySelectorAll('[data-change-box]'));
  const attr = obj.tab.getAttribute('changebox');

  if (attr) {
    switch (obj.index) {
      case 0:
        elements[0].style.display = 'block';
        elements[1].style.display = 'none';
        elements[2].style.display = 'none';
        break;
      case 1:
        elements[0].style.display = 'none';
        elements[1].style.display = 'block';
        elements[2].style.display = 'none';
        break;
      case 2:
        elements[0].style.display = 'none';
        elements[1].style.display = 'none';
        elements[2].style.display = 'block';
        break;
      default:
        break;
    }
  }
}

export default {
  create: changeBox,
};
