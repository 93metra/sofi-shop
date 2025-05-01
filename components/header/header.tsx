import s from "./header.module.css";
import Image from "next/image";

export default function Header() {
  return (
    <div className={s.header}>
      <a className={s.titleLink} href="/">
        <h1 className={s.header__title}>Sofi Shop</h1>
      </a>
      <div className={s.iconsWrapper}>
        <Image
          className={`${s.user} ${s.icon}`}
          src="/user.png"
          alt="shopping bag"
          width={40}
          height={40}
          priority
        />
        <Image
          className={`${s.bag} ${s.icon}`}
          src="/bag.png"
          alt="shopping bag"
          width={40}
          height={40}
          priority
        />
      </div>
    </div>
  );
}