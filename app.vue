<template>
  <div>
    <NuxtLayout name="default">
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>


<script setup>
const colorMode = useColorMode()

</script>

<style lang="scss">
.light body {
  background-color: #fff;
  color: rgba(0, 0, 0, 0.8);

  .lucide {
    color: rgba(0, 0, 0, 0.8);
  }
}

.dark body {
  background-color: #091a28;
  color: #ebf4f1;

  .lucide {
    color: #ebf4f1;
  }
}

.sepia body {
  background-color: #f1e7d0;
  color: #433422;

  .lucide {
    color: #433422;
  }
}
</style>