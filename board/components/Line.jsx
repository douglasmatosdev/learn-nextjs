import Subdivision from './Subdivision'
import style from '../styles/Line.module.css'

export default function Line(props) {
    return (
        <div className={style.line}>
            <Subdivision black={props.black} />
            <Subdivision black={!props.black} />
            <Subdivision black={props.black} />
            <Subdivision black={!props.black} />
            <Subdivision black={props.black} />
            <Subdivision black={!props.black} />
            <Subdivision black={props.black} />
            <Subdivision black={!props.black} />
        </div>
    )
}