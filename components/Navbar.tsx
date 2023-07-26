import styles from "@/styles/Home.module.css"
//@ts-ignore
function Navbar(){
    return(
        <>
            <div className={styles.navbar}>
                <div className={styles.logo}>
                    <a href="/entries">
                        <img src="/citsa logo.png" alt="CITSA logo" />
                    </a>
                    <h2>CITSA UCC</h2>
                </div>
                <div className={styles.name}>
                    <p>Computer Science and Information Technology <br/> Student Association</p>
                </div>
            </div>           
        </>
    );
}

export default Navbar;