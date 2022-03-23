import { FormattedMessage } from "react-intl";

const HOME = (props: any): React.ReactElement => {
  return (
    <>
      <div className="Home">{props.children}</div>
      <p></p>
      <FormattedMessage id="app.content" defaultMessage="Learn React" />
    </>
  );
};
export default HOME;
