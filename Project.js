
// ฟังก์ชันสำหรับเลื่อนลงไปหา element ที่มี id ตามที่กำหนด
function scrollToSection(sectionId) {
    var element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// เพิ่ม event listener สำหรับแต่ละลิงก์ใน navbar
document.addEventListener('DOMContentLoaded', function() {
    var meLink = document.querySelector('a[href="#"]');
    var aboutLink = document.querySelector('a[href="#about"]');
    var portfolioLink = document.querySelector('a[href="#portfolio"]');

    meLink.addEventListener('click', function() {
        scrollToSection('Introduce yourself');
    });

    aboutLink.addEventListener('click', function() {
        scrollToSection('about');
    });

    portfolioLink.addEventListener('click', function() {
        scrollToSection('portfolio');
    });
});