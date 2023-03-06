<template>
    <section class="order">
        <div class="container">
            <div class="order__container">
                <h2 class="title order__title">Оставьте нам заявку</h2>
                <div>
                    <form method="POST" action="/server-api/telgram-api-bot/" class="order__form" ref="form">
                        <input type="text" placeholder="Ваше имя" class="order__input" ref="name">
                        <input type="number" placeholder="Ваш телефон" class="order__input" ref="tell">
                        <select class="order__input order__long" ref="order">
                            <option>Выбирите услугу</option>
                            <option 
                            :value="order.title"
                            v-for="order in getSelectOptions" 
                            :key="order.title">
                                {{ order.title }}
                            </option>
                            <option value="Не знаю">Не знаю</option>
                        </select>
                        <textarea placeholder="Ваше сообщение" id="" ref="message" class="order__messagefield order__input"></textarea>
                        <button class="button-big g-recaptcha order__button"
                        >
                        Отправить
                        </button>
                    </form>
                </div>
                <div class="form-group">
              </div>
            </div>
        </div>
    </section>
</template>

<script>
    import axios from 'axios';

    export default {
        mounted () {
            this.$refs.form.addEventListener('submit', (e) => {
                e.preventDefault();

                const URL = '/server-api/telgram-api-bot/';

                const getData = {
                    name: this.$refs.name.value, 
                    tell: this.$refs.tell.value, 
                    message: this.$refs.message.value, 
                    order: this.$refs.order.value
                }

                if (!getData.name || getData.name.length >= 12) {
                    this.$refs.name.value = '';
                    this.$refs.name.setAttribute('placeholder', 'Не корректное имя');
                    this.$refs.name.classList.add('incorrect');
                }
                
                if (!getData.tell || getData.tell.length > 11) {
                    this.$refs.tell.value = '';
                    this.$refs.tell.setAttribute('placeholder', 'Не корректный номер');
                    this.$refs.tell.classList.add('incorrect');
                }

                if (!getData.message) {
                    this.$refs.message.value = '';
                    this.$refs.message.setAttribute('placeholder', 'Пустое сообщение');
                    this.$refs.message.classList.add('incorrect');
                }

                if (getData.name.length < 9 && getData.message && getData.tell.length <= 12) {
                    try {
                        axios.post((URL), {data: getData,})
                        location.reload();
                    }
                    catch (error) {
                        console.log(`У вас ошибка на клиенте: [${error}]`);
                    }
                }
            }) 
        },
        computed: {
            getSelectOptions () {
                return this.$store.getters['catalog/getCatalog'];
            }
        }
    }
</script>

<style lang="scss">
    @use "@/assets/styles/vareables.scss" as s;
    @use "@/assets/styles/containers.scss" as c;

    .order {
        padding: 50px 0;
        &__container {
            display: flex;
            flex-direction: column;
            align-items: center;
            flex-wrap: wrap;
        }

        &__title {
            max-width: 500px;
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            margin-bottom: 100px;
        }

        &__form {
            display: block;
            max-width: 810px;
            width: 100%;
            display: flex;
            /* flex-direction: column; */
            justify-content: space-between;
            flex-wrap: wrap;
        }

        &__input {
            display: block;
            max-width: 390px;
            width: 100%;
            height: 70px;
            padding: 0 30px;
            background: s.$grayBg;
            outline: s.$orange;
            border: 1px solid s.$gray;
            border-radius: 11px;
            font-family: s.$im;
            font-size: 24px;
            line-height: 29px;
            margin-bottom: 50px;

            @include c.media (c.$md) {
                max-width: 100%;
                width: 100%;
            }
            @include c.media (c.$xs) {
                height: 60px;
                font-size: 20px;
                margin-bottom: 30px;
            }

            &::placeholder {
                color: s.$black;
            }

            &:focus {
                border: 1px solid s.$orange;
            }
        }

        &__messagefield {
            max-width: 810px;
            width: 100%;
            height: 300px;
            padding: 30px;

            @include c.media (c.$xs) {
                height: 200px;
            }
        }

        &__long {
            max-width: 810px;
            width: 100%;
            appearance: none;   
        }

        &__button {
            border: none;
            transition: 500ms;

            &:hover {
                background: s.$darkBg;
                cursor: pointer;
            }
        }
    }

    .incorrect {
        background: #fff;
        border: 3px solid s.$red;
        padding: 30px;
        &::placeholder {
            color: s.$red;
        }
    }

</style>