<template>
    <section class="history">
        <div class="video">
            <video class="video__bg" src="@/assets/videos/video-bg.mp4" autoplay muted loop></video>
            <div class="background">
                <div class="container">
                    <div class="history__container">
                        <h2 class="title-light history__title">История нашей компании</h2>
                        <p class="history__text">Компания Autoshic открылась в Томске в 2022 году. Мы набрали в свой персонал опытных и доверенных сотрудников, с многолетним стажем опыта.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss">
    @use "@/assets/styles/vareables.scss" as s;
    @use "@/assets/styles/containers.scss" as c;

    .history {
        &__title {
            text-align: center;
            max-width: 500px;
            display: flex;
            flex-direction: column;
            align-items: center;

            @include c.media (c.$md) {
                line-height: normal;
            }
        }

        &__container {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 100%;
        }

        &__text {
            max-width: 550px;
            width: 100%;
            font-family: s.$im;
            font-size: 20px;
            line-height: 24px;
            text-align: center;
            color: s.$white;
            margin-top: 50px;
        }
    }

    .video {
        overflow: hidden;
        position: relative;
        &__bg {
            width: 100%;
            height: 500px;
            object-fit: cover;
        }
    }

    .background {
        width: 100%;
        height: 500px;
        background: rgba(0, 0, 0, 0.496);
        position: absolute;
        top: 0;
        left: 0;
        backdrop-filter: blur(10px);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
</style>