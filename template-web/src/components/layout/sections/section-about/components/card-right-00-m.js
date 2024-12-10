import { LitElement, html, css } from "lit";

// Img
import mission from "@assets/img/about/mission.webp";
import vission from "@assets/img/about/vission.webp";
import about from "@assets/img/about/about.webp";

export class CardRight00m extends LitElement {
  emitSelection(option) {
    this.dispatchEvent(
      new CustomEvent("select-option", {
        detail: option,
        bubbles: true,
        composed: true,
      })
    );
  }

  render() {
    return html`
      <article class="card">
        <div class="card__container">
          <div
            class="card__container_info"
            @click=${() => this.emitSelection("about")}
          >
            <div class="card__container_info_icon">
              <div class="card__container_info_icon2">
                <img
                  class="card__container_info_icon_img"
                  src="${about}"
                  alt="acerca de / about us"
                />
              </div>
            </div>
            <div class="card__container_info_text">
              <div class="card__container_info_text_content">
                <h4 class="card__container_info_text_content_title">
                  Acerca de Nosotros
                </h4>
              </div>
              <div class="card__container_info_text_content">
                <span class="card__container_info_text_content_desc"
                  >Conoce mas sobre nosotros
                </span>
              </div>
            </div>
          </div>

          <div
            class="card__container_info"
            @click=${() => this.emitSelection("mission")}
          >
            <div class="card__container_info_icon">
              <div class="card__container_info_icon2">
                <img
                  class="card__container_info_icon_imgm"
                  src="${mission}"
                  alt="mision / mission"
                />
              </div>
            </div>
            <div class="card__container_info_text">
              <div class="card__container_info_text_content">
                <h4 class="card__container_info_text_content_title">Mision</h4>
              </div>
              <div class="card__container_info_text_content">
                <span class="card__container_info_text_content_desc"
                  >Conoce cual es nuestro objectivo
                </span>
              </div>
            </div>
          </div>

          <div
            class="card__container_info"
            @click=${() => this.emitSelection("vision")}
          >
            <div class="card__container_info_icon">
              <div class="card__container_info_icon2">
                <img
                  class="card__container_info_icon_imgv"
                  src="${vission}"
                  alt="vision / vission"
                />
              </div>
            </div>
            <div class="card__container_info_text">
              <div class="card__container_info_text_content">
                <h4 class="card__container_info_text_content_title">Vision</h4>
              </div>
              <div class="card__container_info_text_content">
                <span class="card__container_info_text_content_desc"
                  >Descubre sobre nosotros objectivos a futurou</span
                >
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
        padding: 0;
        margin: 0;
      }

      .card {
        padding: 0.8rem 1rem 0.8rem 0;
        /* background-color: #f7f7f7; */
        background-color: rgb(2, 136, 209);
        border-radius: 0.1rem 0.6rem 0.6rem 0.1rem;
        box-shadow: 1px -2px 17px -5px rgba(2, 136, 209, 0.75);
        -moz-box-shadow: 1px -2px 17px -5px rgba(2, 136, 209, 0.75);
        -webkit-box-shadow: 1px -2px 17px -5px rgba(2, 136, 209, 0.75);
      }

      .card__container_info {
        display: flex;
        gap: 0.5rem;
        padding: 0.5rem;
      }

      .card__container_info_icon {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 4.8rem;
        height: 4.8rem;
        border-radius: 50%;
        box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
        overflow: hidden;
      }

      .card__container_info_icon2 {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 4rem;
        height: 4rem;
        border-radius: 50%;
        background-color: #fff;
        box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
        overflow: hidden;
      }

      .card__container_info_icon:hover {
        background: linear-gradient(135deg, #2196f3, #21cbf3);
        box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
      }

      .card__container_info_icon_img {
        width: 65%;
        height: auto;
        object-fit: contain;
        cursor: pointer;
      }

      .card__container_info_icon_imgm,
      .card__container_info_icon_imgv {
        width: 80%;
        height: auto;
        object-fit: contain;
        cursor: pointer;
      }

      .card__container_info_text {
        width: 17rem;
        display: grid;
        gap: 0.5rem;
        align-content: center;
        justify-content: start;
      }

      .card__container_info_text_content_title {
        margin: 0;
      }
    `,
  ];
}
customElements.define("card-right-00-m", CardRight00m);
