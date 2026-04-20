<template>

    <div>
        <img v-if="$data.currentQuestion == 0" src="../assets/media/quiz/frage10_01.png" />
        <img v-if="$data.currentQuestion == 1" src="../assets/media/quiz/frage14_01.jpg" />
        <img v-if="$data.currentQuestion == 2" src="../assets/media/quiz/frage15_02.jpg" />
        <img v-if="$data.currentQuestion == 3" src="../assets/media/quiz/frage12_01.png" />
        <img v-if="$data.currentQuestion == 4" src="../assets/media/quiz/frage06_01.jpg" />
        <img v-if="$data.currentQuestion == 5" src="../assets/media/quiz/frage04_02.jpg" />
        <img v-if="$data.currentQuestion == 6" src="../assets/media/quiz/frage16_01.jpg" />
        <img v-if="$data.currentQuestion == 7" src="../assets/media/quiz/frage07_01.jpg" />
        <img v-if="$data.currentQuestion == 8" src="../assets/media/quiz/frage05_01.jpg" />
        <img v-if="$data.currentQuestion == 9" src="../assets/media/quiz/frage03_02.jpg" />
    </div>
    <div class="flex justify-around mt-3">
    <div>
        <button>Real</button>
    </div>
     <div>
        <button>Fake</button>
    </div></div>
</template>


<script lang="ts">

var test = false;

export default {
    data() {
        return {
            currentQuestion: 0,
            points: 0,
            questions: [
                true, false, true, true, true, false, true, true, true, false
            ]
        }
    }
}


</script>