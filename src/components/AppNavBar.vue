<template>
  <nav class="header1">
    <div class="container">
      <div class="logo" id="logo">
        IDEA<br />SOFT
      </div>

      <input type="checkbox" id="menu-toggle" class="menu-checkbox" />
      <label for="menu-toggle" class="menu-icon">
        <img src="@/assets/menu.png" alt="Burger Menu" class="burger-img" />
      </label>

      <ul class="menu">
        <li>главная</li>
        <li>о компании</li>
        <li>услуги</li>
        <li>проекты</li>
      </ul>

      <a href="#contact-form" class="contact-button">
        СВЯЖИТЕСЬ С НАМИ <span>↗</span>
      </a>
      <a href="#contact-form" class="contact-button-img">
        <img src="@/assets/contact.png" alt="Свяжитесь с нами" />
      </a>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'AppNavBar',
};
</script>

<style scoped>
@import '@/styles/styles.css';
</style>