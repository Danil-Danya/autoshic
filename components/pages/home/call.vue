<template>
    <section class="call">
        <div class="container">
            <div class="call__content">
                <div class="call__content-container">
                    <h2 class="call__title">Вам точно к нам, если  нужно:</h2>
                    <div class="call__container">
                        <div class="call__item" v-for="item in items" :key="item">
                            <h3 class="call__item-title">{{ item.title }}</h3>
                            <p class="call__item-text">{{ item.text }}</p>
                            <nuxt-link to="/catalog" class="call__item-button button-mini" id="about">Подробнее</nuxt-link>
                        </div>
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
                    title: 'Покраска кузова',
                    text: 'У нашей команды большой опыт в кузовной покраске. Мы используем только сертифицированные продукты, для лучшего качества оказания услуги.'
                },
                {
                    title: 'Заплатка на элементе',
                    text: 'Если на какой-либо части вашего автомобиля было нанесено повреждение, наша команда всегда готова устранить его.'
                },
                {
                    title: 'Нанесение жидкого стекла',
                    text: 'Один из частых случаев, когда обращаются в нашу компанию - это нанесение жидкого стекла. Мы сделаем так, что ваш автомобиль будет блестеть.'
                }
            ]
        }),
        mounted () {
            gsap.registerPlugin(ScrollTrigger);

            if (window.innerWidth > 1000) {
                gsap.fromTo('.call__item', {
                    x: -50,
                    opacity: 0,
                    lazy: false
                }, {
                    scrollTrigger: {
                        trigger: '.call__item',
                        start: '30% 90%',
                        end: "+=300px",
                        scrub: 3,
                    },
                    lazy: false,
                    opacity: 1,
                    x: 0,
                    stagger: 1,
                    duration: 0.5,
                    ease: 'none'
                })
            }
            else {
                gsap.fromTo('.call__item', {
                    x: -50,
                    opacity: 0,
                    lazy: false
                }, {
                    scrollTrigger: {
                        trigger: '.call__item',
                        start: '30% 90%',
                        end: "+=700px",
                        scrub: 3,
                    },
                    lazy: false,
                    opacity: 1,
                    x: 0,
                    stagger: 1,
                    duration: 0.5,
                    ease: 'none'
                })
            }
        }
    }
</script>

<style lang="scss">
    @use "@/assets/styles/vareables.scss" as s;
    @use "@/assets/styles/containers.scss" as c;

    .call {
        position: relative;
        width: 100%;

        &__container {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;

            @include c.media (c.$preBig) {
                justify-content: center;
            }
        }

        &__content {
            max-width: 1530px;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 60px 0;
            position: relative;
            bottom: 100px;
            z-index: 2;
            background: s.$white;
            box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
            flex-wrap: wrap;

            @include c.media (c.$big) {
                max-width: 1110px;
            }

            
            
            &-container {
                background: s.$white;
                max-width: 1330px;
                width: 100%;

                @include c.media (c.$big) {
                    max-width: 990px;
                }
            }
        }

        &__title {
            font-family: s.$hr;
            font-weight: 400;
            font-size: 64px;
            color: s.$black;

            @include c.media (c.$big) {
                font-size: 48px;
                margin: 0 20px
            }
            @include c.media (c.$xs) {
                font-size: 32px;
            }
        }
        
        &__item {
            @include c.media (c.$xs) {
                margin: 0 20px;
            }
            &-title {
                margin-top: 40px;
                font-family: s.$im;
                font-size: 24px;
                color: s.$black;

                @include c.media (c.$md) {
                    font-size: 20px;
                }
            }

            &-text {
                font-family: s.$im;
                font-size: 20px;
                color: s.$grayText;
                max-width: 415px;
                width: 100%;
                margin: 20px 0 30px 0;

                @include c.media (c.$lg) {
                    font-size: 16px;
                    max-width: 330px;
                }
            }
        }
    }
</style>