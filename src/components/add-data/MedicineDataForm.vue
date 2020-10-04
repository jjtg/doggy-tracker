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
              What did give {{ dog.gender === 'Male' ? 'him' : 'her'}}?
            </span>
          </v-card-title>
          <v-card-text>
            <v-form ref="medicineDataForm">
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6" md="4">
                    <v-select
                      v-model="medicineType"
                      :items="dog.medicineTypes"
                      :item-text="v => `${v.name} (${v.dosage} / day)`"
                      :item-value="v => v"
                      label="Select medicine type"
                      :rules="[v => !!v || 'Medicine type is required']"/>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="6" sm="6" md="4">
                    <v-text-field
                      :disabled="!medicineType"
                      v-model="newData.dosage"
                      :placeholder="medicineType ? medicineType.dosage : ''"
                      :rules="[v => !!v || 'Dosage is required']"
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
          <v-card-text
            v-if="medicineType"
            class="ma-0 pl-8"
          >
            You've given {{ dog.gender === 'Male' ? 'him' : 'her'}}
            {{dog.givenMedicineToday(medicineType).length}} / {{medicineType.amount}} time(s) today.
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="error" text @click="cancel">
              Cancel
            </v-btn>
            <v-btn :disabled="!newData.name || !newData.amount || !newData.time || !newData.dosage"
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
</template>

<script>
import Medicine from '@/models/Medicine';

export default {
  name: 'MedicineDataForm',
  props: {
    dog: Object,
  },
  data: () => ({
    newData: undefined,
    medicineType: undefined,
    showModal: false,
  }),
  watch: {
    medicineType(val) {
      if (val) {
        this.newData.name = val.name;
        this.newData.dosage = val.dosage;
        this.newData.amount = val.amount;
      }
    },
  },
  methods: {
    cancel() {
      this.showModal = false;
      this.newData = undefined;
      this.medicineType = undefined;
    },
    addNewData() {
      this.newData = new Medicine({
        time: new Date(),
      });
      this.showModal = true;
    },
    saveData() {
      this.dog.medicine.push(this.newData);
      this.$emit('save');
      this.showModal = false;
    },
  },
};
</script>

<style scoped>

</style>
