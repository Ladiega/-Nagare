import Image from 'next/image'
import styles from './horarios.module.css'
import BanerW from '../../public/img/NagareBanerW.png'



export default function Horarios() {
	return (
		<div>
			<div className={styles.horario_container}>
				
				
				<div className={styles.header}>
					<Image
					alt='Nagare Baner'
					src={BanerW}
					className={styles.baner}
					width={300}
					/>
				</div>
				<div className={styles.horario_titulo}>
					<h1>HORARIOS</h1>
				</div>

				<div className={styles.columnas_container}>
				

				<div className={styles.horas}>
					<div>HORA</div>
					<div>7:00 AM</div>
					<div>9:00 AM</div>
					<div>4:30 PM</div>
					<div>6:00 PM</div>
					<div>7:00 PM</div>
					<div>8:00 PM</div>
				</div>

				<div className={styles.lunes_container}>
					<div>LUNES</div>
					<div>GI-BJJ</div>
					<div>PRIVADAS</div>
					<div>KIDS-BJJ NOGI</div>
					<div>PRINCIPIANTES NOGI</div>
					<div>FUNCIONAL</div>
					<div>NOGI-BJJ</div>
				</div>

				<div className={styles.martes_container}>
					<div>MARTES</div>
					<div>NOGI-BJJ</div>
					<div>PRIVADAS</div>
					<div>KIDS BJJ GI</div>
					<div>GI-BJJ CHICAS</div>
					<div>FUNCIONAL</div>
					<div>GI-BJJ</div>
				</div>

				<div className={styles.miercoles_container}>
					<div>MIERCOLES</div>
					<div>GI-BJJ</div>
					<div>PRIVADAS</div>
					<div>KIDS BJJ GI</div>
					<div>PRINCIPIANTES</div>
					<div>FUNCIONAL</div>
					<div>NOGI-BJJ</div>
				</div>

				<div className={styles.jueves_container}>
					<div>JUEVES</div>
					<div>NOGI-BJJ</div>
					<div>PRIVADAS</div>
					<div>KIDS BJJ GI</div>
					<div>GI-BJJ CHICAS</div>
					<div>FUNCIONAL</div>
					<div>GI-BJJ</div>
				</div>

				<div className={styles.viernes_container}>
					<div>VIERNES</div>
					<div>OPEN MAT</div>
					<div>PRIVADAS</div>
					
				</div>
				
				</div>
				<div className={styles.sabado_container}>
					<div className={styles.sabadohorario_container}>HORA
					<div>7:00 AM</div>
					<div>8:00 PM</div>
				</div>
					<div className={styles.sabadoclases_container}>SABADO
						<div>NOGI-BJJ CHICAS</div>
						<div>CONFLICTOS</div>
					</div>
				</div>
			
			</div>
		</div>
	);
}