<template>
  <div class="mb-4">
    <v-row v-if="showModal" justify="center">
      <v-dialog
        v-model="dog"
        persistent
        max-width="600px"
      >
        <v-card>
          <v-card-title>
            <span class="headline">
              You walked {{ dog.gender === 'Male' ? 'him' : 'her' }}?
            </span>
          </v-card-title>
          <v-card-text>
            <v-form ref="walkDataForm">
              <v-container>
                <v-row>
                  <v-col cols="6" sm="6" md="4">
                    <v-text-field
                      v-model="newData.length"
                      type="number"
                      placeholder="20"
                      suffix="minutes"
                      :rules="[v => !!v || 'Length is required']"
                    />
                  </v-col>
                  <v-col cols="6" sm="6" md="4">
                    <v-btn color="success" class="mt-2" @click="timePicker = true">
                      {{
                        newData.time.toTimeString().split(' ')[0]
                          .replace(/:\d{2}$/, '') || 'Not selected'
                      }}
                      <v-icon right>
                        mdi-clock
                      </v-icon>
                    </v-btn>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12" sm="12">
                    <v-checkbox v-model="newData.pee" label="Pee"/>
                  </v-col>
                  <v-col cols="12" sm="12">
                    <v-checkbox v-model="didPoo" label="Poo"/>
                    <v-select
                      label="How was it?"
                      v-if="newData.poo"
                      v-model="newData.poo.pooType"
                      :items="['normal', 'hard', 'soft', 'diarrhea']"
                    ></v-select>
                    <v-select
                      label="How much?"
                      v-if="newData.poo"
                      v-model="newData.poo.amount"
                      :items="['normal', 'a little', 'a lot']"
                    ></v-select>
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
            <v-btn :disabled="!newData.length || !newData.time"
                   color="primary" text @click="saveData">
              Save
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
    <v-card
      @click="addNewData"
      elevation="5"
    >
      <v-row class="justify-center">
        <v-icon x-large class="ma-1 pt-4 pb-4">
          mdi-dog-service
        </v-icon>
        <v-card-title>
          Walk
        </v-card-title>
      </v-row>
    </v-card>
  </div>
</template>

<script>
import Walk from '@/models/Walk';
import Poo from '@/models/Poo';

export default {
  name: 'WalkDataForm',
  props: {
    dog: Object,
  },
  data: () => ({
    showModal: false,
    newData: undefined,
    didPoo: false,
  }),
  watch: {
    didPoo(val) {
      if (val) {
        this.newData.poo = new Poo({
          pooType: 'normal',
          amount: 'normal',
        });
      } else {
        this.newData.poo = undefined;
      }
    },
  },
  methods: {
    addNewData() {
      this.newData = new Walk({
        time: new Date(),
      });
      this.showModal = true;
    },
    saveData() {
      this.newData.length = parseInt(this.newData.length, 10);
      this.dog.walks.push(this.newData);
      this.$emit('save');
      this.showModal = false;
    },
  },
};
</script>

<style scoped>

</style>
