import { LitElement, html, css } from 'lit';

import './components/card-service-00';

export class Section00 extends LitElement {

  render() {
    return html`
      <card-service-00></card-service-00>
    `;
  }

  static styles = [
    css`
      :host {
        display: inline-block;
        padding: 0;
        margin: 0;
      }
    `
  ];
}
customElements.define('section-00', Section00);
