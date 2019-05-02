// Project.vue

<template>
  <div class="add">
    <form @submit="addProject">
      <input type="number" name="userId" id="userId" v-model="userId">
      <input type="text" name="title" id="title" placeholder="Some title..." v-model="title">
      <input type="text" name="completed" id="completed" placeholder="Complete" v-model="completed">
      <input type="submit" value="Create">
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "AddProject",
  data() {
    return {
      userId: 0,
      title: "",
      completed: false
    };
  },
  methods: {
    ...mapActions(["ADD_NEW_PROJECT"]),
    addProject(e) {
      e.preventDefault();
      this.ADD_NEW_PROJECT(this.userId, this.title, this.completed);
    }
  }
};
</script>