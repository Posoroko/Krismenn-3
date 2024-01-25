<script setup>
import { useI18n } from '#imports';
const { t } = useI18n();

const props = defineProps({
    email: String,
    telephone: Number,
    website: String
})
</script>

<template>
    <div class="contactBox marTop50">
        <p class="title cardSubtitle_format">
            {{ $t('global.infoAndContact') }}
        </p>

        <div class="flex column alignStart marTop20">
            <a class="contactButton flex gap10" href="" v-if="telephone">
                <svg viewBox="0 -960 960 960">
                    <path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12Z"/>
                </svg>

                <span class="text">{{ telephone }}</span>
            </a>

            <a class="contactButton flex gap10" href="" v-if="email">
                <svg viewBox="0 -960 960 960">
                    <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480v58q0 59-40.5 100.5T740-280q-35 0-66-15t-52-43q-29 29-65.5 43.5T480-280q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480v58q0 26 17 44t43 18q26 0 43-18t17-44v-58q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93h200v80H480Zm0-280q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Z"/>
                </svg>

                <span class="text">{{ email }}</span>
            </a>

            <a class="contactButton flex gap10" href="" v-if="website">
                <svg viewBox="0 -960 960 960">
                    <path d="M480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-155.5t86-127Q252-817 325-848.5T480-880q83 0 155.5 31.5t127 86q54.5 54.5 86 127T880-480q0 82-31.5 155t-86 127.5q-54.5 54.5-127 86T480-80Zm0-82q26-36 45-75t31-83H404q12 44 31 83t45 75Zm-104-16q-18-33-31.5-68.5T322-320H204q29 50 72.5 87t99.5 55Zm208 0q56-18 99.5-55t72.5-87H638q-9 38-22.5 73.5T584-178ZM170-400h136q-3-20-4.5-39.5T300-480q0-21 1.5-40.5T306-560H170q-5 20-7.5 39.5T160-480q0 21 2.5 40.5T170-400Zm216 0h188q3-20 4.5-39.5T580-480q0-21-1.5-40.5T574-560H386q-3 20-4.5 39.5T380-480q0 21 1.5 40.5T386-400Zm268 0h136q5-20 7.5-39.5T800-480q0-21-2.5-40.5T790-560H654q3 20 4.5 39.5T660-480q0 21-1.5 40.5T654-400Zm-16-240h118q-29-50-72.5-87T584-782q18 33 31.5 68.5T638-640Zm-234 0h152q-12-44-31-83t-45-75q-26 36-45 75t-31 83Zm-200 0h118q9-38 22.5-73.5T376-782q-56 18-99.5 55T204-640Z"/>
                </svg>

                <span class="text">{{ website }}</span>
            </a>

        </div>
    </div>
</template>


<style scoped>
.contactBox {
    --blue: #296184;
    border-top: 1px solid rgba(255, 255, 255, 0.286);
    padding: 1.5vw;
}
.contactBox .title {
    color: white;
}
.contactButton {
    padding: 10px 20px 10px 10px;
    background-color: rgb(255, 255, 255);
    border-radius: 100px;
    margin-block: 5px;
}
svg {
    height: 24px;
    fill: var(--blue);
}
.contactButton .text {
    font-size: 1.6rem;
    font-weight: 700;
    color: var(--blue);
}
</style>