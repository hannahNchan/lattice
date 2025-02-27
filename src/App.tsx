import { Amplify } from 'aws-amplify';
import AppProvidersWrapper from "./components/wrappers/AppProvidersWrapper"
import configureFakeBackend from "./helpers/fake-backend"
import AppRouter from "./routes/router"
import outputs from '../amplify_outputs.json';

import '@/assets/scss/style.scss'

configureFakeBackend()

function App() {
  return (
    <AppProvidersWrapper>
      <AppRouter />
    </AppProvidersWrapper>
  )
}

Amplify.configure(outputs);

export default App
