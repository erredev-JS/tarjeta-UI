import useModalStore from '../../../store/modalStore';
import usePaymentStore from '../../../store/paymentStore';
import style from './PaymentsModal.module.css'
export const PaymentsModal = () => {

    const {setNotVisible} = useModalStore()

    const {unsetActivePayment, activePayment} = usePaymentStore()

  return (
    <div className={style.modal}>
        <button className={style.modalButton} onClick={() => {
          
          setNotVisible()
          unsetActivePayment()

        }}>❌</button>
        <div className={style.modalText}>

        <h1>Merchant: {activePayment?.merchant}</h1>
        <p>Date: {activePayment?.date}</p>
        <p>Installment: {activePayment?.installment}</p>
        <p>Status: {activePayment?.status}</p>
        <p>Amount: {`${activePayment?.amount}`}</p>
        </div>
    </div>
  );
};