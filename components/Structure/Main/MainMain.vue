<template>
    <main class="absoluteFull noEvents flex column">
           <slot></slot>
    </main>
</template>

<style scoped>
main {
    margin-top: 0;
    overflow: hidden;
}
.topBar {
    height: var(--gutter-thickness);
    margin: 0 var(--gutter-thickness);
}
</style>