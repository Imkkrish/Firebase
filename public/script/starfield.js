const canvas = document.getElementById('starfield');
        const ctx = canvas.getContext('2d');

        function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initStars();
        }

        let stars = [];
        const amplitude = canvas.height / 10; // Amplitude of the wave

        function initStars() {
            stars = [];
            for (let i = 0; i < 500; i++) {
                stars.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    baseY: Math.random() * canvas.height,
                    radius: Math.random() * 2,
                    speed: 0.5 + Math.random() * 1.5, // Speed of the stars
                    frequency: 0.5 + Math.random() // Frequency of the wave
                });
            }
        }

        function drawStars() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            for (let star of stars) {
                let waveY = star.baseY + amplitude * Math.sin((star.x / canvas.width) * Math.PI * star.frequency);
                ctx.beginPath();
                ctx.arc(star.x, waveY, star.radius, 0, Math.PI * 2);
                ctx.fillStyle = 'white';
                ctx.fill();
            }
        }

        function updateStars() {
            for (let star of stars) {
                star.x += star.speed;

                if (star.x > canvas.width) {
                    star.x = 0;
                    star.baseY = Math.random() * canvas.height;
                }
            }
        }

        function animate() {
            drawStars();
            updateStars();
            requestAnimationFrame(animate);
        }

        window.addEventListener('resize', resizeCanvas);

        // Initial resize and setup
        resizeCanvas();
        animate();