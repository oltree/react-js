import Header from "../Header";

const Layouts = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default Layouts;
