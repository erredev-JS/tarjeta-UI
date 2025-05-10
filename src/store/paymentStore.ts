import {create} from 'zustand'
import { IPayment } from '../types/IPayment'

interface IModalStore  {
    activePayment: IPayment | null,
    setActivePayment: () => void
    unsetActivePayment: () => void
}

const usePaymentStore = create<IModalStore> ((set) => ({
    activePayment: null,
    setIsVisible: () => set (() => ({isVisible: true})),
    setNotVisible: () => set (() => ({isVisible: false}))
    
}))

export default useModalStore