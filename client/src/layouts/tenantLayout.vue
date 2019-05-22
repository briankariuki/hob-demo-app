<template>
    <div>
    <Nav/>
    <main>
      <slot/>
    </main>
  </div>
</template>

<script>
import Nav from '@/components/tenantNav.vue';
export default {
  components: {
    Nav,
  },
};
</script>

<style>

</style>
