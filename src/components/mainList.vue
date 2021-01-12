<template>
  <base-layout>
    <ion-content>
      test main
    </ion-content>
  </base-layout>
</template>

<script>
import { defineComponent } from 'vue';
import BaseLayout from '../components/baseLayout.vue';
import { IonContent } from '@ionic/vue';

export default defineComponent({
  name: 'MainList',
  components: {
    IonContent,
    BaseLayout,
  },
});
</script>

<style scoped></style>
