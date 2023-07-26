import styles from '@/styles/Recorded.module.css'
function RecordedContent(){
    return(
        <>
            <div className={styles.content}>
                <div className={styles.check}>
                    <div className={styles.checklogo}>
                        <img src="/checkmark.png" alt="" />
                    </div>
                    <div className={styles.check_text}>Entry Recorded!</div>
                </div>
                <div className={styles.button}>
                    <a href="/"><button>back to home</button></a>
                </div>
            </div>
        </>
    )   
}

export default RecordedContent;