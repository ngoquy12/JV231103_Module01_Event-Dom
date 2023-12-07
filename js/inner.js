// Cách gán phần tử vào trong DOM
const heading = document.querySelector("#heading-1");
heading.innerHTML = "Xin chào";

const users = [
  {
    userId: 1,
    userName: "Nguyễn Văn Lâm",
    gender: 0,
    dateOfBirth: "22-12-2023",
    address: "Hà Nội",
  },
  {
    userId: 2,
    userName: "Nguyễn Văn An",
    gender: 0,
    dateOfBirth: "22-12-2023",
    address: "Hà Nội",
  },
  {
    userId: 3,
    userName: "Nguyễn Văn Mạnh",
    gender: 1,
    dateOfBirth: "22-12-2023",
    address: "Hà Nội",
  },
  {
    userId: 4,
    userName: "Nguyễn Văn Mạnh",
    gender: 2,
    dateOfBirth: "22-12-2023",
    address: "Hà Nội",
  },
];

// Lấy ra phần tử tbody
const tbodyElement = document.querySelector("#tbody");

let trHtmls = users.map((user, index) => {
  return `
    <tr>
      <td>${index + 1}</td>
      <td>${user.userName}</td>
      <td>${user.gender === 0 ? "Nam" : user.gender === 1 ? "Nữ" : "Khác"}</td>
      <td>${user.dateOfBirth}</td>
      <td>${user.address}</td>
      <td>
          <button>Sửa</button>
      </td>
      <td>
          <button>Xóa</button>
      </td>
    </tr>
  `;
});

// Chuyển đổi mảng thành chuỗi
let trHtml = trHtmls.join("");

tbodyElement.innerHTML = trHtml;

// Dùng DOM Để hiển thị profile của từng employees
// empoyeeId, employeeName, gender, dateOfBirth, image, createdAt

let listItem = document.getElementById("listItem");

// Tạo một phần tử trong DOM
let liElement = document.createElement("li");
liElement.innerHTML = "HTML";

// Gán phần tử con vào cha
// element_cha.appendChild(element_con)
listItem.appendChild(liElement);

const tbody1 = document.getElementById("tbody1");

// Hiển thị danh sách user theo kiểu append
users.forEach((user, index) => {
  // Tạo phần tử tr
  let trElement = document.createElement("tr");

  // Tạo các phần tử td
  const idCell = document.createElement("td");
  idCell.innerHTML = index + 1;
  // Append td vào trong tr của bảng (Phần tbody)
  trElement.appendChild(idCell);

  const nameCell = document.createElement("td");
  nameCell.innerHTML = user.userName;
  // Append td vào trong tr của bảng (Phần tbody)
  trElement.appendChild(nameCell);

  const genderCell = document.createElement("td");
  genderCell.innerHTML =
    user.gender === 0 ? "Nam" : user.gender === 1 ? "Nữ" : "Khác";
  // Append td vào trong tr của bảng (Phần tbody)
  trElement.appendChild(genderCell);

  const dateOfBirthCell = document.createElement("td");
  dateOfBirthCell.innerHTML = user.dateOfBirth;
  // Append td vào trong tr của bảng (Phần tbody)
  trElement.appendChild(dateOfBirthCell);

  const addressCell = document.createElement("td");
  addressCell.innerHTML = user.address;
  // Append td vào trong tr của bảng (Phần tbody)
  trElement.appendChild(addressCell);

  const btnUpdateCell = document.createElement("td");
  btnUpdateCell.innerHTML = "<button>Sửa</button>";
  // Append td vào trong tr của bảng (Phần tbody)
  trElement.appendChild(btnUpdateCell);

  const btnDeleteCell = document.createElement("td");
  btnDeleteCell.innerHTML = "<button>Sửa</button>";
  // Append td vào trong tr của bảng (Phần tbody)
  trElement.appendChild(btnDeleteCell);

  // Append tr và trong tbody
  tbody1.appendChild(trElement);
});

let heading3 = document.getElementById("heading3");
// innerHTML: Đọc và chỉnh sửa văn bản trong HTML
// innerText: Trả về nội dung mà người dùng nhìn thấy, Nó sẽ bắt các script bằng js, style trong CSS
// textContent: Trả về nội dung có trong DOM, nó sẽ bỏ qua các script và style
console.log(heading3.innerHTML);
console.log(heading3.innerText);
console.log(heading3.textContent);

let btnElement = document.querySelectorAll(".btn");

btnElement.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    console.log(e.target.innerHTML);
  });
});
