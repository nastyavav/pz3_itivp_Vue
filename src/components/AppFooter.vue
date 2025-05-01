<template>
    <footer class="footer">
    <div class="footer-container">
        <div class="footer-column">
        <a href="#logo" class="logo3">IDEA<br />SOFT</a>
        <a href="mailto:ideasoft@gmail.com" class="email">ideasoft@gmail.com</a>
        <div class="social-icons">
            <a href="https://www.instagram.com/nastyavav_">
            <img src="@/assets/instagram.png" alt="Instagram" />
            </a>
            <a href="https://t.me/Kerik_06">
            <img src="@/assets/telegram.png" alt="Telegram" />
            </a>
            <a href="#">
            <img src="@/assets/linkedin.png" alt="LinkedIn" />
            </a>
        </div>
        <a href="#contact-form" class="contact-button footer-button">
            СВЯЖИТЕСЬ С НАМИ <span>↗</span>
        </a>
        </div>

        <div class="footer-column">
        <h3>наш офис</h3>
        <p>в Минске</p>
        <p class="number">+375 (29) 675-12-22</p>
        <p>ул. Комсомольская 44, 5 этаж, кабинет 522</p>
        </div>

        <div class="footer-column">
        <h3>услуги</h3>
        <ul>
            <li>Техническая поддержка</li>
            <li>Frontend разработка</li>
            <li>Backend разработка</li>
            <li>Разработка мобильных приложений</li>
            <li>UI/UX дизайн</li>
            <li>Разработка ПО</li>
        </ul>
        </div>
    </div>
    </footer>
</template>

<script>
export default {
    name: 'AppFooter',
};
</script>

<style scoped>
@import '@/styles/styles.css';
</style>