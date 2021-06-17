<template>
  <div>
    <h3>List component that contains item components</h3>
    <ItemList :items="items" class="list-item" />
  </div>
</template>

<script>
import ItemList from '@/components/ItemList'

export default {
  components: {
    ItemList
  },
  data () {
    return {
      items: [
        { id: 1, name: 'Item X' },
        { id: 2, name: 'Item Y' },
        { id: 3, name: 'Item Z' }
      ]
    }
  }
}

</script>

<style>
.list-item {
  border: 2px dashed red;
  margin: 5px;

}
</style>
