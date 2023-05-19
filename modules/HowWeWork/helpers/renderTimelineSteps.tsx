import { v4 as uuid } from "uuid";

export const renderTimelineSteps = (steps: Record<any, any>[]): React.ReactNode => {
  return steps.map((step) => {
    const uniqueKey = uuid();

    return (
      <li itemProp="itemListElement" key={uniqueKey} className="timeline--item">
        <div className="timeline--item--visual-guide">
          <span className="timeline--item--visual-guide--circle" />
          <span className="timeline--item--visual-guide--connector" />
        </div>

        <div className="timeline--item--content">
          <h3 itemProp="title">{step.title}</h3>
          <p itemProp="description">{step.description}</p>
        </div>
      </li>
    );
  });
};
