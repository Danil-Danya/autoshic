<template>
    <section class="map">
        <iframe 
        class="map__content"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d231.351036900787!2d84.94431458507498!3d56.519524938331564!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x43269398e960e673%3A0x94a5866806c24461!2z0JDQstGC0L4g0YjQuNC6!5e0!3m2!1sru!2s!4v1676734182171!5m2!1sru!2s"
        width="600" height="450" 
        style="border:0;" 
        allowfullscreen="" 
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        >
        </iframe>
    </section>
</template>

<style lang="scss">
    .map {
        width: 100%;

        &__content {
            width: 100%;
        }
    }
</style>