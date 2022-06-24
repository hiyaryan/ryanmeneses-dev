<template>
  <div class="new-card">
    <v-card elevation="2">
      <v-form>
        <v-text-field placeholder="New Note Card Title" class="new-title" />
        <v-text-field placeholder="Note Card Topic" class="new-topic" />
        <v-text-field placeholder="Notes" class="new-note" />
        <v-btn @click="alert()" @submit.prevent="">
          Click
        </v-btn>
      </v-form>
    </v-card>
    <v-divider class="new-card-divider" />
  </div>
</template>

<script>
export default {
  name: 'NewNoteCard',
  // data () {
  //   return {
  //
  //   }
  // }
  methods: {
    alert () {
      window.alert('CLICKED!')
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
