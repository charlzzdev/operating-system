const dropIcon = e => {
  let top, left;
  const rightBoundary = window.innerWidth - e.target.clientWidth - 16;
  const bottomBoundary = window.innerHeight - e.target.clientHeight - 64;

  if (e.target.tagName === 'DIV') {
    top = e.clientY + (e.target.clientHeight / 2);
    left = e.clientX + (e.target.clientWidth / 10);
  } else {
    top = e.clientY - (e.target.clientHeight / 2);
    left = e.clientX - (e.target.clientWidth / 2);
  }

  e.target.style.position = 'absolute';
  e.target.style.top = `${top > window.innerHeight - 120 ? bottomBoundary : (top < 0 ? 0 : top)}px`;
  e.target.style.left = `${left > window.innerWidth - 120 ? rightBoundary : (left < 0 ? 0 : left)}px`;
}

export default dropIcon;