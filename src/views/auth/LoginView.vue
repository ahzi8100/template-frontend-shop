<script setup>
</script>

<template>
  <main>
    <!-- login -->
    <section id="login-login-page" class="bg-white py-16">
      <div class="container mx-auto px-auto">
        <div class="flex flex-col md:flex-row justify-center">
          <div class="md:w-1/2 bg-white rounded-lg shadow-md p-4 md:p-10 md:m-10">
            <h2 class="text-2xl font-semibold mb-4">Login</h2>
            <form>
              <div class="mb-3">
                <label for="login-email" class="block">Email</label>
                <input type="email" id="login-email"
                  class="w-full px-3 py-1 border focus:border-transparent rounded-full focus:outline-none focus:ring-2 focus:ring-primary"
                  required>
                <p class="text-xs text-red-500"></p>
              </div>
              <div class="mb-3">
                <label for="login-password" class="block">Password</label>
                <input type="password" id="login-password"
                  class="w-full px-3 py-1 border focus:border-transparent rounded-full focus:outline-none focus:ring-2 focus:ring-primary"
                  required>
                <p class="text-xs text-red-500"></p>
              </div>
              <button type="submit"
                class="bg-primary text-white border border-primary hover:bg-transparent hover:text-primary py-2 px-3 rounded-full w-full">Login</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
