<template>
    <div>
    <Nav/>
    <main>
      <slot/>
    </main>
  </div>
</template>

<script>
import Nav from '@/components/nav.vue';
export default {
  components: {
    Nav,
  },
};
</script>

<style>

</style>
