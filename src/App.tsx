import './App.css'
import DataFetching from './components/DataFetching'
import FormComponent from './components/FormComponent'

function App() {
    return (
        <>
            <FormComponent />
            <section className="mt-4">
                <DataFetching />
            </section>
        </>
    )
}

export default App
