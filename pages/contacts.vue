<template>
    <div>
        <header class="header">
            <navbar></navbar>
        </header>

        <main class="main">
            <contacts></contacts>
        </main>

        <footer class="footer">
            <footervue></footervue>
        </footer>
    </div>
</template>

<script>
    import navbar from '../components/layouts/navbar.vue';
    import footervue from '../components/layouts/footer.vue';
    import contacts from '../components/pages/contacts/contacts.vue';

    export default {
        components: {
            navbar,
            footervue,
            contacts
        }
    }
</script>