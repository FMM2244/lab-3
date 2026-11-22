import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'

import PatientForm from "./components/PatientForm"

function App() {

  return (
    <>
		<h1>Patient Form</h1>
		<PatientForm />
    </>
  );
}

export default App
