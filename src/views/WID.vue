<template>
	<div class="fullApp">
		<div>An RPG About Murder</div>
		<div> Once upon a time, there was a beautiful, kind witch who lived in the forest with her familiars. Her life was
			peaceful and happy until one day, a witch-hunter broke into her cottage, dragged her out into the woods, and
			murdered her. Now she is dead. You have heard that if you bring both eyes of the murderer, the witch may be
			resurrected. Even if it doesn't work, the killer will be dead.
			The witch-hunter has hidden in the local village, the coward; get him.
		</div>
		<Sheet/>
	</div>
</template>

<script>
import Sheet from '@/components/witch/Sheet.vue';
// import Sheet from '@/components/witch/Sheet';
export default {
	name: 'Witch',
	components: { Sheet },
	props: {},
	data() {
		return {};
	},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
