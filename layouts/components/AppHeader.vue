<template>
    <div class="flex items-center justify-between  p-4 app-header">
        <!-- 左侧 Logo -->
        <div class="flex items-center space-x-2">
            <!-- <img src="logo.png" alt="Blog Logo" class="h-8 w-8"> -->
            <span class="font-bold text-2xl">FEsujian</span>
        </div>

        <!-- 中间菜单 -->
        <nav class="flex-grow flex justify-center space-x-4">
            <a href="#" class="text-xl">Projects</a>
            <a href="#" class="text-xl">About Me</a>
            <a href="#" class="text-xl">Contact</a>
        </nav>

        <div class="flex items-center space-x-4">
            <button class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg">Hire Me</button>

            <!-- 切换 Light/Dark 模式按钮 -->
            <button class="bg-gray-100 p-3 rounded-lg" v-show="$colorMode.value === 'light'"
                @click="$colorMode.preference = 'dark'">
                <IconSun :size="16" />
            </button>
            <button class="bg-gray-500 p-3 rounded-lg" v-show="$colorMode.value === 'dark'"
                @click="$colorMode.preference = 'sepia'">
                <IconMoon :size="16" />
            </button>
            <button class="bg-gray-500 p-3 rounded-lg" v-show="$colorMode.value === 'sepia'"
                @click="$colorMode.preference = 'light'">
                <IconSeparatorVertical :size="16" />
            </button>
        </div>
    </div>
</template>

<script setup>
const colorMode = useColorMode();
const toggleTheme = () => {
    colorMode.preference = colorMode.preference === 'dark' ? 'light' : 'dark';
};
</script>

<style lang="scss" scoped></style>