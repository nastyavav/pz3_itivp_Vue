<template>
    <div id="app">
    <AppNavBar />
    <AppHeader />

    <main>
        <AppGoalsSection />
        <AppContactForm />
    </main>


    <AppFooter />
    </div>
</template>

<script>
import AppNavBar from '@/components/AppNavBar.vue';
import AppHeader from '@/components/AppHeader.vue';
import AppGoalsSection from '@/components/AppGoalsSection.vue';
import AppContactForm from '@/components/AppContactForm.vue';
import AppFooter from '@/components/AppFooter.vue';

export default {
    name: 'PageHome',
    components: {
    AppNavBar,
    AppHeader,
    AppGoalsSection,
    AppContactForm,
    AppFooter,
    },
};
</script>

<style scoped>
@import '@/styles/styles.css';
</style>