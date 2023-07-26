import styles from '@/styles/About.module.css'
function Form(){
    return(
        <>
            <div className={styles.form_box}>
                <div className={styles.blue_box}></div>
                <div className={styles.blue_box1}></div>
                <div className={styles.pink_box}></div>
                <div className={styles.yellow_box}></div>
                <div className={styles.close}>
                    <a href="/"><button><img src="/close.png" alt="close button" /></button></a>
                </div>
                <div className={styles.welcome}>
                    <p>hello, <span>CITSA</span> member</p>
                    <h1>register</h1>
                </div>
                <div className={styles.form}>
                    <form action="#" method="">
                        <div className={styles.input_fields}>
                            <label htmlFor="name">name</label>
                            <input type="text" name="name" id="name" placeholder='Nunoo Christopher Steven'/>
                        </div>
                        <div className={styles.input_fields}>
                            <label htmlFor="email">email</label>
                            <input type="text" name="email" id="email" placeholder='astevoo24@gmail.com'/>
                        </div>
                        <div className={styles.input_fields}>
                            <label htmlFor="index">index number</label>
                            <input type="text" name="index" id="index" placeholder='PS/CSC/19/0062'/>
                        </div>
                        <div className={styles.input_fields}>
                            <label htmlFor="name">level</label>
                            <input type="text" name="level" id="level" placeholder='400'/>
                        </div>
                        <div className={styles.input_fields}>
                            <label htmlFor="password">password</label>
                            <input type="text" name="password" id="password" placeholder='***********'/>
                        </div>
                        <div className={styles.submit_button}>
                            <a href="/recorded"><input type="button" value="submit" /></a>
                        </div>
                    </form>
                </div>                
            </div>
        </>
    )
}

export default Form;