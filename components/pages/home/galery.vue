<template>
    <section class="galery">
        <div class="container">
            <div class="galery__tagline">
                <h2 class="title-light galery__title">Галерея наших работ</h2>
                <div class="galery__container-tagline">
                    <div class="galery__container-row">
                        <div class="galery__container-text">
                            <p class="galery__text">Мы любим делать фотографии наших работ. Таким образом мы показываем наше качество, повышая доверие к нашей фирме.</p>
                            <nuxt-link to="/galery" class="button-big galery__button">Больше</nuxt-link>
                        </div>
                        <div class="galery__tagline-content">
                            <div class="galery__top">
                                <h3 class="galery__number">30+</h3>
                                <p class="galery__text-top">Фотографий</p>
                            </div>
                            <div class="galery__container-subtitle">
                                <h3 class="galery__subtitle">Символ завершенных работ</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="galery__photos">
                <div class="galery__container-photos">
                    <div class="galery__item" v-for="photo in photos" :key="photo">
                        <img :src="photo" alt="Фото компании" class="galery__photo">
                        <div class="galery__photo-bg"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

    export default {
        data: () => ({
            photos: [
                require('@/assets/images/pages/home/galery/Rectangle 20.png'),
                require('@/assets/images/pages/home/galery/Rectangle 19.png'),
                require('@/assets/images/pages/home/galery/Rectangle 15.png'),
                require('@/assets/images/pages/home/galery/Rectangle 17.png'),
                require('@/assets/images/pages/home/galery/Rectangle 16.png'),
            ]
        }),
        mounted () {
            gsap.registerPlugin(ScrollTrigger);

            gsap.from('.galery__text', {
                scrollTrigger: {
                    trigger: '.galery__text',
                    start: 'bottom bottom',
                },
                opacity: 0,
                lazy: false,
                x: -300,
            });

            gsap.from('.galery__button', {
                scrollTrigger: {
                    trigger: '.galery__button',
                    start: 'bottom bottom',
                },
                opacity: 0,
                lazy: false,
                x: -300,
            });

            gsap.from('.galery__top', {
                scrollTrigger: {
                    trigger: '.galery__top',
                    start: 'bottom bottom',
                },
                opacity: 0,
                lazy: false,
                x: -300,
            });

            gsap.from('.galery__subtitle', {
                scrollTrigger: {
                    trigger: '.galery__subtitle',
                    start: 'bottom bottom',
                },
                opacity: 0,
                lazy: false,
                x: -300,
            });
        }
    }
</script>

<style lang="scss">
    @use "@/assets/styles/vareables.scss" as s;
    @use "@/assets/styles/containers.scss" as c;

    .galery {
        background: s.$darkBg;
        padding: 50px 0;

        &__container {
            &-tagline {
                display: flex;
                justify-content: flex-end;
                padding-bottom: 60px;
                border-bottom: 3px solid s.$gray;
                flex-wrap: wrap;

                @include c.media (c.$big) {
                    margin-top: 50px;
                }
            }

            &-text {
                @include c.media (c.$md) {
                    display: flex;
                    justify-content: center;
                    flex-wrap: wrap;
                }

            }

            &-row {
                max-width: 1010px;
                width: 100%;
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;

                @include c.media (c.$md) {
                    justify-content: center;
                }
            }

            &-photos {
                display: flex;
                justify-content: space-between;
                flex-wrap: wrap;
                
                @include c.media (c.$big) {
                    justify-content: space-around;
                }
            }
        }

        &__item {
            margin-top: 50px;
            position: relative;
            overflow: hidden;
            border-radius: 11px;
            
            @include c.media (c.$md) {
                display: flex;
                justify-content: center;
            }

            @include c.media (c.$big) {
                &:nth-of-type(2) {
                    max-width: 700px;
                }
            }
        }

        &__tagline {
            &-content {
                display: flex;
                align-items: flex-end;
                max-width: 520px;
                width: 100%;
                justify-content: space-between;
                flex-wrap: wrap;

                @include c.media (c.$md) {
                    max-width: 420px;
                    justify-content: center;
                }
            }
        }

        &__photo {
            width: 100%;
            transition: 500ms;
            transform: scale(1.1);
            
            &:hover {
                transform: scale(1.0);

                &-bg {
                    background: rgba(0, 0, 0, 0.466);
                    width: 100%;
                    height: 100%;
                }
            }
        }

        &__title {
            max-width: 450px;
            width: 100%;
        }

        &__text {
            font-family: s.$im;
            font-size: 20px;
            line-height: 24px;
            color: s.$white;
            max-width: 415px;
            width: 100%;

            &-top {
                font-family: s.$ib;
                font-size: 24px;
                line-height: 50px;
                color: s.$white;
            }
        }

        &__button {
            margin-top: 30px;
            display: inline-block;
            transition: 500ms;

            &:hover {
                background: s.$white;
                color: s.$darkBg;
            }
        }

        &__top {
            border: 3px solid s.$gray;
            border-radius: 100%;
            width: 230px;
            height: 230px;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            flex-direction: column;

            animation: jumper linear 2s infinite;
            cursor: pointer;
            transition: 500ms;

            &:hover {
                border: 3px solid s.$white;
            }

            @include c.media (c.$md) {
                margin: 50px 0;
            }
        }

        &__number {
            font-family: s.$hb;
            font-size: 64px;
            line-height: 60px;
            color: s.$white;
        }

        &__subtitle {
            font-family: s.$ib;
            font-size: 24px;
            line-height: 30px;
            color: s.$white;
            max-width: 265px;

            &::after {
                content: '';
                display: block;
                margin-top: 10px;
                width: 100%;
                height: 3px;
                line-height: 60px;
                background: s.$orange;
            }
        }
    }

    .galery__item:hover {
        .galery__photo-bg {
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.606);
        }
    } 
</style>