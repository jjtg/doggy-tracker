<template>
  <v-btn @click="add" color="primary" class="add-button" dark fab>
    <v-icon>mdi-plus</v-icon>
  </v-btn>
</template>

<script>

export default {
  name: 'AddDogButton',
  methods: {
    add() {
      this.$emit('add');
    },
  },
};
</script>

<style scoped>
.add-button {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
}
</style>
