<template lang="pug">
v-row#settings
  v-col(cols='12')
    h1.text-center 設定
  v-col(cols='12')
    | 選擇的鈴聲 ID {{ selectedAlarm }}
    v-table.text-center
      thead
        tr
          th.text-center 名稱
          th.text-center 試聽
          th.text-center 選擇
      tbody
        tr(v-for="alarm in alarms")
          td {{ alarm.name }}
          td
            audio(controls :src='alarm.file')
          td
            v-radio(v-model='selectedAlarm' :value='alarm.id')
</template>

<script setup>

import { useSettingsStore } from '@/stores/settings.js'
import { storeToRefs } from 'pinia'

const settings = useSettingsStore()
const { selectedAlarm, alarms } = storeToRefs(settings)

</script>
