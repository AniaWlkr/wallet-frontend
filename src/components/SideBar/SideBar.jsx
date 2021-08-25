import Navigation from '../Navigation';
import Currency from '../Currency';

export default function SideBar() {
  return (
    <div>
      <p>SideBar</p>
      <Navigation />
      <p>Balance</p>
      <Currency />
    </div>
  );
}
