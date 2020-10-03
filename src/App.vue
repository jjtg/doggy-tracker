<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-spacer/>
      <div class="d-flex align-center">
        <v-img alt="Pug Logo" class="shrink mr-2" contain src="@/assets/pugLogo.png"
               transition="scale-transition" width="40" />
        <h2>DoggyTracker</h2>
      </div>
      <v-spacer/>
    </v-app-bar>

    <v-main>
      <v-container>
        <v-row dense>
          <v-col cols="12">
            <AddDogDataForm v-if="!!addingData && !editing"
                            :dog="addingData"
                            @edit="createOrEditDog"
                            @save="saveDog"
                            @delete="deleteDog"
                            @cancel="addingData = undefined"/>
            <EditDogForm v-if="!!editing"
                         :dog="editing"
                         @save="saveDog"
                         @cancel="editing = undefined"/>
            <EmptyState v-else-if="dogs.length < 1" @addNewDog="createOrEditDog"/>
            <AddButton v-else-if="dogs.length > 0 && !editing && !addingData"
                       @add="createOrEditDog"/>
            <div v-if="!editing && !addingData">
              <DogCard v-for="d in dogs" :key="d.uuid" :dog="d" @addNewData="addData"/>
            </div>
          </v-col>
        </v-row>
      </v-container>

    </v-main>
  </v-app>
</template>

<script>
import AddDogDataForm from '@/components/forms/AddDogDataForm.vue';
import EditDogForm from '@/components/forms/EditDogForm.vue';
import EmptyState from '@/components/EmptyState.vue';
import DogCard from '@/components/DogCard.vue';
import AddButton from '@/components/common/AddButton.vue';
import Dog from '@/models/Dog';

export default {
  name: 'App',
  components: {
    AddDogDataForm,
    AddButton,
    DogCard,
    EditDogForm,
    EmptyState,
  },
  data: () => ({
    editing: undefined,
    addingData: undefined,
    dogs: [],
  }),
  methods: {
    createOrEditDog(dog = new Dog()) {
      this.editing = dog;
    },
    addData(dog) {
      this.addingData = dog;
    },
    async saveDog(dog) {
      this.dogs = await this.$store.dispatch('dogs/saveDog', dog);
      this.editing = undefined;
    },
    async deleteDog(dog) {
      this.dogs = await this.$store.dispatch('dogs/deleteDog', dog);
      this.addingData = undefined;
    },
  },
  async mounted() {
    this.dogs = await this.$store.dispatch('dogs/fetchDogs');
    await document.documentElement.requestFullscreen();
  },
};
</script>
<style>
</style>
