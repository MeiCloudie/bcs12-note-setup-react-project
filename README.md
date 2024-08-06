# CÁC BƯỚC THIẾT LẬP MỘT DỰ ÁN REACT

_(Lớp BootCamp Sáng 12 - Năm 2024 - Khoá Front-End)_

- [Overview](#overview)
- [React Vite](#react-vite)
- [Git](#git)
- [TailwindCSS](#tailwindcss)
- [SASS](#sass)
- [React Router Dom](#react-router-dom)
- [Redux Toolkit](#redux-toolkit)
- [Axios](#axios)
- [Formik Yup](#formik-yup)
- [Ant Design](#ant-design)
- [Fontawesome](#fontawesome)
- [Lottie React](#lottie-react)
- [React Toastify](#react-toastify)
- [Complete Setup Package Json](#complete-setup-package-json)

## Overview

- Khi xây dựng một dự án với React, ta cần xác định các yếu tố như sau:

1. Môi trường xây dựng cùng React:

   - [NodeJS](https://nodejs.org/en) (v20.11.0)
   - [Vite](https://vitejs.dev/) (Vite v5.3.4 & React v18.3.1)

2. Version Control System - Dùng để lưu trữ Source Code:

   - Git
   - GitHub

3. Ngôn ngữ đi kèm với React:

   - JavaScript
   - hoặc có thể là TypeScript

4. Route Management:

   - React Router Dom (v6.26.0)

5. State Management:

   - Redux (v9.1.2)
   - Redux Toolkit (v2.2.7)

6. HTTP Request:

   - API
   - Axios (v1.7.3)

7. Form Management:

   - Formik (v2.4.6)
   - Yup (v1.4.0)

8. Các thư viện hỗ trợ về UI:
   - UI component library: Ant Design (v5.19.4)
   - Hỗ trợ CSS: TailwindCSS (v3.4.7) và SASS (v1.77.8)
   - Bộ icon: Fontawesome (v0.2.2)
   - Bộ animation động: Lottie (v2.4.0)
   - Font chữ: Google Font
   - Bộ hiển thị thông báo (Notification): React Toastify (v10.0.5)

> Bên trên là các Ví Dụ về các môi trường và thư viện trong từng yếu tố, bạn có thể tham khảo thêm một số thư viện khác tương tự, sao cho phù hợp với dự án của bạn.

## React Vite

1. Sử dụng câu lệnh khởi tạo:

```bash
npm create vite@latest
```

2. Nhập tên dự án (Project Name).

3. Chọn Framework (Select a framework): **React**.

4. Chọn ngôn ngữ (Select a variant): **JavaScript**

5. Nhấn **Enter** để tiến hành khởi tạo.

6. Sau khi việc tải hoàn tất, chuột phải vào `package.json` của dự án vừa tạo, chọn **"Open in Integrated Terminal"** để trỏ đúng đến **Terminal** của dự án.

7. Sử dụng các câu lệnh chạy dự án:

   - Tải các packages:

   ```bash
    npm i
   ```

   - Chạy dự án:

   ```bash
    npm run dev
   ```

8. _(Không bắt buộc)_ Xoá các phần Ràng Buộc nghiêm ngặt (Strict Code)

   - Xoá tệp `.eslintrc.cjs`
   - Tại `./src/main.jsx` xoá tag "React.StrictMode", code cập nhật như sau:

   ```js
   import ReactDOM from "react-dom/client"
   import App from "./App.jsx"
   import "./index.css"

   ReactDOM.createRoot(document.getElementById("root")).render(<App />)
   ```

9. Clear các phần code không cần thiết:

   - Xoá tệp `App.css`
   - Xoá các phần code demo mẫu trong `App.jsx`:

   ```js
   function App() {
     return (
       <>
         <h1>Hello world!</h1>
       </>
     )
   }

   export default App
   ```

10. Điều chỉnh tiêu đề Web (title) của dự án tại `index.html` tag **title**. Ví dụ:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <!-- Chỉnh title ở đây nè -->
    <title>React Test Project</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

> Tham khảo tại: https://vitejs.dev/guide/

## Git

1. Tại Terminal của dự án, sử dụng lệnh:

```bash
git init
```

2. Các bước sử dụng Git với GitHub để lưu trữ Source Code tham khảo "CÁC CÂU LỆNH THỰC HÀNH" tại: https://github.com/MeiCloudie/demo_git/blob/master/README.md

## TailwindCSS

1. Sử dụng câu lệnh tải packages:

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

2. Tại `tailwind.config.js` vừa được tạo, cập nhật code như sau:

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {},
  },
  plugins: [],
}
```

3. Tại `./src/index.css` cập nhật code như sau:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

4. Kiểm tra thử với các Class của Tailwind tại `App.jsx`

```js
function App() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </>
  )
}

export default App
```

- Lưu ý sử dụng trong **className** tại tag (không phải class).

> Tham khảo tại: https://tailwindcss.com/docs/guides/vite

## SASS

1. Sử dụng câu lệnh tải package:

```bash
npm i sass
```

2. Nếu dự án của bạn muốn sử dụng SASS thì cần lưu ý cập nhật các tệp sau:

   - Đổi tên đuôi tệp `index.css` thành `index.scss`
   - Nếu có set-up 3 dòng import của Tailwind thì giữ nguyên, có chỉnh sửa gì thêm về SASS thì cứ tiếp tục triển khai bên dưới. Ví dụ tại `index.scss` có đoạn demo như sau:

     ```scss
     @tailwind base;
     @tailwind components;
     @tailwind utilities;

     .container {
       .demo_sass {
         font-size: 20px;
       }
     }
     ```

   - Tại `main.jsx` cập nhật dòng import file `index.scss`:
     ```js
     import "./index.scss"
     ```

> Tham khảo tại: https://www.npmjs.com/package/sass

## React Router Dom

1. Sử dụng câu lệnh tải packages:

```bash
npm install react-router-dom
```

2. Cập nhật Router Component **BrowserRouter** tại `main.jsx` như sau:

```js
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "./index.css"
import { BrowserRouter } from "react-router-dom"

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
```

- Import và Thêm tag "BrowserRouter" bọc ngoài tag "App".

> Tham khảo tại: https://reactrouter.com/en/main/router-components/browser-router

## Redux Toolkit

1. Sử dụng câu lệnh tải các packages:

```bash
npm install @reduxjs/toolkit react-redux
```

2. Tại thư mục `src` tạo thư mục `redux`. Và trong thư mục `redux` tạo thư mục `slices`. Trong thư mục `slices` tạo tệp `demoSlice.js`

- Cụ thể như sau: `./src/redux/slices/demoSlice.js`

- Cập nhật cấu trúc code mẫu tạo Slice tại tệp `demoSlice.js`

```js
import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  name: "Init Demo Slice",
  status: true,
}

const demoSlice = createSlice({
  name: "demoSlice",
  initialState,
  reducers: {
    actionFunction: (state, action) => {
      console.log(action)
      state.status = action.payload
    },
  },
})

export const { actionFunction } = demoSlice.actions

export default demoSlice.reducer
```

3. Tại thư mục `./src/redux` tạo tệp `configStore.js` và cập nhật code mẫu như sau:

```js
import { configureStore } from "@reduxjs/toolkit"
import demoSlice from "./slices/demoSlice"

export const store = configureStore({
  reducer: {
    demoSlice,
  },
})
```

4. Tại tệp `./src/main.jsx` cập nhật **Provider** và **store** của Redux như sau:

```js
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "./index.css"
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import { store } from "./redux/configStore.js"

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)
```

- Import Provider (thư viện) và "store" vừa tạo tại `configStore.js`.
- Thêm tag **Provider** với giá trị **store** bọc ngoài cùng.

> Tham khảo tại: https://redux-toolkit.js.org/introduction/getting-started

## Axios

1. Sử dụng câu lệnh tải package:

```bash
npm i axios
```

2. **(Ví dụ)** Dưới đây là mẫu khi sử dụng axios với useEffect:

```js
import axios from "axios"
import { useEffect } from "react"

const DemoAxios = () => {
  useEffect(() => {
    axios({
      method: "GET",
      url: `https://example.api/api/Demo/getbyid?id=${id}`,
    })
      .then((res) => {
        setShoe(res.data.content)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [id])

  return <div>DemoAxios</div>
}

export default DemoAxios
```

> Tham khảo tại: https://www.npmjs.com/package/axios

## Formik Yup

1. Sử dụng câu lệnh tải các packages:

```bash
npm install formik yup
```

2. **(Ví dụ)** Dưới đây là mẫu dùng Formik Yup tại 1 component:

```js
import React from "react"
import { useFormik } from "formik"
import * as Yup from "yup"

const SignupForm = () => {
  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
        confirmPassword: "",
      },
      validationSchema: Yup.object({
        email: Yup.string()
          .email("Địa chỉ email không hợp lệ")
          .required("Bắt buộc nhập email"),
        password: Yup.string()
          .min(6, "Mật khẩu phải có ít nhất 6 ký tự")
          .required("Bắt buộc nhập mật khẩu"),
        confirmPassword: Yup.string()
          .oneOf([Yup.ref("password"), null], "Mật khẩu không khớp")
          .required("Bắt buộc xác nhận mật khẩu"),
      }),
      onSubmit: (values) => {
        alert(JSON.stringify(values, null, 2))
      },
    })

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email</label>
        <input
          name="email"
          type="email"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
        />
        {touched.email && errors.email ? <div>{errors.email}</div> : null}
      </div>
      <div>
        <label>Mật khẩu</label>
        <input
          name="password"
          type="password"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.password}
        />
        {touched.password && errors.password ? (
          <div>{errors.password}</div>
        ) : null}
      </div>
      <div>
        <label>Xác nhận mật khẩu</label>
        <input
          name="confirmPassword"
          type="password"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.confirmPassword}
        />
        {touched.confirmPassword && errors.confirmPassword ? (
          <div>{errors.confirmPassword}</div>
        ) : null}
      </div>
      <button type="submit">Đăng ký</button>
    </form>
  )
}

export default SignupForm
```

> Tham khảo tại: https://formik.org/docs/overview & https://github.com/jquense/yup

## Ant Design

1. Sử dụng câu lệnh tải package:

```bash
npm install antd
```

2. Sử dụng thử 1 component UI của Ant Design tại `./src/App.jsx`:

```js
import { DatePicker } from "antd"

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <DatePicker />
    </>
  )
}

export default App
```

> Tham khảo tại: https://ant.design/docs/react/introduce

## Fontawesome

1. Sử dụng lần lượt các câu lệnh sau để tải package bộ icon:

   - SVG Core:

     ```bash
     npm i --save @fortawesome/fontawesome-svg-core
     ```

   - Free SVG Icon Package:

     ```bash
     npm i --save @fortawesome/free-solid-svg-icons
     npm i --save @fortawesome/free-regular-svg-icons
     npm i --save @fortawesome/free-brands-svg-icons
     ```

   - React Component:

     ```bash
     npm i --save @fortawesome/react-fontawesome@latest
     ```

2. Sử dụng thử icon của Fontawesome tại `./src/App.jsx`:

```js
import { DatePicker } from "antd"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBlog } from "@fortawesome/free-solid-svg-icons"

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <DatePicker />
      <FontAwesomeIcon icon={faBlog} />
    </>
  )
}

export default App
```

- Chọn 1 icon từ trang https://fontawesome.com/search => Click chọn vào icon, chọn Tab **"REACT"** và chọn Option **"Individual Import"**.
- Copy đoạn code. Ví dụ `<FontAwesomeIcon icon={faBlog} />.`.
- Tiến hành import **"FontAwesomeIcon"** và phần icon vừa chọn (Ví dụ "faBlog"). Có thể tuỳ chọn import dạng icon là solid hoặc brands hoặc regular từ bộ type đã tải.

> Tham khảo tại: https://docs.fontawesome.com/web/use-with/react/

## Lottie React

1. Sử dụng câu lệnh để tải package:

```bash
npm i lottie-react
```

2. Truy cập trang [**LottieFiles**](https://lottiefiles.com/free-animations/react) để chọn các animation. Sau đó tải animation dưới dạng tệp JSON (.json).

3. Lưu trữ tệp animation tại thư mục `./src/assets/animation`. Ví dụ `./src/assets/animation/reactAnimation.json`

4. Sử dụng thử ở component `./src/App.jsx`

```js
import { DatePicker } from "antd"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBlog } from "@fortawesome/free-solid-svg-icons"
import reactAnimation from "./assets/animation/reactAnimation.json"
import Lottie from "lottie-react"

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <DatePicker />
      <FontAwesomeIcon icon={faBlog} />
      <Lottie
        animationData={reactAnimation}
        loops
        style={{ width: "100px", height: "100px" }}
      />
    </>
  )
}

export default App
```

- Import animation được thêm ở bước trước và import thư viện Lottie.
- Tạo tag Lottie với các giá trị thuộc tính cơ bản như animationData - loops - style.

> Tham khảo tại: https://www.npmjs.com/package/lottie-react

## React Toastify

1. Sử dụng câu lệnh tải package:

```bash
npm i react-toastify
```

2. Sử dụng thử phần noti của Toastify tại component `App.jsx`:

   ```js
   import { DatePicker } from "antd"
   import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
   import { faBlog } from "@fortawesome/free-solid-svg-icons"
   import reactAnimation from "./assets/animation/reactAnimation.json"
   import Lottie from "lottie-react"
   // Import Toastify
   import { Bounce, ToastContainer, toast } from "react-toastify"
   import "react-toastify/dist/ReactToastify.css"

   function App() {
     // Manage Toastify
     const notify = () =>
       toast("🦄 Wow so easy!", {
         position: "top-right",
         autoClose: 5000,
         hideProgressBar: false,
         closeOnClick: true,
         pauseOnHover: true,
         draggable: true,
         progress: undefined,
         theme: "light",
         transition: Bounce,
       })

     return (
       <>
         <h1 className="text-3xl font-bold underline">Hello world!</h1>
         <DatePicker />
         <FontAwesomeIcon icon={faBlog} />
         <Lottie
           animationData={reactAnimation}
           loops
           style={{ width: "100px", height: "100px" }}
         />

         {/* Demo Toastify */}
         <div>
           <button onClick={notify}>Notify!</button>
           <ToastContainer />
         </div>
       </>
     )
   }

   export default App
   ```

> Tham khảo tại: https://fkhadra.github.io/react-toastify/introduction/

## Complete Setup Package Json

- Sau khi hoàn tất các bước trên, tệp `package.json` sẽ có cấu trúc tương đối như sau:

```json
{
  "name": "test-project",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview"
  },
  "dependencies": {
    "@fortawesome/fontawesome-svg-core": "^6.6.0",
    "@fortawesome/free-brands-svg-icons": "^6.6.0",
    "@fortawesome/free-regular-svg-icons": "^6.6.0",
    "@fortawesome/free-solid-svg-icons": "^6.6.0",
    "@fortawesome/react-fontawesome": "^0.2.2",
    "@reduxjs/toolkit": "^2.2.7",
    "antd": "^5.19.4",
    "axios": "^1.7.3",
    "formik": "^2.4.6",
    "lottie-react": "^2.4.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-redux": "^9.1.2",
    "react-router-dom": "^6.26.0",
    "react-toastify": "^10.0.5",
    "sass": "^1.77.8",
    "yup": "^1.4.0"
  },
  "devDependencies": {
    "@types/react": "^18.3.3",
    "@types/react-dom": "^18.3.0",
    "@vitejs/plugin-react": "^4.3.1",
    "autoprefixer": "^10.4.19",
    "eslint": "^8.57.0",
    "eslint-plugin-react": "^7.34.3",
    "eslint-plugin-react-hooks": "^4.6.2",
    "eslint-plugin-react-refresh": "^0.4.7",
    "postcss": "^8.4.40",
    "tailwindcss": "^3.4.7",
    "vite": "^5.3.4"
  }
}
```

- Nếu bạn ok với các Phiên Bản (Version) như trên, bạn có thể copy phần `dependencies`, `devDependencies` vào dự án của bạn. Sau đó chạy lệnh `npm i` để cập nhật các thư viện và package cần thiết.

- Lưu ý: Vẫn phải cập nhật các code Provider hoặc các phần Import đặc trưng của từng package. Chứ KHÔNG phải chỉ tải các **dependencies** này là chạy được. Nhớ check lại từng đoạn Code mẫu bên trên để biết cách SetUp.

- Source Code mẫu mình sẽ để ở Thư Mục `example-project` tại repo này nha!

<hr />

> README này sẽ còn Update thêm! Thấy hay thì liên hệ mình "ting ting" buy me a coffee nhooo ([Facebook Mei nè](https://www.facebook.com/ttvan1242/))

# Yay Happy Coding ❤️
