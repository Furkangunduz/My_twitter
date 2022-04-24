<template>
    <header class="bg-slate-100">
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
            <div class="dropdowncontainer">
                <button class="">Daha Fazla</button>
                <nav tabindex="1">
                    <ul>
                        <li><a href="#">asd</a></li>
                        <li><a href="#">asd</a></li>
                        <li><a href="#">asd</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
</template>

<style>
.dropdowncontainer {
    @apply relative inline-block;
}
.dropdowncontainer button {
    @apply w-36 flex items-center justify-center rounded bg-slate-200;
}
.dropdowncontainer nav {
    @apply absolute top-full left-0 
    bg-white 
    border-2 border-cyan-700 rounded
    w-full
    mt-1
    opacity-0
    invisible
    transition-all;
}
.dropdowncontainer nav ul li a {
    @apply block py-2 px-4 hover:bg-cyan-50;
}
.dropdowncontainer:focus-within nav {
    @apply visible opacity-100;
}
</style>
