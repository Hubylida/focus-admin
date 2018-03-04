import request from '@/utils/request'

export function getCommitteeMember() { // 获取首页member
  return request({
    url: '/committee_members',
    method: 'get'
  })
}

export function getResearchItems() { // 获取首页各项研究
  return request({
    url: '/research_items',
    method: 'get'
  })
}

export function getEventItems() { // 获取首页事件
  return request({
    url: '/event_items',
    method: 'get'
  })
}

export function getMemberNum() { // 获取首页member人数
  return request({
    url: '/memberNum',
    method: 'get'
  })
}

export function getResearchNum() { // 获取首页研究的个数
  return request({
    url: '/researchNum',
    method: 'get'
  })
}

