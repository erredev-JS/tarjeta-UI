import useModalStore from '../../../store/modalStore';
import style from './PaymentsModal.module.css'
export const PaymentsModal = () => {
    const {setNotVisible} = useModalStore()
  return (
    <div className={style.modal}>
        <button className={style.modalButton} onClick={() => setNotVisible()}>❌</button>

    </div>
  );
};