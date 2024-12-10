import { LitElement, html, css } from "lit";

import background from "@assets/img/public-img/background-banner.png"; // Ruta de la imagen

export class HeaderGrid extends LitElement {
  static styles = css`
    :host {
      display: block;
      margin: 0;
      padding: 0;
      font-family: "Montserrat";
    }

    .main-section {
      height: 100vh;
    }

    /* Banner Styles */

    .banner {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      gap: 8rem;
      height: 100%;
      padding: 1rem 6rem;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      color: white;
    }

    .banner__title {
      line-height: 1.2;
      font-size: 2.5rem;
      text-wrap: balance;
    }

    .banner__header{
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }

    .highlight {
      background: #2111a4;
      border-radius: 0.4rem;
      padding: 0 1rem;
    }

    .banner__paragraph {
      text-wrap: balance;
      font-size: 1rem;
    }

    .banner__button {
      background-color: #e3edf7;
      border-radius: 0.4rem;
      padding: 0.4rem 0.8rem;
      border: none;
      font-size: 1rem;
      font-family: "Montserrat";
      box-shadow: inset 0 0.0625em 0.0625rem 0 #eaf1f9,
        0 0.0625em 0.0625rem 0 #dce6f2, 0 0.125em 0.0625rem 0 #d1dde9,
        0 0.25em 0.0625rem 0 #c3d2e0, 0 0.3125em 0.0625rem 0 #b8c9d8,
        0 0.375em 0.0625rem 0 #adc0cf, 0 0.425em 0.0625rem 0 #a3b7c7;
      transition: 0.15s ease;
      cursor: pointer;
      color: #09f;
    }

    .banner__button:active {
      translate: 0 0.225em;
      box-shadow: inset 0 0.03em 0 0 #eaf1f9, 0 0.03em 0 0 #dce6f2,
        0 0.0625em 0 0 #ececec, 0 0.125em 0 0 #d1dde9, 0 0.125em 0 0 #c3d2e0,
        0 0.2em 0 0 #b8c9d8, 0 0.225em 0 0 #adc0cf, 0 0.225em 0.375em 0 #a3b7c7;
    }

    /* Banner Text Container Styles */

    .container-text__banner {
      display: flex;
      justify-content: space-around;
      flex-direction: column;
      max-width: 40%;
      gap: 2rem;
    }

    /* Social Media List Styles */

    .container-list__banner{
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .social-media__tittle{
      font-size: 1rem;
      font-weight: 400;
    }

    .social-media__list {
      display: flex;
      gap: 2rem;
    }

    .social-link__list {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 2.5rem;
      height: 2.5rem;
      transform: rotate(318deg) skewX(199deg) translate(0, 0);
      border-radius: 0.4rem;
      transition: transform 0.2s ease-in-out;
      transition: all 0.3s;
      background: rgba(255, 255, 255, 0.4);
      border: 1px solid rgba(255, 255, 255, 0.6);
    }

    .social-link__list:hover {
      transform: skew(1deg) translate(0, 0);
    }

    .social-container-icon {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #e3edf7;
      border-radius: 0.4rem; /* Bordes redondeados */
      transition: transform 0.3s ease-in-out, background-color 0.3s ease-in-out;
      transform: translate(5px, -5px);
      color: #09f;
    }

    .social-link__list:hover .social-container-icon {
      transform: rotate(20deg);
      transform-origin: bottom;
    }

    /* Global Styles */

    p {
      padding: 0;
      margin: 0;
    }

    h1, h2 {
      padding: 0;
      margin: 0;
    }

    ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    a {
      text-decoration: none;
      color: black;
    }
  `;

  updated() {
    // Asignar el fondo dinámicamente
    const banner = this.shadowRoot.querySelector(".banner");
    if (banner) {
      banner.style.backgroundImage = `url(${background})`;
    }
  }

  render() {
    return html`
      <section class="main-section">
        <article class="banner">
          <div class="container-text__banner">
            <div class="banner__header" role="banner">
              <h1 class="banner__title">
                La <span class="highlight">web</span> es un lienzo, nosotros <span class="highlight">artistas.</span>
              </h1>
              <h2>NEWSOFT COMPUTER</h2>
            </div>
            <div
              class="banner__description"
              role="presentation"
              aria-describedby="banner-title"
            >
              <p class="banner__paragraph">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error
                atque necessitatibus nemo ipsum expedita quod doloribus!
                Inventore consectetur molestiae ut doloremque itaque pariatur
                dicta praesentium quis officiis ad, veritatis minus.
              </p>
            </div>
            <div class="banner__cta">
              <button
                class="banner__button"
                type="button"
                aria-label="Contact us"
              >
                Contactanos
              </button>
            </div>
          </div>
          <div class="container-list__banner">
            <ul class="social-media__list">
              <li class="social-item__list">
                <a class="social-link__list" href="#">
                  <span class="social-container-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"
                      />
                    </svg>
                  </span>
                </a>
              </li>

              <li class="social-item__list">
                <a class="social-link__list" href="#">
                  <span class="social-container-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      viewBox="0 0 32 32"
                    >
                      <path
                        fill="currentColor"
                        d="M25.566 2.433H6.433c-2.2 0-4 1.8-4 4v19.135c0 2.2 1.8 4 4 4h19.135c2.2 0 4-1.8 4-4V6.433c-.002-2.2-1.8-4-4.002-4m-.257 14.483h-3.22v11.65h-4.818v-11.65h-2.41V12.9h2.41v-2.41c0-3.276 1.36-5.225 5.23-5.225h3.217V9.28h-2.012c-1.504 0-1.604.563-1.604 1.61l-.013 2.01h3.645l-.426 4.016z"
                      />
                    </svg>
                  </span>
                </a>
              </li>

              <li class="social-item__list">
                <a class="social-link__list" href="#">
                  <span class="social-container-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M21.99 6.547a11 11 0 0 0-.103-1.282a4.3 4.3 0 0 0-.363-1.09A3.85 3.85 0 0 0 19.83 2.48a4.3 4.3 0 0 0-1.083-.362a11 11 0 0 0-1.292-.105c-.183-.007-.42-.01-.53-.01L7.077 2c-.11 0-.347.003-.53.01a11 11 0 0 0-1.282.103a4.3 4.3 0 0 0-1.09.363A3.85 3.85 0 0 0 2.48 4.17a4.3 4.3 0 0 0-.362 1.083a11 11 0 0 0-.106 1.292c-.006.183-.01.42-.01.53L2 16.923c0 .11.003.347.01.53a11 11 0 0 0 .103 1.282a4.3 4.3 0 0 0 .363 1.09A3.85 3.85 0 0 0 4.17 21.52a4.3 4.3 0 0 0 1.083.362a11 11 0 0 0 1.292.105c.183.007.42.01.53.01l9.848.002c.11 0 .347-.003.53-.01a11 11 0 0 0 1.282-.103a4.3 4.3 0 0 0 1.09-.363a3.85 3.85 0 0 0 1.696-1.694a4.3 4.3 0 0 0 .362-1.083a11 11 0 0 0 .106-1.292c.006-.183.01-.42.01-.53L22 7.077c0-.11-.003-.347-.01-.53m-9.773 12.41h-.003a7.1 7.1 0 0 1-3.407-.868l-3.78.991l1.012-3.693a7.13 7.13 0 1 1 6.178 3.57"
                      />
                      <path
                        fill="currentColor"
                        d="M12.22 5.901a5.927 5.927 0 0 0-5.023 9.076l.141.224l-.599 2.186l2.243-.588l.216.128a5.9 5.9 0 0 0 3.016.826h.003A5.926 5.926 0 0 0 12.219 5.9Zm3.484 8.47a1.83 1.83 0 0 1-1.202.847a2.44 2.44 0 0 1-1.122-.07a10 10 0 0 1-1.015-.376a7.94 7.94 0 0 1-3.043-2.689a3.46 3.46 0 0 1-.728-1.842a2 2 0 0 1 .624-1.485a.66.66 0 0 1 .475-.223c.118 0 .237 0 .341.006c.11.005.256-.042.4.306c.15.356.506 1.233.55 1.322a.33.33 0 0 1 .015.312a1.2 1.2 0 0 1-.178.297c-.09.104-.187.232-.267.312c-.09.089-.182.185-.079.363a5.4 5.4 0 0 0 .991 1.234a4.9 4.9 0 0 0 1.433.884c.178.09.282.074.386-.045s.445-.52.564-.698s.237-.148.4-.089s1.04.49 1.218.58s.297.133.341.207a1.5 1.5 0 0 1-.104.847"
                      />
                    </svg>
                  </span>
                </a>
              </li>

              <li class="social-item__list">
                <a class="social-link__list" href="#">
                  <span class="social-container-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      viewBox="0 0 448 512"
                    >
                      <path
                        fill="currentColor"
                        d="M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm297.1 84L257.3 234.6L379.4 396h-95.6L209 298.1L123.3 396H75.8l111-126.9L69.7 116h98l67.7 89.5l78.2-89.5zm-37.8 251.6L153.4 142.9h-28.3l171.8 224.7h26.3z"
                      />
                    </svg>
                  </span>
                </a>
              </li>
            </ul>
            <div class="social-media-container__tittle">
              <h2 class="social-media__tittle">Nuestras Redes</h2>
            </div>
          </div>
        </article>
      </section>
    `;
  }
}

customElements.define("header-grid-00", HeaderGrid);
