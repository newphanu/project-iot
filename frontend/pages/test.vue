<template>
  <div class="min-h-screen bg-gray-50 p-6">
    <div class="container mx-auto">
      <!-- Header -->
      <div class="flex items-center justify-between mb-8">
        <div>
          <h1 class="text-3xl font-bold text-gray-800">Sensor Dashboard</h1>
          <p class="text-gray-600">Real-time power monitoring system</p>
        </div>
        <div class="flex items-center gap-2 px-3 py-1 bg-white rounded-full shadow-sm">
          <span class="animate-pulse w-2 h-2 bg-red-500 rounded-full"></span>
          <span class="text-sm text-gray-600 font-medium">Live</span>
        </div>
      </div>

      <!-- Stats Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- Voltage Card -->
        <div class="card bg-white shadow-md hover:shadow-lg transition-shadow">
          <div class="card-body">
            <div class="flex items-center gap-4">
              <div class="p-3 bg-blue-50 rounded-xl">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h2 class="text-sm font-medium text-gray-600">Voltage</h2>
                <p class="text-3xl font-bold text-gray-900">{{ formatValue(sensorData.voltage, 'voltage') }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Current Card -->
        <div class="card bg-white shadow-md hover:shadow-lg transition-shadow">
          <div class="card-body">
            <div class="flex items-center gap-4">
              <div class="p-3 bg-indigo-50 rounded-xl">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h2 class="text-sm font-medium text-gray-600">Current</h2>
                <p class="text-3xl font-bold text-gray-900">{{ formatValue(sensorData.current, 'current') }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Power Card -->
        <div class="card bg-white shadow-md hover:shadow-lg transition-shadow">
          <div class="card-body">
            <div class="flex items-center gap-4">
              <div class="p-3 bg-purple-50 rounded-xl">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h2 class="text-sm font-medium text-gray-600">Power</h2>
                <p class="text-3xl font-bold text-gray-900">{{ formatValue(sensorData.power, 'power') }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Energy Card -->
        <div class="card bg-white shadow-md hover:shadow-lg transition-shadow">
          <div class="card-body">
            <div class="flex items-center gap-4">
              <div class="p-3 bg-green-50 rounded-xl">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div>
                <h2 class="text-sm font-medium text-gray-600">Energy</h2>
                <p class="text-3xl font-bold text-gray-900">{{ formatValue(sensorData.energy, 'energy') }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Frequency Card -->
        <div class="card bg-white shadow-md hover:shadow-lg transition-shadow">
          <div class="card-body">
            <div class="flex items-center gap-4">
              <div class="p-3 bg-cyan-50 rounded-xl">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <div>
                <h2 class="text-sm font-medium text-gray-600">Frequency</h2>
                <p class="text-3xl font-bold text-gray-900">{{ formatValue(sensorData.frequency, 'frequency') }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Power Factor Card -->
        <div class="card bg-white shadow-md hover:shadow-lg transition-shadow">
          <div class="card-body">
            <div class="flex items-center gap-4">
              <div class="p-3 bg-amber-50 rounded-xl">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                </svg>
              </div>
              <div>
                <h2 class="text-sm font-medium text-gray-600">Power Factor</h2>
                <p class="text-3xl font-bold text-gray-900">{{ formatValue(sensorData.pf, 'pf') }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Footer -->
      <div class="mt-8 text-sm text-gray-500 flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        Last updated: {{ lastUpdated }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const sensorData = ref({
  voltage: 0,
  current: 0,
  power: 0,
  energy: 0,
  frequency: 0,
  pf: 0
})

const lastUpdated = ref('')
let intervalId = null

const formatValue = (value, key) => {
  switch(key) {
    case 'voltage':
      return `${value.toFixed(2)} V`
    case 'current':
      return `${value.toFixed(2)} A`
    case 'power':
      return `${value.toFixed(2)} W`
    case 'energy':
      return `${value.toFixed(3)} kWh`
    case 'frequency':
      return `${value.toFixed(1)} Hz`
    case 'pf':
      return value.toFixed(2)
    default:
      return value
  }
}

const fetchData = async () => {
  try {
    const response = await fetch('http://localhost:4000/api/sensor-data')
    const data = await response.json()
    sensorData.value = data
    lastUpdated.value = new Date().toLocaleTimeString()
  } catch (error) {
    console.error('Error fetching sensor data:', error)
  }
}

onMounted(() => {
  fetchData() // Fetch immediately
  intervalId = setInterval(fetchData, 1000) // Then every 1 second
})

onUnmounted(() => {
  if (intervalId) {
    clearInterval(intervalId)
  }
})
</script>