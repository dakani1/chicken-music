export function addClass (el, className) {
  if (!hasClass(el, className)) {
    let classN = el.className;
    let arr = classN.split(' ');
    arr.push(className);
    el.className = arr.join(' ');
  }
}

export function hasClass (el, className) {
  var re = new RegExp('(^|\\s)' + className + '(\\s|$)');
  return re.test(el.className);
}
