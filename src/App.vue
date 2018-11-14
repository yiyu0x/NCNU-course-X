<template>
    <v-app>
    <ToolBar/>
    <v-container fluid>
      <SelectBox/>
      <TableView/>
    </v-container>
    <Footer/>
  </v-app>
</template>

<script>
import ToolBar from './components/ToolBar';
import SelectBox from './components/SelectBox';
import TableView from './components/TableView';
import Footer from './components/Footer';

// import Table from './components/Table'

export default {
  name: 'App',
  components: {
    ToolBar,
    SelectBox,
    TableView,
    Footer
    // Table
  },
  data () {
    return {
      //
    }
  }
}
</script>
