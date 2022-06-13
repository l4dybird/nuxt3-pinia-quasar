export default defineNuxtRouteMiddleware((to, from) => {
    const { $auth } = useNuxtApp();
    $auth();
})
