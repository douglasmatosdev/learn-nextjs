import styles from '../../../styles/Game.module.css'
import { useEffect, useState } from "react"
import Door from "../../../components/Door"
import { createDoors, updateDoors } from "../../../functions/doors"
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Game() {
    const router = useRouter()

    const [doors, setDoors] = useState(createDoors(2, 2))

    useEffect(() => {
       
        const doors = +router.query.doors
        const hasGift = +router.query.hasGift

        setDoors(createDoors(doors, hasGift))
    }, [router?.query])

    function renderDoors() {
        return doors.map(door => {
            return <Door
                key={door.number}
                value={door}
                onChange={newDoor => setDoors(updateDoors(doors, newDoor))} />
        })
    }

    return (
        <div id={styles.game}>
            <div className={styles.doors}>
                {renderDoors()}
            </div>
            <div className={styles.buttons}>
                <Link href="/" passHref>
                    <button>RESTART</button>
                </Link>
            </div>
        </div>
    )
}