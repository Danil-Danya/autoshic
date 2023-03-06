<template>
    <div>
        <header class="header">
            <navbar></navbar>
            <headervue></headervue>
        </header>
        
        <main class="main">
            <call></call>
            <about></about>
            <galery></galery>
            <slogan></slogan>
            <popularProduct></popularProduct>
            <comments></comments>
            <order></order>
            <mapvue></mapvue>
        </main>

        <footer class="footer">
            <footervue></footervue>
        </footer>
    </div>
</template>

<script>
    import navbar from '../components/layouts/navbar.vue';
    import footervue from '../components/layouts/footer.vue';
    import headervue from '../components/pages/home/header.vue';
    import call from '../components/pages/home/call.vue';
    import about from '../components/pages/home/about.vue';
    import galery from '../components/pages/home/galery.vue';
    import slogan from '../components/pages/home/slogan.vue';
    import popularProduct from '../components/pages/home/popular-product.vue';
    import comments from '../components/pages/home/comments.vue';
    import order from '../components/pages/home/order.vue';
    import mapvue from '../components/pages/home/map.vue';
    

    export default {
        components: {
            navbar,
            footervue,
            headervue,
            call,
            about,
            galery,
            slogan,
            popularProduct,
            comments,
            order,
            mapvue
        }
    }

</script>