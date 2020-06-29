import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
  fetchInfo:[],
  fetchDeviceInformation: null,
  // device informations were successfully fetched
  fetchDeviceInformationSuccess: ['device'],
  // An error occurred
  fetchDeviceInformationFailure: ['errorMessage'],
})

export const DeviceTypes = Types
export default Creators

