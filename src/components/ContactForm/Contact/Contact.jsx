import { useDispatch } from 'react-redux';
import { removeContactAction } from 'store/slices/contacts/slice';

export const Contact = props => {
  const dispatch = useDispatch();

  function handleDelete(e) {
    const nameToDelete = e.target.parentNode.firstChild.textContent.slice(
      0,
      -2
    );

    dispatch(removeContactAction(nameToDelete));
  }

  return (
    <li key={props.id}>
      <p>{props.name}: </p>
      <p>{props.number}</p>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
};
