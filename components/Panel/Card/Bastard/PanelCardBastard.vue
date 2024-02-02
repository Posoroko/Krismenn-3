<script setup>
const { t, locale } = useI18n();

</script>

<template>
    <div class="box">
        <p class="cardText_format">
            {{ t('pages.bastard.introText') }}
        </p>

        <p class="cardText_format">
            {{ t('pages.bastard.appPresentation') }}
        </p>

        <div class="frame centered">
            <img src="/images/bastard/bastard.webp" />
        </div>
    </div>
</template>

<style scoped>
.box {
    padding: 3vw;
}
p {
    color: white;
}
.frame {
    padding: 3vw;
}

img {
    height: 60vh;
    margin: auto;
}
</style>