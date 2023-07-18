const API_ENDPOINT = {
  GET_ALL_RESTAURANT: '/list',
  GET_DETAIL_RESTAURANT: (id) => `/detail/${id}`,
  SEARCH_RESTAURANT: (params) => `/search?${new URLSearchParams(params).toString()}`,
  ADD_REVIEW: '/review'
}

export default API_ENDPOINT
