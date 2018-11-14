<template>
    <v-container fluid grid-list-xl>
        <v-layout wrap align-center>
            <v-flex xs12 sm6 d-flex>
                <v-select v-model="fac" @change="getData(fac)" :items="faculty" label="學院"></v-select>
            </v-flex>
            <v-flex xs12 sm6 d-flex>
                <v-select :items="department" label="系所"></v-select>
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
        fac: ''
    }),
    methods: {
        getData(fac) {
            axios.get('http://127.0.0.1:5487/api/faculty/' + fac)
                .then(response => {
                    serverBus.$emit('serverSelected', response.data);
                });
        }

    },
    watch: {
        fac: function() {
            axios.get('http://127.0.0.1:5487/api/getDep/' + this.fac)
                .then(response => {
                    this.department = response.data;
                });
        }
    }
}
</script>