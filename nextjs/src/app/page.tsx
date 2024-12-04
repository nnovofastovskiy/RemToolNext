import styles from './page.module.scss';
import { MainSwiper } from '@/components/MainSwiper/MainSwiper';
// import { getSlides } from '@/api/getData';
import { BrandsSwiper } from '@/components/BrandsSwiper/BrandsSwiper';
import { WeRepairBlock } from '@/components/WeRepairBlock/WeRepairBlock';
import Image from 'next/image';


// async function getCategories() {
//   const data = await fetch(process.env.NEXT_PUBLIC_BACK_DOMAIN + '/api/categories');
//   // const res = await data.json();
//   // console.log(data);

//   return await data.json();
// }

export default function Home() {
  // const slides = await getSlides();
  // const categories = await getCategories();
  // const data = await fetch('https://fakestoreapi.com/products');
  // const categories = await data.json();
  // console.log(categories);


  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <h1 className={styles.hero__header}>
          Ремонт строительного инструмента
        </h1>
        <div>
        </div>
        {/* <div style={{ backgroundColor: 'gray' }}>
          swiper
        </div> */}
        <MainSwiper className={styles.hero__slider} />
        {/* <app-swiper className="hero__slider"></app-swiper> */}
      </section>
      {/* <app-we-repair-block></app-we-repair-block> */}
      <section className={styles.advantage}>
        <h2 className={styles["main-h2"]}>Почему мы</h2>
        <div className={styles.advantage__wrapper}>
          <div className={styles.advantage__item}>
            <Image
              src="/diagnostic.svg"
              alt=""
              width="123"
              height="123"
            />
            Качественная<br />
            диагностика
          </div>
          <div className={styles.advantage__item}>
            <Image
              src="/guarantee.svg"
              alt=""
              width="123"
              height="123"
            />
            Гарантия<br />на&nbsp;ремонт
          </div>
          <div className={styles.advantage__item}>
            <Image
              src="/delivery.svg"
              alt=""
              width="123"
              height="123"
            />
            Выездной<br />ремонт
          </div>
          <div className={styles.advantage__item}>
            <Image
              src="/experience.svg"
              alt=""
              width="123"
              height="123"
            />
            Многолетний<br />опыт
          </div>
        </div>
      </section>

      <section
        className={styles.we_repair}
      >
        <h2
          className={styles["main-h2"]}
        >
          Мы ремонтируем
        </h2>
        <WeRepairBlock />
      </section>

      <section className={styles.brands}>
        <h2 className={styles["main-h2"]}>Бренды</h2>
        <BrandsSwiper />
        {/* <app-swiper-brands className="brands__slider"></app-swiper-brands> */}
      </section>

      <section className={styles.popular}>
        <h2 className={styles["main-h2"]}>Популярные услуги</h2>
        <div className={styles.popular__wrapper}>
          {/* <a [routerLink]="['/tools/electro/60204a293849a51e6c282724']">Замена ствола перфоратора</a>
        <a [routerLink]="['/tools/electro/5fbd4580f60fe9f911acfc51']">Замена щеток в шуруповерте</a>
        <a [routerLink]="['/tools/electro/5fafcfaffc3c14750ef09c2c']">Замена подшипника редуктора болгарки</a>
        <a [routerLink]="['/tools/electro/601838b30a7bf6c0193334f7']">Заточка ножа триммера</a>
        <a [routerLink]="['/tools/electro/5fec728b343f593d065ac100']">Заточка цепи бензопилы</a>
        <a [routerLink]="['/tools/electro/6019908c50256c7fd0638ce8']">Замена свечи зажигания бензогенератора</a>
        <a [routerLink]="['/tools/electro/60201a3f6228a9905411658c']">Замена выпрямителя в сварочном аппарате</a>
        <a [routerLink]="['/tools/compressor/602017146228a99054116582']">Регулировка давления компрессора</a> */}
        </div>
      </section>

      <section className={styles.description}>
        <h2 className={styles["main-h2"]}>РЕМТУЛ - это профессиональный ремонт строительного инструмента</h2>
        <div className={styles.description__content}>
          <p className={styles.description__text}>
            Любой даже самый дорогой и качественный инструмент имеет ограниченный ресурс работы.
            Зачастую износ деталей и частей инструмента приводит к поломкам в самый неподходящий момент.
            Чтобы избежать неожиданного выхода из строя Вашего инструмента настоятельно рекомендуем придерживаться регламента на его обслуживание.
            <br />
            <br />
            Наш сервисный центр производит профессиональное обслуживание и ремонт строительного инструмента любых производителей.
          </p>
          <div className={styles.description__process}>
            <Image
              src="/fix_process.png"
              alt=""
              width="487"
              height="594"
            />
          </div>
        </div>
      </section>
    </main >
  )
}
