import Background from './components/background'
import DomainInput from './components/domain-input'
import Ticket from './components/ticket'
import Title from './components/title'

function App() {
  return (
    <Background>
      <div className="relative">
        <div className="opacity-100 transition-opacity">
          <div className="mx-auto mt-[10vh] flex flex-col gap-2 transition-opacity md:gap-6">
            <Title />
            <DomainInput />
            <Ticket />
          </div>
        </div>
      </div>
    </Background>
  )
}

export default App
