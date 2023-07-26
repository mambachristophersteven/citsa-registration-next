import styles from "@/styles/Home.module.css"
//@ts-ignore
function Content(){
    return(
        <>
            <div className={styles.content}>
                <div className={styles.welcome}>
                    <h1>Welcome to <br/>the <span>citsa</span> website<br/> registration portal</h1>
                    <a href="/about">
                        <button>get started</button>
                    </a>
                </div>
                <div className={styles.motto}>
                    <p>Promoting <span>Development</span> through <span className={styles.tech}>technology</span></p>
                </div>
            </div>
        </>
    )
}

export default Content;