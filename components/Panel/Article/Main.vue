<script setup>

</script>

<template>
    <div id="panel-article" class="">
        <slot></slot>
    </div>
</template>

<style>
#panel-article {
    color: white;
    padding: clamp(2.4rem, 2vw + 1rem, 3.2rem);
}
.headerImage.panelArticle {
    width: 100%;
    height: clamp(80px, 15vw, 250px);
    object-fit: cover;
    object-position: center;
}
h1.panelArticle {
    font-size: clamp(2.4rem, 2.5vw + 1rem, 4rem);
    margin-top: clamp(2.4rem, 2vw + 1rem, 3.2rem);
}
h2.panelArticle {
    font-size: clamp(1.8rem, 1.5vw + 1rem, 2.4rem);
    font-weight: 300;
}
.panelArticle.content {
    font-family: system-ui, sans-serif;
    font-size: clamp(1.8rem, 2.1vw + 0.1rem, 2rem);
    line-height: 1.5;
    font-weight: 300;
    margin-top: 30px;
}
</style>