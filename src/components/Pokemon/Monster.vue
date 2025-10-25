<script>

export default {
  name: "PocketMonster",
  props: {
    pm: {},
    hideLevel: {type: Boolean},
    level: {type: Number}
  },
  data() {
    return {}
  },
  created() {
    console.log(this.hideLevel);
    console.log(this.pm);
  },
  methods: {
    mod(val) {
      let r = '-';
      if (val >= 0) {
        r = "+";
      }

      return r + Math.floor((val - 10) / 2);
    },
    asi(key, val) {
      switch (key) {
        case "STR":
          return this.str;
      }
      return val;
    }
  },
  computed: {
    lvlMod() {

      return 0;
    },
    str() {
      return this.pm.ability_scores.STR + this.lvlMod;
    },
    dex() {
      return this.pm.ability_scores.DEX + this.lvlMod;
    },
    con() {
      return this.pm.ability_scores.CON + this.lvlMod;
    },
    int() {
      return this.pm.ability_scores.INT + this.lvlMod;
    },
    wis() {
      return this.pm.ability_scores.WIS + this.lvlMod;
    },
    cha() {
      return this.pm.ability_scores.CHA + this.lvlMod;
    }
  }
}

</script>

<template>
  <div class="monster" v-if="pm">
    <div class="monster-header">
      <div class="mh-left">
        <h1 class="monster-name">{{ pm.name }}</h1>
        <div class="monster-type">{{ pm.type }}</div>
      </div>
      <div class="monster-cr">CR {{ pm.challenge }}</div>
    </div>

    <div class="monster-info">
      <div><strong>Armor Class </strong>{{ pm.armor_class }}</div>
      <div><strong>Hit Points </strong>{{ pm.hit_points }}</div>
      <div><strong>Speed </strong>{{ pm.speed }}</div>
    </div>

    <div class="abilities">
      <div v-for="(val, key) in pm.ability_scores" :key="key" class="ability">
        <div class="ab-label">{{ key }}</div>
        <div class="ab-stat">{{ asi(key, val) }}</div>
        <div class="ab-mod">{{ mod(val) }}</div>
      </div>
    </div>

    <div class="monster-extra">
      <div>
        <strong>Skills</strong>
        <div v-for="(val, key) in pm.skills" :key="key">{{ val }}: {{ key }}</div>
      </div>
      <div><strong>Senses: </strong>{{ pm.senses }}</div>
      <div><strong>Languages: </strong>{{ pm.languages }}</div>
      <div><strong>Challenge: </strong>{{ pm.challenge }}</div>
    </div>

    <div class="monster-section">
      <h3>Traits</h3>
      <div class="trait" v-for="(val, key) in pm.traits" :key="key">
        <strong>{{ key }}: </strong>{{ val }}
      </div>
    </div>

    <div class="monster-section">
      <h3>Actions</h3>
      <div class="action" v-for="(val, key) in pm.actions || {}" :key="key">
        <strong>{{ key }}: </strong>{{ val }}

        <!--        <div class="action-title">{{ key }}:</div>-->
        <!--        <div class="action-desc">{{ val }}</div>-->
      </div>
    </div>

  </div>
</template>

<style scoped lang="scss">

$accent: #1f8f8f; /* header accent */
$muted: #6b7280; /* secondary text */
$bg: #ffffff;
$card-bg: #fbfbfb;
$border: #e6e7ea;
$shadow: 0 6px 18px rgba(22, 24, 27, 0.08);
$radius: 10px;
$pad: 18px;
$maxw: 750px;
$stat-bg: #f4fbfb;


* {
  box-sizing: border-box
}

body {
  font-family: Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
  color: #111;
  background: transparent;
}

.monster {
  max-width: $maxw;
  background: $card-bg;
  border: 1px solid $border;
  border-radius: $radius;
  box-shadow: $shadow;
  padding: $pad;
  margin: 16px auto;
  text-align: center;

  &-lvl {
    display: flex;
    justify-content: center;
  }

  &-header {
    display: flex;
    gap: 12px;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 10px;
    border-bottom: 1px solid $border;
  }

  &--name {
    margin: 0;
    font-size: 3rem;
    letter-spacing: 0.2px;
    font-weight: 700;
  }

  &--type {
    margin-top: 6px;
    font-size: 0.92rem;
  }

  /* CR badge */
  &-cr {
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.06), rgba(255, 255, 255, 0.06));
    border-radius: 8px;
    padding: 8px 12px;
    font-weight: 700;
    border: 1px solid rgba(0, 0, 0, 0.06);
    font-size: 0.95rem;
    min-width: 66px;
    text-align: center;
  }

  /* Extra info (skills / senses) */
  &-extra {
    display: grid;
    grid-template-columns:repeat(2, 1fr);
    gap: 10px;
    padding: 12px 0;
    font-size: 0.95rem;
    border-bottom: 1px solid $border;

    & > div {
      line-height: 1.28
    }
  }

  /* Sections: Traits, Actions */
  &-section {
    padding: 12px 0;

    & h3 {
      margin: 0 0 8px 0;
      font-size: 1rem;
      font-weight: 700;
    }
  }

  /* Basic info row */
  &-info {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
    padding: 12px 0;
    font-size: 0.95rem;
    border-bottom: 1px solid $border;
  }
}

.mh-left {
  min-width: 0
}


/* Abilities grid */
.abilities {
  display: grid;
  grid-template-columns:repeat(6, 1fr);
  gap: 10px;
  padding: 14px 0;
  border-bottom: 1px solid $border;
}

.ability {
  background: $stat-bg;
  border-radius: 8px;
  padding: 8px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.ab-stat {
  font-weight: 700;
  font-size: 1.05rem;
}

.ab-mod {
  font-size: 0.9rem;
  margin-top: 4px;
}

.ab-label {
  margin-top: 6px;
  font-size: 0.75rem;
  letter-spacing: 1px;
}


.trait, .action {
  background: transparent;
  padding: 8px 0;
  font-size: 0.95rem;
}

.action-title {
  font-weight: 700;
  margin-bottom: 6px;
}

.action-desc {
}

/* Small screens: stack and adjust layout */
@media (max-width: 640px) {
  .monster {
    padding: 14px;

    &-header {
      flex-direction: column;
      align-items: flex-start;
      gap: 6px
    }

    &-cr {
      align-self: stretch;
      text-align: left
    }

    &-info {
      flex-direction: column;
      gap: 6px
    }

    &-extra {
      grid-template-columns:1fr
    }
  }
  .abilities {
    grid-template-columns:repeat(3, 1fr)
  }
}

@media (max-width: 420px) {
  .abilities {
    grid-template-columns:repeat(2, 1fr)
  }
  .monster-name {
    font-size: 1.05rem
  }
  .monster-cr {
    font-size: 0.9rem;
    padding: 6px 8px
  }
}
</style>