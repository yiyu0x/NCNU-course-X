<template>
  <v-card dark>
    <v-card-title>課程資訊
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="search"
        label="篩選器 (任意輸入文字來篩選結果)"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="info"
      :loading="isLoading"
      :search="search"
      hide-actions
      class="elevation-1"
      dark
    >
      <v-progress-linear slot="progress" color="green" indeterminate></v-progress-linear>
      <template slot="items" slot-scope="props">
        <tr @click="showInfo(props.item.course_id)">
          <td class="text-xs">{{ props.item.course_cname }}</td>
          <td class="text-xs">{{ props.item.course_id }}</td>
          <td class="text-xs">{{ props.item.department }}</td>
          <td class="text-xs">{{ props.item.division }}</td>
          <td class="text-xs">{{ props.item.course_credit }}</td>
          <td class="text-xs">{{ props.item.time }}</td>
          <td class="text-xs">{{ props.item.location }}</td>
          <td class="text-xs">{{ props.item.teacher }}</td>
        </tr>
      </template>
    </v-data-table>
    <v-dialog v-model="dialog" max-width="40%">
      <v-card>
        <iframe style="width:100%; height: 700px" :src="dataUrl"></iframe>
      </v-card>
    </v-dialog>
  </v-card>
</template>
<script>
import axios from "axios";
import { serverBus, base_url } from "../main";
export default {
  data() {
    return {
      search: "",
      headers: [
        {
          text: "課程名稱",
          align: "left",
          value: "course_cname",
          sortable: false
        },
        { text: "課號", value: "course_id" },
        { text: "開課單位", value: "department" },
        { text: "年級", value: "division" },
        { text: "學分", value: "course_credit" },
        { text: "時段", value: "time" },
        { text: "地點", value: "location" },
        { text: "教師姓名", value: "teacher" }
      ],
      info: [],
      isLoading: true,
      dialog: false,
      dataUrl: ""
    };
  },
  created() {
    // Using the service bus
    this.isLoading = true;
    // let vm = this;
    serverBus.$on("serverSelected", response => {
      console.log("hook");
      this.info = response;
      // this.info = [];
      // console.log(this.info);
    });
  },
  mounted() {
    axios.get(base_url + "/api/20").then(response => {
      this.info = response.data;
      this.isLoading = false;
    });
  },
  methods: {
    showInfo(id) {
      this.dataUrl = `https://ccweb.ncnu.edu.tw/student/aspmaker_course_opened_detail_viewview.php?showdetail=&year=1081&courseid=${id}&class=0&modal=1&rnd=159132`;
      this.dialog = true;
    }
  }
};
</script>
