import {create} from 'zustand'
import { IPayment } from '../types/IPayment'

interface IPaymentStore  {
    activePayment: IPayment | null,
    setActivePayment: (payment : IPayment) => void
    unsetActivePayment: () => void
}

const usePaymentStore = create<IPaymentStore> ((set) => ({
    activePayment: null,
    setActivePayment: (payment) => set (() => ({activePayment: payment})),
    unsetActivePayment: () => set (() => ({activePayment: null}))
    
}))

export default usePaymentStore