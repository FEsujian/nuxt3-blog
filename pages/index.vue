<!-- @format -->

<template>
  <div class="text-4xl font-bold text-center my-20">
    <div class="text-4xl font-bold text-center my-20">
      {{ $t('header.projects') }}
    </div>
    <div
      class="project-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8"
    >
      <div
        @click="goTo('link', 'https://www.meko.ai/guide?hasName=false')"
        class="project-item shadow-lg rounded-lg overflow-hidden transition-transform transition-shadow transform hover:translate-y-[-5px] flex flex-col mx-4 sm:mx-0"
      >
        <div class="image-wrap">
          <img src="@/assets/images/project1.png" alt="" />
        </div>
        <div class="info-wrap p-4">
          <div class="title text-2xl font-semibold mb-2">Meko.ai</div>
          <div class="description text-gray-600 font-normal text-sm">
            Meko.ai 是一款创新的艺术创作与互动平台，旨在帮助艺术家和创作者们最大化他们的潜力，轻松管理和展示他们的作品。无论你是插画师、作家、音乐家还是任何形式的创意者，Meko.ai 都能为你提供全方位的支持。
          </div>
        </div>
      </div>
      <div
        class="project-item shadow-lg rounded-lg overflow-hidden transition-transform transition-shadow transform hover:translate-y-[-5px] flex flex-col mx-4 sm:mx-0"
      >
        <div class="image-wrap">
          <img src="@/assets/images/project2.png" alt="" />
        </div>
        <div class="info-wrap p-4">
          <div class="title text-2xl font-semibold mb-2">木牛盒子-财税管理系统</div>
          <div class="description text-gray-600 font-normal text-sm">
            木牛盒子帮您寻找客源、创建客户档案、持续跟进客户，详细记录客户从签约、服务、续约全生命周期服务的流程信息，并提供收款、续约等定期回访提醒功能，极早发现服务漏洞，有效避免客户满意度下降。
          </div>
        </div>
      </div>
      <div
        class="project-item shadow-lg rounded-lg overflow-hidden transition-transform transition-shadow transform hover:translate-y-[-5px] flex flex-col mx-4 sm:mx-0"
      >
        <div class="image-wrap">
          <img src="@/assets/images/project3.png" alt="" />
        </div>
        <div class="info-wrap p-4">
          <div class="title text-2xl font-semibold mb-2">Project1</div>
          <div class="description text-gray-600 font-normal text-sm">
            This is project description
          </div>
        </div>
      </div>
      <div
        class="project-item shadow-lg rounded-lg overflow-hidden transition-transform transition-shadow transform hover:translate-y-[-5px] flex flex-col mx-4 sm:mx-0"
      >
        <div class="image-wrap">
          <img src="@/assets/images/project4.png" alt="" />
        </div>
        <div class="info-wrap p-4">
          <div class="title text-2xl font-semibold mb-2">Project1</div>
          <div class="description text-gray-600 font-normal text-sm">
            This is project description
          </div>
        </div>
      </div>
      <div
        class="project-item shadow-lg rounded-lg overflow-hidden transition-transform transition-shadow transform hover:translate-y-[-5px] flex flex-col mx-4 sm:mx-0"
      >
        <div class="image-wrap">
          <img src="@/assets/images/project5.png" alt="" />
        </div>
        <div class="info-wrap p-4">
          <div class="title text-2xl font-semibold mb-2">Project1</div>
          <div class="description text-gray-600 font-normal text-sm">
            This is project description
          </div>
        </div>
      </div>
      <div
        class="project-item shadow-lg rounded-lg overflow-hidden transition-transform transition-shadow transform hover:translate-y-[-5px] flex flex-col mx-4 sm:mx-0"
      >
        <div class="image-wrap">
          <img src="@/assets/images/project6.png" alt="" />
        </div>
        <div class="info-wrap p-4">
          <div class="title text-2xl font-semibold mb-2">Project6</div>
          <div class="description text-gray-600 font-normal text-sm">
            This is project description
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const goTo = (type, url) => {
  console.log('goto')
  window.open(url, '_blank')
}
</script>

<style lang="scss" scoped>
.project-item {
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  .image-wrap {
    flex: 1;

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
