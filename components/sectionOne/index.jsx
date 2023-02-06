import styles from './sectionOne.module.css'

export default function SectionOne(){
    return(
        <div>
       		<div className={styles.video_container}>
       			<video  controls autoPlay loop width='100%' src={require('../../public/video/nagare.mp4')} />
        	</div>
        
        </div>
    )
}