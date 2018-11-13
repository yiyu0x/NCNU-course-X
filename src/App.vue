<template>
    <v-app>
    <ToolBar/>
    <v-container fluid>
      <!-- <router-view></router-view> -->
      <TableView/>
    </v-container>
  </v-app>
</template>

<script>
import ToolBar from './components/ToolBar'
import TableView from './components/TableView'
// import Table from './components/Table'

export default {
  name: 'App',
  components: {
    ToolBar,
    TableView
    // Table
  },
  data () {
    return {
      //
    }
  }
}
</script>
