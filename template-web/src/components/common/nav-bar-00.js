import { LitElement, html, css } from "lit";

export class NavBar extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
        margin: 0;
        padding: 0;
        --color: #09f;
        --color-text: #fff;
        font-family: "Montserrat";
      }

      /* Container Styles */

      .main-menu {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: #f0f4f8;
        padding: 1rem 6rem;
      }

      .bifurcation__title {
        color: #09f;
      }

      /* Menu Navigation */

      .navigation-list {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
      }

      .navigation-list__item {
        position: relative;
        padding: 0 0 0.2rem 0;
      }

      .navigation-list__item::before {
        position: absolute;
        content: "";
        width: 0;
        height: 0;
        left: 0;
        bottom: 0;
        background: var(--color);
        border-radius: 0.2rem;
        transition: width 0.25s ease;
      }

      .navigation-list__item:hover::before {
        width: 100%;
        height: 0.2rem;
      }

      /* Menu Extra */

      .menu-extra__list {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
      }

      .menu-extra__item {
        background-color: #e3edf7;
        border-radius: 0.4rem;
        padding: 0.4rem 0.8rem;
        box-shadow: 
          inset 0 0.0625em 0.0625rem 0 #eaf1f9,
          0 0.0625em 0.0625rem 0 #dce6f2,
          0 0.125em 0.0625rem 0 #d1dde9,
          0 0.25em 0.0625rem 0 #c3d2e0,
          0 0.3125em 0.0625rem 0 #b8c9d8,
          0 0.375em 0.0625rem 0 #adc0cf,
          0 0.425em 0.0625rem 0 #a3b7c7;
        transition: 0.15s ease;
        cursor: pointer;
        color: #09f;
      }

      .menu-extra__item:active {
        translate: 0 0.225em;
        box-shadow: 
        inset 0 0.03em 0 0 #eaf1f9, 
        0 0.03em 0 0 #dce6f2,
        0 0.0625em 0 0 #ececec, 
        0 0.125em 0 0 #d1dde9, 
        0 0.125em 0 0 #c3d2e0,
        0 0.2em 0 0 #b8c9d8, 
        0 0.225em 0 0 #adc0cf,
        0 0.225em 0.375em 0 #a3b7c7;
      }

      .menu-extra__link {
        color: #09f;
      }
      /* Global Styles */

      menu {
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
    `,
  ];

  render() {
    return html`
      <menu class="main-menu">
        <div class="main-menu__title">
          <span>{ <strong class="bifurcation__title">NEW</strong>SOFT }</span>
        </div>
        <nav class="main-menu__navigation">
          <ul class="navigation-list">
            <li class="navigation-list__item">
              <a class="navigation-list__link" href="#">Inicio</a>
            </li>
            <li class="navigation-list__item">
              <a class="navigation-list__link" href="#">Nosotros</a>
            </li>
            <li class="navigation-list__item">
              <a class="navigation-list__link" href="#">Contacto</a>
            </li>
            <li class="navigation-list__item">
              <a class="navigation-list__link" href="#">Servicios</a>
            </li>
          </ul>
        </nav>
        <div class="menu-extra">
          <ul class="menu-extra__list">
            <li class="menu-extra__item">
              <a class="menu-extra__link" href="#">Sign In</a>
            </li>
            <li class="menu-extra__item">
              <a class="menu-extra__link" href="#">Sign Up</a>
            </li>
          </ul>
        </div>
      </menu>
    `;
  }
}
customElements.define("nav-bar-00", NavBar);
