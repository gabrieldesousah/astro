<template>
  <header class='header bg-black flex w-full h-screen'>
    <div class='absolute w-full h-full grid place-content-center opacity-50 animation-zoom-in overflow-hidden	'>
      <div class='circle-600px	relative	bg-slate-600	rounded-full'></div>
    </div>
    <div class='header-group animation-fade-in-up z-10	flex flex-col w-full justify-center'>
      <div class='flex flex-col content-center'>
        <h2 class='text-2xl text-center text-yellow-600 font-medium font-sans'>Aprenda a investir no Brasil e no mundo
        </h2>
        <h2 class='text-7xl text-center text-white font-sans'>
          Do zero a <br>
          <b>investidor</b> em 8 semanas
        </h2>
      </div>
      <div class='animation-fade-in-left flex justify-center'>
        <button class='mt-10 px-12 py-4 uppercase bg-green-600 font-semibold text-white rounded-full focus:outline-none'>
          Faça a sua análise de perfil
        </button>
      </div>
    </div>
  </header>
</template>

<style lang='postcss' scoped>
.circle-600px {
  width: 600px;
  height: 600px;
}

.animation-zoom-in {
  animation: zoomIn 0.5s;
}

.animation-fade-in-up {
  animation: fadeInUp 1.5s;
}

.animation-fade-in-left {
  animation: fadeInLeft 1.5s;
}

@keyframes zoomIn {
  from {
    opacity: 0;
    transform: scale3d(.3, .3, .3)
  }

  50% {
    opacity: 1;
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0)
  }

  to {
    opacity: 1;
    transform: none
  }
}

@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0)
  }

  to {
    opacity: 1;
    transform: none
  }
}

.header {
  background-image: url('/assets/images/bg-header.jpg');
  background-size: cover;
  background-position: 50% 100%;
  background-repeat: no-repeat;
  filter: grayscale(0);
}

.header::after {
  position: absolute;
  content: "";
  width: 100%;
  height: 100%;
  background-image: -webkit-linear-gradient(-120deg, #000000 0%, #000000A6 100%);
  opacity: .2;
}
</style>
