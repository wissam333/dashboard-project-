<template>
    <div class="Email">
        <emailSidebar></emailSidebar>

        <emailBody></emailBody>
    </div>
</template>

<script>
import emailBody from "@/components/email/emailBody";
import emailSidebar from "@/components/email/emailSidebar";

export default {
    name: "Email",
    data: function () {
        return {};
    },
    components: {
        emailBody,
        emailSidebar,
    },
};
</script>

<style lang="scss" scoped>
.Email {
    height: calc(100vh - 9.4rem);
    width: 98.5%;
    margin-left: 0.3rem;
    display: flex;
    position: relative;
    overflow: hidden;
}
</style>
