import { useState, useRef, useEffect } from 'react';

const PingPongGame = () => {
    const canvasRef = useRef(null);
    const [playing, setPlaying] = useState(false);
    const [playerPaddleY, setPlayerPaddleY] = useState(0);
    const [ballX, setBallX] = useState(0);
    const [ballY, setBallY] = useState(0);
    const [ballSpeedX, setBallSpeedX] = useState(0);
    const [ballSpeedY, setBallSpeedY] = useState(0);
    const paddleHeight = 240;
    const paddleWidth = 22;
    const computerPaddleSpeed = 4;
    const computerPaddleHeight = 240;
    const canvasWidth = 1720;
    const canvasHeight = 600;

    const updateCanvas = () => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        const ballSize = 60;
        const paddleMargin = 40;

        context.clearRect(0, 0, canvasWidth, canvasHeight);

        context.fillStyle = 'red'; // Ball color
        context.beginPath();
        context.arc(ballX, ballY, ballSize / 2, 0, Math.PI * 2);
        context.fill();

        context.fillStyle = 'black'; // Player paddle color
        context.fillRect(paddleMargin, playerPaddleY, paddleWidth, paddleHeight);

        const computerPaddleY = ballY - computerPaddleHeight / 2;
        context.fillStyle = 'black'; // Computer paddle color
        context.fillRect(canvasWidth - paddleMargin - paddleWidth, computerPaddleY, paddleWidth, computerPaddleHeight);

        if (!playing) return;

        setBallX(ballX + ballSpeedX);
        setBallY(ballY + ballSpeedY);

        // Check for collision with player paddle
        if (
            ballX - ballSize / 2 < paddleMargin + paddleWidth &&
            ballY + ballSize / 2 > playerPaddleY &&
            ballY - ballSize / 2 < playerPaddleY + paddleHeight
        ) {
            setBallSpeedX(-ballSpeedX);
        }

        // Check for collision with computer paddle
        if (
            ballX + ballSize / 2 > canvasWidth - paddleMargin - paddleWidth &&
            ballY + ballSize / 2 > computerPaddleY &&
            ballY - ballSize / 2 < computerPaddleY + computerPaddleHeight
        ) {
            setBallSpeedX(-ballSpeedX);
        }

        if (ballX + ballSize / 2 > canvasWidth || ballX - ballSize / 2 < 0) {
            setBallSpeedX(-ballSpeedX);
        }

        if (ballY + ballSize / 2 > canvasHeight || ballY - ballSize / 2 < 0) {
            setBallSpeedY(-ballSpeedY);
        }

        requestAnimationFrame(updateCanvas); // Recursive call to updateCanvas
    };

    const handlePlayButtonClick = () => {
        setPlaying(true);
        setBallX(canvasWidth / 2);
        setBallY(canvasHeight / 2);
        setBallSpeedX(5);
        setBallSpeedY(5);
    };

    const handleMouseMove = (e) => {
        const canvas = canvasRef.current;
        const canvasRect = canvas.getBoundingClientRect();
        const mouseY = e.clientY - canvasRect.top;
        setPlayerPaddleY(mouseY - paddleHeight / 2);
    };

    useEffect(() => {
        if (playing) {
            updateCanvas();
        }
    }, [playing]);

    return (
        <div className="w-full h-[600px]">
            <canvas
                ref={canvasRef}
                width={canvasWidth}
                height={canvasHeight}
                onMouseMove={handleMouseMove}
            />
            {!playing && (
                <button
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-6 py-3 cursor-pointer text-[15rem]"
                    onClick={handlePlayButtonClick}
                >
                    <p>&#62; Play</p>
                </button>
            )}
        </div>
    );
};

export default PingPongGame;
