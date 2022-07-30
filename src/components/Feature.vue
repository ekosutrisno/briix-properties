<template>
  <section id="feature-section" class="briix-container pb-10">
    <div class="bg-white py-12 briix-shadow h-[362px] rounded-2xl -mt-[120px]">
        <div class="font-manrope text-center font-semibold text-2xl uppercase tracking-[0.2em] text-briix-primary">Our Products</div>
        <div class="grid grid-cols-2 divide-x-2 divide-briix-grey-2 mt-14">
            <!-- Left -->
            <div class="grid grid-cols-6 px-12">
                <div class="col-span-4">
                  <h1 class="font-manrope text-2xl text-briix-black font-semibold">Properties, Financing & <br> Leasing</h1>
                  <p class="font-normal text-sm text-briix-body mt-[10px] leading-[22px]">Real Estate is an integral part of any diversified <br> investment portfolio. We provide properties we <br> believe in and with that, enables us to share risk <br> with our members.</p>
                </div>
                <div class="col-span-2">
                  <EmploymentData />
                </div>
            </div>

            <!-- Right -->
             <div class="grid grid-cols-6 px-12">
                <div class="col-span-4">
                  <h1 class="font-manrope text-2xl text-briix-black font-semibold">Fixed Income Returns</h1>
                  <p class="font-normal text-sm text-briix-body mt-[10px] leading-[22px]">The key benefits of investing in fixed income is <br> that they have lower associated risks and allows <br> you to obtain periodic income</p>
                </div>
                <div class="col-span-2">
                  <CoinData />
                </div>
            </div>
        </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import EmploymentData from './svg/EmploymentData.vue';
import CoinData from './svg/CoinData.vue';

</script>