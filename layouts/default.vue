<template>
    <NuxtParticles id="tsparticles" :options="options" @load="onLoad">
    </NuxtParticles>
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
            <button class="btn-item" @click="toggleLanguage">
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
            <button class="btn-item" v-if="showScrollButton" @click="scrollToTop">
                <IconChevronUp :size="16" />
            </button>
        </div>
    </div>
</template>

<script setup>
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";


const { locale, setLocale } = useI18n();
const toggleLanguage = () => {
    if (locale.value === 'en') {
        setLocale('zh');
    } else {
        setLocale('en');
    }
}

const showScrollButton = ref(false);

const checkScrollPosition = () => {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    showScrollButton.value = scrollPosition > window.innerHeight / 2;
};

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};

onMounted(() => {
    window.addEventListener('scroll', checkScrollPosition);
});

onUnmounted(() => {
    window.removeEventListener('scroll', checkScrollPosition);
});

const options = {
    fpsLimit: 60,
    fullScreen: {
        enable: true,
        zIndex: -1
    },
    interactivity: {
        detectsOn: 'canvas',
        events: {
            onClick: { // 开启鼠标点击的效果
                enable: true,
                mode: 'push'
            },
            onHover: { // 开启鼠标悬浮的效果(线条跟着鼠标移动)
                enable: true,
                mode: 'grab'
            },
            resize: true
        },
        modes: { // 配置动画效果
            bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40
            },
            push: {
                quantity: 4
            },
            grab: {
                distance: 200,
                duration: 0.4
            },
            attract: { // 鼠标悬浮时，集中于一点，鼠标移开时释放产生涟漪效果
                distance: 200,
                duration: 0.4,
                factor: 5
            }
        }
    },
    particles: {
        color: {
            value: '#a6c1f1' // 粒子点的颜色
        },
        links: {
            color: '#a6c2f1', // 线条颜色
            distance: 150,//线条距离
            enable: true,
            opacity: 0.4, // 不透明度
            width: 1.2 // 线条宽度
        },
        collisions: {
            enable: true
        },
        move: {
            attract: { enable: false, rotateX: 600, rotateY: 1200 },
            bounce: false,
            direction: 'none',
            enable: true,
            out_mode: 'out',
            random: false,
            speed: 0.8, // 移动速度
            straight: false
        },
        number: {
            density: {
                enable: true,
                value_area: 800
            },
            value: 20//粒子数
        },
        opacity: {//粒子透明度
            value: 0.7
        },
        shape: {//粒子样式
            type: 'star'
        },
        size: {//粒子大小
            random: true,
            value: 3
        }
    },
    detectRetina: true
}
const onLoad = (container) => {
    // Do something with the container
    container.pause()
    setTimeout(() => container.play(), 0)
}

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