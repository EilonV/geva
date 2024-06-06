export const Cinema = () => {
    return <section className="cinema page">
        <div className="main-layout">
            <div className="video flex">
                <div className="flex column">
                    <h2>Video title</h2>
                    <p>video desc Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et necessitatibus, eos tenetur id animi numquam nihil ab reiciendis quia ipsam!</p>
                </div>
                <video className='js-player' id="player" playsInline controls>
                    <source src="" type="video/mp4" />
                </video>
            </div>
        </div>
    </section>
}