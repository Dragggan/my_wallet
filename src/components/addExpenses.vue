<template>
  <base-layout>
    <ion-content>
      test add expenses
    </ion-content>
  </base-layout>
</template>

<script>
import { defineComponent } from 'vue';
import BaseLayout from '../components/baseLayout.vue';
import { IonContent } from '@ionic/vue';

export default defineComponent({
  name: 'addExpenses',
  components: {
    IonContent,
    BaseLayout,
  },
});
</script>

<style scoped></style>
