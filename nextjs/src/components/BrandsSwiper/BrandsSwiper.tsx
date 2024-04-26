'use client'

import 'swiper/css';
import styles from './BrandsSwiper.module.scss';
import cn from 'classnames';
import { Autoplay } from 'swiper/modules';
import { BrandsSwiperProps } from './BrandsSwiper.props';
import Image from 'next/image';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useRef } from 'react';

const SLIDES = [
    'bosch.jpg',
    'champion.jpg',
    'dewalt.jpg',
    'hitachi.jpg',
    'husqvarna.jpg',
    'interskol.jpg',
    'kalibr.jpg',
    'makita.jpg',
    'metabo.jpg',
    'partner.jpg',
    'prorab.jpg',
    'sparky.jpg',
    // 'sparky2.jpg',
    'stihl.jpg',
]

export const BrandsSwiper = ({ className, ...props }: BrandsSwiperProps) => {
    const paginationRef = useRef(null);
    const navigationPrevRef = useRef<HTMLDivElement>(null);
    const navigationNextRef = useRef<HTMLDivElement>(null);
    return (
        // <!-- Slider main container -->
        <div
            className={cn(className, styles["swiper-container"])}
            {...props}
        // onMouseOver={"this.swiper.autoplay.stop()"}
        // onmouseOut={"this.swiper.autoplay.start()"}
        >
            <Swiper
                className={styles["swiper-wrapper"]}
                modules={[Autoplay]}
                spaceBetween={20}
                slidesPerView={'auto'}
                speed={1000}
                // onSlideChange={() => console.log('slide change')}
                // onSwiper={(swiper) => console.log(swiper)}
                autoplay={{ delay: 0 }}
                loop={true}

            // transi
            >
                {/* <SwiperSlide
                    className={styles["swiper-slide"]}
                > */}
                {/* <SwiperSlide> */}
                {SLIDES.map((slide) => {
                    return (
                        <SwiperSlide
                            key={`slide-${slide}`}
                            className={styles["swiper-slide"]}
                        >
                            <Image
                                src={'/brands/' + slide}
                                alt=''
                                layout={'fill'}
                                objectFit='contain'
                            // width={100}
                            // height={50}
                            >

                            </Image>
                        </SwiperSlide>
                    )
                })}
                {/* </SwiperSlide> */}
                {/* </SwiperSlide> */}
                {/* <div ref={navigationPrevRef} className={styles.prev}></div>
                <div ref={navigationNextRef} className={styles.next}></div> */}
            </Swiper>

        </div>
    )
}