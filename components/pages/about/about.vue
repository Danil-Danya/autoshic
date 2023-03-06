<template>
    <sectiom class="about about__page">
        <div class="container">
            <div class="about__container">
                <div class="about__left">
                    <h2 class="about__title title">О нашей компании Autoshic</h2>
                    <p class="about__text">Autoshic, которая специализируется, на кузовном ремонте легковых автомобилей. В нашу команду, проходят специалисты с многолетним опытом, для того чтобы мы могли гарантировать качество нашим клиентам. Наша цель - это создать сервис с идеальным обслуживанием, где клиент может чувствовать себя комфортно, доверять, и на выходе получать хорошо выполненную работу.</p>
                </div>
                <div class="about__right">
                    <img class="about__img" src="@/assets/images/pages/about/about.png" alt="Фотография">
                </div>
            </div>
        </div>
    </sectiom>
</template>

<style lang="scss">
    @use "@/assets/styles/vareables.scss" as s;
    @use "@/assets/styles/containers.scss" as c;

    .about {
        &__page {
            display: block;
            margin: 150px 0;

            @include c.media (c.$xs) {
                margin: 100px 0;
            }
        }
    }
</style>