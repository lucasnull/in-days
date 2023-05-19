import React from "react";
import Image from "next/image";
import { useLocale } from "../../hooks/locale";
import { useAutoScroll } from "./hooks/auto-scroll";
import styles from "../../styles/Customers.module.scss";
import ScrollContainer from "react-indiana-drag-scroll";

type CustomerLogo = { img: string; w: number };

const CUSTOMERS_IMAGES: CustomerLogo[] = [
  { img: "/assets/customers/apache-arrow.webp", w: 138.5 },
  { img: "/assets/customers/dremio.webp", w: 150.5 },
  { img: "/assets/customers/iceberg.webp", w: 213 },
  { img: "/assets/customers/io-insure.webp", w: 174.5 },
  { img: "/assets/customers/layers.webp", w: 210 },
  { img: "/assets/customers/zoom.webp", w: 210.5 },
];

const Customers: React.FC = () => {
  const { strings } = useLocale("home");
  const listRef: any = React.useRef(null);
  const scrollRef: any = React.useRef(null);
  const listProps = { ref: listRef, onMouseDown, onMouseUp };
  const { enable, interrupt } = useAutoScroll(scrollRef);

  function renderImage(image: CustomerLogo) {
    const { img, w } = image;

    return (
      <li key={img}>
        <Image width={w} height={50} alt="Logo" src={img} loading="eager" quality={100} itemProp="icon" />
      </li>
    );
  }

  function onMouseDown(e: React.MouseEvent) {
    if (e.target !== listRef.current) {
      interrupt();
    }
  }

  function onMouseUp() {
    enable();
  }

  return (
    <section itemScope className={styles.customers}>
      <div className="customers--content-container">
        <h2 itemProp="title">{strings.blocks.customers.title}</h2>
        <p itemProp="description">{strings.blocks.customers.subtitle}</p>

        <div className="customers--list" {...listProps}>
          <ScrollContainer ref={scrollRef} className="customer-list--container">
            <ul>{CUSTOMERS_IMAGES.map(renderImage)}</ul>
          </ScrollContainer>
        </div>
      </div>
    </section>
  );
};

export default Customers;
