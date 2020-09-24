<template>
    <div class="navbar">
        <div class="container">
            <div class="navbar-content">
                <div class="logo">Notify</div>
                <ul class="navbar-list">
                    <li v-for="(link, index) in getLinks" :key="index">
                        <router-link class="navbar-link" :title="link.title" :to="link.path">{{link.title}}</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "NavLinks",
        computed:{
            getLinks() {
                return this.$store.getters.getLinks;
            }
        }
    }
</script>

<style lang="scss" scoped>
    .navbar-link {
        &.router-link-exact-active {
             color: #e76658;
         }
    }
    li {
        margin-right: 10px;
    }
</style>