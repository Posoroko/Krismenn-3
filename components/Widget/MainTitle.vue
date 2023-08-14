<template>
    <div class="centered h100">
        <h1 class="mainTitle flex justifyCenter alignCenter pointer">
            <span class="letter K">K</span>
            <span class="letter R">R</span>
            <span class="letter I">I</span>
            <span class="letter S">S</span>
            <span class="letter M">M</span>
            <span class="letter E">E</span>
            <span class="letter N">N</span>
            <span class="letter NN">N</span>
        </h1>
    </div>
</template>

<style scoped>
.mainTitle {
    --delay: 50ms;
    height: 100%;
    font-size: 2.8rem;
    line-height: 1;
    font-family: var(--kTitle);
    font-weight: 700;
    color: var(--textColor);
}
.letter {
    opacity: 0;
    animation: fadeIn 1000ms ease-out forwards;

}
.K { animation-delay: calc(var(--delay) * 1);}
.R { animation-delay: calc(var(--delay) * 2);}

.I { animation-delay: calc(var(--delay) * 3);}
.S { animation-delay: calc(var(--delay) * 4);}
.M { animation-delay: calc(var(--delay) * 5);}
.E { animation-delay: calc(var(--delay) * 6);}
.N { animation-delay: calc(var(--delay) * 7);}
.NN { animation-delay: calc(var(--delay) * 7);}

@keyframes fadeIn {
    0% {
        opacity: 0;
        transform: scale(1.5);
        filter: blur(2px);
        /* transform: translateY(10px); */

    }
    100% {
        opacity: 1;
        transform: scale(1);
        filter: blur(0px);
        /* transform: translateY(10px); */

    }
}

</style>
