<template>
  <div class="corporate-website">
    <!-- 导航栏 -->
    <header class="bg-blue-900 text-white">
      <div class="container mx-auto px-4 py-3 flex flex-wrap items-center justify-between">
        <div class="flex items-center">
          <img src="~/assets/logos/logo.svg" alt="立虎科技" class="h-10 mr-3 filter brightness-0 invert" />
          <h1 class="text-xl font-bold">立虎科技</h1>
        </div>
        
        <!-- 移动端菜单按钮 -->
        <div class="block lg:hidden">
          <button @click="toggleMobileMenu" class="flex items-center px-3 py-2 border rounded text-white border-white hover:text-blue-200 hover:border-blue-200">
            <Icon name="heroicons:bars-3" class="h-5 w-5" />
          </button>
        </div>
        
        <!-- 桌面端导航 -->
        <nav class="hidden lg:flex lg:items-center lg:w-auto">
          <ul class="flex space-x-8">
            <li><a href="#" class="text-white hover:text-blue-200">首页</a></li>
            <li><a href="#solutions" class="text-white hover:text-blue-200">解决方案</a></li>
            <li><a href="#services" class="text-white hover:text-blue-200">成功案例</a></li>
            <li><a href="#news" class="text-white hover:text-blue-200">新闻资讯</a></li>
            <li><a href="#about" class="text-white hover:text-blue-200">关于我们</a></li>
          </ul>
        </nav>
      </div>
      
      <!-- 移动端菜单 -->
      <div :class="{'hidden': !mobileMenuOpen, 'block': mobileMenuOpen}" class="lg:hidden">
        <ul class="px-4 py-2 bg-blue-800">
          <li><a href="#" class="block py-2 text-white hover:text-blue-200">首页</a></li>
          <li><a href="#solutions" class="block py-2 text-white hover:text-blue-200">解决方案</a></li>
          <li><a href="#services" class="block py-2 text-white hover:text-blue-200">成功案例</a></li>
          <li><a href="#news" class="block py-2 text-white hover:text-blue-200">新闻资讯</a></li>
          <li><a href="#about" class="block py-2 text-white hover:text-blue-200">关于我们</a></li>
        </ul>
      </div>
    </header>

    <!-- 英雄区域 - 全景看世界 -->
    <section class="hero relative h-[500px] lg:h-[600px] bg-gradient-to-b from-blue-800 to-blue-600 flex items-center justify-center overflow-hidden">
      <div class="absolute inset-0 z-0">
        <img src="~/assets/images/tech-hero.jpg" alt="创新科技背景" class="w-full h-full object-cover opacity-50" />
      </div>
      <div class="container mx-auto px-4 text-center relative z-10">
        <h2 class="text-4xl md:text-6xl font-bold text-white mb-3 animate-title">创新引领 数字未来</h2>
        <p class="text-lg md:text-xl text-white mb-8 uppercase tracking-widest animate-subtitle">INNOVATIVE TECHNOLOGY FOR THE FUTURE</p>
      </div>
    </section>

    <!-- 行业领域介绍 -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-3">专业软件开发服务</h2>
        <p class="text-gray-600 mb-12">提供企业级应用开发、移动应用、Web开发等全方位技术服务</p>
        
        <!-- 应用场景图标 - 第一行 -->
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
          <div class="flex flex-col items-center">
            <div class="w-16 h-16 mb-3 text-blue-600">
              <Icon name="mdi:web" class="w-full h-full" />
            </div>
            <p class="text-gray-700">网站开发</p>
          </div>
          <div class="flex flex-col items-center">
            <div class="w-16 h-16 mb-3 text-blue-600">
              <Icon name="mdi:cellphone" class="w-full h-full" />
            </div>
            <p class="text-gray-700">移动应用开发</p>
          </div>
          <div class="flex flex-col items-center">
            <div class="w-16 h-16 mb-3 text-blue-600">
              <Icon name="mdi:desktop-mac" class="w-full h-full" />
            </div>
            <p class="text-gray-700">桌面应用开发</p>
          </div>
          <div class="flex flex-col items-center">
            <div class="w-16 h-16 mb-3 text-blue-600">
              <Icon name="mdi:cloud-outline" class="w-full h-full" />
            </div>
            <p class="text-gray-700">云服务解决方案</p>
          </div>
          <div class="flex flex-col items-center">
            <div class="w-16 h-16 mb-3 text-blue-600">
              <Icon name="mdi:database" class="w-full h-full" />
            </div>
            <p class="text-gray-700">数据库开发</p>
          </div>
        </div>
        
        <!-- 应用场景图标 - 第二行 -->
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
          <div class="flex flex-col items-center">
            <div class="w-16 h-16 mb-3 text-blue-600">
              <Icon name="mdi:security" class="w-full h-full" />
            </div>
            <p class="text-gray-700">网络安全解决方案</p>
          </div>
          <div class="flex flex-col items-center">
            <div class="w-16 h-16 mb-3 text-blue-600">
              <Icon name="mdi:chart-line" class="w-full h-full" />
            </div>
            <p class="text-gray-700">数据分析与可视化</p>
          </div>
          <div class="flex flex-col items-center">
            <div class="w-16 h-16 mb-3 text-blue-600">
              <Icon name="mdi:robot" class="w-full h-full" />
            </div>
            <p class="text-gray-700">人工智能应用</p>
          </div>
          <div class="flex flex-col items-center">
            <div class="w-16 h-16 mb-3 text-blue-600">
              <Icon name="mdi:cogs" class="w-full h-full" />
            </div>
            <p class="text-gray-700">系统集成</p>
          </div>
          <div class="flex flex-col items-center">
            <div class="w-16 h-16 mb-3 text-blue-600">
              <Icon name="mdi:headset" class="w-full h-full" />
            </div>
            <p class="text-gray-700">技术支持与维护</p>
          </div>
        </div>
        
        <!-- <button class="bg-white text-blue-600 border border-blue-600 px-8 py-3 rounded-md hover:bg-blue-50 transition-colors">
          查看更多
        </button> -->
      </div>
    </section>

    <!-- 解决方案 -->
    <section id="solutions" class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-12 text-center">软件开发解决方案</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- 解决方案卡片 1 -->
          <div class="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:transform hover:scale-105">
            <div class="h-48 bg-blue-600 relative">
              <!-- 这里可以放解决方案相关图片 -->
              <img src="~/assets/images/enterprise-app.jpg" alt="企业级应用解决方案" class="w-full h-full object-cover" />
            </div>
            <div class="p-6">
              <h3 class="text-xl font-semibold mb-2">企业级应用解决方案</h3>
              <p class="text-gray-600 mb-4">定制化开发满足企业特定需求的软件系统，提升工作效率和业务流程。</p>
              <a href="#" class="text-blue-600 hover:text-blue-800">了解更多 →</a>
            </div>
          </div>
          
          <!-- 解决方案卡片 2 -->
          <div class="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:transform hover:scale-105">
            <div class="h-48 bg-blue-600 relative">
              <!-- 这里可以放解决方案相关图片 -->
              <img src="~/assets/images/mobile-app.jpg" alt="移动应用开发方案" class="w-full h-full object-cover" />
            </div>
            <div class="p-6">
              <h3 class="text-xl font-semibold mb-2">移动应用开发方案</h3>
              <p class="text-gray-600 mb-4">为iOS和Android平台开发高性能、用户友好的移动应用，提升用户体验。</p>
              <a href="#" class="text-blue-600 hover:text-blue-800">了解更多 →</a>
            </div>
          </div>
          
          <!-- 解决方案卡片 3 -->
          <div class="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:transform hover:scale-105">
            <div class="h-48 bg-blue-600 relative">
              <!-- 这里可以放解决方案相关图片 -->
              <img src="~/assets/images/cloud-service.jpg" alt="云服务与大数据解决方案" class="w-full h-full object-cover" />
            </div>
            <div class="p-6">
              <h3 class="text-xl font-semibold mb-2">云服务与大数据解决方案</h3>
              <p class="text-gray-600 mb-4">基于云技术打造可扩展、高可用的系统架构，结合大数据分析提供智能决策支持。</p>
              <a href="#" class="text-blue-600 hover:text-blue-800">了解更多 →</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 主要服务/案例展示 -->
    <section id="services" class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-12 text-center">精选案例</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- 案例项目1 -->
          <div class="bg-gray-50 rounded-lg overflow-hidden shadow-md">
            <div class="h-64 bg-blue-600 relative">
              <!-- 这里可以放案例相关图片 -->
              <img src="~/assets/images/digital-transformation.jpg" alt="西安某企业数字化转型项目" class="w-full h-full object-cover" />
            </div>
            <div class="p-6">
              <h3 class="text-xl font-semibold mb-2">西安某企业数字化转型项目</h3>
              <p class="text-gray-600 mb-4">为客户设计并实施整体数字化转型解决方案，提升运营效率降低30%成本。</p>
              <a href="#" class="text-blue-600 hover:text-blue-800">查看详情 →</a>
            </div>
          </div>
          
          <!-- 案例项目2 -->
          <div class="bg-gray-50 rounded-lg overflow-hidden shadow-md">
            <div class="h-64 bg-blue-600 relative">
              <!-- 这里可以放案例相关图片 -->
              <img src="~/assets/images/ecommerce.jpg" alt="移动电商平台开发" class="w-full h-full object-cover" />
            </div>
            <div class="p-6">
              <h3 class="text-xl font-semibold mb-2">全渠道电商平台开发</h3>
              <p class="text-gray-600 mb-4">开发支持Web和移动端的全渠道电商平台，助力客户实现销售额增长200%。</p>
              <a href="#" class="text-blue-600 hover:text-blue-800">查看详情 →</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 公司优势 -->
    <section class="py-16 bg-blue-900 text-white">
      <div class="container mx-auto px-4">
        <h2 class="text-2xl md:text-3xl font-bold mb-12 text-center">为什么选择立虎科技</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="text-center">
            <div class="w-16 h-16 mx-auto mb-4 text-blue-300">
              <Icon name="mdi:medal-outline" class="w-full h-full" />
            </div>
            <h3 class="text-xl font-semibold mb-2">专业团队</h3>
            <p class="text-blue-100">拥有多年软件开发经验的专业团队，保证项目质量和交付效率</p>
          </div>
          
          <div class="text-center">
            <div class="w-16 h-16 mx-auto mb-4 text-blue-300">
              <Icon name="mdi:monitor-dashboard" class="w-full h-full" />
            </div>
            <h3 class="text-xl font-semibold mb-2">先进技术</h3>
            <p class="text-blue-100">采用最新技术栈和敏捷开发方法，确保软件的先进性和可扩展性</p>
          </div>
          
          <div class="text-center">
            <div class="w-16 h-16 mx-auto mb-4 text-blue-300">
              <Icon name="mdi:handshake" class="w-full h-full" />
            </div>
            <h3 class="text-xl font-semibold mb-2">全程服务</h3>
            <p class="text-blue-100">从需求分析到方案设计、实施部署及后期维护的全生命周期服务</p>
          </div>
          
          <div class="text-center">
            <div class="w-16 h-16 mx-auto mb-4 text-blue-300">
              <Icon name="mdi:account-group-outline" class="w-full h-full" />
            </div>
            <h3 class="text-xl font-semibold mb-2">成功案例</h3>
            <p class="text-blue-100">服务过众多行业客户，积累了丰富的实战经验和成功案例</p>
          </div>
        </div>
      </div>
    </section>


    <!-- 联系我们 -->
    <section id="about" class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-12 text-center">联系我们</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 class="text-xl font-semibold mb-4">西安立虎信息科技有限责任公司</h3>
            <p class="text-gray-600 mb-6">立虎科技致力于为企业提供专业的软件开发和数字化转型解决方案，帮助客户创造价值。</p>
            
            <div class="space-y-4">
              <div class="flex items-start">
                <div class="text-blue-600 mr-3 mt-1">
                  <Icon name="mdi:map-marker" class="w-5 h-5" />
                </div>
                <div>
                  <p class="text-gray-700">地址：西安市鄠邑区大陆桥英郡12802室</p>
                </div>
              </div>
              
              <div class="flex items-start">
                <div class="text-blue-600 mr-3 mt-1">
                  <Icon name="mdi:phone" class="w-5 h-5" />
                </div>
                <div>
                  <p class="text-gray-700">电话：15702944066</p>
                </div>
              </div>
              
              <div class="flex items-start">
                <div class="text-blue-600 mr-3 mt-1">
                  <Icon name="mdi:email-outline" class="w-5 h-5" />
                </div>
                <div>
                  <p class="text-gray-700">邮箱：contact@lihuyun.com</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <form class="bg-white p-6 rounded-lg shadow-md">
              <div class="mb-4">
                <label for="name" class="block text-gray-700 mb-2">姓名</label>
                <input type="text" id="name" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
              </div>
              
              <div class="mb-4">
                <label for="email" class="block text-gray-700 mb-2">邮箱</label>
                <input type="email" id="email" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
              </div>
              
              <div class="mb-4">
                <label for="message" class="block text-gray-700 mb-2">留言</label>
                <textarea id="message" rows="4" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"></textarea>
              </div>
              
              <button type="submit" class="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
                提交留言
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- 页脚 -->
    <footer class="bg-gray-800 text-white py-12">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 class="text-lg font-semibold mb-4">立虎科技</h3>
            <div class="flex items-center mb-4">
              <img src="~/assets/logos/logo.svg" alt="立虎科技" class="h-12 filter brightness-0 invert" />
            </div>
            <p class="text-gray-400 mb-3">科技创新，驱动未来</p>
            <p class="text-gray-500 text-sm mb-3">立虎科技成立于2023年，是一家专注于企业数字化转型的软件开发服务商。我们致力于为客户提供定制化的软件解决方案，帮助企业提升运营效率和竞争力。</p>
            <p class="text-gray-500 text-sm">我们的团队由一群充满激情的技术专家组成，拥有丰富的行业经验和技术实力，为客户创造真正的商业价值。</p>
          </div>
          
          <div>
            <h3 class="text-lg font-semibold mb-4">解决方案</h3>
            <ul class="space-y-2">
              <li><a href="#" class="text-gray-400 hover:text-white">企业级应用</a></li>
              <li><a href="#" class="text-gray-400 hover:text-white">移动应用开发</a></li>
              <li><a href="#" class="text-gray-400 hover:text-white">云服务与大数据</a></li>
              <li><a href="#" class="text-gray-400 hover:text-white">数字化转型</a></li>
            </ul>
          </div>
          
          <div>
            <h3 class="text-lg font-semibold mb-4">关于我们</h3>
            <ul class="space-y-2">
              <li><a href="#" class="text-gray-400 hover:text-white">公司简介</a></li>
              <li><a href="#" class="text-gray-400 hover:text-white">团队介绍</a></li>
              <li><a href="#" class="text-gray-400 hover:text-white">加入我们</a></li>
              <li><a href="#" class="text-gray-400 hover:text-white">联系方式</a></li>
            </ul>
          </div>
          
          <div>
            <h3 class="text-lg font-semibold mb-4">关注我们</h3>
            <div class="flex space-x-4">
              <a href="#" class="text-gray-400 hover:text-white">
                <Icon name="mdi:wechat" class="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div class="border-t border-gray-700 mt-8 pt-8 text-sm text-gray-400 text-center">
          <p>©2025 西安立虎信息科技有限责任公司 版权所有 <a href="https://beian.miit.gov.cn/" target="_blank" class="hover:text-white">陕ICP备2023012417号-1</a></p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// SEO元数据
const title = '立虎科技 - 创新引领数字未来'
const description = '立虎科技是专注于企业数字化转型的软件开发服务商，提供企业级应用开发、移动应用、Web开发等全方位技术服务，助力企业提升运营效率和竞争力。'

// 移动端菜单状态
const mobileMenuOpen = ref(false)

// 切换移动端菜单的函数
const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}
</script>

<style>
/* 可以在这里添加任何额外的自定义样式 */
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* 图标动画效果 */
.corporate-website .flex-col:hover .w-16 {
  transform: translateY(-5px);
  transition: transform 0.3s ease;
}

/* 英雄区域标题动画 */
.animate-title {
  animation: fadeInUp 1.2s ease forwards, glowing 3s ease-in-out infinite alternate;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.5), 0 0 20px rgba(70, 131, 224, 0.3);
}

.animate-subtitle {
  opacity: 0;
  animation: fadeInUp 1.2s ease 0.3s forwards;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes glowing {
  from {
    text-shadow: 0 0 5px rgba(255, 255, 255, 0.5), 0 0 10px rgba(70, 131, 224, 0.3);
  }
  to {
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.7), 0 0 20px rgba(70, 131, 224, 0.5), 0 0 30px rgba(70, 131, 224, 0.3);
  }
}
</style>
