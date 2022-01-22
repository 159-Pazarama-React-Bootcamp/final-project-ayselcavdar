import React from 'react';

const ThanksMessage = () => {
  return (
    <div
      style={{
        backgroundColor: "#CFF4FC",
        fontWeigth: "500",
        fontSize: "1.2rem",
        width: "80%",
        borderRadius: "10px",
        color: "#2B444E",
      }}
    >
      <p>Teşekkürler! Başvurunuz başarıyla alınmıştır.</p>
      <p>
        Başvuru durumunuzu aşağıda size verilen başvuru kodu ile sorgulayabilir
        veya detaya tıklayarak öğrenebilirsiniz.
      </p>
    </div>
  );
};

export default ThanksMessage;
