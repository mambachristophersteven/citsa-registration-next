import Navbar from "@/components/Navbar";
import Content from "@/components/Content";
import styles from "@/styles/Home.module.css"

function Container(){
    return(
        <>
            <div className={styles.container}>
                <Navbar/>
                <Content/>
            </div>           
        </>
    );
}

export default Container;