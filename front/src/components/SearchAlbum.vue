<script setup lang="ts">
import { ref, onBeforeMount } from "vue";
import { getAlbums } from "../api/albums";

let artist = ref<string>("Mago de oz");

const emit = defineEmits(["searchResults"]);

const findAlbumByArtist = async () => {
  let { value } = artist;
  let albums = await getAlbums(value);
  let { data } = albums;
  let { resultCount, results } = data;
  emit("searchResults", { resultCount, results, artist: value });
};

onBeforeMount(() => {
  findAlbumByArtist();
});
</script>

<template>
  <div>
    <h1 class="text-3xl font-semibold">Find artist</h1>
    <div class="mt-3">
      <input
        type="text"
        v-model="artist"
        class="py-1 px-2 w-6/12 text-grey-darkest border-2 border-sky-500 rounded-md"
        placeholder="Artist name"
      />
      <button
        @click="findAlbumByArtist"
        class="bg-sky-500 hover:bg-teal-dark text-white uppercase text-lg ml-3 py-1 px-2 rounded transition-all duration-500 ease-in-out transform hover:scale-110"
      >
        Search
      </button>
    </div>
  </div>
</template>

<style scoped></style>
