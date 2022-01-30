<script setup lang="ts">
import { ref } from "vue";
import SearchAlbum from "./components/SearchAlbum.vue";
import Card from "./components/Card.vue";

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
  <div class="px-5 sm:container mx-auto text-center py-9">
    <SearchAlbum @searchResults="processResults" />

    <h1 class="text-2xl underline mt-11 font-semibold">Albums!</h1>
    <div v-if="!resultCountValue">
      <h1>
        No results for <span class="font-bold">{{ artistName }}</span>
      </h1>
    </div>
    <div v-else>
      <h1 class="my-6">
        Albums for
        <span class="font-bold">{{ artistName }}: {{ resultCountValue }}</span>
      </h1>
      <div
        class="grid grid-cols-1 justify-items-center sm:gap-4 sm:grid-cols-2 md:grid-cols-4"
      >
        <Card
          v-for="album in resultsData"
          :key="album.artistId"
          :img="album.artworkUrl100"
          :albumName="album.collectionName"
          :artistName="album.artistName"
          :releaseDate="album.releaseDate"
          :artistViewUrl="album.artistViewUrl"
          :collectionViewUrl="album.collectionViewUrl"
          :genre="album.primaryGenreName"
          :trackCount="album.trackCount"
        />
      </div>
    </div>
  </div>
</template>

<style></style>
