import * as taskApis from "./../apis/task"
import * as taskConstants from "./../const/task"

export const fetchListTask = () => {
  return {
    type: taskConstants.FETCH_TASK
  }
}

export const fetchListTaskSuccess = data => {
  return {
    type: taskConstants.FETCH_TASK_SUCCESS,
    payload: {
      data
    }
  }
}

export const fetchListTaskFailed = err => {
  return {
    type: taskConstants.FETCH_TASK_FAILED,
    payload: {
      err
    }
  }
}

export const filterTask = keyword => ({
  type: taskConstants.FILTER_TASK,
  keyword
})

export const filterTaskSuccess = data => ({
  type: taskConstants.FILTER_TASK_SUCCESS,
  payload: {
    data
  }
})
