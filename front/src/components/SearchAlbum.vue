<script setup lang="ts">
import { ref } from "vue";
import { getAlbums } from "../api/albums";

let artist = ref("Mago de oz");

const emit = defineEmits(["searchResults"]);

const findAlbumByArtist = async () => {
  let { value } = artist;
  let albums = await getAlbums(value);
  let { data } = albums;
  let { resultCount, results } = data;
  emit("searchResults", { resultCount, results, artist: value });
};
</script>

<template>
  <h1 class="text-3xl font-semibold">Find artist</h1>
  <div class="mt-3">
    <input type="text" v-model="artist" />
    <button @click="findAlbumByArtist">Buscar</button>
  </div>
</template>

<style scoped></style>
