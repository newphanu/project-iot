<template>
  <v-container fluid>
    <v-card>
      <v-card-title>Users List</v-card-title>
      <v-card-text>
        <v-data-table
          :headers="headers"
          :items="users"
          :loading="loading"
        >
          <template v-slot:loading>
            <v-progress-linear indeterminate></v-progress-linear>
          </template>
        </v-data-table>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      loading: true,
      headers: [
        { text: 'ID', value: 'id' },
        { text: 'Name', value: 'name' },
        { text: 'Email', value: 'email' }
      ],
      users: []
    }
  },
  mounted() {
    this.fetchUsers()
  },
  methods: {
    async fetchUsers() {
      try {
        this.loading = true
        const response = await axios.get('http://localhost:4000/get-users')
        this.users = response.data
        this.loading = false
      } catch (error) {
        this.loading = false
        console.error('Error fetching users:', error)
      }
    }
  }
}
</script>