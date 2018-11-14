<template>
    <v-app>
    <ToolBar/>
    <v-container fluid>
      <!-- <router-view></router-view> -->
      <SelectBox/>
      <br/>
      <TableView/>
    </v-container>
  </v-app>
</template>

<script>
import ToolBar from './components/ToolBar'
import SelectBox from './components/SelectBox'
import TableView from './components/TableView'

// import Table from './components/Table'

export default {
  name: 'App',
  components: {
    ToolBar,
    SelectBox,
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
