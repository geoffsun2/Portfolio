<script>
  import Step from "./Step.svelte";

  let steps =[
    {name: 'LogYard', icon: '/images/Icon.png', href:'https://www.logyard.io'},
    {name: 'PassPro', icon: '/images/Pass.png', href:'https://www.passpro.io'},
    {name: 'JobJuggler', icon: '/images/NavLogo.png', href: 'https://github.com/JobJuggler/JobJuggler'},
  ]

  let benefits = [
    {name: 'a problem solver', description: 'As a software engineer, my problem-solving skills shine in developing elegant and efficient solutions. I love to dissect complex technical issues, devising creative and robust solutions that not only meet the immediate needs but also stand the test of time. '},
    {name: 'a tech fanatic', description: 'I\'m on a perpetual journey of discovery in the ever-evolving world of coding and technology. I\'m fueled by an insatiable curiosity and a genuine passion for innovation. I love exploring the latest technologies and coding trends, and seeing how they can be used to increase my efficiency as an engineer. I embrace the thrill of diving into the unknown, eagerly absorbing new knowledge, and translating it into creative solutions. '},
    {name: 'a Collaborative Communicator', description: 'I believe that effective communication is the cornerstone of successful teamwork. I\'m adept at articulating ideas, actively listening to my team members, and fostering open and constructive dialogue. Whether it\'s conveying complex technical concepts in a clear and relatable manner or contributing to group discussions with enthusiasm, I\'m committed to ensuring that the team operates cohesively and efficiently.'},
  ]
</script>

<main class='flex flex-col flex-1 p-4'>
  <section id='introPage' class='grid grid-cols-1 lg:grid-cols-2 gap-10 py-8 sm:py-14'>
    <div class='flex flex-col lg:justify-center text-center lg:text-left gap-6 md:gap-8 lg:gap-10 lg:pl-20'>
      <h2 class='font-semibold text-4xl sm:text-5xl md:text-6xl'>Hi! I'm <span class='poppins text-violet-400'>Geoff</span> Sun <br/> Full Stack <span class='poppins text-violet-400'>Developer</span> </h2>
      <p class='text-base sm:text-lg md:text-xl opacity-50'>
       (Prounounced Jeff)
      </p>
      <p class='text-base sm:text-lg md:text-xl'>
        My <span class='text-violet-400'>favorite tech</span> includes JavaScript, React, Node.js + Express.js, Svelte, PostgreSQL & MongoDB!
      </p>
      <a href='https://www.linkedin.com/in/geoffrey-sun' target='_blank' class='blueShadow mx-auto lg:mr-auto lg:ml-0 text-base sm:text-lg md:text-xl poppins relative overflow-hidden px-6 py-3 group rounded-full bg-white text-slate-950 cursor-pointer'>
        <div class='absolute top-0 right-full w-full h-full bg-violet-400 opacity-20 group-hover:translate-x-full z-0 duration-200' />
        <h4 class='relative z-9'>Get in touch &rarr;</h4>
      </a>
    </div>
    <div class='relative shadow-2xl grid place-items-center'>
      <img src={'images/geoffnoBG.png'} alt='profile' class='object-cover z-[2] max-h-[70vh]' />
    </div>

  </section>
  <section id='projects' class='py-20 lg:py-32 flex flex-col gap-24'>
    
    <div class='flex flex-col gap-2 text-center'>
      <h3 class='text-2xl sm:text-3xl md:text-4xl mb-4'>Check out my recent talk about <span class='poppins text-pink-400'>Bun</span>!</h3>
      <iframe class='mx-auto' width="560" height="315" src="https://www.youtube.com/embed/sc08rOVBF6Y?si=FChaysc6-yI1NYfe" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    <!-- <a href='https://www.youtube.com/watch?v=sc08rOVBF6Y' target='_blank' class='mx-auto px-4 py-2 rounded-md border border-solid border-white flex items-center gap-2 -mb-4 sm:-mb-0 -mt-10 hover:border-violet-700 duration-200'>
      <i class='fa-regular fa-circle-play'></i>
      <p>Watch the video</p>
    </a> -->
    <h3 class='mx-auto text-2xl sm:text-3xl md:text-4xl'>
      Here's some of my <span class='poppins text-violet-400'>Featured</span> work
    </h3>
    <div class='grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-10'>
      <Step step={steps[0]}>
        <p>LogYard is an <strong class='text-violet-400'> open-source</strong> logging solution. It offers custom logging packages alongside a dynamic <strong class='text-violet-400'>GUI</strong> to hlep users manage, analyze, and visualize logs. LogYard's intracate filtering system for logs alongside its <strong class='text-violet-400'>customizable graphs</strong> make log management a breeze. Check out this <a class='text-blue-500 hover:underline' href='https://medium.com/@andrewclarkwagner/logyard-a-new-log-management-and-visualization-platform-for-developers-3df574575586' target='_blank'>Article</a> to read more!  </p>
      </Step>
      <Step step={steps[1]}>
        <p>PassPro is a  password and account manager, designed to <strong class='text-violet-400'>simplify</strong> and <strong class='text-violet-400'>secure</strong> your digital life. PassPro's robust <strong class='text-violet-400'>encryption</strong> ensures your sensitive information is <strong class='text-violet-400'>shielded</strong> from unauthorized eyes.</p>

      </Step>
      <Step step={steps[2]}>
        <p>JobJuggler is your new <strong class='text-violet-400'>companion</strong> in the world of job applications. Seemlessly <strong class='text-violet-400'>manage</strong> your job search status, applications, and interviews all in one place. An <strong class='text-violet-400'>organized</strong> job hunt is a <strong class='text-violet-400'>successful</strong> job hunt. Use JobJuggler to help <strong class='text-violet-400'>advance</strong> your career.</p>

      </Step>
    </div>
  </section>
  <!-- <section id='articles' class='py-20 lg:py-32 flex flex-col gap-24'>
  </section> -->
  <section id='about' class='py-20 pt-10 lg:pt-16 lg:py-32 flex flex-col gap-16 sm:gap-20 md:gap-24 relative'>
    <div class='flex flex-col gap-2 text-center relative before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-violet-700 after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-violet-700 py-4'>
      <h3 class='font-semibold text-3xl sm:text-4xl md:text-5xl'>A bit <span class='poppins text-violet-400'>about</span> me</h3>
    </div>
    <p class='mx-auto poppins font-semibold text-2xl sm:text-2xl md:text-4xl'>I am . . .</p>
    <div class='flex flex-col gap-20 w-full mx-auto max-w-[800px]'>
      {#each benefits as benefit, index}
      <div class='flex gap-6 sm:gap-8'>
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
    <!-- <h5 class='text-2xl sm:text-3xl font-semibold text-center poppins'>The <span class='text-violet-400 poppins'>Complete</span> Package</h5> -->
    <!-- <div class='flex flex-col overflow-x-scroll gap-10 max-w-[800px] mx-auto w-full'>
      <table class='bg-white text-slate-700 rounded text-center'>
        <thead class='border-b border-solid border-slate-200'>
          <tr class=''>
            <th/>
            <th class='whitespace-nowrap p-2 px-4'>Candidate #1</th>
            <th class='whitespace-nowrap p-2 px-4'>Candidate #1</th>
            <th class='whitespace-nowrap p-2 px-4'>Candidate #1</th>
            <th class='whitespace-nowrap p-4 px-8 bg-violet-700 text-white'>Me</th>
          </tr>
        </thead>
        <tbody >
          <tr class='border-b border-solid bordewr-slate-200'>
            <td class='border-r border-solid border-white pl-4 pr-8 py-4 font-semibold text-sm whitespace-nowrap'>Dedication</td>
            <td><i class='fa-solid fa-xmark text-slate-500'></i></td>
            <td><i class='fa-solid fa-xmark text-slate-500'></i></td>
            <td><i class='fa-solid fa-xmark text-slate-500'></i></td>
            <td><i class='fa-solid fa-check text-green-500'></i></td>
          </tr>
          <tr class='border-b border-solid bordewr-slate-200'>
            <td class='border-r border-solid border-white pl-4 pr-8 py-4 font-semibold text-sm whitespace-nowrap'>Critical Thinking</td>
            <td><i class='fa-solid fa-xmark text-slate-500'></i></td>
            <td><i class='fa-solid fa-xmark text-slate-500'></i></td>
            <td><i class='fa-solid fa-xmark text-slate-500'></i></td>
            <td><i class='fa-solid fa-check text-green-500'></i></td>
          </tr>
          <tr class='border-b border-solid bordewr-slate-200'>
            <td class='border-r border-solid border-white pl-4 pr-8 py-4 font-semibold text-sm whitespace-nowrap'>Interpersonal Skills</td>
            <td><i class='fa-solid fa-xmark text-slate-500'></i></td>
            <td><i class='fa-solid fa-xmark text-slate-500'></i></td>
            <td><i class='fa-solid fa-xmark text-slate-500'></i></td>
            <td><i class='fa-solid fa-check text-green-500'></i></td>
          </tr>
          <tr class='border-b border-solid bordewr-slate-200'>
            <td class='border-r border-solid border-white pl-4 pr-8 py-4 font-semibold text-sm whitespace-nowrap'>Programming ability</td>
            <td><i class='fa-solid fa-xmark text-slate-500'></i></td>
            <td><i class='fa-solid fa-xmark text-slate-500'></i></td>
            <td><i class='fa-solid fa-xmark text-slate-500'></i></td>
            <td><i class='fa-solid fa-check text-green-500'></i></td>
          </tr>
        </tbody>
      </table>
    </div> -->
    <!-- <div class='mx-auto -mt-12 italic sm:hidden opacity-50'>
      <p>Scroll to see more &rarr;</p>
    </div> -->
    <p class='mx-auto poppins text-violet-400'>Thank you for reading</p>
  </section>
</main>