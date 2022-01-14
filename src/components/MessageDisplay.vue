<template>
  <p v-if="error" data-testid="message-error">{{ error }}</p>
  <p v-else data-testid="message">{{ message.text }}</p>
</template>

<script>
import { getMessage } from '@/services/axios.js'
export default {
  data() {
    return {
      message: {},
      error: null,
    }
  },
  async created() {
    try {
      this.message = await getMessage() // await returns the resolved value of the promise or throw an error when promise is rejected
    } catch (err) {
      this.error = err
    }
  },
  // created() {
  //     getMessage().then(message => {
  //         this.message = message
  //     }).catch(err => {
  //         this.error = err
  //     })
  // }
}
</script>

<style>
</style>