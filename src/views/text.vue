<template>
    <div class="mb-3" v-html="text">
        
    </div>
</template>

<script lang="ts">
import text from "../assets/media/text.txt?raw"

console.log(contentToHtml(text))

function contentToHtml(text:string) {
		return text
			.split('\n\n')
			.map(paragraph => `<p>${paragraph.replaceAll("\n", "<br>")}</p>`)
			.join('')
	}

export default {
    data() {
        return {
            text: contentToHtml(text)
        }
    }
}


</script>