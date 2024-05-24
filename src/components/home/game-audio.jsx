import vid from '../../assets/videos/catch.mp4'
import cover from '../../assets/images/catch cover.png'
export const HomeGameAudio = () => {
    // const player = new Plyr('video', { captions: { active: true } });

    // const plyrProps = {
    //     source: {
    //         type: 'video',
    //         title: 'Example title',
    //         sources: [
    //             {
    //                 src: vid,
    //                 type: 'video/webm',
    //                 size: 1080,
    //             },
    //         ],
    //         poster: false,
    //         previewThumbnails: {
    //             src: false,
    //         },
    //     }, // https://github.com/sampotts/plyr#the-source-setter
    //     options: {

    //         autoplay: false, // Start playback automatically
    //         controls: ['play-large', 'play', 'progress', 'current-time', 'mute', 'volume', 'settings', 'fullscreen'], // List of controls to display
    //         settings: ['speed'], // List of settings menu items
    //         quality: {
    //             default: 1080,
    //             options: [1080],
    //         },
    //         speed: {
    //             selected: 1, // Default playback speed
    //         },
    //         fullscreen: {
    //             enabled: true, // Allow fullscreen
    //             fallback: true, // Fallback for older browsers
    //             iosNative: false, // Use the native fullscreen in iOS (might be better for some custom controls)
    //         },
    //         keyboard: {
    //             focused: true, // Enable keyboard shortcuts when focused
    //             global: false, // Enable keyboard shortcuts globally
    //         },
    //         tooltips: {
    //             controls: true, // Show tooltips for controls
    //             seek: true, // Show a tooltip when seeking
    //         },
    //         storage: {
    //             enabled: true, // Allow Plyr to use localStorage to save settings
    //             key: 'plyrSettings', // The key to use in localStorage
    //         },
    //     },// https://github.com/sampotts/plyr#options
    //     // Direct props for inner video tag (mdn.io/video)
    // }
    return <div className="home-game-audio-wrapper mid full">
        <div className="home-game-audio main-layout">
            <div className="home-section">
                <div className="text">
                    <h2>Game audio</h2>
                    <p>Composed and designed game audio that enhances the gaming experience through atmospheric and FX sounds. My work creates unique audio environments, adding depth and excitement to every interaction.</p>
                    <p>Check out my sound library below to listen to all my projects and sound FX.</p>
                    <a href="/game-audio">Sound library</a>
                </div>
                <div className="video">
                    <video className='js-player' id="player" playsInline controls data-poster={cover}>
                        <source src={vid} type="video/mp4" />
                    </video>
                </div>
            </div>
        </div>
    </div>
}