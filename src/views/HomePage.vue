<template>
    <app-header />
    <div class="flex flex-row">
        <app-sidebar />
        <!-- <TivitList /> -->
    </div>
</template>
<script>
import AppHeader from "@/components/AppHeader.vue";
import AppSidebar from "@/components/AppSidebar.vue";

export default {
    components: {
        AppHeader,
        AppSidebar,
    },
};
</script>
<style></style>
