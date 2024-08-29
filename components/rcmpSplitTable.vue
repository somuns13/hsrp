<template>
  <div class="split-table-wrap">
    <RcmpSplitTable
      :resizeTableHeightFn="handleSplitMoving"
      @split-moving-end="handleSplitMoving"
    >
      <TopQuery
        :key="boxId"
        :tableBoxId="boxId"
        :exportInfoList="exportInfoList"
        slot="splitTop"
        slot-scope="{ boxId }"
        ref="splitTop"
        @myClick="handleTopRowClick"
        @change-list="handleChangeList"
      />
      <div
        :key="boxId"
        slot="splitBottom"
        slot-scope="{ boxId }"
        class="split-box-bottom-wrap"
      >
        <h-tabs>
          <h-tab-pane label="操作流水">
            <BottomQueryJour
              :tableBoxId="boxId"
              ref="splitBottomJour"
              @getTableExportInfo="getBottomJourTableExportInfo"
            />
          </h-tab-pane>
        </h-tabs>
      </div>
    </RcmpSplitTable>
  </div>
</template>

<script>
import TopQuery from '@/views/topQuery.vue';
import BottomQuery from '@/views/bottomQuery.vue';
export default {
  name: '%tmp%',
  components: {
    TopQuery,
    BottomQuery
  },
  data() {
    return {
      exportInfoList: []
    };
  },
  methods: {
    getBottomTableExportInfo(exportInfo) {
      this.exportInfoList.push(exportInfo);
    },
    getBottomJourTableExportInfo(exportInfo) {
      this.exportInfoList.push(exportInfo);
    },
    handleSplitMoving() {
      this.$refs['splitTop'].$refs['temp'].handleResizeTemp();
      this.$refs['splitBottomJour'].$refs['temp'].handleResizeTemp();
    },
    handleTopRowClick(rowDate) {
      if (this.$refs['splitBottomJour']) {
        this.$refs['splitBottomJour'].topRowInfo = rowDate[0];
        this.$refs['splitBottomJour'].$refs.temp.form.id = rowDate[0].id;
        this.$refs['splitBottomJour'].refresh();
      }
    },
    handleReset() {
      if (this.$refs['splitBottomJour']) {
        this.$refs['splitBottomJour'].topRowInfo = {};
        this.$refs['splitBottomJour'].$refs.temp.form.id = '';
        this.$refs['splitBottomJour'].refresh();
      }
    },
    handleChangeList() {
      this.handleReset();
    }
  }
};
</script>

<style lang="scss" scoped>
.split-table-wrap {
  width: 100%;
  height: 100%;
  .split-box-bottom-wrap {
    width: 100%;
    height: 100%;
  }
}
</style>
<style lang="scss" scoped>
/deep/ .h-datagrid {
  .h-table-pageView {
    .h-page {
      .h-page-options {
        .h-page-options-sizer {
          .h-select-dropdown-content {
            max-height: 125px !important;
          }
        }
      }
    }
  }
}
</style>
