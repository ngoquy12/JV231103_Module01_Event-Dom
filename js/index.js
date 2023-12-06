// Láy theo id
let headingElement = document.getElementById("heading");

// Lấy theo class
// let itemElement = document.getElementsByClassName("item");
// console.log(itemElement);

// Lấy theo querySelector
// let itemElement = document.querySelector("#heading");
let itemElement = document.querySelectorAll(".list-item1 .item");
console.log(itemElement);

let inputTextElement = document.querySelector('input[type="text"]');
console.log(inputTextElement);

const getItem1 = () => {
  console.log("Gọi hàm");
};

const getItem2 = () => {
  console.log("Gọi item 2");
};

// Tạo một mảng rỗng và lưu trữ các tên
// Tạo nút button và input đeer lấy dữ liệu. Khi click vào nút thì push tên lấy từ input vào trong mảng

const names = [];

// Lấy element của input và button
let inputElement = document.querySelector("#inputValue");
let btnSubmit = document.querySelector("#btnSubmit");
let countryOption = document.querySelector("#country");
const radioElement = document.querySelectorAll('input[type="radio"]');
const checkboxElements = document.querySelectorAll('input[type="checkbox"]');

let genderValue = "Nam";

const hobbies = [];

// Lấy giá trị trong checkbox
checkboxElements.forEach((element) => {
  element.addEventListener("change", (event) => {
    // Kiểm tra những ô checkbox nào được checked
    if (event.target.checked) {
      hobbies.push(event.target.value);
    } else {
      // Tìm kiếm phần tử trong mảng
      let index = hobbies.indexOf(event.target.value);
      // Xóa phần tử không được checked
      if (index !== -1) {
        hobbies.splice(index, 1);
      }
    }
  });
});

/**
 * Thêm dữ liệu vào mảng
 * @param {*} value Giá trị lấy từ input
 * @param {*} arr Mảng chứa dữ liệu
 */
const handleAddName = (value, arr) => {
  arr.push(value);
};

/**
 * Hiển thị danh sách tên
 */
const loadData = () => {
  console.log(names);
  console.log(genderValue);
  console.log("hobbies: ", hobbies);
};

btnSubmit.addEventListener("click", () => {
  const inputValue = inputElement.value.trim();
  // Lấy giá trị từ radio
  radioElement.forEach((element) => {
    // Kiểm tra radio nào được checked thì sẽ lấy giá trị của nó
    if (element.checked) {
      genderValue = element.value;
    }
  });

  handleAddName(inputValue, names);

  // Sau khi submit thì focus vào input
  inputElement.focus();

  inputElement.value = ""; // Reset giá trị trong ô input

  loadData();
});

// Lắng nghe sự kiện thay đổi trong select option
countryOption.addEventListener("change", (event) => {
  console.log(event.target.value);
});
