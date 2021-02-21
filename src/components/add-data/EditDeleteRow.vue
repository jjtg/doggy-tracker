<template>
  <div class="mb-4 d-flex">
    <v-card
      @click="$emit('delete')"
      color="error lighten-3"
      elevation="5"
      min-width="48%"
    >
      <div class="d-flex">
        <v-spacer/>
        <v-icon x-large class="ma-1 pt-4 pb-4">
          mdi-delete
        </v-icon>
        <v-spacer/>
      </div>
    </v-card>
    <v-spacer/>
    <v-card
      @click="$emit('edit')"
      color="primary lighten-4"
      elevation="5"
      min-width="48%"
    >
      <div class="d-flex">
        <v-spacer/>
        <v-icon x-large class="ma-1 pt-4 pb-4">
          mdi-pencil
        </v-icon>
        <v-spacer/>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'EditDeleteRow',
};
</script>

<style scoped>

</style>
