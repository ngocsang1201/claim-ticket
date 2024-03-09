import { useAppContext } from '../../hooks/use-context'
import TicketBanner from './ticket-banner'
import TicketEventDetails from './ticket-event-details'
import TicketHeader from './ticket-header'
import TicketNumber from './ticket-number'

const randomTicketNumber = (length = 7, num = 4) => {
  return String(Math.floor(Math.random() * Math.pow(10, num) - 1) + 1).padStart(length, '0')
}

export default function Ticket() {
  const { state } = useAppContext()
  const { primaryColor, isPrimaryColorDark } = state.color

  const textColor = isPrimaryColorDark ? 'white' : 'black'

  return (
    <div className="relative z-20 mx-auto">
      <div data-highlight="1" className="relative mx-auto flex border-4 border-transparent">
        <div className="ml-[5px] flex w-[calc(130vw-10px)] origin-left scale-75 md:ml-0 md:w-full md:scale-100">
          <div
            className="h-full grow rounded-bl-lg rounded-tl-lg border border-r-0 border-[#5B5F7A] bg-[#151934] pb-3 pt-7"
            style={{
              boxShadow: `${primaryColor} 4px 0px`,
              backgroundColor: primaryColor,
              color: textColor,
            }}
          >
            <TicketHeader title="Accelerate" />
            <TicketEventDetails date="March 13, 2024" time="10 AM PST" />
            <TicketBanner />
          </div>
          <TicketNumber number={randomTicketNumber()} />
        </div>
      </div>
    </div>
  )
}
