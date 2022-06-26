<template>
  <v-container>
    <div>
      <div class="note-id">
        {{ id }}
      </div>
      <div>
        <v-card elevation="2" class="card">
          <h2>
            {{ title }}
          </h2>
          <v-divider />
          <h4> {{ topic }} </h4>
          <p>
            {{ notes }}
          </p>
        </v-card>
      </div>
    </div>
  </v-container>
</template>

<script>
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
      default: '',
      type: String
    }
  }
}
</script>

<style scoped>
  .note-id {
    font-size: 1rem;
  }
</style>
