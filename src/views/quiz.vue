<template>

    <div>
        <image v-if="$data.currentQuestion == 0" src="../assets/media/quiz/monroe.webp" />
        <image v-if="$data.currentQuestion == 1" src="../assets/media/quiz/frage09_01.jpg" />

    </div>
</template>


<script>

var test = false;

export default {
    data() {
        return {
            currentQuestion: 0,
            points: 0,

        }
    }
}


</script>