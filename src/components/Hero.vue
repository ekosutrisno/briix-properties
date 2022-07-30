<template>
  <section id="hero-section" class="lg:h-[594px] briix-container bg-briix-blue-1 grid grid-cols-2">
    <div>
      <h1 class="font-semibold mt-[133px] text-5xl text-briix-blue-7 font-manrope leading-snug">
        Start Building Your <br> Wealth, Brick by Brick
      </h1>
      <p class="font-semibold mt-6 text-briix-primary text-2xl font-manrope leading-8">Briix keeps it simple, the way investing <br> should be.</p>
      <p class="text-base mt-8">PT Briix Financial Technology is registered and supervised by</p>
      <div class="flex mt-2 items-center space-x-[12px]">
          <KominfoLogo />
          <img src="https://briix.com/images/products/fintech.png" height="32" width="58" alt="fintech-logo">
          <OjkLogo />
      </div>
    </div>
    <div>
      <Ilustration class="mt-10"/>
    </div>
  </section>
</template>

<script setup lang="ts">
    import Ilustration from './svg/Ilustration.vue';
    import KominfoLogo from './svg/KominfoLogo.vue';
    import OjkLogo from './svg/OjkLogo.vue';

</script>