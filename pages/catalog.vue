<template>
    <div>
        <header class="header">
            <navbar></navbar>
        </header>

        <main class="main">
            <catalog></catalog>
        </main>

        <footer class="footer">
            <footervue></footervue>
        </footer>
    </div>
</template>

<script>
    import navbar from '../components/layouts/navbar.vue';
    import footervue from '../components/layouts/footer.vue';
    import catalog from '../components/pages/catalog/catalog.vue';

    export default {
        components: {
            navbar,
            footervue,
            catalog
        }
    }
</script>