

class CustomSquare extends HTMLElement {

  static get observedAttributes() {
    return ['w', 'l', 'c']
  }

  constructor() {
    super()

    let shadow = this.attachShadow({ mode: 'open' })

    let div = document.createElement('div');

    let style = document.createElement('style');

    shadow.appendChild(style)

    shadow.appendChild(div)

  }

  connectedCallback() {
    console.log('connectedCallback')
    updateStyle(this);
  }

  disconnectedCallback() {
    console.log('disconnectedCallback')

  }

  adoptedCallback() {
    console.log('adoptedCallback')

  }

  attributeChangedCallback() {
    console.log('attributeChangedCallback')
    updateStyle(square)

  }



}

function updateStyle(elem) {
  let shadow = elem.shadowRoot;

  let childNodes = shadow.childNodes;

  childNodes.forEach((item, index) => {
    if (item.nodeName === 'STYLE') {
      item.textContent = `
        div {
          width: ${elem.getAttribute('l')}px;
          height: ${elem.getAttribute('l')}px;
          background-color: ${elem.getAttribute('c')};
        }
      `
    }
  })
}


customElements.define('custom-square', CustomSquare)


const add = document.querySelector('.add');

const update = document.querySelector('.update');

const remove = document.querySelector('.remove');


let square;

update.disabled = true;
remove.disabled = true;


add.addEventListener('click', () => {
  square = document.createElement('custom-square');
  square.setAttribute('l', 100);
  square.setAttribute('c', 'red');
  document.body.appendChild(square);

  update.disabled = false;
  remove.disabled = false;
  add.disabled = true;
})

update.addEventListener('click', () => {
  square.setAttribute('l', 200);
  square.setAttribute('c', 'green');
})

remove.onclick = function () {

  document.body.removeChild(square);

  update.disabled = true;
  remove.disabled = true;
  add.disabled = false;
}





customElements.define('my-paragraph', class extends HTMLElement {

  constructor() {
    super()
    let template = document.getElementById('my-paragraph')
    let templateContent = template.content;

    const shadowRoot = this.attachShadow({mode: 'open'})
    shadowRoot.appendChild(templateContent.cloneNode(true))
  }

})