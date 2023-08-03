<template>
  <section class="py-14 bg-slate-100">
    <div class="max-w-screen-xl mx-auto px-4 md:px-8">
      <div class="max-w-3xl mx-auto text-center">
        <h3 class="text-3xl text-yellow-500 font-semibold pb-6">Opinião de alunos</h3>
        <p>Melhor do que deixar a AUVP falar sobre si, é deixar os nossos alunos falarem sobre o que a AUVP representou na
          vida deles.</p>
        <div class='flex flex-row items-center'>
          <span @click='userTriggeredPrevious()' class='flex-1 cursor-pointer h-12'>
            <BackwardIcon class="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
          </span>
          <ul v-for="(testimonial, idx) in testimonials">
            <li v-if="currentTestimonial === idx" :key="idx">
              <figure class='bg-white m-10 rounded p-10'>
                <blockquote>
                  <p class="text-gray-600 font-small sm:text-small">
                    {{ testimonial.quote }}
                  </p>
                </blockquote>
                <div class="mt-6">
                  <img :src="testimonial.avatar" class="w-16 h-16 mx-auto rounded-full" />
                  <div class="mt-3">
                    <span class="block text-gray-500 font-semibold">{{ testimonial.name }}</span>
                    <span class="block text-gray-500 text-sm mt-0.5">{{ testimonial.title }}</span>
                  </div>
                </div>
              </figure>
            </li>
          </ul>
          <span @click='userTriggeredNext()' class='flex-1 cursor-pointer'>
            <ForwardIcon class="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
          </span>
        </div>
      </div>
      <div class="mt-6">
        <ul class="flex gap-x-3 justify-center">
          <li v-for="(testimonial, idx) in testimonials" :key="idx">
            <button
              :class="`w-2.5 h-2.5 rounded-full duration-150 ring-offset-2 ring-indigo-600 focus:ring ${currentTestimonial === idx ? 'bg-indigo-600' : 'bg-gray-300'}`"
              @click="setCurrentTestimonial(idx)"></button>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>


<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

import { ForwardIcon, BackwardIcon } from '@heroicons/vue/20/solid'

const testimonials = [
  {
    avatar: "https://w5u7i7m8.rocketcdn.me/wp-content/uploads/2021/04/logo.png",
    name: "Flavio Clivati",
    title: "Administrador",
    quote: 'Hoje, fazendo parte da Comunidade UVP, do Cardume de Sardinhas, tenho absoluta certeza que valeu muito. Parabéns pelo trabalho, pela dedicação, pela atenção, pelo conteúdo aberto e fechado, pela maneira de passar "a real", sem frescura, sem meias palavras para agradar.'
  },
  {
    avatar: "https://w5u7i7m8.rocketcdn.me/wp-content/uploads/2021/04/esther.png",
    name: "Esther Prestes",
    title: "Social Media",
    quote: "É incrível como o Raul foi capaz de transformar investimentos em algo realmente interessante e fazer com que a gente tenha vontade (e goste, o que é mais louco!) de estudar isso todos os dias. Se você estiver pensando em fazer a UVP, prepare-se para enxergar a realidade com outros olhos e sair da sua zona de conforto. Recomendo o curso de olhos fechados!"
  },
  {
    avatar: "https://w5u7i7m8.rocketcdn.me/wp-content/uploads/2021/04/1-4.png",
    name: "Roberto Arlindo",
    title: "Aluno da segunda turma da UVP",
    quote: 'Conheci o Investidor Sardinha em 2019, no começo do canal, entrei na UVP algum tempo depois. Fazer parte da segunda turma mudou a minha vida, não só aprendi a investir no Brasil e no mundo, como transformei também a minha forma de ver o mundo'
  },
  {
    avatar: "https://w5u7i7m8.rocketcdn.me/wp-content/uploads/2021/04/1-6.png",
    name: "Evy",
    title: "Servidora Pública",
    quote: 'Com a UVP eu aprendi de forma estrutural não somente sobre investimentos, mas de forma ampla e irrestrita o caminho a ser trilhado para me tornar investidora com conhecimento técnico e escolher uma forma de rentabilizar o patrimônio investido sem riscos desnecessários.'
  },
]

const currentTestimonial = ref(0);

const setCurrentTestimonial = (index) => {
  currentTestimonial.value = index;
};

const next = () => {
  if (currentTestimonial.value === (testimonials.length - 1))
    setCurrentTestimonial(0)
  else
    setCurrentTestimonial(currentTestimonial.value + 1)
};

const previous = () => {
  if (currentTestimonial.value === 0)
    setCurrentTestimonial(testimonials.length - 1)
  else
    setCurrentTestimonial(currentTestimonial.value - 1)
};

let intervalId = null;

const startSlideShow = () => {
  intervalId = setInterval(next, 5000);
};

const stopSlideShow = () => {
  clearInterval(intervalId);
};

const userTriggeredNext = () => {
  stopSlideShow();
  next();
  startSlideShow();
};

const userTriggeredPrevious = () => {
  stopSlideShow();
  previous();
  startSlideShow();
};

onMounted(startSlideShow);

onUnmounted(stopSlideShow);
</script>
