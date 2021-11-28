<template>
    <div class="app-footer">
        <div class="part-left">
            <span> COPYRIGHT © 2021 </span>
            <a href="">ARKENTO</a>
            <span>, All rights Reserved</span>
        </div>

        <div class="part-right">
            <span> Made with fkn </span>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21px"
                height="21px"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="text-danger stroke-current feather feather-heart"
            >
                <path
                    d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
                ></path>
            </svg>

            <span> By wissam Najjom </span>
        </div>
    </div>
</template>
<script>
export default {
    name: "appFooter",
};
</script>
<style lang="scss" scoped>
.app-footer {
    position: sticky;
    color: #fff;
    margin-left: 24rem;
    width: calc(100% - 24rem);
    padding-right: 29px;
    margin-top: 17px;
    margin-bottom: 9px;
    font-size: 14px;
    .part-left {
        float: left;
        span:first-child {
            padding-left: 8px;
        }
        a {
            color: #7367f0;
            text-decoration: none;
        }
    }
    .part-right {
        float: right;
    }
}
</style>
