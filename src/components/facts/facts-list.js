import { useSelector } from 'react-redux';
import { selectAmount } from '../../redux/amountSlice';
import Fact from './fact';

function FactsList() {
  const facts = [
    { id: 1, text: 'Прообразом Чубакки стал пес режиссера.' },
    { id: 2, text: 'Актерам разрешили подобрать любимый цвет для своих световых мечей.' },
    { id: 3, text: 'В фильме «Звездные войны-V: Империя наносит ответный удар» среди космических объектов можно заметить парящий ботинок и картофелину.' },
    { id: 4, text: 'Дыхание Дарта Вейдера — это звуки дыхательной маски, подключенной к аквалангу.' },
    { id: 5, text: 'Планета Татуин названа в честь реального города в Тунисе – стране, где происходила часть съемок' },
  ];

  const amount = useSelector(selectAmount);

  return (
    <ul>
      {facts.slice(0, amount).map(fact => <Fact key={fact.id} text={fact.text} />)}
    </ul>
  );
}

export default FactsList;