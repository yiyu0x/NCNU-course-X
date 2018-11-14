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
    </v-container>
</template>
<script>
import axios from 'axios';
import { serverBus } from '../main';
export default {
    data: () => ({
        faculty: ['人文學院', '管理學院', '科技學院', '教育學院'],
        department: [],
        fac: '',
        dep: ''
    }),
    methods: {
        getDataFac (fac) {
            axios.get('http://178.128.61.189:5488/api/faculty/' + fac)
                .then(response => {
                    serverBus.$emit('serverSelected', response.data);
                });
        },
        getDataDep (dep) {
            axios.get('http://178.128.61.189:5488/api/department/' + dep)
                .then(response => {
                    serverBus.$emit('serverSelected', response.data);
                });
        }
    },
    watch: {
        fac: function() {
            axios.get('http://178.128.61.189:5488/api/getDep/' + this.fac)
                .then(response => {
                    this.department = response.data;
                });
        }
    }
}
</script>