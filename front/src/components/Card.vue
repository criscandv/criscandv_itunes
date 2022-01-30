<script setup lang="ts">
defineProps<{
  img: string;
  albumName: string;
  artistName: string;
  releaseDate: string;
  artistViewUrl: string;
  collectionViewUrl: string;
  genre: string;
  trackCount: number;
}>();
</script>

<template>
  <div
    class="max-w-sm rounded overflow-hidden shadow-lg transition-all duration-500 ease-in-out transform hover:scale-110 hover:cursor-pointer"
  >
    <img class="w-full" :src="img" alt="Mountain" />
    <div class="px-6 py-4">
      <div class="font-semibold text-xl">
        <a
          :href="collectionViewUrl"
          target="_blank"
          class="hover:underline hover:decoration-1"
          >{{ albumName }}
        </a>
      </div>
      <div class="text-base mb-1">
        <a
          :href="artistViewUrl"
          target="_blank"
          class="hover:underline hover:decoration-1"
          >{{ artistName }}</a
        >
      </div>
    </div>
    <div class="px-6 pt-1 pb-2">
      <span
        class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
        >Genre: {{ genre }}</span
      >
      <span
        class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
        >Tracks: {{ trackCount }}</span
      >
      <span
        class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
        >Release at: {{ releaseDate }}</span
      >
    </div>
  </div>
</template>
