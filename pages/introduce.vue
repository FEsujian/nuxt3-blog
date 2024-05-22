<template>
    <div class="introduce">
        <div class="typing-string">
            <TypedComponent :options="options">
                <span class="typing"></span>
            </TypedComponent>
        </div>
        <div class="avatar-container w-40 h-40 rounded-full overflow-hidden mb-10" @mouseenter="handleMouseEnter"
            @mouseleave="handleMouseLeave">
            <img src="@/assets/images/avatar.png" alt="Avatar" class="avatar" ref="avatarRef">
        </div>
        <div class="item">
            <span class="label">{{ $t('contact.age') }} :</span>
            <span class="text">{{ $t('contact.age_value') }}</span>
        </div>
        <div class="item">
            <span class="label">{{ $t('contact.birthday') }} :</span>
            <span class="text">{{ $t('contact.birthday_value') }}</span>
        </div>
        <div class="item">
            <span class="label">{{ $t('contact.address') }} :</span>
            <span class="text">{{ $t('contact.address_value') }}</span>
        </div>
        <div class="item">
            <span class="label">{{ $t('contact.email') }} :</span>
            <span class="text">fesujian@qq.com</span>
        </div>
        <div class="item">
            <span class="label">{{ $t('contact.wechat') }} :</span>
            <span class="text">{{ $t('contact.wechat_value') }}</span>
        </div>
        <div class="item">
            <span class="label">{{ $t('contact.occupation') }} :</span>
            <span class="text">{{ $t('contact.occupation_value') }}</span>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { TypedComponent } from "typed-vue3";

const { t } = useI18n();
const typedStrings = ref([
    `<span>${t('contact.greeting')}</span>`,
    `<span>${t('contact.profession')}</span>`,
    `<span>${t('contact.fromLocation',)}</span>`,
    `<span>${t('contact.welcome')}</span>`,
]);

const options = {
    strings: typedStrings.value,
    typeSpeed: 50,
    loop: true,
    backSpeed: 20,
    backDelay: 2000,
    showCursor: false,
    cursorChar: '|',
};

const avatarRef = ref(null);

const handleMouseEnter = () => {
    if (avatarRef.value) {
        avatarRef.value.classList.add('rotating');
    }
};

const handleMouseLeave = () => {
    if (avatarRef.value) {
        avatarRef.value.classList.remove('rotating');
    }
};

onMounted(() => { });
</script>

<style lang="scss" scoped>
.introduce {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 20px 0;
}

.item {
    margin-bottom: 10px;
    font-size: 1.2rem;

    .label {
        margin-right: 10px;
    }
}

.avatar-container {
    &:hover .avatar {
        animation: rotate 2s linear infinite;
    }
}

@keyframes rotate {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}

.avatar {
    transition: transform 0.5s;
}

.rotating {
    animation: rotate 10s linear infinite;
}

.typing-string {
    overflow: hidden;
    position: relative;
    margin-bottom: 50px;
    height: 50px;
}
</style>

<style lang="scss">
.typing {
    @apply text-gray-600 md:text-5xl text-2xl;

    .highlight {
        color: #3b82f6 !important;
    }
}
</style>
