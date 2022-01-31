import Title from "./Title";

const Header = (props) => {
  return (
    <div className="Header">
      <Title heading={props.title} />
    </div>
  );
};

export default Header;
