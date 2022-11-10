

class PopupInfo extends HTMLElement {

  constructor() {
    // 必须首先调用super方法
    super();

    // 元素的功能代码

    // 创建一个shadow root
    let shadow = this.attachShadow({mode: 'open'});
    // 创建一个span
    let wrapper = document.createElement('span');
    wrapper.setAttribute('class', 'wrapper');

    let icon = document.createElement('icon');
    icon.setAttribute('class', 'icon');
    icon.setAttribute('tabindex', 0);

    let info = document.createElement('span');
    info.setAttribute('class', 'info');

    // 获取text属性上的内容
    let text = this.getAttribute('text');
    info.textContent = text;

    // 插入icon
    let imgUrl;
    if(this.hasAttribute('img')) {
      imgUrl = this.getAttribute('img');
    }else {
      imgUrl = 'img/default.png';
    }

    let img = document.createElement('img');
    img.src = imgUrl;
    icon.appendChild(img);


    // 创建一些css, 并应用到shadow dom上
    let style = document.createElement('style');

    style.textContent = `
      .wrapper {
        
      }

      img {
        width: 50px;
        height: 50px;
      }
    `;

    shadow.appendChild(style);
    shadow.appendChild(wrapper);
    wrapper.appendChild(icon);
    wrapper.appendChild(info);
    
  }

}


customElements.define('popup-info', PopupInfo);