<template >
    <section class="testimonies-section">
        <header class="testimony-header">
            פרוייקטים נבחרים
            <div class="underline"></div>
        </header>
        <ul class="testimony-grid">
            <li v-for="(testimony, idx) in testimonies">
                <testimonyPreview :testimony="testimony" :idx="idx" />
            </li>
        </ul>
        <p class="m-b-s-80 more-action">
            <svg width="62" height="10" xmlns="http://www.w3.org/2000/svg"><g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="buttons/arrow/reg" transform="translate(-14 -7)" fill="#FFF" fill-rule="nonzero"><g id="button/arrow/reg" transform="translate(15)"><g id="Stacked-Group"><path id="Line-15" d="M8.5 11.5h52v1h-52v4l-9-4.5 9-4.5v4z"/></g></g></g></g></svg>
            <span>עוד פרוייקטים</span>
        </p>
    </section>
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