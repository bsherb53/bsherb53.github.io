<template>
  <div class="char">
    <div class="char-details">
      <div class="char-name char-section">
        <div class="char-section-title">Name</div>
        <div class="char-section-contents">{{ char.name }}</div>
      </div>
      <div class="char-race char-section">
        <div class="char-section-title">Race</div>
        <div class="char-section-contents">
          <div class="char-race-name">
            {{ char.race.name }}
          </div>
          <div class="char-race-source subtitle">
            {{ char.race.source }}
          </div>
        </div>
      </div>
      <div class="char-class char-section">
        <div class="char-section-title">Class</div>
        <div class="char-section-contents">
          <div class="char-class-name">
            {{ char.subclass }} {{ char.class.name }}
          </div>
          <div class="char-class-source subtitle">
            {{ char.class.source }}
          </div>
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
  },
  created() {
    // console.log(this.char);
  }
}
</script>

<style lang="scss" scoped>
.char {
  &-details {
    display: flex;
    justify-content: space-evenly;
  }

  &-section {
    padding: 12px;
    width: 33%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    min-height: 100px;
    font-size: 24px;

    &-title {
      border-bottom: 1px solid $font-color-primary;
    }

    &-contents {
      margin: auto;
      font-size: larger;
    }
  }

  &-name {
    display: flex;
    flex-direction: column;
  }

  &-race,
  &-class {
    display: flex;
    justify-content: space-between;
    flex-direction: column;

    &-name {

    }

    &-source {
      font-style: italic;
      font-size: 16px;
      margin: auto 12px;
    }

  }

  &-class {

  }

  &-abilities {

    &-title {
      margin: $margin-medium;
    }

    &-group {

      display: flex;
      justify-content: space-evenly;
      margin: auto;

      &-ability {
        border: 1px solid $color-green;
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