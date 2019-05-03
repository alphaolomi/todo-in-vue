<template>
  <div class="mx-auto container mt-6 self-center">
    <div class="bg-blue w-full px-2 ">
      <div class="container mx-auto rounded-t shadow bg-cover bg-bottom m-4">
    
        <nav class="flex justify-between p-8 items-center mb-16">
          <a
            href="/"
            class="font-sans text-black md:text-white text-sm md:text-4xl font-thin"
          >Health Institute</a>
          <ul class="list-reset flex">
            <li>
              <a href="/home" class="text-black md:text-white p-2 md:p-4">Home</a>
            </li>
            <li>
              <a href="/about" class="text-black md:text-white p-2 md:p-4 whitespace-no-wrap">About Us</a>
            </li>
            <li>
              <a href="/about" class="text-black md:text-white p-2 md:p-4">Contact</a>
            </li>
          </ul>
        </nav>

        <div class="text-center text-white pb-16">
          <h1 class="font-sans font-thin">Reality is just a matter of perception.</h1>
          <h2
            class="font-thin text-sm tracking-wide mt-2 mb-4"
          >There are no limits, except for those that we impose on ourselves. Join the future</h2>

          <a href="/projects" class="rounded bg-green text-white p-4 font-bold inline-block mb-16">Apply Now</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Welcome"
};
</script>
