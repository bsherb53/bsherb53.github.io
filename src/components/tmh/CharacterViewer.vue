<template>
  <div class="char">
    <div class="char-name">
      <div>Name:</div>
      <div>{{ char.name }}</div>
    </div>
    <div class="char-race">
      <div>Race:</div>
      <div>
        <div class="char-race-name">
          {{ char.race.name }}
        </div>
        <div class="char-race-source">
          {{ char.race.source }}
        </div>
      </div>
    </div>
    <div class="char-class">
      <div>Class</div>
      <div>
        <div class="char-class-name">
          {{ char.subclass }} {{ char.class.name }}
        </div>
        <div class="char-class-source">
          {{ char.class.source }}
        </div>
      </div>
    </div>
    <div class="char-abilities">
      <div class="char-abilities-title">Character Abilities</div>
      <div class="char-abilities-group">
        <div v-for="(v, k) in char.abilities" :key="k" class="char-abilities-group-ability">
          <div class="char-abilities-group-ability-title">{{ k }}</div>
          <div class="char-abilities-group-ability-score">{{ v }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CharacterViewer",
  props: {
    char: {},
  }
}
</script>

<style lang="scss" scoped>
.char {
  &-name {
    margin: auto;
    width: fit-content;
  }

  &-race,
  &-class {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    margin: 12px auto;

    &-name {
    }

    &-source {
      font-style: italic;
      font-size: 16px;
      margin: auto 12px;
      color: $font-color-secondary;
    }

  }

  &-class {

  }

  &-abilities {
    &-group {

      display: flex;
      justify-content: space-evenly;
      margin: auto;

      &-ability {
        border: 1px solid green;
        padding: 4px;
        border-radius: 4px;
        box-shadow: $shadow-small;

        &-title {
          text-transform: uppercase;
        }
      }
    }
  }


}
</style>