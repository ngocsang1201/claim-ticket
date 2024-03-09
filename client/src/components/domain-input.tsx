import { useState } from 'react'
import { useAppContext } from '../hooks/use-context'

export default function DomainInput() {
  const {
    state: { loading, domain, color },
    dispatch,
  } = useAppContext()
  const { primaryColor, isPrimaryColorDark } = color

  const [value, setValue] = useState(domain)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch({ domain: value })
  }
  return (
    <div className="-mb-4 mt-6 flex items-center justify-center space-x-2 text-center md:mb-0">
      <span>{loading ? 'Loading... ' : 'Your ticket in the style of'} </span>
      <form className="relative max-w-[130px]" onSubmit={handleSubmit}>
        <input
          className="border-1 peer block w-[120px] appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 py-2 text-sm text-white focus:outline-none focus:ring-0 md:w-[160px]"
          type="text"
          name="domain"
          id="domain"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          style={{ borderColor: isPrimaryColorDark ? 'white' : primaryColor }}
        />
        <label
          className="absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-transparent px-2 text-sm text-gray-300 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2"
          htmlFor="domain"
          style={{
            color: isPrimaryColorDark ? 'white' : primaryColor,
            backgroundColor: 'rgb(27, 35, 58)',
          }}
        >
          Domain
        </label>
      </form>
    </div>
  )
}
