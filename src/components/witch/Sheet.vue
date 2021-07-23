<template>
	<div class="sheet">
		You are a cute woodland character
		<div class="sheet_create" v-if="newChar">
			Create a Character:
			<div class="button" @click="createRandom">Create Random Character</div>

			<div class="button" @click="pickAnimal">Roll for Animal</div>
			<div class="Input">Animal Name: <input type="text" v-model="character.name"/></div>
			<div class="Input">Image URL: <input type="text" v-model="character.url"/></div>
			<div class="button" @click="pickSpell">Roll for Spell</div>

			{{ character }}
			{{ animals[character.species] }}
		</div>
		<div class="sheet_display" v-else>
			Display a Character:
			<div>
				{{ character.name }}
				{{ character.species }}
				{{ animals[character.species] }}
				<div>
					Danger Level: {{ character.danger }}
				</div>
				<div class="button" @click="danger(1)">+</div>
				<div class="button" @click="danger(-1)">-</div>
				
				<img class="portrait" :src=" character.url "/>
			</div>
		</div>

		<div class="footer">
			<div class="button" @click="save">Save</div>
			<div class="button">Export</div>
			<div class="button">Import</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Sheet',
	props: {},
	data() {
		return {
			newChar: true,
			character: {
				name: '',
				species: '',
				danger: 0,
				spell: '',
				notes: '',
				url: '',
			},
			animals: {
				fox: { clever: 2, fierce: 2, sly: 1, quick: 1 },
				cat: { clever: 0, fierce: 1, sly: 3, quick: 2 },
				toad: { clever: 1, fierce: 0, sly: 2, quick: 1 },
				spider: { clever: 2, fierce: 0, sly: 3, quick: 1 },
				owl: { clever: 3, fierce: 1, sly: 1, quick: 2 },
				hare: { clever: 0, fierce: 0, sly: 2, quick: 3 },
				magpie: { clever: 2, fierce: 1, sly: 1, quick: 2 },
				crow: { clever: 2, fierce: 1, sly: 2, quick: 1 },
				dog: { clever: 1, fierce: 3, sly: 0, quick: 1 },
				rat: { clever: 1, fierce: 0, sly: 2, quick: 2 },
			},
			spells: ['Unseen Hand', 'Conjure Light', 'Speak Human', 'Lock/Unlock/Open/Close', 'Conjure Food', 'Make Flame', 'Tidy/Clean/Mend/Fix', 'Plant Growth', 'Distract/Confuse', 'Make Text Read Itself']
		};
	},
	methods: {
		createRandom() {
			this.pickAnimal();
			this.pickSpell();
		},
		pickAnimal() {
			this.character.species = this.randomKey(this.animals);
		},
		pickSpell() {
			let n = Math.floor(Math.random() * this.spells.length);
			console.log('spell number', n)
			this.character.spell = this.spells[n];
		},
		randomKey(obj) {
			var keys = Object.keys(obj);
			return keys[keys.length * Math.random() << 0];
		},
		save() {
			this.newChar = !this.newChar;
		},
		danger(i) {
			this.character.danger += i;

			if (this.character.danger < 0) {
				this.character.danger = 0;
			}
		}
	}
}
</script>

<style scoped>
.sheet {
	color: blue;
}

.sheet_create {

}

.sheet_display {

}

.button {
	border: 1px solid black;
	border-radius: 4px;
	padding: 8px;
	height: 20px;
	min-width: 40px;
	max-width: 60px;
	transition: all .3s ease;
}

.button:hover {
	background: aliceblue;
}

.portrait{
	max-width: 300px;
	height: auto;
}

.footer {
	display: flex;
	text-align: center;
	margin: auto;
	width: 100%;
	justify-content: center;
}
</style>