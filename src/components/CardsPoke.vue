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
      this.pokemon.types = response.data.types;
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
        <img class="pokeimg" :src="currentImg" alt="Placeholder image">
      </figure>
    </div>
    <div class="card">
      <div>
        <div id="pokemon">
          <p class="name">{{ pokemon.name }}</p>
          <p v-for="(type, i) of pokemon.types" :key="i">{{ type.type.name }}</p>
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
  margin-left: auto;
  margin-right: auto;
  width: 6em;
  background-color: #DEDEDE;
}



#pokemon {
  text-align: center;
}
.pokeimg {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.name {
  background-color: aliceblue;
}
</style>
