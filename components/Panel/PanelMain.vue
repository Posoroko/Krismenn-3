<script setup>
const props = defineProps({
    title: String,
    subtitle: String,
    drawerPosition: String,
    pageName: String
})


</script>

<template>

    <div class="panel glassSurface allEvents relative flex" :class="drawerPosition">
        <PanelCloseButton />

        <div class="frame relative">
            <img class="stripeImage" src="/images/autoportrait-stripe.webp" alt="Krismenn">
        </div>

        <div class="content relative grow flex column">
            <div class="panelTitle centered">
                {{ title }}
            </div>

            <div class="scrollBox w100">
                <p class="panelSubtitle ">
                    {{ subtitle }}
                </p>
                <div class="panelTextContent kText ">
                    <slot name="content"></slot>
                </div>
            </div>
        </div>
    </div>

</template>

<style scoped>
.panel.right {
    right: 0;
}
.panel.left {
    left: 0;
}
.panel {
    width: 50%;

    height: 100%;
    position: absolute;
    top: 0;
    /* transform: translateX(100%); */
    background-color: rgba(47, 91, 92, 0.451);
}
@media (orientation: portrait) or (width < 850px) {
    .panel {
        width: 100%;
    }
}
.frame {
    min-width: 100px;
    height: 100%;
    overflow: hidden;
    align-content: flex-start;
    box-shadow: 
        inset 0 0 20px 5px rgba(211, 253, 255, 0.164);
}
.stripeImage {
    position: absolute;
    height: 100%;
    width: 100%;
    object-fit: cover;
    z-index: -1;
}

.content:before {
    content: "";
    width: 100%;
    border: 3px solid rgba(255, 255, 255, 0.986);


    filter: blur(2px);
    box-shadow: 0 0 10px 5px rgba(114, 248, 255, 0.568);
    position: absolute;
    top: 1px;
    opacity: 0.9;
    transition: opacity 0.5s ease;
    /* animation: grow 1s  1 forwards ; */
    /* animation-timing-function: cubic-bezier(.18,.9,.64,1.01); */
}

/* @keyframes grow {
    0% {
        opacity: 0;
        width: 0px;
    }
    100% {
        opacity: 0.9;
        width: 100%;
    }
} */
.panelTitle {
    height: 48px;
    font-size: 28px;
    font-family: 'Raleway', sans-serif;
    color: white;
    font-weight: 200;
    /* margin-top: 10px; */
    padding-top: 10px;
    background: linear-gradient(0deg, transparent 0%, rgba(70, 180, 253, 0.274) 100%);
}
.panelSubtitle {
    height: 48px;
    font-size: 32px;
    font-family: 'Raleway', sans-serif;
    color: white;
    font-weight: 100;
    letter-spacing: 4px;
    margin-top: 10px;
}
.scrollBox {
    height: 40em;
    overflow-y: scroll;
    padding: 0 50px;
    margin-top: 100px;
    flex-grow: 1;
}
.panelTextContent {
    /* max-width: 40ch; */
    margin-top: 30px;
}
</style>