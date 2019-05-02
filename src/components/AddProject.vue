// Project.vue

<template>
    <div class="add">
        <form>
            <input type="number" name="userId" id="userId" v-model="userId">
            <input type="text" name="title" id="title" placeholder="Some title..." v-model="title">
            <input type="text" name="completed" id="completed" placeholder="Complete" v-model="completed">
            <input type="submit" value="Create">
        </form>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'AddProject'
}

</script>