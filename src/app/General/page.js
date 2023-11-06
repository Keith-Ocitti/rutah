const { default: Header } = require("../components/header");
const { default: GeneralServices } = require("../screens/GeneralServices");

const GeneralPage = () => {
  return (
    <>
      <Header />
      <GeneralServices />
    </>
  );
};

export default GeneralPage;
