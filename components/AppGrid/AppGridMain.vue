<template>
    <nav class="full">
        <ul class="appGrid">
                <li class="topLeftBox relative ">
                
                </li>
                
            <li class="topBar">
                <slot name="topBar"></slot>
            </li>

                <li class="topRightBox"></li>

            <li class="leftBar">
                
            </li>

            <li class="mainBox">
                <slot name="page"></slot>
            </li>

            <li class="rightBar">

            </li>

                <li class="bottomLeftBox"></li>

            <li class="bottomBar">
                
            </li>

                <li class="bottomRightBox">
                    <slot name="bottomRightBox"></slot>
                </li>

        </ul>
    </nav>
</template>

<style scoped>
.appGrid {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: var(--gutter-thickness) auto var(--gutter-thickness);
    grid-template-rows: var(--gutter-thickness) auto var(--gutter-thickness);
    grid-template-areas: 
        "topLeftBox topBar topRightBox"
        "leftBar mainBox rightBar"
        "bottomLeftBox bottomBar bottomRightBox";
}
li {
    border: 1px solid red;
}
</style>