<template>
  <section id="hero-section" class="lg:h-[594px] briix-container bg-briix-blue-1 grid lg:grid-cols-2">
    <div>
      <h1 class="font-semibold text-center lg:text-left mt-10 lg:mt-[133px] text-4xl lg:text-5xl text-briix-blue-7 font-manrope leading-snug">
        Start Building Your <br> Wealth, Brick by <br class="lg:hidden"/> Brick
      </h1>
      <p class="font-semibold mt-5 lg:mt-6 text-briix-primary text-center lg:text-left text-base lg:text-2xl font-manrope leading-6 lg:leading-8">Briix keeps it simple, the way investing <br> should be.</p>
      <p class="text-[10px] pl-[52px] lg:mx-0 lg:text-base mt-8">PT Briix Financial Technology is registered and supervised by</p>
      <div class="flex mt-2 items-center justify-center lg:justify-start space-x-[12px]">
          <KominfoLogo />
          <img src="https://briix.com/images/products/fintech.png" height="32" width="58" alt="fintech-logo">
          <OjkLogo />
      </div>
    </div>
    <div>
      <Ilustration class="mx-auto -mt-10 lg:mt-10 w-[320px] lg:w-auto lg:max-w-[564px]"/>
    </div>
  </section>
</template>

<script setup lang="ts">
    import Ilustration from './svg/Ilustration.vue';
    import KominfoLogo from './svg/KominfoLogo.vue';
    import OjkLogo from './svg/OjkLogo.vue';
</script>