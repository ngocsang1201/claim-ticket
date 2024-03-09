import { useAppContext } from '../../hooks/use-context'

export default function TicketBanner() {
  const { state } = useAppContext()
  const { domain, imgUrl, color } = state
  const { secondaryColor, isSecondaryColorDark } = color

  return (
    <div
      data-highlight="4"
      className="relative mt-4 flex w-fit items-center border-4 border-transparent bg-white px-4 pl-4 md:pl-[44px]"
      style={{
        letterSpacing: '0.42px',
        backgroundColor: secondaryColor,
        color: isSecondaryColorDark ? 'white' : 'black',
      }}
    >
      <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-gray-400 bg-white">
        <img
          alt={domain}
          className="rounded-full !object-contain"
          height="50"
          src={imgUrl}
          width="50"
        />
      </div>
      <span className="whitespace-nowrap pl-3">ADMIT ONE</span>
      <span className="mx-2">|</span>
      <input
        placeholder="Add your name here"
        type="text"
        className={`w-[120px] rounded ${isSecondaryColorDark ? 'bg-black/20' : 'bg-white/20'} px-2 py-1 outline-none placeholder:text-black md:w-auto`}
        style={{ color: isSecondaryColorDark ? 'white' : 'black' }}
      />
    </div>
  )
}
