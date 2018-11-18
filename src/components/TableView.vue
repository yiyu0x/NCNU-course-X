<template>
    <v-card dark>
        <v-card-title>
            課程資訊
            <v-spacer></v-spacer>
            <v-text-field v-model="search" append-icon="search" label="篩選器 (任意輸入文字來篩選結果)" single-line hide-details></v-text-field>
        </v-card-title>
        <v-data-table :headers="headers" :items="info" :loading="isLoading" :search="search" hide-actions class="elevation-1" dark>
            <v-progress-linear slot="progress" color="green" indeterminate></v-progress-linear>
            <template slot="items" slot-scope="props">
                <td class="text-xs">{{ props.item.course_cname }}</td>
                <td class="text-xs">{{ props.item.course_id }}</td>
                <td class="text-xs">{{ props.item.department }}</td>
                <td class="text-xs">{{ props.item.division }}</td>
                <td class="text-xs">{{ props.item.course_credit }}</td>
                <td class="text-xs">{{ props.item.time }}</td>
                <td class="text-xs">{{ props.item.location }}</td>
                <td class="text-xs">{{ props.item.teacher }}</td>
            </template>
        </v-data-table>
    </v-card>
</template>
<script>
import axios from 'axios';
import { serverBus, base_url } from '../main';
export default {
    data() {
        return {
            search: '',
            headers: [{ text: '課程名稱', align: 'left', value: 'course_cname', sortable: false },
                { text: '課號', value: 'course_id' },
                { text: '開課單位', value: 'department' },
                { text: '年級', value: 'division' },
                { text: '學分', value: 'course_credit' },
                { text: '時段', value: 'time' },
                { text: '地點', value: 'location' },
                { text: '教師姓名', value: 'teacher' }

            ],
            info: [],
            isLoading: true
        }
    },
    created() {
        // Using the service bus
        this.isLoading = true;
        serverBus.$on('serverSelected', (response) => {
            this.info = response;
        })
    },
    mounted() {
        axios.get(base_url + '/api/20')
            .then(response => {
                this.info = response.data;
                this.isLoading = false;
            });
    }
}
</script>