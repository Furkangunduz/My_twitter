<template>
    <app-header />
    <div class="flex flex-row">
        <app-sidebar />
        <post-list />
    </div>
</template>
<script>
import AppHeader from "@/components/AppHeader.vue";
import AppSidebar from "@/components/AppSidebar.vue";
import PostList from "@/components/Post/PostList.vue";
export default {
    components: {
        AppHeader,
        AppSidebar,
        PostList,
    },
};
</script>
<style></style>
