<template>
    <div class="bg-slate-200">
        <div class="flex items-center justify-start gap-2 ml-2 mb-3">
            <img
                class="w-12 h-12 rounded-full"
                src="https://pbs.twimg.com/profile_images/1451603046438514693/pXUJMJMZ_400x400.jpg"
            />
            <h3 class="text-xl">kralDragon</h3>
            <playIcon />
        </div>
        <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde
            ducimus illo doloremque nostrum magnam eos, reprehenderit tempore
            maiores, voluptatibus nobis sed est rerum cum quis cumque dolor rem
            laborum culpa?
        </p>
        <div>
            <div class="flex justify-between mt-3">
                <likeIcon />

                <small>25-04-2022</small>
            </div>
        </div>
    </div>
</template>
<script>
import playIcon from "@/icons/playIcon.vue";
import likeIcon from "@/icons/likeIcon.vue";

export default {
    components: {
        playIcon,
        likeIcon,
    },
};
</script>
