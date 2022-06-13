declare module '@nuxt/schema' {
    interface ConfigSchema {
        $auth: () => void;
    }
}

// ドキュメント的には以下で書いたほうが良さそう。
// export default (ctx, inject) => {}

// Nuxt3 化まで考えると以下の方が移行が楽な気がするのでこっちを使用
export default defineNuxtPlugin(nuxtApp => {
    function auth (){
        console.log("認証確認メソッド");
    }

    // inject していた処理
    nuxtApp.provide('auth', auth);
});