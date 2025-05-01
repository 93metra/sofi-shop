import s from './main-page.module.css'

export default function MainPage() {
  return (
    <div className={s.mainPage}>
      <div className={s.leftSection}>

      </div>
      <div className={s.rightSectoin}>

      </div>
      <ul className={s.mainPage__catalog}>
        <li className={s.catalogItem}>
          <a className={s.hover_underline_animation} href="#">
            Pantalones
          </a>
        </li>
        <li className={s.catalogItem}>
          <a className={s.hover_underline_animation} href="#">
            Vestidos
          </a>
        </li>
        <li className={s.catalogItem}>
          <a className={s.hover_underline_animation} href="#">
            Bolsos
          </a>
        </li>
        <li className={s.catalogItem}>
          <a className={s.hover_underline_animation} href="#">
            Faldas
          </a>
        </li>
      </ul>
    </div>
  )
}