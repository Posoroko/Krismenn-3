<template>
    <main class="absoluteFull noEvents flex column ">
        <div class="nuxtPageContainer relative noEvents grow">
           <slot></slot>
        </div>
    </main>
</template>

<style scoped>
main {
    margin: var(--gutter-thickness);
    margin-top: 0;
}
.topBar {
    height: var(--gutter-thickness);
    margin: 0 var(--gutter-thickness);
}
</style>