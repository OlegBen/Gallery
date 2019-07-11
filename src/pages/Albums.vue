<template>
    <div class="container">
        <div class="d-flex justify-content-center" v-if="load">
            <div class="spinner-border text-primary" role="status">
                <span class="sr-only">Loading...</span>
            </div>
        </div>
        <template v-if="userAlbums.length > 1">
            <div class="albums-list">
                <div class="card mr-3" style="width: 18rem;" v-for="album in userAlbums">
                    <img
                            :src="album.photos && album.photos[0]? '/photos' + album.photos[0] : '/photos/default.jpg'"
                            class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title">{{ album.id }}</h5>
                        <router-link
                                class="btn btn-primary"
                                :to="{name: 'Photos', query: {albumName: album.id, photos: JSON.stringify(album.photos)}}"
                        >More</router-link>
                    </div>
                </div>
            </div>
        </template>

        <template v-else-if="userAlbums.length === 0 && !load">
            <h4 class="mt-5">У вас пока нет альбомов.</h4>
        </template>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                load: true,
                userAlbums: []
            }
        },
        mounted: function() {
            this.load = true;
            let username = localStorage.getItem('username');
            if(!!username) {
                fetch('https://my-json-server.typicode.com/OlegBen/jsonserver/userAlbums?id=' + username)
                    .then(response => response.json())
                    .then(userAlbums => {
                        if(userAlbums[0]) {
                            this.userAlbums = userAlbums[0].albums;
                        }
                        this.load = false;
                    })
            }
        }
    }
</script>

<style scoped>
    img {
        height: 150px;
    }
    .albums-list {
        display: flex;
        flex-direction: row;
    }
</style>