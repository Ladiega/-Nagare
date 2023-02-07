import dynamic from 'next/dynamic'
export default function Intro(){
	const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });// error de hidratacion del React-player.

    return(
        <div>
					<ReactPlayer 
                className={`video`}
                url="video/videotest.mp4"                
                width='100%'
                height=''    

                loop={true}
                playing={true}
                muted={true}
                />
        
				</div>
    )
}