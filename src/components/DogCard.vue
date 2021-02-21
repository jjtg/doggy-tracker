<template>
  <v-card
    class="mb-4"
    color="primary"
    elevation="5"
    dark
    @click="addNewData"
  >
    <v-container>
      <v-row xs12>
        <v-col cols="3" class="pt-2 pb-0 pr-0">
          <v-avatar
            class="ma-0"
            size="95"
            rounded
          >
            <v-img v-if="dog.picture" :src="dog.picture" />
            <v-icon v-else x-large>
              mdi-dog
            </v-icon>
          </v-avatar>
        </v-col>
        <v-col cols="9" class="pb-0 pt-0 pr-0">
          <v-card-title class="pl-8 pt-0 pb-4 pr-0">
            {{dog.name}}
            <v-icon color="primary darken-4" class="gender">
              {{ dog.gender === 'Male' ? 'mdi-gender-male' : 'mdi-gender-female' }}
            </v-icon>
          </v-card-title>
          <v-card-subtitle class="pl-8 pt-0 pb-0 pr-0">
            {{dog.breed}} - Age: {{dog.age}}
          </v-card-subtitle>
          <v-card-text class="pl-10 pt-2 pb-0 pr-0">
            <v-row class="pt-0" justify="center">
              <v-col class="pa-0">
                <v-row justify="center">
                  <v-icon>mdi-dog-service</v-icon>
                </v-row>
                <v-row justify="center">
                  {{dog.lastWalkTime}}
                </v-row>
              </v-col>
              <v-col class="pa-0">
                <v-row justify="center">
                  <v-icon>mdi-food-drumstick</v-icon>
                </v-row>
                <v-row justify="center">
                  {{dog.lastFeedingTime}}
                </v-row>
              </v-col>
              <v-col v-if="dog.medicineTypes.length > 0" class="pa-0">
                <v-row justify="center">
                  <v-icon>mdi-pill</v-icon>
                </v-row>
                <v-row justify="center">
                  {{dog.lastMedicineTime}}
                </v-row>
              </v-col>
              <v-col class="pa-0 poop-row">
                <v-row justify="center">
                  <v-img src="@/assets/poop-icon-white.png" max-width="24" />
                </v-row>
                <v-row justify="center">
                  {{dog.lastPoopTime}}
                </v-row>
              </v-col>
            </v-row>
          </v-card-text>
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
.gender {
  position: absolute;
  right: 1rem;
}
.poop-row {
  margin: -.3rem 1rem 0 -5px;
}
</style>
