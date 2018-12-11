<template>
    <v-toolbar dark>
    <v-btn icon>
        <v-icon>school</v-icon>
    </v-btn>
    <v-toolbar-title class="white--text">暨大課程查詢</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat @click.native.stop="dialog_1 = true">使用說明</v-btn>
        <v-btn flat @click.native.stop="dialog_2 = true">問題回報</v-btn>
        <v-btn flat href="https://github.com/yiyu0x/ncnu-course-X/issues">參與協助</v-btn>
    </v-toolbar-items>
    <v-dialog v-model="dialog_1" width="500">
        <v-card>
        <v-card-title class="headline grey lighten-2" primary-title>使用說明</v-card-title>
        <v-card-text>
            <p>
            請用
            <b>學院</b>、
            <b>系所</b>來指定搜尋條件
            </p>
            <p>
            <b>教師姓名</b>、
            <b>課程名稱</b>只要輸入一個字後，即會啟動自動提示功能
            </p>
            <p>
            表格內之
            <b>篩選器</b>可以將搜尋後的表格內容，進一步用純文字篩選
            </p>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" flat @click="dialog_1 = false">關閉</v-btn>
        </v-card-actions>
        </v-card>
    </v-dialog>
    <v-dialog v-model="dialog_2" width="500">
        <v-card>
        <v-card-title class="headline grey lighten-2" primary-title>問題回報</v-card-title>
        <v-card-text>
            <p>
            如果有任何使用上的問題、改進空間，請來信告知(
            <b>yiyu0x@icloud.com</b>)
            </p>
            <p>如果你有能力協助系統改善，請點擊 "參與協助" 發送 issue 或 PR</p>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" flat @click="dialog_2 = false">關閉</v-btn>
        </v-card-actions>
        </v-card>
    </v-dialog>
    </v-toolbar>
</template>
<script>
export default {
    data() {
    return {
        dialog_1: false,
        dialog_2: false
    };
    }
};
</script>