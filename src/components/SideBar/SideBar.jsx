import Navigation from '../Navigation';
import Currency from '../Currency';
import Balance from '../Balance';

export default function SideBar() {
  return (
    <div>
      <p>SideBar</p>
      <Navigation />
      <Balance />
      <Currency />
    </div>
  );
}
