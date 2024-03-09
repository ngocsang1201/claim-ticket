import { useAppContext } from '../../hooks/use-context'

type TicketNumberProps = {
  number: string
}

export default function TicketNumber({ number }: TicketNumberProps) {
  const { state } = useAppContext()
  const { primaryColor, secondaryColor } = state.color

  return (
    <div
      className="relative border-4 border-transparent bg-white px-4 py-7 text-center text-black"
      data-highlight="5"
      style={{
        writingMode: 'vertical-rl',
        textOrientation: 'mixed',
        borderLeft: `8px dashed ${primaryColor}`,
      }}
    >
      <div className="text-[10px]">Ticket No.</div>
      <span className={`border-l-4 text-2xl`} style={{ borderColor: secondaryColor }}>
        #{number}
      </span>
    </div>
  )
}
