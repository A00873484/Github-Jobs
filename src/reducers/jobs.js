import { RECEIVE_JOBS } from '../actions/jobs'

export default function jobs (state={}, action) {
    switch (action.type){
        case RECEIVE_JOBS:
            return {
                ...state,
                ...action.jobs
            }
        default: 
            return state
    }
}