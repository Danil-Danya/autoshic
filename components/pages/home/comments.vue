<template>
    <section class="comments">
        <div class="container">
            <div class="comments__container">
                <h2 class="comments__title title-light">Отзывы о нашей компании</h2>
                <div class="comments__slider" ref="slider">
                    <button class="slider-button back" @click="sliderPlayer('back')"><</button>
                    <button class="slider-button next" @click="sliderPlayer('next')">></button>
                    <div class="comments__slider-wrapper" ref="wrapper">
                        <div class="comments__slider-item" v-for="item in items" :key="item" ref="sliderItem">
                            <h3 class="comments__slide-title">{{ item.title }}</h3>
                            <p class="comments__slide-text">{{ item.text }}</p>
                            <nuxt-link to="/coments" class="button-mini comments__button-mini">Больше</nuxt-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    
    export default {
        data: () => ({
            items: [
                {
                    title: 'Ирина Степаненко',
                    text:'Мастер Сергей меня поразил)знает своё дело, качество и сроки поразили)делали багажник)забрала машину практически...',
                },
                {
                    title: 'Ирина Степаненко',
                    text:'Отдал автомобиль на ремонт и покраску нескольких элементов кузова. Сделали качественно и в срок, даже раньше, чем оговаривалось при приёмке.',
                },
                {
                    title: 'Евгений Макаров',
                    text:'Я приезжал в этот автосервис хорошо сделали бампер задний покрасили на тайота камри55. Ребята дружелюбные хорошие вежливые. Знают свое дело.',
                },
                {
                    title: 'Азиз Рахмонов',
                    text:'Спасибо сотрудникам автосервиса за качественный ремонт фары на моем автомобиле. Ремонт был нетрудоемким, но порадовало отношение менеджеров.',
                },
            ],
            step: 0
        }),

        methods: {
            sliderPlayer (btn) {
                const sldiderItem = [...this.$refs.sliderItem];
                const windowWidth = window.innerWidth;
                
                let wrapper = this.$refs.wrapper;
                
                let width = 0;
                let rePlay = 0;

                for (let i = 0; i < sldiderItem.length; i++) {
                    width = sldiderItem[i].clientWidth + 30;
                }

               if (windowWidth < 600) {
                    rePlay = sldiderItem.length - 1;
                }
                else {
                    rePlay = sldiderItem.length - 3;
                }
                
                if (btn === 'next') {
                    this.step++;

                    if (this.step > rePlay) {
                        this.step = 0;
                    }

                    wrapper.style = `transform: translateX(${-width * this.step}px);`;
                }
                else {
                    this.step--;
                    console.log(this.step);

                    if (this.step < 0) {
                        this.step = rePlay
                        console.log('replay',rePlay);;
                        console.log(this.step);
                    }

                    wrapper.style = `transform: translateX(${-width * this.step}px);`;
                    console.log('step',this.step);
                }
            }
        },

        mounted () {
            const sldiderItem = [...this.$refs.sliderItem];
            const slider = this.$refs.slider;

            for (let i = 0; i < sldiderItem.length; i++) {
                if (window.innerWidth < 500) {
                    sldiderItem[i].style = `width: ${window.innerWidth - 30}px`;
                }
                else {
                    sldiderItem[i].style = `width: ${slider.clientWidth / 3}px`
                }
            }
        }
    }

</script>

<style lang="scss">
    @use "@/assets/styles/vareables.scss" as s;
    @use "@/assets/styles/containers.scss" as c;

    .comments {
        &__slider {
            overflow: hidden;
            position: relative;
            margin-top: 40px;


            &-wrapper {
                display: flex;
                width: 2100px;      
                gap: 30px;          
                width: 1000%;
                transition: 500ms;
            }

            &-item {
                display: flex;
                flex-direction: column;
                padding: 30px;
                background: s.$darkWindowItem;
                max-width: 490px;
                width: 100%;
                border-radius: 11px;
            }
        }

        &__slide {
            &-text {
                font-family: s.$im;
                font-size: 20px;
                line-height: 26px;
                color: s.$white;
                margin-bottom: 20px;
            }

            &-title {
                font-family: s.$ir;
                font-size: 32px;
                color: s.$white;
                margin-bottom: 20px;
            }
        }

        &__button {
            &-mini {
                display: inline-block;
                max-width: 160px;

                &:hover {
                    background: s.$white;
                    color: s.$darkBg;
                }
            }
        }
    }

    .slider-button {
        background: none;
        color: s.$orange;
        font-size: 32px;
        border: none;
        outline: none;
        cursor: pointer;
        position: absolute;
        top: 50%;
        z-index: 2;
    }
    
    .prev {
        left: 0;
    }

    .next {
        right: 0 !important;
    }

</style>