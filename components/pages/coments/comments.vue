<template>
    <section class="comments">
        <div class="container">
            <h2 class="title-light comments__title">Все отзывы о нашей компании</h2>
            <div class="comments__container-form">
                <form action="/server-api/comments/" class="comments__form" ref="form">
                     <div class="g-recaptcha" data-sitekey="your_site_key"></div>
                    <input type="text" class="comments__input" placeholder="Ваше имя" ref="firstName">
                    <input type="text" class="comments__input" placeholder="Ваша фамилия" ref="lastName">
                    <textarea type="text" class="comments__input comments__messagefiled" ref="message" placeholder="Ваше сообщение"></textarea>
                    <button class="button-big comments__button">Отправить</button>
                </form>
            </div>
            <div class="comments__container-content">
                <div class="comments__item" 
                v-for="(comment, index) in comments" 
                :key="comment.id" v-if="index < defaultNumberOfComments">
                    <div class="comments__container-item">
                        <h3 class="comments__username">
                            <span>{{ comment.firstName }}</span>
                            <span>{{ comment.lastName }}</span>
                        </h3>
                        <p class="comments__text">{{ comment.text }}</p>
                        <span class="comments__line"></span>
                    </div>
                </div>
            </div>
            <p class="link-text"><span href="" class="link button-link" @click="addComments()">Загрузить больше</span></p>
        </div>
    </section>
</template>
 
<script>
    import axios from 'axios';

    export default {
        data: () => ({
            comments: [],
            defaultNumberOfComments: 3
        }),
        methods: {
            addComments () {
                this.defaultNumberOfComments += 3;
            }
        },
        mounted () {
            const URL = '/server-api/comments/';

            axios.get(URL)
                .then(response => (this.comments = response.data))
                .catch(errror => console.log(`У вас ошибка: ${errror}`));    


            this.$refs.form.addEventListener('submit', (e) => {
                e.preventDefault();

                const getData = {
                    firstName: this.$refs.firstName.value, 
                    lastName: this.$refs.lastName.value, 
                    message: this.$refs.message.value, 
                }

                console.log(getData.message.length);

                if (!getData.firstName || getData.firstName.length > 12) {
                    this.$refs.firstName.value = '';
                    this.$refs.firstName.setAttribute('placeholder', 'Не корректное имя');
                    this.$refs.firstName.classList.add('incorrect');
                }
                
                if (!getData.lastName || getData.lastName.length > 20) {
                    this.$refs.lastName.value = '';
                    this.$refs.lastName.setAttribute('placeholder', 'Не корректный номер');
                    this.$refs.lastName.classList.add('incorrect');
                }

                if (!getData.message) {
                    this.$refs.message.value = '';
                    this.$refs.message.setAttribute('placeholder', 'Пустое сообщение');
                    this.$refs.message.classList.add('incorrect');
                }

                if (getData.message.length > 150) {
                    this.$refs.message.value = '';
                    this.$refs.message.setAttribute('placeholder', 'Макс 150 символов');
                    this.$refs.message.classList.add('incorrect');
                }

                if (getData.message.length < 100) {
                    this.$refs.message.value = '';
                    this.$refs.message.setAttribute('placeholder', 'Мин 100 символов');
                    this.$refs.message.classList.add('incorrect');
                }

                if (getData.message.length < 150 && getData.message.length > 100 &&
                    getData.lastName && getData.lastName.length < 20 &&
                    getData.firstName && getData.firstName.length < 12) {
                    //работа этого большого условия тут
                    axios.post((URL), {data: getData})
                    location.reload(); 
                }
            })
        }
    }
</script>

<style lang="scss">
    @use "@/assets/styles/vareables.scss" as s;
    @use "@/assets/styles/containers.scss" as c;

    .comments {
        background: s.$darkBg;
        padding: 200px 0;

        @include c.media (c.$big) {
            padding: 100px 0;
        }

        &__container {
            &-form {
                display: flex;
                justify-content: center;
                width: 100%;
            }

            &-item {
                padding: 50px;
            }

            &-content {
                display: flex;
                flex-direction: column;
                align-items: center;
                width: 100%;
                margin-top: 50px;
            }
        }

        &__form {
            max-width: 800px;
            width: 100%;
            margin-top: 50px;
        }

        &__input {
            display: block;
            background: s.$white;
            padding: 25px 30px;
            width: 100%;
            border-radius: 11px;
            margin-bottom: 30px;
            outline: 0;
            font-family: s.$im;
            font-size: 24px;
            line-height: 29px;

            @include c.media (c.$md) {
                max-width: 100%;
                width: 100%;
            }
            @include c.media (c.$xs) {
                height: 60px;
                font-size: 20px;
                margin-bottom: 30px;
            }

            &:focus {
                border: 3px solid s.$orange;
            }
        }

        &__messagefiled {
            height: 200px;
        }

        &__title {
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        &__item {
            font-family: s.$rm;
            font-size: 20px;
            line-height: 26px;
            color: s.$white;
            background: s.$darkWindowItem;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 28px;
            margin-bottom: 30px;
        }

        &__text {
            max-width: 700px;
            @include c.media (c.$xs) {
                font-size: 16px;
            }
        }

        &__username {
            font-size: 32px;
            margin-bottom: 20px;

            @include c.media (c.$xs) {
                line-height: normal;
                font-size: 24px;
            }
        }

        &__line {
            display: block;
            width: 100%;
            background: s.$orange;
            height: 3px;
            margin: 30px 0 20px 0;
        }

        &__title {
            @include c.media (c.$xs) {
                line-height: normal;
            }
        }

        &__button {
            transition: 500ms;
            border: none;
            outline: none;
            cursor: pointer;

            &:hover {
                color: s.$darkBg;
                background: s.$white;
            }
        }
    }
</style>