import styles from '@/styles/View.module.css'
import { useEffect, useState } from 'react'

function ViewContent(){
    const [users, setUsers] = useState<any>([])
    
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res)=>res.json())
        .then((data)=>{
            setUsers(data)
            console.log(data)
        })
    }, [])
    return(
        <>
            <div className={styles.content}>
                <div className={styles.heading}>
                    <p>Current entries for<br />level <span>100’s</span></p>
                </div>
                <div className={styles.level_number1}>
                    <div className={styles.number}>
                        <p>199</p>
                    </div>
                </div>
                <div className={styles.table_box}>
                    <div className={styles.blue_box}></div>
                    <div className={styles.orange_box}></div>
                    <div className={styles.pink_box}></div>
                    <div className={styles.yellow_box}></div>
                    <div className={styles.table}>
                        <table>
                            <thead>
                                <tr>
                                    <th>No.</th>
                                    <th>Image</th>
                                    <th>Name</th>
                                    <th>Index No.</th>
                                    <th>Email</th>
                                    <th>Username</th>
                                    <th>Password</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    users.map((user:any, index:number)=>(
                                        <tr>
                                            <td>{index+1}</td>
                                            <td><img src={user.image}/></td>
                                            <td>{user.name}</td>
                                            <td>{user.index_number}</td>
                                            <td>{user.email}</td>
                                            <td>{user.username}</td>
                                            <td>{user.address.city}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className={styles.button}>
                    <a href="/"><button>back to home</button></a>
                </div>
            </div>

        </>
    )
}

export default ViewContent;