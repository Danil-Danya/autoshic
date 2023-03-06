<template>
    <div class="container">
        <div class="footer__container">
            <div class="footer__left">
                <nuxt-link to="/">
                    <img src="@/assets/images/logo/logo.svg" alt="Логотип" class="logo">
                </nuxt-link>
            </div>
            <div class="footer__right">
                <div class="footer__number">
                    <a href="tel:+79501211278" class="footer__link">+7 (950) 121-12-78</a>
                </div>
                <div class="footer__icons">
                    <ul class="footer__icons-container">
                        <li>
                            <a href="https://api.whatsapp.com/send?phone=79501211278">
                                <img src="@/assets/images/icons/footer/whatsapp.svg" alt="Иконка" class="footer__link-icon">
                            </a>
                        </li>
                        <li>
                            <a href="https://t.me/+oiwSLcP0H1U2YmIy">
                                <img src="@/assets/images/icons/footer/telegram.svg" alt="Иконка" class="footer__link-icon">
                            </a>
                        </li>
                        <li>
                            <a href="https://vk.com/public219121260">
                                <img src="@/assets/images/icons/footer/vk.svg" alt="Иконка" class="footer__link-icon vk">
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="footer__text-container">
                    <p class="footer__text">Сайт разработан в 2023</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    @use "@/assets/styles/vareables.scss" as s;
    @use "@/assets/styles/containers.scss" as c;

    .footer {
        background: s.$black;

        &__container {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            align-items: center;

            @include c.media (c.$md) {
                justify-content: space-around;
                padding: 30px 0;
            }
        }
        
        &__right {
            max-width: 850px;
            width: 100%;
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;

            @include c.media (c.$lg) {
                width: 650px;
            }

            @include c.media (c.$md) {
                justify-content: space-around;
            }
        }

        &__icons {
            &-container {
                width: 230px;
                display: flex;
                justify-content: space-between;

                @include c.media (c.$lg) {
                    max-width: 200px;
                    width: 100%;
                }
            }
        }

        &__number {
            display: flex;
            align-items: center;
        }

        &__link {
            font-family: s.$rr;
            font-size: 24px;
            text-align: center;
            color: s.$white;
            transition: 500ms;

            @include c.media (c.$lg) {
                font-size: 16px;
            }

            &:hover {
                color: s.$orange;
            }

            &-icon {
                transition: 300ms;

                @include c.media (c.$lg) {
                    transform: scale(0.8);
                }

                &:hover {
                    transform: scale(1.1);
                }
            }
        }

        &__text {
            font-family: s.$rr;
            font-size: 24px;
            text-align: center;
            color: s.$white;

            @include c.media (c.$lg) {
                font-size: 16px;
            }

            &-container {
                display: flex;
                align-items: center;
            }
        }
    }
</style>