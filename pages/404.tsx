import { Logo } from "../components/Logo";
import { useLocale } from "../hooks/locale";
import style from "../styles/ErrorMessage.module.scss";

export default function Custom404() {
  const { strings } = useLocale("notFound");

  return (
    <div className={style.errorMessage}>
      <div className="error-message--inner-container">
        <Logo />
        <p>{strings.message}</p>
        <a href="https://indays.app">{strings.action}</a>
      </div>
    </div>
  );
}
