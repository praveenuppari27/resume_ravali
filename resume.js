// resume.js
document.getElementById('download-pdf').addEventListener('click', () => {
    const element = document.body; // You can change this to a specific div if needed
    const options = {
        margin: 0.5,
        filename: 'Ravali_Thota_Resume.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    html2pdf().from(element).set(options).save();
});
