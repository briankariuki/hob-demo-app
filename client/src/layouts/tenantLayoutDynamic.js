import tenantLayout from './tenantLayout.vue';

export default {
  name: 'tenantLayoutDynamic',
  created() {
    this.$parent.$emit('update:layout', tenantLayout);
  },
  render() {
    return this.$slots.default[0];
  },
};