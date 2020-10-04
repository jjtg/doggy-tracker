<template>
  <v-card @click="$emit('delete')" color="error lighten-3" min-width="48%" elevation="5">
    <v-row>
      <v-spacer/>
      <v-col>
        <v-icon x-large class="ml-2">
          mdi-delete
        </v-icon>
      </v-col>
      <v-spacer/>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: 'DeleteButton',
};
</script>

<style scoped>

</style>
