import Link from "next/link"
import Image from "next/image"




export default function Footer(){
    return(
        <div>
          <footer>
            <p>footer</p>
            <div className="icons-container">
              <div className="instagram-container">
                <Link href='/' target='_blank'>
                  <Image
                  className="instagram-icon"
                  alt="Instagram"
                  src=""
                  />
                </Link>
              </div>
            </div>
          </footer>
        </div>
    )
}