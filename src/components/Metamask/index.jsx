import Profile from "./Profile";
import Account from "./Account";
import Network from "./Network";

function Metamask() {
  return (
    <div className="metamask-container">
      <Profile />
      <Account />
      <Network />
    </div>
  );
}

export default Metamask;
