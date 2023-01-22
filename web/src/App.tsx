//import { Habit } from "./components";
import { Header, SummaryTable } from 'components'
import './styles/global.css'

const App = () => (
    <div className='w-screen h-screen flex justify-center items-center'>
        <div className="w-full max-width-5xl px-6 flex flex-col gap-16">
            <Header />
            <SummaryTable/>
        </div>
    </div>
)

export default App
