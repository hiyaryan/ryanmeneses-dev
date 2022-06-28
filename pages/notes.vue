<template>
  <v-container>
    <SpotlightNoteCard />
    <NewNoteCard />
    <h1>
      Notes
      <v-btn @click="saveFile">
        Download
      </v-btn>
    </h1>
    <NoteCards
      v-for="note in getNoteCards"
      :id="note.id"
      :key="note.id"
      :title="note.title"
      :topic="note.topic"
      :notes="note.notes"
    />
  </v-container>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import noteCards from 'static/notes.json'

export default {
  name: 'NotesPage',
  computed: {
    ...mapGetters(['getNoteCards'])
  },
  mounted () {
    this.setNoteCards(noteCards)
  },
  methods: {
    ...mapMutations(['setNoteCards']),
    saveFile () {
      const a = document.createElement('a')
      a.href = window.URL.createObjectURL(new Blob([JSON.stringify(this.getNoteCards)], { type: 'application/json' }))
      a.download = 'notes.json'
      a.click()
    }
  }
}
</script>

<style scoped>

</style>
