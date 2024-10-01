'use strict';
(() => {
  const t = document.createElement('template');
  t.innerHTML = `
      <style>
        .container-info-box { max-width: 300px; margin: 8px 0; display: flex; background-color: #cfe2ff; border: 1px solid #d1d1d1; border-radius: 4px; padding: 20px 16px 16px;  font-size: 1rem; color: #212529; font-weight: 400; font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; line-height: 1.5; }
        .container-close { display: flex; justify-content: end; }
        .btn-close-svg { fill: #515151; height: 1.6rem; width: 1.6rem; border-radius: .4rem; background: transparent; cursor: pointer; margin-top: -20px; margin-right: -16px; }
        .shadow { box-shadow: 0 .5rem .5rem rgba(0,0,0,.40); }
        .container-content { width: 100%; }
      </style>
      <div class="container-info-box" style="" part="style-content">
        <div class="container-content" style="" part="container-content"></div>
        <div class="container-close" style="" part="container-close">
            <svg xmlns="http://www.w3.org/2000/svg" class="btn-close-svg"  style="" part="style-icon" viewBox="0 0 448 512"><path d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zm79 143c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"/></svg>
        </div>
      </div>
    `;
  class e extends HTMLElement {
    #root = null;
    #containerInfoBox = null;
    #timeOutID = null;
    #timeOut = 3e3;
    #containerContent = null;
    #btnCloseSvg = null;
    constructor() {
      super(),
        (this.#root = this.attachShadow({ mode: 'closed' })),
        this.#root.appendChild(t.content.cloneNode(!0)),
        (this.#containerInfoBox = this.#root.querySelector('div.container-info-box')),
        (this.#containerContent = this.#root.querySelector('div.container-content')),
        (this.#btnCloseSvg = this.#root.querySelector('svg.btn-close-svg')),
        this.#btnCloseSvg.addEventListener('click', (t) => {
          this.remove(), clearTimeout(this.#timeOutID);
        });
    }
    static get observedAttributes() {
      return ['text-content', 'style-content', 'time-out', 'icon-color', 'icon-bg', 'style-icon', 'top-space', 'has-shadow'];
    }
    attributeChangedCallback(t, e, o) {
      'text-content' === t
        ? (this.#containerContent.innerHTML = o)
        : 'time-out' === t
        ? (this.#timeOut = Number(o))
        : 'style-content' === t
        ? (this.#containerInfoBox.style = o)
        : 'icon-color' === t
        ? (this.#btnCloseSvg.style.fill = o)
        : 'icon-bg' === t
        ? (this.#btnCloseSvg.style.background = o)
        : 'style-icon' === t
        ? (this.#btnCloseSvg.style = o)
        : 'has-shadow' === t && this.#containerInfoBox.classList.add('shadow');
    }
    displayWithTimeOut() {
      0 !== this.#timeOut &&
        (this.#timeOutID = setTimeout(() => {
          this.remove();
        }, this.#timeOut));
    }
  }
  customElements.define('single-box', e);
  const o = document.createElement('template');
  o.innerHTML = `
      <style>
        .container{ display: flex; justify-content: center; position: relative; }
        .info-boxes { position: fixed; z-index: 99; top: auto; bottom: 10px; left: auto; right: 10px; transform: none; margin: unset; }
      </style>
      <section class="container" part="container">
        <div class="info-boxes" part="info-boxes">
        </div>
      </section>
    `;
  class s extends HTMLElement {
    #root = null;
    #infoBoxes = null;
    #isReverse = !1;
    constructor() {
      super(),
        (this.#root = this.attachShadow({ mode: 'closed' })),
        this.#root.appendChild(o.content.cloneNode(!0)),
        (this.#infoBoxes = this.#root.querySelector('div.info-boxes'));
    }
    static get observedAttributes() {
      return ['top-space', 'top-space', 'left-space', 'right-space', 'center-center', 'bottom-center', 'top-center', 'is-reverse'];
    }
    attributeChangedCallback(t, e, o) {
      'top-space' === t
        ? ((this.#infoBoxes.style.top = o), (this.#infoBoxes.style.bottom = 'unset'), (this.#infoBoxes.style.transform = 'none'))
        : 'bottom-space' === t
        ? ((this.#infoBoxes.style.bottom = o), (this.#infoBoxes.style.top = 'unset'), (this.#infoBoxes.style.transform = 'none'))
        : 'left-space' === t
        ? ((this.#infoBoxes.style.left = o), (this.#infoBoxes.style.right = 'unset'), (this.#infoBoxes.style.transform = 'none'))
        : 'right-space' === t
        ? ((this.#infoBoxes.style.right = o), (this.#infoBoxes.style.left = 'unset'), (this.#infoBoxes.style.transform = 'none'))
        : 'center-center' === t
        ? ((this.#infoBoxes.style.bottom = 'unset'),
          (this.#infoBoxes.style.top = '50%'),
          (this.#infoBoxes.style.left = '50%'),
          (this.#infoBoxes.style.right = 'unset'),
          (this.#infoBoxes.style.transform = 'translate(-50%, -50%)'))
        : 'bottom-center' === t
        ? ((this.#infoBoxes.style.bottom = o),
          (this.#infoBoxes.style.left = 'unset'),
          (this.#infoBoxes.style.right = 'unset'),
          (this.#infoBoxes.style.margin = 'auto'),
          (this.#infoBoxes.style.transform = 'none'))
        : 'top-center' === t
        ? ((this.#infoBoxes.style.top = o),
          (this.#infoBoxes.style.left = 'unset'),
          (this.#infoBoxes.style.right = 'unset'),
          (this.#infoBoxes.style.margin = 'auto'),
          (this.#infoBoxes.style.transform = 'none'))
        : 'is-reverse' === t && (this.#isReverse = !0);
    }
    #createInfoBox(t = '') {
      var e = document.createElement('single-box');
      return (
        e.setAttribute('exportparts', 'style-content, container-content, container-close, style-icon'),
        e.setAttribute('text-content', t),
        this.hasAttribute('time-out') && e.setAttribute('time-out', this.getAttribute('time-out')),
        this.hasAttribute('style-content') && e.setAttribute('style-content', this.getAttribute('style-content')),
        this.hasAttribute('icon-color') && e.setAttribute('icon-color', this.getAttribute('icon-color')),
        this.hasAttribute('icon-bg') && e.setAttribute('icon-bg', this.getAttribute('icon-bg')),
        this.hasAttribute('style-icon') && e.setAttribute('style-icon', this.getAttribute('style-icon')),
        this.hasAttribute('has-shadow') && e.setAttribute('has-shadow', this.getAttribute('has-shadow')),
        e
      );
    }
    #appendInfoBox(t) {
      t = this.#createInfoBox(t);
      this.#infoBoxes.append(t), t.displayWithTimeOut();
    }
    #appendInfoBoxReverse(t) {
      t = this.#createInfoBox(t);
      this.#infoBoxes.prepend(t), t.displayWithTimeOut();
    }
    showInfoBox(t) {
      !1 === this.#isReverse ? this.#appendInfoBox(t) : this.#appendInfoBoxReverse(t);
    }
  }
  customElements.define('info-box', s);
})();
