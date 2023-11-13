function makeDraggable(elem) {
  let mouseDown = false;
  let startX, startY, initialLeft, initialTop;

  const calculatePosition = (e) => {
    const dx = e.clientX - startX;
    const dy = e.clientY - startY;
    elem.style.left = `${dx + initialLeft}px`;
    elem.style.top = `${dy + initialTop}px`;
  };

  elem.addEventListener('mousedown', (e) => {
    mouseDown = true;
    startX = e.clientX;
    startY = e.clientY;
    initialLeft = elem.offsetLeft;
    initialTop = elem.offsetTop;
    window.addEventListener('mousemove', calculatePosition);
  });

  window.addEventListener('mouseup', () => {
    if (mouseDown) {
      mouseDown = false;
      window.removeEventListener('mousemove', calculatePosition);
    }
  });
}

const iconRights = document.querySelectorAll('.icon-right');
const iconLefts = document.querySelectorAll('.icon-left');

iconRights.forEach(icon => makeDraggable(icon));
iconLefts.forEach(icon => makeDraggable(icon));
