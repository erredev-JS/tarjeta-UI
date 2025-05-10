import {create} from 'zustand'

interface IModalStore  {
    isVisible: boolean,
    setIsVisible: () => void
    setNotVisible: () => void
}

const useModalStore = create<IModalStore> ((set) => ({
    isVisible: false,
    setIsVisible: () => set (() => ({isVisible: true})),
    setNotVisible: () => set (() => ({isVisible: false}))
    
}))

export default useModalStore