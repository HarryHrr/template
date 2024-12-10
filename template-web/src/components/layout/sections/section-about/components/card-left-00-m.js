import { LitElement, html, css } from "lit";

import robot01 from "@assets/img/robots/robot-01.webp";

export class CardLeft00m extends LitElement {
  render() {
    return html`
      <article class="card">
        <div class="card__container">
          <div class="card__container_img">
            <img class="card__container_img_img" src="${robot01}" alt="" />
          </div>

          <div class="card__container_body">
            <div class="card__container_body_content">
              <div class="card__container_body_content_text">
                <h2 class="card__container_body_content_text_title">Mision</h2>
              </div>

              <div class="card__container_body_content_text">
                <p class="card__container_body_content_text_text">
                  Ofrecemos soluciones digitales innovadoras y personalizadas
                  para ayudar a nuestros clientes a alcanzar sus metas
                  empresariales, destacándonos por la calidad, eficiencia y
                  facilidad de uso de nuestros servicios. Valoramos la
                  honestidad y construimos relaciones sólidas, superando
                  expectativas en cada proyecto.
                </p>
              </div>
            </div>

          </div>
        </div>
        <div class="div">
          
        </div>
      </article>
    `;
  }

  static styles = [
    css`
      :host {
        display: inline-block;
        margin: 0;
        padding: 0;
        background-color: #fbfbfb;
      }

      .div {
        width: 1rem;
        height: 18.9rem;
        border-radius: .6rem 0 0 .6rem;
        background-color: rgb(2, 136, 209);
        box-shadow: rgba(2, 136, 209, 1) 10px -5px 14px -2px;
      }

      .card {
        display: flex;
        align-items: center;
        padding: 2rem 0;
        border-radius: 14px;
        box-shadow: -15px 12px 15px -17px rgba(0,0,0,0.65);
        -moz-box-shadow: -15px 12px 15px -17px rgba(0,0,0,0.65);
        -webkit-box-shadow: -15px 12px 15px -17px rgba(0,0,0,0.65);
        background-color: #fbfbfb;
      }

      .card__container {
        display: flex;
        align-items: center;
      }

      .card__container_img_img {
        width: 14rem;
      }

      .card__container_body {
        width: 18rem;
        padding: 1rem;
      }

      .card__container_footer_content {
        display: flex;
        gap: 1rem;
      }
    `,
  ];
}
customElements.define("card-left-00-m", CardLeft00m);
