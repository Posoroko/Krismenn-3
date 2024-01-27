<script setup>

</script>

<template>
    <li class="panelCard flex column">
        <slot/>

    </li>

</template>

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