<template>
    <section class="working">
        <div class="container">
            <h2 class="title-light working__title">Как мы делаем ремонт?</h2>
            <div class="working__container">
                <div class="working__item" v-for="item in items" :key="item">
                    <h3 class="working__number"><span>{{ item.number }}</span><span class="working__line"></span></h3>
                    <div class="working__container-item">
                        <div class="working__container-item-content">
                            <h4 class="working__title-item">{{ item.title }}</h4>
                            <p class="working__text">{{ item.text }}</p>
                            <div class="working__container-img">
                                <img :src="item.icon" alt="Большая иконка" class="working__img">
                            </div>
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
                    number: '01',
                    title: 'Диагностика',
                    text: 'Диагностика вашей поломки и установление причины.',
                    icon: require('@/assets/images/pages/about/icons/1.svg')
                },
                {
                    number: '02',
                    title: 'Договоренность',
                    text: 'Установление сроков, обсуждений цен, заключение договора.',
                    icon: require('@/assets/images/pages/about/icons/2.svg')
                },
                {
                    number: '03',
                    title: 'Ремонт',
                    text: 'Выполнение всех работ, согласно описанным в договоре.',
                    icon: require('@/assets/images/pages/about/icons/3.svg')
                },
                {
                    number: '04',
                    title: 'Выдача',
                    text: 'Выдача готового продукта заказчику.',
                    icon: require('@/assets/images/pages/about/icons/4.svg')
                }
            ]
        })
    }
</script>

<style lang="scss">
    @use "@/assets/styles/vareables.scss" as s;
    @use "@/assets/styles/containers.scss" as c;

    .working {
        background: s.$darkBg;
        padding: 100px 0;

        &__container {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;

            @include c.media (c.$big) {
                justify-content: space-around;
            }

            &-item {
                width: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;

                &-content {
                    @include c.media (c.$xs) {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                    }
                }
            }

            &-img {
                border: 3px solid s.$grayText;
                border-radius: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 100px 0;
                margin-bottom: 50px;
                animation: jumper linear 2s infinite;
                cursor: pointer;
                transition: 500ms;

                &:hover {
                    border: 3px solid s.$white;
                }

                @include c.media (c.$xs) {
                    width: 250px;
                    height: 250px;
                    padding: 0;
                }
            }
        }

        &__line {
            display: inline-block;
            width: 100%;
            background: s.$orange;
            height: 3px;
        }

        &__number {
            font-family: s.$hb;
            font-size: 48px;
            line-height: 60px;
            color: s.$orange;
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
            margin-bottom: 30px;
        }

        &__title {
            margin-bottom: 50px;
            max-width: 500px;

            &-item {
                color: s.$white;
                font-family: s.$rm;
                font-size: 32px;
                line-height: 60px;
                max-width: 250px;
            }
        }

        &__text {
            color: s.$grayText;
            font-family: s.$ir;
            font-size: 20px;
            line-height: 24px;
            max-width: 300px;
            margin: 30px 0;
            height: 72px;

            @include c.media (c.$xs) {
                text-align: center;
            }
        }

        &__item {
            @include c.media (c.$big) {
                margin: 0 100px;
            }
        }
    }

    @keyframes jumper {
        0% {
            transform: translateY(10px);
        }
        50% {
            transform: translateY(-10px);
        }
        100% {
            transform: translateY(10px);
        }
    }
</style>