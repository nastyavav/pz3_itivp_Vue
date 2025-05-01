<template>
    <section>
    <h2>Каковы наши цели?</h2>
    <div
        v-for="(goal, index) in goals"
        :key="index"
        class="container-goals"
        :class="{ 'reverse-order': index % 2 !== 0 }"
    >
        <div class="goal">
        <h3>{{ goal.number }}</h3>
        <p>{{ goal.title }}</p>
        <p>{{ goal.description }}</p>
        </div>
        <img :src="goal.image" :alt="`goal${index + 1}`" class="img-goal" />
    </div>
    </section>
</template>

<script>
export default {
    name: "AppGoalsSection",
    data() {
    return {
        goals: [
        {
            number: "01",
            title: "Повышение эффективности бизнес-процессов",
            description:
            "Разработка ПО и IT-решений, которые автоматизируют рутинные задачи, упрощают управление и оптимизируют операционные процессы, помогая клиентам сократить время и затраты.",
            image: require("@/assets/goal1.jpg"),
        },
        {
            number: "02",
            title: "Увеличение клиентского опыта",
            description:
            "Создание пользовательских интерфейсов и взаимодействий, которые делают услуги и продукты компании более доступными, удобными и приятными для конечных пользователей.",
            image: require("@/assets/goal2.jpg"),
        },
        {
            number: "03",
            title: "Обеспечение безопасности данных",
            description:
            "Разработка и внедрение решений для защиты конфиденциальной информации и данных клиентов. Это включает в себя меры по предотвращению кибератак, защиту от несанкционированного доступа и соответствие нормативным требованиям.",
            image: require("@/assets/goal3.jpg"),
        },
        ],
    };
    },
};
</script>

<style scoped>
@import '@/styles/styles.css';
</style>