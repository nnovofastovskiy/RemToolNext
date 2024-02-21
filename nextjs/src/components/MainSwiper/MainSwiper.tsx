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

export const MainSwiper = ({ className, slides }: MainSwiperProps) => {
    const paginationRef = useRef(null);
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
                navigation
                pagination={{
                    // el: paginationRef.current,
                    clickable: true
                }}
                // onSlideChange={() => console.log('slide change')}
                // onSwiper={(swiper) => console.log(swiper)}
                autoplay={{ delay: 2000, disableOnInteraction: true }}
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
            </Swiper>

        </div>
    )
}