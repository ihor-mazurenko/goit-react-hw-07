import css from './SearchBox.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice';


export default function SearchBox() {
   const dispatch = useDispatch();
  const filter = useSelector((state) => state.filters.name);

  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

    return (
        <div className={css.container}>
            <p>Find contacts by name</p>
            <input
                typeof="text"
                value={filter}
                onChange={handleChange}
                className={css.field}/>
        </div>
    )
};