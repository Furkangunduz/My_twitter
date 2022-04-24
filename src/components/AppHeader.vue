<template>
    <header class="bg-gray-100 sticky top-0 left-0 right-0">
        <div class="flex justify-between items-center py-3 px-2">
            <div class="flex ml-3">
                <a href="#"> Home </a>
            </div>
            <div>
                <input
                    class="bg-slate-300 rounded px-4 py-2 font-light"
                    type="text"
                    placeholder="search"
                />
            </div>
            <div class="flex">
                <div class="dropdown-container">
                    <button class="">Daha Fazla</button>
                    <nav tabindex="1">
                        <ul>
                            <li><a href="#">My Profile</a></li>
                            <li>
                                <a href="#" @click="Logout" class="bg-inherit">
                                    Logout
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </header>
</template>
<script>
export default {
    methods: {
        Logout() {
            this.$store.commit("setUser", null);
        },
    },
};
</script>
