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

export default {
  props: {
    dog: Object,
  },
  name: 'EditDogForm',
  data: () => ({
    picture: undefined,
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
  },
};
</script>

<style scoped>

</style>
