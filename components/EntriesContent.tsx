import styles from '@/styles/Entries.module.css'

function EntriesContent(){
    return(
        <>
            <div className={styles.content}>
                <div className={styles.heading}>
                    <h1>Current Number of <br /><span>recorded</span> entries</h1>
                </div>
                <div className={styles.levels_numbers}>
                    <div className={styles.level_number1}>
                        <a href="view">
                            <div className={styles.number}>
                                <p>199</p>
                            </div>
                        </a>
                        <div className={styles.level_name}>
                            <p>level 100's</p>
                        </div>
                    </div>
                    <div className={styles.level_number2}>
                        <div className={styles.number}>
                            <p>89</p>
                        </div>
                        <div className={styles.level_name}>
                            <p>level 200's</p>
                        </div>
                    </div>
                    <div className={styles.level_number3}>
                        <div className={styles.number}>
                            <p>123</p>
                        </div>
                        <div className={styles.level_name}>
                            <p>level 300's</p>
                        </div>
                    </div>
                    <div className={styles.level_number4}>
                        <div className={styles.number}>
                            <p>45</p>
                        </div>
                        <div className={styles.level_name}>
                            <p>level 400's</p>
                        </div>
                    </div>
                </div>
                <div className={styles.total_entries}>
                    <div className={styles.number}>
                        <p>457</p>
                    </div>
                    <div className={styles.total_text}>
                        <p>total entries</p>
                    </div>
                </div>
                <div className={styles.home_button}>
                    <a href="/">
                        <button>back to home</button>
                    </a>
                </div>
            </div>
        </>
    )
}

export default EntriesContent;