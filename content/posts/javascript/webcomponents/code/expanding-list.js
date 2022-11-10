


class ExpandingList extends HTMLUListElement {
  constructor() {
    super();
  }
}


customElements.define('expanding-list', ExpandingList, { extends: 'ul'});