import { useDispatch, useSelector } from 'react-redux';
import { changeAmount, selectAmount } from '../../redux/amountSlice';

function Input() {
  const amount = useSelector(selectAmount);
  const dispatch = useDispatch();

  return (
    <div>
      <input type='number' min='1' max='5' step='1' value={amount} onChange={e => dispatch(changeAmount(e.target.value))} />
    </div>
  );
}

export default Input;