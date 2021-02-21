<template>
  <div class="mb-4">
    <v-card
      @click="$emit('cancel')"
      color="error"
      elevation="5"
    >
      <v-row class="justify-center">
        <v-icon x-large class="ma-1 pt-4 pb-4">
          mdi-cancel
        </v-icon>
        <v-card-title>
          Cancel
        </v-card-title>
      </v-row>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'CancelAddDataButton',
};
</script>

<style scoped>

</style>
