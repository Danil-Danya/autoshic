<template>
    <sectiom class="about">
        <div class="container">
            <div class="about__container about__desktop">
                <div class="about__left">
                    <img class="about__img" src="@/assets/images/pages/about/about-reversed.png" alt="Фотография">
                </div>
                <div class="about__right">
                    <h2 class="about__title title">Кузовной ремонт - наша специальность</h2>
                    <p class="about__text">Кузов – основа любого транспортного средства. В процессе эксплуатации автомобиля он испытывает различные нагрузки и механические воздействия. Царапины, вмятины, нарушение геометрии, деформации – все это существенно ухудшает внешний вид авто. Наша компания специализируется на данном виде ремонта и всегда рада помочь вам.</p>
                    <nuxt-link to="/catalog" class="button-big about__button">К услугам</nuxt-link>
                </div>
            </div>
            <div class="about__container about__mobile">
                <div class="about__left">
                    <h2 class="about__title title">Кузовной ремонт - наша специальность</h2>
                    <p class="about__text">Кузов – основа любого транспортного средства. В процессе эксплуатации автомобиля он испытывает различные нагрузки и механические воздействия. Царапины, вмятины, нарушение геометрии, деформации – все это существенно ухудшает внешний вид авто. Наша компания специализируется на данном виде ремонта и всегда рада помочь вам.</p>
                    <nuxt-link to="/catalog" class="button-big about__button">К услугам</nuxt-link>
                </div>
                <div class="about__right">
                    <img class="about__img" src="@/assets/images/pages/about/about-reversed.png" alt="Фотография">
                </div>
            </div>
        </div>
    </sectiom>
</template>

<script>
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

export default {
    mounted () {
        gsap.registerPlugin(ScrollTrigger);

        gsap.fromTo('.about__left', {
            scrollTrigger: '.about__left',
            x: -100,
            opacity: 0,
            scrub: 3
        }, {
             x: 0,
            opacity: 1,
            stagger: 1
        }, 2)

        gsap.fromTo('.about__right', {
            scrollTrigger: '.about__right',
            x: 100,
            opacity: 0,
            scrub: 3
        }, {
            x: 0,
            opacity: 1,
            stagger: 1
        }, 2)
    }
} 


</script>

<style lang="scss">
    @use "@/assets/styles/vareables.scss" as s;
    @use "@/assets/styles/containers.scss" as c;

    .about {
        &__button {
            display: inline-block;
            margin-top: 30px;

            @include c.media (c.$md) {
                margin-bottom: 30px;
            }

            &:hover {
                background: s.$darkBg;
            }
        }

        &__desktop {
            @include c.media (c.$md) {
                display: none !important;
            }
        }

        &__mobile {
            display: none !important;
            @include c.media (c.$md) {
                display: block !important;
            }
        }
    }
</style>