<template>
  <v-card
    raised
    bottom
    @click="addNewDog"
  >
    <v-container>
      <v-row>
        <v-col cols="3" class="ml-6">
          <v-icon
            x-large
          >
            mdi-dog
          </v-icon>
        </v-col>
        <v-col cols="6" class="mt-2">
          <h3>
            Add doggy data
          </h3>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import Dog from '@/models/Dog';

export default {
  name: 'EmptyState',
  methods: {
    addNewDog() {
      this.$emit('addNewDog', new Dog());
    },
  },
};
</script>

<style scoped>

</style>
