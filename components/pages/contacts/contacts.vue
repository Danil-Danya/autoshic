<template>
    <section class="contacts">
        <div class="container">
            <div class="contacts__container">
                <div class="contacts__left">
                    <form action="/server-api/telgram-api-bot/" class="contacts__form" ref="form">
                        <input type="text" placeholder="Ваше имя" class="contacts__input" ref="name">
                        <input type="number" placeholder="Ваш телефон" class="contacts__input" ref="tell">
                        <select class="contacts__input order__long" ref="order">
                            <option>Выбирите услугу</option>
                            <option 
                            :value="order.title"
                            v-for="order in getSelectOptions" 
                            :key="order.title">
                                {{ order.title }}
                            </option>
                            <option value="Не знаю">Не знаю</option>
                        </select>
                        <textarea placeholder="Ваше сообщение" id="" ref="message" class="contacts__messagefield contacts__input"></textarea>
                        <button class="button-big order__button">Отправить</button>
                    </form>
                </div>
                <div class="contacts__right">
                    <div class="contacts__adres contacts__container-text">
                        <p class="contacts__text">Наш адрес:</p>
                        <span class="contacts__element contacts__adres-text">Город Томск, Лениский район, мкр. Черемошники, ул. Краснодоская, 24</span>
                    </div>
                    <div class="contacts__cocial">
                        <div class="contacts__container-text contacts__container-one">
                            <p class="contacts__text">Наш номер:</p>
                            <a href="tel:+79501211278" class="contacts__element contacts__link">+7 (950) 121-12-78</a>
                        </div>
                        <div class="contacts__container-text">
                            <p class="contacts__text">Наша почта:</p>
                            <a href="mailto:25zhosansergey01@mail.ru" class="contacts__element contacts__link">25zhosansergey01@mail.ru</a>
                        </div>
                    </div>
                    <div class="contacts__time contacts__container-text">
                        <p class="contacts__text">Рабочее время:</p>
                        <span class="contacts__element">с 10:00 до 19:00</span>
                    </div>
                    <div class="contacts__container-icons">
                        <ul class="contacts__icon-ul">
                            <li v-for="icon in icons" :key="icon">
                                <a :href="icon.link" class="contscts__icon">
                                    <img :src="icon.path" alt="" class="comtacts__icon">
                                </a>
                            </li>
                        </ul>
                    </div>
                    <p class="link-text galery__link">Заказать разработку сайта можно <a class="link" href="https://t.me/DanielS_web">здесь</a></p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import axios from 'axios'
    export default {
        data: () => ({
            icons: [
                {
                    link: 'https://api.whatsapp.com/send?phone=79501211278',
                    path: require('@/assets/images/icons/footer/whatsapp.svg')
                },
                {
                    link: 'https://t.me/+oiwSLcP0H1U2YmIy',
                    path: require('@/assets/images/icons/footer/vk.svg')
                },
                {
                    link: 'https://vk.com/public219121260',
                    path: require('@/assets/images/icons/footer/telegram.svg')
                },
            ]
        }),
        mounted () {
            this.$refs.form.addEventListener('submit', (e) => {
                e.preventDefault();

                const URL = '/server-api/telgram-api-bot/';

                console.log(this.$refs.order.value);

                const getData = {
                    name: this.$refs.name.value, 
                    tell: this.$refs.tell.value, 
                    message: this.$refs.message.value, 
                    order: this.$refs.order.value
                }

                if (!getData.name || getData.name.length > 12) {
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

                if (getData.name && getData.message && getData.tell) {
                    axios.post((URL), {data: getData,})
                    location.reload();
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

    .contacts {
        background: s.$grayBg;
        padding: 200px 0;

        &__container {
            display: flex;
            justify-content: space-around;
            background: s.$white;
            flex-wrap: wrap;
            padding: 0 15px;

            &-text {
                width: 600px;
                display: flex;
                justify-content: space-between;
                margin-bottom: 50px;

                @include c.media (c.$md) {
                    width: 500px;
                }
                @include c.media (c.$xs) {
                    max-width: 390px;
                    width: 100%;
                    flex-wrap: wrap;
                }
            }

            &-one {
                margin-bottom: 0;
            }
        }

        &__left {
            flex-wrap: wrap;
            padding: 60px 0;
        }

        &__title {
            max-width: 500px;
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            margin-bottom: 100px;
        }

        &__right {
            padding: 60px 0;

            @include c.media (c.$md) {
                display: flex;
                flex-direction: column;
            }
        }

        &__form {
            display: block;
            max-width: 390px;
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
            height: 60px;
            padding: 0 30px;
            background: s.$grayBg;
            outline: s.$orange;
            border: 1px solid s.$gray;
            border-radius: 11px;
            font-family: s.$im;
            font-size: 20px;
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
            display: block;
            max-width: 390px;
            width: 100%;
            height: 200px;
            padding: 30px;

            @include c.media (c.$xs) {
                height: 150px !important;
                padding-top: 20px !important;
            }
        }

        &__long {
            max-width: 390px;
            width: 100%;
            appearance: none;   
        }

        &__button {
            display: inline-block;
            border: none;
            transition: 500ms;

            &:hover {
                background: s.$darkBg;
                cursor: pointer;
            }
        }

        &__icon {
            &-ul {
                display: flex;
                width: 240px;
                justify-content: space-between;
            }
        }

        &__text {
            font-family: s.$im;
            font-size: 24px;
            line-height: 29px;
            max-width: 200px;

            @include c.media (c.$md) {
                font-size: 20px;
            }
            @include c.media (c.$xs) {
                font-size: 16px;
            }
        }
        
        &__element {
            display: inline-block;
            font-family: s.$im;
            font-size: 20px;
            line-height: 24px;
            width: 380px;

            color: s.$grayText;

            @include c.media (c.$md) {
                font-size: 16px;
                max-width: 220px;
                width: 100%;
            }
        }

        &__adres {
            &-text {
                max-width: 380px;

                @include c.media (c.$md) {
                    font-size: 16px;
                    max-width: 300px;
                    width: 100%;
                }
            }
        }
    }

</style>