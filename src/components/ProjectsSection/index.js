import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useMediaQuery } from '@hooks';
import 'swiper/scss';
import 'swiper/css/navigation';

import styles from './ProjectsSection.module.scss';
import cn from 'classnames';

const data = [
  {
    category: 'SmartGlass',
    image: '/images/project-1.png',
    caption:
      'Технологія швидкої зміни прозорості дозволяє створити затишок та відчуття приватності',
  },
  {
    category: 'HeatGlass',
    image: '/images/project-2.png',
    caption:
      'Технологія швидкої зміни прозорості дозволяє створити затишок та відчуття приватності',
  },
  {
    category: 'HeatGlass',
    image: '/images/project-3.png',
    caption:
      'Технологія швидкої зміни прозорості дозволяє створити затишок та відчуття приватності',
  },
  {
    category: 'HeatGlass',
    image: '/images/project-4.png',
    caption:
      'Технологія швидкої зміни прозорості дозволяє створити затишок та відчуття приватності',
  },
];

const ProjectsSection = () => {
  const isMobile = useMediaQuery('(max-width: 992px)');

  return (
    <section className={styles.projects} id="projects">
      <div className={styles.projectsWrapper}>
        <div className={styles.projectsTop}>
          <h3 className={styles.projectsTitle}>Реалізовані проєкти</h3>
          <Link href="/projects" className={cn('button__underline', [styles.projectsLink])}>
            Подивитися усі
          </Link>
        </div>
        <div className={styles.projectsList}>
          {!!data.slice(0, 4).length &&
            (isMobile ? (
              <Swiper
                className={styles.slider}
                slidesPerView={'auto'}
                draggable={true}
                grabCursor={true}
                spaceBetween={12}
              >
                {data.map(({ category, image, caption }, index) => (
                  <SwiperSlide key={`slide-${index}`} className={styles.sliderSlide}>
                    <p className={styles.sliderCategory}>{category}</p>
                    <Image
                      className={styles.sliderImage}
                      src={image}
                      alt="Проєкт"
                      width={1000}
                      height={1000}
                    />
                    <div className={styles.sliderCaption}>{caption}</div>
                  </SwiperSlide>
                ))}
              </Swiper>
            ) : (
              <>
                {data.map(({ category, image, caption }, index) => (
                  <div key={`slide-${index}`} className={styles.sliderSlide}>
                    <p className={styles.sliderCategory}>{category}</p>
                    <Image
                      className={styles.sliderImage}
                      src={image}
                      alt="Проєкт"
                      width={1000}
                      height={1000}
                    />
                    <div className={styles.sliderCaption}>{caption}</div>
                  </div>
                ))}
              </>
            ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
