<script setup>
const { t, locale } = useI18n();

</script>

<template>
    <div class="box">
        <a href="https://krismenn-bastard.netlify.app" class="frame centered">
            <img class="frosty_surface glow_on_hover" src="/images/bastard/bastard.webp" />
        </a>

        <a href="https://krismenn-bastard.netlify.app " class="link cardSubtitle_format centered marTop20 frosty_font">
                www.bastard.krismenn.com
        </a>

        <p class="cardText_format fontColor_light marTop50">
            Pendant la création du spectacle, Krismenn diffuse ses idées et inspiration via un outil construit pour l’occasion en collaboration <a class="underline" href="https://posoroko.com">Studio Posoroko</a>.  En visitant l'application, vous pourrez lire, écouter et regarder pour suivre le cheminnement créatif de Krismenn.  Petit à petit, une inspiration à la fois, le spectacle prendra forme sous vos yeux.
        </p>
    </div>
</template>

<style scoped>
img {
    width: min(400px, 80%);
    scale: 1;
    margin: auto;
}
img:hover {
   scale: 1.005;
}
.link {
    font-weight: 600;
}
</style>