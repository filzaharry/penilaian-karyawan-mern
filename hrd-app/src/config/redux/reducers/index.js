import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import karyawan from './karyawan'
import departemen from './departemen'
import jabatan from './jabatan'
import nilai from './nilai'

export default combineReducers({
    karyawan,
    departemen,
    jabatan,
    nilai,
    form: formReducer
})