<template lang="pug">
  .stats
    h1  A different components
    p There are currently {{ countLinks }} links

    button(
      @click='removeAllLinks' 
    ) Remove all links
    p {{ msg ? 'They have removed' : `We have ${countLinks} links`}}
</template>


<script>
import { mapGetters, mapMutations, mapActions } from "vuex";

export default {
  data() {
    return {
      msg: ""
    };
  },
  computed: {
    ...mapGetters(["countLinks"])
  },
  methods: {
    ...mapMutations(["REMOVE_ALL"]),
    ...mapActions(["removeAll"]),

    removeAllLinks() {
      this.removeAll().then(() => {
        this.msg = "They have removed ";
      });
    }
  }
};
</script>

<style scoped>
button {
  padding: 10px;
  margin-top: 30px;
  width: 100%;
  background: none;
  border: 1px solid lightgray;
  outline: 0;
  cursor: pointer;
}
</style>
