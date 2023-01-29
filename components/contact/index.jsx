export default function Contact(){
    return(
        <div>
            Contact
            <form action="">
                <input type="text" name="name" id="name" placeholder="Enter your name" />
                <input type="email" name="email" id="emial" placeholder="Enter your email" />
                <textarea name="textarea" id="textarea" cols="30" rows="10" placeholder="Enter your message"></textarea>
                <button type="submit">SEND</button>
            </form>

        </div>
    )
}