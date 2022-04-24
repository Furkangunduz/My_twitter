<template>
    <div class="login-container">
        <h3 class="text-2xl text-center mb-3">Register</h3>
        <input
            v-model="userData.fullName"
            type="text"
            placeholder="Tam Adınız"
            class="input mb-3"
            autocomplete="off"
        />
        <input
            v-model="userData.userName"
            type="text"
            placeholder="Kullanıcı Adınız"
            class="input mb-3"
            autocomplete="off"
        />
        <input
            v-model="userData.password"
            type="password"
            placeholder="Şifre"
            class="input mb-3"
            autocomplete="off"
        />
        <button
            @click="onSubmit"
            class="bg-blue-200 w-full rounded hover:bg-blue-300"
        >
            Kayıt Ol
        </button>
        <span class="text-center mt-3 text-sm">
            Zaten üyeyim ,
            <router-link
                class="text-red-900 hover:text-black"
                :to="{ name: 'LoginPage' }"
            >
                Giriş yapmak istiyorum!
            </router-link>
        </span>
    </div>
</template>
<script>
// import axios from "axios";
var CryptoJS = require("crypto-js");
export default {
    data() {
        return {
            userData: {
                userName: null,
                fullName: null,
                password: null,
            },
        };
    },
    methods: {
        onSubmit() {
            var savedData = {
                fullName: this.userData.fullName,
                userName: this.userData.userName,
                password:
                    this.userData.password == null
                        ? null
                        : CryptoJS.SHA256(this.userData.password).toString(),
            };
            //check if is there missing input
            if (
                !Object.keys(savedData).some((field) => {
                    return savedData[field] == null;
                })
            ) {
                this.$appAxios.post("/userList", savedData).then(() => {
                    console.log("succesfuly registered");
                });
            }
        },
    },
};
</script>
<style>
#pass:invalid + button {
    opacity: 0.5;
    pointer-events: none;
}
</style>
