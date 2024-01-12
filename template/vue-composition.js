export const vueComposition = (fileName,sections) =>{
const options = {
    M: false,
  };

sections.forEach((section) => {
  options[section] = true;
});

return `
<template>

</template>

<script setup>

import { ref ${options.M ? ',onMounted' : '' } } from 'vue' 

${
  options.M ? `const onMounted = () => {

};` : ''
}

}

</script>

<style scoped>

</style>
`;
}
