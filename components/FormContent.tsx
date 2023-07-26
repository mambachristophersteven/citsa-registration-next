import styles from '@/styles/About.module.css';
import Form from '@/components/Form';
import Motto from '@/components/Motto';
function FormContent(){
    return(
        <>
            <div className={styles.content}>
                <Form/>
                <Motto/>
                
            </div>
        </>
    );
}

export default FormContent;