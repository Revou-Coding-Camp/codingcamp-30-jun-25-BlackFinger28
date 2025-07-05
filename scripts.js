document.addEventListener('DOMContentLoaded', function() {
    // === Bagian untuk Welcoming Speech di index.html ===
    const welcomeMessageElement = document.getElementById('welcomeMessage');
    if (welcomeMessageElement) { // Pastikan elemen ada di halaman ini (index.html)
        let userName = prompt("Halo! Siapa nama Anda, pembaca?");

        if (userName && userName.trim() !== '') {
            welcomeMessageElement.textContent = `Halo, ${userName.trim()}!`;
        } else {
            welcomeMessageElement.textContent = `Halo, Pembaca!`;
        }
    }

    // === Bagian untuk Validasi Formulir Kontak di index.html ===
    const contactForm = document.getElementById('contactForm');

    // Hanya tambahkan event listener jika form kontak ada di halaman ini
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Mencegah pengiriman formulir default

            clearErrorMessages(); // Bersihkan pesan error sebelumnya

            let isValid = true;

            const nameInput = document.getElementById('visitorName');
            const emailInput = document.getElementById('visitorEmail');
            const messageTextarea = document.getElementById('visitorMessage');

            // Validasi Nama
            if (nameInput.value.trim() === '') {
                displayError('visitorNameError', 'Nama wajib diisi.');
                isValid = false;
            }

            // Validasi Email
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (emailInput.value.trim() === '') {
                displayError('visitorEmailError', 'Email wajib diisi.');
                isValid = false;
            } else if (!emailPattern.test(emailInput.value.trim())) {
                displayError('visitorEmailError', 'Format email tidak valid.');
                isValid = false;
            }

            // Validasi Pesan
            if (messageTextarea.value.trim() === '') {
                displayError('visitorMessageError', 'Pesan wajib diisi.');
                isValid = false;
            }

            if (isValid) {
                console.log('Formulir Kontak Berhasil Dikirim!');
                console.log('Nama:', nameInput.value.trim());
                console.log('Email:', emailInput.value.trim());
                console.log('Pesan:', messageTextarea.value.trim());

                const submittedData = `
Nama: ${nameInput.value.trim()}
Email: ${emailInput.value.trim()}
Pesan: ${messageTextarea.value.trim()}
`;
                alert('Terima kasih atas pesan Anda!\n\nData yang Anda kirim:\n' + submittedData);

                contactForm.reset(); // Kosongkan formulir
            }
        });
    }

    // Fungsi Pembantu untuk Menampilkan Error
    function displayError(elementId, message) {
        const errorElement = document.getElementById(elementId);
        if (errorElement) {
            errorElement.textContent = message;
        }
    }

    // Fungsi Pembantu untuk Membersihkan Error
    function clearErrorMessages() {
        const errorElements = document.querySelectorAll('.error-message');
        errorElements.forEach(element => {
            element.textContent = '';
        });
    }
});
