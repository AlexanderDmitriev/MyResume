import text from "./localization.json";

/////Задаю по умолчанию язык
export const locale = {
  lang: "en-US",
};

locale.lang = localStorage.getItem("LOCALE")
  ? localStorage.getItem("LOCALE")
  : "en-US";

let currentLanguage;

const refs = {
  //Мои кнопочки переключения языка
  localizationForm: document.querySelector(".header-localization"),
  localeEn: document.querySelector(".header-localization__english"),
  localeRu: document.querySelector(".header-localization__russian"),
  localeUa: document.querySelector(".header-localization__ukrainian"),
};

const chooseLocaleHandler = (event) => {
  //Слушатель события нажатия на кнопке смены языка
  if (event.target === refs.localeEn) {
    currentLanguage = "en-US";
  } else if (event.target === refs.localeRu) {
    currentLanguage = "ru-RU";
  } else if (event.target === refs.localeUa) {
    currentLanguage = "uk-UA";
  } else return;

  locale.lang = currentLanguage;
  //Записываю параметр локали в локальное хранилище для того, чтобы у пользователя не сбивались настройки языка
  localStorage.setItem("LOCALE", locale.lang);
  location.reload();
};

refs.localizationForm.addEventListener("click", chooseLocaleHandler);

// Replace the inner text of the given HTML element
// with the translation in the active locale,
// corresponding to the element's data-i18n-key
export function translateElement(element) {
  const key = element.getAttribute("data-locale");
  const translation = text[locale.lang][key];
  element.innerText = translation;
}
