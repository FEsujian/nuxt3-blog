<template>
    <div class="container mx-auto relative">
        <!-- App header -->
        <AppHeader />
        <!-- Render contents with transition -->
        <transition name="fade" mode="out-in">
            <main class="app-main">
                <slot></slot>
            </main>
        </transition>

        <!-- App footer -->
        <AppFooter />

        <div class="fixed-wrap space-y-2">
            <button class="btn-item">
                <IconLanguages :size="16" />
            </button>
            <!-- 切换 Light/Dark 模式按钮 -->
            <button class="btn-item" v-show="$colorMode.value === 'light'" @click="$colorMode.preference = 'dark'">
                <IconSun :size="16" />
            </button>
            <button class="btn-item" v-show="$colorMode.value === 'dark'" @click="$colorMode.preference = 'sepia'">
                <IconMoon :size="16" />
            </button>
            <button class="btn-item" v-show="$colorMode.value === 'sepia'" @click="$colorMode.preference = 'light'">
                <IconSeparatorVertical :size="16" />
            </button>
            <button class="btn-item">
                <IconChevronUp :size="16" />
            </button>
        </div>
    </div>
</template>

<script setup>
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";
</script>

<style lang="scss">
.fixed-wrap {
    position: fixed;
    bottom: 20px;
    right: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .btn-item {
        @apply bg-gray-50 p-3 rounded-lg dark:bg-gray-500 hover:bg-[#3B82F6];

        &:hover {
            .lucide {
                color: #fff;
            }
        }
    }
}

.fade-enter-active {
    animation: coming 0.4s;
    animation-delay: 0.2s;
    opacity: 0;
}

.fade-leave-active {
    animation: going 0.4s;
}

@keyframes going {
    from {
        transform: translateX(0);
    }

    to {
        transform: translateX(-10px);
        opacity: 0;
    }
}

@keyframes coming {
    from {
        transform: translateX(-10px);
        opacity: 0;
    }

    to {
        transform: translateX(0px);
        opacity: 1;
    }
}
</style>