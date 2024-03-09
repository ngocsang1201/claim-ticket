import { useContext } from 'react'
import { AppContext } from '../providers/app-provider'

export const useAppContext = () => useContext(AppContext)
