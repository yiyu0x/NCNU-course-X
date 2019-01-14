<template>
  <v-container fluid grid-list-xl>
    <v-layout wrap align-center>
      <v-flex xs12 sm6 d-flex>
        <v-select v-model="fac" @change="getDataFac(fac)" :items="faculty" label="學院"></v-select>
      </v-flex>
      <v-flex xs12 sm6 d-flex>
        <v-select v-model="dep" @change="getDataDep(dep)" :items="department" label="系所"></v-select>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs12 sm6 md3>
        <v-autocomplete
          :loading="loading_teacher"
          :items="items_teacher"
          :search-input.sync="search_teacher"
          v-model="teacher_name"
          cache-items
          class="mx-3"
          flat
          hide-no-data
          hide-details
          label="教師姓名"
          solo-inverted
          @input="getDataTeacher(teacher_name)"
        ></v-autocomplete>
      </v-flex>
      <v-flex xs12 sm6 md3>
        <v-text-field
          flat
          hide-no-data
          hide-details
          v-model="cname"
          label="課名模糊搜尋"
          solo-inverted
          @input="getDataCourse(cname)"
        ></v-text-field>
      </v-flex>
      <v-flex xs12 sm6 md3>
        <v-autocomplete
          :loading="loading_course"
          :items="items_course"
          :search-input.sync="search_course"
          v-model="cname"
          cache-items
          class="mx-3"
          flat
          hide-no-data
          hide-details
          label="課名精確搜尋"
          solo-inverted
          @input="getDataCourse(cname)"
        ></v-autocomplete>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import axios from "axios";
import { serverBus, base_url } from "../main";

export default {
  data: () => ({
    faculty: ["人文學院", "管理學院", "科技學院", "教育學院"],
    department: [],
    fac: "",
    dep: "",
    teacher_name: "",
    cname: "",
    items_teacher: [],
    items_course: [],
    loading_teacher: false,
    loading_course: false,
    search_teacher: null,
    search_course: null,
    select_teacher: null,
    select_course: null,
    teacher_name_box: [],
    course_name_box: []
  }),
  mounted() {
    axios.get(base_url + "/api/teacherList/all").then(response => {
      this.teacher_name_box = response.data;
    });
    axios.get(base_url + "/api/courseList/all").then(response => {
      this.course_name_box = response.data;
    });
  },
  methods: {
    getDataFac(fac) {
      axios.get(base_url + "/api/faculty/" + fac).then(response => {
        serverBus.$emit("serverSelected", response.data);
      });
    },
    getDataDep(dep) {
      axios.get(base_url + "/api/department/" + dep).then(response => {
        serverBus.$emit("serverSelected", response.data);
        // console.log(response.data);
      });
    },
    getDataTeacher(name) {
      axios.get(base_url + "/api/teacher/" + name).then(response => {
        serverBus.$emit("serverSelected", response.data);
      });
    },
    getDataCourse(cname) {
      axios.get(base_url + "/api/course/" + cname).then(response => {
        serverBus.$emit("serverSelected", response.data);
      });
    },
    querySelections_teacher(v) {
      this.loading = true;
      // Simulated ajax query
      setTimeout(() => {
        this.items_teacher = this.teacher_name_box.filter(e => {
          return (e || "").toLowerCase().indexOf((v || "").toLowerCase()) > -1;
        });
        this.loading = false;
      }, 500);
    },
    querySelections_course(v) {
      this.loading = true;
      // Simulated ajax query
      setTimeout(() => {
        this.items_course = this.course_name_box.filter(e => {
          return (e || "").toLowerCase().indexOf((v || "").toLowerCase()) > -1;
        });
        this.loading = false;
      }, 500);
    }
  },
  watch: {
    fac: function() {
      axios.get(base_url + "/api/depList/" + this.fac).then(response => {
        this.department = response.data;
        // console.log("hook");
      });
    },
    search_teacher(val) {
      val && val !== this.select_teacher && this.querySelections_teacher(val);
    },
    search_course(val) {
      val && val !== this.select_course && this.querySelections_course(val);
    }
  }
};
</script>