<template>
  <div class="my-item">{{ `${value.id}: ${value.name}` }}</div>
</template>

<script>
export default {
  props: {
    value: Object,
    default: () => 'Default Item'
  }
}
</script>

<style>
.my-item {
  border: 1px dashed blue;
  margin: 10px;

}
.my-item:hover {
  background-color: lightblue;
}
</style>
