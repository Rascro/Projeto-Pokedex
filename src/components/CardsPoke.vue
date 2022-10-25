<script>
import api from "../api/api";
export default {
  props: {
    index: Number,
    name: String,
    url: String,
  },
  created: function () {
    api.get(this.url).then((response) => {
      this.pokemon.name = response.data.species.name;
      this.pokemon.type = response.data.types[0].type.name;
      this.pokemon.front = response.data.sprites.front_default;
      this.currentImg = response.data.sprites.front_default;
    });
  },
  data() {
    return {
      pokemons: [],
      isFront: true,
      currentImg: "",
      pokemon: {
        name: "",
        type: "",
        front: "",
        back: "",
      },
    };
  },
};
</script>

<template>
  <div id="card" class="card">
    <div>
      <figure>
        <img :src="currentImg" alt="Placeholder image">
      </figure>
    </div>
    <div class="card">
      <div>
        <div id="pokemon">
          <p>{{ pokemon.name}}</p>
          <p>{{ pokemon.type }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

body {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}
.card {
  border-radius: 5px;
  box-shadow: 7px 7px 13px 0px rgba(50, 50, 50, 0.22);
  margin: 1vh;
}

#card {
  width: 20rem;
}
</style>
