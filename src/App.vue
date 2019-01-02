<template>
  <div id="app">
    <table-grid-component
      :data="filteredData"
      :columns="gridColumns"
      :filter-key="searchQuery"
      v-on:clickRowEvent="onClickRowEvent"
      v-on:actionEditRowEvent="onActionEditRowEvent"
      v-on:actionRemoveRowEvent="onActionRemoveRowEvent"
    >
    </table-grid-component>
    <!--<router-view/>-->
  </div>
</template>

<script>
import tableGridTemplate from './components/TableGridTemplate'

export default {
  name: 'VueComponents',
  components: {
    'table-grid-component': tableGridTemplate
  },
  computed: {
    getEmotionCodeList () {
      return this.dataArray
    },
    filteredData () {
      const x = this.selectedFilter
      const filter = new RegExp(this.filteredText, 'i')
      return this.getEmotionCodeList.filter((el) => {
        if (el[x] !== undefined) {
          return el[x].match(filter)
        }
        return true
      })
    }
  },
  data () {
    return {
      searchQuery: '',
      dataArray: [
      ],
      gridColumns: [
        { width: 5, key: 'num', value: '번호', type: 'text' },
        { width: 20, key: 'cd_emo_ctgrz', value: '코드명', type: 'key' },
        { width: 20, key: 'cd_emo_ctgrz_nm', value: '코드이름', type: 'text' },
        { width: 10, key: 'cd_emo_ctgrz_nm_eng', value: '코드영문이름', type: 'text' }
      ],
      selectedFilter: '',
      filteredText: ''
    }
  },
  methods: {
    onActionEditRowEvent (param) {
      // 테이블 그리드로 부터 수정 Action Event 발생 시
      // 해당 APP을 수정 한다.
      this.processType = 'update'
      const dataParams = {
        'modal-app-name': param.name,
        'modal-app-desc': param.description,
        'modal-app-culture': param.culture,
        'modal-app-id': param.id
      }
      const disabledParam = ['modal-app-culture']
      this.$refs.refCommonModalComponent.showModalWithData(dataParams, disabledParam)
    },
    onActionRemoveRowEvent (param) {
      // 테이블 그리드로 부터 삭제 Action Event 발생 시
      // 해당 APP을 삭제 한다.
      this.requestLUISDeleteApplication(param)
    },
    onClickRowEvent () {
      // code no jobs
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
