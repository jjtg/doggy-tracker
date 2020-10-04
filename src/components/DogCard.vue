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
            <v-icon color="primary darken-4" v-if="dog.gender === 'Male'" class="gender">
              mdi-gender-male
            </v-icon>
            <v-icon color="pink lighten-4" v-else class="gender">mdi-gender-female</v-icon>
          </v-card-title>
          <v-card-subtitle class="pl-8 pt-0 pb-0 pr-0">
            {{dog.breed}} - Age: {{dog.age}}
          </v-card-subtitle>
          <v-card-text class="pl-10 pt-2 pb-0 pr-0">
            <v-row>
              <v-col class="pa-0">
                <v-row class="ma-0">
                  <v-icon>mdi-dog-service</v-icon>
                </v-row>
                <v-row class="ml-1 mt-0 mr-0 mb-0">
                  {{dog.walks.length}}
                </v-row>
              </v-col>
              <v-col class="pa-0">
                <v-row class="ma-0">
                  <v-icon>mdi-food-drumstick</v-icon>
                </v-row>
                <v-row class="ma-0">
                  {{dog.remainingFood}}
                </v-row>
              </v-col>
              <v-col class="pa-0">
                <v-img src="@/assets/poop-icon-white.png" width="24" class="poop-icon"/>
                {{dog.lastPoopToday}}
              </v-col>
              <v-col class="pl-0 pt-0 pb-0 pr-3">
                <v-row class="ma-0">
                  <v-icon>mdi-pill</v-icon>
                </v-row>
                <v-row class="ml-1 mt-0 mr-0 mb-0">
                  {{dog.remainingMedicine}}
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
  right: 2rem;
}
.poop-icon {
  margin-top: -5px;
  margin-left: 4px;
}
</style>
