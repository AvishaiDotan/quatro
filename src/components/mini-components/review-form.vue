<template>
    <el-form class="review-form" label-width="100px">
        <el-form-item prop="email" label="Email" :rules="[
            {
                required: true,
                message: 'Please input email address',
                trigger: 'blur',
            },
            {
                type: 'email',
                message: 'Please input correct email address',
                trigger: ['blur', 'change'],
            },
        ]">
            <el-input v-model="userReview.email" />
        </el-form-item>
        <el-form-item class="review" prop="review" :label="'Review'" :rules="{
            required: true,
            message: 'Reviews can not be null',
            trigger: 'blur',
        }">
            <el-input v-model="userReview.review" />
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submitForm()">Submit</el-button>
            <el-button @click="resetForm()">Reset</el-button>
        </el-form-item>
    </el-form>
</template>
  
<script>
export default {
    data() {
        return {
            userReview: {
                email: '',
                review: ''
            }
        }
    },
    methods: {
        resetForm() {
            this.userReview = {
                email: '',
                review: ''
            }
        },
        submitForm() {
            const isFormValid = this.isFormValid
            if (!isFormValid) return //UserMSG
            this.$emit('addReview', this.userReview)
        },
        isFormValid() {
            return this.userReview.email && this.userReview.review
        }
    },
}
</script>

<style lang="scss">
    .review-form {
        max-width: 500px;
        padding: 20px;
        background-color: darkgrey;
        border-radius: 2px;
        box-shadow: 0px 0px 11px 0px #323232;

        & .review.el-input__wrapper {
            height: 100px;
        }
    }
</style>


  