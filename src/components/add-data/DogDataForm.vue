<template>
  <v-container>
    <DeleteDogDialogue
      v-if="!!confirmDeletion"
      :dog="confirmDeletion"
      @cancel="confirmDeletion = undefined"
      @delete="deleteDog"
    />
    <v-row xs12 class="mb-4">
      <v-card @click="confirmDeletion = dog" color="error lighten-3" min-width="48%" elevation="5">
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
      <v-spacer/>
      <v-card @click="edit" color="primary lighten-4" min-width="48%" elevation="5">
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
    </v-row>
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
    <v-row xs12 class="mb-4">
      <v-card min-width="100%" elevation="5">
        <v-row xs12>
          <v-spacer/>
          <v-col cols="2">
            <v-icon x-large class="ma-3">
              mdi-pill
            </v-icon>
          </v-col>
          <v-col cols="5">
            <v-card-title>
              Medicine
            </v-card-title>
          </v-col>
          <v-spacer/>
        </v-row>
      </v-card>
    </v-row>
    <v-row xs12 class="mb-4">
      <v-card min-width="100%" elevation="5">
        <v-row xs12>
          <v-spacer/>
          <v-col cols="2">
            <v-icon x-large class="ma-3">
              mdi-food-drumstick
            </v-icon>
          </v-col>
          <v-col cols="5">
            <v-card-title>
              Food
            </v-card-title>
          </v-col>
          <v-spacer/>
        </v-row>
      </v-card>
    </v-row>
    <v-row xs12 class="mb-4">
      <v-card min-width="100%" elevation="5">
        <v-row xs12>
          <v-spacer/>
          <v-col cols="2">
            <v-icon x-large class="ma-3">
              mdi-dog-service
            </v-icon>
          </v-col>
          <v-col cols="5">
            <v-card-title>
              Walk
            </v-card-title>
          </v-col>
          <v-spacer/>
        </v-row>
      </v-card>
    </v-row>
    <CancelAddDataButton @cancel="cancel" />
  </v-container>
</template>

<script>

import DeleteDogDialogue from '@/components/add-data/DeleteDogDialogue.vue';
import CancelAddDataButton from '@/components/add-data/CancelAddDataButton.vue';

export default {
  name: 'AddDogDataForm',
  components: { CancelAddDataButton, DeleteDogDialogue },
  props: {
    dog: Object,
  },
  data: () => ({
    confirmDeletion: undefined,
  }),
  methods: {
    deleteDog() {
      this.$emit('delete', this.dog);
    },
    edit() {
      this.$emit('edit', this.dog);
    },
    cancel() {
      this.$emit('cancel');
    },
  },
};
</script>

<style scoped>

</style>
