<template>
  <section id="feature-section" class="briix-container px-5 pb-10">
    <div class="bg-white py-12 briix-shadow lg:h-[362px] rounded-2xl -mt-[120px]">
        <div class="font-manrope text-center font-semibold text-sm lg:text-2xl uppercase tracking-[0.2em] text-briix-primary">Our Products</div>
        <div class="grid gap-10 lg:gap-0 lg:grid-cols-2 lg:divide-x-2 divide-briix-grey-2 mt-12 lg:mt-14">
            <!-- Left -->
            <div class="grid lg:grid-cols-6 px-6 lg:px-12">
                <div class="lg:col-span-4">
                  <h1 class="font-manrope pt-6 lg:pt-0 text-2xl text-briix-black font-semibold">Properties, Financing & <br> Leasing</h1>
                  <p class="font-normal text-sm text-briix-body mt-[10px] leading-[22px]">Real Estate is an integral part of any diversified <br class="hidden lg:block"> investment portfolio. We provide properties we <br class="hidden lg:block"> believe in and with that, enables us to share risk <br class="hidden lg:block"> with our members.</p>
                </div>
                <div class="lg:col-span-2 mx-auto row-start-1 lg:row-start-auto">
                  <EmploymentData />
                </div>
            </div>

            <!-- Right -->
             <div class="grid lg:grid-cols-6 px-6 lg:px-12">
                <div class="lg:col-span-4">
                  <h1 class="font-manrope pt-6 lg:pt-0 text-2xl text-briix-black font-semibold">Fixed Income Returns</h1>
                  <p class="font-normal text-sm text-briix-body mt-[10px] leading-[22px]">The key benefits of investing in fixed income is <br class="hidden lg:block"> that they have lower associated risks and allows <br class="hidden lg:block"> you to obtain periodic income</p>
                </div>
                <div class="lg:col-span-2 border-t lg:border-t-0 mx-auto pt-10 lg:pt-0 row-start-1 lg:row-start-auto">
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