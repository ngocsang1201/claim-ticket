import { createContext, useEffect, useReducer } from 'react'
import type { ColorData } from '../models/data'
import env from '../utils/env'

type AppState = {
  loading: boolean
  username: string
  domain: string
  imgUrl: string
  color: ColorData
}

const defaultState: AppState = {
  loading: false,
  username: 'username',
  domain: 'builder.io',
  imgUrl: '',
  color: {
    primaryColor: '',
    isPrimaryColorDark: false,
    secondaryColor: '',
    isSecondaryColorDark: false,
    palette: [],
  },
}

export const AppContext = createContext<{
  state: AppState
  dispatch: (state: Partial<AppState>) => void
}>({ state: defaultState, dispatch: () => {} })

const reducer = (state: AppState, action: Partial<AppState>) => {
  return { ...state, ...action }
}

export default function AppProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, defaultState)

  const updateSearchParams = (params: Record<string, string>) => {
    const url = new URL(window.location.href)
    Object.keys(params).forEach((key) => {
      url.searchParams.set(key, params[key])
    })
    window.history.pushState(null, '', url.toString())
  }

  const fetchColor = async (params: { domain: string }) => {
    dispatch({ loading: true })
    try {
      const apiUrl = env.BASE_URL
      const res = await fetch(`${apiUrl}/ticket?domain=${params.domain}`)
      const data = await res.json()
      const { domain, imgUrl, ...color } = data
      dispatch({ loading: false, domain, imgUrl, color })
      updateSearchParams({ domain })
    } catch (error) {
      console.error(error)
      dispatch({ loading: false })
    }
  }

  useEffect(() => {
    if (!state.domain) return
    fetchColor({ domain: state.domain })
  }, [state.domain])

  return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>
}
