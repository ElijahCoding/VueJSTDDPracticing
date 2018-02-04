<template>
  <div>
    <div v-if="! editing">
      <h1 v-text="question.title"></h1>
      <div class="body" v-text="question.body"></div>

      <button id="edit" @click="editing = true">Edit</button>
    </div>

    <div v-if="editing">
      <input type="text" name="title" v-model="question.title" />
      <textarea name="body" v-model="question.body"></textarea>

      <button id="update" @click="editing = false"></button>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['dataQuestion'],

    data () {
      return {
        question: this.dataQuestion,
        editing: false
      }
    }
  }
</script>
