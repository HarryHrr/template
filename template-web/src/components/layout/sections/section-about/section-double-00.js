import { LitElement, html, css } from "lit";

import "./components/card-right-00-m";
import "./components/card-left-00-a";
import "./components/card-left-00-v";
import "./components/card-left-00-m";

export class SectionDouble00 extends LitElement {
  static properties = {
    selectedOption: { type: String },
  };

  constructor() {
    super();
    this.selectedOption = "about";
    this.previousOption = null;
  }

  handleSelection(event) {
    this.previousOption = this.selectedOption;
    this.selectedOption = event.detail;
  }

  renderLeftComponent() {
    switch (this.selectedOption) {
      case "about":
        return html`<card-left-00-a class="fade-in"></card-left-00-a>`;
      case "mission":
        return html`<card-left-00-m class="fade-in"></card-left-00-m>`;
      case "vision":
        return html`<card-left-00-v class="fade-in"></card-left-00-v>`;
      default:
        return html`<card-left-00-a class="fade-in"></card-left-00-a>`;
    }
  }

  render() {
    return html`
      <section class="about_us">
        <div class="about_us__left">
          ${this.renderLeftComponent()}
        </div>
        <div class="about_us__right">
          <card-right-00-m
            @select-option=${this.handleSelection}
          ></card-right-00-m>
        </div>
      </section>
    `;
  }

  static styles = css`
    :host {
      display: inline-block;
      padding: 0;
      margin: 0;
    }

    .about_us {
      display: grid;
      grid-template-columns: repeat(2, auto);
      align-items: center;
      padding: 1rem;
    }

    .fade-in {
      animation: fadeIn 0.5s ease-in-out;
    }

    .fade-out {
      animation: fadeOut 0.5s ease-in-out;
    }

    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateX(20px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }

    @keyframes fadeOut {
      from {
        opacity: 1;
        transform: translateX(0);
      }
      to {
        opacity: 0;
        transform: translateX(20px);
      }
    }
  `;
}
customElements.define("section-double-00", SectionDouble00);
