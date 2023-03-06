<template>
    <section class="products">
        <div class="container">
            <div class="product__container">
                <h2 class="title product__title">Наши популярные услуги</h2>
                <div class="product__content">
                    <div class="product__item" 
                    v-for="(product, index) of getCatalog" 
                    :key="product">
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
            if (window.innerWidth > 1000) {
                gsap.from('.product__item', {
                    opacity: 0,
                    y: 300,
                    duration: 1
                },1)
            }
            else {
                gsap.from('.product__item', {
                    scrollTrigger: {
                        trigger: '.product__container',
                        start: '5% 85%',
                        end: '+=1000px',
                        scrub: 3,
                    },
                    opacity: 0,
                    x: 300,
                    stagger: 1,
                    duration: 1
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    @use '@/assets/styles/product.scss' as product;
    @use "@/assets/styles/containers.scss" as c;
    @use "@/assets/styles/vareables.scss" as s;

    .products {
        padding-top: 160px;
        background: s.$grayBg;
    }
</style>