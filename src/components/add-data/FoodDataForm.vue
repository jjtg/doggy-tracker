<template>
  <v-row xs12 class="mb-4">
    <v-row v-if="showModal" justify="center">
      <v-dialog
        v-model="dog"
        persistent
        max-width="600px"
      >
        <v-card>
          <v-card-title>
            <span class="headline">
              What did you feed {{ dog.gender === 'Male' ? 'him' : 'her'}}?
            </span>
          </v-card-title>
          <v-card-text>
            <v-form ref="foodDataForm">
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6" md="4">
                    <v-select
                      v-model="newData.type"
                      :items="dog.foodTypes.map((it) => it.type)"
                      label="Select food type"
                      :rules="[v => !!v || 'Food type is required']"/>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="6" sm="6" md="4">
                    <v-text-field
                      v-model="newData.amount"
                      type="number"
                      placeholder="50"
                      suffix="g"
                      :rules="[v => !!v || 'Amount is required']"
                    />
                  </v-col>
                  <v-col cols="6" sm="6" md="4">
                    <v-btn color="success" class="mt-2" @click="timePicker = true">
                      {{ newData.time.toTimeString().split(' ')[0]
                      .replace(/:\d{2}$/, '') || 'Not selected' }}
                      <v-icon right>
                        mdi-clock
                      </v-icon>
                    </v-btn>
                  </v-col>
                </v-row>
              </v-container>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="error" text @click="showModal = false">
              Cancel
            </v-btn>
            <v-btn :disabled="!newData.type || !newData.amount || !newData.time"
                   color="primary" text @click="saveData">
              Save
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
    <v-card @click="addNewData" min-width="100%" elevation="5">
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
</template>

<script>
import Food from '@/models/Food';

export default {
  name: 'FoodDataForm',
  props: {
    dog: Object,
  },
  data: () => ({
    newData: undefined,
    showModal: false,
    timePicker: false,
  }),
  methods: {
    addNewData() {
      this.newData = new Food({
        type: this.dog.foodTypes[0].type || undefined,
        time: new Date(),
      });
      this.showModal = true;
    },
    saveData() {
      this.newData.amount = parseInt(this.newData.amount, 10);
      this.dog.food.push(this.newData);
      this.$emit('save');
      this.showModal = false;
    },
  },
};
</script>

<style scoped>

</style>
