// document.addEventListener("DOMContentLoaded", () => {
//   const list = document.querySelector(".list");
//   const items = document.querySelectorAll(".item");
//   const itemWidth = items[0].offsetWidth + 20; // Tính chiều rộng của mỗi item (bao gồm margin)

//   let position = 0; // Vị trí ban đầu của cuộn

//   function startSlider() {
//     position -= 2; // Điều chỉnh tốc độ bằng cách thay đổi giá trị này

//     // Khi vị trí đạt đến hết một item, đưa nó trở lại cuối danh sách
//     if (Math.abs(position) >= itemWidth) {
//       position = 0;
//       list.appendChild(list.firstElementChild); // Di chuyển item đầu tiên xuống cuối
//     }

//     list.style.transform = `translateX(${position}px)`;
//     requestAnimationFrame(startSlider); // Lặp lại hiệu ứng cuộn
//   }

//   startSlider();
// });

//      test
// document.addEventListener("DOMContentLoaded", () => {
//   const list = document.querySelector(".list");
//   const items = list.innerHTML; // Lấy nội dung HTML hiện tại của danh sách
//   list.innerHTML += items; // Nhân đôi danh sách để tạo vòng lặp
// });

//    test2

// document.addEventListener("DOMContentLoaded", () => {
//   const list = document.querySelector(".list");
//   const items = document.querySelectorAll(".item");
//   const itemWidth = items[0].offsetWidth + 20; // Tính chiều rộng của mỗi item (bao gồm margin)

//   let position = 0; // Vị trí ban đầu của cuộn

//   function startSlider() {
//     position -= 2; // Điều chỉnh tốc độ bằng cách thay đổi giá trị này

//     // Kiểm tra xem item đầu tiên đã đi hết khỏi khung nhìn chưa
//     if (Math.abs(position) >= itemWidth) {
//       position = 0; // Reset lại vị trí
//       list.appendChild(list.firstElementChild); // Di chuyển item đầu tiên xuống cuối
//     }

//     list.style.transform = `translateX(${position}px)`;
//     requestAnimationFrame(startSlider); // Lặp lại hiệu ứng cuộn
//   }

//   startSlider();
// });

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
const textsAbout = ["Lê Nhất Quý", "a Web Developer"];
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
