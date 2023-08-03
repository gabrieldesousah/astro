<template>
  <div class='w-full bg-white text-black p-10'>
    <h1 class='flex justify-center text-5xl font-bold mb-10'>
      O que você vai aprender na AUVP?
    </h1>
    <p class='flex justify-center text-center'>
      O nosso treinamento de zero a investidor internacional dura 8 semanas e a cada semana um novo módulo é liberado.
      Esse é o nosso conteúdo programático:
    </p>

    <div class='grid grid-cols-3 gap-4'>
      <div v-for="(module) in modules" class='p-5'>
        <img :src='module.image' :alt=module.name>
        <h3 class='font-bold text-2xl mt-5 mb-5'>{{ module.name }} - {{ module.lenght }}</h3>
        <p>{{ module.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
const modules = [
  {
    name: "Começando do Zero",
    lenght: "9 aulas",
    image: "https://auvp.com.br/wp-content/uploads/2021/04/1-10.jpg",
    description: "Não importa se você não sabe nada sobre investimentos, nesse módulo nós vamos te ensinar o básico sobre o mundo dos investimentos."
  },
  {
    name: "Organize seus Gastos",
    lenght: "7 aulas",
    image: "https://auvp.com.br/wp-content/uploads/2021/04/1-11.jpg",
    description: "Aprenda a “fechar a torneira” e organizar a sua vida financeira, gastando menos de 10 minutos por semana. Controlar seus gastos precisa ser fácil."
  },
  {
    name: "Renda Fixa",
    lenght: "16 aulas",
    image: "https://auvp.com.br/wp-content/uploads/2021/04/1-12.jpg",
    description: "Faça o seu dinheiro trabalhar por você: CDB, LCIs e LCAs, CRIs e CRAs, Tesouro Direto, Marcação a Mercado, Debêntures e outras aplicações inteligentes de baixo risco."
  },
  {
    name: "Renda Variável",
    lenght: "21 aulas",
    image: "https://auvp.com.br/wp-content/uploads/2021/04/1-14.jpg",
    description: "Não importa se você não sabe nada sobre investimentos, nesse módulo nós vamos te ensinar o básico sobre o mundo dos investimentos."
  }
]
</script>