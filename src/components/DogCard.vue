<template>
  <v-card
    class="mb-4"
    color="accent darken-2"
    elevation="5"
    dark
    @click="addNewData"
  >
    <v-container>
      <v-row xs12>
        <v-col cols="5">
          <v-avatar
            class="ma-3"
            size="125"
            rounded
          >
            <v-img v-if="dog.picture" :src="dog.picture" />
            <v-icon v-else x-large>
              mdi-dog
            </v-icon>
          </v-avatar>
        </v-col>
        <v-col cols="7">
          <v-card-title>
            {{dog.name}}
            <v-icon v-if="dog.gender === 'Male'">mdi-gender-male</v-icon>
            <v-icon v-else>mdi-gender-female</v-icon>
          </v-card-title>
          <v-card-subtitle>{{dog.breed}} - Age: {{dog.age}}</v-card-subtitle>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>

export default {
  props: ['dog'],
  name: 'DogCard',
  methods: {
    addNewData() {
      this.$emit('addNewData', this.dog);
    },
  },
};
</script>

<style scoped>

</style>
