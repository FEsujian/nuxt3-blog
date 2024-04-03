<template>
  <div>
    <NuxtLayout name="default">
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>


<script setup>
const colorMode = useColorMode();
// const { find } = useStrapi();

// console.log(find, 'find')
// const userList = find('posts')

// console.log(userList, 'post')
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

  // .bytemd {
  //   background-color: #091a28;

  //   .bytemd-toolbar,
  //   .bytemd-editor,
  //   .bytemd-editor .CodeMirror,
  //   .CodeMirror-lines,
  //   .CodeMirror-code,
  //   .bytemd-preview {
  //     background-color: #091a28;
  //     color: #ebf4f1;
  //     caret-color: #ebf4f1;
  //   }

  //   .bytemd-toolbar-icon,
  //   .bytemd-status {
  //     color: #ebf4f1;
  //   }
  // }
}

.sepia body {
  background-color: #f1e7d0;
  color: #433422;

  .lucide {
    color: #433422;
  }
}
</style>