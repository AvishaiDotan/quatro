<template>
    <div class="demo-input-size">
        <el-input 
            @input="setFilterBy" 
            v-model="filterBy" 
            class="w-50 m-2" 
            size="large" 
            placeholder="Search"
            :prefix-icon="Search"
        />
    </div>
</template>

<script>
export default {
    data() {
        return {
            filterBy: ''
        }
    },
    methods: {
        setFilterBy() {
            this.$emit('setFilter', this.filterBy)
        }
    }
}
</script>

<style lang="scss" scoped>

</style>