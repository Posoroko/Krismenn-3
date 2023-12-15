<script setup>
import { useI18n } from '#imports';
const { t } = useI18n();

const menuIsOpen = ref(false);
</script>

<template>
    <div class="full relative">
        <button @click="menuIsOpen = !menuIsOpen" class="centered full glass_corner pointer ">
            <WidgetIcon name="info" type="homePageNavButton" size="24"/>
        </button>

        <div class="menuBox glassSurface flex justifyEnd alignEnd" :class="{ 'open': menuIsOpen }">
            <div class="content kText">
                <p>{{ $t('info.legal') }}</p>
                <p>{{ $t('info.credits') }}</p>
                <p>posoroko.com</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.menuBox {    
    position: absolute;
    bottom: 50%;
    left: 50%;
    transform: scale(0);
    filter: blur(5px);
    translate: -50% 50%;
    transition: 500ms ease;
}
.menuBox.open {
    bottom: 100%;
    left: 100%;
    filter: blur(0px);
    translate: 0% 0%;
    transform: scale(1);
    transition: 500ms ease;
}
.content {
    padding: 20px;
    font-weight: 500;
    white-space: nowrap;
}
</style>