export const translateText = async (text) => {
  const apiKeyTranslate = "AIzaSyA-kk44XfxazRCBBgYzT6FSHChOxS5uIHk"; // API-ключ для Google Translate
  const url = `https://translation.googleapis.com/language/translate/v2`;
  const params = new URLSearchParams({
    q: text,
    target: "ru", // Язык перевода
    key: apiKeyTranslate, // API-ключ для перевода
  });

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: params,
    });

    const data = await response.json();
    if (data.error) {
      console.error("Ошибка при переводе:", data.error);
      return "Ошибка перевода"; // Возвращаем ошибку
    } else {
      return data.data.translations[0].translatedText; // Возвращаем переведенный текст
    }
  } catch (error) {
    console.error("Ошибка при отправке запроса:", error);
    return "Ошибка перевода"; // Возвращаем ошибку в случае сбоя запроса
  }
};


