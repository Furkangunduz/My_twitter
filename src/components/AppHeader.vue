<template>
    <header class="bg-gray-100">
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
                <div class="dropdowncontainer">
                    <button class="">Daha Fazla</button>
                    <nav tabindex="1">
                        <ul>
                            <li><a href="#">My Profile</a></li>
                            <li><a href="#">Logout</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </header>
</template>
