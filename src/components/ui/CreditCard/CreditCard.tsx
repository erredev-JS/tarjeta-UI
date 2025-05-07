import style from './CreditCard.module.css'

export const CreditCard = () => {
  return (
    <div className={style.card}>
        <div className={style.cardTop}>

        <img src='./assets/visa.svg' className={style.icon} />
        <p className={style.cardNumber}>1234 5678 9012 2416</p>
        </div>
        <div className={style.cardBottom}>
        <p className={style.name}>Name:<br />John Diego</p>

        <p className={style.cardDate}>Expire date:<br />02/25</p>
        </div>
    </div>
  );
};