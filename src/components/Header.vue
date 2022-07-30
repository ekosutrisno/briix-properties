<template>
  <header class="bg-briix-blue-1 h-16 py-4 px-5 lg:px-[100px]">
    <div class="flex items-center justify-between">
        <div class="flex items-center">
          <Vue3Lottie :animation-data="BriixLogo" background="transparent" :speed="1" :auto-play="true" :loop="false" style="width: 80px; height: auto;"/>
          
          <div class="hidden lg:flex ml-12 items-center space-x-[2.125rem]">
            <router-link
              class="font-inter hover:text-briix-primary transition-colors text-base font-medium text-briix-grey-7"
              v-for="menu in menus"
              :key="menu.id"
              :to="menu.to"
            >
              {{ menu.text }}
            </router-link>
          </div>
        </div>
        
        <div class="lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clip-rule="evenodd" />
          </svg>
        </div>
    </div>
  </header>
</template>


<script setup lang="ts">
 import { Vue3Lottie } from 'vue3-lottie'
 import 'vue3-lottie/dist/style.css'

 import BriixLogo from '@/assets/BriixLogo.json';

  interface Menu {
    id: number
    text: string
    to: string
  }
  const menus:Menu[] = [
    {
      id: 1,
      text: 'Home',
      to: '#hero-section'
    },
    {
      id: 2,
      text: 'Features',
      to: '#feature-section'
    },
    {
      id: 3,
      text: 'Benefits',
      to: '/'
    },
    {
      id: 4,
      text: 'Products',
      to: '/'
    },
    {
      id: 5,
      text: 'Careers',
      to: '/'
    }
  ]

</script>