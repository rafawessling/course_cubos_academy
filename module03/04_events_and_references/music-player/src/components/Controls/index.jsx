export default function Controls({ audioRef }) {
    function handlePlay() {
        audioRef.current.play();
    }

    function handlePause() {
        audioRef.current.pause();
    }

    function handleStop() {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
    }

    return (
        <div>
            <button onClick={() => handlePlay()}>Play</button>
            <button onClick={() => handlePause()}>Pause</button>
            <button onClick={() => handleStop()}>Stop</button>
        </div>
    );
}
