<template>
	<div class="sheet">
		You are a cute woodland character
		<div class="sheet_create">
			<div class="sheet_title">
				Create a Character
			</div>
			<div class="character_create">
				<div class="line">
					<div class="button center" v-if="newChar" @click="createRandom">Random Character</div>
				</div>

				<div class="line">
					<div>Animal Name:</div>

					<input type="text" v-if="newChar" v-model="character.name"/>
					<div v-else>{{ titleCase(character.name) }}</div>
				</div>
				<div class="line">
					<div>Image URL:</div>

					<input type="text" v-model="character.url" v-if="newChar"/>
					<img v-else class="portrait" :src=" character.url "/>

				</div>

				<div class="line">
					<div class="text">Species: {{  titleCase(character.species) }}</div>
					<div class="button" v-if="newChar" @click="pickAnimal">Change</div>
				</div>
				<div class="line">
					<div class="text">Spell: {{ titleCase(character.spell) }}</div>
					<div class="button" v-if="newChar" @click="pickSpell">Change</div>
				</div>
				<div class="line">
					<div>Stats:</div>
					<div>Clever: {{ animals[character.species].clever || 0 }}</div>
					<div>Fierce: {{ animals[character.species].fierce || 0 }}</div>
					<div>Sly: {{ animals[character.species].sly || 0 }}</div>
					<div>Quick:{{ animals[character.species].quick || 0 }}</div>
				</div>
				<div class="line" v-if="!newChar" >
					Danger Level: {{ character.danger }}
					<div class="button" @click="danger(1)">+</div>
					<div class="button" @click="danger(-1)">-</div>
				</div>
				<div class="line" v-if="!newChar" >
					Notes:
					<input type="text" v-model="character.notes"/>
				</div>
			</div>
		</div>
		<div class="footer">
			<div class="button" v-if="newChar" @click="save">Save</div>
			<div class="button" v-else @click="save">Edit</div>

			<div class="button" v-if="newChar">Export</div>
			<div class="button" v-if="newChar">Import</div>
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
				species: 'fox',
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
	created() {
		this.character.spell = this.spells[0];
	},
	methods: {
		titleCase(str) {
			return str.toLowerCase().split(' ').map(function(word) {
				return (word.charAt(0).toUpperCase() + word.slice(1));
			}).join(' ');
		},
		createRandom() {
			this.pickAnimal();
			this.pickSpell();
		},
		pickAnimal() {
			this.character.species = this.randomKey(this.animals);
		},
		pickSpell() {
			this.character.spell = this.spells[Math.floor(Math.random() * this.spells.length)];
		},
		randomKey(obj) {
			var keys = Object.keys(obj);
			return keys[keys.length * Math.random() << 0];
		},
		save() {
			if (!this.saveDisabled) {
				this.newChar = !this.newChar;
			}
		},
		danger(i) {
			this.character.danger += i;
			if (this.character.danger < 0) {
				this.character.danger = 0;
			}
		}
	},
	computed: {
		saveDisabled() {
			return this.character.name === '';
		}
	}
}
</script>

<style scoped>

.sheet_title {
	font-size: 48px;
	color: red;
	border-bottom: 4px solid red;
	width: 50%;
	margin: auto;
}

.sheet_create {
	display: flex;
	justify-content: center;
	flex-direction: column;
}

.button {
	border: 1px solid black;
	border-radius: 4px;
	padding: 8px;
	height: 20px;
	min-width: 40px;
	width: fit-content;
	transition: all .3s ease;
	margin: 4px;
	text-align: center;
}

.button:hover {
	background: aliceblue;
}

.character_create {
	display: flex;
	flex-direction: column;
	border: 1px solid white;
	width: 50%;
	text-align: center;
	margin: auto;
}

.portrait {
	max-width: 300px;
	height: auto;
}

.text{
	margin: auto 0;
}

.line {
	display: flex;
	justify-content: center;
	text-align: center;
	margin: 8px;
}

.footer {
	display: flex;
	text-align: center;
	margin: auto;
	width: 100%;
	justify-content: center;
}
</style>