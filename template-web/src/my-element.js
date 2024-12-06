import { LitElement, css, html } from 'lit'

export class MyElement extends LitElement {

  render() {
    return html`
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
