/**
 * LitSelector
 * @param { DOMString } target
 */
function ls(target) {
  let selected;

  // return undefined if the target is empty
  if (target.length === 0) return;

  /**
   * Add "ls" method to HTMLElement interface.
   *
   * Now we can use parentNode.ls("target")
   * to find a DOM element.
   */
  HTMLElement.prototype.ls = ls;

  if (this instanceof HTMLElement) {
    selected = this.querySelectorAll(target);
  } else {
    // parentNode by default is "document"
    selected = document.querySelectorAll(target);
  }

  if (selected.length > 1) return selected;

  return selected[0];
}
