<script>
  export let step;
</script>

<a href={step.href} target='_blank' class='p-4 sm:p-6 md:p-8 flex flex-col gap-4 rounded-lg border border-solid border-violet-700 text-center group cursor-pointer hover:border-violet-400 sm:duration-[400ms] sm:taos:[transform:perspective(2500px)_rotateX(-100deg)] sm:taos:invisible sm:taos:[backface-visibility:hidden] sm:[animation-iteration-count:infinite]' data-taos-offset="200">
  <div class="bg-slate-950 grid place-items-center px-4 text-5xl md:text-6xl -mt-14 sm:-mt-14 md:-mt-16 lg:-mt-16 mx-auto duration-200">
    <img src={step.icon} alt='icon' class='h-20'/>
  </div>
  <h3 class='font-medium text-xl sm:text-2x md:text-3xl'>{step.name}</h3>
  <slot />
  <div class='flex-1 flex justify-between gap-4 items-center'>
    <div class='ml-auto cursor-pointer hover:text-slate-950 duration-200 relative after:absolute after:top-0 after:right-full after:w-full after:h-full after:duration-200 hover:after:translate-x-full after:bg-white after:z-[-1] overflow-hidden'>
      <p class='relative z-4'>Learn More &rarr;</p>
    </div>
  </div>
</a>