<template>
    <div class="text-4xl font-bold text-center my-20">
        <div class="max-w-3xl md:mx-auto px-2">
            <div class="text-4xl font-bold text-center my-20">{{ $t('header.aboutMe') }}</div>
            <div class="flex flex-col items-center px-4">
                <div class="w-48 h-48 rounded-full overflow-hidden mb-8">
                    <img src="@/assets/images/avatar.png" alt="Avatar">
                </div>
                <ul class="skill-list">
                    <li class="skill-item">对各个研发部从需求采集、原型图、UI设计、前端框架、数据库字表、前端后台开发、测试等工作内容流程熟悉，从2018年担任研发部经理4年
                    </li>
                    <li class="skill-item">
                        精通Html5/CSS3新属性，如：Audio、Video、iFrame、语义化标签、增强型表单、熟练使用Iocnfont、SVG、Animation动画实现特效并熟悉原理，对CSS兼容性及移动端常见问题熟悉
                    </li class="skill-item">
                    <li class="skill-item">
                        精通HTML、CSS、JavaScript、jQuery、WebSocket等基础技术，有大型项目实战经验，可独立完成开发，熟悉数据实时交互和动态效果，掌握Ajax、Axios异步通讯技术、跨域、数据请求二次处理、兼容性、数据格式等问题
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script setup></script>

<style lang="scss" scoped>
.skill-list {
    list-style: none;
    padding-left: 0;
}

.skill-item {
    position: relative;
    padding-left: 1.5rem;
    margin-bottom: 1rem;
    font-size: 1rem;
    /* 控制文本与小圆点的距离 */
}

.skill-item::before {
    content: "";
    position: absolute;
    left: 0;
    top: 1rem;
    /* 控制小圆点的垂直位置 */
    width: 0.5rem;
    height: 0.5rem;
    background-color: #3B82F6;
    /* 设置小圆点的颜色 */
    border-radius: 50%;
    /* 使其成为圆形 */
}
</style>