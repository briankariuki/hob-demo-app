import mainLayout from './mainLayout.vue';

export default {
  name: 'mainLayoutDynamic',
  created() {
    this.$parent.$emit('update:layout', mainLayout);
  },
  render() {
    return this.$slots.default[0];
  },
};