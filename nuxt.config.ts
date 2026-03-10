// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['./app/assets/css/main.css'],
  modules: ['nuxt-typed-router'],
  runtimeConfig:  {
    public: {
      pocketbaseUrl: "127.0.0.1:8090", //NUXT_PUBLIC_POCKETBASE_URL
    }
  },
  vite: {
    plugins: [
    // @ts-ignore
      tailwindcss(),
    ],
  },
  
})