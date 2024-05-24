<template>
    <div class="introduce">
        <div class="typing-string">
            <TypedComponent :options="options">
                <span class="typing">
                </span>
            </TypedComponent>
        </div>
        <div class="avatar-container w-40 h-40 rounded-full overflow-hidden mb-10" @mouseenter="handleMouseEnter"
            @mouseleave="handleMouseLeave">
            <img src="@/assets/images/avatar.png" alt="Avatar" class="avatar" ref="avatarRef">
        </div>
        <div class="contact-list">
            <button class="dark:bg-gray-500 bg-gray-100 shadow contact-item">
                <a href="https://github.com/fesujian" target="_blank">
                    <Icon name="uil:github" size="24" />
                </a>
            </button>
            <button class="dark:bg-gray-500 bg-gray-100 shadow contact-item">
                <a href="tencent://message/?uin=744929434&Site=Sambow&Menu=yes" class="!hidden !md:flex">
                    <Icon name="ant-design:qq-outlined" size="24" />
                </a>
                <a href="mqqwpa://im/chat?chat_type=wpa&uin=744929434&version=1&src_type=web" class="!md:hidden !flex">
                    <Icon name="ant-design:qq-outlined" size="24" />
                </a>
            </button>
            <VTooltip :showTriggers="['click']" :hideTriggers="['focus']" :distance="12" aria-id="x-popper">
                <button class="dark:bg-gray-500 bg-gray-100 shadow contact-item">
                    <Icon name="ic:round-wechat" size="24" />
                </button>
                <template #popper>
                    <div class="m-2">
                        <img src="/assets/images/qrcode.png" style="width: 300px;height: auto;"></img>
                    </div>
                </template>
            </VTooltip>
            <button class="dark:bg-gray-500 bg-gray-100 shadow contact-item">
                <a href="mailto:744929434@qq.com" target="_blank">
                    <Icon name="mdi:email-fast" size="24" />
                </a>
            </button>
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
const typedStrings = [
    `<span>${t('contact.greeting')}</span>`,
    // `<span>${t('contact.profession')}</span>`,
    // `<span>${t('contact.fromLocation',)}</span>`,
    // `<span>${t('contact.welcome')}</span>`,
];

const options = {
    strings: typedStrings,
    typeSpeed: 50,
    loop: true,
    backSpeed: 20,
    backDelay: 2000,
    showCursor: false,
    cursorChar: '|',
    contentType: 'html',
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

.contact-list {
    display: flex;
    align-items: center;
    margin-bottom: 20px;

    .contact-item {
        width: 38px;
        height: 38px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        margin: 0 10px;
        box-sizing: border-box;

        a {
            width: 36px;
            height: 36px;
            display: flex;
            align-items: center;
            justify-content: center;
            box-sizing: border-box;
        }

        &:hover {
            background-color: #3b82f6;

            .icon {
                color: #fff;
            }
        }
    }
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
