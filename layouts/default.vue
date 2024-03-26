<template>
    <div class="container mx-auto">
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
    </div>
</template>

<script setup>
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";
</script>

<style>
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