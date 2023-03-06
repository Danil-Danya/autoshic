<template>
    <div>
        <header class="header">
            <navbar></navbar>
        </header>

        <main class="main">
            <about></about>
            <aboutReversed></aboutReversed>
            <howAreWeWorking></howAreWeWorking>
            <history></history>
            <questions></questions>
        </main>

        <footer class="footer">
            <footervue></footervue>
        </footer>
    </div>
</template>

<script>
    import navbar from '../components/layouts/navbar.vue';
    import footervue from '../components/layouts/footer.vue';
    import about from '../components/pages/about/about.vue';
    import aboutReversed from '../components/pages/about/about-reversed.vue';
    import howAreWeWorking from '../components/pages/about/how-are-we-working.vue';
    import history from '../components/pages/about/history.vue';
    import questions from '../components/pages/about/questions.vue';

    export default {
        components: {
            navbar,
            footervue,
            about,
            aboutReversed,
            howAreWeWorking,
            history,
            questions
        }
    }
</script>