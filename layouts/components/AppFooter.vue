<!-- @format -->

<template>
  <div class="app-footer mb-10">
    <div
      class="pt-20 sm:pt-30 pb-8 mt-20 border-t-2 border-primary-light dark:border-secondary-dark"
    ></div>
    <div class="text-3xl text-center font-light">
      {{ $t('footer.followMe') }}
    </div>
    <div class="flex items-center justify-center mt-5 space-x-5 contact-list">
      <button
        class="p-3 rounded-lg dark:bg-gray-500 bg-gray-100 shadow contact-item"
      >
      <a href="https://github.com/fesujian" target="_blank"><Icon name="uil:github" size="32" /></a>
      </button>
      <button
        class="p-3 rounded-lg dark:bg-gray-500 bg-gray-100 shadow contact-item"
      >
      <a href="tencent://message/?uin=744929434&Site=Sambow&Menu=yes" class="hidden md:inline-block"><Icon name="ant-design:qq-outlined" size="32" /></a>
      <a href="mqqwpa://im/chat?chat_type=wpa&uin=744929434&version=1&src_type=web" class="md:hidden"><Icon name="ant-design:qq-outlined" size="32" /></a>
      </button>
      <VTooltip   
        :showTriggers="['click']"
        :hideTriggers="['focus']"
        :distance="12"
        >
        <button
          class="p-3 rounded-lg dark:bg-gray-500 bg-gray-100 shadow contact-item"
        >
          <Icon name="ic:round-wechat" size="32" />
        </button>
        <template #popper> 
            <div class="m-2">
                <img src="/assets/images/qrcode.png" style="width: 300px;height: auto;"></img>    
            </div>
        </template>
      </VTooltip>
      <button
        class="p-3 rounded-lg dark:bg-gray-500 bg-gray-100 shadow contact-item"
      >
      <a href="mailto:744929434@qq.com" target="_blank">        <Icon name="mdi:email-fast" size="32" />
</a>

      </button>
    </div>
    <div class="text-center mt-10 font-light mx-5 md:mx-0">
      {{ $t('footer.createdBy') }}
      <span class="text-lg font-normal">Nuxt.js & Strapi & TailwindCSS</span>
      {{ $t('footer.developedBy') }}
      <span class="text-lg font-normal">FEsujian</span>
    </div>
    <div class="text-center mt-5 text-sm font-light">
      {{ $t('footer.copyright') }}
    </div>
  </div>
</template>

<script setup>
const handleQQchat = () => {
  window.open('mqqwpa://im/chat?chat_type=wpa&uin=744929434&version=1&src_type=web')
  // window.open('tencent://message/?uin=744929434&Site=Sambow&Menu=yes')
}
</script>

<style lang="scss" scoped>
.contact-list {
  .contact-item {
    &:hover {
      background-color: #3b82f6;

      .icon {
        color: #fff;
      }
    }
  }
}
</style>
