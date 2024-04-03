<template>
    <div class="markdown-editor">
        <div class="title">Markdown Editor</div>
        <!-- <Editor :value="text" :plugins="plugins" :locale="zhHans" @change="handleChange" class="editor" /> -->
    </div>
</template>

<script setup>
// import { Editor } from '@bytemd/vue-next'
// import zhHans from "bytemd/lib/locales/zh_Hans.json";
// import 'bytemd/dist/index.css'
// import gfm from '@bytemd/plugin-gfm'
// import breaks from '@bytemd/plugin-breaks'
// import frontmatter from '@bytemd/plugin-frontmatter'
// import gemoji from '@bytemd/plugin-gemoji'
// import highlight from '@bytemd/plugin-highlight-ssr'
// import 'highlight.js/styles/tokyo-night-dark.css'
// import math from '@bytemd/plugin-math-ssr'
// import 'katex/dist/katex.css'
// import mediumZoom from '@bytemd/plugin-medium-zoom'
// import mermaid from '@bytemd/plugin-mermaid'


const plugins = [
    // gfm(),
    // breaks(),
    // frontmatter(),
    // gemoji(),
    // highlight(),
    // math(),
    // mediumZoom(),
    // mermaid(),
]
const text = ref('')
const handleChange = (value) => {
    text.value = value
}

</script>

<style lang="scss" scoped>
.markdown-editor {
    .title {
        font-size: 24px;
        font-weight: bold;
        margin: 20px;
        text-align: center;
    }

    :deep(.bytemd) {
        height: calc(100vh - 200px);
        border-radius: 0.5rem;
        border: 1px solid #e1e4e8;
        overflow: hidden;
    }
}
</style>