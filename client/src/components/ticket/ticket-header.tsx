import { useAppContext } from '../../hooks/use-context'
import BuilderLogo from '../builder-logo'

type TicketHeaderProps = {
  title: string
}

export default function TicketHeader({ title }: TicketHeaderProps) {
  const { state } = useAppContext()
  const { isPrimaryColorDark } = state.color
  const textColor = isPrimaryColorDark ? 'white' : 'black'

  return (
    <div className="relative border-4 border-transparent" data-highlight="2">
      <div className="flex items-center justify-between px-4 md:px-11">
        <BuilderLogo fill={textColor} />
        <span className="text-sm" style={{ color: textColor }}>
          An AI launch event <b className="hidden md:inline">accelerate.builder.io</b>
        </span>
      </div>
      <h3 className="mt-4 px-4 text-4xl md:px-11 md:text-6xl" style={{ color: textColor }}>
        {title} &gt;&gt;&gt;
      </h3>
    </div>
  )
}
