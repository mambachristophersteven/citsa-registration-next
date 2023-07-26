import Navbar from "@/components/Navbar";
import EntriesContent from "@/components/EntriesContent";
import styles from '@/styles/Entries.module.css'
import Motto from "@/components/Motto";
function Entries(){
    return(
        <>
            <div className={styles.container}>
                <Navbar/>
                <EntriesContent/>
                <Motto/>
            </div>
            
        </>
    );
}

export default Entries;