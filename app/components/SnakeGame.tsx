'use client'
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Freckle_Face } from 'next/font/google';

const freckleFace = Freckle_Face({
  weight: '400',
  subsets: ['latin'],
});

interface Position {
  x: number;
  y: number;
}

const GRID_COLS = 18;
const GRID_ROWS = 8;
const CELL_SIZE = 18;
const INITIAL_SPEED = 150;

const SnakeGame = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [snake, setSnake] = useState<Position[]>([
    { x: 2, y: 4 }, // head
    { x: 1, y: 4 },
    { x: 0, y: 4 },
    { x: -1, y: 4 },
    { x: -2, y: 4 }, // tail
  ]);
  const [food, setFood] = useState<Position>({ x: 15, y:4 });
  const [direction, setDirection] = useState<'UP' | 'DOWN' | 'LEFT' | 'RIGHT'>('DOWN');
  const [isPlaying, setIsPlaying] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);

  const generateFood = useCallback(() => {
    return {
      x: Math.floor(Math.random() * GRID_COLS),
      y: Math.floor(Math.random() * GRID_ROWS),
    };
  }, []);

  const resetGame = useCallback(() => {
    setSnake([
      { x: 2, y: 4 },
      { x: 1, y: 4 },
      { x: 0, y: 4 },
      { x: -1, y: 4 },
      { x: -2, y: 4 },
    ]);
    setFood(generateFood());
    setDirection('RIGHT');
    setGameOver(false);
    setScore(0);
    setIsPlaying(true);
  }, [generateFood]);

  const drawTeardrop = (ctx: CanvasRenderingContext2D, x: number, y: number, facing: 'UP' | 'DOWN' | 'LEFT' | 'RIGHT') => {
    ctx.save();
    ctx.translate(x * CELL_SIZE + CELL_SIZE / 2, y * CELL_SIZE + CELL_SIZE / 2);
    
    // Rotate based on direction
    switch(facing) {
      case 'UP': ctx.rotate(-Math.PI / 2); break;
      case 'DOWN': ctx.rotate(Math.PI / 2); break;
      case 'LEFT': ctx.rotate(Math.PI); break;
      case 'RIGHT': break;
    }

    // Draw the teardrop shape
    ctx.beginPath();
    ctx.moveTo(-CELL_SIZE/3, 0);
    ctx.quadraticCurveTo(
      -CELL_SIZE/3, -CELL_SIZE/3,
      0, -CELL_SIZE/3
    );
    ctx.quadraticCurveTo(
      CELL_SIZE/3, -CELL_SIZE/3,
      CELL_SIZE/3, 0
    );
    ctx.quadraticCurveTo(
      CELL_SIZE/3, CELL_SIZE/3,
      0, CELL_SIZE/3
    );
    ctx.quadraticCurveTo(
      -CELL_SIZE/3, CELL_SIZE/3,
      -CELL_SIZE/3, 0
    );

    // Fill the main body
    ctx.fillStyle = '#94A3B8';
    ctx.fill();
    ctx.strokeStyle = '#64748B';
    ctx.stroke();

    // Add the eye
    ctx.beginPath();
    ctx.arc(0, -CELL_SIZE/6, CELL_SIZE/10, 0, Math.PI * 2);
    ctx.fillStyle = '#1E293B';
    ctx.fill();

    ctx.restore();
  };

  const drawGame = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear canvas
    ctx.clearRect(0, 0, GRID_COLS * CELL_SIZE, GRID_ROWS * CELL_SIZE);
    ctx.fillStyle = '#f0f0f0';
    ctx.fillRect(0, 0, GRID_COLS * CELL_SIZE, GRID_ROWS * CELL_SIZE);

    if (gameOver) {
      let isVisible = true;
      const deathInterval = setInterval(() => {
        // Clear the canvas
        ctx.clearRect(0, 0, GRID_COLS * CELL_SIZE, GRID_ROWS * CELL_SIZE);
        ctx.fillStyle = '#f0f0f0';
        ctx.fillRect(0, 0, GRID_COLS * CELL_SIZE, GRID_ROWS * CELL_SIZE);

        if (isVisible) {
          // Draw snake
          snake.forEach((segment, index) => {
            if (index === 0) {
              drawTeardrop(ctx, segment.x, segment.y, direction);
            } else {
              drawTeardrop(ctx, segment.x, segment.y, 'RIGHT');
            }
          });
        }
        isVisible = !isVisible;
      }, 200);

      // Clear the interval and reset game state
      setTimeout(() => {
        clearInterval(deathInterval);
        setSnake([
          { x: 2, y: 4 },
          { x: 1, y: 4 },
          { x: 0, y: 4 },
          { x: -1, y: 4 },
          { x: -2, y: 4 },
        ]);
        setFood(generateFood());
        setDirection('RIGHT');
        setGameOver(false);
        setIsPlaying(false);
        setScore(0);
      }, 2000);
      
      return;
    }

    // Draw snake segments
    snake.forEach((segment, index) => {
      if (index === 0) {
        drawTeardrop(ctx, segment.x, segment.y, direction);
      } else {
        drawTeardrop(ctx, segment.x, segment.y, 'RIGHT');
      }
    });

    // Draw food
    const foodX = food.x * CELL_SIZE + CELL_SIZE / 2;
    const foodY = food.y * CELL_SIZE + CELL_SIZE / 2;

    // Draw cylinder body
    ctx.beginPath();
    ctx.ellipse(foodX, foodY - 3, CELL_SIZE/3, CELL_SIZE/6, 0, 0, Math.PI * 2);
    ctx.fillStyle = '#3B82F6';
    ctx.fill();
    ctx.strokeStyle = '#2563EB';
    ctx.stroke();

    // Draw cylinder top
    ctx.beginPath();
    ctx.ellipse(foodX, foodY + 3, CELL_SIZE/3, CELL_SIZE/6, 0, 0, Math.PI * 2);
    ctx.fillStyle = '#2563EB';
    ctx.fill();
    ctx.strokeStyle = '#1D4ED8';
    ctx.stroke();

    // Connect top and bottom
    ctx.beginPath();
    ctx.moveTo(foodX - CELL_SIZE/3, foodY - 3);
    ctx.lineTo(foodX - CELL_SIZE/3, foodY + 3);
    ctx.moveTo(foodX + CELL_SIZE/3, foodY - 3);
    ctx.lineTo(foodX + CELL_SIZE/3, foodY + 3);
    ctx.strokeStyle = '#2563EB';
    ctx.stroke();

  }, [snake, food, direction, gameOver,  generateFood]);

  const moveSnake = useCallback(() => {
    if (!isPlaying || gameOver) return;

    setSnake(prevSnake => {
      const newSnake = [...prevSnake];
      const head = { ...newSnake[0] };

      switch (direction) {
        case 'UP': head.y = (head.y - 1 + GRID_ROWS) % GRID_ROWS; break;
        case 'DOWN': head.y = (head.y + 1) % GRID_ROWS; break;
        case 'LEFT': head.x = (head.x - 1 + GRID_COLS) % GRID_COLS; break;
        case 'RIGHT': head.x = (head.x + 1) % GRID_COLS; break;
      }

      // Check for collisions with self only
      if (newSnake.some(segment => segment.x === head.x && segment.y === head.y)) {
        setGameOver(true);
        setIsPlaying(false);
        return prevSnake;
      }

      newSnake.unshift(head);

      // Check if snake ate food
      if (head.x === food.x && head.y === food.y) {
        setFood(generateFood());
        setScore(prev => prev + 1);
      } else {
        newSnake.pop();
      }

      return newSnake;
    });
  }, [direction, food, generateFood, isPlaying, gameOver]);

  // Prevent scrolling when using arrow keys
  useEffect(() => {
    const preventScroll = (e: KeyboardEvent) => {
      if (isPlaying && ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', ' '].includes(e.key)) {
        e.preventDefault();
      }
    };

    window.addEventListener('keydown', preventScroll);
    return () => window.removeEventListener('keydown', preventScroll);
  }, [isPlaying]);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (gameOver && e.key === ' ') {
        resetGame();
        return;
      }

      switch (e.key) {
        case 'ArrowUp':
          setDirection(prev => prev !== 'DOWN' ? 'UP' : prev);
          break;
        case 'ArrowDown':
          setDirection(prev => prev !== 'UP' ? 'DOWN' : prev);
          break;
        case 'ArrowLeft':
          setDirection(prev => prev !== 'RIGHT' ? 'LEFT' : prev);
          break;
        case 'ArrowRight':
          setDirection(prev => prev !== 'LEFT' ? 'RIGHT' : prev);
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [gameOver, resetGame]);

  useEffect(() => {
    const gameLoop = setInterval(moveSnake, INITIAL_SPEED);
    return () => clearInterval(gameLoop);
  }, [moveSnake]);

  useEffect(() => {
    drawGame();
  }, [drawGame]);

  return (
   <div className="relative">
    <p className={`${freckleFace.className} text-md font-bold ml-1`}> 00{score}</p>
    <div className="border-2 border-[#daa176] rounded-sm">
      <div className="border-1 border-[#c58e64] ">
        <div className="relative bg-[#FAFAFA] p-1 border-3 border-[#af764f]">
          <canvas
            ref={canvasRef}
            width={GRID_COLS * CELL_SIZE}
            height={GRID_ROWS * CELL_SIZE}
            className="border border-gray-100 shadow-sm rounded-md"
          />
          <div className="flex flex-col gap-2 items-center bg-[#f0f0f0]">
            {!isPlaying && !gameOver && (
              <button
                onClick={resetGame}
                className={`${freckleFace.className} cursor-pointer mb-2 px-8 py-1 bg-white border border-black rounded-md hover:bg-gray-50 transition-colors text-gray-800 font-medium`}
              >
                Play
              </button>
            )}
            {isPlaying && !gameOver && (
              <button
                onClick={() => setIsPlaying(false)}
                className={`${freckleFace.className} cu mb-2 px-8 py-1 bg-white border border-black rounded-md hover:bg-gray-50 transition-colors text-gray-800 font-medium`}
              >
                Pause
              </button>
            )}
            {gameOver && (
              <button
              onClick={() => setIsPlaying(false)}
              className={`${freckleFace.className} cu mb-2 px-8 py-1 bg-white border border-black rounded-md hover:bg-gray-50 transition-colors text-gray-800 font-medium`}
            >
              Pause
            </button>
            )}
          </div>
        </div>
      </div>
    </div>
   </div>
  );
};

export default SnakeGame; 