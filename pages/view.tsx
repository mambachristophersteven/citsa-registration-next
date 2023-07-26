import Motto from '@/components/Motto';
import Navbar from '@/components/Navbar';
import styles from '@/styles/View.module.css'
import ViewContent from '@/components/ViewContent';
function View(){
    return(
        <>
            <div className={styles.container}>
                <Navbar/>
                <ViewContent/>
                <Motto/>
            </div>
        </>
    )
}

export default View;