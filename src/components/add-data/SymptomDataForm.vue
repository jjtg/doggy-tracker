<template>
  <v-row xs12 class="mb-4">
    <v-card min-width="100%" elevation="5">
      <v-row xs12>
        <v-spacer/>
        <v-col cols="2">
          <v-icon x-large class="ma-3">
            mdi-emoticon-sick
          </v-icon>
        </v-col>
        <v-col cols="5">
          <v-card-title>
            Symptom
          </v-card-title>
        </v-col>
        <v-spacer/>
      </v-row>
    </v-card>
  </v-row>
</template>

<script>
export default {
  name: 'SymptomDataForm',
};
</script>

<style scoped>

</style>
