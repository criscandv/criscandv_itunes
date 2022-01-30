<script setup lang="ts">
import { ref } from "vue";
import SearchAlbum from "./components/SearchAlbum.vue";

interface SearchAlbumData {
  resultCount: number;
  results: any[];
  artist: string;
}

let resultsData = ref<any>([]);
let artistName = ref<string>("");
let resultCountValue = ref<number>(0);

const processResults = ({ resultCount, results, artist }: SearchAlbumData) => {
  artistName.value = artist;
  resultsData.value = results;
  resultCountValue.value = resultCount;
};
</script>

<template>
  <div class="container mx-auto text-center py-9">
    <SearchAlbum @searchResults="processResults" />

    <h1 class="text-2xl underline mt-11 font-semibold">Albums!</h1>
    <div v-if="!resultCountValue">
      <h1>
        No results for <span class="font-bold">{{ artistName }}</span>
      </h1>
    </div>
    <div v-else>
      <h1 class="mb-3">
        Albums for
        <span class="font-bold">{{ artistName }}: {{ resultCountValue }}</span>
      </h1>
      <div class="grid grid-cols-5 gap-4">
        <div v-for="album in resultsData">
          <h2>{{ album.collectionName }}</h2>
          <p>{{ album.artistName }}</p>
          <p>{{ album.releaseDate }}</p>
          <p>{{ album.collectionCensoredName }}</p>
          <p>{{ album.trackCount }} tracks</p>
          <p>{{ album.copyright }}</p>
          <p>{{ album.country }}</p>
          <p>{{ album.primaryGenreName }}</p>
          <p>{{ album.artworkUrl100 }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
