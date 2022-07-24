<template>
  <section id="me" class="flex flex-row portrait:flex-wrap overflow-hidden" data-heading="About Me" data-in_viewport="">
    <article
      class="portrait:order-1 mt-20 pl-10 landscape:w-1/3 landscape:h-full portrait:h-1/3 text-white duration-1000"
      data-in_viewport="fade-left">
      <p class="text-2xl opacity-60">this is some sample text</p>
    </article>
    <figure
      class="portrait:order-3 flex justify-center items-center flex-col overflow-hidden portrait:h-2/3 landscape:h-full duration-700 w-full xl:w-1/3">
      <div class="part">
        <div
          class="head bg-amber-100 rounded-t-[40%] rounded-b-[10%] flex flex-col relative justify-center items-center">
          <img class="absolute top-0 w-[20rem]" id="hair" src="">
          <div class="eyes w-full flex justify-around mt-4">
            <div class="eye circle bg-green-800 w-5 h-5 flex border-white border-2">
              <div class="bg-black w-1.5 aspect-square m-auto circle" />
            </div>
            <div class="eye circle bg-green-800 w-5 h-5 flex border-white border-2">
              <div class="bg-black w-1.5 aspect-square m-auto circle" />
            </div>
          </div>
          <div class="w-full pt-4 flex justify-center">
            <div class="mouth w-[50%]  bg-red-400 h-5 rounded-b-[50%] rounded-t"></div>
          </div>
        </div>
      </div>
      <div class="part">
        <div class="arm rotate-[50deg] bg-amber-100 rounded-2xl h-32 relative z-0" />
        <div class="body z-[1] h-40 zinde bg-green-600 rounded-3xl" />
        <div class="arm rotate-[-45deg] bg-amber-100 rounded-2xl h-32 relative z-0 right" />
      </div>
    </figure>
    <article
      class="portrait:order-2 mt-20 pr-10 landscape:w-1/3 landscape:h-full portrait:h-1/3 text-white duration-1000 text-right"
      data-in_viewport="fade-right">
      <p class="text-2xl opacity-60">this is some sample text</p>
    </article>
  </section>
</template>

<script lang="ts" setup>
import {inject, onMounted} from "vue";
import ContentSection from "../interfaces/ContentSection";
import hair from "../assets/hair.png";

onMounted(() => {
  const el = document.getElementById("me");
  if (el) {
    (inject("sections") as Array<ContentSection>).push({ el: el, active: false });
    (el.querySelector("#hair") as HTMLImageElement).src = hair;
  }

})
</script>

<style scoped>
.circle {
  border-radius: 100%;
}

.part {
  @apply w-full flex justify-center
}

.head {
  width: min(6rem, 22.5%);
  height: max(6rem, 10vh);
}

.head #hair {
  transform: scale(1.3, 1.3);
}
.mouth {
  border: 3px inset #3a0000;
}

.arm {
  aspect-ratio: 1/4;
}

.arm::after {
  content: "";
  @apply h-32 w-full absolute z-10 bottom-[-45%] left-[150%] rotate-90 bg-amber-100 rounded-2xl
}

.right::after {
  animation: shake 1s ease-in-out infinite;
}

.body {
  width: min(8rem, 30%);
}
@media (orientation: portrait) {
  article {
    flex: 0 0 50%;
  }

  figure {
    flex: 0 0 100%;
  }
}
</style>