import React from "react";
import team from "./team.json";
import Image from "next/image";
import { useLocale } from "../../hooks/locale";
import { useSectionsRefs } from "../../hooks/refs";
import { useNeedHelp } from "../../hooks/needHelp";
import styles from "../../styles/Contact.module.scss";
import { useIsInViewport } from "../../hooks/viewport";

const Contact: React.FC = () => {
  const { strings } = useLocale("contact");
  const { registerRef } = useSectionsRefs();
  const renderTeam = () => team.map(renderTeamMember);

  const ref = React.useRef<HTMLElement>(null);
  const { isIntersecting } = useIsInViewport(ref);
  const { setContactVisibility } = useNeedHelp();

  React.useEffect(() => {
    setContactVisibility(isIntersecting);
  }, [isIntersecting]);

  React.useEffect(() => {
    registerRef("contact", ref);
  }, [ref]);

  const renderTeamMember = (member: any) => {
    const { avatar, name, whatsapp, email, whatsappLink } = member;

    return (
      <li key={avatar}>
        <div>
          <Image
            fill
            alt={name}
            quality={100}
            loading="lazy"
            itemProp="icon"
            objectFit="cover"
            src={`/assets/${avatar}.jpg`}
          />
        </div>

        <div>
          <span>{name}</span>

          <a href={`mailto:${email}`} target="_blank" rel="noreferrer">
            {email}
          </a>

          <a href={whatsappLink} target="_blank" rel="noreferrer">
            Whatsapp: {whatsapp}
          </a>
        </div>
      </li>
    );
  };

  return (
    <section ref={ref} itemScope itemProp="contact" className={styles.contact}>
      <div className="contact--content-container">
        <p itemProp="title" className="section-title">
          {strings.title}
        </p>

        <p itemProp="info" className="contact--description">
          {strings.description}
        </p>

        <ul className="contact--team-list">{renderTeam()}</ul>
      </div>
    </section>
  );
};

export default Contact;
