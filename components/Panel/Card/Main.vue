<script setup>

</script>

<template>
    <li class="panelCard flex column">
        <slot/>

    </li>

</template>

<style>
.cardTitle_format,
.cardSubtitle_format,
.cardText_fortmat {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
}
.cardTitle_format {
    font-size: clamp(2.4rem, 3.5vw + 0.1rem, 3.8rem);
    line-height: 1;
    font-weight: 700;
}
.cardSubtitle_format {
    font-size: clamp(2rem, 2vw + 0.1rem, 2.6rem);
    line-height: 1.5;
    font-weight: 300;
}

.cardText_format {
    font-size: clamp(1.6rem, 2vw + 0.1rem, 2rem);
    line-height: 1.5;
    font-weight: 300;
}
</style>

<style scoped>
.panelCard {
    border: 1px solid rgba(255, 255, 255, 0.312);
    box-shadow: 0px 0px 10px 0px rgba(213, 236, 244, 0.116);
}

/* fullWidth class is set in <PanelMain /> when the stripeImage is hidden for a full page effect in the panel */
.fullWidth .panelCard {
    border: none;
}
</style>