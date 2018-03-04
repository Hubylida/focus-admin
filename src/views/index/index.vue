<template>
  
</template>

<script>
import { getCommitteeMember, getResearchItems, getEventItems, getMemberNum, getResearchNum } from '@/api/index.js'
export default {
  name: 'index',
  components: {},
  data() {
    return {
      memberNum: [],
      researchNum: [],
      committee_members: [],
      research_items: [],
      event_items: [],
      teacherNum: '',
      paperNum: '',
      studentNum: ''
    }
  },
  created() {
    const that = this
    getCommitteeMember().then(res => {
      const data = res.data.data
      data.map((item) => {
        that.committee_members.push(item)
      })
    })
    getResearchItems().then(res => {
      const data = res.data.data
      data.map((item) => {
        that.research_items.push(item)
      })
    })
    getEventItems().then(res => {
      const data = res.data.data
      data.map((item) => {
        that.event_items.push(item)
      })
    })
    getMemberNum().then(res => {
      const data = res.data.data.memberNum
      that.memberNum[0] = data.committee_member
      that.memberNum[1] = data.core_member
      that.memberNum[2] = data.student_member
    })
    getResearchNum().then(res => {
      const data = res.data.data.researchNum
      that.researchNum[0] = data.directions
      that.researchNum[1] = data.cooperation
      that.researchNum[2] = data.future
    })
  }
}
</script>
