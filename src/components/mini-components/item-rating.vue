<template>
    <div v-if="rating && maxRating" class="item-rating">
        <h2>Rating</h2>
        <div class="stars">
            <i class="full-star bi bi-star-fill" v-for="star in fullStars"></i>
            <i class="full-star bi bi-star-half" v-for="star in halfStar"></i>
            <i class="full-star bi bi-star" v-for="star in emptyStar"></i>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        rating: Number,
        maxRating: Number
    },

    computed: {
        fullStars() {
            return parseInt(this.rating)
        },
        halfStar() {
            const roundedRating = Math.round(this.rating)
            const roundedHalfRating = Math.round(this.rating * 2) / 2;
            const roundedReminder = Math.round(roundedRating - roundedHalfRating)
            return roundedReminder
        },
        emptyStar() {
            return this.maxRating - this.fullStars - this.halfStar
        }
    }
}
</script>

<style lang="scss" scoped>
.item-rating {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>