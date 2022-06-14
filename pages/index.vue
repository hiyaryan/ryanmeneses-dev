<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
<!--      <v-card class="logo py-4 d-flex justify-center">-->
<!--        <NuxtLogo />-->
<!--        <VuetifyLogo />-->
<!--      </v-card>-->
      <v-card>
        <v-card-title class="headline">
          Ryan's Website
        </v-card-title>
        <v-card-text>
          <p>Welcome!</p>
          <p>This website is currently under construction and is built upon the Vue.js framework, Nuxt.js, and the UI
            framework, Vuetify.js, and is publicly hosted on GitHub pages.</p>
          <br>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn
            color="primary"
            nuxt
            to="/inspire"
          >
            Continue
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>
