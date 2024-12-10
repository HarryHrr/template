import { LitElement, html, css } from "lit";

import service from '@assets/img/services/web-site.webp'

export class CardService00 extends LitElement {
  render() {
    return html`
      <article class="card">
        <div class="card__container">
          <div class="card__container_top">
            <img class="card__container_top_img" src="${service}" alt="servicio de paginas web / web sites services">
          </div>

          <div class="card__container_bottom">
            <p class="card__container_bottom_text">
              lorem impsun dolor lorem impsun dolor lorem impsun dolor lorem
              impsun dolor lorem impsun dolor lorem impsun dolor lorem impsun
              dolor
            </p>
          </div>
        </div>
      </article>
    `;
  }

  static styles = [
    css`
      :host {
        display: inline-block;
        padding: 0;
        margin: 0;
      }

      img {
        width: 100%;
      }

      .card {
        display: grid;
        align-items: center;
        justify-content: center;
      }

      .card__container {
        display: grid;
        align-items: center;
        justify-content: center;
      }

      .card__container_top {
        display: grid;
        align-items: center;
        justify-content: center;
        width: 9.5rem;
        height: 9.5rem;
        box-shadow: 0 5px 20px rgba(155, 0, 0, 0.2);
      }

      .card__container_top_img {
        display: grid;
        align-items: center;
        justify-content: center;
      }

      .card__container_bottom {
        width: 17rem;
        height: 2rem;
        padding: 0.7rem;
        background: #dbdbdb;
        overflow: hidden;
        color: transparent;
      }

      .card__container_top:hover ~ .card__container_bottom,
      .card__container_bottom:hover {
        height: auto;
        color: black;
      }

      .card__container_bottom {
        height: 2rem;
        color: transparent;
      }
    `,
  ];
}

customElements.define("card-service-00", CardService00);
