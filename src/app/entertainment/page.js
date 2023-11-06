const { default: Header } = require("../components/header");
const { default: Entertainment } = require("../screens/Entertainment");

const EntertainmentPage = () => {
  return (
    <>
      <Header />
      <Entertainment />
    </>
  );
};

export default EntertainmentPage;
