<template>
  <div>
    <div v-if="! editing">
      <h1 v-text="question.title"></h1>
      <div class="body" v-text="question.body"></div>

      <button id="edit" @click="editing = true">Edit</button>
    </div>

    <div v-else>
      <input type="text" name="title" v-model="question.title" />
    </div>
  </div>
</template>

<script>
  export default {
    props: ['question'],

    data () {
      return {
        editing: false
      }
    }
  }
</script>
