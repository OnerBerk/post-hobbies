import Link from 'next/link';
import { ILink } from '../../interface/interface';
import styles from "../../styles/ui-link.module.scss"

const UiLink=({title,url}:ILink)=>{
  return(
      <div className={styles.linkMain}><Link href={url}><a>{title}</a></Link></div>
  )
}
export default UiLink