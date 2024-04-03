<template>
    <vue-final-modal v-model="state.isShowModal" v-bind="$attrs"
        class="flex justify-center items-center relative z-50 w-full px-2">
        <div class="modal-container w-full m-auto md:w-[600px]">
            <div @click="onCancel" class="absolute top-0 right-0 m-4 text-gray-600 hover:text-blue-600 cursor-pointer">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12">
                    </path>
                </svg>
            </div>
            <div class="text-2xl font-bold">{{ $t('contact.title') }}</div>
            <div class="mt-10 w-full md:px-10">
                <form @submit.prevent="onSubmit">
                    <div class="form-group">
                        <label for="name">{{ $t('contact.name') }}:</label>
                        <input type="text" id="name" v-model="formData.name" required>
                    </div>
                    <div class="form-group">
                        <label for="email">{{ $t('contact.email') }}:</label>
                        <input type="email" id="email" v-model="formData.email" required>
                    </div>
                    <div class="form-group">
                        <label for="phone">{{ $t('contact.phone') }}:</label>
                        <input type="tel" id="phone" v-model="formData.phone" required>
                    </div>
                    <div class="form-group">
                        <label for="project-content">{{ $t('contact.projectContent') }}:</label>
                        <textarea id="project-content" v-model="formData.projectContent" required
                            :placeholder="t('contact.projectContent')" rows="5"></textarea>
                    </div>
                    <div class="flex items-center justify-end">
                        <button type="submit" class="bg-blue-500 hover:bg-blue-600 rounded-lg" @click="sendEmail">{{
        $t('contact.send')
                            }}</button>
                    </div>
                </form>
            </div>
        </div>
    </vue-final-modal>
</template>

<script setup>
import { reactive } from "vue";
import { VueFinalModal } from "vue-final-modal";

const { t } = useI18n();

const formData = reactive({
    name: '',
    email: '',
    phone: '',
    projectContent: ''
})
const { $mail } = useNuxtApp()

// 重置表单
const resetForm = () => {
    formData.name = '';
    formData.email = '';
    formData.phone = '';
    formData.projectContent = '';
};

const sendEmail = async () => {
    // 表单校验
    if (!formData.name || !formData.email || !formData.phone || !formData.projectContent) {
        console.error('请填写所有必填字段');
        return;
    }
    try {
        // 发送邮件
        await $mail.send({
            from: formData.email,
            subject: 'FEsujian - 有人向您咨询项目信息',
            text: `
                Name: ${formData.name}
                Email: ${formData.email}
                Phone: ${formData.phone}
                Project Content: ${formData.projectContent}
            `,
        }).then(() => {
            closeModal(); // 发送成功后关闭 Modal
        });
        console.log('邮件发送成功');

    } catch (error) {
        console.error('邮件发送失败:', error);
    }
}

// emits
const emits = defineEmits(["success"]);
// 状态
const state = reactive({
    isShowModal: false,
    submitLoading: false,
});
// 打开弹窗
const openModal = () => {
    state.isShowModal = true;
};
// 关闭弹窗
const closeModal = () => {
    state.isShowModal = false;
    resetForm()
};
// 取消
const onCancel = () => {
    closeModal();
};
// 提交
const onSubmit = async () => {
    closeModal();
};
defineExpose({
    openModal,
    closeModal,
    onCancel,
    onSubmit,
});
</script>

<style lang="scss" scoped>
.modal-container {
    min-height: 400px;
    border-radius: 18px;
    background: #fff;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    display: flex;
    position: relative;
    padding: 40px;
}

.form-group {
    margin-bottom: 20px;
    width: 100%;
}

label {
    display: block;
    margin-bottom: 5px;
}

input[type="text"],
input[type="email"],
input[type="tel"],
textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

button {
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    cursor: pointer;
}
</style>