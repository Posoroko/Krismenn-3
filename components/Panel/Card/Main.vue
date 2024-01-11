<script setup>
const props = defineProps({
    hasImage: {
        type: Boolean,
        default: false
    },
    activeCardId: {
        type: String,
        default: false
    },
    format: {
        type: String,
        validator: function (value) {
            // The value must be one of these strings
            return ['card', 'article'].includes(value);
        }
    }
})
</script>

<template>
    <div class="card flex">
        <div class="tinyFrame" data-role="placeHolder" v-if="hasImage">
        </div>

        <div class="panelCardContentBox">
            <slot name="contentBox"></slot>
        </div>

        <div class="tinyFrame absolute centered" v-if="hasImage">
            <slot name="tinyFrame">

            </slot>
        </div>

    </div>

</template>

<style>
.panelCardContentBox {
    width: 100%;
    flex-shrink: 0;
    color: rgba(212, 212, 212, 0.493);
    padding: 30px;
    transition: 300ms ease-out;

    .title {
        font-size: 3.7rem;
        font-weight: 700;
        filter: blur(0.5px);
        transition: all 320ms ease-out;
    }

    .date, .definition {
        font-size: 1.8rem;
        margin-top: 5px;
        font-weight: 400;
    }
    .content {
        width: 100%;
        font-size: 1.6rem;
        font-weight: 500;
        line-height: 1.4;
        margin-top: 10px;
        transition: color 120ms ease-out;
        overflow: hidden;
        white-space: pre-wrap;
    } 
}

.card.isActive .panelCardContentBox {
    color: rgb(212, 212, 212);
    transition: 300ms ease-out;
}



</style>

<style scoped>

.card {
    width: 100%;
    height: 300px;
    border: 1px solid rgba(63, 0, 0, 0.438);
    border-radius: 5px;
    margin: 40px 0;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.432);
    cursor: pointer;
    position: relative;
    overflow: hidden;
    background-color: #0f303c;
}
/* .card::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-image: url("/images/metal.webp");
    background-color: #06475e;
    filter: brightness(0.4) contrast(1.4) blur(1px) saturate(1.2);
    mix-blend-mode: difference;
    background-size: cover;
    z-index: -1;
} */
.card {
    --tinyFrameTransition: width 500ms cubic-bezier(.02,.99,.27,.98);
    --contenBoxLeftPAddingTransition: padding-left 2500ms ease-out;
}
.tinyFrame {
    width: 60%;
    flex-shrink: 0;
    transition: var(--tinyFrameTransition);
}
.tinyFrame.absolute {
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    filter:  contrast(1.2) blur(0.5px) brightness(0.7);
    overflow: hidden;
}

.card.isActive .tinyFrame {
    width: 0%;
    transition: var(--tinyFrameTransition);
}

@media (orientation: portrait) or (width < 599px) {
    .articleBox.active .tinyFrame {
    width: 0%;
    transition: var(--tinyFrameTransition);
}
}
.articleBox:nth-child(1){
    margin-top: 0px;
}


@media (orientation: portrait) or (width < 599px) {
    .articleBox.active .tinyFrame {
        width: 10%;
        /* transition: var(--tinyFrameTransition); */
    }
    .contentBox {
        width: 90%;
    }
}

</style>