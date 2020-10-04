<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 md6>
        <v-text-field
          label="Name"
          placeholder="Your pooch's name"
          :rules="[v => !!v || 'Every pooch needs a name!']"
          v-model="dog.name"
        ></v-text-field>
      </v-flex>
      <v-flex xs12 md6>
        <v-text-field
          label="Age"
          placeholder="How old in years? (even if zero)"
          :rules="[v => !!v || 'Not born yet??']"
          v-model="dog.age"
          type="number"
        ></v-text-field>
      </v-flex>
      <v-flex xs12 md6>
        <v-autocomplete
          :items="dogBreeds"
          label="Breed"
          placeholder="What breed is your dog? (optional)"
          v-model="dog.breed"
        ></v-autocomplete>
      </v-flex>
      <v-flex xs12 md6>
        <v-radio-group
          label="Gender"
          row
          v-model="dog.gender"
        >
          <v-layout justify-center>
            <v-radio v-for="g in ['Male', 'Female']" :key="g" :value="g" :label="g"/>
          </v-layout>
        </v-radio-group>
      </v-flex>
      <v-flex xs12 md6>
        <v-row v-if="dog.picture">
          <v-spacer/>
          <v-avatar
            class="ma-3"
            size="125"
            rounded
          >
            <v-img :src="dog.picture"/>
          </v-avatar>
          <v-spacer/>
        </v-row>
        <v-file-input
          accept=".jpg,.jpeg,.png"
          label="Upload new picture"
          filled
          prepend-icon="mdi-camera"
          v-model="picture"
        ></v-file-input>
      </v-flex>
      <v-flex xs12>
        <v-chip-group column>
          <v-chip
            v-for="f in dog.foodTypes"
            :key="f.uuid"
            class="ma-2"
            close
            color="purple"
            outlined
            @click:close="removeFoodType(f)"
          >
            {{f.type}} ({{f.amount}}g / day)
          </v-chip>
        </v-chip-group>
      </v-flex>
      <v-flex xs12 md6>
        <v-form ref="foodForm">
          <v-col cols="12">
            <v-text-field
              label="Food"
              placeholder="What food does your dog eat?"
              :rules="[v => !!v || 'Food name is required']"
              v-model="newFood"/>
          </v-col>
          <v-row xs12>
            <v-col cols="8" class="ml-2">
              <v-text-field
                label="Amount per day"
                placeholder="500"
                :rules="[v => !!v]"
                suffix="grams per day"
                v-model="newFoodAmount"
                type="number"/>
            </v-col>
            <v-col cols="2">
              <v-btn
                class="mt-2"
                color="primary"
                text
                :disabled="!newFood || !newFoodAmount"
                @click="addFoodType" >
                Add
              </v-btn>
            </v-col>
          </v-row>
        </v-form>
      </v-flex>
      <v-flex xs12>
        <v-chip-group column>
          <v-chip
            v-for="m in dog.medicineTypes"
            :key="m.uuid"
            class="ma-2"
            close
            color="red"
            outlined
            @click:close="removeMedicineType(m)"
          >
            {{m.name}} ({{m.amount}} time(s) / day)
          </v-chip>
        </v-chip-group>
      </v-flex>
      <v-flex xs12 md6>
        <v-form ref="medicineForm">
          <v-col cols="12">
            <v-text-field
              label="Medicine"
              placeholder="Any prescriptions on your dog?"
              :rules="[v => !!v || 'Medicine name is required']"
              v-model="newMedicine"/>
          </v-col>
          <v-col cols="12">
            <v-text-field
              label="Dosage"
              placeholder="f.ex. 1 pill"
              :rules="[v => !!v || 'Dosage is required']"
              v-model="newMedicineDosage"/>
          </v-col>
          <v-row xs12>
            <v-col cols="8" class="ml-2">
              <v-text-field
                label="Times per day"
                placeholder="3"
                :rules="[v => !!v]"
                suffix="time(s) per day"
                v-model="newMedicineAmount"
                type="number"/>
            </v-col>
            <v-col cols="2">
              <v-btn
                class="mt-2"
                color="primary"
                text
                :disabled="!newMedicine || !newMedicineDosage || !newMedicineAmount"
                @click="addMedicineType" >
                Add
              </v-btn>
            </v-col>
          </v-row>
        </v-form>
      </v-flex>
      <v-flex xs6 md6>
        <v-btn
          class="mr-1"
          block
          color="error"
          @click="cancel"
        >
          <v-icon left>mdi-cancel</v-icon>
          cancel
        </v-btn>
      </v-flex>
      <v-flex xs6 md6>
        <v-btn
          class="ml-1"
          block
          color="accent"
          @click="save"
          :disabled="!formValid"
        >
          <v-icon left>mdi-plus</v-icon>
          save
        </v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import dogBreeds from '@/lib/dogBreeds';
import Food from '@/models/Food';
import Medicine from '@/models/Medicine';

export default {
  props: {
    dog: Object,
  },
  name: 'EditDogForm',
  data: () => ({
    picture: undefined,
    newFood: undefined,
    newFoodAmount: undefined,
    newMedicine: undefined,
    newMedicineDosage: undefined,
    newMedicineAmount: undefined,
    dogBreeds,
  }),
  watch: {
    picture(val) {
      const reader = new FileReader();
      reader.onload = () => {
        this.dog.picture = reader.result;
      };
      reader.readAsDataURL(val);
    },
  },
  computed: {
    formValid() {
      return !!this.dog.name && !!this.dog.age && !!this.dog.gender;
    },
  },
  methods: {
    save() {
      this.$emit('save', this.dog);
    },
    cancel() {
      this.$emit('cancel');
    },
    addFoodType() {
      this.dog.foodTypes.push(new Food({
        type: this.newFood,
        amount: parseInt(this.newFoodAmount, 10),
      }));
      this.$refs.foodForm.reset();
    },
    removeFoodType(food) {
      this.dog.foodTypes = this.dog.foodTypes.filter((it) => it.uuid !== food.uuid);
    },
    addMedicineType() {
      this.dog.medicineTypes
        .push(new Medicine({
          name: this.newMedicine,
          dosage: this.newMedicineDosage,
          amount: parseInt(this.newMedicineAmount, 10),
        }));
      this.$refs.medicineForm.reset();
    },
    removeMedicineType(medicine) {
      this.dog.medicineTypes = this.dog.medicineTypes.filter((it) => it.uuid !== medicine.uuid);
    },
  },
};
</script>

<style scoped>

</style>
