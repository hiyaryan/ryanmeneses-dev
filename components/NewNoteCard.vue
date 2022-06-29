<template>
  <v-container>
    <div class="new-card">
      <v-card elevation="2">
        <v-form>
          <v-text-field ref="title" v-model="title" :rules="['Required']" :placeholder="title === '' ? 'Title' : title" class="new-title" />
          <v-text-field v-model="topic" :rules="['Required']" :placeholder="topic === '' ? 'Topic' : topic" class="new-topic" />
          <!-- TODO: Make it so that each note is on a newline on the placeholder -->
          <v-textarea
            v-model="notes"
            :rules="['Required']"
            :placeholder="notes.length === 0 ? 'Notes' : notes.forEach(note => note)"
            class="new-note"
          />
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
  props: {
    id: {
      default: 0,
      type: Number
    },
    mode: {
      default: 'normal',
      type: String
    }
  },
  emits: ['response'],
  data () {
    return {
      title: '',
      topic: '',
      notes: []
    }
  },
  computed: {
    ...mapGetters(['getNoteCards', 'getNoteCard']),
    isDisabled () {
      return !(this.title !== '' && this.topic !== '' && this.notes !== '')
    }
  },
  mounted () {
    if (this.id !== 0) {
      const card = this.getNoteCard(this.id)
      this.title = card.title
      this.topic = card.topic
      this.notes = card.notes
    }
  },
  methods: {
    ...mapMutations(['addNoteCard', 'editNoteCard']),

    submit () {
      const notes = []
      notes.push(...this.notes.split(/\r?\n/))

      if (this.mode === 'normal') {
        this.addNoteCard({ id: this.getNoteCards.length + 1, title: this.title, topic: this.topic, notes })
      } else {
        this.editNoteCard({ id: this.id, title: this.title, topic: this.topic, notes })
        this.$emit('response', false)
      }
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
