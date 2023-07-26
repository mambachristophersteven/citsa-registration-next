import styles from '@/styles/About.module.css';
import FormContent from '@/components/FormContent';
import Navbar from '@/components/Navbar';

function About(){
    return(
        <>
            <div className={styles.container}>
                <Navbar/>
                <FormContent/>
            </div>
        </>
    )
}

export default About;