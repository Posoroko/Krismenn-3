<script setup>
const { t, locale } = useI18n();

const cookiesAccepted = localStorage ? localStorage.getItem('cookiesAccepted') : false;

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
    <section v-if="!cookiesAccepted" class="frosty_surface glow_always flex column gap20">
        <h2>
            {{ t('cookies.title') }}
        </h2>

        <p class="">
            {{ t('cookies.text') }}
        </p>

        <div class="flex justifyEvenly ">
            <button @click="acceptCookies" class="frosty_surface glow_always pointer">
                {{ t('cookies.accept') }}
            </button>

            <button @click="refuseCookies" class="frosty_surface glow_always pointer">
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