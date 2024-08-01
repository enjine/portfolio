import Image from 'next/image'

export default async function Home() {
    return (
        <main>
            <section className="home section" id="home">
                <div className="container">
                    <div className="intro">
                        <Image
                            src="/img/brand-image.png"
                            alt="Al Siam Profile"
                            className="shadow-dark"
                            width={100}
                            height={1}
                            priority={true}
                        />
                        <h1>Your Name</h1>
                        <p>Your expertise</p>
                        <div className="social-links">
                            <a href="https://twitter.com/" target="_blank">
                                <i className="fa fa-twitter" />
                            </a>
                            <a href="https://facebook.com/" target="_blank">
                                <i className="fa fa-facebook" />
                            </a>
                            <a href="https://github.com/" target="_blank">
                                <i className="fa fa-github" />
                            </a>
                            <a href="https://instagram.com/" target="_blank">
                                <i className="fa fa-instagram" />
                            </a>
                            <a href="https://linkedin.com/in/" target="_blank">
                                <i className="fa fa-linkedin" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
