<template>
    <div class="header__container">
        <div class="header__bg">
            <div class="container">
                <div class="header__content">
                    <div class="header__container-content">
                        <h1 class="header__title">Кузовной ремнот легковых автомобилей</h1>
                        <p class="header__text">Мы автосервис в Томске. Наша компания предоставляет ряд услуг по кузовному ремонту. Команда наших опытных специалистов, быстро устранит вашу проблему.</p>
                        <a href="#about" class="header__button button-big">Начать</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import gsap from 'gsap';

    export default {
        mounted () {
            gsap.fromTo('.header__title', {
                x: -300,
                opacity: 0
            },{
                x: 0,
                opacity: 1,
                duration: 1
            },0.5);

            if (window.innerWidth > 1000) {
                gsap.fromTo('.header__text', {
                    x: 300,
                    opacity: 0
                },{
                    x: 0,
                    opacity: 1,
                    duration: 0.5
                },1)
            }
            else {
                gsap.fromTo('.header__text', {
                    opacity: 0
                },{
                    opacity: 1,
                    duration: 1
                },1)
            }


        } 
    }

</script>

<style lang="scss">
    @use "@/assets/styles/vareables.scss" as s;
    @use "@/assets/styles/containers.scss" as c;

    .header {
        &__container {
            background: url(@/assets/images/pages/home/header/header-bg.webp) no-repeat center center /cover;
            background-attachment: fixed;
            height: 100vh;
            margin-top: 120px;
            
            @include c.media (c.$big) {
                justify-content: center;
                margin-top: 60px;
            }

            &-content {
                display: flex;
                flex-direction: column;
                align-items: center;
            }
        }

        &__bg {
            background: rgba(0, 0, 0, 0.705);
            height: 100%;
        }

        &__content {
            width: 100%;
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        &__title {
            font-family: s.$ib;
            font-size: 96px;
            line-height: 90px;
            text-align: center;
            color: s.$white;
            max-width: 1150px;
            width: 100%;

            @include c.media (c.$lg) {
                font-size: 64px;
                max-width: 850px;
                line-height: normal;
            }
            @include c.media (c.$sm) {
                font-size: 48px;
                max-width: 850px;
                line-height: normal;
            }
            @include c.media (c.$xs) {
                font-size: 28px;
                max-width: 850px;
                line-height: normal;
            }
        }
        
        &__text {
            font-family: s.$rm;
            font-size: 24px;
            line-height: 28px;
            text-align: center;
            color: s.$white;
            max-width: 674px;
            margin: 70px 0 50px 0;

            @include c.media (c.$lg) {
                font-size: 20px;
            }

            @include c.media (c.$xs) {
                font-size: 16px;
                line-height: normal;
            }
        }

        &__button {
            &:hover {
                background: s.$darkBg;
            }
        }
    }
</style>