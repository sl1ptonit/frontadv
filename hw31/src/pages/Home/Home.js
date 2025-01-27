import BugrerImg from '../../assets/images/mini-ham.jpg';
import {ReactComponent as LogoSvg} from '../../assets/images/logo.svg';
import { Button } from 'antd';
import styles from "./Home.module.scss";

function Home() {
    return (
        <div className={styles.header}>
            <h1>Home</h1>
            <img src={BugrerImg} alt="Bugrer" />
            <LogoSvg/>
            <Button type="primary">Primary Button</Button>
        </div>
    );
}

export default Home;