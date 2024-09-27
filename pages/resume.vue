<template>
  <div class="min-h-dvh min-w-[320px] text-gray-800">
    <!-- Info -->
    <div class="container mx-auto max-w-screen-lg p-4 lg:p-8">
      <div class="grid grid-cols-1 md:mt-12 md:grid-cols-6">
        <!-- Personal -->
        <div class="p-5 text-left md:col-span-2 md:text-right">
          <img class="inline-block md:w-2/3" src="assets/images/avatar3.png" alt="我的肖像">
          <div class="mt-5 space-y-2">
            <div class="flex items-center justify-end">
              <Icon name="material-symbols:location-on" size="20" class="mr-1" />
              中国 陕西·西安
            </div>
            <div class="flex items-center justify-end">
              <Icon name="mdi:cellphone-iphone" size="20" class="mr-1" />
              +86 15702944066
            </div>
            <div class="flex items-center justify-end">
              <Icon name="ic:round-wechat" size="20" class="mr-1" /> FEsujian
            </div>
            <div class="flex items-center justify-end">
              <Icon name="uil:github" size="20" class="mr-1" /> <a
                class="font-medium text-black underline hover:text-black/75"
                href="https://github.com/fesujian">https://github.com/fesujian</a>
            </div>
            <div class="flex items-center justify-end">
              <a href="mailto:744929434@qq.com" target="_blank"
                class="font-medium text-black underline hover:text-black/75">
                <Icon name="mdi:email-fast" size="20" class="mr-1" />
                744929434@qq.com
              </a>
            </div>
            <div class="flex items-center justify-end">
              <Icon name="material-symbols:home-rounded" size="20" class="mr-1" />
              <a class="font-medium text-black underline hover:text-black/75" href="https://fesujian.com"
                target="_blank">https://fesujian.com</a>
            </div>
          </div>
        </div>
        <!-- END Personal -->

        <!-- Intro -->
        <div class="p-5 md:col-span-4">
          <h1 class="text-xl font-semibold">Web前端工程师</h1>
          <h2 class="text-5xl font-bold leading-tight">苏健</h2>
          <div class="my-5 h-1 rounded bg-blue-500"></div>
          <div class="text-lg leading-relaxed text-slate-600">
            我是一名熟练的 Web 开发人员，精通 HTML、CSS 和 JavaScript，并且在 Vue、Nuxt 和 Node.js
            方面有丰富的经验。我将用专业技术构建高效且现代的具有视觉吸引力和用户友好的网站，小程序和移动应用。</div>
        </div>
        <!-- END Intro -->
      </div>
    </div>
    <!-- END Info -->

    <!-- Bio -->
    <div class="container mx-auto max-w-screen-lg space-y-10 p-4 lg:p-8">
      <!-- Skills -->
      <div class="grid grid-cols-1 md:grid-cols-6">
        <div class="px-5 py-2 text-left md:col-span-2 md:text-right">
          <h3 class="text-lg font-bold uppercase">专业技能</h3>
        </div>
        <div class="space-y-6 px-5 py-2 md:col-span-4">
          <div>
            <div class="leading-relaxed">
            <div class="mb-4"><span class="font-semibold !text-blue-500">HTML、CSS 和 JavaScript：</span>
              <span>精通前端三大基础技术，能够编写语义化的
                HTML、响应式的 CSS
                和高效的
                JavaScript，确保网站在各种设备和浏览器上表现出色。</span>
            </div>
            <div class="mb-4"><span class="font-semibold !text-blue-500">Vue 和 Nuxt：</span>
              <span>在使用 Vue 和 Nuxt
                构建单页应用（SPA）和服务端渲染（SSR）应用方面具有丰富经验，能够快速开发出性能优异、体验流畅的现代 Web 应用。</span>
            </div>
            <div class="mb-4"><span class="font-semibold !text-blue-500">Uniapp和小程序开发：</span>
              <span>
                擅长使用 uniapp
                开发跨平台应用，同时熟悉微信小程序开发，从界面设计到功能实现，能够快速迭代并发布高质量的应用。</span>
            </div>
            <div class="mb-4"><span class="font-semibold !text-blue-500">数据可视化：</span>
              <span>
                深入理解数据可视化，熟悉
                ECharts、HighCharts、AntV
                等图表库，能够在移动端实现复杂的数据交互展示，提供直观的分析和报告。</span>
            </div>

            <div class="mb-4"><span class="font-semibold !text-blue-500">Node.js：</span>
              <span>
                熟练掌握 Node.js，用于开发高性能的后端服务和
                API，支持前端应用的数据需求，并确保系统的稳定性和可扩展性。</span>
            </div>
            <div class="mb-4"><span class="font-semibold !text-blue-500">CI/CD：</span><span>擅长使用持续集成和持续交付（CI/CD）实践，能够使用
                Jenkins、GitLab CI、Coding等工具实现自动化构建、测试和部署流程，确保代码质量和交付效率。</span></div>
            </div>
          </div>
        </div>
      </div>
      <!-- END Skills -->
      <!-- Projects -->
      <div class="grid grid-cols-1 md:grid-cols-6">
        <div class="px-5 py-2 text-left md:col-span-2 md:text-right">
          <h3 class="text-lg font-bold uppercase">项目</h3>
        </div>
        <div class="space-y-6 px-5 py-2 md:col-span-4">
          <div>
            <h4 class="mb-2 text-lg font-semibold !text-blue-500 flex items-center justify-between">
              <span>{{ $t('projects.meko.title') }}</span>
              <img src="assets/logos/meko.ai.png" alt="" class="h-[16px]">
            </h4>
            <h5 class="mb-1 font-bold">
              项目地址 - <a class="font-medium text-black underline hover:text-black/75" href="https://meko.ai"
                target="_blank">https://meko.ai</a>
            </h5>
            <div class="leading-relaxed">{{ $t('projects.meko.description') }}</div>
          </div>
          <div>
            <h4 class="mb-2 text-lg font-semibold !text-blue-500 flex items-center justify-between">
              <span>{{ $t('projects.wyocrm.title') }}</span>
              <img src="assets/logos/wyocrm.png" alt="" class="h-[16px]">
            </h4>
            <h5 class="mb-1 font-bold">
              项目地址 - <a class="font-medium text-black underline hover:text-black/75" href="https://wyocrm.com/"
                target="_blank">https://wyocrm.com/</a>
            </h5>
            <div class="leading-relaxed">{{ $t('projects.wyocrm.description') }}</div>
          </div>
          <div>
            <h4 class="mb-2 text-lg font-semibold !text-blue-500 flex items-center justify-between">
              <span>{{ $t('projects.muniubox.title') }}</span>
              <img src="assets/logos/muniubox.png" alt="" class="h-[28px]">
            </h4>
            <h5 class="mb-1 font-bold">
              项目地址 - <a class="font-medium text-black underline hover:text-black/75" href="https://www.muniubox.com/"
                target="_blank">https://www.muniubox.com/</a>
            </h5>
            <div class="leading-relaxed">{{ $t('projects.muniubox.description') }}</div>
          </div>
          <div>
            <h4 class="mb-2 text-lg font-semibold !text-blue-500 flex items-center justify-between">
              <span>{{ $t('projects.smartops.title') }}</span>
              <img src="assets/logos/smartops.png" alt="" class="h-[28px]">
            </h4>
            <h5 class="mb-1 font-bold">
              项目地址 - <a class="font-medium text-black underline hover:text-black/75"
                href="https://www.anchnet.com/platformTools/smartOps"
                target="_blank">https://www.anchnet.com/platformTools/smartOps</a>
            </h5>
            <div class="leading-relaxed">{{ $t('projects.smartops.description') }}</div>
          </div>
        </div>
      </div>
      <!-- END Projects -->

      <!-- Work Experience -->
      <div class="grid grid-cols-1 md:grid-cols-6">
        <div class="px-5 py-2 text-left md:col-span-2 md:text-right">
          <h3 class="text-lg font-bold uppercase">工作经历</h3>
        </div>
        <div class="space-y-6 px-5 py-2 md:col-span-4">
          <div>
            <h4 class="mb-2 text-lg font-semibold !text-blue-500">2023.2-2024.4</h4>
            <h5 class="mb-1 font-bold">北京分时跃动</h5>
            <!-- <div class="leading-relaxed">作为 Web Inspired LLC 的网页设计师，我翻译了我的热情 将美学和功能融入迷人的在线 经验，利用我的技能制作出视觉上令人惊叹的作品
              以用户为中心的网站，增强数字参与度。</div> -->
          </div>
          <div>
            <h4 class="mb-2 text-lg font-semibold !text-blue-500">2019.12-2023.2</h4>
            <h5 class="mb-1 font-bold">上海安畅网络</h5>
            <!-- <div class="leading-relaxed">拥抱自由 Web 开发人员的自由，我茁壮成长 项目的多样性，利用我的技术实力 通过定制和高效的方式将客户的愿景变为现实 Web 解决方案。</div> -->
          </div>
          <div>
            <h4 class="mb-2 text-lg font-semibold !text-blue-500">2019.6-2019.12</h4>
            <h5 class="mb-1 font-bold">西安网算数据</h5>
            <!-- <div class="leading-relaxed">平衡我作为 Web 兼职 Web 开发人员的承诺 Stories LLC，我通过应用我的 Web 开发技能，确保无缝的数字体验 并就增强在线形象的项目进行合作
              公司。</div> -->
          </div>
        </div>
      </div>
      <!-- END Work Experience -->



      <!-- Education -->
      <div class="grid grid-cols-1 md:grid-cols-6">
        <div class="px-5 py-2 text-left md:col-span-2 md:text-right">
          <h3 class="text-lg font-bold uppercase">教育</h3>
        </div>
        <div class="space-y-6 px-5 py-2 md:col-span-4">
          <div>
            <h4 class="mb-2 text-lg font-semibold !text-blue-500">2013-2017</h4>
            <h5 class="mb-1 font-bold">陕西中医药大学 本科</h5>
            <div class="leading-relaxed">
              拥有陕西中医药大学学习学位，虽然我非计算机科学技术专业，但我对计算机技术有浓厚兴趣，大学期间我培养了构成基石的技能和知识，使我拥有在Web开发和编程方面的专业知识。</div>
          </div>
        </div>
      </div>
      <!-- END Education -->

    </div>
    <!-- END Bio -->
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.leading-relaxed {
  line-height: 1.6;
}
</style>