<template>
  <base-layout>
    <ion-content>
      <ion-list>
        <ion-row>
          <ion-col size="1">
            <ion-text color="secondary">
              <p>12</p>
            </ion-text>
          </ion-col>
          <ion-col size="4">
            <ion-text color="secondary">
              <p>12/12/2020</p>
            </ion-text>
          </ion-col>
          <ion-col size="6">
            <ion-text color="secondary">
              <p>description bla bla bla</p>
            </ion-text>
          </ion-col>
          <ion-col size="1">
            <ion-text color="secondary">
              <p>12e</p>
            </ion-text>
          </ion-col>
        </ion-row>
      </ion-list>
    </ion-content>
  </base-layout>
</template>

<script>
import { defineComponent } from 'vue';
import BaseLayout from '../components/baseLayout.vue';
import { IonContent, IonList, IonRow } from '@ionic/vue';

export default defineComponent({
  name: 'MainList',
  components: {
    IonContent,
    BaseLayout,
    IonList,
    IonRow,
  },
});
</script>

<style scoped></style>
