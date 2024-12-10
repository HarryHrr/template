import { LitElement, css, html } from 'lit'

// import './components/layout/sections/components/card-left-00-m'
// import './components/layout/sections/components/card-right-00-m'
import './components/layout/sections/section-about/section-double-00'
// import './components/layout/sections/section-service/section-00'

export class MyElement extends LitElement {

  render() {
    return html`
      <!-- <card-left-00-m></card-left-00-m>
       <card-right-00-m></card-right-00-m> -->
       <section-double-00></section-double-00>
        <!-- <section-00></section-00> -->
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
