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
        justify-content: space-around;
        align-items: center;
        padding: 1rem;
      }

      /* Menu Navigation */

      .navigation-list {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
      }
      
      .navigation-list__item{
        position: relative;
        padding: 0 0 .2rem 0;
      }

      .navigation-list__item::before{
        position: absolute;
        content: "";
        width: 0;
        height: 0;
        left: 0;
        bottom: 0;
        background: var(--color);
        border-radius: .2rem;
        transition: width .25s ease;
      }

      .navigation-list__item:hover::before{
        width: 100%;
        height: .2rem;
      }

      /* Menu Extra */

      .menu-extra__list {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
      }

      .menu-extra__item {
        background-color: #f0f0f0;
        border-radius: 0.4rem;
        padding: 0.4rem 0.8rem;
        box-shadow: inset 0 0.0625em 0 0 #f4f4f4, 0 0.0625em 0 0 #efefef,
          0 0.125em 0 0 #ececec, 0 0.25em 0 0 #e0e0e0, 0 0.3125em 0 0 #dedede,
          0 0.375em 0 0 #dcdcdc, 0 0.425em 0 0 #cacaca;
          transition: .15s ease;
          cursor: pointer;
      }

      .menu-extra__item:active {
        translate: 0 0.225em;
        box-shadow: inset 0 0.03em 0 0 #f4f4f4, 0 0.03em 0 0 #efefef,
          0 0.0625em 0 0 #ececec, 0 0.125em 0 0 #e0e0e0, 0 0.125em 0 0 #dedede,
          0 0.2em 0 0 #dcdcdc, 0 0.225em 0 0 #cacaca,
          0 0.225em 0.375em 0 #cecece;
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
          <span>{ <strong>NEW</strong>SOFT }</span>
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
