<template>
  <div id="app" class="mx-auto container mt-6 self-center ">
    <nav
      class="font-sans flex flex-col text-center content-center sm:flex-row sm:text-left sm:justify-between py-2 px-6 bg-white shadow sm:items-baseline w-full"
    >
      <div class="mb-2 sm:mb-0 flex flex-row">
        <div class="h-10 w-10 self-center mr-2">
          <img class="h-10 w-10 self-center" src="https://csscomps.com/images/csscomps.png">
        </div>
        <div>
          <a
            href="/home"
            class="text-2xl no-underline text-grey-darkest hover:text-blue-dark font-sans font-bold"
          >Health Institute Projects</a>
          <br>
          <span class="text-xs text-grey-dark">We heal you family</span>
        </div>
      </div>

      <div class="sm:mb-0 self-center">
        
        <a href="#" class="text-md no-underline text-black hover:text-blue-dark ml-2 px-1">Link1</a>
        <a
          href="#"
          class="text-md no-underline text-grey-darker hover:text-blue-dark ml-2 px-1"
        >Link2</a>
        <!-- <a href="/two" class="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2">About Us</a> -->
        <a
          href="#"
          class="text-md no-underline text-grey-darker hover:text-blue-dark ml-2 px-1"
        >Link3</a>
        
      </div>
    </nav>

    <router-view/>
  </div>
</template>

<script>
import "../node_modules/tailwindcss/dist/tailwind.css";

export default {
  name: "app"
};
</script>
