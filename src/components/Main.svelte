<script>
  import Step from "./Step.svelte";

  let steps =[
    {name: 'LogYard', icon: '/images/Icon.png', href:'https://www.logyard.io'},
    {name: 'PassPro', icon: '/images/Pass.png', href:'https://www.passpro.io'},
    {name: 'DevOverflow', icon: '/images/NavLogo.png'},
  ]

  let benefits = [
    {name: 'a problem solver', description: 'As a software engineer, my problem-solving skills shine in developing elegant and efficient solutions. I love to dissect complex technical issues, devising creative and robust solutions that not only meet the immediate needs but also stand the test of time. '},
    {name: 'a tech fanatic', description: 'I\'m on a perpetual journey of discovery in the ever-evolving world of coding and technology. I\'m fueled by an insatiable curiosity and a genuine passion for innovation. I love exploring the latest technologies and coding trends, and seeing how they can be used to increase my efficiency as an engineer. I am currently exploring Bun v1.0, a new competitor to Node.js. Watch my talk below for some in-depth comparisons between them!'},
    {name: 'a collaborative engineer', description: 'I believe that effective communication is the cornerstone of successful teamwork. I\'m adept at articulating ideas, actively listening to my team members, and fostering open and constructive dialogue. Whether it\'s conveying complex technical concepts in a clear and relatable manner or contributing to group discussions with enthusiasm, I\'m committed to ensuring that the team operates cohesively and efficiently.'},
  ]
</script>

<main class='flex flex-col flex-1 p-4'>
  <section id='introPage' class='grid grid-cols-1 gap-10 pt-8 sm:pt-14 relative'>
    <div class='flex flex-col lg:justify-center text-center gap-6 md:gap-8 z-2'>
      <h2 class='font-semibold text-4xl sm:text-5xl md:text-6xl'>Hi! I'm <span class='poppins text-violet-400'>Geoff</span> Sun <br/></h2><h2 class='font-semibold text-2xl sm:text-3xl md:text-4xl'>Full Stack <span class='poppins text-violet-400'>Developer</span> </h2>
      <!-- <p class='text-base sm:text-lg md:text-xl opacity-50'>
       (Pronounced Jeff)
      </p> -->
      <p class='text-base sm:text-lg md:text-xl lg:text-2xl my-20'>
        My <span class='text-violet-400'>favorite tech</span> includes TypeScript, React, Node.js + Express.js, Python, PostgreSQL & MongoDB!
      </p>
      <p class='text-center text-base sm:text-lg md:text-xl opacity-50'>
        Scroll to learn more <i class="fa-solid fa-arrow-down fa-beat ml-1" style="color: #a78bfa;"></i>
      </p>
      
      <!-- <a href='https://www.linkedin.com/in/geoffrey-sun' target='_blank' class='blueShadow mx-auto lg:mr-auto lg:ml-0 text-base sm:text-lg md:text-xl poppins relative overflow-hidden px-6 py-3 group rounded-full bg-white text-slate-950 cursor-pointer'>
        <div class='absolute top-0 right-full w-full h-full bg-violet-400 opacity-20 group-hover:translate-x-full z-0 duration-200' />
        <h4 class='relative z-9'>Connect &rarr;</h4>
      </a> -->
    </div>

  </section>
  <section id='about' class='py-20 pt-10 lg:pt-16 lg:py-20 flex flex-col gap-16 sm:gap-20 md:gap-24 relative'>
    <div>

    </div>
    <div class='flex flex-col gap-2 text-center relative before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-violet-700 sm:before:delay-[300ms] sm:before:duration-[600ms] sm:before:taos:translate-x-[-100%] sm:before:taos:invisible after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-violet-700 py-4 sm:after:delay-[300ms] sm:after:duration-[600ms] sm:after:taos:translate-x-[100%] sm:after:taos:invisible [animation-iteration-count:infinite]' data-taos-offset="200">
      <h3 class='font-semibold text-3xl sm:text-4xl md:text-5xl delay-[100ms] duration-[600ms] taos:scale-[0.6] taos:opacity-0 [animation-iteration-count:infinite]' data-taos-offset="200">A bit <span class='poppins text-violet-400'>about</span> me</h3>
    </div>
    <p class='mx-auto poppins font-semibold text-2xl sm:text-2xl md:text-4xl delay-[200ms] duration-[600ms] taos:scale-[0.6] taos:opacity-0 [animation-iteration-count:infinite]' data-taos-offset="300">I am . . .</p>
    <div class='flex flex-col gap-20 w-full mx-auto max-w-[800px]'>
      {#each benefits as benefit, index}
      <div class='flex gap-6 sm:gap-8 delay-[100ms] duration-[600ms] taos:translate-y-[100%] taos:invisible [animation-iteration-count:infinite]' data-taos-offset="100">
        <p class='poppins text-4xl sm:text-5xl md:text-6xl text-slate-500 font-semibold'>
          0{index+1}
        </p>
        <div class='flex flex-col gap-6 sm:gap-8'>
          <h3 class='text-2xl sm:text-3xl md:text-4xl'>
            {benefit.name}
          </h3>
          <p>{benefit.description}</p>
        </div>
      </div>
      {/each}
    </div>
  </section>
  <section id='projects' class='py-20 lg:py-32 flex flex-col gap-24 relative'>
    
    <h3 class='mx-auto text-2xl sm:text-3xl md:text-4xl sm:delay-[100ms] sm:duration-[400ms] sm:taos:scale-[0.6] sm:taos:opacity-0 sm:[animation-iteration-count:infinite]' data-taos-offset="200">
      Here's some of my <span class='poppins text-violet-400' >Featured</span> work
    </h3>
    <div class='grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-10 ' >
      <Step step={steps[0]}>
        <p>LogYard is an <strong class='text-violet-400'> open-source</strong> logging solution built with Node.js and React/Redux. It offers custom logging packages alongside a dynamic <strong class='text-violet-400'>GUI</strong> to help users manage, analyze, and visualize logs. LogYard's Docker image comes with a fresh <strong class='text-violet-400'>MongoDB</strong> to quickly get users started with either our demo app, or their own!  Check out this <a class='text-blue-500 hover:underline' href='https://medium.com/@andrewclarkwagner/logyard-a-new-log-management-and-visualization-platform-for-developers-3df574575586' target='_blank'>Article</a> to read more!  </p>
      </Step>
      <Step step={steps[1]}>
        <p>PassPro is a  password and account manager, designed to <strong class='text-violet-400'>simplify</strong> and <strong class='text-violet-400'>secure</strong> your digital life. It is built with <strong class='text-violet-400'>Bun</strong>, a new JavaScript runtime environment, and <strong class='text-violet-400'>SvelteKit</strong>, resulting in a highly responsive UX/UI. PassPro's robust <strong class='text-violet-400'>encryption</strong> ensures your sensitive information is <strong class='text-violet-400'>shielded</strong> from unauthorized eyes.</p>

      </Step>
      <Step step={steps[2]}>
        <p> DevOverflow matches <strong class='text-violet-400'>developers</strong> with non-technical <strong class='text-violet-400'>startups</strong> to build awesome products. I am currently working on a stealth startup in the <strong class='text-violet-400'>FinTech industry</strong> that automates web scraping tools for their clients. It is built with <strong class='text-violet-400'>React</strong> on the frontend and <strong class='text-violet-400'>Python</strong> to perform the automated web scraping in combination with our <strong class='text-violet-400'>AWS infrastructure</strong> . Stay tuned for more details in the future!
        </p>

      </Step>
    </div>
    <div class='flex flex-col gap-2 text-center delay-[300ms]'>
      <h3 class='text-2xl sm:text-3xl md:text-4xl mb-4 sm:delay-[100ms] sm:duration-[400ms] sm:taos:scale-[0.6] sm:taos:opacity-0 sm:[animation-iteration-count:infinite]' data-taos-offset="100">Check out my recent talk about <span class='poppins text-pink-400'>Bun</span>!</h3>
      <div class='w-full relative'>
        <iframe class='mx-auto sm:w-[560px] h-[315px] sm:delay-[300ms] sm:duration-[600ms] sm:taos:translate-y-[200px] sm:taos:opacity-0' data-taos-offset="300" src="https://www.youtube.com/embed/sc08rOVBF6Y?si=FChaysc6-yI1NYfe" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>

      </div>
  </section>
  <!-- <section id='articles' class='py-20 lg:py-32 flex flex-col gap-24'>
  </section> -->
  
</main>