<template>
    <div id="app">
        <div class="row">
            <div id="appsidebar" class="col-lg-3">
                <app-sidebar></app-sidebar>
            </div>

            <div id="appbody" class="col-lg-9">
                <app-header></app-header>

                <router-view />
            </div>

            <app-footer></app-footer>
        </div>
    </div>
</template>

<script>
//header
import appHeader from "@/components/global/appHeader.vue";
//sidebar
import appSidebar from "@/components/global/appSidebar.vue";
//footer
import appFooter from "@/components/global/appFooter.vue";
export default {
    name: "app",
    components: {
        appHeader,
        appSidebar,
        appFooter,
    },
};
</script>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    box-sizing: border-box;
    background-color: #161e30;
    position: relative;
    .row {
        margin-right: 0 !important;
    }
}
</style>
