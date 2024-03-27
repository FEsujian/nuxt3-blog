<template>
    <div class="flex items-center justify-between  p-4 app-header">
        <!-- 左侧 Logo -->
        <div class="flex items-center space-x-2 cursor-pointer">
            <img src="/assets//images/logo.svg" alt="Blog Logo" class="h-8 w-8">
            <span class="font-bold text-2xl">FEsujian</span>
        </div>

        <!-- 中间菜单 -->
        <nav class="hidden md:flex flex-grow justify-center space-x-4">
            <a href="#" class="text-xl hover:text-blue-600">Projects</a>
            <a href="#" class="text-xl hover:text-blue-600">About Me</a>
            <a href="#" class="text-xl hover:text-blue-600">Contact</a>
        </nav>

        <div class="flex items-center space-x-2">
            <button class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg">Hire Me</button>
            <button class="bg-gray-50 p-3 rounded-lg block md:hidden dark:bg-gray-500">
                <IconMenu :size="16" />
            </button>
        </div>
    </div>
</template>

<script setup>
</script>

<style lang="scss" scoped></style>