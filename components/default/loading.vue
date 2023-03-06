<template lang="html">
    <div class="loading-page" v-if="loading">
        <div class="spiner"></div>
        <p class="loading">Загрузка...</p>
    </div>
  </template>
  
<script>
    export default {
        data: () => ({
            loading: false
        }),
        methods: {
            start() {
                this.loading = true
            },
            finish() {
                this.loading = false
            }
        },
    }
</script>
  
  <style lang="scss" scoped>
    .loading-page {
        width: 100%;
        height: 100vh;
        background: #0F1011;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 99;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .loading {
        display: flex;
        justify-content: center;
        align-items: center;
        color: #ffffff;
        font-family: 'Roboto Regular';
        font-size: 24px;
        margin-top: 30px;
    }

    .spiner {
        width: 100px;
        height: 100px;
        border: 10px solid #FF4D00;
        border-radius: 100%;
        border-top-color: transparent;
        animation: loading linear 0.5s infinite;
    }

    @keyframes loading {
        0% {
            transform: rotate(0);
        }
        100% {
            transform: rotate(360deg);
        }
    }

</style>