<script setup>
const props = defineProps({
    title: String,
    showTopBorder: {
        type: Boolean,
        default: true
    }
})

</script>


<template>
    <section class="mySection" :class="{ 'showTopBorder' : showTopBorder }">
        <h1 class="sectionTitle">{{ title }}</h1>
        
        <div class="contentBox">
            <slot name="content">

            </slot>
        </div>
    </section>
</template>

<style scoped>

.mySection {
    /* padding: min(3vw, 30px) min(1vw, 20px); */
}
.mySection.showTopBorder {
    border-top: 1px solid var(--frosty-color);
}
.sectionTitle {
    font-size: clamp(1.8rem, 2.8vw + 0.1rem, 2.8rem);
    line-height: 1;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.773);

}
.introText {
    margin-top: 2rem;
}

.contentBox {
    margin-top: min(2vw, 30px);
}
</style>