<template>
    <section class="briix-container lg:h-[898px] bg-briix-white">
        <div class="grid grid-cols-2">
            <div class="flex flex-col items-center justify-center">
                <div class="max-w-[604px]">
                    <h1 class="text-[40px] font-manrope text-briix-black font-semibold leading-[60px]">Scroll through our list of <br> properties and start building <br> your portfolio.</h1>
                    <p class="mt-4 mb-6 text-briix-body font-inter font-normal leading-[30px]"> Brilx makes investing in real estate easy for you! We manage all legal requirements, notify you of outstanding payments, provide financing options & market your properties for rental </p>
                    <router-link to="#" class="rounded-[10px] group hover:bg-briix-primary hover:text-briix-white hover:border-transparent transition inline-flex items-center text-briix-primary tracking-[0.08em] text-base font-medium py-3 px-4 border-2 border-briix-primary">
                        <span class="mr-4">Go to Briix Properties</span>
                        <svg width="14" height="14" class="group-hover:text-briix-white transition-colors" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 1H13V11M13 1L1 13L13 1Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </router-link>
                </div>
            </div>
            <div class="relative">
                <img class="absolute left-24 top-10" src="https://briix.com/images/section-properties/Frame_1614.png" alt="property-img">
                <img class="mt-[128px]" src="https://briix.com/images/section-properties/Group_427320939.svg" alt="property-decoration">
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">

</script>