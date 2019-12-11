const dropIcon = e => {
  let top, left, rightBoundary, bottomBoundary;

  if (e.target.tagName === 'DIV') {
    top = e.clientY + (e.target.clientHeight / 2);
    left = e.clientX + (e.target.clientWidth / 10);
    rightBoundary = window.innerWidth;
    bottomBoundary = window.innerHeight;
  } else {
    top = e.clientY - (e.target.clientHeight / 2);
    left = e.clientX - (e.target.clientWidth / 2);
    rightBoundary = window.innerWidth - e.target.clientWidth - 16;
    bottomBoundary = window.innerHeight - e.target.clientHeight - 64;
  }

  e.target.style.position = 'absolute';
  e.target.style.top = `${top > window.innerHeight - 120 ? bottomBoundary : (top < 0 ? 0 : top)}px`;
  e.target.style.left = `${left > window.innerWidth - 120 ? rightBoundary : (left < 0 ? 0 : left)}px`;
}

export default dropIcon;