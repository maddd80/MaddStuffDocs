import DefaultTheme from 'vitepress/theme'
import '@red-asuka/vitepress-plugin-tabs/dist/style.css'
import { Tab, Tabs } from "vue3-tabs-component";
export default {
    extends: DefaultTheme,
    async enhanceApp({ app }: any) {
        app.component("Tab", Tab);
        app.component("Tabs", Tabs);
    },
}