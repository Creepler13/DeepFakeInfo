<template>
    <div>
            <audio :src="audio" controls></audio>
    </div>
</template>

<script lang="ts">
import audio from "../assets/media/audio.mp3"

export default{
    data(){
        return {
            audio:audio
        }
    }
}
</script>