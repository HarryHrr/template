import { LitElement, html, css } from 'lit';

import './components/layout/sections/components/card-left-00';
import './components/sections/header/header-grid-00';
import './components/common/nav-bar-00';

export class MyElement extends LitElement {

  static styles = css`
    :host {
      display: block;
      margin: 0;
      padding: 0;
    }
    
  `;

  render() {
    return html`
      <nav-bar-00></nav-bar-00>
      <header-grid-00 ></header-grid-00>
    `;
  }
}

window.customElements.define('my-element', MyElement);
