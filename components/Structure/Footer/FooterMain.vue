<script setup>

</script>
 
<template>
    <div class="absoluteFull flex alignEnd noEvents_kidsEvents">
        <footer>
            <div class="leftBox box"></div>
            <div class="centerBox box"></div>
            <div class="rightBox box">
                <SettingsMain />
            </div>
        </footer>
    </div>
</template>
 
<style scoped>

footer {
    width: 100%;
    height: var(--gutter-thickness);
    display: grid;
    grid-template-columns: var(--gutter-thickness) auto var(--gutter-thickness);
}
</style>