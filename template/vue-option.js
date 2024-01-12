export const vueOption = (fileName,sections )=> {

const options = {
    M: false,
    m: false,
    d: false
  };

sections.forEach((section) => {
  options[section] = true;
});

return `
<template>

</template>

<script>

export default {
  name: '${fileName}',
  ${
    options.d ? `data() {
      return {

      };
    },` : ''
  }
  ${
    options.m ? `methods: {

  },` : ''
  }
  ${
    options.M ? `mounted() {

  },` : ''
  }
}
</script>

<style scoped>

</style>
`;
}
