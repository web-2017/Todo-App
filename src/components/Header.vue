<template lang="pug">
  .hello
    .left
      h1 {{consom}} {{costom2}}

      form(@submit.prevent='addLink')
        input(
          type="text" class="link-input" placeholder="add a link"
          v-model="newLink"
        )
    
      ul
        li(v-for="(link, index) in links" :key="index")
          span {{link}}
          button(@click='removeLinks(index)' class="rm") Remove
    .right
      appStats
</template>


<script>
import Stats from "./Stats";
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  data() {
    return {
      newLink: ""
    };
  },
  components: {
    appStats: Stats
  },
  computed: {
    ...mapState({
      consom: "title",
      costom2: "age",
      links: "links"
    })
  },
  methods: {
    ...mapMutations(["ADD_LINK"]),
    ...mapActions(["removeLink"]),
    addLink() {
      this.ADD_LINK(this.newLink);
      this.newLink = "";
    },
    removeLinks(link) {
      this.removeLink(link);
    }
  }
};
</script>

<style>
html,
#app,
.home {
  height: 100%;
}
body {
  background-color: #f4f4f4;
  margin: 0;
  height: 100%;
}

.hello {
  display: grid;
  grid-template-columns: repeat(2, 50%);
  grid-template-rows: 100%;
  grid-template-areas: "left right";
  height: 100%;
}

.left,
.right {
  padding: 30px;
}

ul {
  list-style-type: none;
  padding: 0;
}
ul li {
  padding: 20px;
  background: white;
  margin-bottom: 8px;
}

.right {
  grid-area: right;
  background-color: #e9e9e9;
}

input {
  border: none;
  padding: 20px;
  width: calc(100% - 40px);
  box-shadow: 0 5px 5px lightgrey;
  margin-bottom: 50px;
  outline: none;
}

.rm {
  float: right;
  text-transform: uppercase;
  font-size: 0.8em;
  background: #f9d0e3;
  border: none;
  padding: 5px;
  color: #ff0076;
  cursor: pointer;
}
</style>