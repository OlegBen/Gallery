<template>
    <div class="container">
        <button
                @click="back"
                class="btn btn-primary mb-3">
            ← Back to albums list
        </button>

        <h2>{{ albumName }}</h2>

        <template v-if="photos.length > 0">
            <div class="photosList mt-5 mb-5">
                <div class="photo mr-4" v-for="photo in paginatedData">
                    <img
                            :src="'/photos' + photo"
                            class="img-thumbnail"
                    >
                </div>
            </div>
            <button
                    @click="prevPage"
                    class="btn btn-primary float-left"
                    :disabled="pageNumber === 0">
                ← Previous
            </button>
            <button
                    @click="nextPage"
                    class="btn btn-primary float-right"
                    :disabled="pageNumber >= pageCount - 1">
                Next →
            </button>
        </template>

        <template v-else="">
            <h4 class="mt-5">Этот альбом пуст.</h4>
        </template>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                pageNumber: 0,
                size: 5
            }
        },
        computed: {
            albumName: function() {
                return this.$route.query.albumName
            },
            photos: function() {
                console.log(this.$route.query.photos);
                return JSON.parse(this.$route.query.photos)
            },
            pageCount: function() {
                let length = this.photos.length,
                    size = this.size;
                return Math.ceil(length/size);
            },
            paginatedData: function() {
                let start = this.pageNumber * this.size,
                    end = start + this.size;
                return this.photos.slice(start,end);
            }
        },
        methods: {
            nextPage: function() {
                this.pageNumber++;
            },
            prevPage: function() {
                this.pageNumber--;
            },
            back: function() {
                this.$router.push('/');
            }
        }
    }
</script>

<style scoped>
    .photosList {
        display: flex;
        flex-direction: row;
    }
    .photo {
        width: 200px;
        height: 200px;
    }
</style>