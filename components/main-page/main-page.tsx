import s from "./main-page.module.css";

// this page is not used for now

export default function MainPage() {
  return (
    <main className={s.mainPage}>
      <div className={s.menu}>
        <ul className={s.menu__list}>
          <li className={s.menu__item}>
            <a href="">
              Bolsos
            </a>
          </li>
        </ul>
      </div>
      <div className={s.gridCollage}>
        <div className={s.gridCollage__item1}>
          <img className={s.gridCollage__img} src="https://i.pinimg.com/736x/1c/61/65/1c6165fcdd2ac7e4b3a2931255ea41da.jpg" alt="" />
        </div>
        <div className={s.gridCollage__item2}>
          <img className={s.gridCollage__img} src="https://i.pinimg.com/736x/2d/48/c3/2d48c376a58e384356cb17b5ff483946.jpg" alt="" />
        </div>
        <div className={s.gridCollage__item3}>
          <img className={s.gridCollage__img} src="https://i.pinimg.com/736x/36/a6/e8/36a6e8cc702c1371692d189760707454.jpg" alt="" />
        </div>
        <div className={s.gridCollage__item4}>
          <img className={s.gridCollage__img} src="https://i.pinimg.com/736x/7f/92/3f/7f923feb6f59f2ada97e4692f546e1a3.jpg" alt="" />
        </div>
        <div className={s.gridCollage__item5}>
          <img className={s.gridCollage__img} src="https://i.pinimg.com/736x/7f/92/3f/7f923feb6f59f2ada97e4692f546e1a3.jpg" alt="" />
        </div>
      </div>
    </main>
  );
}