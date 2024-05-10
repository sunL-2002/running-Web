import request from '@/utils/request';
/**
 * 
 * 活动管理
 * 
 */
// 查询列表接口
export const getEventPage = (params: any) => {
    return request({
      url: '/event/page',
      method: 'get',
      params
    })
}

// 删除接口
export const deleteEvent = (ids: string) => {
    return request({
      url: '/Event',
      method: 'delete',
      params: { ids }
    })
}

