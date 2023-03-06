<template>
    <div>
        <header class="header">
            <navbar></navbar>
        </header>

        <main class="main">
            <galery></galery>
        </main>

        <footer class="footer">
            <footervue></footervue>
        </footer>
    </div>
</template>

<script>
    import navbar from '../components/layouts/navbar.vue';
    import footervue from '../components/layouts/footer.vue';
    import galery from '../components/pages/galery/galery.vue';

    export default {
        components: {
            navbar,
            footervue,
            galery
        }
    }
</script>