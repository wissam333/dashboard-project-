<template>
    <div class="row">
        <div class="col-sm-12 col-lg-8">
            <div class="apexchart card">
                <apex></apex>
            </div>
        </div>
    </div>
</template>

<script>
import apex from "@/components/charts/apex";

export default {
    name: "analytics",
    data: function () {
        return {};
    },
    components: {
        apex,
    },
};
</script>
<style lang="scss" scoped>
@keyframes anim1 {
    from {
        opacity: 0;
        transform: scale(0.95);
    }
    to {
        opacity: 1;
        transform: scale(1);
    }
}
.row > * {
    padding-right: 1rem !important;
    padding-left: 1rem !important;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-flow: column;
    flex-flow: column;
}
.card {
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    background-color: #283046;
    padding: 1rem;
    border-radius: 10px;
    margin-bottom: 2rem;
    animation: anim1 0.5s cubic-bezier(0.46, 0.21, 0.88, 0.62);
}
</style>
