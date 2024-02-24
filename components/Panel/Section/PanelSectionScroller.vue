<template>
    <ul class="sideScroller marTop20">
        <slot>
            <!-- Content goes here -->
        </slot>
    </ul>
</template>

<style>
ul.sideScroller {
    padding: 15px;
    border: 1px solid rgba(255, 255, 255, 0.171);
    overflow-x: scroll;
    box-shadow: inset 0px 0px 10px 0px rgba(24, 24, 24, 0.521);
    margin: 30px 0;
    display: flex;
}
</style>