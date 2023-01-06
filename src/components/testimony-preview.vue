<template>
    <article class="testimony-preview" v-if="testimony.img">
        <img :src="testimony.img.url" alt="" :style="{width: testimony.img.width, height: testimony.img.height}">
        <div class="testimony-content">
            <h2>{{ testimony.header }}</h2>
            <p>{{ testimony.details }}</p>
        </div>
        <div class="idx">
            {{idx}}
        </div>
    </article>
    <article v-else>
        
    </article>
</template>

<script>
    export default {
        props: {
            testimony: Object,
            idx: Number,
        }
    }
</script>