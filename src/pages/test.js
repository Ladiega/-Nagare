
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
 
import Image from 'next/image'
import nagare from '../../public/nagare.png'

export default function  DemoCarousel() {
    
        return (
			<div>
            <Carousel>
                <div>
                    <Image src={nagare} alt='nagare'  />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <Image src={nagare} alt='nagare'  />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <Image src={nagare} alt='nagare' />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
			</div>
        );
		
    }



