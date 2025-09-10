function Contact(){

    return(
        <section id="contacts" className="p-4  ">
            <form className=" flex flex-col justify-center space-y-6 shadow-xl h-[300px] relative p-2 md:w-[350px] bg-slate-900/40 backdrop-blur-[10px] mx-auto rounded-lg ">
                <h3 className="text-xl text-center font-bold">Get in touch</h3>

                <input type="email" placeholder='Your email' className="border border-gray-500 rounded px-1 pt-[1px]" />
                <textarea name="contact-area" placeholder="your message" className="border border-gray-500  p-1 h-[100px]"></textarea>
                        
                <button className="bg-gradient-to-r from-blue-600 to-blue-400 inline-block rounded cursor-pointer font-semibold text-sm py-1
                             transition-scale duration-200 ease-in hover:scale-x-105 w-[95%] mx-auto ">Send</button>
            </form>
        </section>
    )
}
export default Contact;