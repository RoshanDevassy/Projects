const Footer = ()=>{
    return(
        <>
            <section className=" w-full bg-gradient-to-b from-slate-500 to-black font-serif text-white">
                <div className="ml-10">
                    <h2 className="text-center mb-5 pt-1 text-lg font-bold">Social Links</h2>
                    <ul className="flex min-w:flex-col justify-around items-center gap-2 flex-wrap *:hover:cursor-pointer">
                        <li><a href="https://www.instagram.com/roshan_devassy2002" target="_blank" className="hover:text-lime-200">instagram.com</a></li>
                        <li><a href="https://www.linkedin.com/in/roshantp2002" target="_blank" className="hover:text-lime-200">linkedin.com</a></li>
                        <li><a href="mailto:roshan.dev.tp@gmail.com" className="hover:text-lime-200">gmail.com</a></li>
                    </ul>
                </div>
            </section>
        </>
    )
}

export default Footer;