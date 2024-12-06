import { LitElement, html, css } from "lit";

import robot01 from "@assets/img/robots/robot-01.webp";

export class CardLeft00 extends LitElement {
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
                <h2 class="card__container_body_content_text_title"> ¿Quienes Somos? </h2>
              </div>

              <div class="card__container_body_content_text">
                <p class="card__container_body_content_text_text">
                  NEWSOFT COMPUTER es una empresa de desarrollo de software y
                  diseño web fundada en 2009, especializada en soluciones
                  digitales personalizadas. Ofrecemos un servicio excepcional,
                  trabajando estrechamente con nuestros clientes para superar
                  sus expectativas y brindar soluciones innovadoras y de
                  calidad.
                </p>
              </div>
            </div>

            <div class="card__container_footer_content">
              <div class="card__container_footer_content_button">
                <button type="button">Atras</button>
              </div>
              <div>
                <button type="button">Adelante</button>
              </div>
            </div>
          </div>
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

      .card {
        border: 2px solid black;
        padding: 2rem;
      }

      .card__container {
        display: flex;
        align-items: center;
      }

      .card__container_body {
        width: 18rem;
        padding: 1rem;
        background: #a79b9b;
      }

      .card__container_footer_content {
        display: flex;
      }
    `,
  ];
}
customElements.define("card-left-00", CardLeft00);
