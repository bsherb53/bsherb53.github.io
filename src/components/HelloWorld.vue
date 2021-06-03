<template>
	<div class="fullApp">
		<h1>{{ msg }}</h1>
		This is something cool?
	</div>
</template>

<script>
export default {
	name: 'FullApp',
	props: {},
	data() {
		return {
			msg: 'This is a test',
		};
	},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
