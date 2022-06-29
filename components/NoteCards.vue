<template>
  <v-container>
    <div>
      <div class="note-id">
        [{{ id }}]
        <a @click="editCard = !editCard">
          Edit
        </a>
      </div>
      <div>
        <v-card elevation="2" class="card">
          <h2 id="card-title">
            {{ title }}
          </h2>
          <v-divider />
          <h4 id="card-topic">
            {{ topic }}
          </h4>
          <p v-for="note in notes" :key="note" class="card-notes">
            {{ note }}
          </p>
        </v-card>
        <v-overlay :value="editCard">
          <a class="exit-overlay" @click="editCard = !editCard">X</a>
          <NewNoteCard :id="id" :mode="mode" class="edit-note-card" @response="editCard = !editCard" />
        </v-overlay>
      </div>
    </div>
  </v-container>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'NoteCards',
  props: {
    id: {
      default: 0,
      type: Number
    },
    title: {
      default: '',
      type: String
    },
    topic: {
      default: '',
      type: String
    },
    notes: {
      default: Array,
      type: Array
    }
  },
  data () {
    return {
      editCard: false,
      mode: 'normal'
    }
  },
  watch: {
    editCard () {
      if (this.editCard) {
        this.mode = 'edit'
      } else {
        this.mode = 'normal'
      }
    }
  },
  methods: {
    ...mapMutations(['editNoteCard'])
  }
}
</script>

<style scoped>
  .note-id {
    font-size: 1rem;
  }

  .card-notes {
    margin-bottom: 1px;
  }

  .edit-note-card {
    width: 71rem;
  }

  .exit-overlay {
    position: absolute;
    right: 0;
  }
</style>
