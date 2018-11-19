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
                <v-text-field v-model="teacher_name" @input="getDataTeacher(teacher_name)" label="教師姓名"></v-text-field>
            </v-flex>
            <v-flex xs12 sm6 md3>
                <v-text-field v-model="cname" @input="getDataCourse(cname)" label="課程名稱"></v-text-field>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
import axios from 'axios';
import { serverBus, base_url } from '../main';

export default {
    data: () => ({
        faculty: ['人文學院', '管理學院', '科技學院', '教育學院'],
        department: [],
        fac: '',
        dep: '',
        teacher_name: '',
        cname: ''
    }),
    methods: {
        getDataFac(fac) {
            axios.get(base_url + '/api/faculty/' + fac)
                .then(response => {
                    serverBus.$emit('serverSelected', response.data);
                });
        },
        getDataDep(dep) {
            axios.get(base_url + '/api/department/' + dep)
                .then(response => {
                    serverBus.$emit('serverSelected', response.data);
                });
        },
        getDataTeacher(name) {
            axios.get(base_url + '/api/teacher/' + name)
                .then(response => {
                    serverBus.$emit('serverSelected', response.data);
                });
        },
        getDataCourse(cname) {
            axios.get(base_url + '/api/course/' + cname)
                .then(response => {
                    serverBus.$emit('serverSelected', response.data);
                });
        }
    },
    watch: {
        fac: function() {
            axios.get(base_url + '/api/depList/' + this.fac)
                .then(response => {
                    this.department = response.data;
                });
        }
    }
}
</script>