<template>
  <v-row justify="center">
    <v-dialog
      v-model="dog"
      persistent
      max-width="600px"
    >
      <v-card>
        <v-card-title>
          <span class="headline">Delete {{dog.name}}?</span>
        </v-card-title>
        <v-card-subtitle>
          All data will be lost
        </v-card-subtitle>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  v-model="nameConfirmation"
                  label="Write dog's name to confirm"
                  :rules="[v => !!v && v === dog.name]"/>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="error" text @click="$emit('cancel')">
            Cancel
          </v-btn>
          <v-btn :disabled="nameConfirmation !== dog.name"
                 color="primary" text @click="$emit('delete')">
            Confirm
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  name: 'DeleteDogDialogue',
  props: {
    dog: Object,
  },
  data: () => ({
    nameConfirmation: undefined,
  }),
};
</script>

<style scoped>

</style>
