<template>
    <section class="questions">
        <div class="container">
            <div class="questions__container">
                <h2 class="title questions__title">Часто задаваемые вопросы</h2>
                <div class="questions__accordion">
                    <div class="questions__accordion-container">
                        <div class="questions__accordion-item" v-for="(question, index) in questions" :key="question">
                            <div class="questions__title-container" @click="$event => showAccordion($event, index)">
                                <h3 class="questions__title-answer">{{ question.question }}</h3>
                            </div>
                            <div class="questions__text-container" ref="aswer">
                                <p class="questions__text">{{ question.answer }}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <p class="link-text">Если у вас остались еще вопросы, то вы можете связаться <a class="link" href="tel:+79501211278">с нами</a></p>
            </div>
        </div>
    </section>
</template>

<script>

    export default {
        data: () => ({
            questions: [
                {
                    question: 'В какой срок вы осуществляете работу?',
                    answer: 'Для каждого клиента, сроки индивидуальны. Все деликатные вопросы будут обсуждаться по телефону.'
                },
                {
                    question: 'Где находится ваша мастерская?',
                    answer: 'Мы находимся: город Томск, Лениский район, мкр. Черемошники, ул. Краснодоская, 24.'
                },
                {
                    question: 'В какую цену встанет мне мой заказ?',
                    answer: 'Цена заказа обсуждается в договоре с клиентом. На нашем сайте в разделе “Услуги” расписаны все наши виды услуг и их стоимость. '
                },
                {
                    question: 'Как я могу связаться с вами?',
                    answer: 'Вы можете связаться с нами по номеру: +7 (950) 121-12-78 или оставить заявку на сайте.'
                },
            ] 
        }),

        methods: {
            showAccordion (event, index) {
                const answer = [...this.$refs.aswer];

                const clickIndex = index;

                for (let i = 0; i < answer.length; i++) {
                    if (clickIndex === i) {
                        answer[i].classList.toggle('show-text');
                    }
                }
            }
        }
    }

</script>

<style lang="scss">
    @use "@/assets/styles/vareables.scss" as s;
    @use "@/assets/styles/containers.scss" as c;

    .questions {
        background: s.$grayBg;
        padding: 50px 0;

        &__accordion {
            background: s.$white;
            max-width: 1010px;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: 50px 0;

            &-container {
                max-width: 700px;
                width: 100%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                padding: 50px 0;
            }

            &-item {
                width: 100%;

                @include c.media (c.$md) {
                    padding: 0 15px;
                }
            }
        }

        &__container {
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        &__title {
            max-width: 600px;
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;

            &-container {
                width: 100%;
                background: s.$grayBg;
                outline: s.$orange;
                border: 1px solid s.$gray;
                border-radius: 11px;
                margin-bottom: 50px;
                min-height: 70px; 
                display: flex;
                align-items: center;
                cursor: pointer;

                &:hover {
                    border: 1px solid s.$orange;
                }

                @include c.media (c.$md) {
                    max-width: 100%;
                    width: 100%;
                }
                @include c.media (c.$xs) {
                    height: 60px;
                    font-size: 20px;
                    margin-bottom: 30px;
                }
            }

            &-answer {
                padding: 0 30px;
                font-family: s.$im;
                font-size: 24px;
                line-height: 29px;
                padding: 20px 30px;

                @include c.media (c.$md) {
                    max-width: 100%;
                    width: 100%;
                }
                @include c.media (c.$xs) {
                    font-size: 16px;
                    line-height: normal;
                }
            }
        }

        &__text {
            &-container {
                height: 0;
                overflow: hidden;
                transition: 500ms;
                font-family: s.$ir;
                font-size: 20px;
                line-height: 24px;
                color: #737375;

                @include c.media (c.$xs) {
                    font-size: 16px;
                    line-height: normal;
                    margin-bottom: 10px;
                }
            }
        }
    }

    .show-text {
        height: 80px;
        transition: 500ms;
    }
</style>