namespace Header {
  interface Props {
    breadcrumbs?: string[];
  }

  interface MenuItem {
    label: string;
    action: string;
    type: "link" | "action";
  }
}
