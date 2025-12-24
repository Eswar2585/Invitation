document.addEventListener('DOMContentLoaded', () => {
            // --- Animation Sequence ---
            const bowContainer = document.getElementById('bowContainer');
            const ribbonVertical = document.getElementById('ribbonVertical');
            const envelopeFlap = document.getElementById('envelopeFlap');
            const letterPreview = document.getElementById('letterPreview');
            const envelopeOverlay = document.getElementById('envelopeOverlay');
            const mainContent = document.getElementById('mainContent');

            // 1. Untie Bow (1000ms)
            setTimeout(() => {
                bowContainer.classList.add('untied');
                ribbonVertical.classList.add('fade-out');
            }, 1000);

            // 2. Open Flap (1600ms)
            setTimeout(() => {
                envelopeFlap.classList.add('open');
            }, 1600);

            // 3. Slide Letter Up (2200ms)
            setTimeout(() => {
                letterPreview.classList.add('slide-up');
            }, 2200);

            // 4. Reveal Main Content (3800ms)
            setTimeout(() => {
                envelopeOverlay.classList.add('hidden');
                mainContent.classList.add('visible');
                
                // Cleanup overlay after transition
                setTimeout(() => {
                    envelopeOverlay.style.display = 'none';
                }, 1000);
            }, 3800);

            // --- Countdown Logic ---
            const eventDate = new Date(2026, 0, 21, 17, 0, 0).getTime(); // Jan 21, 2026 5:00 PM
            const countdownContainer = document.getElementById('countdownContainer');

            function updateCountdown() {
                const now = new Date().getTime();
                const distance = eventDate - now;

                if (distance < 0) {
                    countdownContainer.innerHTML = '<div class="text-rose-gold h4">We are Engaged!</div>';
                    return;
                }

                const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((distance % (1000 * 60)) / 1000);

                const timeUnits = [
                    { label: 'Days', value: days },
                    { label: 'Hrs', value: hours },
                    { label: 'Mins', value: minutes },
                    { label: 'Secs', value: seconds }
                ];

                let html = '';
                timeUnits.forEach(unit => {
                    html += `
                        <div class="d-flex flex-column align-items-center">
                            <div class="countdown-box shadow-sm">
                                <span class="font-serif h5 text-rose-gold fw-bold m-0">${unit.value}</span>
                            </div>
                            <span class="font-sans text-uppercase text-muted" style="font-size: 9px; letter-spacing: 0.1em;">${unit.label}</span>
                        </div>
                    `;
                });

                countdownContainer.innerHTML = html;
            }

            setInterval(updateCountdown, 1000);
            updateCountdown(); // Initial call
        });