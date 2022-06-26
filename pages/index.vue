<template>
  <v-container>
    <SpotlightNoteCard />
    <NewNoteCard />
    <h1> Notes </h1>
    <NoteCards
      v-for="note in getNoteCards"
      :id="note.id + 1"
      :key="note.id"
      :title="note.title"
      :topic="note.topic"
      :notes="note.notes"
    />
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'IndexPage',
  computed: {
    ...mapGetters(['getNoteCards'])
  }
}
</script>
