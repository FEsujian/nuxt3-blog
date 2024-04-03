<template>
  <div class="text-4xl font-bold text-center my-20">
    <div class="text-4xl font-bold text-center my-20">Projects</div>
    <div class="project-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8">
      <div
        class="project-item shadow-lg rounded-lg overflow-hidden transition-transform transition-shadow transform hover:translate-y-[-5px] flex flex-col mx-4 sm:mx-0">
        <div class="image-wrap"><img src="@/assets/images/project1.png" alt=""></div>
        <div class="info-wrap p-4">
          <div class="title text-2xl font-semibold mb-2">Project1</div>
          <div class="description text-gray-600 font-normal text-sm">This is project description</div>
        </div>
      </div>
      <div
        class="project-item shadow-lg rounded-lg overflow-hidden transition-transform transition-shadow transform hover:translate-y-[-5px] flex flex-col mx-4 sm:mx-0">
        <div class="image-wrap"><img src="@/assets/images/project2.png" alt=""></div>
        <div class="info-wrap p-4">
          <div class="title text-2xl font-semibold mb-2">Project1</div>
          <div class="description text-gray-600 font-normal text-sm">This is project description</div>
        </div>
      </div>
      <div
        class="project-item shadow-lg rounded-lg overflow-hidden transition-transform transition-shadow transform hover:translate-y-[-5px] flex flex-col mx-4 sm:mx-0">
        <div class="image-wrap"><img src="@/assets/images/project3.png" alt=""></div>
        <div class="info-wrap p-4">
          <div class="title text-2xl font-semibold mb-2">Project1</div>
          <div class="description text-gray-600 font-normal text-sm">This is project description</div>
        </div>
      </div>
      <div
        class="project-item shadow-lg rounded-lg overflow-hidden transition-transform transition-shadow transform hover:translate-y-[-5px] flex flex-col mx-4 sm:mx-0">
        <div class="image-wrap"><img src="@/assets/images/project4.png" alt=""></div>
        <div class="info-wrap p-4">
          <div class="title text-2xl font-semibold mb-2">Project1</div>
          <div class="description text-gray-600 font-normal text-sm">This is project description</div>
        </div>
      </div>
      <div
        class="project-item shadow-lg rounded-lg overflow-hidden transition-transform transition-shadow transform hover:translate-y-[-5px] flex flex-col mx-4 sm:mx-0">
        <div class="image-wrap"><img src="@/assets/images/project5.png" alt=""></div>
        <div class="info-wrap p-4">
          <div class="title text-2xl font-semibold mb-2">Project1</div>
          <div class="description text-gray-600 font-normal text-sm">This is project description</div>
        </div>
      </div>
      <div
        class="project-item shadow-lg rounded-lg overflow-hidden transition-transform transition-shadow transform hover:translate-y-[-5px] flex flex-col mx-4 sm:mx-0">
        <div class="image-wrap"><img src="@/assets/images/project6.png" alt=""></div>
        <div class="info-wrap p-4">
          <div class="title text-2xl font-semibold mb-2">Project6</div>
          <div class="description text-gray-600 font-normal text-sm">This is project description</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

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
    height: 100px;
  }
}

.project-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
}
</style>