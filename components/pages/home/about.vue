<template>
    <sectiom class="about">
        <div class="container">
            <div class="about__container">
                <div class="about__left">
                    <h2 class="about__title title">Кратко о компании Autoshic</h2>
                    <p class="about__text">Мы компания - Autoshic, которая специализируется, на кузовном ремонте легковых автомобилей. В нашу команду, проходят специалисты с многолетним опытом, для того чтобы мы могли гарантировать качество нашим клиентам. Мы предлагаем относительно недорогую цену, которая всем придется по душе.</p>
                </div>
                <div class="about__right">
                    <img class="about__img" src="@/assets/images/pages/home/about/about.webp" alt="Фотография">
                </div>
            </div>
        </div>
    </sectiom>
</template>

<script>
    import gsap from 'gsap';
    import ScrollTrigger from 'gsap/dist/ScrollTrigger';

    export default {
        mounted () {
            gsap.registerPlugin(ScrollTrigger);

            gsap.fromTo('.about__left', {
                x: -100,
                opacity: 0
            }, {
                scrollTrigger: {
                    trigger: '.about__left',
                    start: 'bottom bottom'
                },
                
                x: 0,
                opacity: 1
            })

            gsap.fromTo('.about__right', {
                x: 300,
                opacity: 0
            }, {
                scrollTrigger: {
                    trigger: '.about__right',
                    start: 'bottom bottom'
                },

                x: 0,
                opacity: 1
            })
        } 
    }

</script>

<style lang="scss">
    @use "@/assets/styles/vareables.scss" as s;
    @use "@/assets/styles/containers.scss" as c;

    .about {
        &__title {
            max-width: 640px;
            width: 100%;
            @include c.media (c.$lg) {
                max-width: 530px;
            }
        }

        &__container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            margin-bottom: 100px;
            overflow: hidden;
        }

        &__text {
            font-family: s.$ir;
            font-size: 24px;
            line-height: 29px;
            color: s.$darkText;
            max-width: 640px;
            width: 100%;
            margin-top: 70px;
            
            @include c.media (c.$lg) {
                margin-top: 40px;
                font-size: 20px;
                max-width: 530px;
                line-height: normal;
            }

            @include c.media (c.$md) {
                margin-bottom: 50px;
            }

            @include c.media (c.$xs) {
                font-size: 18px;
                text-align: justify;
            }
        }

        &__img {
            @include c.media (c.$lg) {
                max-width: 530px;
                width: 100%;
            }
        }
    }
</style>