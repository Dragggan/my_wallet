<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>title 1</ion-title>
      </ion-toolbar>
    </ion-header>
    <slot></slot>
  </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonTitle, IonToolbar } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BaseLayout',
  components: {
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
  },
});
</script>

<style scoped></style>
