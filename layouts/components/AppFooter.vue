<template>
    <div class="app-footer">
        <div class="pt-20 sm:pt-30 pb-8 mt-20 border-t-2 border-primary-light dark:border-secondary-dark"></div>
        <div class="text-4xl text-center font-light">{{ $t('footer.followMe') }}</div>
        <div class="flex items-center justify-center mt-5 space-x-5 contact-list">
            <button class="p-3 rounded-lg dark:bg-gray-500 bg-gray-100 shadow contact-item">
                <Icon name="uil:github" size="32" />
            </button>
            <button class="p-3 rounded-lg dark:bg-gray-500 bg-gray-100 shadow contact-item">
                <Icon name="ant-design:qq-outlined" size="32" />
            </button>
            <button class="p-3 rounded-lg dark:bg-gray-500 bg-gray-100 shadow contact-item">
                <Icon name="ic:round-wechat" size="32" />
            </button>
            <button class="p-3 rounded-lg dark:bg-gray-500 bg-gray-100 shadow contact-item">
                <Icon name="mdi:email-fast" size="32" />
            </button>
        </div>
        <div class="text-center mt-10 font-light">
            {{ $t('footer.createdBy') }}
            <span class="text-lg font-normal">Nuxt.js & TailwindCSS</span>
            {{ $t('footer.developedBy') }}
            <span class="text-lg font-normal">FEsujian</span>
        </div>
        <div class="text-center mt-5 text-sm font-light">
            {{ $t('footer.copyright') }}
        </div>
    </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.contact-list {
    .contact-item {
        &:hover {
            background-color: #3B82F6;

            .icon {
                color: #fff;
            }
        }
    }
}
</style>