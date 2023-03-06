<template>
    <section class="navbar">
        <div class="navbar__bg">
            <div class="container">
                <div class="navbar__container">
                    <div class="navbar__logo">
                        <nuxt-link to="/">
                            <img src="@/assets/images/logo/logo.svg" alt="Логотип" class="logo">
                        </nuxt-link>
                    </div>
                    <nav class="navbar__nav">
                        <ul class="navbar__container-nav">
                            <li v-for="(link, index) of links" :key="index">
                                <nuxt-link :to="link.path" class="navbar__link">
                                    {{ link.text }}
                                </nuxt-link>
                            </li>
                        </ul>
                    </nav>
                    <div class="navbar__burgermenu">
                        <ul class="navbar__container-burgermenu" ref="container" @click="toggleNavbar()">
                            <li class="navbar__button" ref="first"></li>
                            <li class="navbar__button" ref="hidden"></li>
                            <li class="navbar__button" ref="second"></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="navbar__modal" ref="modal">
            <ul class="navbar__container-modal">
                <li v-for="(link, index) of links" :key="index" class="modal__li">
                    <nuxt-link :to="link.path" class="navbar__link-modal">
                        <img :src="link.icon" :alt="link.text" class="icon">
                         {{ link.text }}
                    </nuxt-link>
                </li>
            </ul>
        </div>
    </section>
</template>

<script>

    export default {
        data: () => ({
            links: [
                {
                    text: 'Главная',
                    path: '/',
                    icon: require('@/assets/images/icons/home.svg')
                },
                {
                    text: 'О нас',
                    path: '/about',
                    icon: require('@/assets/images/icons/about.svg')
                },
                {
                    text: 'Галерея',
                    path: '/galery',
                    icon: require('@/assets/images/icons/galery.svg')
                },
                {
                    text: 'Услуги',
                    path: 'catalog',
                    icon: require('@/assets/images/icons/catalog.svg')
                },
                {
                    text: 'Отзывы',
                    path: 'coments',
                    icon: require('@/assets/images/icons/comments.svg')
                },
                {
                    text: 'Контакты',
                    path: '/contacts',
                    icon: require('@/assets/images/icons/contacts.svg')
                },
            ]
        }),
        mounted () {
                this.$nextTick(() => {
                this.$nuxt.$loading.start();
                setTimeout(() => this.$nuxt.$loading.finish(), 500);
            })
        },
        methods: {
            toggleNavbar () {
                const classState = 'active';
                const modalState = 'active__modal';

                let firstButton = this.$refs.first;
                let hiddenButton = this.$refs.hidden;
                let secondButton = this.$refs.second;

                let modal = this.$refs.modal;
                
                hiddenButton.classList.toggle(classState);
                firstButton.classList.toggle(classState);
                secondButton.classList.toggle(classState);

                modal.classList.toggle(modalState);
            }
        }
    }

</script>

<style lang="scss" scoped>
    @use "@/assets/styles/vareables.scss" as s;
    @use "@/assets/styles/containers.scss" as c;
    .navbar {
        position: fixed;
        z-index: 999;
        top: 0;
        left: 0;
        width: 100%;

        &__bg {
            background: s.$black;
        }

        &__container {
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;

            &-nav {
                display: flex;
            }

            &-burgermenu {
                display: none;

                @include c.media (c.$preBig) {
                    display: block;
                    height: 30px;
                    width: 50px;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    position: relative;
                }

                @include c.media (c.$sm) {
                    width: 30px;
                    height: 20px;
                }
            }

            &-modal {
                width: 80%;
                height: calc(100vh - 82px);
                background: s.$darkBg;
                position: absolute;
                right: 0;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;

                @include c.media (c.$sm) {
                    height: calc(100vh - 62px);
                }
            }   
        }

        &__nav {
            @include c.media (c.$preBig) {
                display: none;
            }
        }

        &__burgermenu {
            display: none;

            @include c.media (c.$preBig) {
                display: block;
            }
        }

        &__button {
            width: 100%;
            height: 2px;
            background: s.$white;
            transition: 500ms;

            &:nth-of-type(2) {
                width: 50%;
            }
        }

        &__modal {
            transform: translateX(100%);
            transition: 300ms;

            &-text {
                display: block;
                font-family: s.$rm;
                font-size: 20px;
                line-height: 23px;
                color: s.$white;
            }
        }

        &__link {
            display: block;
            font-family: s.$rm;
            font-size: 20px;
            line-height: 23px;
            color: s.$white;
            transition: 500ms;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding-left: 68px;

            &::after {
                content: '';
                display: block;
                width: 0;
                height: 2px;
                background: s.$orange;
                margin-top: 5px;
            }

            &:hover {
                color: s.$orange;

                &::after {
                    width: 100%;
                    animation: afterMove linear 300ms;
                }
            }

            @include c.media (c.$lg) {
                font-size: 16px;
                padding-left: 38px;
            }

            &-modal {
                display: block;
                font-family: s.$rm;
                font-size: 20px;
                line-height: 23px;
                color: s.$white;
                transition: 500ms;
                padding: 20px 50px;
                border-bottom: 2px solid s.$orange;
                display: flex;
                align-items: center;
            }
        }
    }

    .active {
        &:nth-of-type(1) {
            position: absolute;
            top: 50%;
            transform: rotate(-45deg);                             
        }
        &:nth-of-type(2) {
            display: none; 
        }
        &:nth-of-type(3) {
            position: absolute;
            top: 50%;
            transform: rotate(45deg); 
        }

        &__modal {
            display: block;
            transform: translateX(0);
            transition: 300ms;
        }
    }

    .modal__li {
        width: 100%;
    }

    .icon {
        width: 30px;
        margin-right: 10px;
    }

    .move {
        animation: closeMove linear;
    }


    @keyframes afterMove {
        0% {
            width: 0%;
        }
        100% {
            width: 100%;
        }
    }
</style>