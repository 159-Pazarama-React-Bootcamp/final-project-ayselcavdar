import styles from './Applications.module.css';

const ThanksMessage = () => {
  return (
    <div className={styles['message-container']}>
      <p>Teşekkürler! Başvurunuz başarıyla alınmıştır.</p>
      <p>
        Başvuru durumunuzu aşağıda size verilen başvuru kodu ile sorgulayabilir
        veya detaya tıklayarak öğrenebilirsiniz.
      </p>
    </div>
  );
};

export default ThanksMessage;
