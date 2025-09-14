<script setup>
</script>

<template>
  <main>
    <!-- Register and login -->
    <section id="register-login-page" class="bg-white py-16">
      <div class="container mx-auto px-auto">
        <div class="flex flex-col md:flex-row justify-center">
          <div class="md:w-1/2 bg-white rounded-lg shadow-md p-4 md:p-10 md:m-10">
            <h2 class="text-2xl font-semibold mb-4">Register</h2>
            <form>
              <div class="mb-3">
                <label for="register-name" class="block">Name</label>
                <input type="name" id="register-name"
                  class="w-full px-3 py-1 border focus:border-transparent rounded-full focus:outline-none focus:ring-2 focus:ring-primary"
                  required>
                <p class="text-xs text-red-500"></p>
              </div>
              <div class="mb-3">
                <label for="register-email" class="block">Email</label>
                <input type="email" id="register-email"
                  class="w-full px-3 py-1 border focus:border-transparent rounded-full focus:outline-none focus:ring-2 focus:ring-primary"
                  required>
                <p class="text-xs text-red-500"></p>

              </div>
              <div class="mb-3">
                <label for="register-password" class="block">Password</label>
                <input type="password" id="register-password"
                  class="w-full px-3 py-1 border focus:border-transparent rounded-full focus:outline-none focus:ring-2 focus:ring-primary"
                  required>
                <p class="text-xs text-red-500"></p>

              </div>
              <div class="mb-3">
                <label for="register-confirm-password" class="block ">Confirm Password</label>
                <input type="password" id="register-confirm-password"
                  class="w-full px-3 py-1 border focus:border-transparent rounded-full focus:outline-none focus:ring-2 focus:ring-primary"
                  required>
                <p class="text-xs text-red-500"></p>

              </div>
              <button type="submit"
                class="bg-primary text-white border border-primary hover:bg-transparent hover:text-primary py-2 px-3 rounded-full w-full">Register</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
