<template>
    <section id="contact-form" class="contact-form">
    <div class="form-container">
        <div class="contact-left">
        <h1 class="form-title">Свяжитесь<br />с нами</h1>
        <form @submit.prevent="handleSubmit">
            <input
            type="text"
            placeholder="Введите своё ФИО"
            v-model="name"
            :style="{ borderBottom: errors.name ? '2px solid red' : '' }"
            />
            <div v-if="errors.name" class="error-message">{{ errors.name }}</div>

            <input
            type="email"
            placeholder="Введите свой e-mail"
            v-model="email"
            :style="{ borderBottom: errors.email ? '2px solid red' : '' }"
            />
            <div v-if="errors.email" class="error-message">{{ errors.email }}</div>

            <input
            type="tel"
            placeholder="Введите свой номер телефона"
            v-model="phone"
            :style="{ borderBottom: errors.phone ? '2px solid red' : '' }"
            />
            <div v-if="errors.phone" class="error-message">{{ errors.phone }}</div>

            <button type="submit" class="submit-button">Подать заявку ⭢</button>
        </form>
        </div>

        <div class="contact-right">
        <p class="text-form">
            Просто введите свой адрес электронной почты в форме<br />
            или свяжитесь с нами по почте –
            <a href="mailto:ideasoft@gmail.com">ideasoft@gmail.com</a> –<br />
            и один из наших специалистов свяжется с вами.<br />
            Это может стать началом прекрасного сотрудничества<br />
            и самым простым способом обрести высокоопытную команду.
        </p>
        <textarea
            placeholder="Опишите свой проект"
            v-model="message"
            :style="{ borderBottom: errors.message ? '2px solid red' : '' }"
        ></textarea>
        <div v-if="errors.message" class="error-message">{{ errors.message }}</div>
        </div>
    </div>
    </section>
</template>

<script>
export default {
    name: "AppContactForm",
    data() {
    return {
        name: "",
        email: "",
        phone: "+375",
        message: "",
        errors: {},
    };
    },
    methods: {
    handleSubmit() {
        const newErrors = {};

        if (!this.name.trim() || this.name.length > 40) {
        newErrors.name = "ФИО не должно быть пустым и не более 40 символов.";
        }

        if (
        !/^[a-zA-Z][a-zA-Z0-9._%+-]*@[a-zA-Z]+\.[a-zA-Z]{2,}$/.test(this.email)
        ) {
        newErrors.email = "Введите корректный e-mail.";
        }

        if (!/^\+375\d{9}$/.test(this.phone)) {
        newErrors.phone = "Введите номер в формате: +375XXXXXXXXX";
        }

        if (!this.message.trim() || this.message.length > 150) {
        newErrors.message =
            "Описание проекта обязательно и не должно превышать 150 символов.";
        }

        this.errors = newErrors;

        if (Object.keys(newErrors).length === 0) {
        alert("Форма успешно отправлена!");
        }
    },
    },
};
</script>

<style scoped>
@import '@/styles/styles.css';
</style>