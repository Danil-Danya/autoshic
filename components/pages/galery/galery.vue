<template>
    <section class="galery galery-page">
        <div class="container">
            <h2 class="title-light galery__title galery__title-all">Галерея лучших работ</h2>
            <div class="galery__photos">
                <div class="galery__container-photos">
                    <div class="galery__item" v-for="photo in photos" :key="photo">
                        <img :src="photo" alt="Фото компании" class="galery__photo">
                    </div>
                </div>
            </div>
            <h2 class="title-light galery__title galery__title-all">Галерея работ</h2>
            <div class="galery__photos">
                <div class="galery__container-photos">
                    <div class="galery__item" v-for="photo in photosDefault" :key="photo">
                        <img :src="photo" alt="Фото компании" class="galery__photo">
                    </div>
                </div>
            </div>
            <p class="link-text galery__link">Больше фотографий вы можете увидеть у нас в <a class="link" href="https://vk.com/public219121260">Вконтаке</a></p>
        </div>
    </section>
</template>

<script>
    export default {
        data: () => ({
            photos: [
                require('@/assets/images/pages/home/galery/Rectangle 20.png'),
                require('@/assets/images/pages/home/galery/Rectangle 19.png'),
                require('@/assets/images/pages/home/galery/Rectangle 15.png'),
                require('@/assets/images/pages/home/galery/Rectangle 17.png'),
                require('@/assets/images/pages/home/galery/Rectangle 16.png'),
            ],
            photosDefault: [
                require('@/assets/images/pages/galery/Rectangle 20.png'),
                require('@/assets/images/pages/galery/Rectangle 19.png'),
                require('@/assets/images/pages/galery/Rectangle 15.png'),
                require('@/assets/images/pages/galery/Rectangle 17.png'),
                require('@/assets/images/pages/galery/Rectangle 16.png'),
            ]
        }),
    }
</script>

<style lang="scss">
    .galery {
        &__title {
            &-all {
                margin-top: 80px;
                max-width: 600px;
            }
        }

        &__link {
            margin-top: 30px;
        }
    }
</style>