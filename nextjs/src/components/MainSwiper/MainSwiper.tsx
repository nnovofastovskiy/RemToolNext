'use client'

// import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import styles from './MainSwiper.module.scss';
import cn from 'classnames';
import { Autoplay } from 'swiper/modules';
import { MainSwiperProps } from './MainSwiper.props';
import Image from 'next/image';
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from 'next/link';
import { Slide1 } from './Slide1/Slide1';
import { Slide2 } from './Slide2/Slide2';
import { useRef } from 'react';

export const MainSwiper = ({ className }: MainSwiperProps) => {
    const paginationRef = useRef(null);
    const navigationPrevRef = useRef<HTMLDivElement>(null);
    const navigationNextRef = useRef<HTMLDivElement>(null);
    return (
        // <!-- Slider main container -->
        <div
            className={cn(className, styles["swiper-container"])}
        // onMouseOver={"this.swiper.autoplay.stop()"}
        // onmouseOut={"this.swiper.autoplay.start()"}
        >
            <Swiper
                className={styles["swiper-wrapper"]}
                modules={[Autoplay, Navigation, Pagination]}
                spaceBetween={0}
                slidesPerView={1}
                // navigation
                navigation={{
                    prevEl: navigationPrevRef.current,
                    nextEl: navigationNextRef.current,
                }}
                onInit={(swiper) => {
                    // @ts-ignore
                    // eslint-disable-next-line no-param-reassign
                    swiper.params.navigation.prevEl = navigationPrevRef.current;
                    // @ts-ignore
                    // eslint-disable-next-line no-param-reassign
                    swiper.params.navigation.nextEl = navigationNextRef.current;
                    swiper.navigation.init();
                    swiper.navigation.update();
                }}
                pagination={{
                    // el: paginationRef.current,
                    clickable: true
                }}
                // onSlideChange={() => console.log('slide change')}
                // onSwiper={(swiper) => console.log(swiper)}
                autoplay={{ delay: 2000, disableOnInteraction: true, pauseOnMouseEnter: true }}
                loop={true}
            >
                <SwiperSlide
                    className={styles["swiper-slide"]}
                >
                    <Slide1></Slide1>
                </SwiperSlide>
                <SwiperSlide
                    className={styles["swiper-slide"]}
                >
                    <Slide2></Slide2>
                </SwiperSlide>
                <div ref={navigationPrevRef} className={styles.prev}></div>
                <div ref={navigationNextRef} className={styles.next}></div>
            </Swiper>

        </div>
    )
}