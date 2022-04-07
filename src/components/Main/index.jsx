import styles from './styles.module.css'
import { logout } from '../../features/userSlice';
import { useDispatch } from 'react-redux';

const Main = () => {

    const dispatch = useDispatch();

    const handleLogout = () => {
        localStorage.removeItem("token");
        dispatch(logout());
    }

    return (
        <div className={styles.main_container}>
            <nav className={styles.navbar}>
                <h1>
                    MyGym
                </h1>

                <button className={styles.white_btn} onClick={handleLogout}>
                    Sair
                </button>
            </nav>
        </div>
    )
}

export default Main;