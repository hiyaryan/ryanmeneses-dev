<template>
  <v-container v-if="getNoteCards.length !== 0">
    <h1> Recent </h1>
    <v-card elevation="2" class="spotlight-card">
      <h2> {{ getNoteCards[getNoteCards.length - 1].title }} </h2>
      <v-divider />
      <h4> {{ getNoteCards[getNoteCards.length - 1].topic }} </h4>
      <p v-for="note in getNoteCards[getNoteCards.length - 1].notes" :key="note" class="p-notes">
        {{ note }}
      </p>
    </v-card>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'SpotlightNoteCard',
  computed: {
    ...mapGetters(['getNoteCards'])
  }
}
</script>

<style scoped>
  .p-notes {
    margin-bottom: 1px;
  }
</style>
