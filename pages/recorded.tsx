import styles from '@/styles/Recorded.module.css'
import Navbar from "@/components/Navbar";
import RecordedContent from '@/components/RecordedContent';
import Motto from '@/components/Motto';
function Recorded(){
    return(
        <>
            <div className={styles.container}>
                <Navbar/>
                <RecordedContent/>
                <Motto/>

            </div>
        </>
    );
}

export default Recorded;