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
                <h2 class="card__container_body_content_text_title"> Lorem ipsum </h2>
              </div>

              <div class="card__container_body_content_text">
                <p class="card__container_body_content_text_text">
                Lorem impusn dolor Lorem impusn dolor Lorem impusn dolor Lorem impusn dolor
                Lorem impusn dolor Lorem impusn dolor Lorem impusn dolor Lorem impusn dolor
                Lorem impusn dolor Lorem impusn dolor Lorem impusn dolor Lorem impusn dolor
                </p>
              </div>
            </div>

            <div class="card__container_footer_content">
              <div class="card__container_footer_content_button">
                <div class="card__container_footer_content_button_left">
                  <span>
                    <!-- <img src="" alt=""> -->
                    svg left
                  </span>
                </div>
              </div>
              <div class="card__container_footer_content_button">
                <div class="card__container_footer_content_button_right">
                  <span>
                    svg right
                  </span>
                </div>
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
        padding: 2rem;
        border-radius: 14px 48px 15px 48px;
        box-shadow: -15px 12px 15px -17px rgba(0,0,0,0.65);
        -moz-box-shadow: -15px 12px 15px -17px rgba(0,0,0,0.65);
        -webkit-box-shadow: -15px 12px 15px -17px rgba(0,0,0,0.65);
      }

      .card__container {
        display: flex;
        align-items: center;
      }

      .card__container_body {
        width: 18rem;
        padding: 1rem;
      }

      .card__container_footer_content {
        display: flex;
        gap: 1rem;
      }

      img {
        width: 2rem;
      }
    `,
  ];
}
customElements.define("card-left-00", CardLeft00);
