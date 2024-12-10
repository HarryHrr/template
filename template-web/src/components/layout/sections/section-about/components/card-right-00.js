import { LitElement, html, css } from "lit";

export class CardRight00 extends LitElement {
  render() {
    return html`
      <article class="card">
        <div class="card__container">
          <div class="card__container_info">
            <div class="card__container_info_icon">
              <div class="div"></div>
            </div>
            <div class="card__container_info_text">
              <div class="card__container_info_text_content">
                <h4 class="card__container_info_text_content_title">Lorem impusn dolor</h4>
              </div>
              <div class="card__container_info_text_content">
                <span class="card__container_info_text_content_desc">Lorem impusn dolor Lorem impusn dolor Lorem impusn dolor Lorem impusn dolor </span>
              </div>
            </div>
          </div>

          <div class="card__container_info">
            <div class="card__container_info_icon">
              <div class="div"></div>
            </div>
            <div class="card__container_info_text">
              <div class="card__container_info_text_content">
                <h4 class="card__container_info_text_content_title">Lorem impusn dolor</h4>
              </div>
              <div class="card__container_info_text_content">
                <span class="card__container_info_text_content_desc">Lorem impusn dolor Lorem impusn dolor Lorem impusn dolor Lorem impusn dolor </span>
              </div>
            </div>
          </div>

          <div class="card__container_info">
            <div class="card__container_info_icon">
              <div class="div"></div>
            </div>
            <div class="card__container_info_text">
              <div class="card__container_info_text_content">
                <h4 class="card__container_info_text_content_title">Lorem impusn dolor</h4>
              </div>
              <div class="card__container_info_text_content">
                <span class="card__container_info_text_content_desc">Lorem impusn dolor Lorem impusn dolor Lorem impusn dolor Lorem impusn dolor </span>
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

      .div {
        width: 4rem;
        height: 4rem;
        border-radius: 50%;
        background: #f1f1f1;
      }

      .card {
        padding: .4rem 1rem .4rem .6rem;
        background-color: #f7f7f7;
        border-top-right-radius: .6rem;
        border-bottom-right-radius: .6rem;
        box-shadow: 5px -2px 17px -7px rgba(0,0,0,0.75);
        -moz-box-shadow: 5px -2px 17px -7px rgba(0,0,0,0.75);
        -webkit-box-shadow: 5px -2px 17px -7px rgba(0,0,0,0.75);
      }

      .card__container_info {
        display: flex;
        gap: .5rem;
        padding: .5rem;
      }

      .card__container_info_text {
        width: 17rem;
        display: grid;
        gap: .5rem;
        align-content: center;
        justify-content: start;
      }

      .card__container_info_text_content_title {
        margin: 0;
      }
    `,
  ];
}
customElements.define("card-right-00", CardRight00);
