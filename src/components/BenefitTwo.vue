<template>
  <section class="lg:brix-container px-5 bg-briix-blue-7 pb-7 lg:pb-0 lg:h-[560px]">
    <img src="https://briix.com/images/section-whyus/vector-left.svg" class="absolute left-0" aria-hidden="true">
    <img src="https://briix.com/images/section-whyus/vector-right.svg" class="absolute right-0" aria-hidden="true">

    <div class="pt-16 relative w-full">
      <h1 class="text-center text-briix-white text-sm lg:text-base font-manrope font-semibold uppercase tracking-[0.2em]">Why Briix?</h1>
      <p class="font-semibold mt-4 text-center text-2xl lg:text-[40px] text-briix-white leading-8 lg:leading-[55px] font-manrope">We are changing real <br class="lg:hidden"> estate investment <br class="hidden lg:block"> for <br class="lg:hidden"> the better</p>

      <div class="lg:px-[100px] mt-12 grid gap-y-7 lg:gap-8 lg:grid-cols-3">
          <div class="rounded-lg py-8 px-6 backdrop-blur-[80px] lg:h-[233px] bg-briix-white/20">
              <MoneyHand />
              <h1 class="font-manrope mt-5 text-briix-white font-semibold text-2xl leading-8">Investing Made Easy</h1>
              <p class="font-inter leading-5 mt-2 text-sm font-medium text-briix-white/80">Our accessible investment model creates opportunities for more people to participate in the real estate market.</p>
          </div>
          <div class="rounded-lg py-8 px-6 backdrop-blur-[80px] lg:h-[233px] bg-briix-white/20">
              <Growth />
              <h1 class="font-manrope mt-5 text-briix-white font-semibold text-2xl leading-8">Curated Investment Products</h1>
              <p class="font-inter leading-5 mt-2 text-sm font-medium text-briix-white/80">We work directly with real estate developers and operators to give you the best investment properties in Indonesia.</p>
          </div>
          <div class="rounded-lg py-8 px-6 backdrop-blur-[80px] lg:h-[233px] bg-briix-white/20">
              <PieCart />
              <h1 class="font-manrope mt-5 text-briix-white font-semibold text-2xl leading-8">Manage your Portfolio</h1>
              <p class="font-inter leading-5 mt-2 text-sm font-medium text-briix-white/80">Keep track of your earnings and payments while your investments are managed.</p>
          </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import MoneyHand from './svg/MoneyHand.vue';
import Growth from './svg/Growth.vue';
import PieCart from './svg/PieCart.vue';
</script>