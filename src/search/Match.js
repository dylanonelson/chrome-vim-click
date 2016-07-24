import './match.css'

class Match {

  constructor({ node }) {
    this.node = node;
  }

  set node(node) {
    this._node = node;
  }

  get node() {
    return this._node;
  }

  set highlightNode(node) {
    this._highlightNode = node;
  }

  get highlightNode() {
    return this._highlightNode;
  }

  highlight() {
    let parent = this.node.parentNode
    this.highlightNode = document.createElement('mark');
    this.highlightNode.appendChild(this.node);
    parent.appendChild(this.highlightNode);
  }

  clear() {
    let parent;
    if (!(parent = this.highlightNode.parentNode)) return;
    parent.appendChild(this.node);
    this.highlightNode.remove();
  }

  focus() {
    this.highlightNode.className = 'focused';
    this.highlightNode.scrollIntoViewIfNeeded(true);
  }

  unfocus() {
    this.highlightNode.className = 'unfocused';
  }

  select() {
    switch (this.node.nodeType) {
      // ELEMENT_NODE (either an input or a textarea)
      case 1:
        setTimeout(() => { this.node.focus(); }, 0)
        break;
      // TEXT_NODE
      case 3:
        this.node.parentNode.click();
        break;
    }
  }

}

export default Match
