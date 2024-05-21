<!-- @format -->

<template>
  <div class="text-4xl font-bold text-center my-20">
    <introduce></introduce>
    <div class="text-4xl font-bold text-center my-20">
      {{ $t('header.projects') }}
    </div>
    <div class="project-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8">
      <div @click="goTo('https://www.meko.ai/guide?hasName=false')"
        class="project-item shadow-lg rounded-lg overflow-hidden transition-transform transition-shadow transform hover:translate-y-[-5px] flex flex-col mx-4 sm:mx-0">
        <div class="image-wrap">
          <img src="@/assets/images/project1.png" alt="" />
        </div>
        <div class="info-wrap p-4">
          <div class="title text-2xl font-semibold mb-2">{{ $t('projects.meko.title') }}</div>
          <div class="description text-gray-600 font-normal text-sm">
            {{ $t('projects.meko.description') }}
          </div>
        </div>
      </div>
      <div @click="goTo('https://wyocrm.com/')"
        class="project-item shadow-lg rounded-lg overflow-hidden transition-transform transition-shadow transform hover:translate-y-[-5px] flex flex-col mx-4 sm:mx-0">
        <div class="image-wrap object-fill">
          <img src="@/assets/images/project3.png" alt="" />
        </div>
        <div class="info-wrap p-4">
          <div class="title text-2xl font-semibold mb-2">{{ $t('projects.wyocrm.title') }}</div>
          <div class="description text-gray-600 font-normal text-sm">
            {{ $t('projects.wyocrm.description') }}
          </div>
        </div>
      </div>
      <div @click="goTo('https://www.muniubox.com/')"
        class="project-item shadow-lg rounded-lg overflow-hidden transition-transform transition-shadow transform hover:translate-y-[-5px] flex flex-col mx-4 sm:mx-0">
        <div class="image-wrap object-cover">
          <img src="@/assets/images/project2.png" alt="" />
        </div>
        <div class="info-wrap p-4">
          <div class="title text-2xl font-semibold mb-2">{{ $t('projects.muniubox.title') }}</div>
          <div class="description text-gray-600 font-normal text-sm">
            {{ $t('projects.muniubox.description') }}
          </div>
        </div>
      </div>
      <div @click="goTo('https://www.anchnet.com/platformTools/smartOps')"
        class="project-item shadow-lg rounded-lg overflow-hidden transition-transform transition-shadow transform hover:translate-y-[-5px] flex flex-col mx-4 sm:mx-0">
        <div class="image-wrap object-fill">
          <img src="@/assets/images/project4.png" alt="" />
        </div>
        <div class="info-wrap p-4">
          <div class="title text-2xl font-semibold mb-2">{{ $t('projects.smartops.title') }}</div>
          <div class="description text-gray-600 font-normal text-sm">
            {{ $t('projects.smartops.description') }}
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import introduce from './introduce.vue';
const goTo = (url, type = 'link') => {
  window.open(url, '_blank')
}
</script>

<style lang="scss" scoped>
.project-item {
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  .image-wrap {
    flex: 1;
    min-height: 360px;

    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
      /* 使图片充满容器 */
    }
  }

  .info-wrap {
    height: 170px;
  }
}

.project-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
}
</style>
