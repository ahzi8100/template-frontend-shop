<script setup>
</script>

<template>
  <div class="container mx-auto p-4 md:p-8">
    <div class="flex flex-col md:flex-row gap-8">

      <div class="md:w-1/2 bg-white rounded-lg shadow-lg p-6 h-fit">
        <h2 class="text-xl font-bold flex items-center text-gray-800 pb-3 border-b mb-4">
          <svg class="w-6 h-6 mr-3 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
            width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312" />
          </svg>
          DETAIL PESANAN
        </h2>

        <div>
          <div class="flex items-center justify-between p-2 border-1 bg-blue-50 border-gray-50 mb-4">
            <div class="flex items-start">
              <img src="" alt="Product" class="h-20 w-20 object-cover rounded mr-4">
              <div>
                <p class="font-semibold text-gray-800"></p>
                <p class="text-xs text-gray-500 my-1">QTY : </p>
                <span class="text-sm line-through text-red-500"></span>
              </div>
            </div>
            <div class="flex flex-col items-end">
              <p class="font-semibold text-primary"></p>
              <button class="text-red-500 hover:text-red-700 mt-2">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16">
                  </path>
                </svg>
              </button>
            </div>
          </div>

          <div class="text-gray-600 space-y-2 border-t">
            <div class="flex justify-between font-semibold">
              <span>JUMLAH</span>
              <span>: 00,0</span>
            </div>
            <div class="flex justify-between">
              <span>ONGKOS KIRIM <span class="text-sm">(0 gram)</span></span>
              <span>: 00,0</span>
            </div>
            <div class="flex justify-between font-bold text-lg border-t pt-4">
              <span>GRAND TOTAL</span>
              <span class="text-primary">00,0</span>
            </div>
          </div>
        </div>
        <div>
          <p class="text-lg text-gray-500">Belum ada produk yang dimasukan ke keranjang</p>
        </div>

      </div>

      <div class="md:w-1/2 bg-white rounded-lg shadow-lg p-6 h-fit">
        <h2 class="text-xl font-bold flex items-center text-gray-800 pb-3 border-b mb-4">
          <svg class="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2m-9 0V3a1 1 0 011-1h6a1 1 0 011 1v2m-6 0h6">
            </path>
          </svg>
          RINCIAN PENGIRIMAN
        </h2>

        <div class="space-y-4">
          <div class="flex flex-col md:flex-row gap-4">
            <div class="w-full">
              <label for="nama_lengkap" class="block text-sm font-semibold text-gray-700">NAMA LENGKAP</label>
              <input type="text" id="nama_lengkap" placeholder="Nama Lengkap"
                class="w-full mt-1 p-2 border rounded-md focus:ring-primary focus:border-primary">
            </div>
            <div class="w-full">
              <label for="no_hp" class="block text-sm font-semibold text-gray-700">NO. HP / WHATSAPP</label>
              <input type="text" id="no_hp" placeholder="No. HP / WhatsApp"
                class="w-full mt-1 p-2 border rounded-md focus:ring-primary focus:border-primary">
            </div>
          </div>

          <div>
            <label for="provinsi" class="block text-sm font-semibold text-gray-700">PROVINSI</label>
            <select id="provinsi"
              class="w-full mt-1 p-2 border rounded-md focus:ring-primary focus:border-primary">
              <option value="">-- Pilih Provinsi --</option>
            </select>
          </div>

          <div>
            <label for="kota" class="block text-sm font-semibold text-gray-700">KOTA / KABUPATEN</label>
            <select id="kota"
              class="w-full mt-1 p-2 border rounded-md focus:ring-primary focus:border-primary">
              <option value="">-- Pilih Kota --</option>
            </select>
          </div>

          <div>
            <label for="kecamatan" class="block text-sm font-semibold text-gray-700">KECAMATAN</label>
            <select id="distrik"
              class="w-full mt-1 p-2 border rounded-md focus:ring-primary focus:border-primary">
              <option value="">-- Pilih Distrik --</option>
            </select>
          </div>

          <div class="mb-2">
            <label class="block text-sm font-medium text-gray-700 mb-2">Pilih Kurir</label>
            <div class="grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div class="flex items-center">
                <input type="radio" name="courier" id="" value=""
                  class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300">
                <label for="" class="ml-2 block text-sm text-gray-900"></label>
              </div>
            </div>
          </div>

          <div class="mt-4">
            <h3 class="font-semibold text-gray-800">Pilihan Layanan: </h3>
            <div class="grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div class="flex items-center">
                <input type="radio" name="cost" id="" value=""
                  class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300">
                <label for="" class="ml-2 block text-sm text-gray-900">cost.service - moneyFormat(cost.cost) </label>
              </div>
            </div>
          </div>

          <div class="mt-4 text-red-500">
            Tidak ada opsi pengiriman tersedia.
          </div>

          <div>
            <label for="alamat" class="block text-sm font-semibold text-gray-700">ALAMAT LENGKAP</label>
            <textarea id="alamat"
              placeholder="Contoh: Jl. Tongkol Raya No. 1, Minomartani, Ngaglik, Sleman"
              class="w-full mt-1 p-2 border rounded-md focus:ring-primary focus:border-primary"></textarea>
          </div>

          <button
            class="mt-4 bg-primary text-white font-semibold py-3 px-6 rounded-full w-full hover:bg-transparent hover:text-primary transition-colors duration-200 border border-primary">
            CHECKOUT
          </button>
        </div>
      </div>

    </div>
  </div>
</template>
