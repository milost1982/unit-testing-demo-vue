<template>
  <div class="item-list-component">
    <h2>List of items:</h2>
    <Item
      v-for="item in items"
      :key="item.id"
      :value="item"
    />
  </div>
</template>

<script>
import Item from './Item.vue'

export default {
  components: {
    Item
  },
  props: {
    items: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scoped>
.item-list-component {
  width: 200px;
  margin: 0 auto;
}

</style>
