<script>
import api from "../api/api";
import Pokemon from "../components/CardsPoke.vue";
export default {
  name: "App",
  components: {
    Pokemon,
  },
  data() {
    return {
      pokemons: [],
      filteredPokemons: [],
      search: "",
    };
  },
  created: function () {
    api.get("pokemon?limit=151&offset=0").then((response) => {
      this.pokemons = response.data.results;
      this.filteredPokemons = response.data.results;
    });
  },
  methods: {
    searchPokemons: function () {
      this.filteredPokemons = this.pokemons;
      if (this.search.trim() == "") {
        this.filteredPokemons = this.pokemons;
      } else {
        this.filteredPokemons = this.pokemons.filter(
          (pokemon) => pokemon.name == this.search
        );
      }
    },
  },
};
</script>

<template>
  <div class="source">
    <input type="text" placeholder="Buscar Pokemon" v-model="search" />
    <button @click="searchPokemons">Buscar</button>
  </div>

  <div class="pokeinfo" id="pokemon-list">
    <div :key="pokemon.url" v-for="(pokemon, index) in filteredPokemons">
      <Pokemon :index="index + 1" :name="pokemon.name" :url="pokemon.url" />
    </div>
  </div>
</template>

<style scoped>
* {
  padding: 0;
  margin: 0;
  border: 0;
  box-sizing: border-box;
  display: inline-block;
}
.card {
  border-radius: 5px;
  box-shadow: 7px 7px 13px 0px rgba(50, 50, 50, 0.22);
  padding: 20px;
  margin: 50px;
  width: 400px;
  background-color: #27a4f3;
  display: flex;
  justify-content: center;
  gap: 1%;
  padding: 20px;
  height: 100%;
  min-height: auto;
  flex-wrap: wrap;
  
}
.source {
  display: flex;
  margin-top: 10px;
  width: 100%;
  justify-content: center;
}
button,
input {
  padding: 3px 10px;
  margin: 0px 5px;
  background-color: #EDD22D;
  border: solid 1px red;
}
button {
  border-radius: 10px;
}
</style>
