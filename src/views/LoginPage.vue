<template>
    <div class="login-container">
        <h3 class="text-2xl text-center mb-3">Login</h3>
        <input
            v-model="userData.userName"
            type="text"
            placeholder="Kullanıcı Adı"
            class="input mb-3"
        />
        <input
            v-model="userData.password"
            type="password"
            placeholder="Şifre"
            class="input mb-3"
        />
        <button
            @click="onSubmit"
            class="bg-blue-200 w-full rounded hover:bg-blue-300"
        >
            Giriş yap
        </button>
        <span class="text-center mt-3 text-sm">
            Üye değilim,
            <router-link
                class="text-red-900 hover:text-black"
                :to="{ name: 'RegisterPage' }"
            >
                Üye olmak istiyorum!
            </router-link>
        </span>
    </div>
</template>
<script>
var CryptoJS = require("crypto-js");

export default {
    data() {
        return {
            userData: {
                userName: null,
                password: null,
            },
        };
    },
    methods: {
        onSubmit() {
            var submittedPassword = CryptoJS.SHA256(
                this.userData.password
            ).toString();
            this.$appAxios
                .get(`/userList?userName=${this.userData.userName}`)
                .then((res) => {
                    if (submittedPassword == res?.data[0]?.password) {
                        var user = res.data[0];
                        delete user.password;
                        this.$store.commit("setUser", user);
                        this.$router.push({ name: "HomePage" });
                    } else {
                        alert("Yanliş parola veya kullanici adi...");
                    }
                });
        },
    },
};
</script>
