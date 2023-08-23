import { useSelector, useDispatch } from 'react-redux';

import { toggleFilter } from 'redux/filter/slice';
import { selectFilter } from 'redux/selectors';

function Filter() {
  const filter = useSelector(selectFilter);

  const dispatch = useDispatch();

  return (
    <div>
      <p>Find contact by name</p>
      <input
        type="text"
        value={filter}
        onChange={e => {
          dispatch(toggleFilter(e.target.value));
        }}
      />
    </div>
  );
}

export default Filter;
