import { LitElement, css, html } from 'lit'

import './components/layout/sections/components/card-left-00'

export class MyElement extends LitElement {

  render() {
    return html`
      <card-left-00></card-left-00>
    `
  }

  static get styles() {
    return css`
      :host {
        display: block;
        margin: 0;
        padding: 0;
      }
    `
  }
}

window.customElements.define('my-element', MyElement)
