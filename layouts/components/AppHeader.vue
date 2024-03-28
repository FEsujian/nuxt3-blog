<template>
    <div class="flex items-center justify-between p-4 app-header">
        <!-- Left Logo -->
        <div class="flex items-center space-x-2 cursor-pointer">
            <img src="/assets//images/logo.svg" alt="Blog Logo" class="h-8 w-8">
            <span class="font-bold text-2xl">FEsujian</span>
        </div>

        <!-- Middle Menu -->
        <nav class="hidden md:flex flex-grow justify-center space-x-4">
            <NuxtLink to="/" class="text-xl hover:text-blue-600">
                {{ $t('header.projects') }}
            </NuxtLink>
            <NuxtLink to="/about" class="text-xl hover:text-blue-600">
                {{ $t('header.aboutMe') }}
            </NuxtLink>
            <NuxtLink to="/contact" class="text-xl hover:text-blue-600">
                {{ $t('header.contact') }}
            </NuxtLink>
        </nav>

        <!-- Right Buttons -->
        <div class="flex items-center space-x-2">
            <button class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg" @click="openContactModal()">{{
                    $t('header.hireMe')
                }}</button>
            <button class="bg-gray-50 p-3 rounded-lg block md:hidden dark:bg-gray-500">
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
</script>

<style lang="scss" scoped></style>