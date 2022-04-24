<template>
    <div class="flex flex-col gap-4 w-full overflow-auto p-2">
        <post-item v-for="i in 10" :key="i" />
    </div>
</template>
<script>
import PostItem from "@/components/Post/postItem.vue";
export default {
    components: {
        PostItem,
    },
};
</script>
