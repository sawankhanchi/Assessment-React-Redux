import axios from "axios"
import { GET_HISTORY, GET_FILTERED_HISTORY, GET_FILTERED_ADDRESS, GET_ADDRESS } from "./types"

export const getHistory = (data) => {
    return {
        type: GET_HISTORY,
        payload: data
    }
}

export const getFilteredHistory = (data) => {
    return {
        type: GET_FILTERED_HISTORY,
        payload: data
    }
}

export const getAddress = (data) => {
    return {
        type: GET_ADDRESS,
        payload: data
    }
}

export const getFilteredAddress = (data) => {
    return {
        type: GET_FILTERED_ADDRESS,
        payload: data
    }
}

export const handleFetchHistory = (page) => {
    return async (dispatch) => {
        try {
            axios.get(`https://api.spacexdata.com/v3/history?offset=${page*10-10}&limit=10`).then((response) => {
                dispatch(getHistory(response.data))
                // console.log(response)
              }).catch((error) => {
                // message(error?.message)
              })
        } catch (e) {
            // message(e?.message)
        }
    }
}

export const handleFetchAddress = () => {
    return async (dispatch) => {
        try {
            axios.get('https://api.spacexdata.com/v3/payloads').then((response) => {
                dispatch(getAddress(response.data))
                // console.log(response)
              }).catch((error) => {
                // message(error?.message)
              })
        } catch (e) {
            // message(e?.message)
        }
    }
}
