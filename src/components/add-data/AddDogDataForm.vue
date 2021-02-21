<template>
  <v-container>
    <DeleteDogDialogue
      v-if="!!confirmDeletion"
      :dog="confirmDeletion"
      @cancel="confirmDeletion = undefined"
      @delete="deleteDog"
    />
    <EditDeleteRow
      @edit="edit"
      @delete="confirmDeletion = dog"
    />
    <SymptomDataForm :dog="dog" @save="save"/>
    <MedicineDataForm :dog="dog" @save="save"/>
    <FoodDataForm :dog="dog" @save="save"/>
    <WalkDataForm :dog="dog" @save="save"/>
    <CancelAddDataButton @cancel="cancel"/>
  </v-container>
</template>

<script>

import DeleteDogDialogue from '@/components/add-data/DeleteDogDialogue.vue';
import CancelAddDataButton from '@/components/add-data/CancelAddDataButton.vue';
import FoodDataForm from '@/components/add-data/FoodDataForm.vue';
import WalkDataForm from '@/components/add-data/WalkDataForm.vue';
import MedicineDataForm from '@/components/add-data/MedicineDataForm.vue';
import SymptomDataForm from '@/components/add-data/SymptomDataForm.vue';
import EditDeleteRow from '@/components/add-data/EditDeleteRow.vue';

export default {
  name: 'AddDogDataForm',
  components: {
    EditDeleteRow,
    SymptomDataForm,
    MedicineDataForm,
    WalkDataForm,
    FoodDataForm,
    CancelAddDataButton,
    DeleteDogDialogue,
  },
  props: {
    dog: Object,
  },
  data: () => ({
    confirmDeletion: undefined,
  }),
  methods: {
    deleteDog() {
      this.$emit('delete', this.dog);
    },
    edit() {
      this.$emit('edit', this.dog);
    },
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
