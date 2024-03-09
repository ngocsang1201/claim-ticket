import { useAppContext } from '../../hooks/use-context'

type TicketEventDetailsProps = {
  date: string
  time: string
}

export default function TicketEventDetails({ date, time }: TicketEventDetailsProps) {
  const { state } = useAppContext()
  const { isPrimaryColorDark } = state.color
  const textColor = isPrimaryColorDark ? 'white' : 'black'

  return (
    <div
      className="relative mt-2 flex items-center border-4 border-transparent px-4 md:px-11"
      style={{ color: textColor }}
      data-highlight="3"
    >
      <span className="text-lg">{date}</span>
      <span className="mx-3 text-lg">/</span>
      <span className="text-lg">{time}</span>
    </div>
  )
}
