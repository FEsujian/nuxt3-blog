<template>
    <div class="flex items-center justify-between px-2 md:px-10 py-4 relative app-header">
        <!-- Left Logo -->
        <NuxtLinkLocale to="/" class="flex items-center space-x-2 cursor-pointer ">
            <img src="/assets/images/logo.svg" alt="Blog Logo" class="h-8 w-8">
            <span class="font-bold text-2xl">FEsujian</span>
        </NuxtLinkLocale>

        <!-- Middle Menu for mobile -->
        <nav class="flex flex-col items-center space-y-2 md:hidden mobile-menu animate__animated" v-show="isMenuOpen">
            <NuxtLinkLocale to="/" class="text-xl hover:text-blue-600 my-2" active-class="text-blue-600"
                @click="isMenuOpen = false">
                {{ $t('header.home') }}
            </NuxtLinkLocale>
            <!-- <NuxtLinkLocale to="/about" class="text-xl hover:text-blue-600 my-2" active-class="text-blue-600"
                @click="isMenuOpen = false">
                {{ $t('header.aboutMe') }}
            </NuxtLinkLocale> -->
        </nav>

        <!-- Middle Menu for Desktop -->
        <nav class="hidden md:flex items-center justify-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
            <NuxtLinkLocale to="/" class="text-xl hover:text-blue-600" active-class="text-blue-600">
                {{ $t('header.home') }}
            </NuxtLinkLocale>
            <!-- <NuxtLinkLocale to="/about" class="text-xl hover:text-blue-600" active-class="text-blue-600">
                {{ $t('header.aboutMe') }}
            </NuxtLinkLocale> -->
        </nav>

        <!-- Right Buttons -->
        <div class="flex items-center space-x-2">
            <button class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg" @click="openContactModal()">{{
            $t('header.hireMe')
        }}</button>
            <button class="bg-gray-50 p-3 rounded-lg block md:hidden dark:bg-gray-500" @click="toggleMenu">
                <IconMenu :size="16" />
            </button>
        </div>
        <ContactModal ref="ContactModalRef"></ContactModal>
    </div>
</template>


<script setup>
import ContactModal from '@/components/ContactModal/index.vue';

const ContactModalRef = ref()
const openContactModal = () => {
    ContactModalRef.value.openModal()
}

const isMenuOpen = ref(false);
const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
};
</script>

<style lang="scss" scoped>
.mobile-menu {
    position: absolute;
    top: 72px;
    left: 0;
    width: 100vw;
    background-color: #fcfcfc;
    z-index: 10;
    padding: 40px 0;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}
</style>