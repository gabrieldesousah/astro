<template>
  <header class="bg-black z-10">
    <nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
      <div class="flex lg:flex-1">
        <a href="#" class="-m-1.5 p-1.5">
          <span class="sr-only">{{ page.name }}</span>
          <img class="h-16 w-auto" src="/assets/images/logo.png" alt="Logo - AUVP" />
        </a>
      </div>
      <div class="flex lg:hidden">
        <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
          @click="mobileMenuOpen = true">
          <span class="sr-only">Open main menu</span>
          <Bars3Icon class="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
      <div class="hidden lg:flex lg:gap-x-12">
        <a href="#"
          class="text-sm font-semibold leading-6 text-white hover:text-yellow-500 hover:underline focus:outline-none focus:underline">Principal</a>
        <a href="#"
          class="text-sm font-semibold leading-6 text-white hover:text-yellow-500 hover:underline focus:outline-none focus:underline">Nosso
          Processo</a>
        <a href="#"
          class="text-sm font-semibold leading-6 text-white hover:text-yellow-500 hover:underline focus:outline-none focus:underline">Dúvidas
          Frequentes</a>
        <a href="#"
          class="text-sm font-semibold leading-6 text-white hover:text-yellow-500 hover:underline focus:outline-none focus:underline">Consultoria
          Individual</a>
      </div>
      <div class="hidden lg:flex lg:flex-1 lg:justify-end">
        <a href='#'
          class='px-5 py-2  bg-yellow-500 font-medium text-white rounded-full focus:outline-none hover:bg-red-700'>
          Área do aluno
        </a>
      </div>
    </nav>
    <Dialog as="div" class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
      <div class="fixed inset-0 z-10" />
      <DialogPanel class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-black text-white px-6 py-6 sm:max-w-sm">
        <div class="flex items-center justify-between sm:hidden md:hidden">
          <a href="#" class="-m-1.5 p-1.5">
            <span class="sr-only">{{ page.name }}</span>
            <img class="h-8 w-auto" src="/assets/images/logo.png" alt="Logo - AUVP" />
          </a>
          <button type="button" class="-m-2.5 rounded-md p-2.5 text-white" @click="mobileMenuOpen = false">
            <span class="sr-only">Close menu</span>
            <XMarkIcon class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/10">
            <div class="space-y-2 py-6">
              <a href="#"
                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:text-yellow-500 hover:underline focus:outline-none focus:underline hover:bg-gray-600">Principal</a>
              <a href="#"
                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:text-yellow-500 hover:underline focus:outline-none focus:underline hover:bg-gray-600">Nosso
                Processo</a>
              <a href="#"
                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:text-yellow-500 hover:underline focus:outline-none focus:underline hover:bg-gray-600">Dúvidas
                Frequentes</a>
              <a href="#"
                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:text-yellow-500 hover:underline focus:outline-none focus:underline hover:bg-gray-600">Consultoria
                Individual</a>
            </div>
            <div>
              <a href='#'
                class='px-5 py-2  bg-yellow-500 font-medium text-white rounded-full focus:outline-none hover:bg-red-700'>
                Área do aluno
              </a>
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const page = {
  name: "AUVP - A maior escola de investimentos do Brasil - Curso Investidor Sardinha - Raul Sena"
}

import {
  Dialog,
  DialogPanel,

} from '@headlessui/vue'
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/vue/24/outline'


const mobileMenuOpen = ref(false)
</script>