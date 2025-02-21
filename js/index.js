// //    back to top
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 300
  ) {
    document.getElementById("backToTop").style.display = "block";
  } else {
    document.getElementById("backToTop").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function scrollToTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
// const textsAbout = ["Lê Nhất Quý", "A Web Developer"];

const textElement = document.getElementById("text");
const textsAbout = ["LE NHAT QUY", "a Web Developer"];
let currentIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeWriterAnimation() {
  const currentText = textsAbout[currentIndex];

  // Cập nhật nội dung hiển thị
  if (isDeleting) {
    charIndex--; // Giảm ký tự khi xóa
  } else {
    charIndex++; // Tăng ký tự khi gõ
  }

  textElement.textContent = currentText.substring(0, charIndex);

  // Xử lý trạng thái khi hoàn thành
  if (!isDeleting && charIndex === currentText.length) {
    // Đợi 1 giây trước khi xóa
    isDeleting = true;
    setTimeout(typeWriterAnimation, 1500);
  } else if (isDeleting && charIndex === 0) {
    // Chuyển sang chuỗi tiếp theo khi xóa xong
    isDeleting = false;
    currentIndex = (currentIndex + 1) % textsAbout.length; // Lặp lại mảng
    setTimeout(typeWriterAnimation, 500);
  } else {
    // Tốc độ gõ và xóa
    const typingSpeed = isDeleting ? 100 : 120;
    setTimeout(typeWriterAnimation, typingSpeed);
  }
}

// Bắt đầu animation
typeWriterAnimation();
