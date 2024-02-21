import { ISlide } from '@/api/getData';
import { HTMLAttributes } from 'react';

export interface MainSwiperProps extends HTMLAttributes<HTMLDivElement> {
    slides: ISlide[]
}