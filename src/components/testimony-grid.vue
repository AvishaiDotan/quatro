<template >
    <ul class="testimony-grid">
        <li v-for="(testimony, idx) in testimonies">
            <testimonyPreview :testimony="testimony" :idx="idx"/>
        </li>
    </ul>
</template>

<script>
import testimonyPreview from '../components/testimony-preview.vue'
export default {
    data() {
        return {
            testimonies: [
                {
                    img: {
                        url: 'https://www.quatro-digital.com/wp-content/uploads/2021/01/noy-desktop.jpg',
                        height: '400px',
                        width: '465px',
                    },
                    header: 'נוי השדה',
                    details: 'e-commerce'
                },
                {
                    img: {
                        url: 'https://www.quatro-digital.com/wp-content/uploads/2022/08/kula-thumb.jpeg',
                        height: '480px',
                        width: '400px',
                    },
                    header: 'Kula',
                    details: 'Global e-commerce'
                },
                {
                    img: {
                        url: 'https://www.quatro-digital.com/wp-content/uploads/2019/01/project-2-default-1.jpg',
                        height: '400px',
                        width: '465px',
                    },
                    header: 'הרצליה מדיקל סנטר',
                    details: 'אתרי תדמית, אפליקציית web'
                },
                {},
                {
                    img: {
                        url: 'https://www.quatro-digital.com/wp-content/uploads/2019/01/project-5-default.jpg',
                        height: '480px',
                        width: '400px',
                    },
                    header: '4Chef',
                    details: 'e-commerce'
                },
                {
                    img: {
                        url: 'https://www.quatro-digital.com/wp-content/uploads/2019/03/carmella-mobile.png',
                        height: '400px',
                        width: '465px',
                    },
                    header: 'כרמלה',
                    details: 'e-commerce'
                },
            ]
        }
    },
    components: {
        testimonyPreview
    }
}
</script>

<style lang="scss" scoped>
</style>