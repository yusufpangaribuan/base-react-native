import ReactNative      from "react-native";
import ReactNativeI18n  from "react-native-i18n";
import en               from "@languages/en.json";

ReactNativeI18n.fallbacks     = true;
ReactNativeI18n.translations  = {
  en
};


const currentLanguage        = ReactNativeI18n.currentLocale();
export const isRTL           = currentLanguage.indexOf("he") === 0  || currentLanguage.indexOf("ar") === 0;

ReactNative.I18nManager.allowRTL(isRTL);

export default (name, params = {}) => {
  return ReactNativeI18n.t(name, params);
};