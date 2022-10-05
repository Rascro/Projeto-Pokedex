<script>
  import axios from "axios";
  export default {
    data() {
      return {
        name: "",
        pokemon: {},
      };
    },
    methods: {
      async buscar() {
        const url = `https://pokeapi.co/api/v2/pokemon/${this.pokemon}/json/`;
        const { data } = await axios.get(url);
        this.pokemon = data;
      },
    },
  };
</script>

<template>
    <div class="form">
    <h1>Pokemon</h1>
    <p>Nome do poke:</p>
    <input type="text" v-model="name" placeholder="xxxxxxxx" />
    <button @click="buscar">Search</button>
  </div>

<form>
  <label for="name">Name</label>
  <input name="Pokemon" type="text" v-model="pokemon.id" />
</form>
</template>

<style scoped>
* {
  padding: 0;
  margin: 0;
  border: 0;
  box-sizing: border-box;
}
</style>