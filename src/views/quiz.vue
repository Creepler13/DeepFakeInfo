<template>

    <v-overlay @click:outside="nextQuestion" v-model="showAnswer" contained class="align-center justify-center">
        <div @click="nextQuestion">
            <v-card :color="answer ? 'green' : 'red'">
                <v-card-item>
                    <div class="text-title-large mb-1">
                        {{ answer ? "Correct" : "Wrong" }}
                    </div>
                    <div class="text-body">
                        {{ currentQuestion == questions.length ? "Show Result?" : "Next question?" }}
                    </div>
                </v-card-item>
            </v-card>

        </div>
    </v-overlay>

    <div v-if="currentQuestion < questions.length">
        <div>
            <img v-if="currentQuestion == 0" src="../assets/media/quiz/frage10_01.png" />
            <img v-if="currentQuestion == 1" src="../assets/media/quiz/frage14_01.jpg" />
            <img v-if="currentQuestion == 2" src="../assets/media/quiz/frage15_02.jpg" />
            <img v-if="currentQuestion == 3" src="../assets/media/quiz/frage12_01.png" />
            <img v-if="currentQuestion == 4" src="../assets/media/quiz/frage06_01.jpg" />
            <img v-if="currentQuestion == 5" src="../assets/media/quiz/frage04_02.jpg" />
            <img v-if="currentQuestion == 6" src="../assets/media/quiz/frage16_01.jpg" />
            <img v-if="currentQuestion == 7" src="../assets/media/quiz/frage07_01.jpg" />
            <img v-if="currentQuestion == 8" src="../assets/media/quiz/frage05_01.jpg" />
            <img v-if="currentQuestion == 9" src="../assets/media/quiz/frage03_02.jpg" />
            <video v-if="currentQuestion == 10" controls src="../assets/media/quiz/TS female.mp4" />
            <video v-if="currentQuestion == 11" controls src="../assets/media/quiz/TS-100-Sekunden.mp4" />
            <video v-if="currentQuestion == 12" controls src="../assets/media/quiz/Baerbock.mp4" />
            <video v-if="currentQuestion == 13" controls src="../assets/media/quiz/TS-Fake.mp4" />
        </div>


        <div class="flex justify-around mt-3">
            <v-row class="justify-center" size="4">
                <v-col cols="2">
                    <v-btn rounded="xs" size="x-large" block @click="checkReal" color="#16c90c">Real</v-btn>
                </v-col>
                <v-col cols="2">
                    <v-btn rounded="xs" size="x-large" block @click="checkFake" color="#e61a0b">Fake</v-btn>
                </v-col>
            </v-row>
        </div>

    </div>
    <div v-else>

        <v-card>
            <v-card-item>
                <div class="text-title-large mb-1">
                    You have {{ points }} out of {{ questions.length }} points
                </div>
                <div>
                    <v-btn @click="reset" class="mt-4" color="#877691">
                        Again?
                    </v-btn>
                </div>
            </v-card-item>
        </v-card>

    </div>
</template>


<script lang="ts">

export default {
    data() {
        return {
            showAnswer: false,
            answer: false,
            currentQuestion: 0,
            points: 0,
            questions: [
                true, false, true, true, true, false, true, true, true, false,true,false,false,true
            ]
        }
    },

    methods: {
        reset() {
            this.currentQuestion = 0;
            this.points = 0;
        },
        checkFake() {
            this.answer = this.questions[this.currentQuestion] ? true : false
            this.showAnswer = true;
        },
        checkReal() {
            this.answer = this.questions[this.currentQuestion] ? false : true
            this.showAnswer = true;
        },
        nextQuestion() {
            if (this.answer) this.points++;
            this.showAnswer = false;
            this.currentQuestion++;
        }
    }
}


</script>