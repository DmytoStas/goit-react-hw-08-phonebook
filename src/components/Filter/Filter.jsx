import { TextField } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';

import { toggleFilter } from 'redux/filter/slice';
import { selectFilter } from 'redux/selectors';

function Filter() {
  const filter = useSelector(selectFilter);

  const dispatch = useDispatch();

  return (
    <div>
      <TextField
        type="text"
        label="Find contact by name"
        value={filter}
        onChange={e => {
          dispatch(toggleFilter(e.target.value));
        }}
        margin="dense"
        variant="outlined"
        size="small"
        fullWidth
      />
    </div>
  );
}

export default Filter;
