import React from "react";
import { useLocale } from "../hooks/locale";
import { useNeedHelp } from "../hooks/needHelp";
import style from "../styles/NeedHelp.module.scss";

export const NeedHelp: React.FC = () => {
  const { strings } = useLocale("home");
  const { shouldBeVisible } = useNeedHelp();

  if (!shouldBeVisible) {
    return null;
  }

  return (
    <a
      itemScope
      type="button"
      target="_blank"
      itemProp="helper"
      rel="noreferrer"
      className={style.contactUsHelper}
      href="https://wa.me/5519997494445"
    >
      {strings.general.needHelp}
    </a>
  );
};
