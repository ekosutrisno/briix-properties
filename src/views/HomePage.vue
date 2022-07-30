<template>
  <!-- Header Section -->
  <Header />
  <!-- Hero Section -->
  <Hero />
  <!-- Separator Section -->
  <section class="bg-briix-blue-1 h-[120px]"></section>
  <!-- Feature Section -->
  <Feature />
  <!-- Benefits 1 -->
  <BenefitOne />
  <!-- Benefits 2 -->
  <BenefitTwo />
  <!-- Properties -->
  <Properties />

</template>

<script setup lang="ts">
  import Header from "@/components/Header.vue";
  import Hero from "@/components/Hero.vue";
  import Feature from "@/components/Feature.vue";
  import BenefitOne from "@/components/BenefitOne.vue";
  import BenefitTwo from "@/components/BenefitTwo.vue";
  import Properties from "@/components/Properties.vue";
</script>
