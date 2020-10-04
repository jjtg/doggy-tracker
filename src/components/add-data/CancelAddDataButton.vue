<template>
  <v-row xs12 class="mb-4">
    <v-card @click="$emit('cancel')" color="error" min-width="100%" elevation="5">
      <v-row xs12>
        <v-spacer/>
        <v-col cols="2">
          <v-icon x-large class="ma-3">
            mdi-cancel
          </v-icon>
        </v-col>
        <v-col cols="5">
          <v-card-title>
            Cancel
          </v-card-title>
        </v-col>
        <v-spacer/>
      </v-row>
    </v-card>
  </v-row>
</template>

<script>
export default {
  name: 'CancelAddDataButton',
};
</script>

<style scoped>

</style>
