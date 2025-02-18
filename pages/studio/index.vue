<script setup>

definePageMeta({
    enterFrom: 'left',
    tilte: 'Studio'
})

</script>

<template>
    <PanelPagesLiveAndStudio projectType="studio">
        <template #topImage>
            <img class="objectFitCover" src="/images/studio/studio01.jpg" alt="">
        </template>

        <template #topSectionText>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque eveniet cupiditate dolor
            voluptatibus reiciendis maiores ipsam dolorem tempore velit corporis voluptas et, voluptates
            sapiente ut doloremque dolorum, impedit quas commodi?
        </template>
    </PanelPagesLiveAndStudio>
</template>