import { combineReducers } from 'redux'
import karyawan from './karyawan'
import departemen from './departemen'
import nilai from './nilai'

export default combineReducers({
    karyawan,
    departemen,
    nilai,
})