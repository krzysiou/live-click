<template>
  <div class="min-h-screen bg-gray-100 py-3 flex flex-col justify-around sm:py-12">

    <div class="relative py-3 sm:max-w-xl sm:mx-auto">
      <div class="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 shadow-lg transform -skew-x-6 sm:skew-y-0 sm:-rotate-6 rounded-3xl"></div>
      <div class="transition duration-700 transform hover:scale-105 relative px-4 py-3 bg-white shadow-lg rounded-3xl sm:p-10">
        <div class="max-w-md mx-auto">
          <div class="divide-y divide-gray-200">
            <div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7 divide-y divide-gray-200">
                <h1 class="font-bold text-2xl">Leaderboard.</h1>
                <div class="pt-6 text-base leading-6 font-bold sm:text-lg sm:leading-7">
                    <p>1:</p>
                    <p>2:</p>
                    <p>3:</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="relative py-3 sm:max-w-xl sm:mx-auto">
      <div class="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 shadow-lg transform -skew-x-6 sm:skew-y-0 sm:-rotate-6 rounded-3xl"></div>
      <button class="transition duration-700 transform hover:scale-105 relative bg-white shadow-lg rounded-3xl sm:p-48 max-w-md mx-auto text-2xl font-bold inline-flex">
      </button>
    </div>

      <div class="relative py-3 sm:max-w-xl sm:mx-auto">
        <div class="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 shadow-lg transform scale-95 -skew-x-6 sm:skew-y-0 sm:-rotate-6 rounded-3xl"></div>
        <button class="transition duration-300 transform hover:scale-110 relative bg-white shadow-lg rounded-3xl sm:p-5 max-w-md mx-auto text-2xl font-bold inline-flex">
            <img src="../assets/exit.svg" alt="exit">
        </button>
      </div>

  </div>
</template>

<script>
export default {
  name: 'Rooms'
}
</script>