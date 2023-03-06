<template>
    <section class="product-popular">
        <div class="container">
            <div class="product__container">
                <h2 class="title product__title">Наши популярные услуги</h2>
                <div class="product__content">
                    <div class="product__item" 
                    v-for="(product, index) of getCatalog" 
                    :key="product"
                    v-if="index < 3">
                        <div class="product__container-img">
                            <img :src="product.image" :alt="`Услуга №${index + 1}`" class="product__img">
                        </div>
                        <div class="product__container-text">
                            <h3 class="product__title-mini">{{ product.title }}</h3>
                            <p class="product__text">{{ product.price }}</p>
                            <nuxt-link to="/contacts" class="button-mini product__button">Заказать</nuxt-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        computed: {
            getCatalog () {
                return this.$store.getters['catalog/getCatalog'];
            }
        },
        mounted () {
            gsap.registerPlugin(ScrollTrigger);

            gsap.from('.product__item', {
                scrollTrigger: {
                    trigger: '.product__container',
                    start: '30% 85%',
                    end: '+=500px',
                    scrub: 3,
                },
                opacity: 0,
                x: 300,
                stagger: 1,
                duration: 1
            })
        }
    }
</script>

<style lang="scss">
    @use '@/assets/styles/product.scss' as product;
    @use "@/assets/styles/containers.scss" as c;
    @use "@/assets/styles/vareables.scss" as s;

    .product {
        &__title {
            display: flex;
            flex-direction: column;
            max-width: 700px;
            align-items: center;
            text-align: center;
            margin-bottom: 100px;

            @include c.media (c.$md) {
                margin-bottom: 60px;
            }
        }

        &__container {
            display: flex;
            flex-direction: column;
            align-items: center;
            overflow: hidden;
        }

        &__item {
            background: s.$white;
        }

        &-popular {
            padding: 60px 0;
        }
    }
</style>