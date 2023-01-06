<template>
    <section class="two-part-responsive">
        <div class="part1" :style="{backgroundColor: 'blue'}"></div>
        <div class="part1" :style="{backgroundColor: 'red'}"></div>
    </section>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
    .two-part-responsive {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 10px;

        & > * {
            height: 340px;
            
            @media (max-width: 700px) {
                flex-direction: column;
                flex-basis: 100%;
            }

            @media (min-width: 700px) {
                flex-basis: 45%;
            }
            
        }
    }
</style>