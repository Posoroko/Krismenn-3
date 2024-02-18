<script setup>
const { t, locale } = useI18n();

const cookiesAccepted = localStorage.getItem('cookiesAccepted');

function acceptCookies() {
    localStorage.setItem('cookiesAccepted', 'true');
    localStorage.setItem('preferedLocale', locale.value);
    document.querySelector('.app_cookie').remove();
}

function refuseCookies() {
    document.querySelector('.app_cookie').remove();
}

</script>

<template>
    <section v-if="!cookiesAccepted" class="fontColor_light frosty_bg frosty_border glowing flex column gap20">
        <h2>
            {{ t('cookies.title') }}
        </h2>

        <p class="">
            {{ t('cookies.text') }}
        </p>

        <div class="flex justifyEvenly ">
            <button @click="acceptCookies" class="fontColor_light frosty_border frosty_bg glowing_onHover pointer">
                {{ t('cookies.accept') }}
            </button>

            <button @click="refuseCookies" class="fontColor_light frosty_border frosty_bg glowing_onHover pointer">
                {{ t('cookies.refuse') }}
            </button>
        </div>
    </section>
</template>

<style scoped>
section {
    width: min(400px, 100%);
    padding: 30px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 0;
}
p {
    font-size: 1.6rem;
}
button {
    padding: 10px 20px;
}
</style>