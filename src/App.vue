<template>
  <ion-app>
    <!-- Header -->
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Blank</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <!-- Router -->
      <ion-router-outlet />
    </ion-content>
    <ion-footer>
    <ion-toolbar>
      <ion-title>Footer</ion-title>
    </ion-toolbar>
  </ion-footer>
  </ion-app>
</template>

<script setup>
import {
  IonApp, 
  IonRouterOutlet,
  IonContent,
  IonHeader,
  IonFooter,
  IonTitle,
  IonToolbar
} from '@ionic/vue';
</script>
