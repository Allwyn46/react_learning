import './App.css'
import Compound from './components/Compound'
import DataFetching from './components/DataFetching'
import FormComponent from './components/FormComponent'

function App() {
    return (
        <>
            <FormComponent />
            <section className="mt-4">
                <DataFetching />
            </section>

            <section className="mt-10">
                <Compound />
            </section>
        </>
    )
}

export default App
