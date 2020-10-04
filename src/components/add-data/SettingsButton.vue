<template>
  <v-card @click="$emit('edit')" color="primary lighten-4" min-width="48%" elevation="5">
    <v-row>
      <v-spacer/>
      <v-col>
        <v-icon x-large class="ml-2">
          mdi-cog
        </v-icon>
      </v-col>
      <v-spacer/>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: 'SettingsButton',
};
</script>

<style scoped>

</style>
