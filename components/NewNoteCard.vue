<template>
  <v-container>
    <div class="new-card">
      <v-card elevation="2">
        <v-form>
          <v-text-field v-model="title" :rules="['Required']" placeholder="Title" class="new-title" />
          <v-text-field v-model="topic" :rules="['Required']" placeholder="Topic" class="new-topic" />
          <v-textarea v-model="notes" :rules="['Required']" placeholder="Notes" class="new-note" />
          <v-btn :disabled="isDisabled" @click="submit()" @submit.prevent="">
            Submit
          </v-btn>
        </v-form>
      </v-card>
      <v-divider class="new-card-divider" />
    </div>
  </v-container>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'NewNoteCard',
  emits: ['response'],
  data () {
    return {
      id: 0,
      title: '',
      topic: '',
      notes: []
    }
  },
  computed: {
    ...mapGetters(['getNoteCards']),
    isDisabled () {
      return !(this.title !== '' && this.topic !== '' && this.notes !== '')
    }
  },
  methods: {
    ...mapMutations(['addNoteCard']),

    submit () {
      const notes = []
      notes.push(...this.notes.split(/\r?\n/))
      this.addNoteCard({ id: this.getNoteCards.length + 1, title: this.title, topic: this.topic, notes })
    }
  }
}
</script>

<style scoped>
  .new-card {
    margin-bottom: 32px;
  }

  .new-card-divider {
    margin-top: 32px;
  }
</style>
