<template>
    <section class="slogan">
        <div class="container">
            <div class="slogan__container">
                <div class="slogan__content">
                    <h2 class="title slogan__title">Почему выбирают нашу компанию</h2>
                    <p class="slogan__text">Основная задача нашей компании создать комфортную среду для клиента, где он может довериться персоналу и не переживать за качество.</p>
                </div>
                <div class="slogan__container-content">
                    <div class="slogan__left">
                        <div class="slogan__item" v-for="(item) in items" :key="item">
                            <span class="slogan__item-icon">
                                <img class="slogan__item-icon" :src="item.icon" alt="Иконка">
                            </span>
                            <div :class="`slogan__${item.id}`" class="slogan__item-text">
                                <h3 class="slogan__title-mini">{{ item.title }}</h3>
                                <p class="slogan__text-mini" :class="`slogan__text-${item.id}`">{{ item.text }}</p>
                            </div>
                        </div>
                    </div>
                    <div class="slogan__right">
                        <img src="@/assets/images/pages/home/slogan/slogan.png" alt="Картика" class="slogan__img">
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

    export default {
        data: () => ({
            items: [
                {
                    id: 'one',
                    icon: require('@/assets/images/pages/home/slogan/icons/car.svg'),
                    title: 'Надежность и доверие',
                    text: 'Мы всегда делаем нашу работу качественно, работаем на совесть.'
                },
                {
                    id: 'two',
                    icon: require('@/assets/images/pages/home/slogan/icons/clock.svg'),
                    title: 'Быстро делаем свою работу',
                    text: 'Наша команда, делает свою работу быстро, экономя время наших клиентов.'
                },
                {
                    id: 'three',
                    icon: require('@/assets/images/pages/home/slogan/icons/dollar.svg'),
                    title: 'Приемлимые цены',
                    text: 'Задача фирмы является сделать максимально комфортную среду для клиента, предлагая хорошие цены.'
                },
            ]
        }),

        mounted () {
            gsap.registerPlugin(ScrollTrigger);

            gsap.fromTo('.slogan__title', {
                opacity: 0,
                y: 300
            }, {
                scrollTrigger: {
                    trigger: '.slogan__title',
                    start: 'bottom bottom',
                },
                opacity: 1,
                y: 0
            })

            gsap.fromTo('.slogan__text', {
                opacity: 0,
                y: 300
            }, {
                scrollTrigger: {
                    trigger: '.slogan__text',
                    start: 'bottom bottom',
                },
                opacity: 1,
                y: 0
            })

            gsap.fromTo('.slogan__item', {
                opacity: 0,
                y: 300
            }, {
                scrollTrigger: {
                    trigger: '.slogan__container',
                    start: '30% 80%',
                    end: '+=500px',
                    scrub: 3,
                },
                opacity: 1,
                y: 0,
                stagger: 1
            })

            gsap.fromTo('.slogan__img', {
                opacity: 0,
                x: 300
            }, {
                scrollTrigger: {
                    trigger: '.slogan__img',
                    start: '30% bottom'
                },
                opacity: 1,
                x: 0,
                stagger: {
                    each: 0.2
                }
            })
        }
    }
</script>

<style lang="scss">
    @use "@/assets/styles/vareables.scss" as s;
    @use "@/assets/styles/containers.scss" as c;

    .slogan {
        background: s.$grayBg;
        padding-bottom: 60px;

        &__content {
            text-align: center;
            display: flex;
            align-items: center;
            flex-direction: column;
            flex-wrap: wrap;
            padding: 60px 0;
            overflow: hidden;
        }

        &__title {
            justify-content: center;
            max-width: 615px;
            width: 100%;
            line-height: 60px;

            @include c.media (c.$xs) {
                line-height: 30px;
            }

            &-mini {
                font-family: s.$im;
                font-size: 24px;
                line-height: 29px;
                color: s.$black;

                @include c.media (c.$big) {
                    font-size: 20px;
                }
            }

            &::after {
                display: none;
            }
        }

        &__text {
            font-family: s.$il;
            font-size: 20px;
            line-height: 24px;
            max-width: 550px;
            width: 100%;
            color: s.$grayText;
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-top: 40px;

            @include c.media (c.$xs) {
                font-size: 16px;
            }

            &-mini {
                font-family: s.$im;
                font-size: 20px;
                line-height: 24px;
                color: s.$grayText;
                margin: 15px 0 70px 0;

                @include c.media (c.$big) {
                    font-size: 16px;
                }
            }

            &-three {
                margin-bottom: 0;
            }

            &::after {
                content: '';
                display: block;
                margin-top: 10px;
                width: 100px;
                height: 3px;
                line-height: 60px;
                background: s.$orange;
                margin-top: 40px;
            }
        }

        &__container {
            display: flex;
            flex-direction: column;
            align-items: center;

            &-content {
                background: s.$white;
                max-width: 1240px;
                width: 100%;
                display: flex;
                flex-wrap: wrap;
                overflow: hidden;

                @include c.media (c.$preBig) {
                    justify-content: space-around;
                    padding: 50px 0;
                }
            }
        }

        &__item {
            max-width: 485px;
            width: 100%;
            display: flex;

            @include c.media (c.$big) {
                max-width: 440px;
            }

            @include c.media (c.$md) {
                padding: 0 15px;
            }

            &-text {
                margin-left: 50px;

                @include c.media (c.$xs) {
                    margin-left: 30px;
                }
            }

            &-icon {
                display: block;

                @include c.media (c.$big) {
                    max-width: 40px;
                }
            }
        }

        &__left {
            width: 50%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            @include c.media (c.$preBig) {
                max-width: 600px;
                width: 100%;
            }
        }

        &__one {
            margin-left: 35px;
        }

        &__img {
            max-width: 100%;
        }

        &__right {
            width: 50%;

            @include c.media (c.$preBig) {
                max-width: 600px;
                width: 100%;
                margin-top: 50px;
            }
        }
    }
</style>