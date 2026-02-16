// import Form from './components/Form'
import './App.css'
import FormProvider from './components/context/FormProvider'
import Steps from './components/multistepForm/Steps'
function App() {


  return (
<FormProvider>
  <Steps/>
</FormProvider>
  )
}

export default App
