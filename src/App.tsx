import { LatestTransactionsScreen } from "./components/screens/LatestTransactionsScreen/LatestTransactionsScreen"
import { PaymentsModal } from "./components/ui/PaymentsModal/PaymentsModal"
import useModalStore from "./store/modalStore"


function App() {

  const {isVisible} = useModalStore()
  return (
    <div>
      <LatestTransactionsScreen/>
      {isVisible && <PaymentsModal/>}
    </div>
  )
}

export default App
