<template>
    <div>
        <header class="header">
            <navbar></navbar>
        </header>

        <main class="main">
            <comments></comments>
        </main>

        <footer class="footer">
            <footervue></footervue>
        </footer>
    </div>
</template>

<script>
    import navbar from '../components/layouts/navbar.vue';
    import footervue from '../components/layouts/footer.vue';
    import comments from '../components/pages/coments/comments.vue';

    export default {
        components: {
            navbar,
            footervue,
            comments
        }
    }
</script>