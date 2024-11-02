<!-- pages/index.vue -->
<template>
  <div class="min-h-screen" :data-theme="currentTheme">
    <div class="flex h-screen bg-base-200">
      <!-- Sidebar -->
      <div class="w-64 bg-base-100 shadow-lg">
        <div class="p-4 flex items-center justify-between">
          <h1 class="text-2xl font-bold text-primary">ระบบไฟฟ้า</h1>
          <button class="btn btn-circle btn-ghost" @click="toggleTheme">
            <svg v-if="currentTheme === 'light'" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </button>
        </div>
        <ul class="menu p-4">
          <li>
            <nuxt-link to="/" class="flex items-center space-x-2 active">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span>ภาพรวม</span>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/analysis" class="flex items-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              <span>วิเคราะห์การใช้งาน</span>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/history"class="flex items-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>ประวัติย้อนหลัง</span>
            </nuxt-link>
          </li>
          <li>
            <a class="flex items-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              </svg>
              <span>ตั้งค่า</span>
            </a>
          </li>
        </ul>
      </div>

      <!-- Main Content -->
      <div class="flex-1 overflow-auto p-8">
        <!-- Stats Cards -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
          <div v-for="(stat, index) in stats" :key="index" 
               class="stat bg-base-100 shadow rounded-lg hover:shadow-lg transition-all duration-300">
            <div class="stat-figure text-primary">
              <component :is="stat.icon" class="w-8 h-8" />
            </div>
            <div class="stat-title">{{ stat.title }}</div>
            <div class="stat-value text-primary">{{ stat.value }}</div>
            <div class="stat-desc">
              <span :class="stat.change >= 0 ? 'text-success' : 'text-error'">
                {{ stat.change >= 0 ? '↗' : '↘' }} {{ Math.abs(stat.change) }}% จากเดือนที่แล้ว
              </span>
            </div>
          </div>
        </div>

        <!-- Charts -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <!-- Line Chart -->
          <div class="card bg-base-100 shadow hover:shadow-lg transition-all duration-300">
            <div class="card-body">
              <h2 class="card-title">แนวโน้มการใช้ไฟฟ้ารายวัน</h2>
              <canvas ref="lineChart"></canvas>
            </div>
          </div>

          <!-- Bar Chart -->
          <div class="card bg-base-100 shadow hover:shadow-lg transition-all duration-300">
            <div class="card-body">
              <h2 class="card-title">เปรียบเทียบรายเดือน</h2>
              <canvas ref="barChart"></canvas>
            </div>
          </div>
        </div>

        <!-- Prediction Card -->
        <div class="card bg-base-100 shadow mt-8 hover:shadow-lg transition-all duration-300">
          <div class="card-body">
            <h2 class="card-title">การคาดการณ์การใช้ไฟฟ้าเดือนหน้า</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div class="stat">
                <div class="stat-title">ค่าไฟคาดการณ์</div>
                <div class="stat-value text-primary">{{ prediction.cost }} บาท</div>
                <div class="stat-desc">จากแนวโน้มการใช้งาน</div>
              </div>
              <div class="stat">
                <div class="stat-title">หน่วยที่คาดว่าจะใช้</div>
                <div class="stat-value text-secondary">{{ prediction.units }} หน่วย</div>
                <div class="stat-desc">ประมาณการณ์</div>
              </div>
              <div class="stat">
                <div class="stat-title">ความแม่นยำ</div>
                <div class="stat-value text-accent">{{ prediction.accuracy }}%</div>
                <div class="stat-desc">จากข้อมูลย้อนหลัง</div>
              </div>
            </div>
          </div>
        </div>

        <!-- History Table -->
        <div class="card bg-base-100 shadow mt-8 hover:shadow-lg transition-all duration-300">
          <div class="card-body">
            <h2 class="card-title mb-4">ประวัติการใช้ไฟฟ้า</h2>
            <div class="overflow-x-auto">
              <table class="table table-zebra w-full">
                <thead>
                  <tr>
                    <th>วันที่</th>
                    <th>การใช้งานทั่วไป</th>
                    <th>เครื่องปรับอากาศ</th>
                    <th>แสงสว่าง</th>
                    <th>เครื่องใช้ไฟฟ้า</th>
                    <th>รวมทั้งหมด</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(record, index) in history" :key="index">
                    <td>{{ record.date }}</td>
                    <td>{{ record.general }} หน่วย</td>
                    <td>{{ record.ac }} หน่วย</td>
                    <td>{{ record.lighting }} หน่วย</td>
                    <td>{{ record.appliances }} หน่วย</td>
                    <td class="font-bold">{{ record.total }} หน่วย</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Chart from 'chart.js/auto'

const currentTheme = ref('light')

const toggleTheme = () => {
  currentTheme.value = currentTheme.value === 'light' ? 'dark' : 'light'
}

// ข้อมูลสถิติ
const stats = ref([
  { 
    title: 'การใช้งานทั่วไป',
    value: '156 หน่วย',
    change: 14,
    icon: 'div',
  },
  { 
    title: 'เครื่องปรับอากาศ',
    value: '245 หน่วย',
    change: -2,
    icon: 'div',
  },
  { 
    title: 'แสงสว่าง',
    value: '89 หน่วย',
    change: 7,
    icon: 'div',
  },
  { 
    title: 'เครื่องใช้ไฟฟ้า',
    value: '178 หน่วย',
    change: 8,
    icon: 'div',
  },
  { 
    title: 'รวมทั้งหมด',
    value: '668 หน่วย',
    change: 5,
    icon: 'div',
  }
])

// ข้อมูลประวัติ
const history = ref([
  {
    date: '1 มี.ค. 2567',
    general: 156,
    ac: 245,
    lighting: 89,
    appliances: 178,
    total: 668
  },
  {
    date: '29 ก.พ. 2567',
    general: 150,
    ac: 240,
    lighting: 85,
    appliances: 170,
    total: 645
  },
  // เพิ่มข้อมูลย้อนหลังตามต้องการ
])

// ข้อมูลการคาดการณ์
const prediction = ref({
  cost: '2,450',
  units: '680',
  accuracy: '95'
})

const lineChart = ref(null)
const barChart = ref(null)

onMounted(() => {
  // กราฟเส้นแสดงการใช้ไฟฟ้ารายวัน
  new Chart(lineChart.value, {
    type: 'line',
    data: {
      labels: ['1 มี.ค.', '2 มี.ค.', '3 มี.ค.', '4 มี.ค.', '5 มี.ค.'],
      datasets: [
        {
          label: 'หน่วยไฟฟ้าที่ใช้',
          data: [22, 25, 23, 24, 22],
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1,
          fill: true,
          backgroundColor: 'rgba(75, 192, 192, 0.1)'
        }
      ]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
          },
        title: {
          display: true,
          text: 'การใช้ไฟฟ้ารายวัน (หน่วย)'
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: 'หน่วยไฟฟ้า'
          }
        }
      }
    }
  })

  // กราฟแท่งแสดงการเปรียบเทียบรายเดือน
  new Chart(barChart.value, {
    type: 'bar',
    data: {
      labels: ['ต.ค. 66', 'พ.ย. 66', 'ธ.ค. 66', 'ม.ค. 67', 'ก.พ. 67', 'มี.ค. 67'],
      datasets: [
        {
          label: 'ค่าไฟรายเดือน (บาท)',
          data: [2100, 2300, 2450, 2200, 2350, 2450],
          backgroundColor: 'rgba(255, 159, 64, 0.7)',
          borderColor: 'rgb(255, 159, 64)',
          borderWidth: 1
        }
      ]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'เปรียบเทียบค่าไฟฟ้ารายเดือน'
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: 'จำนวนเงิน (บาท)'
          }
        }
      }
    }
  })
})
</script>

<style>
.stat-figure svg {
  @apply inline-block;
}
</style>